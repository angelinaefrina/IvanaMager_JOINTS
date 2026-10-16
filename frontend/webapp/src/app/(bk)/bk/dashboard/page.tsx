"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import "../../../../styles/bk-dashboard.css";
import {
  IconAlertTriangle,
  IconAnalytics,
  IconBadgeCheck,
  IconBell,
  IconCalendar,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconClipboardCheck,
  IconClock,
  IconDownload,
  IconFilter,
  IconGraduationCap,
  IconMoreHorizontal,
  IconSearch,
  IconSort,
  IconTrendDown,
  IconTrendUp,
  IconUpload,
  IconUser,
  IconUsers,
} from "../../../../components/bk/BkIcons";

interface SiswaData {
  id: string;
  nama: string;
  nisn: string;
  rombel: string;
  avatarColor: string;
  hasRiskBadge?: boolean;
  isRiskRow?: boolean;
  riasecCode: string;
  riasecPrimary: string;
  riasecSubtext: string;
  riasecBadgeStyle: { bg: string; color: string };
  isRiasecPending?: boolean;
  rataRapor: number;
  trendRapor: string;
  trendIsPositive?: boolean;
  trendIsNeutral?: boolean;
  trendIsNegative?: boolean;
  targetProdi: string;
  targetKampus: string;
  isTargetPending?: boolean;
  keselarasanPercent: number;
  keselarasanLabel: string;
  keselarasanColor: string;
  keselarasanDeficit?: string;
  statusRapor: "terverifikasi" | "cepat" | "menunggu";
  catatanKonseling: string;
  catatanColor?: string;
  isCatatanDangerPill?: boolean;
  actionType: "detail" | "konseling" | "pengingat";
}

const SISWA_MOCK: SiswaData[] = [
  {
    id: "1",
    nama: "Citra Lestari",
    nisn: "0064921820",
    rombel: "XII IPA 1",
    avatarColor: "#006190",
    riasecCode: "IRC",
    riasecPrimary: "Investigative (92%)",
    riasecSubtext: "Realistis 74% • Konvensional 68%",
    riasecBadgeStyle: { bg: "#EEF2FF", color: "#006190" },
    rataRapor: 92.4,
    trendRapor: "+6.9% Sem 1–5",
    trendIsPositive: true,
    targetProdi: "Teknik Informatika",
    targetKampus: "Fasilkom UI (SNBP P1)",
    keselarasanPercent: 91,
    keselarasanLabel: "91% Sangat Cocok",
    keselarasanColor: "#047857",
    statusRapor: "terverifikasi",
    catatanKonseling: "1 Sesi Aktif (14 Okt)",
    catatanColor: "#006190",
    actionType: "detail",
  },
  {
    id: "2",
    nama: "Fajar Pratama",
    nisn: "0068192031",
    rombel: "XII IPA 2",
    avatarColor: "#BA1A1A",
    hasRiskBadge: true,
    isRiskRow: true,
    riasecCode: "SEC",
    riasecPrimary: "Sosial (88%)",
    riasecSubtext: "Enterprising 72% • Conv 60%",
    riasecBadgeStyle: { bg: "#D1FAE5", color: "#047857" },
    rataRapor: 84.1,
    trendRapor: "-1.2% Stagnan",
    trendIsNegative: true,
    targetProdi: "S1 Kedokteran",
    targetKampus: "FK UNAIR (Pilihan 1)",
    keselarasanPercent: 64,
    keselarasanLabel: "64% Berisiko Defisit",
    keselarasanColor: "#BA1A1A",
    keselarasanDeficit: "Defisit Kimia (-7 pt vs min)",
    statusRapor: "cepat",
    catatanKonseling: "Butuh Intervensi",
    isCatatanDangerPill: true,
    actionType: "konseling",
  },
  {
    id: "3",
    nama: "Annisa Rahma",
    nisn: "0063810294",
    rombel: "XII IPA 1",
    avatarColor: "#0284C7",
    riasecCode: "RIC",
    riasecPrimary: "Realistic (89%)",
    riasecSubtext: "Investigative 85% • Conv 71%",
    riasecBadgeStyle: { bg: "#E0F2FE", color: "#0369A1" },
    rataRapor: 89.5,
    trendRapor: "+4.2% Konsisten",
    trendIsPositive: true,
    targetProdi: "S1 Teknik Elektro",
    targetKampus: "STEI ITB",
    keselarasanPercent: 88,
    keselarasanLabel: "88% Siap Bersaing",
    keselarasanColor: "#006190",
    statusRapor: "terverifikasi",
    catatanKonseling: "Selesai Sesi 1 (Dra. Nur)",
    catatanColor: "#475569",
    actionType: "detail",
  },
  {
    id: "4",
    nama: "Dimas Setiawan",
    nisn: "0061298492",
    rombel: "XII IPA 3",
    avatarColor: "#D97706",
    riasecCode: "BELUM",
    riasecPrimary: "Belum Asesmen Minat",
    riasecSubtext: "Instrumen 18 butir pending",
    riasecBadgeStyle: { bg: "#FFDDAF", color: "#7C5400" },
    isRiasecPending: true,
    rataRapor: 86.0,
    trendRapor: "Semester 1-5 Lengkap",
    trendIsNeutral: true,
    targetProdi: "Target Belum Ditentukan",
    targetKampus: "Menunggu Pengisian Siswa",
    isTargetPending: true,
    keselarasanPercent: 0,
    keselarasanLabel: "Menunggu Diagnostik",
    keselarasanColor: "#6F7881",
    statusRapor: "terverifikasi",
    catatanKonseling: "Belum Ada Catatan",
    catatanColor: "#6F7881",
    actionType: "pengingat",
  },
  {
    id: "5",
    nama: "Rizky Ramadhani",
    nisn: "0064718290",
    rombel: "XII IPS 1",
    avatarColor: "#059669",
    riasecCode: "ESC",
    riasecPrimary: "Enterprising (91%)",
    riasecSubtext: "Social 86% • Conv 79%",
    riasecBadgeStyle: { bg: "#FFE4E6", color: "#BE123C" },
    rataRapor: 90.2,
    trendRapor: "+3.8% Terjaga",
    trendIsPositive: true,
    targetProdi: "S1 Manajemen Bisnis",
    targetKampus: "FEB UGM (Pilihan 1)",
    keselarasanPercent: 94,
    keselarasanLabel: "94% Sangat Cocok",
    keselarasanColor: "#047857",
    statusRapor: "terverifikasi",
    catatanKonseling: "Rekomendasi Terkirim",
    catatanColor: "#047857",
    actionType: "detail",
  },
];

type FilterChip = "all" | "risk" | "pending_rapor" | "pending_riasec" | "verified";

export default function BkDashboardPage() {
  const [activeChip, setActiveChip] = useState<FilterChip>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedClass, setSelectedClass] = useState("Semua Kelas (12 IPA 1 - IPA 5, IPS 1 - IPS 3)");
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [modalStudent, setModalStudent] = useState<SiswaData | null>(null);

  // Filter students
  const filteredStudents = useMemo(() => {
    return SISWA_MOCK.filter((s) => {
      // Filter chip
      if (activeChip === "risk" && !s.hasRiskBadge) return false;
      if (activeChip === "pending_rapor" && s.statusRapor !== "cepat" && s.statusRapor !== "menunggu") return false;
      if (activeChip === "pending_riasec" && !s.isRiasecPending) return false;
      if (activeChip === "verified" && s.keselarasanPercent < 75) return false;

      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchName = s.nama.toLowerCase().includes(q);
        const matchNisn = s.nisn.includes(q);
        const matchTarget = s.targetProdi.toLowerCase().includes(q) || s.targetKampus.toLowerCase().includes(q);
        if (!matchName && !matchNisn && !matchTarget) return false;
      }

      return true;
    });
  }, [activeChip, searchQuery]);

  // Checkbox handlers
  const isAllSelected = selectedIds.length === filteredStudents.length && filteredStudents.length > 0;
  function handleSelectAll() {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredStudents.map((s) => s.id));
    }
  }

  function handleToggleRow(id: string) {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }

  return (
    <div className="bk-page">
      {/* ================= FLOATING NAVBAR ================= */}
      <div className="bk-navbar-wrapper">
        <header className="bk-navbar">
          {/* Brand & School */}
          <Link href="/bk/dashboard" className="bk-nav-brand">
            <div className="bk-brand-logo-badge">
              <Image
                src="/images/logo-tight.png"
                alt="ArahIn Logo"
                width={30}
                height={30}
                className="bk-brand-logo-img"
              />
            </div>
            <div className="bk-brand-info">
              <div className="bk-brand-title-row">
                <span className="bk-brand-name">
                  <span className="bk-brand-name-arah">Arah</span>
                  <span className="bk-brand-name-in">In</span>
                </span>
                <span className="bk-portal-badge">PORTAL BK</span>
              </div>
              <span className="bk-brand-school">SMA Negeri 1 Jakarta</span>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="bk-nav-links" aria-label="Navigasi BK">
            <Link href="/bk/dashboard" className="bk-nav-item active">
              Dashboard Siswa
            </Link>
            <button
              type="button"
              className="bk-nav-item inactive"
              onClick={() => setActiveModal("Detail Siswa & Konseling")}
            >
              Detail Siswa & Konseling
            </button>
            <button
              type="button"
              className="bk-nav-item inactive"
              onClick={() => setActiveModal("Impor Nilai Massal")}
            >
              Impor Nilai Massal
            </button>
            <button
              type="button"
              className="bk-nav-item inactive"
              onClick={() => setActiveModal("Ringkasan Angkatan")}
            >
              Ringkasan Angkatan
            </button>
          </nav>

          {/* Right Section: Quick Search, Bell, Profile */}
          <div className="bk-nav-right">
            <div className="bk-nav-search">
              <IconSearch size={14} color="#6F7881" />
              <input
                type="text"
                placeholder="Cari nama / NISN..."
                className="bk-nav-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="bk-kbd-shortcut">⌘K</span>
            </div>

            <button
              type="button"
              className="bk-bell-btn"
              aria-label="Notifikasi BK"
              onClick={() => setActiveModal("Notifikasi: Terdapat 8 pembaruan impor rapor")}
            >
              <IconBell size={17} color="#3F4850" />
              <span className="bk-bell-badge">8</span>
            </button>

            <div className="bk-nav-divider" />

            {/* Profile Pill */}
            <div className="bk-profile-pill">
              <div className="bk-profile-avatar-wrapper">
                <IconUser size={16} color="#FFFFFF" />
                <span className="bk-profile-dot" />
              </div>
              <div className="bk-profile-info">
                <div className="bk-profile-name-row">
                  <span className="bk-profile-name">Dra. Rina Anggraini, M.Pd</span>
                  <span className="bk-role-tag">Konselor BK</span>
                </div>
                <span className="bk-profile-subtitle">Koordinator BK • SMAN 1</span>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main className="bk-main">
        {/* Page Header Section */}
        <section className="bk-page-header">
          <div className="bk-header-left">
            <div className="bk-breadcrumb-bar">
              <span className="bk-breadcrumb-badge">PORTAL BIMBINGAN & KONSELING</span>
              <span className="bk-breadcrumb-dot">•</span>
              <span className="bk-breadcrumb-year">KELAS 12 TAHUN AJARAN 2024/2025</span>
            </div>
            <h1 className="bk-heading-title">
              Dashboard Pemantauan & Bimbingan Karir Siswa
            </h1>
            <p className="bk-heading-subtitle">
              Pantau kesiapan diagnostik asesmen minat, keselarasan nilai rapor
              terhadap target prodi, serta verifikasi kelayakan SNBP siswa per kelas secara real-time.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="bk-quick-actions">
            <button
              type="button"
              className="bk-btn-secondary"
              onClick={() => setActiveModal("Impor Nilai Rapor")}
            >
              <IconUpload size={14} color="#006190" />
              <span>Impor Nilai Rapor</span>
            </button>
            <button
              type="button"
              className="bk-btn-secondary"
              onClick={() => setActiveModal("Ekspor PDSS")}
            >
              <IconDownload size={14} color="#525E7E" />
              <span>Ekspor PDSS</span>
            </button>
            <button
              type="button"
              className="bk-btn-primary"
              onClick={() => setActiveModal("Jadwalkan Konseling Massal")}
            >
              <IconCalendar size={14} color="#FFFFFF" />
              <span>Jadwalkan Konseling Massal</span>
            </button>
          </div>
        </section>

        {/* Top KPI Metric Summary Cards (4 Cards) */}
        <section className="bk-kpi-grid">
          {/* Card 1: Total Siswa */}
          <div className="bk-kpi-card bk-kpi-card-1">
            <div className="bk-kpi-header">
              <span className="bk-kpi-label">Total Siswa Terdaftar</span>
              <div className="bk-kpi-icon-badge">
                <IconUsers size={18} color="#006190" />
              </div>
            </div>
            <div className="bk-kpi-value-row">
              <span className="bk-kpi-num">288</span>
              <span className="bk-kpi-unit">Siswa</span>
            </div>
            <span className="bk-kpi-subtext">100% Kelas 12 (8 Rombel Aktif)</span>
            <div className="bk-kpi-progress-bar">
              <div className="bk-kpi-progress-fill" style={{ width: "100%" }} />
            </div>
          </div>

          {/* Card 2: Perlu Verifikasi Nilai */}
          <div className="bk-kpi-card bk-kpi-card-2">
            <div className="bk-kpi-header">
              <span className="bk-kpi-label">Perlu Verifikasi Nilai</span>
              <div className="bk-kpi-icon-badge">
                <IconClipboardCheck size={18} color="#7C5400" />
              </div>
            </div>
            <div className="bk-kpi-value-row">
              <span className="bk-kpi-num">14</span>
              <span className="bk-kpi-pill">Menunggu</span>
            </div>
            <span className="bk-kpi-subtext">4 rombel baru mengunggah semester 5</span>
            <div className="bk-kpi-progress-bar">
              <div className="bk-kpi-progress-fill" style={{ width: "18%" }} />
            </div>
          </div>

          {/* Card 3: Target Berisiko (Risk Alert) */}
          <div className="bk-kpi-card bk-kpi-card-3">
            <div className="bk-kpi-header">
              <span className="bk-kpi-label">Target Berisiko (Risk Alert)</span>
              <div className="bk-kpi-icon-badge">
                <IconAlertTriangle size={18} color="#BA1A1A" />
              </div>
            </div>
            <div className="bk-kpi-value-row">
              <span className="bk-kpi-num">19</span>
              <span className="bk-kpi-pill">6.6% Siswa</span>
            </div>
            <span className="bk-kpi-subtext">Defisit mapel kunci &gt; 5 poin vs passing grade</span>
            <div className="bk-kpi-progress-bar">
              <div className="bk-kpi-progress-fill" style={{ width: "24%" }} />
            </div>
          </div>

          {/* Card 4: Siap & Selaras Rekomendasi */}
          <div className="bk-kpi-card bk-kpi-card-4">
            <div className="bk-kpi-header">
              <span className="bk-kpi-label">Siap &amp; Selaras Rekomendasi</span>
              <div className="bk-kpi-icon-badge">
                <IconBadgeCheck size={18} color="#006190" />
              </div>
            </div>
            <div className="bk-kpi-value-row">
              <span className="bk-kpi-num">215</span>
              <span className="bk-kpi-pill">74.6%</span>
            </div>
            <span className="bk-kpi-subtext">Rapor tervalidasi &amp; target selaras RIASEC</span>
            <div className="bk-kpi-progress-bar">
              <div className="bk-kpi-progress-fill" style={{ width: "74.6%" }} />
            </div>
          </div>
        </section>

        {/* Filter & Control Toolbar */}
        <section className="bk-filter-box">
          <div className="bk-filter-row-1">
            <div className="bk-filter-search-wrapper">
              <span className="bk-filter-search-icon">
                <IconSearch size={15} color="#6F7881" />
              </span>
              <input
                type="text"
                placeholder="Cari berdasarkan Nama Siswa, NISN, atau Target Prodi..."
                className="bk-filter-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="bk-kbd-shortcut" style={{ position: "absolute", right: 12 }}>
                ⌘K
              </span>
            </div>

            <button
              type="button"
              className="bk-filter-dropdown"
              onClick={() => setActiveModal("Pilihan Filter Kelas")}
            >
              <IconFilter size={14} color="#6F7881" />
              <span>{selectedClass}</span>
              <IconChevronDown size={14} color="#6F7881" />
            </button>

            <button
              type="button"
              className="bk-filter-dropdown"
              onClick={() => setActiveModal("Urutkan Data Siswa")}
            >
              <IconSort size={14} color="#6F7881" />
              <span>Urutkan: Kebutuhan Intervensi / Risiko</span>
              <IconChevronDown size={14} color="#6F7881" />
            </button>
          </div>

          {/* Status Filter Chips */}
          <div className="bk-filter-row-2">
            <button
              type="button"
              className={`bk-chip ${activeChip === "all" ? "active" : "bk-chip-neutral"}`}
              onClick={() => setActiveChip("all")}
            >
              <span>Semua Siswa (288)</span>
            </button>
            <button
              type="button"
              className={`bk-chip ${activeChip === "risk" ? "active" : "bk-chip-danger"}`}
              onClick={() => setActiveChip(activeChip === "risk" ? "all" : "risk")}
            >
              <IconAlertTriangle size={13} color={activeChip === "risk" ? "#FFFFFF" : "#BA1A1A"} />
              <span>Target Berisiko (19)</span>
            </button>
            <button
              type="button"
              className={`bk-chip ${activeChip === "pending_rapor" ? "active" : "bk-chip-warning"}`}
              onClick={() => setActiveChip(activeChip === "pending_rapor" ? "all" : "pending_rapor")}
            >
              <IconClock size={13} color={activeChip === "pending_rapor" ? "#FFFFFF" : "#7C5400"} />
              <span>Menunggu Verifikasi Rapor (14)</span>
            </button>
            <button
              type="button"
              className={`bk-chip ${activeChip === "pending_riasec" ? "active" : "bk-chip-neutral"}`}
              onClick={() => setActiveChip(activeChip === "pending_riasec" ? "all" : "pending_riasec")}
            >
              <IconUser size={13} color={activeChip === "pending_riasec" ? "#FFFFFF" : "#3F4850"} />
              <span>Belum Lengkap RIASEC (12)</span>
            </button>
            <button
              type="button"
              className={`bk-chip ${activeChip === "verified" ? "active" : "bk-chip-info"}`}
              onClick={() => setActiveChip(activeChip === "verified" ? "all" : "verified")}
            >
              <IconBadgeCheck size={13} color={activeChip === "verified" ? "#FFFFFF" : "#3A4665"} />
              <span>Rekomendasi Terverifikasi (243)</span>
            </button>
          </div>
        </section>

        {/* Main Data Table Container */}
        <section className="bk-table-card">
          <div className="bk-table-scroll-container">
            <table className="bk-data-table">
              <thead>
                <tr>
                  <th className="bk-th bk-th-checkbox">
                    <input
                      type="checkbox"
                      checked={isAllSelected}
                      onChange={handleSelectAll}
                      style={{ cursor: "pointer", width: 16, height: 16 }}
                      aria-label="Pilih Semua Siswa"
                    />
                  </th>
                  <th className="bk-th">Siswa &amp; Identitas</th>
                  <th className="bk-th">Profil RIASEC</th>
                  <th className="bk-th">Rata-Rata Rapor</th>
                  <th className="bk-th">Target Pilihan 1</th>
                  <th className="bk-th">Indeks Keselarasan</th>
                  <th className="bk-th">Status Rapor</th>
                  <th className="bk-th">Catatan Konseling</th>
                  <th className="bk-th" style={{ textAlign: "right" }}>Aksi Tindakan</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan={9} style={{ textAlign: "center", padding: "40px", color: "#6F7881" }}>
                      Tidak ada data siswa yang cocok dengan filter atau pencarian saat ini.
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map((siswa) => {
                    const isChecked = selectedIds.includes(siswa.id);
                    return (
                      <tr
                        key={siswa.id}
                        className={`bk-tr ${siswa.isRiskRow ? "bk-tr-risk" : ""}`}
                      >
                        {/* Checkbox */}
                        <td className="bk-td" style={{ textAlign: "center" }}>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleToggleRow(siswa.id)}
                            style={{ cursor: "pointer", width: 16, height: 16 }}
                            aria-label={`Pilih ${siswa.nama}`}
                          />
                        </td>

                        {/* Siswa & Identitas */}
                        <td className="bk-td">
                          <div className="bk-student-cell">
                            <div
                              className="bk-student-avatar"
                              style={{ background: siswa.avatarColor + "20", color: siswa.avatarColor }}
                            >
                              <IconUser size={18} color={siswa.avatarColor} />
                            </div>
                            <div className="bk-student-meta">
                              <div className="bk-student-name-row">
                                <span className="bk-student-name">{siswa.nama}</span>
                                {siswa.hasRiskBadge && (
                                  <span className="bk-badge-risk">Risk</span>
                                )}
                              </div>
                              <div className="bk-student-subinfo">
                                <span>NISN {siswa.nisn}</span>
                                <span>•</span>
                                <span className="bk-student-class">{siswa.rombel}</span>
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Profil RIASEC */}
                        <td className="bk-td">
                          <div className="bk-riasec-cell">
                            <span
                              className="bk-riasec-badge"
                              style={{
                                background: siswa.riasecBadgeStyle.bg,
                                color: siswa.riasecBadgeStyle.color,
                              }}
                            >
                              {siswa.isRiasecPending && (
                                <IconAlertTriangle size={12} color="#7C5400" />
                              )}
                              {siswa.riasecCode !== "BELUM" ? (
                                <>
                                  <strong>{siswa.riasecCode}</strong> • {siswa.riasecPrimary}
                                </>
                              ) : (
                                siswa.riasecPrimary
                              )}
                            </span>
                            <span className="bk-riasec-subtext">
                              {siswa.riasecSubtext}
                            </span>
                          </div>
                        </td>

                        {/* Rata-Rata Rapor */}
                        <td className="bk-td">
                          <div className="bk-rapor-cell">
                            <div className="bk-rapor-score-row">
                              <span className="bk-rapor-score">
                                {siswa.rataRapor.toFixed(1)}
                              </span>
                              {siswa.trendIsPositive && (
                                <IconTrendUp size={14} color="#047857" />
                              )}
                              {siswa.trendIsNegative && (
                                <IconTrendDown size={14} color="#BA1A1A" />
                              )}
                            </div>
                            <span
                              className="bk-rapor-trend"
                              style={{
                                color: siswa.trendIsPositive
                                  ? "#047857"
                                  : siswa.trendIsNegative
                                  ? "#BA1A1A"
                                  : "#6F7881",
                              }}
                            >
                              {siswa.trendRapor}
                            </span>
                          </div>
                        </td>

                        {/* Target Pilihan 1 */}
                        <td className="bk-td">
                          <div className="bk-target-cell">
                            <span
                              className="bk-target-title"
                              style={{
                                fontStyle: siswa.isTargetPending ? "italic" : "normal",
                                color: siswa.isTargetPending ? "#6F7881" : "#0B1C30",
                              }}
                            >
                              {siswa.targetProdi}
                            </span>
                            <span className="bk-target-campus">
                              {siswa.targetKampus}
                            </span>
                          </div>
                        </td>

                        {/* Indeks Keselarasan */}
                        <td className="bk-td">
                          <div className="bk-keselarasan-cell">
                            <span
                              className="bk-keselarasan-label"
                              style={{ color: siswa.keselarasanColor }}
                            >
                              {siswa.keselarasanLabel}
                            </span>
                            {siswa.keselarasanPercent > 0 && (
                              <div className="bk-keselarasan-bar">
                                <div
                                  className="bk-keselarasan-fill"
                                  style={{
                                    width: `${siswa.keselarasanPercent}%`,
                                    background: siswa.keselarasanColor,
                                  }}
                                />
                              </div>
                            )}
                            {siswa.keselarasanDeficit && (
                              <span className="bk-keselarasan-deficit">
                                {siswa.keselarasanDeficit}
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Status Rapor */}
                        <td className="bk-td">
                          {siswa.statusRapor === "terverifikasi" && (
                            <span
                              className="bk-status-pill"
                              style={{ background: "#D1FAE5", color: "#047857" }}
                            >
                              <IconBadgeCheck size={12} color="#047857" />
                              <span>Terverifikasi</span>
                            </span>
                          )}
                          {siswa.statusRapor === "cepat" && (
                            <button
                              type="button"
                              className="bk-status-pill"
                              style={{
                                background: "#FFDDAF",
                                color: "#7C5400",
                                border: "none",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setModalStudent(siswa);
                                setActiveModal("Verifikasi Nilai Kilat");
                              }}
                            >
                              <IconClock size={12} color="#7C5400" />
                              <span>Verifikasi Cepat</span>
                            </button>
                          )}
                        </td>

                        {/* Catatan Konseling */}
                        <td className="bk-td">
                          {siswa.isCatatanDangerPill ? (
                            <span className="bk-konseling-pill-danger">
                              {siswa.catatanKonseling}
                            </span>
                          ) : (
                            <div className="bk-konseling-cell">
                              {siswa.catatanColor && (
                                <span
                                  className="bk-konseling-dot"
                                  style={{ background: siswa.catatanColor }}
                                />
                              )}
                              <span style={{ color: siswa.catatanColor || "#3F4850" }}>
                                {siswa.catatanKonseling}
                              </span>
                            </div>
                          )}
                        </td>

                        {/* Aksi Tindakan */}
                        <td className="bk-td">
                          <div className="bk-actions-cell">
                            {siswa.actionType === "detail" && (
                              <button
                                type="button"
                                className="bk-action-btn-secondary"
                                onClick={() => {
                                  setModalStudent(siswa);
                                  setActiveModal("Detail Siswa Lengkap");
                                }}
                              >
                                Detail Siswa
                              </button>
                            )}
                            {siswa.actionType === "konseling" && (
                              <button
                                type="button"
                                className="bk-action-btn-primary"
                                onClick={() => {
                                  setModalStudent(siswa);
                                  setActiveModal("Jadwal Konseling Kilat");
                                }}
                              >
                                Konseling Cepat
                              </button>
                            )}
                            {siswa.actionType === "pengingat" && (
                              <button
                                type="button"
                                className="bk-action-btn-warning"
                                onClick={() => {
                                  setModalStudent(siswa);
                                  setActiveModal("Kirim Notifikasi Pengingat");
                                }}
                              >
                                Kirim Pengingat
                              </button>
                            )}

                            <button
                              type="button"
                              className="bk-action-dots-btn"
                              aria-label="Menu Aksi Lainnya"
                              onClick={() => {
                                setModalStudent(siswa);
                                setActiveModal("Opsi Tambahan Siswa");
                              }}
                            >
                              <IconMoreHorizontal size={16} color="#6F7881" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer / Pagination */}
          <div className="bk-table-footer">
            <div className="bk-batch-actions">
              <span className="bk-batch-label">Aksi Massal:</span>
              <button
                type="button"
                className="bk-batch-btn"
                onClick={() => setActiveModal("Verifikasi Rapor Terpilih")}
              >
                Verifikasi Rapor Terpilih
              </button>
              <button
                type="button"
                className="bk-batch-btn"
                onClick={() => setActiveModal("Kirim Pengingat BK Massal")}
              >
                Kirim Pengingat BK Massal
              </button>
              <button
                type="button"
                className="bk-batch-btn"
                onClick={() => setActiveModal("Ekspor Data Terpilih")}
              >
                Ekspor Data Terpilih
              </button>
            </div>

            <div className="bk-pagination-wrapper">
              <span className="bk-pagination-info">
                Menampilkan <strong>1–5</strong> dari <strong>288</strong> Siswa
              </span>
              <div className="bk-pagination-controls">
                <button type="button" className="bk-page-btn" disabled aria-label="Halaman Sebelumnya">
                  <IconChevronLeft size={13} color="#6F7881" />
                </button>
                <button type="button" className="bk-page-btn active">1</button>
                <button type="button" className="bk-page-btn">2</button>
                <button type="button" className="bk-page-btn">3</button>
                <span style={{ padding: "0 4px", color: "#6F7881", fontSize: 13 }}>...</span>
                <button type="button" className="bk-page-btn">58</button>
                <button type="button" className="bk-page-btn" aria-label="Halaman Selanjutnya">
                  <IconChevronRight size={13} color="#0B1C30" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Analytical Context Banner / Quick Assistant */}
        <section className="bk-analytics-banner">
          <div className="bk-analytics-left">
            <div className="bk-analytics-icon-circle">
              <IconAnalytics size={22} color="#FFFFFF" />
            </div>
            <div className="bk-analytics-text">
              <h2 className="bk-analytics-title">
                Analisis Peluang SNBP 2025: SMAN 1 Jakarta
              </h2>
              <p className="bk-analytics-desc">
                Dari 288 siswa terdata, terdapat{" "}
                <strong style={{ color: "#BA1A1A" }}>19 siswa</strong> dengan
                pilihan prodi berisiko tinggi akibat defisit mata pelajaran utama.
                Disarankan segera menjadwalkan konseling alternatif prodi (Plan B)
                sebelum portal PDSS dikunci permanen.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="bk-analytics-cta-btn"
            onClick={() => setActiveChip("risk")}
          >
            Lihat Daftar 19 Siswa Berisiko
          </button>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bk-footer">
        <div className="bk-footer-container">
          <div className="bk-footer-brand-side">
            <div className="bk-brand-logo-badge" style={{ width: 36, height: 36, padding: 4 }}>
              <Image
                src="/images/logo-tight.png"
                alt="ArahIn Logo"
                width={36}
                height={36}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="bk-footer-brand-text">
              <span className="bk-footer-brand-title">
                <span style={{ color: "#06124D", fontWeight: 800 }}>Arah</span>
                <span style={{ color: "#1386E8", fontWeight: 800 }}>In</span> • Sistem Diagnostik Minat &amp; Karir Terpadu
              </span>
              <span className="bk-footer-brand-desc">
                Mendampingi Siswa SMA Menuju Masa Depan Perguruan Tinggi yang Presisi
              </span>
            </div>
          </div>

          <div className="bk-footer-right-side">
            <div className="bk-footer-dapodik-status">
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
            <div className="bk-footer-links">
              <button
                type="button"
                className="bk-footer-link"
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                onClick={() => setActiveModal("Pusat Bantuan Konselor BK")}
              >
                Pusat Bantuan Konselor
              </button>
              <span>•</span>
              <button
                type="button"
                className="bk-footer-link"
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
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

      {/* ================= MODAL INTERAKTIF ================= */}
      {activeModal && (
        <div className="auth-modal-overlay" onClick={() => setActiveModal(null)}>
          <div
            className="auth-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <h3 style={{ margin: 0, color: "#0B1C30", fontSize: "17px", fontWeight: 700 }}>
              {activeModal}
            </h3>

            {modalStudent ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
                <div style={{ background: "#F8FAFC", padding: "12px", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                  <strong>{modalStudent.nama}</strong> ({modalStudent.rombel})
                  <div style={{ color: "#64748B", fontSize: "12px", marginTop: "4px" }}>
                    NISN: {modalStudent.nisn} • Rata-rata Rapor: {modalStudent.rataRapor}
                  </div>
                  <div style={{ marginTop: "6px" }}>
                    Target: <strong>{modalStudent.targetProdi}</strong> ({modalStudent.targetKampus})
                  </div>
                </div>
                <p style={{ margin: 0, color: "#475569", lineHeight: "1.5" }}>
                  Tindakan konseling BK akan dicatat langsung ke buku riwayat pendampingan siswa dan disinkronkan ke laporan kepala sekolah.
                </p>
              </div>
            ) : (
              <p style={{ margin: 0, fontSize: "13px", color: "#475569", lineHeight: "1.5" }}>
                Fitur ini siap dihubungkan dengan integrasi backend API portal bimbingan dan konseling SMAN 1 Jakarta.
              </p>
            )}

            <button
              type="button"
              className="bk-btn-primary"
              style={{ justifyContent: "center", marginTop: "8px" }}
              onClick={() => {
                setActiveModal(null);
                setModalStudent(null);
              }}
            >
              Tutup Dialog
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
