import React from "react";
import "../../../styles/analitik.css";

import {
  IconCompass,
  IconTarget,
  IconBookOpen,
  IconCheck,
  IconCheckCircle,
  IconTrendUp,
  IconTrendDown,
  IconArrowRight,
  IconChevronRight,
  IconBuilding,
  IconSchool,
  IconBell,
  IconSearch,
  IconUser,
  IconDownload,
  IconBarChart,
  IconLayers,
  IconMessage,
  IconShield,
  IconMapPin,
  IconStar,
  IconCalendar,
} from "../../../components/siswa/Icons";

// ─── Additional SVG icons specific to analitik page ─────────────────────────

const IconGraduationCap = ({ size = 18, color = "#006190", className }: { size?: number; color?: string; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M9 1L17 5.5L9 10L1 5.5L9 1Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M4.5 8V12.5C4.5 12.5 6 14.5 9 14.5C12 14.5 13.5 12.5 13.5 12.5V8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 5.5V10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconPencil = ({ size = 18, color = "#006190", className }: { size?: number; color?: string; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M13 2L16 5L6 15H3V12L13 2Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M11 4L14 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconBriefcase = ({ size = 18, color = "#006190", className }: { size?: number; color?: string; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <rect x="1.5" y="6" width="15" height="10" rx="1.5" stroke={color} strokeWidth="1.5" />
    <path d="M6 6V4.5C6 3.7 6.7 3 7.5 3H10.5C11.3 3 12 3.7 12 4.5V6" stroke={color} strokeWidth="1.5" />
    <path d="M1.5 11H16.5" stroke={color} strokeWidth="1.5" />
  </svg>
);

const IconRupiah = ({ size = 15, color = "#006190", className }: { size?: number; color?: string; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1.3" />
    <path d="M5 5H9.5C10.3 5 11 5.7 11 6.5C11 7.3 10.3 8 9.5 8H5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    <path d="M5 8H10M5 10H10" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    <path d="M5 5V11" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const IconQuote = ({ size = 34, color = "#D3E4FE", className }: { size?: number; color?: string; className?: string }) => (
  <svg width={size} height={24} viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M0 24V15C0 11 1.3 7.7 4 5C6.7 2.3 10 0.7 14 0L15.5 3C12.5 3.7 10.2 5 8.5 7C6.8 9 6 11.3 6 14H12V24H0ZM18 24V15C18 11 19.3 7.7 22 5C24.7 2.3 28 0.7 32 0L33.5 3C30.5 3.7 28.2 5 26.5 7C24.8 9 24 11.3 24 14H30V24H18Z" fill={color} />
  </svg>
);

const IconTrendingUp = ({ size = 13, color = "#006190", className }: { size?: number; color?: string; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M1.5 9.5L5.5 5.5L7.5 7.5L12 3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 3H12V6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconAlertTriangle = ({ size = 14, color = "#7C5400", className }: { size?: number; color?: string; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M7 1L13 12H1L7 1Z" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M7 5.5V8" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="7" cy="10" r="0.7" fill={color} />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Beranda", href: "/beranda" },
  { label: "Rekomendasi", href: "/rekomendasi" },
  { label: "Eksplorasi Karir", href: "/eksplorasi-karir" },
  { label: "Analisis Keselarasan", href: "/analitik", active: true },
  { label: "Katalog Kampus", href: "/katalog-prodi" },
];

const QUICK_METRICS = [
  {
    label: "Rata-Rata Mapel Pendukung",
    iconWrapClass: "metric-card__icon-wrap--blue",
    icon: <IconBarChart size={15} color="#006190" />,
    bigValue: "91",
    bigClass: "metric-card__big--brand",
    unit: "/100",
    unitClass: "metric-card__unit",
    footerIcon: <IconTrendUp size={13} color="#006190" />,
    footerText: "Top 3% Angkatan SMAN 8 ITB",
    footerClass: "metric-card__footer-text--brand",
  },
  {
    label: "Peluang Nilai",
    iconWrapClass: "metric-card__icon-wrap--purple",
    icon: <IconMapPin size={12} color="#525E7E" />,
    bigValue: "96.0",
    bigClass: "metric-card__big--ink",
    unit: "Kemendikbud",
    unitClass: "metric-card__unit--sm",
    footerIcon: <IconBuilding size={13} color="#525E7E" />,
    footerText: "Rank 4/46 Kelas 12 IPA Sejawa",
    footerClass: "metric-card__footer-text--muted",
  },
  {
    label: "Kelulusan Threshold",
    iconWrapClass: "metric-card__icon-wrap--blue",
    icon: <IconGraduationCap size={12} color="#006190" />,
    bigValue: "88%",
    bigClass: "metric-card__big--ink",
    unit: "Terpenuhi",
    unitClass: "metric-card__unit--sm",
    footerIcon: <IconShield size={8} color="#006190" />,
    footerText: "3x Juara Mapel di UI/ITB",
    footerClass: "metric-card__footer-text--brand",
  },
  {
    label: "Potensi Kompetisi",
    iconWrapClass: "metric-card__icon-wrap--amber",
    icon: <IconStar size={15} color="#7C5400" />,
    bigValue: "Top 5%",
    bigClass: "metric-card__big--amber",
    unit: "Kota",
    unitClass: "metric-card__unit--sm",
    footerIcon: <IconAlertTriangle size={11} color="#7C5400" />,
    footerText: "Peluang Sangat Kompetitif Impian",
    footerClass: "metric-card__footer-text--amber",
  },
];

const SUBJECTS = [
  {
    name: "Matematika Tingkat Lanjut",
    category: "Mapel Wajib Kurikulum Merdeka, Kelompok Sains B",
    iconBoxClass: "subject-row__icon-box--brand",
    icon: <IconPencil size={15} color="#FFFFFF" />,
    score: "94.0",
    scoreTarget: "Typ: 91.0",
    badge: "Jauh Melampaui",
    badgeClass: "subject-row__badge--brand",
    fillPct: 94,
    targetPct: 88,
    isDeficit: false,
    fillClass: "subject-row__fill--brand",
    leftLabel: "Nilaimu: 94.0 — Melampaui Threshold",
    rightLabel: "Thr: 91.0 — Gap: +3.0 (aman)",
    rightLabelClass: "subject-row__bar-label--brand",
  },
  {
    name: "Informatika / Pemrograman",
    category: "Projek Penguatan Pelajar Pancasila (P5) Sains Komp.",
    iconBoxClass: "subject-row__icon-box--blue",
    icon: <IconLayers size={16} color="#FCFCFF" />,
    score: "96.0",
    scoreTarget: "Typ: 91.0",
    badge: "Jauh Melampaui",
    badgeClass: "subject-row__badge--brand",
    fillPct: 96,
    targetPct: 85,
    isDeficit: false,
    fillClass: "subject-row__fill--brand",
    leftLabel: "Nilaimu: 96.0 — Melampaui Threshold",
    rightLabel: "Thr: 85.0 — Gap: +11.0 (aman)",
    rightLabelClass: "subject-row__bar-label--brand",
  },
  {
    name: "Fisika",
    category: "Mapel Pilihan Peminatan Sains / Pelajar Informatika",
    iconBoxClass: "subject-row__icon-box--muted",
    icon: <IconTarget size={13} color="#525E7E" />,
    score: "91.0",
    scoreTarget: "Typ: 91.0",
    badge: "Di Ambang Batas",
    badgeClass: "subject-row__badge--brand",
    fillPct: 91,
    targetPct: 84,
    isDeficit: false,
    fillClass: "subject-row__fill--brand",
    leftLabel: "Nilaimu: 91.0 — Di threshold",
    rightLabel: "Thr: 84.0 — Gap: +7.0 (aman)",
    rightLabelClass: "subject-row__bar-label--brand",
  },
  {
    name: "Bahasa Inggris Akademik",
    category: "PRIORITAS — Defisit 3 Poin dari Threshold Minimum UI",
    iconBoxClass: "subject-row__icon-box--amber",
    icon: <IconAlertTriangle size={18} color="#FFFFFF" />,
    score: "82.0",
    scoreTarget: "Typ: 86.0",
    badge: "Defisit Prioritas",
    badgeClass: "subject-row__badge--amber",
    fillPct: 82,
    targetPct: 85,
    isDeficit: true,
    fillClass: "subject-row__fill--amber",
    leftLabel: "Nilaimu: 82.0 — Di bawah threshold",
    rightLabel: "Defisit: -3.0 poin — Perlu segera ditutup",
    rightLabelClass: "subject-row__bar-label--amber",
  },
];

const ACTION_PLANS = [
  {
    tag: "LANGKAH 1",
    tagClass: "action-plan-card__tag--brand",
    title: "Penguatan Nilai Tugas Bahasa Inggris",
    desc: "Targetkan minimal 89 pada penulisan esai ilmiah & remedial modul reading comprehension semester 5.",
    footerIcon: <IconCheckCircle size={13} color="#006190" />,
    footerText: "Minggu ke-1 Smt 5",
    footerClass: "action-plan-card__footer-text--brand",
  },
  {
    tag: "LANGKAH 2",
    tagClass: "action-plan-card__tag--muted",
    title: "Portofolio Kompetisi Sains",
    desc: "Daftarkan sertifikat Juara 2 OSN Informatika Kota Jakarta untuk nilai tambah sertifikasi institusional.",
    footerIcon: <IconChevronRight size={5} color="#525E7E" />,
    footerText: "Sebelum verifikasi PDSS",
    footerClass: "action-plan-card__footer-text--muted",
  },
  {
    tag: "LANGKAH 3",
    tagClass: "action-plan-card__tag--amber",
    title: "Simulasi Pemeringkatan Paralel",
    desc: "Ikuti uji rasionalisasi internal sekolah untuk mengamankan kuota 40% siswa eligible sekolah akreditasi A.",
    footerIcon: <IconAlertTriangle size={14} color="#7C5400" />,
    footerText: "Deadline: Smt 5",
    footerClass: "action-plan-card__footer-text--amber",
  },
];

// Chart data
const CHART_POINTS = [
  { sem: "Semester 1", val: 88.5, x: 15, y: 108 },
  { sem: "Semester 2", val: 90.2, x: 38, y: 84 },
  { sem: "Semester 3", val: 92.4, x: 61, y: 51 },
  { sem: "Semester 4", val: 94.1, x: 85, y: 28 },
];

const SKILL_CHIPS = [
  "Python & C++",
  "Machine Learning",
  "Natural Language Processing",
  "Deep Learning (PyTorch)",
  "Linear Algebra",
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function SiteHeader() {
  return (
    <header className="ak-header" role="banner">
      <nav className="ak-nav" aria-label="Navigasi utama">
        {/* Brand */}
        <a className="ak-brand" href="/beranda" aria-label="ArahMasaDepan - Beranda">
          <span className="ak-brand__icon" aria-hidden="true">
            <IconCompass size={18} color="#FFFFFF" />
          </span>
          <span className="ak-brand__text">
            <span className="ak-brand__name">ArahMasaDepan</span>
            <span className="ak-brand__badge">Siswa SMA &bull; Kurikulum Merdeka</span>
          </span>
        </a>

        {/* Nav links */}
        <ul className="ak-nav-links" role="list" style={{ listStyle: "none" }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`ak-nav-link${link.active ? " ak-nav-link--active" : ""}`}
                aria-current={link.active ? "page" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="ak-nav-actions">
          <button className="ak-nav-search" type="button" aria-label="Cari jurusan atau karir">
            <IconSearch size={14} color="#3F4850" />
            <span className="ak-nav-search__label">Cari Prodi / Karir</span>
            <span className="ak-nav-search__kbd" aria-label="Pintasan keyboard Command K">&#8984;K</span>
          </button>

          <button className="ak-nav-notif" type="button" aria-label="Notifikasi, ada pesan baru">
            <IconBell size={14} color="#3F4850" />
            <span className="ak-nav-notif__dot" aria-hidden="true" />
          </button>

          <span className="ak-nav-divider" aria-hidden="true" />

          <button className="ak-nav-user" type="button" aria-label="Menu akun Citra Lestari">
            <span className="ak-nav-user__avatar" aria-hidden="true">
              <IconUser size={12} color="#FFFFFF" />
            </span>
            <span className="ak-nav-user__info">
              <span className="ak-nav-user__name">Citra Lestari</span>
              <span className="ak-nav-user__role">Kelas 12 IPA 1</span>
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

// ── Target Hero Card ──────────────────────────────────────────────────────────

function TargetHeroCard() {
  return (
    <section className="target-hero" aria-labelledby="target-hero-title">
      {/* Decorative blobs */}
      <div className="target-hero__blob1" aria-hidden="true" />
      <div className="target-hero__blob2" aria-hidden="true" />

      {/* Breadcrumb / label row */}
      <div className="target-hero__breadcrumb">
        <span className="target-hero__badge">
          <span className="target-hero__badge-dot" aria-hidden="true" />
          Laporan Analisis Keselarasan &bull; SNBP 2025
        </span>
        <span className="target-hero__badge2">Pertimbangan Mandela 2024/2025</span>
      </div>

      {/* Inner: left + right */}
      <div className="target-hero__inner">
        {/* Left: program info */}
        <div className="target-hero__left">
          {/* Program row */}
          <div className="target-hero__program-row">
            <span className="target-hero__program-label">TARGET S1 / ITB-UI</span>
            <IconGraduationCap size={16} color="#006190" />
          </div>

          {/* H1 */}
          <h1 className="target-hero__title" id="target-hero-title">
            S1 Teknik Informatika (Fasilkom UI / STEI ITB)
          </h1>

          {/* Info tags */}
          <div className="target-hero__tags">
            <span className="target-hero__tag">
              <IconBuilding size={15} color="#006190" />
              Karir Impian: Artificial Intelligence Engineer
            </span>
            <span className="target-hero__tag" style={{ background: "#EFF4FF" }}>
              <IconSchool size={17} color="#525E7E" />
              Status: Citra Lestari &bull; NISN: 0064921820
            </span>
          </div>
        </div>

        {/* Right: student photo & cluster */}
        <aside className="target-hero__right" aria-label="Identitas siswa dan klaster">
          {/* Avatar */}
          <div className="target-hero__avatar" aria-label="Foto profil Citra Lestari">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="22" cy="18" r="10" fill="#CBE6FF" />
              <ellipse cx="22" cy="38" rx="16" ry="10" fill="#CBE6FF" />
              <circle cx="22" cy="18" r="7" fill="#006190" opacity="0.3" />
            </svg>
          </div>
          {/* Info */}
          <div className="target-hero__student-info">
            <span className="target-hero__cluster-label">Estimasi / Validasi</span>
            <span className="target-hero__cluster-value">Klaster I Unggulan</span>
            <span className="target-hero__cluster-sub">96% Prediksi Match</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

// ── 4 Quick Metrics ───────────────────────────────────────────────────────────

function QuickMetrics() {
  return (
    <section aria-label="Metrik Cepat Analisis">
      <div className="metrics-row">
        {QUICK_METRICS.map((m, idx) => (
          <article key={idx} className="metric-card">
            <div className="metric-card__header">
              <span className="metric-card__label">{m.label}</span>
              <span className={`metric-card__icon-wrap ${m.iconWrapClass}`} aria-hidden="true">
                {m.icon}
              </span>
            </div>
            <div className="metric-card__value-row">
              <span className={`metric-card__big ${m.bigClass}`}>{m.bigValue}</span>
              <span className={m.unitClass}>{m.unit}</span>
            </div>
            <div className="metric-card__footer">
              <span aria-hidden="true">{m.footerIcon}</span>
              <span className={`metric-card__footer-text ${m.footerClass}`}>{m.footerText}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ── Sticky Action Bar ─────────────────────────────────────────────────────────

function ActionBar() {
  return (
    <div className="action-bar-wrap" role="toolbar" aria-label="Aksi halaman">
      <div className="action-bar">
        {/* Left: student info */}
        <div className="action-bar__left">
          <span className="action-bar__icon-wrap" aria-hidden="true">
            <IconBookOpen size={12} color="#006190" />
          </span>
          <div className="action-bar__text">
            <span className="action-bar__title">Analisis Keselarasan: S1 Teknik Informatika</span>
            <span className="action-bar__sub">Citra Lestari &bull; SMAN 8 Jakarta &bull; Kelas 12 IPA 1</span>
          </div>
        </div>

        {/* Right: action buttons */}
        <div className="action-bar__right">
          <button className="btn-ghost-pill-sm" type="button">
            <IconGraduationCap size={13} color="#0B1C30" />
            Alternatif Prodi
          </button>
          <button className="btn-ghost-pill-sm btn-ghost-pill-sm--blue" type="button">
            <IconMessage size={15} color="#006190" />
            Konsultasi BK
          </button>
          <button className="btn-primary-pill-lg" type="button">
            <IconDownload size={16} color="#FFFFFF" />
            Unduh Laporan Analisis Keselarasan (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Gap Analysis Section ──────────────────────────────────────────────────────

function GapAnalysisSection() {
  return (
    <article className="section-card" aria-labelledby="gap-analysis-title">
      {/* Header */}
      <div className="sc-header">
        <div className="sc-header__left">
          <div className="sc-header__title-row">
            <IconBarChart size={18} color="#006190" aria-hidden="true" />
            <h2 className="sc-header__title" id="gap-analysis-title">
              Analisis Kesenjangan Mapel Pendukung
            </h2>
          </div>
          <p className="sc-header__subtitle">
            Komparasi nilai kamu vs threshold penerimaan per bidang studi, nilai 24/VI/2022
          </p>
        </div>
        <span className="sc-header__badge">Bobot SNBP 20%</span>
      </div>

      {/* Subject rows */}
      <div className="gap-rows" role="list" aria-label="Daftar analisis mata pelajaran">
        {SUBJECTS.map((s, idx) => (
          <div
            key={idx}
            className={`subject-row${s.isDeficit ? " subject-row--deficit" : ""}`}
            role="listitem"
            aria-label={`Mata pelajaran ${s.name}`}
          >
            {/* Top row */}
            <div className="subject-row__top">
              {/* Left: icon + name */}
              <div className="subject-row__left">
                <span className={`subject-row__icon-box ${s.iconBoxClass}`} aria-hidden="true">
                  {s.icon}
                </span>
                <div className="subject-row__meta">
                  <span className="subject-row__name">{s.name}</span>
                  <span className={`subject-row__category${s.isDeficit ? " subject-row__category--deficit" : ""}`}>
                    {s.category}
                  </span>
                </div>
              </div>
              {/* Right: score + badge */}
              <div className="subject-row__right">
                <span className="subject-row__score">{s.score}</span>
                <span className="subject-row__score-unit">{s.scoreTarget}</span>
                <span className={`subject-row__badge ${s.badgeClass}`}>{s.badge}</span>
              </div>
            </div>

            {/* Bar */}
            <div className="subject-row__bar-wrap">
              <div className="subject-row__track" role="presentation">
                <div
                  className={`subject-row__fill ${s.fillClass}`}
                  style={{ width: `${s.fillPct}%` }}
                  aria-label={`Nilai ${s.score}`}
                />
                <div
                  className={`subject-row__divider${s.isDeficit ? " subject-row__divider--deficit" : ""}`}
                  style={{ left: `${s.targetPct}%` }}
                  aria-hidden="true"
                />
              </div>
              <div className="subject-row__bar-labels">
                <span className="subject-row__bar-label">{s.leftLabel}</span>
                <span className={`subject-row__bar-label ${s.rightLabelClass}`}>{s.rightLabel}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

// ── Action Plan Section ───────────────────────────────────────────────────────

function ActionPlanSection() {
  return (
    <article className="section-card" aria-labelledby="action-plan-title">
      {/* Header */}
      <div className="sc-header">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span className="sc-icon-box sc-icon-box--circle" aria-hidden="true">
            <IconCalendar size={16} color="#FFFFFF" />
          </span>
          <div>
            <h2 className="sc-header__title" id="action-plan-title">Rencana Aksi Semester 5</h2>
            <p className="sc-header__subtitle">
              Strategi terstruktur untuk menutup gap nilai dan memperkuat posisi rasionalisasi SNBP
            </p>
          </div>
        </div>
      </div>

      {/* 3-column action cards */}
      <div className="action-plan-grid">
        {ACTION_PLANS.map((plan, idx) => (
          <div key={idx} className="action-plan-card">
            <div className="action-plan-card__body">
              <span className={`action-plan-card__tag ${plan.tagClass}`}>{plan.tag}</span>
              <h3 className="action-plan-card__title">{plan.title}</h3>
              <p className="action-plan-card__desc">{plan.desc}</p>
            </div>
            <div className="action-plan-card__footer">
              <span aria-hidden="true">{plan.footerIcon}</span>
              <span className={`action-plan-card__footer-text ${plan.footerClass}`}>
                {plan.footerText}
              </span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

// ── Inline SVG Line Chart ─────────────────────────────────────────────────────

function NilaiKonsistensiChart() {
  // Build SVG path from chart points
  // viewBox: 0 0 428 180, chart area x: 65..420, y: 20..160
  const pts = [
    { x: 65, y: 116, val: "88.5", sem: "Semester 1" },
    { x: 164, y: 83, val: "90.2", sem: "Semester 2" },
    { x: 263, y: 51, val: "92.4", sem: "Semester 3" },
    { x: 362, y: 28, val: "94.1", sem: "Semester 4" },
  ];

  const lineD = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaD = `${lineD} L ${pts[pts.length - 1].x} 155 L ${pts[0].x} 155 Z`;

  return (
    <article className="section-card chart-section" aria-labelledby="chart-title">
      {/* Header */}
      <div className="sc-header">
        <div className="sc-header__left">
          <h2 className="sc-header__title" id="chart-title">Tren Nilai Rapor (Sem 1 - 4)</h2>
          <p className="sc-header__subtitle">Rata-rata nilai kumulatif Mapel Pendukung SNBP</p>
        </div>
        <span className="chart-badge">+6.3% Linear</span>
      </div>

      {/* SVG Chart */}
      <div className="chart-svg-wrap" role="img" aria-label="Grafik tren nilai semester 1 sampai 4, menunjukkan peningkatan dari 88.5 ke 94.1">
        <svg viewBox="0 0 428 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          {/* Grid lines */}
          {[20, 60, 100, 140].map((y) => (
            <line key={y} x1="65" y1={y} x2="420" y2={y} stroke="rgba(0,97,144,0.08)" strokeWidth="1" strokeDasharray="4 4" />
          ))}

          {/* Y-axis labels */}
          {[
            { y: 20, label: "96" },
            { y: 60, label: "93" },
            { y: 100, label: "90" },
            { y: 140, label: "87" },
          ].map((item) => (
            <text key={item.y} x="8" y={item.y + 5} fontFamily="Plus Jakarta Sans" fontSize="10" fill="#3F4850">
              {item.label}
            </text>
          ))}

          {/* Area gradient */}
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#006190" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#006190" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaD} fill="url(#areaGrad)" />

          {/* Line */}
          <path d={lineD} stroke="#006190" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

          {/* Data points + labels */}
          {pts.map((p, i) => (
            <g key={i}>
              {/* X-axis semester label */}
              <text
                x={p.x}
                y="170"
                fontFamily="Plus Jakarta Sans"
                fontSize="11"
                fill="#3F4850"
                textAnchor="middle"
                fontWeight={i === pts.length - 1 ? "600" : "400"}
              >
                {p.sem}
              </text>

              {/* Point */}
              {i < pts.length - 1 ? (
                <circle cx={p.x} cy={p.y} r="6" fill="#FFFFFF" stroke="#006190" strokeWidth="3" />
              ) : (
                <circle cx={p.x} cy={p.y} r="7" fill="#006190" stroke="#FFFFFF" strokeWidth="2" />
              )}

              {/* Value label */}
              <text
                x={p.x}
                y={p.y - 12}
                fontFamily="Plus Jakarta Sans"
                fontSize={i === pts.length - 1 ? "12" : "11"}
                fill="#006190"
                textAnchor="middle"
                fontWeight="700"
              >
                {p.val}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Insight strip */}
      <div className="chart-insight">
        <span className="chart-insight__text">
          Tren nilai stabil meningkat. Proyeksi Semester 5:
        </span>
        <span className="chart-insight__strong">
          Nilai 95.5 (Optimal untuk Informatika)
        </span>
      </div>
    </article>
  );
}

// ── Career Map Section ────────────────────────────────────────────────────────

function CareerMapSection() {
  return (
    <article className="section-card" aria-labelledby="career-title">
      {/* Header */}
      <div className="sc-header">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            width: 36, height: 36, background: "#E5EEFF", borderRadius: 12, flexShrink: 0
          }} aria-hidden="true">
            <IconBriefcase size={18} color="#006190" />
          </span>
          <h2 className="sc-header__title" id="career-title">Peta Karir Impian</h2>
        </div>
        <span style={{
          padding: "2px 10px", background: "#D9E2FF", borderRadius: 9999,
          fontSize: 11, fontWeight: 700, letterSpacing: "0.44px", color: "#0D1A37", whiteSpace: "nowrap"
        }}>
          High Demand 2030
        </span>
      </div>

      {/* Banner image-like area */}
      <div className="career-banner" aria-label="Artificial Intelligence Engineer career banner">
        <div className="career-banner__bg" aria-hidden="true" />
        <div className="career-banner__overlay" aria-hidden="true" />
        <div className="career-banner__content">
          <h3 className="career-banner__title">Artificial Intelligence Engineer</h3>
          <p className="career-banner__sub">
            Spesialis Algoritma Pembelajaran Mesin &amp; Pemodelan Data Komputasi
          </p>
        </div>
      </div>

      {/* Metric highlights */}
      <div className="career-metrics">
        <div className="career-metric-box">
          <div className="career-metric-box__label">Potensi Pendapatan Awal</div>
          <div style={{ marginTop: 4 }}>
            <span className="career-metric-box__value">Rp 10–20</span>
            <span className="career-metric-box__unit"> jt/bln</span>
          </div>
        </div>
        <div className="career-metric-box">
          <div className="career-metric-box__label">Peluang Pertumbuhan</div>
          <div style={{ marginTop: 4 }}>
            <span className="career-metric-box__value">+38%</span>
            <span className="career-metric-box__unit"> /thn</span>
          </div>
        </div>
      </div>

      {/* Skill stack chips */}
      <div>
        <p className="skill-chips-label">Skill Stack yang Dibutuhkan:</p>
        <div className="skill-chips">
          {SKILL_CHIPS.map((chip) => (
            <span key={chip} className="skill-chip">{chip}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

// ── BK Teacher Validation ─────────────────────────────────────────────────────

function BKValidationSection() {
  return (
    <article className="section-card" aria-labelledby="bk-section-title">
      {/* Header */}
      <div className="sc-header">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span className="sc-icon-box sc-icon-box--circle" aria-hidden="true">
            <IconUser size={15} color="#FFFFFF" />
          </span>
          <div>
            <h2 className="sc-header__title" id="bk-section-title">
              Catatan &amp; Validasi Guru Pembimbing BK
            </h2>
            <p className="sc-header__subtitle">Bimbingan Konseling &amp; Kepercayaan PNBP</p>
          </div>
        </div>
        <span className="bk-verified-badge">
          <IconCheck size={9} color="#006190" />
          Divalidasi
        </span>
      </div>

      {/* Quote box */}
      <div className="bk-quote-box">
        {/* Watermark */}
        <div className="bk-quote-box__watermark" aria-hidden="true">
          <IconQuote size={34} color="#D3E4FE" />
        </div>

        {/* Quote text */}
        <blockquote className="bk-quote-text">
          &ldquo;Citra menunjukkan stabilitas nilai matematika dan algoritma yang luar biasa sejak semester 1. Pilihan target S1 Teknik Informatika di UI/ITB sangat rasional dengan catatan Citra fokus menutup gap 3 poin nilai Bahasa Inggris di semester 5. Kami menyetujui Citra masuk dalam slot 1 pendaftar Informatika dari sekolah.&rdquo;
        </blockquote>
      </div>

      {/* Teacher info row */}
      <div className="bk-teacher-row">
        <div className="bk-teacher">
          {/* Avatar */}
          <div className="bk-teacher__avatar" aria-label="Foto Dra. Sica Anggraini M.Pd">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="14" cy="11" r="6" fill="#CBE6FF" />
              <ellipse cx="14" cy="25" rx="11" ry="7" fill="#CBE6FF" />
              <circle cx="14" cy="11" r="4" fill="#006190" opacity="0.25" />
            </svg>
          </div>
          <div className="bk-teacher__info">
            <span className="bk-teacher__name">Dra. Sica Anggraini, M.Pd</span>
            <span className="bk-teacher__title">Koordinator BK SMAN 8 Jakarta</span>
          </div>
        </div>

        {/* Validated timestamp */}
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.44px", color: "#3F4850" }}>
          Validated: 11 Oct 2024
        </span>
      </div>
    </article>
  );
}

// ── Site Footer ───────────────────────────────────────────────────────────────

function SiteFooter() {
  return (
    <footer className="ak-footer" role="contentinfo">
      <div className="ak-footer__inner">
        <div className="ak-footer__cols">
          {/* Brand */}
          <div>
            <div className="ak-footer__brand-logo">
              <span className="ak-footer__brand-icon" aria-hidden="true">
                <IconCompass size={15} color="#FFFFFF" />
              </span>
              <span className="ak-footer__brand-name">ArahMasaDepan</span>
            </div>
            <p className="ak-footer__brand-desc">
              Platform diagnostik minat bakat dan panduan pilihan program studi
              SNBP, SNBT, dan Jalur Mandiri berstandar Kurikulum Merdeka.
            </p>
          </div>

          {/* Fitur Unggulan */}
          <div>
            <h3 className="ak-footer__col-heading">Fitur Unggulan</h3>
            <ul className="ak-footer__col-list">
              {["Tes RIASEC Holland", "Matriks Keselarasan Mapel", "Simulasi Rasionalisasi SNBP"].map((item) => (
                <li key={item} className="ak-footer__col-item">{item}</li>
              ))}
            </ul>
          </div>

          {/* Eksplorasi */}
          <div>
            <h3 className="ak-footer__col-heading">Eksplorasi</h3>
            <ul className="ak-footer__col-list">
              {["Peta Karir Vokasi & Akademik", "Direktori PTN & PTS", "Panduan Portofolio Seni & Olahraga"].map((item) => (
                <li key={item} className="ak-footer__col-item">{item}</li>
              ))}
            </ul>
          </div>

          {/* Pusat Bantuan */}
          <div>
            <h3 className="ak-footer__col-heading">Pusat Bantuan</h3>
            <p className="ak-footer__col-help">
              Konsultasi BK Sekolah &amp; Layanan Panduan Siswa
            </p>
            <button className="ak-footer__help-btn" type="button">
              <IconMessage size={13} color="#006190" />
              Bantuan Konselor BK
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ak-footer__bottom">
          <span className="ak-footer__copyright">
            &copy; 2026 ArahMasaDepan &bull; Inisiatif Pendampingan Karir Siswa Indonesia
          </span>
          <nav className="ak-footer__legal" aria-label="Tautan legal">
            <a href="/kebijakan-privasi" className="ak-footer__legal-link">
              Kebijakan Privasi Data Siswa
            </a>
            <a href="/ketentuan-layanan" className="ak-footer__legal-link">
              Ketentuan Layanan
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AnalitikPage() {
  return (
    <div className="page-analitik">
      {/* Header */}
      <SiteHeader />

      {/* Main */}
      <main className="ak-main" id="main-content">
        <div className="ak-container">

          {/* 1. Target overview hero card */}
          <TargetHeroCard />

          {/* 2. 4 Quick metrics */}
          <QuickMetrics />

          {/* 3. Sticky Action Bar */}
          <ActionBar />

          {/* 4. Two-column main grid */}
          <div className="ak-grid">
            {/* Left column */}
            <div className="ak-col-left">
              <GapAnalysisSection />
              <ActionPlanSection />
            </div>

            {/* Right column */}
            <div className="ak-col-right">
              <NilaiKonsistensiChart />
              <CareerMapSection />
              <BKValidationSection />
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
