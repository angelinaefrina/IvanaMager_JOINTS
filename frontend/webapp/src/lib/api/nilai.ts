import { apiClient } from "./client";
import type { DaftarNilai } from "./types";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NilaiItem {
  mapel_id: number;
  nilai: number;
}

// ─── Siswa ────────────────────────────────────────────────────────────────────

/** GET /siswa/me/nilai – semua nilai rapor siswa yang sedang login. */
export const daftarNilai = () => apiClient.get<DaftarNilai>("/siswa/me/nilai");

/** PUT /siswa/me/nilai/semester/:semester – simpan/timpa nilai satu semester. */
export const simpanSemester = (semester: number, nilai: NilaiItem[]) =>
  apiClient.put(`/siswa/me/nilai/semester/${semester}`, { nilai });

/** DELETE /siswa/me/nilai/:id – hapus satu entri nilai. */
export const hapusNilai = (id: string) =>
  apiClient.del(`/siswa/me/nilai/${id}`);

// ─── BK ───────────────────────────────────────────────────────────────────────

/** GET /bk/nilai/menunggu – daftar nilai yang menunggu verifikasi BK. */
export const nilaiMenunggu = () => apiClient.get("/bk/nilai/menunggu");

/** GET /bk/siswa/:siswaId/nilai – semua nilai rapor milik satu siswa (untuk BK). */
export const nilaiSiswa = (siswaId: string) =>
  apiClient.get(`/bk/siswa/${siswaId}/nilai`);

/** POST /bk/siswa/:siswaId/nilai/verifikasi – setujui atau tolak nilai siswa. */
export const putuskanNilai = (
  siswaId: string,
  body: { status: "terverifikasi" | "ditolak"; ids?: string[] }
) => apiClient.post(`/bk/siswa/${siswaId}/nilai/verifikasi`, body);

/**
 * GET /bk/nilai/template – unduh template CSV untuk impor nilai.
 * Lewat fetch (bukan <a href>) karena endpoint butuh header Authorization.
 */
export const unduhTemplate = async (params: {
  semester: number;
  tingkat?: number;
}) => {
  const q = new URLSearchParams({
    semester: String(params.semester),
    ...(params.tingkat ? { tingkat: String(params.tingkat) } : {}),
  });
  const blob = await apiClient.getBlob(`/bk/nilai/template?${q}`);
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `template-nilai-semester-${params.semester}.csv`;
  a.click();
  URL.revokeObjectURL(url);
};

/** POST /bk/nilai/impor – impor nilai dari CSV. */
export const imporNilai = (semester: number, csv: string) =>
  apiClient.post("/bk/nilai/impor", { semester, csv });

export const nilaiApi = {
  daftarNilai,
  simpanSemester,
  hapusNilai,
  nilaiMenunggu,
  nilaiSiswa,
  putuskanNilai,
  unduhTemplate,
  imporNilai,
};

