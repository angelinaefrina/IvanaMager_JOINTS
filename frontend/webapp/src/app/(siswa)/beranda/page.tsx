import React from "react";
import "../../../styles/beranda.css";

// SVG Icons
import {
  IconCompass,
  IconTarget,
  IconBookOpen,
  IconCheck,
  IconCheckCircle,
  IconCheckMuted,
  IconTrendUp,
  IconTrendDown,
  IconArrowRight,
  IconChevronRight,
  IconBuilding,
  IconSchool,
  IconBell,
  IconSearch,
  IconUser,
  IconUpload,
  IconCalendar,
  IconDownload,
  IconStar,
  IconBarChart,
  IconLayers,
  IconGrid,
  IconClock,
  IconShield,
  IconMessage,
  IconDiploma,
} from "../../../components/siswa/Icons";


// ─── Data ────────────────────────────────────────────────────────────────────

const RIASEC_SCORES = [
  { label: "Investigative (I)", pct: 92, level: "Sangat Tinggi", color: "#006190" },
  { label: "Realistic (R)", pct: 78, level: "Tinggi", color: "#007BB5" },
  { label: "Conventional (C)", pct: 70, level: "Tinggi", color: "#525E7E" },
  { label: "Artistic (A)", pct: 55, level: "Sedang", color: "#7C5400" },
  { label: "Enterprising (E)", pct: 48, level: "Sedang", color: "#6F7881" },
  { label: "Social (S)", pct: 42, level: "Cukup", color: "#BEC7D2" },
];

const SUBJECTS = [
  { name: "Informatika", grade: "A+", trend: "+15% di atas rata-rata sekolah", score: 96, avg: "Rata-rata 81" },
  { name: "Matematika TL", grade: "A", trend: "+12% di atas rata-rata sekolah", score: 94, avg: "Rata-rata 82" },
  { name: "Fisika", grade: "A", trend: "+9% di atas rata-rata sekolah", score: 91, avg: "Rata-rata 82" },
];

const CHECKLIST = [
  { label: "Profil", done: true },
  { label: "Rapor S1-S4", done: true },
  { label: "RIASEC", done: true },
  { label: "Target Prodi", done: true },
  { label: "Portofolio Prestasi", done: false },
];

const NAV_LINKS = [
  { label: "Beranda", href: "/beranda", active: true },
  { label: "Rekomendasi", href: "/rekomendasi" },
  { label: "Eksplorasi Karir", href: "/eksplorasi-karir", multiline: true },
  { label: "Analisis Keselarasan", href: "/analitik", multiline: true },
  { label: "Katalog Kampus", href: "/katalog-prodi", multiline: true },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SiteHeader() {
  return (
    <header className="site-header" role="banner">
      <nav className="nav-bar" aria-label="Navigasi utama">
        {/* Brand */}
        <a className="nav-brand" href="/beranda" aria-label="ArahMasaDepan - Beranda">
          <span className="nav-brand__icon" aria-hidden="true">
            <IconCompass size={18} color="#FFFFFF" />
          </span>
          <span className="nav-brand__text">
            <span className="nav-brand__name">ArahMasaDepan</span>
            <span className="nav-brand__badge">Siswa SMA &bull; Kurikulum Merdeka</span>
          </span>
        </a>

        {/* Nav Links */}
        <ul className="nav-links" role="list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex" }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link${link.active ? " nav-link--active" : ""}`}
                aria-current={link.active ? "page" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          {/* Search */}
          <button className="nav-search" aria-label="Cari Prodi atau Karir">
            <IconSearch size={14} color="#3F4850" />
            <span className="nav-search__label">Cari Prodi / Karir</span>
            <span className="nav-search__kbd" aria-label="Pintasan keyboard Command K">
              &#8984;K
            </span>
          </button>

          {/* Notification */}
          <button className="nav-notif" aria-label="Notifikasi seleksi, ada pesan baru">
            <IconBell size={14} color="#3F4850" />
            <span className="nav-notif__dot" aria-hidden="true" />
          </button>

          {/* Divider */}
          <span className="nav-divider" aria-hidden="true" />

          {/* User */}
          <button className="nav-user" aria-label="Menu akun Citra Lestari">
            <span className="nav-user__avatar" aria-hidden="true">
              <IconUser size={12} color="#FFFFFF" />
            </span>
            <span className="nav-user__info">
              <span className="nav-user__name">Citra Lestari</span>
              <span className="nav-user__role">Kelas 12 IPA 1</span>
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

// ─── Section 1: Hero Header ────────────────────────────────────────────────

function HeroSection() {
  const doneCount = CHECKLIST.filter((c) => c.done).length;
  const progressPct = Math.round((doneCount / CHECKLIST.length) * 100);

  return (
    <section className="hero-card" aria-labelledby="hero-greeting">
      {/* Left: bio */}
      <div className="hero-bio">
        {/* Academic year badge */}
        <div className="hero-academic-badge">
          <span className="hero-academic-badge__dot" aria-hidden="true" />
          <span className="hero-academic-badge__text">
            Tahun Akademik 2024/2025 &bull; SNBP Ready
          </span>
        </div>

        {/* Greeting */}
        <h1 className="hero-greeting" id="hero-greeting">
          Selamat Datang Kembali,{" "}
          <span>Citra Lestari</span>
        </h1>

        {/* School info */}
        <div className="hero-school-info">
          <IconSchool size={17} color="#006190" />
          <span>Kelas 12-IPA 1 &bull; SMAN 8 Jakarta &bull; NISN: 0064921820</span>
        </div>

        {/* Target / career tags */}
        <div className="hero-tags">
          <span className="hero-tag hero-tag--blue">
            <IconBuilding size={14} color="#006190" />
            Target Prodi: S1 Teknik Informatika (Fasilkom UI / STEI ITB)
          </span>
          <span className="hero-tag hero-tag--amber">
            <IconTarget size={14} color="#7C5400" />
            Karir Impian: AI Research Engineer
          </span>
        </div>
      </div>

      {/* Right: diagnostic progress tracker */}
      <aside className="hero-progress-box" aria-label="Kesiapan Diagnostik SNBP">
        {/* Header */}
        <div className="hero-progress-header">
          <div className="hero-progress-title">
            <span className="hero-progress-label">Kesiapan Diagnostik SNBP</span>
            <span className="hero-progress-value">Portofolio {progressPct}% Lengkap</span>
          </div>
          <span className="hero-progress-circle" aria-label={`${progressPct} persen`}>
            {progressPct}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="progress-bar" role="progressbar" aria-valuenow={progressPct} aria-valuemin={0} aria-valuemax={100} aria-label="Kelengkapan portofolio">
          <div className="progress-bar__fill" style={{ width: `${progressPct}%` }} />
        </div>

        {/* Checklist pills */}
        <div className="checklist-pills" role="list" aria-label="Item kelengkapan">
          {CHECKLIST.map((item) => (
            <span
              key={item.label}
              className={`checklist-pill ${item.done ? "checklist-pill--done" : "checklist-pill--pending"}`}
              role="listitem"
            >
              {item.done ? (
                <IconCheckCircle size={12} color="#006190" className="checklist-pill__icon" />
              ) : (
                <IconCheckMuted size={10} color="#6F7881" className="checklist-pill__icon" />
              )}
              {item.label}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="hero-progress-footer">
          <span className="hero-progress-step-label">Tinggal 1 langkah untuk verifikasi</span>
          <a href="/profil" className="link-inline">
            Perbarui Portofolio
            <IconArrowRight size={9} color="#006190" />
          </a>
        </div>
      </aside>
    </section>
  );
}

// ─── Column 1: Minat RIASEC ────────────────────────────────────────────────

function KolomRIASEC() {
  return (
    <article className="analytics-card" aria-labelledby="riasec-title">
      {/* Header */}
      <div className="card-header">
        <div className="card-header__left">
          <span className="card-header__icon-box" aria-hidden="true">
            <IconTarget size={16} color="#006190" />
          </span>
          <div className="card-header__title-group">
            <h2 className="card-header__title" id="riasec-title">Minat RIASEC</h2>
            <span className="card-header__subtitle">Hasil Asesmen Holland</span>
          </div>
        </div>
        <span className="badge-pill badge-pill--blue">TIPE IRC</span>
      </div>

      {/* Archetype banner */}
      <div className="archetype-banner">
        <div className="archetype-banner__label">
          <IconStar size={16} color="#006190" />
          The Analytical Architect
        </div>
        <p className="archetype-banner__body">
          Kombinasi dominan <strong>Investigative (92%)</strong> dan{" "}
          <strong>Realistic (78%)</strong> menandakan kemampuan pemecahan masalah
          komputasional berstruktur tinggi yang selaras erat dengan rekayasa
          algoritma AI dan riset perangkat lunak.
        </p>
      </div>

      {/* Score bars */}
      <div className="score-bars" role="list" aria-label="Skor RIASEC">
        {RIASEC_SCORES.map((item) => {
          const isHighlighted = item.pct >= 70;
          return (
            <div key={item.label} className="score-bar-item" role="listitem">
              <div className="score-bar-item__header">
                <span
                  className="score-bar-item__label"
                  style={{ color: isHighlighted ? "#0B1C30" : "#3F4850" }}
                >
                  <span
                    className="score-bar-item__label-dot"
                    style={{ background: item.color }}
                    aria-hidden="true"
                  />
                  {item.label}
                </span>
                <span
                  className="score-bar-item__value"
                  style={{ color: isHighlighted ? item.color : "#3F4850" }}
                >
                  {item.pct}% &bull; {item.level}
                </span>
              </div>
              <div className="score-bar-track">
                <div
                  className="score-bar-fill"
                  style={{ width: `${item.pct}%`, background: item.color }}
                  aria-hidden="true"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="card-footer-action">
        <button className="btn-ghost-pill" type="button">
          Eksplorasi Profil Minat Lengkap
          <IconChevronRight size={5} color="#006190" />
        </button>
      </div>
    </article>
  );
}

// ─── Column 2: Kekuatan Rapor ─────────────────────────────────────────────

function KolomRapor() {
  return (
    <article className="analytics-card" aria-labelledby="rapor-title">
      {/* Header */}
      <div className="card-header">
        <div className="card-header__left">
          <span className="card-header__icon-box" aria-hidden="true">
            <IconBarChart size={17} color="#006190" />
          </span>
          <div className="card-header__title-group">
            <h2 className="card-header__title" id="rapor-title">Kekuatan Rapor</h2>
            <span className="card-header__subtitle">Semester 1-4 &bull; Terstandarisasi</span>
          </div>
        </div>
        <span className="badge-pill badge-pill--ink">4 Semester</span>
      </div>

      {/* Subject performance cards */}
      <div className="subject-cards" role="list" aria-label="Nilai mata pelajaran unggulan">
        {SUBJECTS.map((subject) => (
          <div key={subject.name} className="subject-card" role="listitem">
            <div className="subject-card__left">
              <div className="subject-card__name-row">
                <span className="subject-card__name">{subject.name}</span>
                <span className="subject-card__grade-badge">{subject.grade}</span>
              </div>
              <div className="subject-card__trend">
                <IconTrendUp size={10} color="#006190" />
                {subject.trend}
              </div>
            </div>
            <div className="subject-card__right">
              <span className="subject-card__score">{subject.score}</span>
              <span className="subject-card__avg">{subject.avg}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Verification strip */}
      <div className="verification-strip" role="complementary" aria-label="Verifikasi nilai oleh Guru BK">
        <span className="verification-strip__avatar" aria-hidden="true">
          <IconShield size={12} color="#FFFFFF" />
        </span>
        <div className="verification-strip__info">
          <span className="verification-strip__name">Dra. Nurhayati, M.Pd</span>
          <span className="verification-strip__status">
            <IconCheck size={10} color="#006190" />
            Nilai Resmi Terverifikasi BK SMAN 8
          </span>
        </div>
      </div>

      {/* CTA */}
      <button className="btn-primary-pill" type="button">
        <IconLayers size={12} color="#FFFFFF" />
        Kelola &amp; Input Nilai Semester
      </button>
    </article>
  );
}

// ─── Column 3: Rekomendasi ────────────────────────────────────────────────

function KolomRekomendasi() {
  return (
    <article className="analytics-card" aria-labelledby="rekom-title">
      {/* Header */}
      <div className="card-header">
        <div className="card-header__left">
          <span className="card-header__icon-box" aria-hidden="true">
            <IconGrid size={17} color="#006190" />
          </span>
          <div className="card-header__title-group">
            <h2 className="card-header__title" id="rekom-title">Pilihan Teratas</h2>
            <span className="card-header__subtitle">Rekomendasi Algoritma SNBP</span>
          </div>
        </div>
        <span className="badge-dot" aria-label="Status aktif" />
      </div>

      {/* Major showcase card */}
      <div className="major-showcase">
        {/* Top row */}
        <div className="major-showcase__top">
          <div className="major-showcase__name-row">
            <IconDiploma size={15} color="#006190" />
            <span className="major-showcase__name">Teknik Informatika</span>
          </div>
          <span className="match-badge">96% Match</span>
        </div>

        {/* Campus tags */}
        <div className="campus-tags">
          <IconBuilding size={12} color="#3F4850" />
          Universitas Indonesia (UI)
          <span>&bull;</span>
          ITB
        </div>

        {/* Metric blocks */}
        <div className="metric-blocks">
          <div className="metric-block">
            <span className="metric-block__label">Tren Semester 1-4</span>
            <div className="metric-block__value metric-block__value--positive">
              <IconTrendUp size={13} color="#006190" />
              +6.9% Positif
            </div>
          </div>
          <div className="metric-block">
            <span className="metric-block__label">Gap Rapor Prasyarat</span>
            <div className="metric-block__value metric-block__value--warning">
              <IconTrendDown size={3} color="#7C5400" />
              B. Inggris (-3 Poin)
            </div>
          </div>
        </div>

        {/* Insight */}
        <p className="major-showcase__insight">
          Peluang rasionalisasi Sangat Tinggi pada klaster Fakultas Ilmu Komputer
          berdasarkan bobot Mapel Pendukung Kurikulum Merdeka.
        </p>
      </div>

      {/* Alternative pathway */}
      <div className="alt-pathway">
        <div className="alt-pathway__header">
          <span className="alt-pathway__title">Alternatif 2: Sistem Informasi (91%)</span>
          <span className="alt-pathway__cta">Peluang Aman</span>
        </div>
        <p className="alt-pathway__desc">
          Sesuai bila ingin menitikberatkan integrasi bisnis dan arsitektur data industri.
        </p>
      </div>

      {/* Action stack */}
      <div className="action-stack">
        <button className="btn-ghost-pill" type="button">
          <IconCalendar size={14} color="#006190" />
          Jadwalkan Konseling dengan Guru BK
        </button>
        <button className="btn-text-link" type="button">
          <IconDownload size={11} color="#3F4850" />
          Unduh Ringkasan Rapor &amp; Analisis (PDF)
        </button>
      </div>
    </article>
  );
}

// ─── Section 3: Banner CTA ────────────────────────────────────────────────

function BannerCTA() {
  return (
    <section className="banner-cta" aria-labelledby="banner-title">
      <div className="banner-cta__left">
        <span className="banner-cta__countdown">
          <IconClock size={12} color="#FFFFFF" />
          Hitung Mundur: 42 Hari Menuju Penutupan Finalisasi SNBP 2025
        </span>
        <h2 className="banner-cta__title" id="banner-title">
          Langkah Selanjutnya: Unggah Bukti Prestasi &amp; Sertifikat
        </h2>
        <p className="banner-cta__desc">
          Tingkatkan skor rasionalisasimu hingga{" "}
          <strong>+12 poin ekstra</strong> dengan menambahkan sertifikat OSN
          Informatika tingkat Kota/Provinsi sebelum verifikasi PDSS sekolah ditutup.
        </p>
      </div>
      <div className="banner-cta__right">
        <button className="btn-white-pill" type="button">
          <IconUpload size={14} color="#006190" />
          Unggah Sertifikat Lomba
        </button>
        <button className="btn-ghost-blue" type="button">
          Cek Kalender Resmi SNPMB 2025
        </button>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────

function SiteFooter() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-cols">
          {/* Brand col */}
          <div className="footer-brand">
            <div className="footer-brand__logo">
              <span className="footer-brand__icon" aria-hidden="true">
                <IconCompass size={15} color="#FFFFFF" />
              </span>
              <span className="footer-brand__name">ArahMasaDepan</span>
            </div>
            <p className="footer-brand__desc">
              Platform diagnostik minat bakat dan panduan pilihan program studi
              SNBP, SNBT, dan Jalur Mandiri berstandar Kurikulum Merdeka.
            </p>
          </div>

          {/* Fitur Unggulan */}
          <div>
            <h3 className="footer-col__heading">Fitur Unggulan</h3>
            <ul className="footer-col__list">
              {["Tes RIASEC Holland", "Matriks Keselarasan Mapel", "Simulasi Rasionalisasi SNBP"].map((item) => (
                <li key={item} className="footer-col__item">{item}</li>
              ))}
            </ul>
          </div>

          {/* Eksplorasi */}
          <div>
            <h3 className="footer-col__heading">Eksplorasi</h3>
            <ul className="footer-col__list">
              {["Peta Karir Vokasi & Akademik", "Direktori PTN & PTS", "Panduan Portofolio Seni & Olahraga"].map((item) => (
                <li key={item} className="footer-col__item">{item}</li>
              ))}
            </ul>
          </div>

          {/* Pusat Bantuan */}
          <div>
            <h3 className="footer-col__heading">Pusat Bantuan</h3>
            <p className="footer-col__help-text">
              Konsultasi BK Sekolah &amp; Layanan Panduan Siswa
            </p>
            <button className="footer-help-btn" type="button">
              <IconMessage size={13} color="#006190" />
              Bantuan Konselor BK
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span className="footer-copyright">
            &copy; 2026 ArahMasaDepan &bull; Inisiatif Pendampingan Karir Siswa Indonesia
          </span>
          <nav className="footer-legal" aria-label="Tautan legal">
            <a href="/kebijakan-privasi" className="footer-legal__link">
              Kebijakan Privasi Data Siswa
            </a>
            <a href="/ketentuan-layanan" className="footer-legal__link">
              Ketentuan Layanan
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function BerandaSiswaPage() {
  return (
    <div className="page-beranda">
      {/* Ambient decorative blobs */}
      <div className="ambient-blob ambient-blob--top-right" aria-hidden="true" />
      <div className="ambient-blob ambient-blob--mid-left" aria-hidden="true" />

      {/* Header */}
      <SiteHeader />

      {/* Main content */}
      <main className="beranda-main" id="main-content">
        <div className="beranda-container">
          {/* Section 1 — Hero */}
          <HeroSection />

          {/* Section 2 — Analytics 3-column */}
          <section aria-label="Dashboard Analitik Siswa">
            <div className="analytics-grid">
              <KolomRIASEC />
              <KolomRapor />
              <KolomRekomendasi />
            </div>
          </section>

          {/* Section 3 — CTA Banner */}
          <BannerCTA />
        </div>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
