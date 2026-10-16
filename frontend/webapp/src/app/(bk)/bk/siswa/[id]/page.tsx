"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import "@/styles/bk-detail-siswa.css";
import {
  IconArrowLeft,
  IconLock,
  IconPrinter,
  IconCalendar,
  IconSparkleAI,
  IconSave,
  IconCheckCircle,
  IconAlertCircle,
  IconTrendUp,
  IconTrendDown,
  IconBell,
  IconSearch,
  IconGraduationCap,
  IconClipboardCheck,
  IconStar,
  IconSchool,
} from "@/components/bk/BkIcons";

export default function BkDetailSiswaPage() {
  const params = useParams();
  const studentId = params?.id as string || "0064921820";

  // --- Active Tab State ---
  const [activeTab, setActiveTab] = useState<string>("Ringkasan & Profil Minat");

  // --- Counseling Form States ---
  const [sessionDate, setSessionDate] = useState<string>("2024-10-24");
  const [sessionTopic, setSessionTopic] = useState<string>("Penetapan Target SNBP (Pilihan 1 & 2)");
  const [decision, setDecision] = useState<string>("Disetujui untuk Pilihan 1 (Teknik Informatika)");
  const [counselorNote, setCounselorNote] = useState<string>(
    "Siswa telah dikonsultasikan dan disetujui untuk mengunci pilihan 1 Teknik Informatika pada pendaftaran SNBP. Disarankan menjaga nilai mapel Bahasa Inggris pada ujian semester ganjil mendatang serta memaksimalkan sertifikat OSN Informatika Kota untuk nilai tambah portofolio."
  );
  const [checklist, setChecklist] = useState<{ [key: string]: boolean }>({
    osn: true,
    ranking: true,
    parents: false,
  });

  // --- Modals State ---
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSaveCounseling = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Catatan bimbingan & konseling berhasil disimpan ke Dapodik!");
  };

  return (
    <div className="bks-page">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 100,
            background: "#065F46",
            color: "#FFFFFF",
            padding: "12px 20px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          <IconCheckCircle size={18} color="#FFFFFF" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ================= FLOATING NAVBAR ================= */}
      <div className="bks-navbar-wrapper">
        <header className="bks-navbar">
          {/* Brand & School */}
          <Link href="/bk/dashboard" className="bks-nav-brand">
            <div className="bks-brand-logo-badge">
              <Image
                src="/images/logo-tight.png"
                alt="ArahIn Logo"
                width={30}
                height={30}
                className="bks-brand-logo-img"
              />
            </div>
            <div className="bks-brand-info">
              <div className="bks-brand-title-row">
                <span className="bks-brand-name">
                  <span className="bks-brand-name-arah">Arah</span>
                  <span className="bks-brand-name-in">In</span>
                </span>
                <span className="bks-portal-badge">PORTAL BK</span>
              </div>
              <span className="bks-brand-school">SMA Negeri 1 Jakarta</span>
            </div>
          </Link>

          {/* Center Navigation Tabs */}
          <nav className="bks-nav-links" aria-label="Navigasi BK">
            <Link href="/bk/dashboard" className="bks-nav-item inactive">
              Dashboard Siswa
            </Link>
            <span className="bks-nav-item active">
              Detail Siswa &amp; Konseling
            </span>
            <Link
              href="/bk/nilai-rapor"
              className="bks-nav-item inactive"
            >
              Impor Nilai Massal
            </Link>
            <Link
              href="/bk/ringkasan"
              className="bks-nav-item inactive"
            >
              Ringkasan Angkatan
            </Link>
          </nav>

          {/* Right Section: Quick Search, Bell, Counselor Profile */}
          <div className="bks-nav-right">
            <div className="bks-nav-search">
              <IconSearch size={14} color="#6F7881" />
              <input
                type="text"
                placeholder="Cari nama / NISN..."
                className="bks-nav-search-input"
              />
              <kbd className="bks-nav-kbd">⌘K</kbd>
            </div>

            <button
              type="button"
              className="bks-nav-bell-btn"
              onClick={() => setActiveModal("Notifikasi Siswa")}
              aria-label="Notifikasi Konseling"
            >
              <IconBell size={17} color="#3F4850" />
              <span className="bks-nav-bell-badge">8</span>
            </button>

            <div className="bks-profile-pill">
              <div className="bks-profile-avatar">RA</div>
              <div className="bks-profile-meta">
                <div className="bks-profile-name-row">
                  <span className="bks-profile-name">Dra. Rina Anggraini, M.Pd</span>
                  <span className="bks-profile-badge">Konselor BK</span>
                </div>
                <span className="bks-profile-sub">Koordinator BK • SMAN 1</span>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <main className="bks-main-container">
        {/* Top Action Breadcrumb & Quick Nav */}
        <div className="bks-top-telemetry">
          <Link href="/bk/dashboard" className="bks-back-link">
            <IconArrowLeft size={14} color="#006190" />
            <span>Kembali ke Daftar Pemantauan Siswa</span>
          </Link>

          <div className="bks-telemetry-right">
            <span className="bks-status-dot-green" />
            <span>Sinkronisasi Dapodik: Aktif (24 Okt 2024, 08:30 WIB)</span>
            <span className="bks-telemetry-separator">•</span>
            <span>ID Konseling: #BK-2024-C12-044</span>
          </div>
        </div>

        {/* ================= STUDENT IDENTITY BANNER ================= */}
        <section className="bks-banner-card">
          <div className="bks-banner-glow" />

          <div className="bks-student-profile">
            <div className="bks-student-avatar-box">
              <Image
                src="/images/avatar-citra.png"
                alt="Citra Lestari"
                width={96}
                height={96}
                className="bks-student-avatar-img"
                priority
              />
              <div className="bks-student-avatar-verified" title="Data Siswa Terverifikasi">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>

            <div className="bks-student-meta">
              <div className="bks-student-title-row">
                <h1 className="bks-student-name">Citra Lestari</h1>
                <span className="bks-nisn-badge">NISN: 0064921820</span>
                <span className="bks-class-badge">12 IPA 1</span>
              </div>

              <div className="bks-student-subinfo">
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <IconSchool size={14} color="#6F7881" />
                  SMAN 1 Jakarta
                </span>
                <span>•</span>
                <span>Kurikulum Merdeka (Fase F)</span>
                <span>•</span>
                <span>Wali Kelas: Drs. Bambang Suryono</span>
              </div>

              <div className="bks-student-badges-row">
                <span className="bks-badge-pill bks-badge-blue">
                  <IconClipboardCheck size={12} color="#006190" />
                  Portofolio Lengkap 85%
                </span>
                <span className="bks-badge-pill bks-badge-purple">
                  <IconStar size={12} color="#0D1A37" />
                  Klaster 1 Unggulan SNBP
                </span>
                <span className="bks-badge-pill bks-badge-green">
                  <IconCheckCircle size={12} color="#065F46" />
                  Nilai Terverifikasi BK
                </span>
              </div>
            </div>
          </div>

          {/* Quick BK Action Buttons */}
          <div className="bks-banner-actions">
            <button
              type="button"
              className="bks-btn-primary"
              onClick={() => setActiveModal("Verifikasi & Kunci SNBP")}
            >
              <IconLock size={15} color="#FFFFFF" />
              <span>Verifikasi &amp; Kunci SNBP</span>
            </button>

            <div className="bks-banner-subactions">
              <button
                type="button"
                className="bks-btn-secondary"
                onClick={() => setActiveModal("Cetak Rekap PDF")}
              >
                <IconPrinter size={14} color="#0B1C30" />
                <span>Cetak Rekap PDF</span>
              </button>
              <button
                type="button"
                className="bks-btn-secondary"
                onClick={() => setActiveModal("Jadwalkan Konseling")}
              >
                <IconCalendar size={14} color="#0B1C30" />
                <span>Jadwalkan Konseling</span>
              </button>
            </div>
          </div>
        </section>

        {/* ================= 2-COLUMN WORKSPACE (8 : 4 GRID) ================= */}
        <div className="bks-workspace-grid">
          {/* ============= LEFT COLUMN (COL 8): DIAGNOSTIK SISWA ============= */}
          <div className="bks-left-col">
            {/* Workspace Navigation Tabs */}
            <div className="bks-tabs-bar" role="tablist">
              {[
                "Ringkasan & Profil Minat",
                "Nilai Rapor & Kesenjangan Mapel",
                "Rekomendasi Prodi & Karir",
                "Riwayat Tren",
              ].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`bks-workspace-tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* 1. Target Utama & Keselarasan Card */}
            <section className="bks-card">
              <div className="bks-target-header-row">
                <div className="bks-target-info">
                  <div className="bks-target-tags">
                    <span className="bks-tag-pilihan">PILIHAN PRIORITAS 1</span>
                    <span className="bks-tag-riasec">
                      Tipe RIASEC: IRC (Investigative, Realistic, Conventional)
                    </span>
                  </div>
                  <h2 className="bks-target-title">S1 Teknik Informatika</h2>
                  <span className="bks-target-campus">
                    Universitas Indonesia (Fasilkom UI) / STEI Institut Teknologi Bandung (ITB)
                  </span>
                </div>

                {/* Alignment Metric Gauge */}
                <div className="bks-gauge-card">
                  <div className="bks-gauge-circle-wrapper">
                    <svg className="bks-gauge-svg" viewBox="0 0 64 64">
                      {/* Background circle track */}
                      <circle
                        cx="32"
                        cy="32"
                        r="26"
                        fill="none"
                        stroke="#DCE9FF"
                        strokeWidth="6"
                      />
                      {/* Foreground gauge stroke (91% = 26 * 2 * PI * 0.91 = 148.6 / 163.3) */}
                      <circle
                        cx="32"
                        cy="32"
                        r="26"
                        fill="none"
                        stroke="#006190"
                        strokeWidth="6"
                        strokeDasharray="163.3"
                        strokeDashoffset="14.7"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="bks-gauge-center-text">
                      <span className="bks-gauge-score">91</span>
                      <span className="bks-gauge-max">/100</span>
                    </div>
                  </div>

                  <div className="bks-gauge-meta">
                    <span className="bks-gauge-label">Sangat Cocok</span>
                    <span className="bks-gauge-sublabel">Siap Bersaing Kuota SNBP</span>
                    <span className="bks-gauge-target">Target Karir: AI Engineer</span>
                  </div>
                </div>
              </div>

              {/* Triple Sub-Metric Bars */}
              <div className="bks-triple-bars">
                <div className="bks-bar-card">
                  <div className="bks-bar-header">
                    <span className="bks-bar-title">Minat vs Target</span>
                    <span className="bks-bar-value">95%</span>
                  </div>
                  <div className="bks-bar-track">
                    <div className="bks-bar-fill" style={{ width: "95%" }} />
                  </div>
                  <span className="bks-bar-subtext">Korelasi tinggi RIASEC IRC</span>
                </div>

                <div className="bks-bar-card">
                  <div className="bks-bar-header">
                    <span className="bks-bar-title">Rapor vs Ambang SNBP</span>
                    <span className="bks-bar-value">88%</span>
                  </div>
                  <div className="bks-bar-track">
                    <div className="bks-bar-fill" style={{ width: "88%" }} />
                  </div>
                  <span className="bks-bar-subtext">Melampaui rata-rata passing 86.4</span>
                </div>

                <div className="bks-bar-card">
                  <div className="bks-bar-header">
                    <span className="bks-bar-title">Peluang Kuota Sekolah</span>
                    <span className="bks-bar-value bks-bar-value-green">Top 5%</span>
                  </div>
                  <div className="bks-bar-track">
                    <div className="bks-bar-fill bks-bar-fill-green" style={{ width: "94%" }} />
                  </div>
                  <span className="bks-bar-subtext">Peringkat 6 paralel jurusan</span>
                </div>
              </div>
            </section>

            {/* 2. Subject Gap Analysis (Kepmendikbudristek No. 345/M/2022) */}
            <section className="bks-card">
              <div className="bks-subjects-header">
                <div className="bks-subjects-title-box">
                  <h3 className="bks-subjects-title">
                    Analisis Kesenjangan Mata Pelajaran Pendukung
                  </h3>
                  <span className="bks-subjects-subtitle">
                    Kesesuaian Kepmendikbudristek No. 345/M/2022 untuk Rumpun Ilmu Komputer &amp; Informatika
                  </span>
                </div>
                <span className="bks-badge-semesters">
                  Semester 1 – 4 Diperhitungkan
                </span>
              </div>

              {/* Subjects List */}
              <div className="bks-subjects-list">
                {/* Mapel 1: Matematika Tingkat Lanjut */}
                <div className="bks-subject-item">
                  <div className="bks-subject-left">
                    <div className="bks-subject-name-row">
                      <span className="bks-subject-name">Matematika Tingkat Lanjut</span>
                      <span className="bks-subject-weight">Bobot 40%</span>
                    </div>
                    <span className="bks-subject-desc">
                      Aljabar Linear, Kalkulus Dasar, Matriks &amp; Vektor
                    </span>
                  </div>

                  <div className="bks-subject-right">
                    <div className="bks-subject-scores">
                      <div className="bks-subject-val-row">
                        <span className="bks-subject-val">94.0</span>
                        <span className="bks-subject-min">/ 88.0 min</span>
                      </div>
                      <span className="bks-subject-delta surplus">
                        ↗ +6.0 Surplus Aman
                      </span>
                    </div>
                    <div className="bks-subject-status-icon surplus" title="Surplus Nilai Aman">
                      <IconCheckCircle size={20} color="#065F46" />
                    </div>
                  </div>
                </div>

                {/* Mapel 2: Informatika / Pemrograman */}
                <div className="bks-subject-item">
                  <div className="bks-subject-left">
                    <div className="bks-subject-name-row">
                      <span className="bks-subject-name">Informatika / Pemrograman</span>
                      <span className="bks-subject-weight">Bobot 30%</span>
                    </div>
                    <span className="bks-subject-desc">
                      Algoritma Pemrograman, Analisis Data, Berpikir Komputasional
                    </span>
                  </div>

                  <div className="bks-subject-right">
                    <div className="bks-subject-scores">
                      <div className="bks-subject-val-row">
                        <span className="bks-subject-val">96.0</span>
                        <span className="bks-subject-min">/ 85.0 min</span>
                      </div>
                      <span className="bks-subject-delta surplus">
                        ↗ +11.0 Surplus Sangat Aman
                      </span>
                    </div>
                    <div className="bks-subject-status-icon surplus" title="Surplus Sangat Aman">
                      <IconCheckCircle size={20} color="#065F46" />
                    </div>
                  </div>
                </div>

                {/* Mapel 3: Fisika */}
                <div className="bks-subject-item">
                  <div className="bks-subject-left">
                    <div className="bks-subject-name-row">
                      <span className="bks-subject-name">Fisika</span>
                      <span className="bks-subject-weight">Bobot 15%</span>
                    </div>
                    <span className="bks-subject-desc">
                      Listrik Dinamis, Termodinamika, Gelombang
                    </span>
                  </div>

                  <div className="bks-subject-right">
                    <div className="bks-subject-scores">
                      <div className="bks-subject-val-row">
                        <span className="bks-subject-val">91.0</span>
                        <span className="bks-subject-min">/ 84.0 min</span>
                      </div>
                      <span className="bks-subject-delta surplus">
                        ↗ +7.0 Surplus Aman
                      </span>
                    </div>
                    <div className="bks-subject-status-icon surplus" title="Surplus Aman">
                      <IconCheckCircle size={20} color="#065F46" />
                    </div>
                  </div>
                </div>

                {/* Mapel 4: Bahasa Inggris Akademik (Defisit Moderat Alert) */}
                <div className="bks-subject-item deficit">
                  <div className="bks-subject-left">
                    <div className="bks-subject-name-row">
                      <span className="bks-subject-name">Bahasa Inggris Akademik</span>
                      <span className="bks-subject-weight">Bobot 15%</span>
                      <span className="bks-subject-deficit-badge">Defisit Perhatian</span>
                    </div>
                    <span className="bks-subject-desc">
                      Pemahaman Teks Teknis &amp; Terminologi Ilmiah
                    </span>
                  </div>

                  <div className="bks-subject-right">
                    <div className="bks-subject-scores">
                      <div className="bks-subject-val-row">
                        <span className="bks-subject-val deficit">82.0</span>
                        <span className="bks-subject-min">/ 85.0 min</span>
                      </div>
                      <span className="bks-subject-delta deficit">
                        ↘ -3.0 Poin Defisit Moderat
                      </span>
                    </div>
                    <div className="bks-subject-status-icon deficit" title="Defisit Perhatian BK">
                      <IconAlertCircle size={20} color="#93000A" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Rekam Jejak Tren Nilai Rapor (Semester 1 – 4) */}
            <section className="bks-card">
              <div className="bks-trend-header">
                <div>
                  <h3 className="bks-subjects-title">
                    Rekam Jejak Tren Nilai Rapor (Semester 1 – 4)
                  </h3>
                  <span className="bks-subjects-subtitle">
                    Rata-rata kumulatif seluruh mata pelajaran pendukung pilihan Fase E &amp; F
                  </span>
                </div>
                <div className="bks-trend-stat-box">
                  <span className="bks-trend-percentage">+6.9%</span>
                  <span className="bks-trend-tag">Konsisten Meningkat</span>
                </div>
              </div>

              {/* Custom High-Fidelity SVG Trend Chart */}
              <div className="bks-chart-container">
                <svg className="bks-chart-svg" viewBox="0 0 680 160">
                  <defs>
                    <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#006190" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#006190" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Guideline Dashes */}
                  <line x1="40" y1="25" x2="640" y2="25" stroke="#BEC7D2" strokeDasharray="3 3" strokeWidth="0.8" />
                  <line x1="40" y1="70" x2="640" y2="70" stroke="#BEC7D2" strokeDasharray="3 3" strokeWidth="0.8" />
                  <line x1="40" y1="115" x2="640" y2="115" stroke="#BEC7D2" strokeDasharray="3 3" strokeWidth="0.8" />

                  {/* Area Fill Under Curve:
                      Points:
                      Sem 1 (x: 80, y: 110) = 84.2
                      Sem 2 (x: 250, y: 80) = 87.5
                      Sem 3 (x: 420, y: 50) = 90.8
                      Sem 4 (x: 590, y: 25) = 92.4
                  */}
                  <path
                    d="M 80 110 L 250 80 L 420 50 L 590 25 L 590 140 L 80 140 Z"
                    fill="url(#trendGradient)"
                  />

                  {/* Main Trend Line */}
                  <path
                    d="M 80 110 L 250 80 L 420 50 L 590 25"
                    fill="none"
                    stroke="#006190"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Node 1: Semester 1 */}
                  <circle cx="80" cy="110" r="5" fill="#FFFFFF" stroke="#006190" strokeWidth="3" />
                  <text x="80" y="94" textAnchor="middle" fill="#0B1C30" fontSize="13" fontWeight="800" fontFamily="Plus Jakarta Sans">
                    84.2
                  </text>
                  <text x="80" y="135" textAnchor="middle" fill="#6F7881" fontSize="11" fontWeight="600" fontFamily="Plus Jakarta Sans">
                    Semester 1
                  </text>

                  {/* Node 2: Semester 2 */}
                  <circle cx="250" cy="80" r="5" fill="#FFFFFF" stroke="#006190" strokeWidth="3" />
                  <text x="250" y="64" textAnchor="middle" fill="#0B1C30" fontSize="13" fontWeight="800" fontFamily="Plus Jakarta Sans">
                    87.5
                  </text>
                  <text x="250" y="135" textAnchor="middle" fill="#6F7881" fontSize="11" fontWeight="600" fontFamily="Plus Jakarta Sans">
                    Semester 2
                  </text>

                  {/* Node 3: Semester 3 */}
                  <circle cx="420" cy="50" r="5" fill="#FFFFFF" stroke="#006190" strokeWidth="3" />
                  <text x="420" y="34" textAnchor="middle" fill="#0B1C30" fontSize="13" fontWeight="800" fontFamily="Plus Jakarta Sans">
                    90.8
                  </text>
                  <text x="420" y="135" textAnchor="middle" fill="#6F7881" fontSize="11" fontWeight="600" fontFamily="Plus Jakarta Sans">
                    Semester 3
                  </text>

                  {/* Node 4: Semester 4 (Terbaru) */}
                  <circle cx="590" cy="25" r="6" fill="#006190" stroke="#FFFFFF" strokeWidth="3" />
                  <text x="590" y="12" textAnchor="middle" fill="#006190" fontSize="14" fontWeight="800" fontFamily="Plus Jakarta Sans">
                    92.4
                  </text>
                  <text x="590" y="135" textAnchor="middle" fill="#006190" fontSize="11" fontWeight="700" fontFamily="Plus Jakarta Sans">
                    Semester 4 (Terbaru)
                  </text>
                </svg>

                <div className="bks-chart-telemetry-row">
                  <span className="bks-chart-note">
                    <IconTrendUp size={14} color="#006190" />
                    Grafik kenaikan linear konsisten: 4 semester tanpa penurunan nilai satu mapel pun.
                  </span>
                  <span className="bks-chart-projection">
                    Simulasi Semester 5: Proyeksi 93.1
                  </span>
                </div>
              </div>
            </section>

            {/* 4. Matriks Kalkulasi Diagnostik & Explainable AI (XAI) */}
            <section className="bks-xai-card">
              <div className="bks-xai-badge-icon">
                <IconSparkleAI size={20} color="#FFFFFF" />
              </div>
              <div className="bks-xai-content">
                <div className="bks-xai-title-row">
                  <h4 className="bks-xai-title">
                    Matriks Kalkulasi Diagnostik &amp; Explainable AI (XAI)
                  </h4>
                  <span className="bks-xai-version">ALGORITMA V4.2</span>
                </div>

                <p className="bks-xai-desc">
                  Skor keselarasan <strong>91/100</strong> diperoleh dari bobot kombinasi: korelasi profil minat <strong>Holland RIASEC tipe IRC</strong> sebesar 95% terhadap kurikulum S1 Teknik Informatika (fondasi pemecahan masalah algoritma &amp; abstraksi matematis), ditambah akumulasi nilai mapel pendukung <strong>Matematika Lanjut (94.0)</strong> dan <strong>Informatika (96.0)</strong> yang jauh melampaui batas ambang kuartil atas pendaftar Fasilkom UI/ITB.
                </p>

                <div className="bks-xai-mitigation">
                  <IconAlertCircle size={16} color="#BA1A1A" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>
                    <strong>Catatan Mitigasi BK:</strong> Defisit 3 poin pada Bahasa Inggris (82 vs 85) dapat dikompensasikan dengan portofolio non-akademik (Juara 2 OSN Informatika Tingkat Kota Jakarta Pusat) pada rubrik verifikasi SNBP.
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* ============= RIGHT COLUMN (COL 4): PANEL LEMBAR BIMBINGAN (UC11) ============= */}
          <aside className="bks-right-col">
            <div className="bks-counseling-card">
              {/* Header */}
              <div className="bks-counseling-header">
                <div>
                  <span className="bks-counseling-tag">MODUL TERINTEGRASI BK</span>
                  <h3 className="bks-counseling-title">Lembar Bimbingan &amp; Konseling</h3>
                </div>
                <div className="bks-counseling-header-badge" title="Lembar Konseling Resmi">
                  <IconClipboardCheck size={20} color="#006190" />
                </div>
              </div>

              {/* Counselor on Duty */}
              <div className="bks-counselor-strip">
                <div className="bks-counselor-avatar">RA</div>
                <div className="bks-counselor-info">
                  <span className="bks-counselor-name">Dra. Rina Anggraini, M.Pd</span>
                  <span className="bks-counselor-role">Konselor Pembimbing Siswa Kelas 12</span>
                </div>
              </div>

              {/* Interactive Input Form (UC11) */}
              <form className="bks-form" onSubmit={handleSaveCounseling}>
                {/* 1. Tanggal Sesi */}
                <div className="bks-form-group">
                  <label className="bks-form-label" htmlFor="bks-date-input">
                    Tanggal Sesi Bimbingan
                  </label>
                  <input
                    id="bks-date-input"
                    type="date"
                    className="bks-input-date"
                    value={sessionDate}
                    onChange={(e) => setSessionDate(e.target.value)}
                  />
                </div>

                {/* 2. Topik Bimbingan */}
                <div className="bks-form-group">
                  <label className="bks-form-label" htmlFor="bks-topic-select">
                    Topik Bimbingan
                  </label>
                  <select
                    id="bks-topic-select"
                    className="bks-select"
                    value={sessionTopic}
                    onChange={(e) => setSessionTopic(e.target.value)}
                  >
                    <option value="Penetapan Target SNBP (Pilihan 1 & 2)">
                      Penetapan Target SNBP (Pilihan 1 &amp; 2)
                    </option>
                    <option value="Evaluasi Kesenjangan Nilai Rapor">
                      Evaluasi Kesenjangan Nilai Rapor
                    </option>
                    <option value="Konsultasi Minat RIASEC & Karir">
                      Konsultasi Minat RIASEC &amp; Karir
                    </option>
                    <option value="Mitigasi Risiko & Cadangan SNBT">
                      Mitigasi Risiko &amp; Cadangan SNBT
                    </option>
                  </select>
                </div>

                {/* 3. Rekomendasi Keputusan BK (Radio Group) */}
                <div className="bks-form-group">
                  <label className="bks-form-label">
                    Rekomendasi Keputusan BK
                  </label>
                  <div className="bks-radio-group">
                    {[
                      "Disetujui untuk Pilihan 1 (Teknik Informatika)",
                      "Perlu Pengalihan Pilihan (Resiko Persaingan Tinggi)",
                      "Menunggu Hasil Try Out & Nilai Semester 5",
                      "Mempertimbangkan D4 / Vokasi Rekayasa Perangkat Lunak",
                    ].map((opt) => (
                      <label
                        key={opt}
                        className={`bks-radio-card ${decision === opt ? "active" : ""}`}
                      >
                        <input
                          type="radio"
                          name="counseling-decision"
                          className="bks-radio-input"
                          checked={decision === opt}
                          onChange={() => setDecision(opt)}
                        />
                        <span className="bks-radio-text">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 4. Catatan Observasi & Arahan Konselor */}
                <div className="bks-form-group">
                  <div className="bks-form-label">
                    <span>Catatan Observasi &amp; Arahan Konselor</span>
                    <span className="bks-form-sublabel">Dapat dibaca oleh Orang Tua</span>
                  </div>
                  <textarea
                    className="bks-textarea"
                    value={counselorNote}
                    onChange={(e) => setCounselorNote(e.target.value)}
                    rows={4}
                  />
                </div>

                {/* 5. Rencana Tindak Lanjut (Follow-Up Checklist) */}
                <div className="bks-form-group">
                  <label className="bks-form-label">
                    Rencana Tindak Lanjut (Follow-Up)
                  </label>
                  <div className="bks-checklist">
                    <label className="bks-check-item">
                      <input
                        type="checkbox"
                        className="bks-checkbox"
                        checked={checklist.osn}
                        onChange={(e) =>
                          setChecklist({ ...checklist, osn: e.target.checked })
                        }
                      />
                      <span>Unggah sertifikat prestasi OSN Informatika Kota ke sistem SNBP</span>
                    </label>

                    <label className="bks-check-item">
                      <input
                        type="checkbox"
                        className="bks-checkbox"
                        checked={checklist.ranking}
                        onChange={(e) =>
                          setChecklist({ ...checklist, ranking: e.target.checked })
                        }
                      />
                      <span>Ikuti simulasi pemeringkatan paralel kuota SNBP bulan November</span>
                    </label>

                    <label className="bks-check-item">
                      <input
                        type="checkbox"
                        className="bks-checkbox"
                        checked={checklist.parents}
                        onChange={(e) =>
                          setChecklist({ ...checklist, parents: e.target.checked })
                        }
                      />
                      <span>Koordinasi &amp; tanda tangan surat kesepakatan orang tua</span>
                    </label>
                  </div>
                </div>

                {/* Form Action Buttons */}
                <div className="bks-form-actions">
                  <button type="submit" className="bks-btn-save">
                    <IconSave size={15} color="#FFFFFF" />
                    <span>Simpan Catatan Konseling</span>
                  </button>
                  <button
                    type="button"
                    className="bks-btn-cancel"
                    onClick={() => {
                      setCounselorNote("");
                      showToast("Form konseling dibatalkan/direset.");
                    }}
                  >
                    Batal
                  </button>
                </div>
              </form>

              {/* Timeline Log (Riwayat Bimbingan Terkini) */}
              <div className="bks-timeline-section">
                <div className="bks-timeline-header">
                  <h4 className="bks-timeline-title">Riwayat Bimbingan Terkini</h4>
                  <span className="bks-timeline-count-badge">2 Sesi Tersimpan</span>
                </div>

                <div className="bks-timeline-items">
                  <div className="bks-timeline-line" />

                  {/* Sesi 2 */}
                  <div className="bks-timeline-entry">
                    <span className="bks-timeline-node active" />
                    <div className="bks-timeline-date-row">
                      <span className="bks-timeline-date">Sesi 2 • 14 Okt 2024</span>
                      <span className="bks-timeline-status-badge green">Disetujui</span>
                    </div>
                    <span className="bks-timeline-subject">
                      Penyelarasan Target Karir AI Engineer dengan Pilihan S1 vs D4
                    </span>
                    <div className="bks-timeline-box">
                      Diskusi komparasi prospek karir dan praktikum laboratorium. Siswa menunjukkan komitmen kuat ke STEI ITB didukung portofolio pemrograman Python mandiri.
                    </div>
                    <span className="bks-timeline-counselor">
                      Konselor: Dra. Rina Anggraini, M.Pd
                    </span>
                  </div>

                  {/* Sesi 1 */}
                  <div className="bks-timeline-entry">
                    <span className="bks-timeline-node completed" />
                    <div className="bks-timeline-date-row">
                      <span className="bks-timeline-date">Sesi 1 • 22 Agustus 2024</span>
                      <span className="bks-timeline-status-badge blue">Selesai</span>
                    </div>
                    <span className="bks-timeline-subject">
                      Asesmen Minat Awal RIASEC &amp; Pemilihan Mapel Pilihan Fase F
                    </span>
                    <div className="bks-timeline-box">
                      Hasil tes minat menunjukkan dominan Investigatif dan Realistik. Pemilihan Matematika Lanjut dan Fisika disahkan untuk memperkuat fondasi saintek.
                    </div>
                    <span className="bks-timeline-counselor">
                      Konselor: Hendra Setiawan, S.Pd
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bks-footer">
        <div className="bks-footer-container">
          <div className="bks-footer-brand-side">
            <div className="bks-brand-logo-badge" style={{ width: 36, height: 36, padding: 4 }}>
              <Image
                src="/images/logo-tight.png"
                alt="ArahIn Logo"
                width={36}
                height={36}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="bks-footer-brand-text">
              <span className="bks-footer-brand-title">
                <span style={{ color: "#06124D", fontWeight: 800 }}>Arah</span>
                <span style={{ color: "#1386E8", fontWeight: 800 }}>In</span> • Sistem Diagnostik Minat &amp; Karir Terpadu
              </span>
              <span className="bks-footer-brand-desc">
                Mendampingi Siswa SMA Menuju Masa Depan Perguruan Tinggi yang Presisi
              </span>
            </div>
          </div>

          <div className="bks-footer-right-side">
            <div className="bks-footer-dapodik-status">
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "9999px",
                  background: "#1386E8",
                  display: "inline-block",
                }}
              />
              <span>Dapodik Terhubung SMAN 1 Jakarta</span>
            </div>
            <div className="bks-footer-links">
              <button
                type="button"
                className="bks-footer-link"
                onClick={() => setActiveModal("Pusat Bantuan Konselor BK")}
              >
                Pusat Bantuan Konselor
              </button>
              <span>•</span>
              <button
                type="button"
                className="bks-footer-link"
                onClick={() => setActiveModal("Kebijakan Privasi Nilai Rapor")}
              >
                Kebijakan Privasi Rapor
              </button>
            </div>
            <span style={{ fontSize: 11, color: "#94A3B8" }}>
              © 2025 ArahIn. Hak cipta dilindungi.
            </span>
          </div>
        </div>
      </footer>

      {/* ================= INTERACTIVE MODALS ================= */}
      {activeModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(11, 28, 48, 0.45)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "16px",
          }}
          onClick={() => setActiveModal(null)}
        >
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              maxWidth: "480px",
              width: "100%",
              padding: "24px",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              border: "1px solid #E5EEFF",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#0B1C30", margin: 0 }}>
                {activeModal}
              </h3>
              <button
                type="button"
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                  color: "#6F7881",
                }}
                onClick={() => setActiveModal(null)}
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: "14px", lineHeight: "22px", color: "#475569", marginBottom: "20px" }}>
              {activeModal === "Verifikasi & Kunci SNBP"
                ? "Apakah Anda yakin ingin memverifikasi dan mengunci pilihan 1 (S1 Teknik Informatika - UI/ITB) untuk Citra Lestari (NISN: 0064921820)? Tindakan ini akan mengirimkan rekomendasi resmi BK ke Dapodik."
                : activeModal === "Cetak Rekap PDF"
                ? "Dokumen rekap hasil diagnostik minat, keselarasan kurikulum, dan nilai rapor Citra Lestari siap dicetak dalam format resmi lembar bimbingan sekolah."
                : activeModal === "Jadwalkan Konseling"
                ? "Jadwalkan sesi bimbingan tatap muka berikutnya bersama Citra Lestari dan Orang Tua siswa untuk finalisasi SNBP."
                : `Informasi fitur "${activeModal}" aktif dan terhubung dengan sistem ArahIn.`}
            </p>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
              <button
                type="button"
                className="bks-btn-secondary"
                onClick={() => setActiveModal(null)}
              >
                Tutup
              </button>
              <button
                type="button"
                className="bks-btn-primary"
                onClick={() => {
                  showToast(`Aksi "${activeModal}" berhasil dieksekusi!`);
                  setActiveModal(null);
                }}
              >
                Lanjutkan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
