"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import "../../../styles/rekomendasi.css";

import {
  IconCompass,
  IconBell,
  IconSearch,
  IconUser,
  IconMessage,
  IconCheckCircle,
  IconCalendar,
  IconBookOpen,
} from "../../../components/siswa/Icons";
import { detailProdi, semuaProdi } from "../../../lib/api/katalog";
import { daftarNilai } from "../../../lib/api/nilai";
import {
  getTarget,
  hapusTargetProdi,
  jadikanTargetUtama,
  tambahTargetProdi,
  terakhirAsesmen,
} from "../../../lib/api/rekomendasi";
import { getMe } from "../../../lib/api/siswa";
import type {
  DaftarNilai,
  DaftarTarget,
  DetailProdi,
  HasilAsesmen,
  JenisPendidikan,
  ProdiRingkas,
  SiswaSaya,
} from "../../../lib/api/types";
import {
  infoKelas,
  labelJenis,
  pesanError,
  skorKecocokan,
  skorMapelPendukung,
} from "../../../lib/riasec";

// ─── Additional SVG icons specific to rekomendasi page ──────────────────────

type LocalIconProps = { size?: number; color?: string; className?: string };

const IconSparkle = ({ size = 15, color = "#006190", className }: LocalIconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M6.5 2L7.7 5.8L11.5 7L7.7 8.2L6.5 12L5.3 8.2L1.5 7L5.3 5.8L6.5 2Z" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M12.5 9.5L13.1 11.4L15 12L13.1 12.6L12.5 14.5L11.9 12.6L10 12L11.9 11.4L12.5 9.5Z" fill={color} />
  </svg>
);

const IconFilter = ({ size = 12, color = "#3F4850", className }: LocalIconProps) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M1 3H11M3 6H9M5 9H7" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const IconEye = ({ size = 16, color = "#0B1C30", className }: LocalIconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M1.5 8C1.5 8 4 3.5 8 3.5C12 3.5 14.5 8 14.5 8C14.5 8 12 12.5 8 12.5C4 12.5 1.5 8 1.5 8Z" stroke={color} strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="8" cy="8" r="2" stroke={color} strokeWidth="1.4" />
  </svg>
);

const IconBookmark = ({ size = 14, color = "#FFFFFF", className }: LocalIconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M3 1.5H11V12.5L7 9.8L3 12.5V1.5Z" stroke={color} strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

const IconInfo = ({ size = 13, color = "#7C5400", className }: LocalIconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <circle cx="7" cy="7" r="6" stroke={color} strokeWidth="1.3" />
    <path d="M7 6.5V10" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="7" cy="4.3" r="0.8" fill={color} />
  </svg>
);

const IconBulb = ({ size = 13, color = "#0B1C30", className }: LocalIconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M7 1.5C4.8 1.5 3 3.2 3 5.4C3 6.8 3.7 7.9 4.8 8.6V10H9.2V8.6C10.3 7.9 11 6.8 11 5.4C11 3.2 9.2 1.5 7 1.5Z" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M5.2 12.3H8.8" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const IconScale = ({ size = 18, color = "#0B1C30", className }: LocalIconProps) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M9 2V16M5 16H13M3 5H15" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M3 5L1 10C1 11.1 1.9 12 3 12C4.1 12 5 11.1 5 10L3 5ZM15 5L13 10C13 11.1 13.9 12 15 12C16.1 12 17 11.1 17 10L15 5Z" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
);

const IconBranch = ({ size = 15, color = "#3F4850", className }: LocalIconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <circle cx="3" cy="2.5" r="1.5" stroke={color} strokeWidth="1.3" />
    <circle cx="11" cy="2.5" r="1.5" stroke={color} strokeWidth="1.3" />
    <path d="M3 4V5.5C3 7 4.5 8 7 8.5C9.5 8 11 7 11 5.5V4M7 8.5V13.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const IconBriefcase = ({ size = 13, color = "#006190", className }: LocalIconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <rect x="1" y="4" width="12" height="8.5" rx="1.2" stroke={color} strokeWidth="1.3" />
    <path d="M5 4V2.8C5 2.4 5.4 2 5.8 2H8.2C8.6 2 9 2.4 9 2.8V4" stroke={color} strokeWidth="1.3" />
  </svg>
);

const IconVerified = ({ size = 16, color = "#006190", className }: LocalIconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M8 1L9.8 2.4L12 2.2L12.6 4.4L14.5 5.6L13.7 7.7L14.5 9.8L12.6 11L12 13.2L9.8 13L8 14.5L6.2 13L4 13.2L3.4 11L1.5 9.8L2.3 7.7L1.5 5.6L3.4 4.4L4 2.2L6.2 2.4L8 1Z" stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M5.5 7.8L7.2 9.4L10.5 6" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconChevronDown = ({ size = 10, color = "#3F4850", className }: LocalIconProps) => (
  <svg width={size} height={size} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M2 3.5L5 6.5L8 3.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconSend = ({ size = 14, color = "#006190", className }: LocalIconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <rect x="1" y="2.5" width="12" height="9" rx="1.2" stroke={color} strokeWidth="1.3" />
    <path d="M1.5 3.5L7 7.5L12.5 3.5" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
);

// ─── Types ────────────────────────────────────────────────────────────────────

type Tone = "brand" | "muted" | "amber";
type TabId = "prodi" | "mapel" | "jalur";
type FilterJenis = "all" | JenisPendidikan;

/**
 * SEMENTARA: backend belum punya modul rekomendasi, jadi peringkat dihitung di sini
 * dari kecocokan RIASEC (60%) + rata-rata nilai mapel pendukung (40%).
 */
const BOBOT_RIASEC = 0.6;
const BOBOT_MAPEL = 0.4;
const JUMLAH_UTAMA = 3;
const JUMLAH_CADANGAN = 7;

type Kandidat = {
  prodi: ProdiRingkas;
  riasec: number;
  detail?: DetailProdi;
  /** Rata-rata nilai mapel pendukung (null = belum ada nilai/ detail belum dimuat). */
  mapel: number | null;
  /** % mapel pendukung prodi yang sedang diambil siswa. */
  linearitas: number | null;
  skor: number;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Beranda", href: "/beranda" },
  { label: "Rekomendasi", href: "/rekomendasi", active: true },
  { label: "Eksplorasi Karir", href: "/eksplorasi-karir" },
  { label: "Analisis Keselarasan", href: "/analitik" },
  { label: "Katalog Kampus", href: "/katalog-prodi" },
];

const JENIS_FILTERS: { id: FilterJenis; label: string }[] = [
  { id: "all", label: "Semua Jenis" },
  { id: "akademik", label: "Akademik" },
  { id: "vokasi", label: "Vokasi" },
];

const JALUR_INFO = [
  { id: "SNBP", title: "SNBP — Seleksi Nilai Rapor", desc: "Berbasis rapor semester 1–5 & prestasi." },
  { id: "SNBT", title: "SNBT — Tes Berbasis Komputer", desc: "Berbasis UTBK (TPS, Literasi, Penalaran Matematika). Tidak bergantung rapor." },
  { id: "Mandiri", title: "Mandiri & Kedinasan", desc: "Seleksi mandiri kampus atau tes kedinasan (SKD, kesehatan, kesamaptaan)." },
];

function hitungKandidat(
  prodi: ProdiRingkas,
  kodeSiswa: string,
  detail: DetailProdi | undefined,
  mapelSiswa: Set<number>
): Kandidat {
  const riasec = skorKecocokan(prodi.kode_riasec, kodeSiswa) ?? 0;
  const mapel = detail ? skorMapelPendukung(detail.mapel_pendukung) : null;
  const pendukung = detail?.mapel_pendukung ?? [];
  const linearitas = pendukung.length
    ? Math.round((pendukung.filter((m) => mapelSiswa.has(m.mapel.id)).length / pendukung.length) * 100)
    : null;
  const skor = mapel === null ? riasec : Math.round(riasec * BOBOT_RIASEC + mapel * BOBOT_MAPEL);
  return { prodi, riasec, detail, mapel, linearitas, skor };
}

const labelCocok = (skor: number) =>
  skor >= 90 ? "Sangat Cocok" : skor >= 80 ? "Cocok" : "Cukup Cocok";

const singkatan = (nama: string) =>
  nama
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .map((w) => w[0])
    .join("")
    .slice(0, 4) || nama.slice(0, 3).toUpperCase();

function rataRapor(nilai: DaftarNilai | null) {
  const valid = (nilai?.nilai ?? []).filter((n) => n.status !== "ditolak");
  if (!valid.length) return null;
  return valid.reduce((t, n) => t + Number(n.nilai), 0) / valid.length;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function SiteHeader({ nama, kelas }: { nama: string; kelas: string }) {
  return (
    <header className="rk-header" role="banner">
      <nav className="rk-nav" aria-label="Navigasi utama">
        <a className="rk-brand" href="/beranda" aria-label="ArahMasaDepan - Beranda">
          <span className="rk-brand__icon" aria-hidden="true">
            <IconCompass size={18} color="#FFFFFF" />
          </span>
          <span className="rk-brand__text">
            <span className="rk-brand__name">ArahMasaDepan</span>
            <span className="rk-brand__badge">Siswa SMA &bull; Kurikulum Merdeka</span>
          </span>
        </a>

        <ul className="rk-nav-links" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rk-nav-link${link.active ? " rk-nav-link--active" : ""}`}
                aria-current={link.active ? "page" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="rk-nav-actions">
          <button className="rk-nav-search" type="button" aria-label="Cari jurusan atau karir">
            <IconSearch size={14} color="#3F4850" />
            <span className="rk-nav-search__label">Cari Prodi / Karir</span>
            <span className="rk-nav-search__kbd" aria-label="Pintasan keyboard Command K">&#8984;K</span>
          </button>

          <button className="rk-nav-notif" type="button" aria-label="Notifikasi, ada pesan baru">
            <IconBell size={14} color="#3F4850" />
            <span className="rk-nav-notif__dot" aria-hidden="true" />
          </button>

          <span className="rk-nav-divider" aria-hidden="true" />

          <Link className="rk-nav-user" href="/profil" aria-label={`Menu akun ${nama}`}>
            <span className="rk-nav-user__avatar" aria-hidden="true">
              <IconUser size={12} color="#FFFFFF" />
            </span>
            <span className="rk-nav-user__info">
              <span className="rk-nav-user__name">{nama}</span>
              <span className="rk-nav-user__role">{kelas}</span>
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

// ── Top badge row ─────────────────────────────────────────────────────────────

function TopInfoRow({ me, nilai }: { me: SiswaSaya | null; nilai: DaftarNilai | null }) {
  return (
    <div className="rk-topinfo">
      <span className="rk-topinfo__badge">
        <IconSparkle size={15} color="#006190" />
        Perhitungan Sementara &bull; RIASEC + Nilai Mapel Pendukung
      </span>
      <div className="rk-topinfo__student">
        <span>
          Siswa: <strong>{me?.profil.nama ?? "-"}</strong>
          {me?.profil.sekolah ? ` (${me.profil.sekolah.nama})` : ""}
        </span>
        <span aria-hidden="true">&bull;</span>
        <span className="rk-topinfo__locked">
          <span className="rk-topinfo__locked-dot" aria-hidden="true" />
          {nilai?.semester_maks ? `Rapor s.d. Semester ${nilai.semester_maks}` : "Belum ada nilai rapor"}
        </span>
      </div>
    </div>
  );
}

// ── Hero: title, quick stats, tabs ───────────────────────────────────────────

function HeroCard({
  tab,
  onTabChange,
  kodeSiswa,
  rapor,
  skorTeratas,
  jumlahProdi,
}: {
  tab: TabId;
  onTabChange: (t: TabId) => void;
  kodeSiswa: string | null;
  rapor: number | null;
  skorTeratas: number | null;
  jumlahProdi: number;
}) {
  const tabs: { id: TabId; label: string; icon: React.ReactNode; extra?: React.ReactNode }[] = [
    {
      id: "prodi",
      label: "Rekomendasi Prodi & Karir",
      icon: <IconVerified size={16} color={tab === "prodi" ? "#FFFFFF" : "#3F4850"} />,
      extra: <span className="rk-tab__count">{jumlahProdi} Prodi</span>,
    },
    {
      id: "mapel",
      label: "Paket Mapel Pilihan (Kurikulum Merdeka)",
      icon: <IconBookOpen size={16} color={tab === "mapel" ? "#FFFFFF" : "#3F4850"} />,
    },
    {
      id: "jalur",
      label: "Jenis Jalur Pendidikan",
      icon: <IconBranch size={15} color={tab === "jalur" ? "#FFFFFF" : "#3F4850"} />,
    },
  ];

  return (
    <section className="rk-hero" aria-labelledby="rk-hero-title">
      <div className="rk-hero__blob" aria-hidden="true" />

      <div className="rk-hero__inner">
        <div className="rk-hero__text">
          <span className="rk-hero__eyebrow">Dashboard Analisis Multi-Kriteria</span>
          <h1 className="rk-hero__title" id="rk-hero-title">
            Pusat Rekomendasi &amp; Penyelarasan Masa Depan
          </h1>
          <p className="rk-hero__desc">
            Menggabungkan hasil tes minat RIASEC Holland dengan nilai rapor pada mapel
            pendukung tiap program studi untuk menyusun urutan prodi yang paling selaras
            denganmu.
          </p>
        </div>

        <dl className="rk-stats">
          <div className="rk-stat">
            <dt className="rk-stat__label">Tipe RIASEC</dt>
            <dd className="rk-stat__value rk-stat__value--brand">
              {kodeSiswa ? [...kodeSiswa].join(" - ") : "–"}
            </dd>
          </div>
          <div className="rk-stat">
            <dt className="rk-stat__label">Rata Rapor</dt>
            <dd className="rk-stat__value">{rapor !== null ? rapor.toFixed(2) : "–"}</dd>
          </div>
          <div className="rk-stat rk-stat--highlight">
            <dt className="rk-stat__label rk-stat__label--muted">Skor Keselarasan</dt>
            <dd className="rk-stat__value rk-stat__value--strong">
              {skorTeratas !== null ? `${skorTeratas}% ${labelCocok(skorTeratas)}` : "–"}
            </dd>
          </div>
        </dl>
      </div>

      <div className="rk-tabs" role="tablist" aria-label="Kategori rekomendasi">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`rk-tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls={`rk-panel-${t.id}`}
            className={`rk-tab${tab === t.id ? " rk-tab--active" : ""}`}
            onClick={() => onTabChange(t.id)}
          >
            {t.icon}
            <span>{t.label}</span>
            {t.extra}
          </button>
        ))}
      </div>
    </section>
  );
}

// ── Filter toolbar ───────────────────────────────────────────────────────────

function Segmented<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="rk-segmented" role="group" aria-label={label}>
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          aria-pressed={value === o.id}
          className={`rk-segmented__btn${value === o.id ? " rk-segmented__btn--active" : ""}`}
          onClick={() => onChange(o.id)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function FilterToolbar({ jenis, onChange }: { jenis: FilterJenis; onChange: (j: FilterJenis) => void }) {
  return (
    <div className="rk-toolbar" role="toolbar" aria-label="Filter rekomendasi">
      <div className="rk-toolbar__left">
        <span className="rk-toolbar__label">
          <IconFilter size={12} color="#3F4850" />
          Filter:
        </span>
        <Segmented
          label="Filter jenis pendidikan"
          options={JENIS_FILTERS}
          value={jenis}
          onChange={onChange}
        />
      </div>

      <div className="rk-toolbar__right">
        <span className="rk-toolbar__toggle-label">
          Bobot: RIASEC {BOBOT_RIASEC * 100}% &bull; Nilai Mapel {BOBOT_MAPEL * 100}%
        </span>
      </div>
    </div>
  );
}

// ── Recommendation card ──────────────────────────────────────────────────────

function ScoreBar({ value, tone }: { value: number; tone: "brand" | "blue" | "amber" | "muted" }) {
  return (
    <div className="rk-bar" role="presentation">
      <div className={`rk-bar__fill rk-bar__fill--${tone}`} style={{ width: `${value}%` }} />
    </div>
  );
}

function RecommendationCard({
  k,
  rank,
  kodeSiswa,
  active,
  busy,
  onPrimary,
}: {
  k: Kandidat;
  rank: number;
  kodeSiswa: string;
  active: boolean;
  busy: boolean;
  onPrimary: () => void;
}) {
  const featured = rank === 0;
  const isVokasi = k.prodi.jenis_pendidikan.includes("vokasi");
  const tone: Tone = isVokasi ? "amber" : featured ? "brand" : "muted";
  const metricTones: ("brand" | "blue" | "amber" | "muted")[] =
    tone === "amber" ? ["amber", "amber"] : featured ? ["brand", "blue"] : ["muted", "muted"];

  const metrics = [
    {
      label: "Kesesuaian Minat RIASEC",
      value: k.riasec,
      note: `Kode prodi ${k.prodi.kode_riasec} vs profilmu ${kodeSiswa}`,
    },
    {
      label: "Nilai Mapel Pendukung",
      value: k.mapel,
      note: k.detail
        ? k.detail.mapel_pendukung
            .filter((m) => m.nilai_terakhir_siswa != null)
            .map((m) => `${m.mapel.nama} (${Number(m.nilai_terakhir_siswa)})`)
            .join(", ") || "Belum ada nilai pada mapel pendukung"
        : "Memuat...",
    },
  ];

  const careers = k.detail?.contoh_karir.slice(0, 3) ?? [];
  const campuses = k.detail?.perguruan_tinggi.slice(0, 4) ?? [];
  const primaryLabel = featured
    ? active
      ? "Target Utama Tersimpan"
      : "Jadikan Target Utama"
    : active
      ? "Tersimpan"
      : "Simpan Pilihan";

  return (
    <article
      className={`rk-card rk-card--${tone}${featured ? " rk-card--featured" : ""}`}
      aria-labelledby={`rk-card-${k.prodi.id}`}
    >
      {/* Banner */}
      <div className="rk-card__banner">
        <div className="rk-card__badges">
          <span className={`rk-rank rk-rank--${tone}`}>
            #{rank + 1} {featured ? "Rekomendasi Terkuat" : "Rekomendasi Alternatif"}
          </span>
          <span className="rk-card__tag">{k.prodi.bidang_studi?.nama ?? "-"}</span>
        </div>
        <span className={`rk-match rk-match--${tone === "amber" ? "amber" : "brand"}`}>
          <IconVerified size={16} color={tone === "amber" ? "#7C5400" : "#006190"} />
          {k.skor}% {labelCocok(k.skor)}
        </span>
      </div>

      {/* Body: info + score panel */}
      <div className="rk-card__body">
        <div className="rk-card__info">
          <div className="rk-card__meta">
            <IconBookOpen size={14} color={tone === "amber" ? "#7C5400" : "#006190"} />
            <span>{k.prodi.bidang_studi?.nama ?? "-"}</span>
            <span aria-hidden="true">&bull;</span>
            <span>Pendidikan {labelJenis(k.prodi.jenis_pendidikan)}</span>
          </div>
          <h2 className="rk-card__title" id={`rk-card-${k.prodi.id}`}>{k.prodi.nama}</h2>
          {k.detail?.deskripsi && <p className="rk-card__desc">{k.detail.deskripsi}</p>}

          {careers.length > 0 && (
            <div className="rk-careers">
              {featured && <span className="rk-careers__heading">Contoh Karir dari Prodi Ini:</span>}
              <ul className="rk-careers__list" role="list">
                {careers.map((c) => (
                  <li key={c.id} className="rk-career">
                    <IconBriefcase size={13} color="#006190" />
                    {c.nama}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="rk-score">
          <div className="rk-score__metrics">
            {metrics.map((m, idx) => (
              <div key={m.label} className="rk-metric">
                <div className="rk-metric__head">
                  <span className="rk-metric__label">{m.label}</span>
                  <span className={`rk-metric__value${featured && idx === 1 ? " rk-metric__value--blue" : ""}`}>
                    {m.value !== null ? `${m.value}/100` : "–"}
                  </span>
                </div>
                <ScoreBar value={m.value ?? 0} tone={metricTones[idx] ?? "muted"} />
                {m.note && <span className="rk-metric__note">{m.note}</span>}
              </div>
            ))}
          </div>

          <dl className="rk-facts">
            <div className="rk-fact">
              <dt>Kode RIASEC Prodi:</dt>
              <dd>{k.prodi.kode_riasec}</dd>
            </div>
            {k.detail && (
              <div className="rk-fact">
                <dt>Kampus Terdata:</dt>
                <dd>{k.detail.perguruan_tinggi.length} kampus</dd>
              </div>
            )}
          </dl>
        </div>
      </div>

      {/* Campuses */}
      {campuses.length > 0 && (
        <div className="rk-campuses">
          <span className="rk-campuses__heading">Perguruan Tinggi yang Membuka Prodi Ini:</span>
          <ul className="rk-campuses__list" role="list">
            {campuses.map((c) => (
              <li key={`${c.id}-${c.jenjang}`} className="rk-campus">
                <span className="rk-campus__abbr" aria-hidden="true">{singkatan(c.nama)}</span>
                <span className="rk-campus__text">
                  <span className="rk-campus__name">{c.nama}</span>
                  <span className="rk-campus__cap">
                    {c.jenjang}
                    {c.kota ? ` • ${c.kota}` : ""}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer */}
      <div className={`rk-card__footer${featured ? " rk-card__footer--featured" : ""}`}>
        {featured && k.linearitas !== null && (
          <span className="rk-card__note">
            <IconInfo size={13} color="#7C5400" />
            {k.linearitas}% mapel pendukung prodi ini sudah kamu ambil
          </span>
        )}
        <div className="rk-card__actions">
          <Link
            href={`/katalog-prodi?q=${encodeURIComponent(k.prodi.nama)}`}
            className={featured ? "rk-btn rk-btn--outline" : "rk-btn rk-btn--light"}
          >
            {featured && <IconEye size={16} color="#0B1C30" />}
            Lihat di Katalog
          </Link>
          <button
            type="button"
            className={`rk-btn ${featured ? "rk-btn--primary" : "rk-btn--soft"}${active ? " rk-btn--active" : ""}`}
            aria-pressed={active}
            disabled={busy}
            onClick={onPrimary}
          >
            {featured && <IconBookmark size={14} color="#FFFFFF" />}
            {busy ? "Menyimpan..." : primaryLabel}
          </button>
        </div>
      </div>
    </article>
  );
}

function CadanganList({ items, offset }: { items: Kandidat[]; offset: number }) {
  return (
    <ul className="rk-cadangan" role="list" aria-label="Pilihan rekomendasi cadangan">
      {items.map((c, idx) => (
        <li key={c.prodi.id} className="rk-cadangan__item">
          <span className="rk-cadangan__rank">#{offset + idx + 1}</span>
          <span className="rk-cadangan__text">
            <span className="rk-cadangan__title">{c.prodi.nama}</span>
            <span className="rk-cadangan__meta">
              {c.prodi.bidang_studi?.nama ?? "-"} &bull; {labelJenis(c.prodi.jenis_pendidikan)} &bull; RIASEC{" "}
              {c.prodi.kode_riasec}
            </span>
          </span>
          <span className="rk-cadangan__match">{c.skor}%</span>
        </li>
      ))}
    </ul>
  );
}

// ── Sidebar cards ────────────────────────────────────────────────────────────

function XaiCard({ k, kodeSiswa }: { k: Kandidat | undefined; kodeSiswa: string }) {
  if (!k) return null;
  const komponen =
    k.mapel === null
      ? [{ label: "Kecocokan RIASEC (100%)", score: `${k.riasec} pt`, dotClass: "rk-dot--blue" }]
      : [
          {
            label: `Nilai Mapel Pendukung (${BOBOT_MAPEL * 100}%)`,
            score: `${(k.mapel * BOBOT_MAPEL).toFixed(1)} pt`,
            dotClass: "rk-dot--brand",
          },
          {
            label: `Kecocokan RIASEC ${kodeSiswa} (${BOBOT_RIASEC * 100}%)`,
            score: `${(k.riasec * BOBOT_RIASEC).toFixed(1)} pt`,
            dotClass: "rk-dot--blue",
          },
        ];

  return (
    <section className="rk-side-card" aria-labelledby="rk-xai-title">
      <div className="rk-side-card__head">
        <span className="rk-side-card__icon" aria-hidden="true">
          <IconSparkle size={16} color="#FFFFFF" />
        </span>
        <div>
          <h2 className="rk-side-card__title" id="rk-xai-title">Kenapa Prodi Ini?</h2>
          <p className="rk-side-card__sub">Transparansi perhitungan skor</p>
        </div>
      </div>
      <p className="rk-side-card__desc">
        Mengapa {k.prodi.nama} berada di posisi teratas rekomendasi kamu? Berikut pembobotannya:
      </p>

      <table className="rk-xai-table">
        <thead>
          <tr>
            <th scope="col">Komponen Penentu</th>
            <th scope="col">Kontribusi Skor</th>
          </tr>
        </thead>
        <tbody>
          {komponen.map((c) => (
            <tr key={c.label}>
              <td>
                <span className={`rk-dot ${c.dotClass}`} aria-hidden="true" />
                {c.label}
              </td>
              <td>{c.score}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Skor Keselarasan</td>
            <td>
              {k.skor}% ({labelCocok(k.skor)})
            </td>
          </tr>
        </tfoot>
      </table>

      <div className="rk-argument">
        <span className="rk-argument__title">
          <IconBulb size={13} color="#0B1C30" />
          Argumen Kesimpulan:
        </span>
        <p className="rk-argument__text">
          Kode RIASEC prodi ini ({k.prodi.kode_riasec}) selaras dengan profil minatmu ({kodeSiswa})
          {k.mapel !== null
            ? `, dan rata-rata nilai terakhirmu pada mapel pendukungnya adalah ${k.mapel}.`
            : ". Nilai mapel pendukung belum ikut dihitung karena belum ada nilai rapor."}{" "}
          Skor ini perhitungan sementara; model rekomendasi resmi belum tersedia.
        </p>
      </div>
    </section>
  );
}

function PaketMapelCard({ me, rekomendasi }: { me: SiswaSaya | null; rekomendasi: Kandidat[] }) {
  const mapel = me?.mapel.map((m) => m.mapel) ?? [];
  return (
    <section className="rk-side-card" aria-labelledby="rk-mapel-title">
      <div className="rk-side-card__row">
        <h2 className="rk-side-card__title rk-side-card__title--icon" id="rk-mapel-title">
          <IconBookOpen size={17} color="#006190" />
          Paket Mapel Terpilih
        </h2>
        <span className="rk-pill">{mapel.length} Mapel</span>
      </div>
      <p className="rk-side-card__desc">
        Mata pelajaran yang sedang kamu tempuh (diisi saat onboarding):
      </p>
      {mapel.length === 0 ? (
        <p className="rk-side-card__desc">Belum ada mapel yang dipilih.</p>
      ) : (
        <ul className="rk-mapel" role="list">
          {mapel.map((m) => {
            const dipakai = rekomendasi.filter((r) =>
              r.detail?.mapel_pendukung.some((x) => x.mapel.id === m.id)
            ).length;
            return (
              <li key={m.id} className="rk-mapel__item">
                <span className="rk-mapel__code" aria-hidden="true">{m.kode}</span>
                <span className="rk-mapel__text">
                  <span className="rk-mapel__name">{m.nama}</span>
                  <span className="rk-mapel__meta">
                    {dipakai > 0
                      ? `Pendukung ${dipakai} dari ${rekomendasi.length} prodi teratas`
                      : "Bukan pendukung prodi teratas"}
                  </span>
                </span>
                {dipakai > 0 && <IconCheckCircle size={16} color="#006190" />}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

function PeluangTipeCard({ ranked }: { ranked: Kandidat[] }) {
  const tipe = (["akademik", "vokasi"] as const).map((j) => {
    const list = ranked.filter((k) => k.prodi.jenis_pendidikan.includes(j)).slice(0, 5);
    const pct = list.length ? Math.round(list.reduce((t, k) => t + k.riasec, 0) / list.length) : 0;
    return {
      label: j === "akademik" ? "Pendidikan Akademik (S1)" : "Pendidikan Vokasi (D3/D4)",
      pct,
      tone: j === "akademik" ? "brand" : "blue",
      desc: list.length
        ? `Rata-rata kecocokan RIASEC 5 prodi ${j} teratas`
        : `Belum ada prodi ${j} dengan kode RIASEC`,
    } as const;
  });

  return (
    <section className="rk-side-card" aria-labelledby="rk-tipe-title">
      <h2 className="rk-side-card__title rk-side-card__title--icon" id="rk-tipe-title">
        <IconScale size={17} color="#0B1C30" />
        Kecocokan Tipe Pendidikan
      </h2>
      <ul className="rk-tipe" role="list">
        {tipe.map((t) => (
          <li key={t.label} className="rk-tipe__item">
            <div className="rk-tipe__head">
              <span className="rk-tipe__label">{t.label}</span>
              <span className={`rk-tipe__pct rk-tipe__pct--${t.tone}`}>
                {t.pct}% {labelCocok(t.pct)}
              </span>
            </div>
            <ScoreBar value={t.pct} tone={t.tone} />
            <span className="rk-tipe__desc">{t.desc}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function BkCtaCard({ sekolah }: { sekolah: string | null }) {
  return (
    <section className="rk-bk" aria-labelledby="rk-bk-title">
      <h2 className="rk-bk__title" id="rk-bk-title">
        <span className="rk-bk__icon" aria-hidden="true">
          <IconMessage size={15} color="#FFFFFF" />
        </span>
        Diskusikan dengan Guru BK
      </h2>
      <p className="rk-bk__desc">
        Guru BK {sekolah ?? "sekolahmu"} dapat meninjau rekomendasi dan target prodimu
        melalui dashboard BK.
      </p>
      <button type="button" className="rk-bk__btn rk-bk__btn--primary">
        <IconSend size={14} color="#006190" />
        Kirim Rekap ke Guru BK
      </button>
      <button type="button" className="rk-bk__btn rk-bk__btn--ghost">
        <IconCalendar size={12} color="#FFFFFF" />
        Jadwalkan Sesi Konseling
      </button>
    </section>
  );
}

// ── Tab 2 & 3 panels ─────────────────────────────────────────────────────────

function MapelAlignmentCard({ rekomendasi }: { rekomendasi: Kandidat[] }) {
  return (
    <section className="rk-side-card" aria-labelledby="rk-align-title">
      <h2 className="rk-side-card__title rk-side-card__title--icon" id="rk-align-title">
        <IconBookOpen size={17} color="#006190" />
        Keselarasan Mapel dengan Rekomendasi
      </h2>
      <p className="rk-side-card__desc">
        Persentase mapel pendukung tiap prodi rekomendasi teratas yang sedang kamu ambil:
      </p>
      <ul className="rk-tipe" role="list">
        {rekomendasi.map((r) => {
          const tone = r.prodi.jenis_pendidikan.includes("vokasi") ? "amber" : "brand";
          const pendukung = r.detail?.mapel_pendukung.map((m) => m.mapel.nama).join(", ");
          return (
            <li key={r.prodi.id} className="rk-tipe__item">
              <div className="rk-tipe__head">
                <span className="rk-tipe__label">{r.prodi.nama}</span>
                <span className={`rk-tipe__pct rk-tipe__pct--${tone}`}>
                  {r.linearitas !== null ? `${r.linearitas}%` : "–"}
                </span>
              </div>
              <ScoreBar value={r.linearitas ?? 0} tone={tone} />
              <span className="rk-tipe__desc">
                {pendukung ? `Mapel pendukung: ${pendukung}` : "Data mapel pendukung belum tersedia"}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function JalurSeleksiCard() {
  return (
    <section className="rk-side-card" aria-labelledby="rk-jalur-title">
      <h2 className="rk-side-card__title rk-side-card__title--icon" id="rk-jalur-title">
        <IconBranch size={15} color="#006190" />
        Jalur Seleksi yang Tersedia
      </h2>
      <ul className="rk-jalur" role="list">
        {JALUR_INFO.map((j) => (
          <li key={j.id} className="rk-jalur__item">
            <div className="rk-tipe__head">
              <span className="rk-tipe__label">{j.title}</span>
            </div>
            <span className="rk-tipe__desc">{j.desc}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ── Site Footer ───────────────────────────────────────────────────────────────

function SiteFooter() {
  return (
    <footer className="rk-footer" role="contentinfo">
      <div className="rk-footer__inner">
        <div className="rk-footer__cols">
          <div>
            <div className="rk-footer__brand-logo">
              <span className="rk-footer__brand-icon" aria-hidden="true">
                <IconCompass size={15} color="#FFFFFF" />
              </span>
              <span className="rk-footer__brand-name">ArahMasaDepan</span>
            </div>
            <p className="rk-footer__brand-desc">
              Platform diagnostik minat bakat dan panduan pilihan program studi
              SNBP, SNBT, dan Jalur Mandiri berstandar Kurikulum Merdeka.
            </p>
          </div>

          <div>
            <h3 className="rk-footer__col-heading">Fitur Unggulan</h3>
            <ul className="rk-footer__col-list">
              {["Tes RIASEC Holland", "Matriks Keselarasan Mapel", "Simulasi Rasionalisasi SNBP"].map((item) => (
                <li key={item} className="rk-footer__col-item">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="rk-footer__col-heading">Eksplorasi</h3>
            <ul className="rk-footer__col-list">
              {["Peta Karir Vokasi & Akademik", "Direktori PTN & PTS", "Panduan Portofolio Seni & Olahraga"].map((item) => (
                <li key={item} className="rk-footer__col-item">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="rk-footer__col-heading">Pusat Bantuan</h3>
            <p className="rk-footer__col-help">Konsultasi BK Sekolah &amp; Layanan Panduan Siswa</p>
            <button className="rk-footer__help-btn" type="button">
              <IconMessage size={13} color="#006190" />
              Bantuan Konselor BK
            </button>
          </div>
        </div>

        <div className="rk-footer__bottom">
          <span className="rk-footer__copyright">
            &copy; 2025 ArahMasaDepan &bull; Inisiatif Pendampingan Karir Siswa Indonesia
          </span>
          <nav className="rk-footer__legal" aria-label="Tautan legal">
            <a href="/kebijakan-privasi" className="rk-footer__legal-link">Kebijakan Privasi Data Siswa</a>
            <a href="/ketentuan-layanan" className="rk-footer__legal-link">Ketentuan Layanan</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RekomendasiPage() {
  const [tab, setTab] = useState<TabId>("prodi");
  const [jenis, setJenis] = useState<FilterJenis>("all");
  const [showCadangan, setShowCadangan] = useState(false);

  const [me, setMe] = useState<SiswaSaya | null>(null);
  const [asesmen, setAsesmen] = useState<HasilAsesmen | null>(null);
  const [nilai, setNilai] = useState<DaftarNilai | null>(null);
  const [target, setTarget] = useState<DaftarTarget>({ karir: [], prodi: [] });
  const [prodi, setProdi] = useState<ProdiRingkas[] | null>(null);
  const [details, setDetails] = useState<Record<string, DetailProdi>>({});
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  useEffect(() => {
    let batal = false;
    Promise.all([getMe(), terakhirAsesmen(), daftarNilai(), getTarget(), semuaProdi()])
      .then(([m, a, n, t, p]) => {
        if (batal) return;
        setMe(m);
        setAsesmen(a);
        setNilai(n);
        setTarget(t);
        setProdi(p);
      })
      .catch((err) => !batal && setError(pesanError(err)));
    return () => {
      batal = true;
    };
  }, []);

  const kodeSiswa = asesmen?.kode_holland ?? null;
  const mapelSiswa = useMemo(() => new Set(me?.mapel.map((m) => m.mapel.id) ?? []), [me]);

  // Peringkat awal hanya dari RIASEC (detail prodi dimuat untuk yang tampil saja).
  const ranked = useMemo(() => {
    if (!prodi || !kodeSiswa) return [];
    return prodi
      .filter((p) => p.kode_riasec && (jenis === "all" || p.jenis_pendidikan.includes(jenis)))
      .map((p) => hitungKandidat(p, kodeSiswa, details[p.id], mapelSiswa))
      .sort((a, b) => b.riasec - a.riasec || a.prodi.nama.localeCompare(b.prodi.nama));
  }, [prodi, kodeSiswa, jenis, details, mapelSiswa]);

  // Kandidat teratas diurutkan ulang dengan skor gabungan setelah detailnya ada.
  const pool = ranked.slice(0, JUMLAH_UTAMA + JUMLAH_CADANGAN);
  const kandidatUtama = ranked.slice(0, JUMLAH_UTAMA * 2).sort((a, b) => b.skor - a.skor);
  const utama = kandidatUtama.slice(0, JUMLAH_UTAMA);
  const idUtama = new Set(utama.map((k) => k.prodi.id));
  const cadangan = pool.filter((k) => !idUtama.has(k.prodi.id)).slice(0, JUMLAH_CADANGAN);

  const idPerluDetail = ranked
    .slice(0, JUMLAH_UTAMA * 2)
    .map((k) => k.prodi.id)
    .filter((id) => !details[id])
    .join(",");

  useEffect(() => {
    if (!idPerluDetail) return;
    let batal = false;
    Promise.all(idPerluDetail.split(",").map((id) => detailProdi(id)))
      .then((list) => {
        if (batal) return;
        setDetails((d) => ({ ...d, ...Object.fromEntries(list.map((x) => [x.id, x])) }));
      })
      .catch((err) => !batal && setError(pesanError(err)));
    return () => {
      batal = true;
    };
  }, [idPerluDetail]);

  const targetPerProdi = useMemo(
    () => new Map(target.prodi.filter((t) => t.prodi).map((t) => [t.prodi!.id, t])),
    [target]
  );

  const handlePrimary = async (k: Kandidat, featured: boolean) => {
    if (busyId) return;
    setBusyId(k.prodi.id);
    try {
      const ada = targetPerProdi.get(k.prodi.id);
      if (featured) {
        if (ada?.is_utama) {
          setTarget({ ...target, prodi: await hapusTargetProdi(ada.id) });
        } else {
          const baru = ada ?? (await tambahTargetProdi({ prodi_id: k.prodi.id, sumber: "rekomendasi" }));
          setTarget({ ...target, prodi: await jadikanTargetUtama(baru.id) });
        }
      } else if (ada) {
        setTarget({ ...target, prodi: await hapusTargetProdi(ada.id) });
      } else {
        const baru = await tambahTargetProdi({ prodi_id: k.prodi.id, sumber: "rekomendasi" });
        setTarget({ ...target, prodi: [...target.prodi, baru] });
      }
    } catch (err) {
      alert(pesanError(err));
    } finally {
      setBusyId(null);
    }
  };

  const status = error
    ? error
    : !prodi
      ? "Memuat rekomendasi..."
      : !kodeSiswa
        ? null
        : ranked.length === 0
          ? "Belum ada prodi dengan kode RIASEC yang cocok dengan filter ini."
          : null;

  return (
    <div className="page-rekomendasi">
      <SiteHeader nama={me?.profil.nama ?? "Siswa"} kelas={infoKelas(me)} />

      <main className="rk-main" id="main-content">
        <div className="rk-container">
          <TopInfoRow me={me} nilai={nilai} />
          <HeroCard
            tab={tab}
            onTabChange={setTab}
            kodeSiswa={kodeSiswa}
            rapor={rataRapor(nilai)}
            skorTeratas={utama[0]?.skor ?? null}
            jumlahProdi={ranked.length}
          />

          {status && (
            <div className="rk-empty" role={error ? "alert" : "status"}>
              {status}
            </div>
          )}

          {prodi && !kodeSiswa && !error && (
            <div className="rk-empty">
              Rekomendasi disusun dari hasil tes minat RIASEC, dan kamu belum mengerjakannya.
              <Link href="/tes-minat" className="rk-empty__reset">
                Kerjakan Tes Minat
              </Link>
            </div>
          )}

          {kodeSiswa && tab === "prodi" && (
            <>
              <FilterToolbar jenis={jenis} onChange={setJenis} />

              <div className="rk-grid" role="tabpanel" id="rk-panel-prodi" aria-labelledby="rk-tab-prodi">
                <div className="rk-col-left">
                  {utama.map((k, i) => {
                    const t = targetPerProdi.get(k.prodi.id);
                    return (
                      <RecommendationCard
                        key={k.prodi.id}
                        k={k}
                        rank={i}
                        kodeSiswa={kodeSiswa}
                        active={i === 0 ? !!t?.is_utama : !!t}
                        busy={busyId === k.prodi.id}
                        onPrimary={() => handlePrimary(k, i === 0)}
                      />
                    );
                  })}

                  {showCadangan && cadangan.length > 0 && (
                    <CadanganList items={cadangan} offset={utama.length} />
                  )}

                  {cadangan.length > 0 && (
                    <button
                      type="button"
                      className="rk-more"
                      aria-expanded={showCadangan}
                      onClick={() => setShowCadangan((v) => !v)}
                    >
                      {showCadangan
                        ? "Sembunyikan Pilihan Rekomendasi Cadangan"
                        : `Tampilkan ${cadangan.length} Pilihan Rekomendasi Cadangan Lainnya`}
                      <IconChevronDown
                        size={10}
                        color="#3F4850"
                        className={showCadangan ? "rk-more__chevron--up" : undefined}
                      />
                    </button>
                  )}
                </div>

                <aside className="rk-col-right" aria-label="Penjelasan dan aksi pendukung">
                  <XaiCard k={utama[0]} kodeSiswa={kodeSiswa} />
                  <PaketMapelCard me={me} rekomendasi={utama} />
                  <PeluangTipeCard ranked={ranked} />
                  <BkCtaCard sekolah={me?.profil.sekolah?.nama ?? null} />
                </aside>
              </div>
            </>
          )}

          {kodeSiswa && tab === "mapel" && (
            <div className="rk-panel-grid" role="tabpanel" id="rk-panel-mapel" aria-labelledby="rk-tab-mapel">
              <PaketMapelCard me={me} rekomendasi={utama} />
              <MapelAlignmentCard rekomendasi={utama} />
            </div>
          )}

          {kodeSiswa && tab === "jalur" && (
            <div className="rk-panel-grid" role="tabpanel" id="rk-panel-jalur" aria-labelledby="rk-tab-jalur">
              <PeluangTipeCard ranked={ranked} />
              <JalurSeleksiCard />
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
