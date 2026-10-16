import { apiClient } from "./client";

// ─── Kode BK ─────────────────────────────────────────────────────────────────

/** POST /bk/kode – buat kode baru untuk siswa bergabung ke sekolah. */
export const buatKode = (data?: { berlaku_sampai?: string | null }) =>
  apiClient.post("/bk/kode", data ?? {});

/** GET /bk/kode – daftar semua kode milik BK yang login. */
export const daftarKode = () => apiClient.get("/bk/kode");

/** PATCH /bk/kode/:id – aktifkan/nonaktifkan atau perpanjang masa kode. */
export const ubahKode = (
  id: string,
  fields: { aktif?: boolean; berlaku_sampai?: string | null }
) => apiClient.patch(`/bk/kode/${id}`, fields);

// ─── Nilai Rapor (BK) ─────────────────────────────────────────────────────────
// Endpoint nilai di-re-export dari nilai.ts agar satu file per domain tetap clean.

export const bkApi = {
  buatKode,
  daftarKode,
  ubahKode,
};

