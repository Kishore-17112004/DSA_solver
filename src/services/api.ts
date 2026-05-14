const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000/api";

export async function fetchFromAPI<T>(path: string): Promise<T> {
  const url = `${API_BASE_URL}${path}`;
  const method = "GET";
  const response = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
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
