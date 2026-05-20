export type ApiPortfolioProject = {
  id: number | string;
  title: string;
  short_description: string;
  full_description?: string;
  category: string;
  image_url?: string;
  project_url?: string;
  github_url?: string;
  order?: number;
  created_at?: string;
  updated_at?: string;
};

export type ApiContactInfo = {
  phone: string;
  phone_href?: string;
  instagram: string;
  instagram_url?: string;
  telegram: string;
  telegram_url?: string;
  email?: string;
  address?: string;
  updated_at?: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "";

async function fetchApi<T>(path: string): Promise<T> {
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not configured.");
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}.`);
  }

  return response.json() as Promise<T>;
}

export function getProjects() {
  return fetchApi<ApiPortfolioProject[]>("/api/projects/");
}

export function getContactInfo() {
  return fetchApi<ApiContactInfo>("/api/contact-info/");
}
