/**
 * Shape response backend (isi `data` setelah dibuka oleh client.ts).
 * Selaraskan dengan select() di backend/src/models bila kolomnya berubah.
 */

export type Peran = "siswa" | "bk";
export type TipeRiasec = "R" | "I" | "A" | "S" | "E" | "C";
export type StatusVerifikasi = "menunggu" | "terverifikasi" | "ditolak";
export type SumberTarget = "rekomendasi" | "katalog" | "eksplorasi_karir";

export interface Sekolah {
  id: string;
  nama: string;
  npsn: string | null;
  kota: string | null;
}

/** GET /me */
export interface ProfilSaya {
  id: string;
  peran: Peran;
  nama: string | null;
  sekolah_id: string | null;
  sekolah: Sekolah | null;
}

export interface Mapel {
  id: number;
  kode: string;
  nama: string;
}

export interface BidangKarir {
  id: number;
  kode: string;
  nama: string;
}

export interface TargetKarir {
  id: string;
  teks_bebas: string | null;
  sumber: SumberTarget;
  created_at: string;
  karir: { id: string; nama: string; bidang_karir_id: number | null } | null;
}

export interface TargetProdi {
  id: string;
  is_utama: boolean;
  sumber: SumberTarget;
  created_at: string;
  prodi: {
    id: string;
    nama: string;
    kode_riasec: string | null;
    jenis_pendidikan: "akademik" | "vokasi";
    bidang_studi: { id: number; kode: string; nama: string } | null;
  } | null;
}

/** GET /siswa/me */
export interface SiswaSaya {
  profil: { id: string; nama: string | null; sekolah: Sekolah | null };
  /** null = belum pernah onboarding */
  siswa: {
    id: string;
    tingkat: number | null;
    rombel: string | null;
    peminatan: string | null;
    angkatan: number | null;
    onboarding_selesai: boolean;
  } | null;
  preferensi: Record<string, unknown> | null;
  mapel: { mapel: Mapel }[];
  mapel_favorit: { mapel: Mapel }[];
  bidang_karir: { bidang_karir: BidangKarir }[];
  target_karir: TargetKarir[];
  kelengkapan: {
    lengkap: boolean;
    kurang: ("nama" | "tingkat" | "peminatan" | "sekolah")[];
  };
}

/** GET /asesmen/instrumen */
export interface Instrumen {
  riasec: { id: number; pernyataan: string; urutan: number }[];
  kemampuan: { id: number; pernyataan: string; urutan: number }[];
  skala: { min: number; maks: number };
}

/** GET /siswa/me/asesmen/terakhir (null bila belum pernah tes) */
export interface HasilAsesmen {
  asesmen_id: string;
  selesai_at: string;
  /** Rata-rata skor 1–5 per tipe */
  riasec: Partial<Record<TipeRiasec, number>> | null;
  kode_holland: string | null;
  kemampuan: Record<string, number> | null;
  semester: number | null;
}

export interface NilaiRapor {
  id: string;
  semester: number;
  nilai: number;
  sumber: string;
  status: StatusVerifikasi;
  diverifikasi_at: string | null;
  created_at: string;
  updated_at: string;
  mapel: Mapel | null;
}

/** GET /siswa/me/nilai */
export interface DaftarNilai {
  semester_maks: number | null;
  nilai: NilaiRapor[];
}

/** GET /siswa/me/target */
export interface DaftarTarget {
  karir: TargetKarir[];
  prodi: TargetProdi[];
}

/** Response list katalog berpaginasi */
export interface Halaman<T> {
  items: T[];
  total: number;
  limit: number;
  offset: number;
}

// ─── Katalog (GET /katalog/...) ──────────────────────────────────────────────

export type JenisPendidikan = "akademik" | "vokasi";

export interface BidangStudi {
  id: number;
  kode: string;
  nama: string;
  deskripsi?: string | null;
}

/** Item GET /katalog/prodi */
export interface ProdiRingkas {
  id: string;
  nama: string;
  kode_riasec: string | null;
  jenis_pendidikan: JenisPendidikan[];
  sumber_url: string | null;
  catatan_sumber: string | null;
  bidang_studi: { id: number; kode: string; nama: string } | null;
}

/** Item GET /katalog/karir */
export interface KarirRingkas {
  id: string;
  nama: string;
  kode_riasec: string | null;
  is_trending: boolean;
  catatan_sumber: string | null;
  bidang_karir: BidangKarir | null;
}

/** Mapel pendukung prodi/karir; nilai_terakhir_siswa hanya ada untuk peran siswa. */
export interface MapelPendukung {
  mapel: Mapel;
  bobot: number;
  nilai_terakhir_siswa?: number | null;
}

/** GET /katalog/prodi/:id */
export interface DetailProdi extends ProdiRingkas {
  deskripsi: string | null;
  mapel_pendukung: MapelPendukung[];
  contoh_karir: { id: string; nama: string; kode_riasec: string | null; is_trending: boolean }[];
  perguruan_tinggi: {
    id: string;
    nama: string;
    jenis: JenisPendidikan;
    kota: string | null;
    situs_url: string | null;
    jenjang: string;
    sumber_url: string | null;
  }[];
  status_target?: { tersimpan: boolean; target_id: string | null; is_utama: boolean };
}

/** GET /katalog/karir/:id */
export interface DetailKarir extends KarirRingkas {
  deskripsi: string | null;
  sumber_url: string | null;
  prodi_relevan: Omit<ProdiRingkas, "sumber_url" | "catatan_sumber">[];
  mapel_pendukung: MapelPendukung[];
  status_target?: { tersimpan: boolean; target_id: string | null };
}
