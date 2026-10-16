import { apiClient } from "./client";

// ─── Types ────────────────────────────────────────────────────────────────────

export type JenisPendidikan = "akademik" | "vokasi";

export interface ProdiFilter {
  q?: string;
  bidang_studi?: string;
  jenis?: JenisPendidikan;
  limit?: number;
  offset?: number;
}

export interface KarirFilter {
  q?: string;
  bidang_karir?: string;
  trending?: boolean;
  limit?: number;
  offset?: number;
}

// ─── API calls ────────────────────────────────────────────────────────────────

/** GET /katalog/bidang-studi – daftar semua bidang studi. */
export const daftarBidangStudi = () =>
  apiClient.get("/katalog/bidang-studi");

/** GET /katalog/prodi – daftar program studi dengan filter & paginasi. */
export const daftarProdi = (filter: ProdiFilter = {}) => {
  const params = new URLSearchParams();
  if (filter.q) params.set("q", filter.q);
  if (filter.bidang_studi) params.set("bidang_studi", filter.bidang_studi);
  if (filter.jenis) params.set("jenis", filter.jenis);
  if (filter.limit !== undefined) params.set("limit", String(filter.limit));
  if (filter.offset !== undefined) params.set("offset", String(filter.offset));
  const qs = params.toString();
  return apiClient.get(`/katalog/prodi${qs ? `?${qs}` : ""}`);
};

/** GET /katalog/prodi/:id – detail satu program studi. */
export const detailProdi = (id: string) =>
  apiClient.get(`/katalog/prodi/${id}`);

/** GET /katalog/karir – daftar karir dengan filter & paginasi. */
export const daftarKarir = (filter: KarirFilter = {}) => {
  const params = new URLSearchParams();
  if (filter.q) params.set("q", filter.q);
  if (filter.bidang_karir) params.set("bidang_karir", filter.bidang_karir);
  if (filter.trending !== undefined)
    params.set("trending", filter.trending ? "true" : "false");
  if (filter.limit !== undefined) params.set("limit", String(filter.limit));
  if (filter.offset !== undefined) params.set("offset", String(filter.offset));
  const qs = params.toString();
  return apiClient.get(`/katalog/karir${qs ? `?${qs}` : ""}`);
};

/** GET /katalog/karir/:id – detail satu karir. */
export const detailKarir = (id: string) =>
  apiClient.get(`/katalog/karir/${id}`);

export const katalogApi = {
  daftarBidangStudi,
  daftarProdi,
  detailProdi,
  daftarKarir,
  detailKarir,
};

