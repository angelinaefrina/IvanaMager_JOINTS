"use client";

import React, { useState } from "react";
import "../../../styles/rekomendasi.css";

import {
  IconCompass,
  IconBell,
  IconSearch,
  IconUser,
  IconMessage,
  IconCheckCircle,
  IconCalendar,
  IconArrowRight,
  IconBarChart,
  IconLayers,
  IconGrid,
  IconDiploma,
  IconBookOpen,
} from "../../../components/siswa/Icons";

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

const IconSliders = ({ size = 12, color = "#006190", className }: LocalIconProps) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M1 3H6M9 3H11M1 9H3M6 9H11" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="7.5" cy="3" r="1.5" stroke={color} strokeWidth="1.3" />
    <circle cx="4.5" cy="9" r="1.5" stroke={color} strokeWidth="1.3" />
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

const IconMonitor = ({ size = 14, color = "#006190", className }: LocalIconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <rect x="1" y="2" width="12" height="8" rx="1" stroke={color} strokeWidth="1.3" />
    <path d="M4 7L5.5 5.5L4 4M7 7.5H9.5M5 12.5H9" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconRobot = ({ size = 13, color = "#006190", className }: LocalIconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <rect x="2" y="4.5" width="10" height="7.5" rx="2" stroke={color} strokeWidth="1.3" />
    <path d="M7 4.5V2M1 8H2M12 8H13" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="5" cy="8" r="0.9" fill={color} />
    <circle cx="9" cy="8" r="0.9" fill={color} />
  </svg>
);

const IconCloud = ({ size = 13, color = "#006190", className }: LocalIconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M4 11H10.5C11.9 11 13 9.9 13 8.5C13 7.1 11.9 6 10.5 6C10.2 4.3 8.8 3 7 3C5.3 3 3.9 4.2 3.6 5.8C2.1 6 1 7.3 1 8.5C1 9.9 2.3 11 4 11Z" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
);

const IconCode = ({ size = 12, color = "#006190", className }: LocalIconProps) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M4 3L1 6L4 9M8 3L11 6L8 9" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconTool = ({ size = 14, color = "#7C5400", className }: LocalIconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M8.5 2.5L11.5 5.5M2 12L7.5 6.5M6 2.5L9.5 1L13 4.5L11.5 8" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
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

type Jalur = "SNBP" | "SNBT" | "Mandiri";
type Jenjang = "s1" | "d4" | "kedinasan";
type Tone = "brand" | "muted" | "amber";
type TabId = "prodi" | "mapel" | "jalur";
type PrimaryKind = "lock" | "save" | "plain";

type Rekomendasi = {
  id: string;
  rankLabel: string;
  tag: string;
  tone: Tone;
  match: number;
  matchLabel: string;
  rumpunIcon: React.ReactNode;
  rumpun: string;
  jenjangLabel: string;
  title: string;
  desc: string;
  careerHeading?: string;
  careers: { icon: React.ReactNode; label: string }[];
  metrics: { label: string; value: number; note?: string }[];
  facts: { label: string; value: string }[];
  campuses?: { abbr: string; name: string; capacity: number }[];
  linearity: number;
  mapelNote: string;
  secondaryAction: string;
  primaryAction: string;
  primaryKind: PrimaryKind;
  jalur: Jalur[];
  jenjang: Jenjang;
  unggul: boolean;
};

type Cadangan = {
  id: string;
  title: string;
  kampus: string;
  match: number;
  jalur: Jalur[];
  jenjang: Jenjang;
  unggul: boolean;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Beranda", href: "/beranda" },
  { label: "Rekomendasi", href: "/rekomendasi", active: true },
  { label: "Eksplorasi Karir", href: "/eksplorasi-karir" },
  { label: "Analisis Keselarasan", href: "/analitik" },
  { label: "Katalog Kampus", href: "/katalog-prodi" },
];

const JALUR_FILTERS: { id: "all" | Jalur; label: string }[] = [
  { id: "all", label: "Semua Jalur" },
  { id: "SNBP", label: "SNBP" },
  { id: "SNBT", label: "SNBT" },
  { id: "Mandiri", label: "Mandiri" },
];

const JENJANG_FILTERS: { id: "all" | Jenjang; label: string }[] = [
  { id: "all", label: "Semua Jenjang" },
  { id: "s1", label: "S1 Akademik" },
  { id: "d4", label: "D4 Vokasi" },
  { id: "kedinasan", label: "Kedinasan" },
];

const REKOMENDASI: Rekomendasi[] = [
  {
    id: "informatika",
    rankLabel: "#1 Rekomendasi Terkuat",
    tag: "Pilihan Prioritas SNBP 1",
    tone: "brand",
    match: 96,
    matchLabel: "Sangat Cocok",
    rumpunIcon: <IconMonitor size={14} color="#006190" />,
    rumpun: "Rumpun Informatika, Sains Komputer & Data",
    jenjangLabel: "Jenjang S1",
    title: "Teknik Informatika / Ilmu Komputer",
    desc: "Studi rekayasa perangkat lunak skala tinggi, kecerdasan artifisial, komputasi awan, dan algoritma lanjutan. Sangat linear dengan kekuatan matematika lanjut dan logika analitikmu.",
    careerHeading: "Prospek Karir Masa Depan Teridentifikasi:",
    careers: [
      { icon: <IconRobot size={13} color="#006190" />, label: "AI / ML Engineer" },
      { icon: <IconCloud size={13} color="#006190" />, label: "Cloud Systems Architect" },
      { icon: <IconCode size={12} color="#006190" />, label: "Fullstack Software Engineer" },
    ],
    metrics: [
      { label: "Kemampuan Akademik Rapor", value: 94, note: "Matematika (95), Fisika (92), B. Inggris (94)" },
      { label: "Kesesuaian Minat RIASEC", value: 98, note: "Investigative (I) 95% • Realistic (R) 88%" },
    ],
    facts: [{ label: "Rasio Keketatan SNBP:", value: "1 : 24 (Tinggi)" }],
    campuses: [
      { abbr: "ITB", name: "STEI-K ITB", capacity: 120 },
      { abbr: "UI", name: "Fasilkom UI", capacity: 95 },
      { abbr: "ITS", name: "Teknik Inf. ITS", capacity: 110 },
      { abbr: "UGM", name: "Ilmu Komp. UGM", capacity: 85 },
    ],
    linearity: 100,
    mapelNote: "Linear 100% dengan paket mapel pilihan Matematika Lanjut",
    secondaryAction: "Detail Silabus & Daya Tampung",
    primaryAction: "Kunci Jadi Target Utama",
    primaryKind: "lock",
    jalur: ["SNBP", "SNBT", "Mandiri"],
    jenjang: "s1",
    unggul: true,
  },
  {
    id: "sistem-informasi",
    rankLabel: "#2 Rekomendasi Alternatif",
    tag: "Cocok Pilihan SNBP 2 / SNBT",
    tone: "muted",
    match: 89,
    matchLabel: "Sangat Baik",
    rumpunIcon: <IconBarChart size={13} color="#3F4850" />,
    rumpun: "Rumpun Manajemen Informasi & Analitika Bisnis",
    jenjangLabel: "Jenjang S1",
    title: "Sistem Informasi & Sains Data Terapan",
    desc: "Menggabungkan kapabilitas komputasi teknis dengan strategi operasional bisnis, tata kelola data perusahaan, dan perancangan produk digital interaktif.",
    careers: [
      { icon: <IconBarChart size={12} color="#006190" />, label: "Data Analyst & BI Lead" },
      { icon: <IconLayers size={12} color="#006190" />, label: "Digital Product Manager" },
      { icon: <IconGrid size={12} color="#006190" />, label: "Enterprise ERP Specialist" },
    ],
    metrics: [
      { label: "Akademik Rapor", value: 88 },
      { label: "Minat RIASEC (I–E–C)", value: 90 },
    ],
    facts: [{ label: "Rujukan Kampus:", value: "ITS, UNAIR, UB, BINUS" }],
    linearity: 90,
    mapelNote: "Linear 90% dengan Informatika & Matematika Lanjut",
    secondaryAction: "Lihat Peluang SNBP 2",
    primaryAction: "Simpan Pilihan",
    primaryKind: "save",
    jalur: ["SNBP", "SNBT"],
    jenjang: "s1",
    unggul: true,
  },
  {
    id: "d4-rpl",
    rankLabel: "#3 Rekomendasi Vokasi Unggulan",
    tag: "Jalur Vokasi SNBP / SNBT",
    tone: "amber",
    match: 85,
    matchLabel: "Match Praktikal",
    rumpunIcon: <IconTool size={14} color="#7C5400" />,
    rumpun: "Vokasi Terapan (Sarjana Terapan D4)",
    jenjangLabel: "70% Praktik Industri",
    title: "D4 Rekayasa Perangkat Lunak Aplikasi",
    desc: "Program 4 tahun setara sarjana dengan fokus kurikulum siap kerja, sertifikasi industri internasional (AWS/Google), dan magang penuh di unicorn/BUMN selama 2 semester akhir.",
    careers: [
      { icon: <IconBriefcase size={12} color="#006190" />, label: "Magang Industri 1 Tahun Terjamin" },
      { icon: <IconDiploma size={12} color="#006190" />, label: "2 Sertifikasi Global Wajib" },
    ],
    metrics: [{ label: "Kecocokan Praktik (R)", value: 92 }],
    facts: [
      { label: "Politeknik Rujukan:", value: "PENS Surabaya" },
      { label: "Alternatif:", value: "Polban, Polinema" },
    ],
    linearity: 85,
    mapelNote: "Linear 85% dengan Informatika & Fisika",
    secondaryAction: "Lihat Kurikulum Vokasi",
    primaryAction: "Bandingkan S1 vs D4",
    primaryKind: "plain",
    jalur: ["SNBP", "SNBT"],
    jenjang: "d4",
    unggul: true,
  },
];

const CADANGAN: Cadangan[] = [
  { id: "matematika", title: "Matematika Terapan / Aktuaria", kampus: "UI, ITB, UGM", match: 84, jalur: ["SNBP", "SNBT", "Mandiri"], jenjang: "s1", unggul: true },
  { id: "elektro", title: "Teknik Elektro & Sistem Tertanam", kampus: "ITB, ITS, UGM", match: 82, jalur: ["SNBT", "Mandiri"], jenjang: "s1", unggul: true },
  { id: "stis", title: "D4 Statistika Komputasi", kampus: "Politeknik Statistika STIS", match: 80, jalur: ["Mandiri"], jenjang: "kedinasan", unggul: true },
  { id: "poltek-ssn", title: "D4 Rekayasa Kriptografi", kampus: "Politeknik Siber & Sandi Negara", match: 78, jalur: ["Mandiri"], jenjang: "kedinasan", unggul: true },
  { id: "trin", title: "D4 Teknologi Rekayasa Internet", kampus: "Politeknik Negeri Jakarta", match: 76, jalur: ["SNBT", "Mandiri"], jenjang: "d4", unggul: true },
];

const XAI_COMPONENTS = [
  { label: "Nilai Rapor Mapel Pendukung (45%)", score: "42.3 pt", dotClass: "rk-dot--brand" },
  { label: "Holland RIASEC I-R (35%)", score: "34.3 pt", dotClass: "rk-dot--blue" },
  { label: "Keselarasan Mapel Pilihan (20%)", score: "19.4 pt", dotClass: "rk-dot--muted" },
];

const PAKET_MAPEL = [
  { code: "MTK", name: "Matematika Tingkat Lanjut", meta: "5 Jam Pelajaran • Sangat Linear" },
  { code: "INF", name: "Informatika", meta: "5 Jam Pelajaran • Prasyarat Utama" },
  { code: "FIS", name: "Fisika", meta: "5 Jam Pelajaran • Linear Rumpun Saintek" },
  { code: "ING", name: "Bahasa Inggris Tingkat Lanjut", meta: "5 Jam Pelajaran • Pendukung Global" },
];

const PELUANG_TIPE = [
  { label: "S1 Akademik Riset", pct: 96, level: "Sangat Tinggi", tone: "brand", desc: "Karakteristik: Teoretikal mendalam, riset, inovasi sistem" },
  { label: "D4 Sarjana Terapan (Vokasi)", pct: 84, level: "Tinggi", tone: "blue", desc: "Karakteristik: Siap kerja langsung, sertifikasi praktisi industri" },
  { label: "Perguruan Tinggi Kedinasan", pct: 74, level: "Menengah", tone: "muted", desc: "Contoh: STIS (Statistik Data), Poltek Siber Sandi Negara" },
];

const JALUR_INFO: { id: Jalur; title: string; desc: string }[] = [
  { id: "SNBP", title: "SNBP — Seleksi Nilai Rapor", desc: "Berbasis rapor semester 1–5 & prestasi. Kuota eligible sekolah akreditasi A: 40%." },
  { id: "SNBT", title: "SNBT — Tes Berbasis Komputer", desc: "Berbasis UTBK (TPS, Literasi, Penalaran Matematika). Tidak bergantung rapor." },
  { id: "Mandiri", title: "Mandiri & Kedinasan", desc: "Seleksi mandiri kampus atau tes kedinasan (SKD, kesehatan, kesamaptaan)." },
];

const TOTAL_PRODI = REKOMENDASI.length + CADANGAN.length;

const JENJANG_LABEL: Record<Jenjang, string> = {
  s1: "S1 Akademik",
  d4: "D4 Vokasi",
  kedinasan: "Kedinasan",
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function SiteHeader() {
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

          <button className="rk-nav-user" type="button" aria-label="Menu akun Citra Lestari">
            <span className="rk-nav-user__avatar" aria-hidden="true">
              <IconUser size={12} color="#FFFFFF" />
            </span>
            <span className="rk-nav-user__info">
              <span className="rk-nav-user__name">Citra Lestari</span>
              <span className="rk-nav-user__role">Kelas 12 IPA 1</span>
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

// ── Top badge row ─────────────────────────────────────────────────────────────

function TopInfoRow() {
  return (
    <div className="rk-topinfo">
      <span className="rk-topinfo__badge">
        <IconSparkle size={15} color="#006190" />
        Algoritma Penyelarasan Cerdas v3.4 &bull; Data Profil Terverifikasi
      </span>
      <div className="rk-topinfo__student">
        <span>
          Siswa: <strong>Citra Lestari</strong> (NISN 006482194)
        </span>
        <span aria-hidden="true">&bull;</span>
        <span className="rk-topinfo__locked">
          <span className="rk-topinfo__locked-dot" aria-hidden="true" />
          Rapor Sem. 1–5 Terkunci
        </span>
      </div>
    </div>
  );
}

// ── Hero: title, quick stats, tabs ───────────────────────────────────────────

function HeroCard({ tab, onTabChange }: { tab: TabId; onTabChange: (t: TabId) => void }) {
  const tabs: { id: TabId; label: string; icon: React.ReactNode; extra?: React.ReactNode }[] = [
    {
      id: "prodi",
      label: "Rekomendasi Prodi & Karir",
      icon: <IconVerified size={16} color={tab === "prodi" ? "#FFFFFF" : "#3F4850"} />,
      extra: <span className="rk-tab__count">{TOTAL_PRODI} Prodi</span>,
    },
    {
      id: "mapel",
      label: "Paket Mapel Pilihan (Kurikulum Merdeka)",
      icon: <IconBookOpen size={16} color={tab === "mapel" ? "#FFFFFF" : "#3F4850"} />,
      extra: <span className="rk-tab__dot" aria-label="Ada pembaruan" />,
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
            Sinergi kecerdasan buatan menggabungkan tes psikometrik RIASEC Holland
            (Investigative-Realistic), matriks nilai rapor semester 1–5, dan regulasi
            daya tampung nasional SNBP/SNBT 2025.
          </p>
        </div>

        <dl className="rk-stats">
          <div className="rk-stat">
            <dt className="rk-stat__label">Tipe RIASEC</dt>
            <dd className="rk-stat__value rk-stat__value--brand">I - R - C</dd>
          </div>
          <div className="rk-stat">
            <dt className="rk-stat__label">Rata Rapor</dt>
            <dd className="rk-stat__value">91.45</dd>
          </div>
          <div className="rk-stat rk-stat--highlight">
            <dt className="rk-stat__label rk-stat__label--muted">Skor Keselarasan</dt>
            <dd className="rk-stat__value rk-stat__value--strong">96% Optimal</dd>
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

type FilterState = {
  jalur: "all" | Jalur;
  jenjang: "all" | Jenjang;
  unggulOnly: boolean;
};

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

function FilterToolbar({ filters, onChange }: { filters: FilterState; onChange: (f: FilterState) => void }) {
  return (
    <div className="rk-toolbar" role="toolbar" aria-label="Filter rekomendasi">
      <div className="rk-toolbar__left">
        <span className="rk-toolbar__label">
          <IconFilter size={12} color="#3F4850" />
          Filter:
        </span>
        <Segmented
          label="Filter jalur seleksi"
          options={JALUR_FILTERS}
          value={filters.jalur}
          onChange={(jalur) => onChange({ ...filters, jalur })}
        />
        <Segmented
          label="Filter jenjang pendidikan"
          options={JENJANG_FILTERS}
          value={filters.jenjang}
          onChange={(jenjang) => onChange({ ...filters, jenjang })}
        />
      </div>

      <div className="rk-toolbar__right">
        <span className="rk-toolbar__toggle-label" id="rk-unggul-label">Akreditasi Unggul/A</span>
        <button
          type="button"
          role="switch"
          aria-checked={filters.unggulOnly}
          aria-labelledby="rk-unggul-label"
          className={`rk-switch${filters.unggulOnly ? " rk-switch--on" : ""}`}
          onClick={() => onChange({ ...filters, unggulOnly: !filters.unggulOnly })}
        >
          <span className="rk-switch__knob" />
        </button>
        <span className="rk-toolbar__divider" aria-hidden="true" />
        <button type="button" className="rk-toolbar__weight">
          <IconSliders size={12} color="#006190" />
          Sesuaikan Bobot
        </button>
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
  rec,
  featured,
  active,
  onPrimary,
}: {
  rec: Rekomendasi;
  featured: boolean;
  active: boolean;
  onPrimary: () => void;
}) {
  const metricTones: ("brand" | "blue" | "amber" | "muted")[] =
    rec.tone === "amber" ? ["amber"] : featured ? ["brand", "blue"] : ["muted", "muted"];

  let primaryLabel = rec.primaryAction;
  if (active && rec.primaryKind === "lock") primaryLabel = "Target Utama Terkunci";
  if (active && rec.primaryKind === "save") primaryLabel = "Tersimpan";

  return (
    <article
      className={`rk-card rk-card--${rec.tone}${featured ? " rk-card--featured" : ""}`}
      aria-labelledby={`rk-card-${rec.id}`}
    >
      {/* Banner */}
      <div className="rk-card__banner">
        <div className="rk-card__badges">
          <span className={`rk-rank rk-rank--${rec.tone}`}>{rec.rankLabel}</span>
          <span className="rk-card__tag">{rec.tag}</span>
        </div>
        <span className={`rk-match rk-match--${rec.tone === "amber" ? "amber" : "brand"}`}>
          <IconVerified size={16} color={rec.tone === "amber" ? "#7C5400" : "#006190"} />
          {rec.match}% {rec.matchLabel}
        </span>
      </div>

      {/* Body: info + score panel */}
      <div className="rk-card__body">
        <div className="rk-card__info">
          <div className="rk-card__meta">
            {rec.rumpunIcon}
            <span>{rec.rumpun}</span>
            <span aria-hidden="true">&bull;</span>
            <span>{rec.jenjangLabel}</span>
          </div>
          <h2 className="rk-card__title" id={`rk-card-${rec.id}`}>{rec.title}</h2>
          <p className="rk-card__desc">{rec.desc}</p>

          <div className="rk-careers">
            {rec.careerHeading && <span className="rk-careers__heading">{rec.careerHeading}</span>}
            <ul className="rk-careers__list" role="list">
              {rec.careers.map((c) => (
                <li key={c.label} className="rk-career">
                  {c.icon}
                  {c.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rk-score">
          <div className="rk-score__metrics">
            {rec.metrics.map((m, idx) => (
              <div key={m.label} className="rk-metric">
                <div className="rk-metric__head">
                  <span className="rk-metric__label">{m.label}</span>
                  <span className={`rk-metric__value${featured && idx === 1 ? " rk-metric__value--blue" : ""}`}>
                    {m.value}/100
                  </span>
                </div>
                <ScoreBar value={m.value} tone={metricTones[idx] ?? "muted"} />
                {m.note && <span className="rk-metric__note">{m.note}</span>}
              </div>
            ))}
          </div>

          <dl className="rk-facts">
            {rec.facts.map((f) => (
              <div key={f.label} className="rk-fact">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Campuses */}
      {rec.campuses && (
        <div className="rk-campuses">
          <span className="rk-campuses__heading">Kampus Rujukan Unggulan dengan Peluang Terbaik:</span>
          <ul className="rk-campuses__list" role="list">
            {rec.campuses.map((c) => (
              <li key={c.abbr} className="rk-campus">
                <span className="rk-campus__abbr" aria-hidden="true">{c.abbr}</span>
                <span className="rk-campus__text">
                  <span className="rk-campus__name">{c.name}</span>
                  <span className="rk-campus__cap">Daya Tampung: {c.capacity}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer */}
      <div className={`rk-card__footer${featured ? " rk-card__footer--featured" : ""}`}>
        {featured && (
          <span className="rk-card__note">
            <IconInfo size={13} color="#7C5400" />
            {rec.mapelNote}
          </span>
        )}
        <div className="rk-card__actions">
          <button type="button" className={featured ? "rk-btn rk-btn--outline" : "rk-btn rk-btn--light"}>
            {featured && <IconEye size={16} color="#0B1C30" />}
            {rec.secondaryAction}
          </button>
          <button
            type="button"
            className={`rk-btn ${featured ? "rk-btn--primary" : "rk-btn--soft"}${active ? " rk-btn--active" : ""}`}
            aria-pressed={rec.primaryKind === "plain" ? undefined : active}
            onClick={onPrimary}
          >
            {featured && <IconBookmark size={14} color="#FFFFFF" />}
            {primaryLabel}
          </button>
        </div>
      </div>
    </article>
  );
}

function CadanganList({ items }: { items: Cadangan[] }) {
  return (
    <ul className="rk-cadangan" role="list" aria-label="Pilihan rekomendasi cadangan">
      {items.map((c, idx) => (
        <li key={c.id} className="rk-cadangan__item">
          <span className="rk-cadangan__rank">#{REKOMENDASI.length + idx + 1}</span>
          <span className="rk-cadangan__text">
            <span className="rk-cadangan__title">{c.title}</span>
            <span className="rk-cadangan__meta">
              {c.kampus} &bull; {JENJANG_LABEL[c.jenjang]} &bull; {c.jalur.join(" / ")}
              {!c.unggul && " • Akreditasi Baik Sekali"}
            </span>
          </span>
          <span className="rk-cadangan__match">{c.match}%</span>
        </li>
      ))}
    </ul>
  );
}

// ── Sidebar cards ────────────────────────────────────────────────────────────

function XaiCard() {
  return (
    <section className="rk-side-card" aria-labelledby="rk-xai-title">
      <div className="rk-side-card__head">
        <span className="rk-side-card__icon" aria-hidden="true">
          <IconSparkle size={16} color="#FFFFFF" />
        </span>
        <div>
          <h2 className="rk-side-card__title" id="rk-xai-title">Explainable AI (XAI)</h2>
          <p className="rk-side-card__sub">Transparansi Logika Sistem Penyelarasan</p>
        </div>
      </div>
      <p className="rk-side-card__desc">
        Mengapa prodi Teknik Informatika berada di posisi teratas rekomendasi kamu?
        Berikut pembobotan matematis algoritma:
      </p>

      <table className="rk-xai-table">
        <thead>
          <tr>
            <th scope="col">Komponen Penentu</th>
            <th scope="col">Kontribusi Skor</th>
          </tr>
        </thead>
        <tbody>
          {XAI_COMPONENTS.map((c) => (
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
            <td>Total Indeks Kompatibilitas</td>
            <td>96.0% (Optimal)</td>
          </tr>
        </tfoot>
      </table>

      <div className="rk-argument">
        <span className="rk-argument__title">
          <IconBulb size={13} color="#0B1C30" />
          Argumen Kesimpulan:
        </span>
        <p className="rk-argument__text">
          Nilai Matematika Lanjut kamu (95) berada di Top 5% di sekolah. Dipadukan dengan
          skor RIASEC Investigative (95) dan Realistic (88), profil kognitif kamu memiliki
          ketahanan abstrak tinggi yang esensial dalam algoritma software engineering.
        </p>
      </div>
    </section>
  );
}

function PaketMapelCard() {
  return (
    <section className="rk-side-card" aria-labelledby="rk-mapel-title">
      <div className="rk-side-card__row">
        <h2 className="rk-side-card__title rk-side-card__title--icon" id="rk-mapel-title">
          <IconBookOpen size={17} color="#006190" />
          Paket Mapel Terpilih
        </h2>
        <span className="rk-pill">20 / 22 JP</span>
      </div>
      <p className="rk-side-card__desc">
        Kombinasi mata pelajaran pilihan Kurikulum Merdeka yang sedang kamu tempuh di Kelas 11–12:
      </p>
      <ul className="rk-mapel" role="list">
        {PAKET_MAPEL.map((m) => (
          <li key={m.code} className="rk-mapel__item">
            <span className="rk-mapel__code" aria-hidden="true">{m.code}</span>
            <span className="rk-mapel__text">
              <span className="rk-mapel__name">{m.name}</span>
              <span className="rk-mapel__meta">{m.meta}</span>
            </span>
            <IconCheckCircle size={16} color="#006190" />
          </li>
        ))}
      </ul>
      <button type="button" className="rk-side-btn">
        Uji Simulasi Ganti Mapel Pilihan
        <IconArrowRight size={9} color="#006190" />
      </button>
    </section>
  );
}

function PeluangTipeCard() {
  return (
    <section className="rk-side-card" aria-labelledby="rk-tipe-title">
      <h2 className="rk-side-card__title rk-side-card__title--icon" id="rk-tipe-title">
        <IconScale size={17} color="#0B1C30" />
        Peluang Tipe Pendidikan
      </h2>
      <ul className="rk-tipe" role="list">
        {PELUANG_TIPE.map((t) => (
          <li key={t.label} className="rk-tipe__item">
            <div className="rk-tipe__head">
              <span className="rk-tipe__label">{t.label}</span>
              <span className={`rk-tipe__pct rk-tipe__pct--${t.tone}`}>
                {t.pct}% {t.level}
              </span>
            </div>
            <ScoreBar value={t.pct} tone={t.tone as "brand" | "blue" | "muted"} />
            <span className="rk-tipe__desc">{t.desc}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function BkCtaCard() {
  return (
    <section className="rk-bk" aria-labelledby="rk-bk-title">
      <h2 className="rk-bk__title" id="rk-bk-title">
        <span className="rk-bk__icon" aria-hidden="true">
          <IconMessage size={15} color="#FFFFFF" />
        </span>
        Diskusikan dengan Guru BK
      </h2>
      <p className="rk-bk__desc">
        Guru BK kamu (Ibu Dra. Hj. Nurul Hidayati) dapat meninjau rekomendasi ini langsung
        melalui portal pendampingan siswa SMA Negeri 1.
      </p>
      <button type="button" className="rk-bk__btn rk-bk__btn--primary">
        <IconSend size={14} color="#006190" />
        Kirim Rekap PDF ke Guru BK
      </button>
      <button type="button" className="rk-bk__btn rk-bk__btn--ghost">
        <IconCalendar size={12} color="#FFFFFF" />
        Jadwalkan Sesi Konseling
      </button>
    </section>
  );
}

// ── Tab 2 & 3 panels ─────────────────────────────────────────────────────────

function MapelAlignmentCard() {
  return (
    <section className="rk-side-card" aria-labelledby="rk-align-title">
      <h2 className="rk-side-card__title rk-side-card__title--icon" id="rk-align-title">
        <IconLayers size={17} color="#006190" />
        Keselarasan Mapel dengan Rekomendasi
      </h2>
      <p className="rk-side-card__desc">
        Seberapa linear paket mapel pilihanmu dengan prasyarat tiap prodi rekomendasi teratas:
      </p>
      <ul className="rk-tipe" role="list">
        {REKOMENDASI.map((r) => (
          <li key={r.id} className="rk-tipe__item">
            <div className="rk-tipe__head">
              <span className="rk-tipe__label">{r.title}</span>
              <span className={`rk-tipe__pct rk-tipe__pct--${r.tone === "amber" ? "amber" : "brand"}`}>
                {r.linearity}%
              </span>
            </div>
            <ScoreBar value={r.linearity} tone={r.tone === "amber" ? "amber" : "brand"} />
            <span className="rk-tipe__desc">{r.mapelNote}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function JalurSeleksiCard() {
  const all = [
    ...REKOMENDASI.map((r) => ({ id: r.id, title: r.title, jalur: r.jalur })),
    ...CADANGAN.map((c) => ({ id: c.id, title: c.title, jalur: c.jalur })),
  ];
  return (
    <section className="rk-side-card" aria-labelledby="rk-jalur-title">
      <h2 className="rk-side-card__title rk-side-card__title--icon" id="rk-jalur-title">
        <IconBranch size={15} color="#006190" />
        Jalur Seleksi yang Tersedia
      </h2>
      <ul className="rk-jalur" role="list">
        {JALUR_INFO.map((j) => {
          const prodi = all.filter((p) => p.jalur.includes(j.id));
          return (
            <li key={j.id} className="rk-jalur__item">
              <div className="rk-tipe__head">
                <span className="rk-tipe__label">{j.title}</span>
                <span className="rk-pill">{prodi.length} Prodi</span>
              </div>
              <span className="rk-tipe__desc">{j.desc}</span>
              <span className="rk-jalur__prodi">{prodi.map((p) => p.title).join(" • ")}</span>
            </li>
          );
        })}
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

function matchesFilter(item: { jalur: Jalur[]; jenjang: Jenjang; unggul: boolean }, f: FilterState) {
  if (f.jalur !== "all" && !item.jalur.includes(f.jalur)) return false;
  if (f.jenjang !== "all" && item.jenjang !== f.jenjang) return false;
  if (f.unggulOnly && !item.unggul) return false;
  return true;
}

export default function RekomendasiPage() {
  const [tab, setTab] = useState<TabId>("prodi");
  const [filters, setFilters] = useState<FilterState>({ jalur: "all", jenjang: "all", unggulOnly: true });
  const [showCadangan, setShowCadangan] = useState(false);
  const [targetId, setTargetId] = useState<string | null>(null);
  const [savedIds, setSavedIds] = useState<string[]>([]);

  const visibleRecs = REKOMENDASI.filter((r) => matchesFilter(r, filters));
  const visibleCadangan = CADANGAN.filter((c) => matchesFilter(c, filters));

  const handlePrimary = (rec: Rekomendasi) => {
    if (rec.primaryKind === "lock") {
      setTargetId((cur) => (cur === rec.id ? null : rec.id));
    } else if (rec.primaryKind === "save") {
      setSavedIds((cur) => (cur.includes(rec.id) ? cur.filter((id) => id !== rec.id) : [...cur, rec.id]));
    }
  };

  return (
    <div className="page-rekomendasi">
      <SiteHeader />

      <main className="rk-main" id="main-content">
        <div className="rk-container">
          <TopInfoRow />
          <HeroCard tab={tab} onTabChange={setTab} />

          {tab === "prodi" && (
            <>
              <FilterToolbar filters={filters} onChange={setFilters} />

              <div className="rk-grid" role="tabpanel" id="rk-panel-prodi" aria-labelledby="rk-tab-prodi">
                <div className="rk-col-left">
                  {visibleRecs.map((rec) => (
                    <RecommendationCard
                      key={rec.id}
                      rec={rec}
                      featured={rec.id === REKOMENDASI[0].id}
                      active={rec.primaryKind === "lock" ? targetId === rec.id : savedIds.includes(rec.id)}
                      onPrimary={() => handlePrimary(rec)}
                    />
                  ))}

                  {visibleRecs.length === 0 && visibleCadangan.length === 0 && (
                    <div className="rk-empty">
                      Tidak ada prodi yang cocok dengan filter ini.
                      <button
                        type="button"
                        className="rk-empty__reset"
                        onClick={() => setFilters({ jalur: "all", jenjang: "all", unggulOnly: false })}
                      >
                        Atur ulang filter
                      </button>
                    </div>
                  )}

                  {showCadangan && visibleCadangan.length > 0 && <CadanganList items={visibleCadangan} />}

                  {visibleCadangan.length > 0 && (
                    <button
                      type="button"
                      className="rk-more"
                      aria-expanded={showCadangan}
                      onClick={() => setShowCadangan((v) => !v)}
                    >
                      {showCadangan
                        ? "Sembunyikan Pilihan Rekomendasi Cadangan"
                        : `Tampilkan ${visibleCadangan.length} Pilihan Rekomendasi Cadangan Lainnya`}
                      <IconChevronDown
                        size={10}
                        color="#3F4850"
                        className={showCadangan ? "rk-more__chevron--up" : undefined}
                      />
                    </button>
                  )}
                </div>

                <aside className="rk-col-right" aria-label="Penjelasan dan aksi pendukung">
                  <XaiCard />
                  <PaketMapelCard />
                  <PeluangTipeCard />
                  <BkCtaCard />
                </aside>
              </div>
            </>
          )}

          {tab === "mapel" && (
            <div className="rk-panel-grid" role="tabpanel" id="rk-panel-mapel" aria-labelledby="rk-tab-mapel">
              <PaketMapelCard />
              <MapelAlignmentCard />
            </div>
          )}

          {tab === "jalur" && (
            <div className="rk-panel-grid" role="tabpanel" id="rk-panel-jalur" aria-labelledby="rk-tab-jalur">
              <PeluangTipeCard />
              <JalurSeleksiCard />
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
