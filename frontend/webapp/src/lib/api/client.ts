// Fetch wrapper (base URL, token, error handling)
export const apiClient = {
  get: async <T>(url: string): Promise<T> => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`API error: ${res.statusText}`);
    return res.json();
  },
  post: async <T>(url: string, data?: unknown): Promise<T> => {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data ? JSON.stringify(data) : undefined,
    });
    if (!res.ok) throw new Error(`API error: ${res.statusText}`);
    return res.json();
  },
};
