export type ContactSource =
  | "home"
  | "services"
  | "contact"
  | "quick_request";

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

export type QuickRequestSubmission = {
  source: "quick_request";
  name: string;
  phone: string;
  projectName: string;
  scope: string;
  entryPoint?: "header" | "contact";
};

export type ContactSubmissionRequest =
  | HomeContactSubmission
  | ServicesContactSubmission
  | PageContactSubmission
  | QuickRequestSubmission;

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
