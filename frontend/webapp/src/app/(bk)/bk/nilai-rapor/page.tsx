"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "../../../../styles/bk-impor-nilai.css";
import {
  IconBadgeCheck,
  IconBell,
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
  IconCloudUpload,
  IconDownload,
  IconFileSpreadsheet,
  IconFilter,
  IconInfo,
  IconRefresh,
  IconSearch,
  IconSliders,
  IconUser,
} from "../../../../components/bk/BkIcons";

interface PreviewRow {
  no: number;
  nisn: string;
  nama: string;
  avatarColor: string;
  rombel: string;
  mtk: number;
  bind: number;
  bing: number;
  p1: number; // Fisika / Sosiologi
  p2: number; // Kimia / Ekonomi
  p3: number; // Biologi / Geografi
  p1Name: string;
  p2Name: string;
  p3Name: string;
  rataRata: number;
  status: string;
}

const PREVIEW_ROWS_MOCK: PreviewRow[] = [
  {
    no: 1,
    nisn: "0064921820",
    nama: "Citra Lestari",
    avatarColor: "#006190",
    rombel: "XII IPA 1",
    mtk: 94,
    bind: 91,
    bing: 92,
    p1: 93,
    p2: 91,
    p3: 93,
    p1Name: "Fisika",
    p2Name: "Kimia",
    p3Name: "Biologi",
    rataRata: 92.4,
    status: "Data Valid & Sinkron",
  },
  {
    no: 2,
    nisn: "0068192031",
    nama: "Fajar Pratama",
    avatarColor: "#BA1A1A",
    rombel: "XII IPA 2",
    mtk: 85,
    bind: 86,
    bing: 84,
    p1: 83,
    p2: 82,
    p3: 84,
    p1Name: "Fisika",
    p2Name: "Kimia",
    p3Name: "Biologi",
    rataRata: 84.1,
    status: "Data Valid & Sinkron",
  },
  {
    no: 3,
    nisn: "0061298410",
    nama: "Annisa Rahma",
    avatarColor: "#7C3AED",
    rombel: "XII IPA 1",
    mtk: 90,
    bind: 92,
    bing: 89,
    p1: 88,
    p2: 90,
    p3: 91,
    p1Name: "Fisika",
    p2Name: "Kimia",
    p3Name: "Biologi",
    rataRata: 90.0,
    status: "Data Valid & Sinkron",
  },
  {
    no: 4,
    nisn: "0063819204",
    nama: "Budi Santoso",
    avatarColor: "#D97706",
    rombel: "XII IPS 1",
    mtk: 82,
    bind: 88,
    bing: 84,
    p1: 89,
    p2: 87,
    p3: 86,
    p1Name: "Sosiologi",
    p2Name: "Ekonomi",
    p3Name: "Geografi",
    rataRata: 86.0,
    status: "Data Valid & Sinkron",
  },
  {
    no: 5,
    nisn: "0067491023",
    nama: "Dimas Setiawan",
    avatarColor: "#059669",
    rombel: "XII IPA 3",
    mtk: 88,
    bind: 85,
    bing: 87,
    p1: 86,
    p2: 85,
    p3: 88,
    p1Name: "Fisika",
    p2Name: "Kimia",
    p3Name: "Biologi",
    rataRata: 86.5,
    status: "Data Valid & Sinkron",
  },
];

export default function BkNilaiRaporPage() {
  // Interactive state
  const [activeStep, setActiveStep] = useState<number>(2); // 1, 2, 3, 4
  const [hasFile, setHasFile] = useState<boolean>(true);
  const [fileName, setFileName] = useState<string>("rekap_nilai_angkatan_2024_2025_sman1jkt_sem1-5.xlsx");
  const [fileSize, setFileSize] = useState<string>("4.8 MB");
  const [semesters, setSemesters] = useState({
    sem1: true,
    sem2: true,
    sem3: true,
    sem4: true,
    sem5: false,
  });
  const [overwriteEnabled, setOverwriteEnabled] = useState<boolean>(true);
  const [autoVerifyEnabled, setAutoVerifyEnabled] = useState<boolean>(true);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [syncSuccess, setSyncSuccess] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTable, setSearchTable] = useState<string>("");

  // Semester toggle handler
  function toggleSemester(key: "sem1" | "sem2" | "sem3" | "sem4" | "sem5") {
    setSemesters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  // Handle Mock Sync
  function handleSync() {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncSuccess(true);
      setActiveStep(4);
      setTimeout(() => {
        setSyncSuccess(false);
      }, 4000);
    }, 1200);
  }

  // Handle File Removal
  function handleRemoveFile() {
    setHasFile(false);
  }

  // Handle Mock Upload
  function handleMockUpload() {
    setHasFile(true);
    setFileName("rekap_nilai_angkatan_2024_2025_sman1jkt_sem1-5.xlsx");
    setFileSize("4.8 MB");
  }

  return (
    <div className="bki-page">
      {/* ================= FLOATING NAVBAR ================= */}
      <div className="bki-navbar-wrapper">
        <header className="bki-navbar">
          {/* Brand & School Info */}
          <Link href="/bk/dashboard" className="bki-nav-brand">
            <div className="bki-brand-logo-badge">
              <Image
                src="/images/logo-tight.png"
                alt="ArahIn Logo"
                width={30}
                height={30}
                className="bki-brand-logo-img"
              />
            </div>
            <div className="bki-brand-info">
              <div className="bki-brand-title-row">
                <span className="bki-brand-name">
                  <span className="bki-brand-name-arah">Arah</span>
                  <span className="bki-brand-name-in">In</span>
                </span>
                <span className="bki-portal-badge">PORTAL BK</span>
              </div>
              <span className="bki-brand-school">SMA Negeri 1 Jakarta</span>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="bki-nav-links" aria-label="Navigasi BK">
            <Link href="/bk/dashboard" className="bki-nav-item inactive">
              Dashboard Siswa
            </Link>
            <Link href="/bk/siswa/citra-lestari" className="bki-nav-item inactive">
              Detail Siswa &amp; Konseling
            </Link>
            <Link href="/bk/nilai-rapor" className="bki-nav-item active">
              Impor Nilai Massal
            </Link>
            <button
              type="button"
              className="bki-nav-item inactive"
              onClick={() => setActiveModal("Ringkasan Angkatan")}
            >
              Ringkasan Angkatan
            </button>
          </nav>

          {/* Right Section: Quick Search, Bell, Profile */}
          <div className="bki-nav-right">
            <div className="bki-nav-search">
              <IconSearch size={14} color="#6F7881" />
              <input
                type="text"
                placeholder="Cari nama / NISN..."
                className="bki-nav-search-input"
                value={searchTable}
                onChange={(e) => setSearchTable(e.target.value)}
              />
              <span className="bki-nav-kbd">⌘K</span>
            </div>

            <button
              type="button"
              className="bki-nav-bell-btn"
              aria-label="Notifikasi BK"
              onClick={() => setActiveModal("Notifikasi: Terdapat pembaruan data rapor angkatan")}
            >
              <IconBell size={17} color="#3F4850" />
              <span className="bki-nav-bell-badge">8</span>
            </button>

            {/* Profile Pill */}
            <div className="bki-profile-pill">
              <div className="bki-profile-avatar">
                <IconUser size={15} color="#FFFFFF" />
              </div>
              <div className="bki-profile-meta">
                <div className="bki-profile-name-row">
                  <span className="bki-profile-name">Dra. Hj. Nurhidayah, M.Pd</span>
                  <span className="bki-profile-badge">Koord. BK</span>
                </div>
                <span className="bki-profile-sub">NIP. 197408122000032001</span>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <main className="bki-main-container">
        {/* --- Top Action Header Section --- */}
        <div className="bki-header-section">
          <div className="bki-header-info">
            <div className="bki-header-tags">
              <span className="bki-tag-code">MANAJEMEN DATA AKADEMIK • UC02 / F03</span>
              <span className="bki-tag-separator">•</span>
              <span className="bki-tag-verified">
                <IconBadgeCheck size={14} color="#006190" />
                STATUS: TERHUBUNG DAPODIK KEMENDIKBUD
              </span>
            </div>
            <h1 className="bki-page-title">Impor Nilai Rapor Massal &amp; Validasi PDSS</h1>
            <p className="bki-page-subtitle">
              Unggah berkas rekap nilai semester 1 hingga 5 dalam format Excel (.xlsx) atau CSV. Sistem akan
              memverifikasi kesesuaian NISN, mendeteksi nilai anomali, dan menyinkronkan data langsung ke profil siswa.
            </p>
          </div>

          <div className="bki-header-actions">
            <button
              type="button"
              className="bki-btn-ghost"
              onClick={() => setActiveModal("Riwayat Impor Sebelumnya")}
            >
              <IconRefresh size={15} color="#0B1C30" />
              Riwayat Impor Sebelumnya
            </button>
            <button
              type="button"
              className="bki-btn-download-template"
              onClick={() => setActiveModal("Unduh Template")}
            >
              <IconDownload size={15} color="#FFFFFF" />
              Unduh Template (.xlsx / .csv)
            </button>
          </div>
        </div>

        {/* --- Sync Success Toast Banner --- */}
        {syncSuccess && (
          <div
            style={{
              background: "#DCE9FF",
              border: "1px solid #006190",
              borderRadius: "12px",
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              animation: "fadeIn 0.3s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "9999px",
                  background: "#006190",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconCheck size={16} color="#FFFFFF" />
              </div>
              <div>
                <strong style={{ color: "#0B1C30", fontSize: "14px" }}>
                  Sinkronisasi Nilai Rapor Berhasil!
                </strong>
                <p style={{ margin: 0, fontSize: "12.5px", color: "#475569" }}>
                  Sebanyak 288 data siswa telah berhasil diperbarui dan diselaraskan ke modul SNBP &amp; Profil Siswa.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSyncSuccess(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#006190",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
        )}

        {/* --- 4-Step Stepper Progress Flow --- */}
        <section className="bki-stepper-card" aria-label="Alur Impor Nilai">
          <div className="bki-stepper-track">
            {/* Step 1: Completed */}
            <div
              className={`bki-step-item ${activeStep > 1 ? "completed" : activeStep === 1 ? "active" : "upcoming"}`}
              onClick={() => setActiveStep(1)}
              style={{ cursor: "pointer" }}
            >
              <div className="bki-step-badge">
                {activeStep > 1 ? <IconCheck size={18} color="#006190" /> : "1"}
              </div>
              <div className="bki-step-text-col">
                <span className="bki-step-subtitle">TAHAP 1</span>
                <span className="bki-step-title">Unggah Berkas Rapor</span>
              </div>
            </div>

            {/* Step 2: Active */}
            <div
              className={`bki-step-item ${activeStep > 2 ? "completed" : activeStep === 2 ? "active" : "upcoming"}`}
              onClick={() => setActiveStep(2)}
              style={{ cursor: "pointer" }}
            >
              <div className="bki-step-badge">
                {activeStep > 2 ? <IconCheck size={18} color="#006190" /> : "2"}
              </div>
              <div className="bki-step-text-col">
                <span className="bki-step-subtitle">TAHAP 2</span>
                <span className="bki-step-title">Pemetaan &amp; Validasi Nilai</span>
              </div>
            </div>

            {/* Step 3: Upcoming */}
            <div
              className={`bki-step-item ${activeStep > 3 ? "completed" : activeStep === 3 ? "active" : "upcoming"}`}
              onClick={() => setActiveStep(3)}
              style={{ cursor: "pointer" }}
            >
              <div className="bki-step-badge">
                {activeStep > 3 ? <IconCheck size={18} color="#006190" /> : "3"}
              </div>
              <div className="bki-step-text-col">
                <span className="bki-step-subtitle">TAHAP 3</span>
                <span className="bki-step-title">Verifikasi Rekap Siswa</span>
              </div>
            </div>

            {/* Step 4: Upcoming */}
            <div
              className={`bki-step-item ${activeStep === 4 ? "active" : "upcoming"}`}
              onClick={() => setActiveStep(4)}
              style={{ cursor: "pointer" }}
            >
              <div className="bki-step-badge">4</div>
              <div className="bki-step-text-col">
                <span className="bki-step-subtitle">TAHAP 4</span>
                <span className="bki-step-title">Sinkronisasi Akun Siswa</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2-Column Bento Grid (Upload & Parameters) --- */}
        <section className="bki-bento-grid">
          {/* Card Kiri: Pusat Unggah File Rapor */}
          <div className="bki-card-upload">
            <div className="bki-card-header-row">
              <div className="bki-card-title-group">
                <IconCloudUpload size={20} color="#006190" />
                <h2 className="bki-card-title">Pusat Unggah Berkas Rapor</h2>
              </div>
              <span className="bki-card-limit-badge">Maks. 25 MB (.xlsx, .xls, .csv)</span>
            </div>

            {/* Dropzone Area or Uploaded State */}
            {!hasFile ? (
              <div
                className="bki-dropzone"
                onClick={handleMockUpload}
                role="button"
                tabIndex={0}
                aria-label="Unggah Berkas"
              >
                <div className="bki-dropzone-icon-circle">
                  <IconCloudUpload size={30} color="#006190" />
                </div>
                <div className="bki-dropzone-prompt">
                  Tarik &amp; lepas berkas nilai rapor angkatan ke sini, atau klik untuk memilih berkas
                </div>
                <div className="bki-dropzone-formats">
                  Mendukung format Microsoft Excel <code>.xlsx</code>, <code>.xls</code> dan Comma Separated{" "}
                  <code>.csv</code>
                </div>
              </div>
            ) : (
              <div className="bki-uploaded-state">
                <div className="bki-uploaded-left">
                  <div className="bki-uploaded-icon-circle">
                    <IconFileSpreadsheet size={22} color="#006190" />
                  </div>
                  <div className="bki-uploaded-info">
                    <div className="bki-uploaded-title">
                      {fileName} <span style={{ color: "#6F7881", fontWeight: 500 }}>({fileSize})</span>
                    </div>
                    <div className="bki-uploaded-sub">
                      <span className="bki-uploaded-dot" /> 288 Siswa Siap Disinkronkan • Database Dapodik Lokal SMAN 1
                      Jakarta terhubung
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="bki-btn-remove-file"
                  onClick={handleRemoveFile}
                >
                  Batal / Ganti Berkas
                </button>
              </div>
            )}

            {/* Progress Mini Bar */}
            <div className="bki-progress-section">
              <div className="bki-progress-labels">
                <span className="bki-progress-title">Status Pembacaan Dataset</span>
                <span className="bki-progress-status">
                  {hasFile ? "Selesai Memindai 100% (288 / 288 Siswa)" : "Menunggu Unggahan Berkas..."}
                </span>
              </div>
              <div className="bki-progress-track">
                <div
                  className="bki-progress-fill"
                  style={{ width: hasFile ? "100%" : "0%" }}
                />
              </div>
            </div>
          </div>

          {/* Card Kanan: Parameter Impor & Validasi */}
          <div className="bki-card-params">
            <div className="bki-params-header-row">
              <div className="bki-card-title-group">
                <IconSliders size={20} color="#006190" />
                <h2 className="bki-card-title">Parameter Impor &amp; Validasi</h2>
              </div>
              <button
                type="button"
                className="bki-params-rule-link"
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                onClick={() => setActiveModal("Panduan Validasi PDSS")}
              >
                Panduan Validasi PDSS ↗
              </button>
            </div>

            {/* Semester Checkboxes */}
            <div className="bki-semester-selector-group">
              <label className="bki-semester-label">Pilih Semester Rapor yang Diimpor:</label>
              <div className="bki-semester-boxes-row">
                <div
                  className={`bki-semester-box ${semesters.sem1 ? "active" : ""}`}
                  onClick={() => toggleSemester("sem1")}
                >
                  <input
                    type="checkbox"
                    className="bki-semester-checkbox"
                    checked={semesters.sem1}
                    onChange={() => {}}
                  />
                  <span className="bki-semester-box-text">Sem 1</span>
                </div>
                <div
                  className={`bki-semester-box ${semesters.sem2 ? "active" : ""}`}
                  onClick={() => toggleSemester("sem2")}
                >
                  <input
                    type="checkbox"
                    className="bki-semester-checkbox"
                    checked={semesters.sem2}
                    onChange={() => {}}
                  />
                  <span className="bki-semester-box-text">Sem 2</span>
                </div>
                <div
                  className={`bki-semester-box ${semesters.sem3 ? "active" : ""}`}
                  onClick={() => toggleSemester("sem3")}
                >
                  <input
                    type="checkbox"
                    className="bki-semester-checkbox"
                    checked={semesters.sem3}
                    onChange={() => {}}
                  />
                  <span className="bki-semester-box-text">Sem 3</span>
                </div>
                <div
                  className={`bki-semester-box ${semesters.sem4 ? "active" : ""}`}
                  onClick={() => toggleSemester("sem4")}
                >
                  <input
                    type="checkbox"
                    className="bki-semester-checkbox"
                    checked={semesters.sem4}
                    onChange={() => {}}
                  />
                  <span className="bki-semester-box-text">Sem 4</span>
                </div>
                <div
                  className={`bki-semester-box ${semesters.sem5 ? "active" : "disabled"}`}
                  onClick={() => toggleSemester("sem5")}
                  title="Semester 5 (Opsional / Tahap Akhir)"
                >
                  <input
                    type="checkbox"
                    className="bki-semester-checkbox"
                    checked={semesters.sem5}
                    onChange={() => {}}
                  />
                  <span className="bki-semester-box-text">Sem 5</span>
                </div>
              </div>
              <span className="bki-semester-note">
                Catatan: Semester 1–5 dibutuhkan untuk pemetaan kelayakan SNBP &amp; analisis keselarasan prodi.
              </span>
            </div>

            {/* Toggles */}
            <div className="bki-toggles-group">
              <div className="bki-toggle-card">
                <div className="bki-toggle-info">
                  <span className="bki-toggle-title">Opsi Timpa Data (Overwrite)</span>
                  <span className="bki-toggle-desc">
                    Perbarui nilai lama jika NISN siswa sudah ada di database sistem.
                  </span>
                </div>
                <label className="bki-switch">
                  <input
                    type="checkbox"
                    checked={overwriteEnabled}
                    onChange={(e) => setOverwriteEnabled(e.target.checked)}
                  />
                  <span className="bki-slider" />
                </label>
              </div>

              <div className="bki-toggle-card">
                <div className="bki-toggle-info">
                  <span className="bki-toggle-title">Auto-Verifikasi oleh Guru BK</span>
                  <span className="bki-toggle-desc">
                    Tandai nilai terverifikasi resmi tanpa perlu persetujuan manual per mata pelajaran.
                  </span>
                </div>
                <label className="bki-switch">
                  <input
                    type="checkbox"
                    checked={autoVerifyEnabled}
                    onChange={(e) => setAutoVerifyEnabled(e.target.checked)}
                  />
                  <span className="bki-slider" />
                </label>
              </div>
            </div>

            {/* Quick Tip Card */}
            <div className="bki-tip-card">
              <IconInfo size={16} color="#006190" />
              <span className="bki-tip-text">
                Sistem otomatis mengecek kelengkapan nilai 6 Mapel Utama (Matematika, B. Indo, B. Ing, Fisika/Sosiologi,
                Kimia/Ekonomi, Biologi/Geografi).
              </span>
            </div>

            {/* Main Sync CTA Button */}
            <button
              type="button"
              className="bki-btn-sync"
              onClick={handleSync}
              disabled={isSyncing || !hasFile}
              style={{ opacity: isSyncing || !hasFile ? 0.6 : 1 }}
            >
              <IconRefresh
                size={18}
                color="#FFFFFF"
                className={isSyncing ? "animate-spin" : ""}
              />
              {isSyncing
                ? "Menyinkronkan Nilai ke Database..."
                : "Simpan & Sinkronkan Nilai ke Akun Siswa (288 Siswa)"}
            </button>
          </div>
        </section>

        {/* --- Pratinjau Data Impor (Preview Table Section) --- */}
        <section className="bki-preview-card" aria-label="Pratinjau Data Impor">
          {/* Summary Bar & Metrics */}
          <div className="bki-summary-bar">
            <div className="bki-summary-badges">
              <span className="bki-badge-metric highlight">
                <IconBadgeCheck size={14} color="#006190" />
                288 Siswa Terdeteksi
              </span>
              <span className="bki-badge-metric">1.152 Baris Nilai Mata Pelajaran</span>
              <span className="bki-badge-metric">0 Anomali / Error Ditemukan</span>
            </div>

            <div className="bki-summary-actions">
              <span className="bki-badge-success">
                <IconCheck size={14} color="#006190" />
                Validasi Sukses 100%
              </span>
              <button
                type="button"
                className="bki-icon-btn"
                title="Saring / Filter"
                onClick={() => setActiveModal("Filter Pratinjau")}
              >
                <IconFilter size={15} color="#3F4850" />
              </button>
              <button
                type="button"
                className="bki-icon-btn"
                title="Muat Ulang Pratinjau"
                onClick={() => setActiveModal("Memuat ulang pratinjau...")}
              >
                <IconRefresh size={15} color="#3F4850" />
              </button>
            </div>
          </div>

          {/* Table Wrapper with horizontal scrolling */}
          <div className="bki-table-scroll">
            <table className="bki-table">
              <thead>
                <tr>
                  <th className="bki-th bki-th-center" style={{ width: "48px" }}>NO.</th>
                  <th className="bki-th" style={{ width: "120px" }}>NISN</th>
                  <th className="bki-th" style={{ minWidth: "180px" }}>NAMA SISWA</th>
                  <th className="bki-th" style={{ width: "110px" }}>ROMBEL</th>
                  <th className="bki-th bki-th-center" style={{ width: "70px" }}>MTK</th>
                  <th className="bki-th bki-th-center" style={{ width: "70px" }}>B. IND</th>
                  <th className="bki-th bki-th-center" style={{ width: "70px" }}>B. ING</th>
                  <th className="bki-th bki-th-center" style={{ width: "85px" }}>FIS / SOS</th>
                  <th className="bki-th bki-th-center" style={{ width: "85px" }}>KIM / EKO</th>
                  <th className="bki-th bki-th-center" style={{ width: "85px" }}>BIO / GEO</th>
                  <th className="bki-th bki-th-center" style={{ width: "95px" }}>RATA-RATA</th>
                  <th className="bki-th" style={{ width: "170px" }}>STATUS VALIDASI</th>
                </tr>
              </thead>
              <tbody>
                {PREVIEW_ROWS_MOCK.map((row) => (
                  <tr key={row.nisn} className="bki-tr">
                    <td className="bki-td bki-th-center bki-td-num">{row.no}</td>
                    <td className="bki-td bki-td-nisn">{row.nisn}</td>
                    <td className="bki-td">
                      <div className="bki-td-student">
                        <div
                          className="bki-student-avatar-badge"
                          style={{
                            backgroundColor: `${row.avatarColor}18`,
                            color: row.avatarColor,
                          }}
                        >
                          {row.nama.slice(0, 1)}
                        </div>
                        <span className="bki-student-name">{row.nama}</span>
                      </div>
                    </td>
                    <td className="bki-td">
                      <span className="bki-class-pill">{row.rombel}</span>
                    </td>
                    <td className="bki-td bki-score-cell">{row.mtk}</td>
                    <td className="bki-td bki-score-cell">{row.bind}</td>
                    <td className="bki-td bki-score-cell">{row.bing}</td>
                    <td className="bki-td bki-score-cell">
                      <span>{row.p1}</span>
                      <small style={{ display: "block", fontSize: "10px", color: "#6F7881" }}>
                        {row.p1Name}
                      </small>
                    </td>
                    <td className="bki-td bki-score-cell">
                      <span>{row.p2}</span>
                      <small style={{ display: "block", fontSize: "10px", color: "#6F7881" }}>
                        {row.p2Name}
                      </small>
                    </td>
                    <td className="bki-td bki-score-cell">
                      <span>{row.p3}</span>
                      <small style={{ display: "block", fontSize: "10px", color: "#6F7881" }}>
                        {row.p3Name}
                      </small>
                    </td>
                    <td className="bki-td bki-score-cell">
                      <span className="bki-average-pill">{row.rataRata.toFixed(1)}</span>
                    </td>
                    <td className="bki-td">
                      <span className="bki-validation-pill">
                        <IconCheck size={13} color="#006190" />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="bki-table-footer">
            <span className="bki-table-count">
              Menampilkan 5 dari 288 data siswa yang berhasil diverifikasi
            </span>
            <div className="bki-pagination-controls">
              <button
                type="button"
                className="bki-page-btn"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              >
                <IconChevronLeft size={13} color="currentColor" />
                Sebelumnya
              </button>
              <span className="bki-page-indicator">Halaman {currentPage} dari 58</span>
              <button
                type="button"
                className="bki-page-btn"
                disabled={currentPage === 58}
                onClick={() => setCurrentPage((p) => Math.min(58, p + 1))}
              >
                Selanjutnya
                <IconChevronRight size={13} color="currentColor" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bki-footer">
        <div className="bki-footer-container">
          <div className="bki-footer-brand-side">
            <div className="bki-brand-logo-badge" style={{ width: "36px", height: "36px" }}>
              <Image
                src="/images/logo-tight.png"
                alt="ArahIn Logo"
                width={26}
                height={26}
                className="bki-brand-logo-img"
              />
            </div>
            <div className="bki-footer-brand-text">
              <span className="bki-footer-brand-title">
                ArahIn BK Management System • Versi 2.4.0
              </span>
              <span className="bki-footer-brand-desc">
                SMA Negeri 1 Jakarta • Tahun Ajaran 2024/2025 Semester Ganjil
              </span>
            </div>
          </div>

          <div className="bki-footer-right-side">
            <div className="bki-footer-dapodik-status">
              <IconBadgeCheck size={14} color="#006190" />
              Terhubung Server Dapodik Pusat (Kemendikbudristek)
            </div>
            <div className="bki-footer-links">
              <button
                type="button"
                className="bki-footer-link"
                onClick={() => setActiveModal("Panduan Penggunaan")}
              >
                Panduan Penggunaan
              </button>
              <span>•</span>
              <button
                type="button"
                className="bki-footer-link"
                onClick={() => setActiveModal("Kebijakan Privasi Data PDSS")}
              >
                Kebijakan Privasi PDSS
              </button>
              <span>•</span>
              <button
                type="button"
                className="bki-footer-link"
                onClick={() => setActiveModal("Bantuan Teknis")}
              >
                Bantuan Teknis
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
              maxWidth: "520px",
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

            {activeModal === "Unduh Template" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "13.5px", color: "#475569" }}>
                <p style={{ margin: 0 }}>
                  Silakan unduh template resmi format PDSS Kemendikbudristek berikut untuk memastikan seluruh kolom NISN, mata pelajaran, dan bobot nilai sesuai dengan sistem:
                </p>
                <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                  <button
                    type="button"
                    onClick={() => {
                      alert("Template Excel (.xlsx) sedang diunduh...");
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
                    Format Excel (.xlsx)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      alert("Template CSV (.csv) sedang diunduh...");
                      setActiveModal(null);
                    }}
                    style={{
                      flex: 1,
                      padding: "10px",
                      borderRadius: "8px",
                      background: "#EFF4FF",
                      color: "#006190",
                      border: "1px solid #CBE6FF",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                    }}
                  >
                    <IconDownload size={15} color="#006190" />
                    Format CSV (.csv)
                  </button>
                </div>
              </div>
            ) : activeModal === "Riwayat Impor Sebelumnya" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", color: "#475569" }}>
                <div style={{ padding: "10px", background: "#F8F9FF", borderRadius: "8px", border: "1px solid #E5EEFF" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#0B1C30" }}>
                    <span>Impor Nilai Rapor Semester 1–4</span>
                    <span style={{ color: "#006190" }}>Sukses (288 Siswa)</span>
                  </div>
                  <div style={{ fontSize: "11.5px", color: "#6F7881", marginTop: "2px" }}>
                    14 Oktober 2024 • Oleh Dra. Hj. Nurhidayah, M.Pd
                  </div>
                </div>
                <div style={{ padding: "10px", background: "#F8F9FF", borderRadius: "8px", border: "1px solid #E5EEFF" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#0B1C30" }}>
                    <span>Sinkronisasi Nilai Rapor Semester 3</span>
                    <span style={{ color: "#006190" }}>Sukses (288 Siswa)</span>
                  </div>
                  <div style={{ fontSize: "11.5px", color: "#6F7881", marginTop: "2px" }}>
                    28 September 2024 • Oleh Admin Dapodik SMAN 1
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ fontSize: "13.5px", color: "#475569", lineHeight: "20px" }}>
                <p style={{ margin: 0 }}>
                  Informasi untuk fitur <strong>{activeModal}</strong> sedang disinkronkan langsung dengan server Dapodik
                  dan PDSS SMA Negeri 1 Jakarta.
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
