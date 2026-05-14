const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000/api";

export async function fetchFromAPI<T>(path: string): Promise<T> {
  return requestFromAPI<T>(path);
}

export async function requestFromAPI<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const url = `${API_BASE_URL}${path}`;
  const method = options.method ?? "GET";
  const response = await fetch(url, {
    ...options,
    method,
    headers: { "Content-Type": "application/json", ...(options.headers ?? {}) },
    cache: "no-store",
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(
      `API request failed (${method} ${url}): ${response.status} ${response.statusText}${body ? ` - ${body}` : ""}`,
    );
  }

  return response.json() as Promise<T>;
}
