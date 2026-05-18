import { NextResponse } from "next/server";
import {
  type ContactApiErrorCode,
  type ContactSubmissionRequest,
  isValidEmail,
} from "../../lib/contact";

export const runtime = "nodejs";

const DEFAULT_TO_EMAIL = "Adilhansatymkulov40@gmail.com";
const RESEND_API_URL = "https://api.resend.com/emails";

type ValidationResult =
  | { ok: true; data: ContactSubmissionRequest }
  | { ok: false; errorCode: ContactApiErrorCode };

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return errorResponse("INVALID_REQUEST", 400);
  }

  const validation = validateSubmission(body);
  if (!validation.ok) {
    return errorResponse(validation.errorCode, 400);
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !contactFromEmail) {
    return errorResponse("NOT_CONFIGURED", 503);
  }

  const emailContent = buildEmail(validation.data);

  try {
    const resendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: contactFromEmail,
        to: contactToEmail,
        reply_to: emailContent.replyTo,
        subject: emailContent.subject,
        text: emailContent.text,
        html: emailContent.html,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend API error:", errorText);
      return errorResponse("SEND_FAILED", 502);
    }
  } catch (error) {
    console.error("Contact email send failed:", error);
    return errorResponse("SEND_FAILED", 502);
  }

  return NextResponse.json({ ok: true });
}

function errorResponse(errorCode: ContactApiErrorCode, status: number) {
  return NextResponse.json({ ok: false, errorCode }, { status });
}

function validateSubmission(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { ok: false, errorCode: "INVALID_REQUEST" };
  }

  const source = getString(body, "source");

  if (source === "home") {
    const name = getString(body, "name");
    const email = getString(body, "email");
    const service = getString(body, "service");
    const requirements = getString(body, "requirements");

    if (
      name.length < 2 ||
      !isValidEmail(email) ||
      service.length < 1 ||
      requirements.length < 9
    ) {
      return { ok: false, errorCode: "INVALID_REQUEST" };
    }

    return {
      ok: true,
      data: {
        source,
        name,
        email,
        service,
        requirements,
      },
    };
  }

  if (source === "services") {
    const email = getString(body, "email");

    if (!isValidEmail(email)) {
      return { ok: false, errorCode: "INVALID_REQUEST" };
    }

    return {
      ok: true,
      data: {
        source,
        email,
      },
    };
  }

  if (source === "contact") {
    const name = getString(body, "name");
    const email = getString(body, "email");
    const phone = getOptionalString(body, "phone");
    const service = getString(body, "service");
    const projectName = getString(body, "projectName");
    const scope = getString(body, "scope");
    const priority = getString(body, "priority");
    const repo = getOptionalString(body, "repo");

    if (
      name.length < 2 ||
      !isValidEmail(email) ||
      service.length < 1 ||
      projectName.length < 3 ||
      scope.length < 9 ||
      priority.length < 1
    ) {
      return { ok: false, errorCode: "INVALID_REQUEST" };
    }

    return {
      ok: true,
      data: {
        source,
        name,
        email,
        phone,
        service,
        projectName,
        scope,
        priority,
        repo,
      },
    };
  }

  if (source === "quick_request") {
    const name = getString(body, "name");
    const phone = getString(body, "phone");
    const projectName = getString(body, "projectName");
    const scope = getString(body, "scope");
    const entryPoint = getString(body, "entryPoint");

    if (
      name.length < 2 ||
      phone.length < 2 ||
      projectName.length < 3 ||
      scope.length < 9
    ) {
      return { ok: false, errorCode: "INVALID_REQUEST" };
    }

    return {
      ok: true,
      data: {
        source,
        name,
        phone,
        projectName,
        scope,
        entryPoint: entryPoint === "contact" ? "contact" : "header",
      },
    };
  }

  return { ok: false, errorCode: "INVALID_REQUEST" };
}

function buildEmail(submission: ContactSubmissionRequest) {
  if (submission.source === "home") {
    const lines = [
      "Source: Home page",
      `Name: ${submission.name}`,
      `Email: ${submission.email}`,
      `Service: ${submission.service}`,
      "",
      "Project goals:",
      submission.requirements,
    ];

    return {
      subject: `New home inquiry: ${submission.name}`,
      replyTo: submission.email,
      text: lines.join("\n"),
      html: toHtml(lines),
    };
  }

  if (submission.source === "services") {
    const lines = [
      "Source: Services page",
      `Email: ${submission.email}`,
      "",
      "Message:",
      "The visitor requested a follow-up from the services page.",
    ];

    return {
      subject: "New services inquiry",
      replyTo: submission.email,
      text: lines.join("\n"),
      html: toHtml(lines),
    };
  }

  if (submission.source === "quick_request") {
    const sourceLabel =
      submission.entryPoint === "contact"
        ? "Contact page simplified request"
        : "Header quick request";
    const lines = [
      `Source: ${sourceLabel}`,
      `Name: ${submission.name}`,
      `Phone / Telegram: ${submission.phone}`,
      `Project name: ${submission.projectName}`,
      "",
      "Goals and current problem:",
      submission.scope,
    ];

    return {
      subject:
        submission.entryPoint === "contact"
          ? `New contact request: ${submission.projectName}`
          : `New quick request: ${submission.projectName}`,
      replyTo: undefined,
      text: lines.join("\n"),
      html: toHtml(lines),
    };
  }

  const lines = [
    "Source: Contact page",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    submission.phone ? `Phone / Telegram: ${submission.phone}` : "Phone / Telegram: not provided",
    `Service track: ${submission.service}`,
    `Project type: ${submission.projectName}`,
    `Timeline: ${submission.priority}`,
    submission.repo ? `Relevant links: ${submission.repo}` : "Relevant links: none provided",
    "",
    "Goals and current problem:",
    submission.scope,
  ];

  return {
    subject: `New contact inquiry: ${submission.projectName}`,
    replyTo: submission.email,
    text: lines.join("\n"),
    html: toHtml(lines),
  };
}

function toHtml(lines: string[]) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      ${lines
        .map((line) =>
          line === ""
            ? "<div style=\"height: 12px\"></div>"
            : `<p style="margin: 0 0 12px;">${escapeHtml(line)}</p>`
        )
        .join("")}
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getString(value: unknown, key: string) {
  if (!value || typeof value !== "object") return "";
  const field = (value as Record<string, unknown>)[key];
  return typeof field === "string" ? field.trim() : "";
}

function getOptionalString(value: unknown, key: string) {
  const field = getString(value, key);
  return field.length > 0 ? field : undefined;
}
