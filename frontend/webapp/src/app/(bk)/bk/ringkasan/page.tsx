"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "../../../../styles/bk-ringkasan.css";
import {
  IconActivity,
  IconAlertCircle,
  IconAlertTriangle,
  IconArrowRight,
  IconAward,
  IconBadgeCheck,
  IconBell,
  IconBookOpen,
  IconCheck,
  IconCheckCircle,
  IconCompass,
  IconDownload,
  IconFilePdf,
  IconGraduationCap,
  IconInfo,
  IconLightbulb,
  IconSearch,
  IconTarget,
  IconTrendUp,
  IconUser,
  IconUsers,
} from "../../../../components/bk/BkIcons";

interface RiasecItem {
  letter: string;
  name: string;
  percent: number;
  count: number;
  color: string;
  letterBg: string;
  letterColor: string;
  isDominant?: boolean;
}

const RIASEC_DATA: RiasecItem[] = [
  {
    letter: "I",
    name: "Investigative (Pemikir / Peneliti)",
    percent: 38,
    count: 109,
    color: "#006190",
    letterBg: "#D9E2FF",
    letterColor: "#0D1A37",
    isDominant: true,
  },
  {
    letter: "R",
    name: "Realistic (Praktisi / Teknis)",
    percent: 24,
    count: 69,
    color: "#007BB5",
    letterBg: "#D3E4FE",
    letterColor: "#004B71",
  },
  {
    letter: "E",
    name: "Enterprising (Perintis / Penggerak)",
    percent: 15,
    count: 43,
    color: "#525E7E",
    letterBg: "#FFDAD6",
    letterColor: "#93000A",
  },
  {
    letter: "C",
    name: "Conventional (Terstruktur / Analis Data)",
    percent: 11,
    count: 32,
    color: "#6F7881",
    letterBg: "#D3E4FE",
    letterColor: "#3F4850",
  },
  {
    letter: "S",
    name: "Social (Pendidikan / Pelayanan)",
    percent: 8,
    count: 23,
    color: "#006494",
    letterBg: "#DCE9FF",
    letterColor: "#006190",
  },
  {
    letter: "A",
    name: "Artistic (Kreatif / Ekspresi Kreatif)",
    percent: 4,
    count: 12,
    color: "#7C5400",
    letterBg: "#FFDDAF",
    letterColor: "#281800",
  },
];

interface ProdiTarget {
  name: string;
  percent: number;
  count: number;
  color: string;
}

const PRODI_DATA: ProdiTarget[] = [
  { name: "Teknik, Komputasi & AI", percent: 36, count: 104, color: "#006190" },
  { name: "Kedokteran & Kesehatan", percent: 23, count: 67, color: "#007BB5" },
  { name: "Ekonomi & Bisnis", percent: 18, count: 52, color: "#525E7E" },
  { name: "Hukum & Soshum", percent: 12, count: 35, color: "#7C5400" },
  { name: "Sains Murni & Hayati", percent: 6, count: 17, color: "#9D6B00" },
  { name: "Vokasi Terapan & Desain", percent: 4, count: 13, color: "#BEC7D2" },
];

interface MapelPilihan {
  name: string;
  count: number;
  percent: number;
  color: string;
}

const MAPEL_DATA: MapelPilihan[] = [
  { name: "Matematika Tingkat Lanjut", count: 210, percent: 72.9, color: "#006190" },
  { name: "Informatika / Pemrograman", count: 185, percent: 64.2, color: "#007BB5" },
  { name: "Fisika", count: 160, percent: 55.5, color: "#525E7E" },
  { name: "Bahasa Inggris Tingkat Lanjut", count: 142, percent: 49.3, color: "#BAC6EB" },
  { name: "Kimia", count: 110, percent: 38.2, color: "#6F7881" },
  { name: "Biologi", count: 98, percent: 34.0, color: "#6F7881" },
  { name: "Ekonomi / Akuntansi", count: 85, percent: 29.5, color: "#FFBA42" },
];

export default function BkRingkasanPage() {
  const [selectedGrade, setSelectedGrade] = useState<string>("12");
  const [selectedRombel, setSelectedRombel] = useState<string>("all");
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="bkr-page">
      {/* ================= FLOATING NAVBAR ================= */}
      <div className="bkr-navbar-wrapper">
        <header className="bkr-navbar">
          {/* Brand & School Info */}
          <Link href="/bk/dashboard" className="bkr-nav-brand">
            <div className="bkr-brand-logo-badge">
              <Image
                src="/images/logo-tight.png"
                alt="ArahIn Logo"
                width={30}
                height={30}
                className="bkr-brand-logo-img"
              />
            </div>
            <div className="bkr-brand-info">
              <div className="bkr-brand-title-row">
                <span className="bkr-brand-name">
                  <span className="bkr-brand-name-arah">Arah</span>
                  <span className="bkr-brand-name-in">In</span>
                </span>
                <span className="bkr-portal-badge">PORTAL BK</span>
              </div>
              <span className="bkr-brand-school">SMA Negeri 1 Jakarta</span>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="bkr-nav-links" aria-label="Navigasi BK">
            <Link href="/bk/dashboard" className="bkr-nav-item inactive">
              Dashboard Siswa
            </Link>
            <Link href="/bk/siswa/citra-lestari" className="bkr-nav-item inactive">
              Detail Siswa &amp; Konseling
            </Link>
            <Link href="/bk/nilai-rapor" className="bkr-nav-item inactive">
              Impor Nilai Massal
            </Link>
            <Link href="/bk/ringkasan" className="bkr-nav-item active">
              Ringkasan Angkatan
            </Link>
          </nav>

          {/* Right Section: Quick Search, Bell, Profile */}
          <div className="bkr-nav-right">
            <div className="bkr-nav-search">
              <IconSearch size={14} color="#6F7881" />
              <input
                type="text"
                placeholder="Cari nama / NISN..."
                className="bkr-nav-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="bkr-nav-kbd">⌘K</span>
            </div>

            <button
              type="button"
              className="bkr-nav-bell-btn"
              aria-label="Notifikasi BK"
              onClick={() => setActiveModal("Notifikasi: Terdapat 8 pembaruan data angkatan")}
            >
              <IconBell size={17} color="#3F4850" />
              <span className="bkr-nav-bell-badge">8</span>
            </button>

            {/* Profile Pill */}
            <div className="bkr-profile-pill">
              <div className="bkr-profile-avatar">
                <IconUser size={15} color="#FFFFFF" />
                <span className="bkr-profile-status-dot" />
              </div>
              <div className="bkr-profile-meta">
                <div className="bkr-profile-name-row">
                  <span className="bkr-profile-name">Dra. Rina Anggraini, M.Pd</span>
                  <span className="bkr-profile-badge">Koord. BK</span>
                </div>
                <span className="bkr-profile-sub">Koordinator BK • SMAN 1</span>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <main className="bkr-main-container">
        {/* --- Metatag Context Strip & Utility Controls --- */}
        <section className="bkr-context-strip">
          <div className="bkr-meta-tag-pill">
            <span className="bkr-meta-dot" />
            <span className="bkr-meta-title">ANALITIK TINGKAT ANGKATAN</span>
            <span className="bkr-meta-sep">•</span>
            <span className="bkr-meta-code">UC13 / F15</span>
            <span className="bkr-meta-sep">•</span>
            <span className="bkr-meta-year">T.A. 2024/2025</span>
          </div>

          <div className="bkr-utility-actions">
            <button
              type="button"
              className="bkr-btn-export-csv"
              onClick={() => setActiveModal("Ekspor Raw Data CSV")}
            >
              <IconDownload size={14} color="#006190" />
              Export Raw Data CSV
            </button>
            <button
              type="button"
              className="bkr-btn-print-pdf"
              onClick={() => setActiveModal("Cetak Laporan Eksekutif PDF")}
            >
              <IconFilePdf size={14} color="#FFFFFF" />
              Cetak Laporan Eksekutif PDF
            </button>
          </div>
        </section>

        {/* --- Header Section & Cohort Filter Hub --- */}
        <section className="bkr-header-row">
          <div className="bkr-header-text">
            <h1 className="bkr-page-title">Ringkasan Distribusi &amp; Peta Aspirasi Angkatan</h1>
            <p className="bkr-page-subtitle">
              Analisis agregat pola minat Holland (RIASEC), rumpun program studi target, pemilihan mata pelajaran
              peminatan, serta pemetaan kuota eligible SNBP sekolah secara real-time.
            </p>
          </div>

          <div className="bkr-filter-hub">
            <div className="bkr-filter-grades">
              <button
                type="button"
                className={`bkr-grade-btn ${selectedGrade === "12" ? "active" : "inactive"}`}
                onClick={() => setSelectedGrade("12")}
              >
                Kelas 12 (2025)
              </button>
              <button
                type="button"
                className={`bkr-grade-btn ${selectedGrade === "11" ? "active" : "inactive"}`}
                onClick={() => setSelectedGrade("11")}
              >
                Kelas 11 (Fase F)
              </button>
              <button
                type="button"
                className={`bkr-grade-btn ${selectedGrade === "10" ? "active" : "inactive"}`}
                onClick={() => setSelectedGrade("10")}
              >
                Kelas 10 (Fase E)
              </button>
            </div>

            <div className="bkr-filter-rombel-row">
              <span className="bkr-rombel-label">Kelompok:</span>
              <select
                className="bkr-rombel-select"
                value={selectedRombel}
                onChange={(e) => setSelectedRombel(e.target.value)}
              >
                <option value="all">Semua Rombel (12-1 s.d. 12-8)</option>
                <option value="ipa1">12 IPA 1 (Unggulan MIPA)</option>
                <option value="ipa2">12 IPA 2 (Sains &amp; Medika)</option>
                <option value="ipa3">12 IPA 3 (Teknik &amp; Komputasi)</option>
                <option value="ips1">12 IPS 1 (Bisnis &amp; Sosial)</option>
              </select>
            </div>
          </div>
        </section>

        {/* ================= TOP 4 KPI CARDS ================= */}
        <section className="bkr-kpi-grid">
          {/* Card 1: Total Siswa */}
          <div className="bkr-kpi-card">
            <div className="bkr-kpi-header">
              <div className="bkr-kpi-icon-circle">
                <IconUsers size={20} color="#006190" />
              </div>
              <span className="bkr-kpi-badge" style={{ background: "#D9E2FF", color: "#0D1A37" }}>
                100% Mengisi
              </span>
            </div>
            <div className="bkr-kpi-body">
              <span className="bkr-kpi-label">Total Siswa Angkatan</span>
              <div className="bkr-kpi-value-row">
                <span className="bkr-kpi-num" style={{ color: "#0B1C30" }}>288</span>
                <span className="bkr-kpi-unit">Siswa Aktif</span>
              </div>
              <span className="bkr-kpi-subtext">8 Rombongan Belajar • SMAN 1 Jakarta</span>
            </div>
          </div>

          {/* Card 2: Rumpun Target Terpopuler */}
          <div className="bkr-kpi-card">
            <div className="bkr-kpi-header">
              <div className="bkr-kpi-icon-circle">
                <IconGraduationCap size={20} color="#007BB5" />
              </div>
              <span className="bkr-kpi-badge" style={{ background: "#CBE6FF", color: "#004B71" }}>
                Pilihan #1
              </span>
            </div>
            <div className="bkr-kpi-body">
              <span className="bkr-kpi-label">Rumpun Target Terpopuler</span>
              <div className="bkr-kpi-value-row">
                <span className="bkr-kpi-num" style={{ color: "#006190" }}>42%</span>
                <span className="bkr-kpi-unit" style={{ color: "#0B1C30" }}>Sains &amp; Komputasi</span>
              </div>
              <span className="bkr-kpi-subtext">121 dari 288 siswa membidik prodi IT &amp; Teknik</span>
            </div>
          </div>

          {/* Card 3: Dominansi Minat Holland */}
          <div className="bkr-kpi-card">
            <div className="bkr-kpi-header">
              <div className="bkr-kpi-icon-circle">
                <IconCompass size={20} color="#525E7E" />
              </div>
              <div style={{ display: "flex", gap: "4px" }}>
                <span className="bkr-kpi-badge" style={{ background: "#D9E2FF", color: "#0D1A37", padding: "2px 6px" }}>
                  I
                </span>
                <span className="bkr-kpi-badge" style={{ background: "#DCE9FF", color: "#0B1C30", padding: "2px 6px" }}>
                  R
                </span>
              </div>
            </div>
            <div className="bkr-kpi-body">
              <span className="bkr-kpi-label">Dominansi Minat Holland</span>
              <div className="bkr-kpi-value-row">
                <span className="bkr-kpi-num" style={{ color: "#0B1C30" }}>56%</span>
                <span className="bkr-kpi-unit" style={{ color: "#0B1C30" }}>Investigative &amp; Realistic</span>
              </div>
              <span className="bkr-kpi-subtext">162 siswa berkarakter analitis &amp; rekayasa</span>
            </div>
          </div>

          {/* Card 4: Prediksi Kuota Eligible SNBP */}
          <div className="bkr-kpi-card">
            <div className="bkr-kpi-header">
              <div className="bkr-kpi-icon-circle">
                <IconAward size={20} color="#7C5400" />
              </div>
              <span className="bkr-kpi-badge" style={{ background: "#FFDDAF", color: "#281800" }}>
                Akreditasi A (40%)
              </span>
            </div>
            <div className="bkr-kpi-body">
              <span className="bkr-kpi-label">Prediksi Kuota Eligible SNBP</span>
              <div className="bkr-kpi-value-row">
                <span className="bkr-kpi-num" style={{ color: "#7C5400" }}>115</span>
                <span className="bkr-kpi-unit">Siswa Terpilih</span>
              </div>
              <span className="bkr-kpi-subtext">Pemeringkatan nilai semester 1–5 berjalan</span>
            </div>
          </div>
        </section>

        {/* ================= 2x2 DATA ANALYTICS GRID ================= */}
        <section className="bkr-analytics-grid">
          {/* WIDGET 1: Distribusi Profil Minat Holland RIASEC */}
          <div className="bkr-widget-card">
            <div>
              <div className="bkr-widget-header">
                <div className="bkr-widget-title-group">
                  <div className="bkr-widget-title-row">
                    <IconActivity size={18} color="#006190" />
                    <h2 className="bkr-widget-title">Distribusi Profil Minat Holland RIASEC</h2>
                  </div>
                  <p className="bkr-widget-subtitle">
                    Agregat tipologi kecenderungan kepribadian karir 288 siswa
                  </p>
                </div>
                <span className="bkr-widget-badge" style={{ background: "#EFF4FF", color: "#3F4850" }}>
                  Skor Baku Holland
                </span>
              </div>

              {/* Horizontal Bars */}
              <div className="bkr-riasec-list" style={{ marginTop: "20px" }}>
                {RIASEC_DATA.map((item) => (
                  <div key={item.letter} className="bkr-riasec-item">
                    <div className="bkr-riasec-row">
                      <div className="bkr-riasec-label-col">
                        <span
                          className="bkr-riasec-letter-badge"
                          style={{ background: item.letterBg, color: item.letterColor }}
                        >
                          {item.letter}
                        </span>
                        <span className="bkr-riasec-name">{item.name}</span>
                        {item.isDominant && (
                          <span className="bkr-riasec-dominant-pill">Dominan</span>
                        )}
                      </div>
                      <div className="bkr-riasec-stat-col">
                        <span className="bkr-riasec-pct">{item.percent}%</span>
                        <span className="bkr-riasec-count">({item.count} Siswa)</span>
                      </div>
                    </div>
                    <div className="bkr-bar-track">
                      <div
                        className="bkr-bar-fill"
                        style={{ width: `${item.percent}%`, background: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytical Callout */}
            <div className="bkr-callout-box">
              <div className="bkr-callout-icon">
                <IconInfo size={17} color="#006190" />
              </div>
              <p className="bkr-callout-text">
                <strong>Catatan Konselor:</strong> Sebagian besar siswa memiliki minat kuat pada pemecahan masalah abstrak
                dan rekayasa teknologi (Investigative &amp; Realistic). Pendekatan rasionalisasi jurusan perlu difokuskan
                pada pembedaan kurikulum antarcabang rekayasa/computer science.
              </p>
            </div>
          </div>

          {/* WIDGET 2: Peta Target Program Studi (Pilihan 1 SNBP) */}
          <div className="bkr-widget-card">
            <div>
              <div className="bkr-widget-header">
                <div className="bkr-widget-title-group">
                  <div className="bkr-widget-title-row">
                    <IconTarget size={18} color="#006190" />
                    <h2 className="bkr-widget-title">Peta Target Program Studi (Pilihan 1 SNBP)</h2>
                  </div>
                  <p className="bkr-widget-subtitle">
                    Kategori jurusan utama yang diunggulkan siswa dalam rencana studi
                  </p>
                </div>
                <span className="bkr-widget-badge" style={{ background: "#FFDAD6", color: "#93000A" }}>
                  Kepadatan Tinggi
                </span>
              </div>

              {/* Donut Chart & Legend Split */}
              <div className="bkr-donut-split-container" style={{ marginTop: "20px" }}>
                {/* SVG Donut Chart */}
                <div className="bkr-donut-wrapper">
                  <svg width="176" height="176" viewBox="0 0 176 176" style={{ transform: "rotate(-90deg)" }}>
                    <circle
                      cx="88"
                      cy="88"
                      r="66"
                      fill="transparent"
                      stroke="#EFF4FF"
                      strokeWidth="24"
                    />
                    {/* Teknik 36% -> offset 0 */}
                    <circle
                      cx="88"
                      cy="88"
                      r="66"
                      fill="transparent"
                      stroke="#006190"
                      strokeWidth="24"
                      strokeDasharray={`${(36 * 414.69) / 100} 414.69`}
                      strokeDashoffset="0"
                    />
                    {/* Kedokteran 23% -> offset -(36%) */}
                    <circle
                      cx="88"
                      cy="88"
                      r="66"
                      fill="transparent"
                      stroke="#007BB5"
                      strokeWidth="24"
                      strokeDasharray={`${(23 * 414.69) / 100} 414.69`}
                      strokeDashoffset={`-${(36 * 414.69) / 100}`}
                    />
                    {/* Bisnis 18% -> offset -(59%) */}
                    <circle
                      cx="88"
                      cy="88"
                      r="66"
                      fill="transparent"
                      stroke="#525E7E"
                      strokeWidth="24"
                      strokeDasharray={`${(18 * 414.69) / 100} 414.69`}
                      strokeDashoffset={`-${(59 * 414.69) / 100}`}
                    />
                    {/* Hukum 12% -> offset -(77%) */}
                    <circle
                      cx="88"
                      cy="88"
                      r="66"
                      fill="transparent"
                      stroke="#7C5400"
                      strokeWidth="24"
                      strokeDasharray={`${(12 * 414.69) / 100} 414.69`}
                      strokeDashoffset={`-${(77 * 414.69) / 100}`}
                    />
                    {/* Sains 6% -> offset -(89%) */}
                    <circle
                      cx="88"
                      cy="88"
                      r="66"
                      fill="transparent"
                      stroke="#9D6B00"
                      strokeWidth="24"
                      strokeDasharray={`${(6 * 414.69) / 100} 414.69`}
                      strokeDashoffset={`-${(89 * 414.69) / 100}`}
                    />
                    {/* Vokasi 4% -> offset -(95%) */}
                    <circle
                      cx="88"
                      cy="88"
                      r="66"
                      fill="transparent"
                      stroke="#BEC7D2"
                      strokeWidth="24"
                      strokeDasharray={`${(5 * 414.69) / 100} 414.69`}
                      strokeDashoffset={`-${(95 * 414.69) / 100}`}
                    />
                  </svg>
                  <div className="bkr-donut-center-metric">
                    <span className="bkr-donut-big-num">288</span>
                    <span className="bkr-donut-sublabel">ASPIRASI</span>
                  </div>
                </div>

                {/* Legend List */}
                <div className="bkr-legend-list">
                  {PRODI_DATA.map((item) => (
                    <div key={item.name} className="bkr-legend-item">
                      <div className="bkr-legend-left">
                        <span className="bkr-legend-dot" style={{ background: item.color }} />
                        <span className="bkr-legend-name">{item.name}</span>
                      </div>
                      <div className="bkr-legend-right">
                        <span className="bkr-legend-pct">{item.percent}%</span>
                        <span className="bkr-legend-count">({item.count})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Alert Kanibalisasi Nilai */}
            <div className="bkr-alert-box">
              <div className="bkr-callout-icon">
                <IconAlertTriangle size={18} color="#BA1A1A" />
              </div>
              <p className="bkr-alert-text">
                <strong>Peringatan Kanibalisasi Nilai:</strong> Penumpukan ekstrem di prodi Kedokteran (UI &amp; UNAIR)
                serta FTI/STEI (ITB &amp; UI). Terdapat 48 siswa membidik prodi identik pada kampus yang sama,
                membutuhkan mediasi rasionalisasi kuota sekolah.
              </p>
            </div>
          </div>

          {/* WIDGET 3: Mata Pelajaran Pilihan (Fase F) */}
          <div className="bkr-widget-card">
            <div>
              <div className="bkr-widget-header">
                <div className="bkr-widget-title-group">
                  <div className="bkr-widget-title-row">
                    <IconBookOpen size={18} color="#006190" />
                    <h2 className="bkr-widget-title">Mata Pelajaran Pilihan (Fase F)</h2>
                  </div>
                  <p className="bkr-widget-subtitle">
                    Kesesuaian mapel pendukung SNBP berdasarkan Kepmen 345/M/2022
                  </p>
                </div>
                <span className="bkr-widget-badge" style={{ background: "#E5EEFF", color: "#006190" }}>
                  96% Selaras
                </span>
              </div>

              {/* Subject Take-up Bars */}
              <div className="bkr-subject-list" style={{ marginTop: "18px" }}>
                {MAPEL_DATA.map((subj) => (
                  <div key={subj.name} className="bkr-subject-item">
                    <div className="bkr-subject-row">
                      <span className="bkr-subject-name">{subj.name}</span>
                      <span className="bkr-subject-stat">
                        {subj.count} Siswa ({subj.percent}%)
                      </span>
                    </div>
                    <div className="bkr-bar-track" style={{ height: "8px" }}>
                      <div
                        className="bkr-bar-fill"
                        style={{ width: `${subj.percent}%`, background: subj.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bkr-widget-footer-row">
              <span className="bkr-footer-left-note">
                Rata-rata siswa mengambil 4 mata pelajaran peminatan
              </span>
              <span className="bkr-footer-right-status">
                <IconBadgeCheck size={14} color="#006190" />
                Validasi Kurikulum OK
              </span>
            </div>
          </div>

          {/* WIDGET 4: Status Kesiapan & Keselarasan Target Siswa */}
          <div className="bkr-widget-card">
            <div>
              <div className="bkr-widget-header">
                <div className="bkr-widget-title-group">
                  <div className="bkr-widget-title-row">
                    <IconCheckCircle size={18} color="#006190" />
                    <h2 className="bkr-widget-title">Status Kesiapan &amp; Keselarasan Target</h2>
                  </div>
                  <p className="bkr-widget-subtitle">
                    Hasil komparasi nilai rapor rata-rata terhadap batas ketat prodi idaman
                  </p>
                </div>
                <button
                  type="button"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#006190",
                    fontWeight: 700,
                    fontSize: "12px",
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveModal("Metodologi Penentuan Status Kesiapan")}
                >
                  Metodologi ⓘ
                </button>
              </div>

              {/* 3 Tier Metric Cards */}
              <div className="bkr-tier-list" style={{ marginTop: "16px" }}>
                {/* Tier 1 */}
                <div className="bkr-tier-card tier-1">
                  <div className="bkr-tier-left">
                    <div className="bkr-tier-icon-circle" style={{ background: "#D9E2FF", color: "#0D1A37" }}>
                      <IconCheck size={18} color="#0D1A37" />
                    </div>
                    <div className="bkr-tier-info">
                      <div className="bkr-tier-title-row">
                        <span className="bkr-tier-title">Sangat Selaras / Siap Bersaing</span>
                        <span className="bkr-tier-score-pill" style={{ background: "#CBE6FF", color: "#004B71" }}>
                          Skor &gt; 85
                        </span>
                      </div>
                      <span className="bkr-tier-desc">
                        Nilai rapor pendukung konsisten di kuartil teratas sekolah
                      </span>
                    </div>
                  </div>
                  <div className="bkr-tier-counts">
                    <span className="bkr-tier-count-num" style={{ color: "#0B1C30" }}>185 Siswa</span>
                    <span className="bkr-tier-pct">64.2% Angkatan</span>
                  </div>
                </div>

                {/* Tier 2 */}
                <div className="bkr-tier-card tier-2">
                  <div className="bkr-tier-left">
                    <div className="bkr-tier-icon-circle" style={{ background: "#FFDDAF", color: "#281800" }}>
                      <IconTrendUp size={18} color="#281800" />
                    </div>
                    <div className="bkr-tier-info">
                      <div className="bkr-tier-title-row">
                        <span className="bkr-tier-title">Perlu Penguatan Nilai Sem 5</span>
                        <span className="bkr-tier-score-pill" style={{ background: "#FFE8C4", color: "#7C5400" }}>
                          Skor 70–84
                        </span>
                      </div>
                      <span className="bkr-tier-desc">
                        Berpeluang lolos jika nilai mapel peminatan naik di sem 5
                      </span>
                    </div>
                  </div>
                  <div className="bkr-tier-counts">
                    <span className="bkr-tier-count-num" style={{ color: "#0B1C30" }}>84 Siswa</span>
                    <span className="bkr-tier-pct">29.2% Angkatan</span>
                  </div>
                </div>

                {/* Tier 3 */}
                <div className="bkr-tier-card tier-3">
                  <div className="bkr-tier-left">
                    <div className="bkr-tier-icon-circle" style={{ background: "#BA1A1A", color: "#FFFFFF" }}>
                      <IconAlertCircle size={18} color="#FFFFFF" />
                    </div>
                    <div className="bkr-tier-info">
                      <div className="bkr-tier-title-row">
                        <span className="bkr-tier-title">Berisiko Tinggi / Perlu Alternatif</span>
                        <span className="bkr-tier-score-pill" style={{ background: "#FFDAD6", color: "#93000A" }}>
                          Skor &lt; 70
                        </span>
                      </div>
                      <span className="bkr-tier-desc">
                        Kesenjangan skor minat-Holland atau defisit rapor &gt; 12 poin
                      </span>
                    </div>
                  </div>
                  <div className="bkr-tier-counts">
                    <span className="bkr-tier-count-num" style={{ color: "#BA1A1A" }}>19 Siswa</span>
                    <span className="bkr-tier-pct" style={{ color: "#93000A" }}>6.6% Angkatan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="bkr-widget4-cta-row">
              <span className="bkr-cta-prompt">
                Prioritaskan konseling 1-on-1 sebelum finalisasi kuota Dapodik
              </span>
              <button
                type="button"
                className="bkr-btn-review-risk"
                onClick={() => setActiveModal("Tinjau 19 Siswa Berisiko Tinggi")}
              >
                Tinjau 19 Siswa Berisiko Tinggi
                <IconArrowRight size={13} color="#FFFFFF" />
              </button>
            </div>
          </div>
        </section>

        {/* ================= STRATEGIC RECOMMENDATIONS CARD ================= */}
        <section className="bkr-strategic-card">
          <div className="bkr-strategic-header">
            <div className="bkr-strategic-title-group">
              <div className="bkr-strategic-icon-badge">
                <IconLightbulb size={24} color="#FFFFFF" />
              </div>
              <div className="bkr-strategic-text-col">
                <span className="bkr-strategic-tag">HASIL ANALITIK SISTEM &amp; ADVISOR</span>
                <h2 className="bkr-strategic-title">
                  Rekomendasi Strategis Tim Bimbingan Konseling &amp; Kurikulum
                </h2>
              </div>
            </div>
            <div className="bkr-strategic-time-pill">
              <span className="bkr-strategic-time-dot" />
              Diperbarui: Hari ini, 08:30 WIB
            </div>
          </div>

          <div className="bkr-strategic-cols">
            {/* Column 1 */}
            <div className="bkr-strategic-col-card">
              <div className="bkr-col-top">
                <div className="bkr-col-header-row">
                  <span className="bkr-col-step-badge" style={{ background: "#007BB5" }}>1</span>
                  <span className="bkr-col-category-tag" style={{ color: "#006190" }}>Kebijakan Kuota</span>
                </div>
                <h3 className="bkr-col-title">Bimbingan Khusus Pilihan Paralel</h3>
                <p className="bkr-col-desc">
                  Atur sebaran pendaftar Teknik Informatika di UI, ITB, dan ITS agar tidak saling menggugurkan di kuota
                  sekolah yang sama. Tawarkan alternatif prodi serumpun seperti Sains Data, Rekayasa Perangkat Lunak,
                  atau Sistem Informasi di PTN klaster 1.
                </p>
              </div>
              <div className="bkr-col-footer">
                <span className="bkr-col-target">Target: 48 Siswa TI</span>
                <button
                  type="button"
                  className="bkr-col-action-btn"
                  onClick={() => setActiveModal("Matriks Sebaran Prodi TI")}
                >
                  Buka Matriks →
                </button>
              </div>
            </div>

            {/* Column 2 */}
            <div className="bkr-strategic-col-card">
              <div className="bkr-col-top">
                <div className="bkr-col-header-row">
                  <span className="bkr-col-step-badge" style={{ background: "#525E7E" }}>2</span>
                  <span className="bkr-col-category-tag" style={{ color: "#525E7E" }}>Intervensi Akademik</span>
                </div>
                <h3 className="bkr-col-title">Penguatan Mapel Bahasa Inggris</h3>
                <p className="bkr-col-desc">
                  32% siswa berpotensi mengalami defisit di mata pelajaran Bahasa Inggris sebagai syarat pendukung prodi
                  rumpun internasional/teknologi. Koordinasikan klinik remedial berkala bersama guru MGMP Bahasa
                  Inggris sekolah.
                </p>
              </div>
              <div className="bkr-col-footer">
                <span className="bkr-col-target">Target: MGMP Bahasa</span>
                <button
                  type="button"
                  className="bkr-col-action-btn"
                  onClick={() => setActiveModal("Formulir Disposisi MGMP Bahasa Inggris")}
                >
                  Kirim Disposisi →
                </button>
              </div>
            </div>

            {/* Column 3 */}
            <div className="bkr-strategic-col-card">
              <div className="bkr-col-top">
                <div className="bkr-col-header-row">
                  <span className="bkr-col-step-badge" style={{ background: "#9D6B00" }}>3</span>
                  <span className="bkr-col-category-tag" style={{ color: "#7C5400" }}>Jadwal Penentu</span>
                </div>
                <h3 className="bkr-col-title">Simulasi SNBP Mandiri Sekolah</h3>
                <p className="bkr-col-desc">
                  Jadwalkan pemeringkatan paralel internal sekolah pada minggu ke-2 November. Libatkan orang tua murid
                  pada sesi paparan peta peluang rasionalisasi pilihan 1 dan pilihan 2 SNBP untuk meminimalkan
                  miskonsepsi.
                </p>
              </div>
              <div className="bkr-col-footer">
                <span className="bkr-col-target">Timeline: 14 Nov 2024</span>
                <button
                  type="button"
                  className="bkr-col-action-btn"
                  onClick={() => setActiveModal("Jadwalkan Simulasi SNBP")}
                >
                  Buat Jadwal →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= VISUAL SHOWCASE MOSAIC ================= */}
        <section className="bkr-showcase-grid">
          <div className="bkr-showcase-card">
            <div className="bkr-showcase-img-box">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                <IconUsers size={32} color="#006190" />
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#006190" }}>SMAN 1 JAKARTA</span>
              </div>
            </div>
            <div className="bkr-showcase-content">
              <span className="bkr-showcase-tag">KEGIATAN KARIR MASA DEPAN</span>
              <h4 className="bkr-showcase-title">Program Akselerasi Pilihan Karir 2025</h4>
              <p className="bkr-showcase-desc">
                Data angkatan terintegrasi langsung dengan modul asesmen mandiri siswa. Setiap pembaruan target prodi
                pada dashboard siswa akan secara instan memperbarui metrik saturasi kuota di portal ini.
              </p>
            </div>
          </div>

          <div className="bkr-showcase-card">
            <div className="bkr-showcase-img-box" style={{ background: "#E5EEFF" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                <IconBadgeCheck size={32} color="#007BB5" />
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#007BB5" }}>TERVERIFIKASI</span>
              </div>
            </div>
            <div className="bkr-showcase-content">
              <span className="bkr-showcase-tag">STATUS DAPODIK RESMI</span>
              <h4 className="bkr-showcase-title">Sinkronisasi Data Siswa Selesai</h4>
              <p className="bkr-showcase-desc">
                100% siswa kelas 12 telah terpetakan nilai rapor semester 1–4 dan minat karir RIASEC tanpa anomali.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bkr-footer">
        <div className="bkr-footer-container">
          <div className="bkr-footer-brand-side">
            <div className="bkr-brand-logo-badge" style={{ width: "36px", height: "36px" }}>
              <Image
                src="/images/logo-tight.png"
                alt="ArahIn Logo"
                width={26}
                height={26}
                className="bkr-brand-logo-img"
              />
            </div>
            <div className="bkr-footer-brand-text">
              <span className="bkr-footer-brand-title">
                ArahIn BK Management System • Versi 2.4.0
              </span>
              <span className="bkr-footer-brand-desc">
                SMA Negeri 1 Jakarta • Tahun Ajaran 2024/2025 Semester Ganjil
              </span>
            </div>
          </div>

          <div className="bkr-footer-right-side">
            <div className="bkr-footer-dapodik-status">
              <IconBadgeCheck size={14} color="#006190" />
              Dapodik Terhubung SMAN 1 Jakarta
            </div>
            <div className="bkr-footer-links">
              <button
                type="button"
                className="bkr-footer-link"
                onClick={() => setActiveModal("Pusat Bantuan Konselor")}
              >
                Pusat Bantuan Konselor
              </button>
              <span>•</span>
              <button
                type="button"
                className="bkr-footer-link"
                onClick={() => setActiveModal("Kebijakan Privasi Rapor")}
              >
                Kebijakan Privasi Rapor
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= INTERACTIVE MODALS ================= */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(11, 28, 48, 0.45)",
            backdropFilter: "blur(4px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setActiveModal(null)}
        >
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              padding: "28px",
              maxWidth: "540px",
              width: "100%",
              boxShadow: "0px 20px 40px -8px rgba(0, 97, 144, 0.2)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <IconBadgeCheck size={20} color="#006190" />
                <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#0B1C30" }}>
                  {activeModal}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                style={{
                  background: "#EFF4FF",
                  border: "none",
                  borderRadius: "9999px",
                  width: "32px",
                  height: "32px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  color: "#3F4850",
                }}
              >
                ✕
              </button>
            </div>

            {activeModal === "Tinjau 19 Siswa Berisiko Tinggi" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", color: "#475569" }}>
                <p style={{ margin: 0 }}>
                  Berikut daftar siswa yang memerlukan konseling penyesuaian pilihan karena tingkat keselarasan di bawah 70%:
                </p>
                <div style={{ maxHeight: "200px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ padding: "8px 12px", background: "#FFF5F5", borderRadius: "8px", border: "1px solid #FFDAD6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <strong style={{ color: "#BA1A1A" }}>Fajar Pratama</strong> (XII IPA 2)
                      <div style={{ fontSize: "11px", color: "#6F7881" }}>Target: Kedokteran UNAIR (Defisit Kimia -7 pt)</div>
                    </div>
                    <Link
                      href="/bk/siswa/citra-lestari"
                      style={{ fontSize: "11.5px", fontWeight: 700, color: "#006190", textDecoration: "none" }}
                    >
                      Buka Profil →
                    </Link>
                  </div>
                  <div style={{ padding: "8px 12px", background: "#FFF5F5", borderRadius: "8px", border: "1px solid #FFDAD6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <strong style={{ color: "#BA1A1A" }}>Dimas Arya</strong> (XII IPA 3)
                      <div style={{ fontSize: "11px", color: "#6F7881" }}>Target: STEI ITB (Defisit Matematika Lanjut -9 pt)</div>
                    </div>
                    <Link
                      href="/bk/siswa/citra-lestari"
                      style={{ fontSize: "11.5px", fontWeight: 700, color: "#006190", textDecoration: "none" }}
                    >
                      Buka Profil →
                    </Link>
                  </div>
                  <div style={{ padding: "8px 12px", background: "#FFF5F5", borderRadius: "8px", border: "1px solid #FFDAD6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <strong style={{ color: "#BA1A1A" }}>Reza Maulana</strong> (XII IPS 2)
                      <div style={{ fontSize: "11px", color: "#6F7881" }}>Target: Hukum UI (Kesenjangan Minat Holland)</div>
                    </div>
                    <Link
                      href="/bk/siswa/citra-lestari"
                      style={{ fontSize: "11.5px", fontWeight: 700, color: "#006190", textDecoration: "none" }}
                    >
                      Buka Profil →
                    </Link>
                  </div>
                </div>
              </div>
            ) : activeModal === "Ekspor Raw Data CSV" ? (
              <div style={{ fontSize: "13.5px", color: "#475569", lineHeight: "20px" }}>
                <p style={{ margin: 0 }}>
                  Berkas CSV berisi data agregat seluruh siswa angkatan 2024/2025 (288 baris) siap diunduh:
                </p>
                <div style={{ marginTop: "12px", display: "flex", gap: "10px" }}>
                  <button
                    type="button"
                    onClick={() => {
                      alert("Berkas ringkasan_angkatan_2025.csv sedang diunduh...");
                      setActiveModal(null);
                    }}
                    style={{
                      flex: 1,
                      padding: "10px",
                      borderRadius: "8px",
                      background: "#006190",
                      color: "#FFFFFF",
                      border: "none",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                    }}
                  >
                    <IconDownload size={15} color="#FFFFFF" />
                    Unduh CSV (.csv)
                  </button>
                </div>
              </div>
            ) : activeModal === "Cetak Laporan Eksekutif PDF" ? (
              <div style={{ fontSize: "13.5px", color: "#475569", lineHeight: "20px" }}>
                <p style={{ margin: 0 }}>
                  Laporan eksekutif ringkasan angkatan siap dicetak atau diunduh dalam format PDF resmi SMAN 1 Jakarta:
                </p>
                <div style={{ marginTop: "12px", display: "flex", gap: "10px" }}>
                  <button
                    type="button"
                    onClick={() => {
                      alert("Laporan_Eksekutif_Angkatan_2025.pdf sedang disiapkan...");
                      setActiveModal(null);
                    }}
                    style={{
                      flex: 1,
                      padding: "10px",
                      borderRadius: "8px",
                      background: "#006190",
                      color: "#FFFFFF",
                      border: "none",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                    }}
                  >
                    <IconFilePdf size={15} color="#FFFFFF" />
                    Unduh PDF Resmi
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ fontSize: "13.5px", color: "#475569", lineHeight: "20px" }}>
                <p style={{ margin: 0 }}>
                  Fitur <strong>{activeModal}</strong> sedang disiapkan dan diselaraskan dengan agenda Tim Guru BK &amp;
                  Kurikulum SMA Negeri 1 Jakarta.
                </p>
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "9999px",
                  background: "#006190",
                  color: "#FFFFFF",
                  border: "none",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
