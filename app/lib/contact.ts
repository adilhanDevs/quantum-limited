export type ContactSource = "home" | "services" | "contact";

export type HomeContactSubmission = {
  source: "home";
  name: string;
  email: string;
  service: string;
  requirements: string;
};

export type ServicesContactSubmission = {
  source: "services";
  email: string;
};

export type PageContactSubmission = {
  source: "contact";
  name: string;
  email: string;
  phone?: string;
  service: string;
  projectName: string;
  scope: string;
  priority: string;
  repo?: string;
};

export type ContactSubmissionRequest =
  | HomeContactSubmission
  | ServicesContactSubmission
  | PageContactSubmission;

export type ContactApiSuccess = {
  ok: true;
};

export type ContactApiErrorCode =
  | "INVALID_REQUEST"
  | "NOT_CONFIGURED"
  | "SEND_FAILED";

export type ContactApiError = {
  ok: false;
  errorCode: ContactApiErrorCode;
};

export type ContactApiResponse = ContactApiSuccess | ContactApiError;

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
