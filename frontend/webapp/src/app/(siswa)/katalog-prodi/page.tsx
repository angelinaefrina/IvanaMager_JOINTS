"use client";

import React, { useState } from "react";
import Link from "next/link";
import "../../../styles/katalog-prodi.css";

import {
  IconCompass,
  IconSearch,
  IconBell,
  IconUser,
  IconShieldSync,
  IconDownload,
  IconBuilding,
  IconBook,
  IconGraduationCap,
  IconTarget,
  IconSliders,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconClose,
  IconCheck,
  IconLocationPin,
  IconSparkles,
  IconLock,
  IconScale,
  IconExternalLink,
  IconCounselor,
  IconCompare,
  IconArrowRight,
  IconMenu,
  CampusBannerUI,
  CampusBannerITB,
  CampusBannerPENS,
  CampusBannerUGM,
  CampusBannerSSN,
  CampusBannerUNAIR,
} from "../../../components/siswa/KatalogIcons";

interface ProdiCardItem {
  id: string;
  univName: string;
  univShort: string;
  univTheme: "blue" | "slate" | "amber";
  prodiTitle: string;
  faculty: string;
  badgeLeft: string;
  badgeRight: string;
  matchPillText: string;
  matchPillTheme: "blue" | "slate" | "amber";
  metricLeftLabel: string;
  metricLeftVal: string;
  metricLeftSub: string;
  metricRightLabel: string;
  metricRightVal: string;
  metricRightSub: string;
  metricRightColor?: "red" | "amber" | "blue";
  benchmarkLabel: string;
  benchmarkVal: string;
  progressPercent: number;
  progressTheme: "blue" | "slate" | "amber" | "gold";
  mapelTags: string[];
  actionBtnText: string;
  actionBtnKind: "target" | "vokasi" | "kedinasan";
  externalLinkText: string;
  externalUrl: string;
  bannerComponent: React.ComponentType;
  jenjang: "S1" | "D4" | "D3";
  wilayah: string;
  akreditasi: string;
  jalur: string;
}

const PRODI_DATA: ProdiCardItem[] = [
  {
    id: "ui-if",
    univName: "UNIVERSITAS INDONESIA",
    univShort: "UI",
    univTheme: "blue",
    prodiTitle: "S1 Teknik Informatika",
    faculty: "Fakultas Ilmu Komputer (Fasilkom)",
    badgeLeft: "Akreditasi Unggul • PTN-BH",
    badgeRight: "Depok, Jawa Barat",
    matchPillText: "94% Match • Peluang Tinggi",
    matchPillTheme: "blue",
    metricLeftLabel: "KUOTA SNBP 2025",
    metricLeftVal: "95",
    metricLeftSub: "kursi",
    metricRightLabel: "KEKETATAN SELEKSI",
    metricRightVal: "1 : 24",
    metricRightSub: "(Ketat)",
    metricRightColor: "red",
    benchmarkLabel: "Acuan Nilai Rapor:",
    benchmarkVal: "Min. 91.5 (Kamu: 92.8)",
    progressPercent: 88,
    progressTheme: "blue",
    mapelTags: ["Mapel: Mat TL", "Informatika", "Fisika"],
    actionBtnText: "Kunci Jadi Target",
    actionBtnKind: "target",
    externalLinkText: "Buka Web Resmi PMB UI",
    externalUrl: "https://penerimaan.ui.ac.id",
    bannerComponent: CampusBannerUI,
    jenjang: "S1",
    wilayah: "Jawa Barat",
    akreditasi: "Unggul",
    jalur: "SNBP & SNBT",
  },
  {
    id: "itb-stei",
    univName: "INSTITUT TEKNOLOGI BANDUNG",
    univShort: "ITB",
    univTheme: "slate",
    prodiTitle: "STEI - Komputasi",
    faculty: "S1 Teknik Informatika / Sains Data",
    badgeLeft: "Akreditasi Unggul • PTN-BH",
    badgeRight: "Bandung, Jabar",
    matchPillText: "88% Match • Peluang Kompetitif",
    matchPillTheme: "slate",
    metricLeftLabel: "KUOTA SNBP 2025",
    metricLeftVal: "120",
    metricLeftSub: "kursi",
    metricRightLabel: "KEKETATAN SELEKSI",
    metricRightVal: "1 : 28",
    metricRightSub: "(Super Ketat)",
    metricRightColor: "red",
    benchmarkLabel: "Acuan Nilai Rapor:",
    benchmarkVal: "Min. 93.0 (Kamu: 92.8)",
    progressPercent: 82,
    progressTheme: "slate",
    mapelTags: ["Mapel: Matematika TL", "Fisika Tingkat Lanjut"],
    actionBtnText: "Kunci Jadi Target",
    actionBtnKind: "target",
    externalLinkText: "Buka Web Resmi PMB ITB",
    externalUrl: "https://admission.itb.ac.id",
    bannerComponent: CampusBannerITB,
    jenjang: "S1",
    wilayah: "Jawa Barat",
    akreditasi: "Unggul",
    jalur: "SNBP & SNBT",
  },
  {
    id: "pens-rpl",
    univName: "POLITEKNIK ELEKTRONIKA NEGERI SURABAYA",
    univShort: "PENS",
    univTheme: "amber",
    prodiTitle: "D4 Rekayasa Perangkat Lunak",
    faculty: "Departemen Teknik Informatika & Komputer",
    badgeLeft: "Unggul • Vokasi Top Nasional",
    badgeRight: "Surabaya, Jatim",
    matchPillText: "98% Match • Rekomendasi Teratas",
    matchPillTheme: "amber",
    metricLeftLabel: "KUOTA SNBP 2025",
    metricLeftVal: "60",
    metricLeftSub: "kursi",
    metricRightLabel: "FOKUS PEMBELAJARAN",
    metricRightVal: "70% Praktik",
    metricRightSub: "",
    metricRightColor: "amber",
    benchmarkLabel: "Acuan Nilai Rapor:",
    benchmarkVal: "Min. 86.0 (Kamu: 92.8)",
    progressPercent: 98,
    progressTheme: "amber",
    mapelTags: ["Mapel: Kejuruan RPL / TI", "Matematika"],
    actionBtnText: "Pilih Opsi Vokasi",
    actionBtnKind: "vokasi",
    externalLinkText: "Buka Web Resmi SPMB PENS",
    externalUrl: "https://pmb.pens.ac.id",
    bannerComponent: CampusBannerPENS,
    jenjang: "D4",
    wilayah: "Jawa Timur",
    akreditasi: "Unggul",
    jalur: "SNBP & SNBT",
  },
  {
    id: "ugm-ilkom",
    univName: "UNIVERSITAS GADJAH MADA",
    univShort: "UGM",
    univTheme: "blue",
    prodiTitle: "S1 Ilmu Komputer",
    faculty: "Fakultas MIPA (FMIPA)",
    badgeLeft: "Akreditasi Unggul • PTN-BH",
    badgeRight: "Sleman, D.I. Yogyakarta",
    matchPillText: "91% Match • Peluang Kompetitif",
    matchPillTheme: "blue",
    metricLeftLabel: "KUOTA SNBP 2025",
    metricLeftVal: "85",
    metricLeftSub: "kursi",
    metricRightLabel: "KEKETATAN SELEKSI",
    metricRightVal: "1 : 22",
    metricRightSub: "(Ketat)",
    metricRightColor: "red",
    benchmarkLabel: "Acuan Nilai Rapor:",
    benchmarkVal: "Min. 90.8 (Kamu: 92.8)",
    progressPercent: 86,
    progressTheme: "blue",
    mapelTags: ["Mapel: Matematika TL", "Logika Komputasi"],
    actionBtnText: "Kunci Jadi Target",
    actionBtnKind: "target",
    externalLinkText: "Buka Web Resmi UM UGM",
    externalUrl: "https://um.ugm.ac.id",
    bannerComponent: CampusBannerUGM,
    jenjang: "S1",
    wilayah: "D.I. Yogyakarta",
    akreditasi: "Unggul",
    jalur: "SNBP & SNBT",
  },
  {
    id: "ssn-kripto",
    univName: "BSSN / BADAN SIBER & SANDI NEGARA",
    univShort: "SSN",
    univTheme: "slate",
    prodiTitle: "D4 Rekayasa Kriptografi",
    faculty: "Politeknik Siber dan Sandi Negara",
    badgeLeft: "Sekolah Kedinasan • Ikatan Dinas",
    badgeRight: "Bogor, Jawa Barat",
    matchPillText: "100% Bebas Biaya • Calon ASN",
    matchPillTheme: "amber",
    metricLeftLabel: "ALOKASI FORMASI",
    metricLeftVal: "125",
    metricLeftSub: "Taruna",
    metricRightLabel: "JALUR MASUK",
    metricRightVal: "SKD CAT + BSSN",
    metricRightSub: "",
    metricRightColor: "amber",
    benchmarkLabel: "Syarat Tambahan:",
    benchmarkVal: "Fisik Prima & Tes Samapta",
    progressPercent: 75,
    progressTheme: "gold",
    mapelTags: ["Mapel: Matematika > 85", "B. Inggris > 85"],
    actionBtnText: "Lihat Alur Kedinasan",
    actionBtnKind: "kedinasan",
    externalLinkText: "Buka Web Resmi Poltek SSN",
    externalUrl: "https://poltekssn.ac.id",
    bannerComponent: CampusBannerSSN,
    jenjang: "D4",
    wilayah: "Jawa Barat",
    akreditasi: "Unggul",
    jalur: "Ikatan Dinas",
  },
  {
    id: "unair-sainsdata",
    univName: "UNIVERSITAS AIRLANGGA",
    univShort: "UNAIR",
    univTheme: "blue",
    prodiTitle: "S1 Teknologi Sains Data",
    faculty: "Fakultas Sains dan Teknologi (FST)",
    badgeLeft: "Akreditasi Unggul • PTN-BH",
    badgeRight: "Surabaya, Jatim",
    matchPillText: "93% Match • Tren AI & Big Data",
    matchPillTheme: "blue",
    metricLeftLabel: "KUOTA SNBP 2025",
    metricLeftVal: "65",
    metricLeftSub: "kursi",
    metricRightLabel: "KEKETATAN SELEKSI",
    metricRightVal: "1 : 18",
    metricRightSub: "(Sedang)",
    metricRightColor: "blue",
    benchmarkLabel: "Acuan Nilai Rapor:",
    benchmarkVal: "Min. 89.2 (Kamu: 92.8)",
    progressPercent: 92,
    progressTheme: "blue",
    mapelTags: ["Mapel: Matematika & Statistika", "Informatika"],
    actionBtnText: "Kunci Jadi Target",
    actionBtnKind: "target",
    externalLinkText: "Buka Web Resmi PPMB UNAIR",
    externalUrl: "https://ppmb.unair.ac.id",
    bannerComponent: CampusBannerUNAIR,
    jenjang: "S1",
    wilayah: "Jawa Timur",
    akreditasi: "Unggul",
    jalur: "SNBP & SNBT",
  },
];

export default function KatalogProdiPage() {
  // ── States ────────────────────────────────────────────────────────────────
  const [searchTerm, setSearchTerm] = useState("Teknik Informatika");
  const [riasecEnabled, setRiasecEnabled] = useState(true);
  const [sortBy, setSortBy] = useState<"peluang" | "kuota">("peluang");
  const [activePage, setActivePage] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [compareModalOpen, setCompareModalOpen] = useState(false);

  // Targets & Bookmarks
  const [lockedTargets, setLockedTargets] = useState<Set<string>>(
    new Set(["ui-if"])
  );
  const [bookmarkedItems, setBookmarkedItems] = useState<Set<string>>(
    new Set(["ui-if", "itb-stei", "pens-rpl"])
  );

  // Compare Dock Selection
  const [compareList, setCompareList] = useState<string[]>([
    "ui-if",
    "itb-stei",
    "pens-rpl",
  ]);

  // Filters State
  const [selectedJenjang, setSelectedJenjang] = useState("Semua (S1/D4/D3)");
  const [selectedWilayah, setSelectedWilayah] = useState("Jawa & Jabodetabek");
  const [selectedAkreditasi, setSelectedAkreditasi] = useState("Unggul / A");
  const [selectedJalur, setSelectedJalur] = useState("SNBP & SNBT");

  // Filtered Cards logic
  const filteredCards = PRODI_DATA.filter((item) => {
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return (
      item.prodiTitle.toLowerCase().includes(q) ||
      item.univName.toLowerCase().includes(q) ||
      item.faculty.toLowerCase().includes(q) ||
      item.mapelTags.some((tag) => tag.toLowerCase().includes(q))
    );
  }).sort((a, b) => {
    if (sortBy === "peluang") {
      return b.progressPercent - a.progressPercent;
    } else {
      const kuotaA = parseInt(a.metricLeftVal) || 0;
      const kuotaB = parseInt(b.metricLeftVal) || 0;
      return kuotaB - kuotaA;
    }
  });

  const toggleLockTarget = (id: string) => {
    setLockedTargets((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    // Sync with compare list
    setCompareList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        if (prev.length >= 4) return [...prev.slice(1), id];
        return [...prev, id];
      }
    });
  };

  return (
    <div className="kp-page">
      {/* ── Ambient Background Glows ── */}
      <div className="kp-ambient-glow-1" aria-hidden="true" />
      <div className="kp-ambient-glow-2" aria-hidden="true" />

      {/* ═════════════════════════════════════════════════════════════════════
          HEADER: FLOATING PILL NAVBAR
      ═════════════════════════════════════════════════════════════════════ */}
      <header className="kp-header-wrap">
        <nav className="kp-navbar" aria-label="Main Navigation">
          {/* Logo & Brand */}
          <Link href="/beranda" className="kp-brand">
            <div className="kp-brand-logo">
              <IconCompass size={22} color="#FFFFFF" />
            </div>
            <div className="kp-brand-text">
              <span className="kp-brand-name">ArahMasaDepan</span>
              <span className="kp-brand-badge">Siswa SMA • Kurikulum Merdeka</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="kp-nav-menu">
            <Link href="/beranda" className="kp-nav-link">
              Beranda
            </Link>
            <Link href="/rekomendasi" className="kp-nav-link">
              Rekomendasi
            </Link>
            <Link href="/eksplorasi-karir" className="kp-nav-link">
              Eksplorasi Karir
            </Link>
            <Link href="/analitik" className="kp-nav-link">
              Analisis Keselarasan
            </Link>
            <Link href="/katalog-prodi" className="kp-nav-link active">
              Katalog Kampus
            </Link>
          </div>

          {/* Right Action Icons & User Meta */}
          <div className="kp-nav-actions">
            <button
              type="button"
              className="kp-quick-search-btn"
              onClick={() => {
                const el = document.getElementById("search-input");
                el?.focus();
              }}
              title="Cari Prodi / Karir"
            >
              <IconSearch size={14} color="#6F7881" />
              <span>Cari Prodi / Karir</span>
              <span className="kp-kbd-badge">⌘K</span>
            </button>

            <button
              type="button"
              className="kp-icon-btn"
              title="Notifikasi Seleksi"
              aria-label="Notifikasi Seleksi"
            >
              <IconBell size={18} color="#3F4850" />
              <span className="kp-dot-badge" />
            </button>

            <div className="kp-nav-divider" />

            <Link href="/profil" className="kp-user-pill" title="Profil Siswa">
              <div className="kp-user-avatar">
                <IconUser size={16} color="#FFFFFF" />
              </div>
              <div className="kp-user-meta">
                <span className="kp-user-name">Citra Lestari</span>
                <span className="kp-user-class">Kelas 12 IPA 1</span>
              </div>
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              className="kp-mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Buka Menu"
            >
              <IconMenu size={20} color="#0B1C30" />
            </button>
          </div>
        </nav>
      </header>

      {/* ═════════════════════════════════════════════════════════════════════
          MAIN CONTENT AREA
      ═════════════════════════════════════════════════════════════════════ */}
      <main className="kp-main">
        {/* ── SECTION 1: HERO HEADER & STATS ROW ── */}
        <section className="kp-hero-section" aria-label="Hero Katalog Kampus">
          <div className="kp-hero-top">
            <div className="kp-hero-content">
              {/* Overline Badge */}
              <div className="kp-hero-badge">
                <span className="kp-hero-badge-dot" />
                <span className="kp-hero-badge-text">
                  KATALOG RESMI PENDIDIKAN TINGGI • SNPMB BPPP & BAN-PT (UC09 / F16)
                </span>
              </div>

              {/* Title & Description */}
              <h1 className="kp-hero-title">
                Katalog Kampus & Daya Tampung Nasional
              </h1>
              <p className="kp-hero-desc">
                Sistem repositori terintegrasi untuk Siswa SMA & Guru BK. Eksplorasi
                kuota seleksi SNBP/SNBT 2025, keketatan prodi, akreditasi, peta mata
                pelajaran pendukung, serta simulasi peluang berbasis nilai rapor.
              </p>
            </div>

            {/* Right Action Buttons */}
            <div className="kp-hero-actions">
              <div className="kp-sync-pill">
                <div className="kp-sync-icon-box">
                  <IconShieldSync size={20} color="#006190" />
                </div>
                <div className="kp-sync-meta">
                  <span className="kp-sync-title">Update Sinkronisasi</span>
                  <span className="kp-sync-status">Data Resmi SNPMB 2025</span>
                </div>
              </div>

              <button
                type="button"
                className="kp-btn-primary"
                onClick={() => alert("Mengunduh Panduan Kuota & Seleksi PTN 2025 (PDF)...")}
              >
                <IconDownload size={16} color="#FFFFFF" />
                <span>Unduh Panduan PDF</span>
              </button>
            </div>
          </div>

          {/* 4 Telemetry Stat Cards */}
          <div className="kp-stats-row">
            {/* Card 1 */}
            <div className="kp-stat-card">
              <div className="kp-stat-info">
                <span className="kp-stat-label">KAMPUS TERDATA</span>
                <div className="kp-stat-value-group">
                  <span className="kp-stat-number">145</span>
                  <span className="kp-stat-sub">PTN & Vokasi</span>
                </div>
              </div>
              <div className="kp-stat-icon-wrapper blue-soft">
                <IconBuilding size={22} color="#006190" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="kp-stat-card">
              <div className="kp-stat-info">
                <span className="kp-stat-label">PROGRAM STUDI</span>
                <div className="kp-stat-value-group">
                  <span className="kp-stat-number">3.420</span>
                  <span className="kp-stat-sub">Terverifikasi</span>
                </div>
              </div>
              <div className="kp-stat-icon-wrapper slate-soft">
                <IconBook size={22} color="#525E7F" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="kp-stat-card">
              <div className="kp-stat-info">
                <span className="kp-stat-label">TOTAL KUOTA SNBP</span>
                <div className="kp-stat-value-group">
                  <span className="kp-stat-number">172.500</span>
                  <span className="kp-stat-sub amber">Kursi</span>
                </div>
              </div>
              <div className="kp-stat-icon-wrapper amber-soft">
                <IconGraduationCap size={22} color="#7C5400" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="kp-stat-card">
              <div className="kp-stat-info">
                <span className="kp-stat-label">COCOK MINAT KAMU</span>
                <div className="kp-stat-value-group">
                  <span className="kp-stat-number">18</span>
                  <span className="kp-stat-sub muted">Prodi Prioritas</span>
                </div>
              </div>
              <div className="kp-stat-icon-wrapper blue-dark">
                <IconTarget size={22} color="#FFFFFF" />
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: SEARCH & FILTER CONTROL STATION ── */}
        <section
          className="kp-search-station"
          aria-label="Pencarian dan Filter Prodi"
        >
          {/* Main Search Bar Row */}
          <div className="kp-search-bar-row">
            <div className="kp-search-input-box">
              <div className="kp-search-leading-icon">
                <IconSearch size={18} color="#6F7881" />
              </div>
              <input
                id="search-input"
                type="text"
                className="kp-search-input"
                placeholder="Cari program studi, kampus, atau rumpun keilmuan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="kp-search-trailing">
                <span className="kp-kbd-badge">⌘K</span>
                {searchTerm && (
                  <button
                    type="button"
                    className="kp-clear-btn"
                    onClick={() => setSearchTerm("")}
                    title="Bersihkan Pencarian"
                    aria-label="Bersihkan pencarian"
                  >
                    <IconClose size={10} color="#3F4850" />
                  </button>
                )}
              </div>
            </div>

            <button
              type="button"
              className="kp-btn-apply-filter"
              onClick={() => {
                // Trigger quick filter notification or drawer
              }}
            >
              <IconSliders size={16} color="#FFFFFF" />
              <span>Terapkan Filter</span>
            </button>
          </div>

          {/* Filter Dropdown Pills & RIASEC Toggle */}
          <div className="kp-filters-row">
            <div className="kp-filter-pills-group">
              {/* Jenjang */}
              <button
                type="button"
                className="kp-filter-pill-btn"
                onClick={() => {
                  const options = ["Semua (S1/D4/D3)", "S1 Sarjana", "D4 Terapan", "D3 Vokasi"];
                  const nextIdx = (options.indexOf(selectedJenjang) + 1) % options.length;
                  setSelectedJenjang(options[nextIdx]);
                }}
              >
                <span>Jenjang:</span>
                <span className="kp-pill-val-blue">{selectedJenjang}</span>
                <IconChevronDown size={12} color="#0B1C30" />
              </button>

              {/* Wilayah */}
              <button
                type="button"
                className="kp-filter-pill-btn"
                onClick={() => {
                  const options = ["Jawa & Jabodetabek", "Luar Jawa", "Seluruh Indonesia"];
                  const nextIdx = (options.indexOf(selectedWilayah) + 1) % options.length;
                  setSelectedWilayah(options[nextIdx]);
                }}
              >
                <span>Wilayah:</span>
                <span className="kp-pill-val-dark">{selectedWilayah}</span>
                <IconChevronDown size={12} color="#0B1C30" />
              </button>

              {/* Akreditasi */}
              <button
                type="button"
                className="kp-filter-pill-btn active"
                onClick={() => {
                  const options = ["Unggul / A", "Baik Sekali / B", "Semua Akreditasi"];
                  const nextIdx = (options.indexOf(selectedAkreditasi) + 1) % options.length;
                  setSelectedAkreditasi(options[nextIdx]);
                }}
              >
                <IconCheck size={12} color="#006190" />
                <span>Akreditasi: {selectedAkreditasi}</span>
                <IconClose size={10} color="#001E30" />
              </button>

              {/* Jalur Masuk */}
              <button
                type="button"
                className="kp-filter-pill-btn"
                onClick={() => {
                  const options = ["SNBP & SNBT", "SNBP Saja", "SNBT Saja", "Mandiri / Kedinasan"];
                  const nextIdx = (options.indexOf(selectedJalur) + 1) % options.length;
                  setSelectedJalur(options[nextIdx]);
                }}
              >
                <span>Jalur:</span>
                <span className="kp-pill-val-dark">{selectedJalur}</span>
                <IconChevronDown size={12} color="#0B1C30" />
              </button>
            </div>

            {/* Personalized RIASEC Match Toggle Switch */}
            <div
              className="kp-riasec-toggle-pill"
              onClick={() => setRiasecEnabled(!riasecEnabled)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setRiasecEnabled(!riasecEnabled);
              }}
            >
              <span className="kp-riasec-dot" />
              <span className="kp-riasec-label">
                Minat RIASEC: Investigative (IRC)
              </span>
              <div
                className={`kp-switch-track ${riasecEnabled ? "on" : ""}`}
                aria-label="Toggle filter minat RIASEC"
              >
                <div className="kp-switch-thumb" />
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: FILTER CONTEXT BREADCRUMB & SORTING ── */}
        <div className="kp-context-bar">
          <div className="kp-context-text">
            <span>
              Menampilkan {filteredCards.length} dari 48 prodi terfilter untuk
              kata kunci &quot;{searchTerm || "Semua Prodi"}&quot;
            </span>
            <span className="kp-context-sep" />
            <span className="kp-context-sub">
              Berdasarkan Nilai Rapor Semester 1 – 5 (Rata-rata 92.8)
            </span>
          </div>

          <div className="kp-sort-group">
            <span className="kp-sort-label">Urutkan:</span>
            <button
              type="button"
              className={`kp-sort-option ${sortBy === "peluang" ? "active" : ""}`}
              onClick={() => setSortBy("peluang")}
            >
              Peluang Kelulusan Tertinggi
            </button>
            <span className="kp-sort-divider">|</span>
            <button
              type="button"
              className={`kp-sort-option ${sortBy === "kuota" ? "active" : ""}`}
              onClick={() => setSortBy("kuota")}
            >
              Daya Tampung Terbanyak
            </button>
          </div>
        </div>

        {/* ── SECTION 4: 3-COLUMN CARDS GRID (RESPONSIVE PC / LAPTOP / HP) ── */}
        <section className="kp-cards-grid" aria-label="Daftar Program Studi">
          {filteredCards.map((card) => {
            const isLocked = lockedTargets.has(card.id);
            const isBookmarked = bookmarkedItems.has(card.id);
            const BannerComponent = card.bannerComponent;

            return (
              <article key={card.id} className="kp-card">
                {/* Visual Banner Header */}
                <div className="kp-card-banner">
                  <BannerComponent />
                  <div className="kp-banner-gradient" />

                  {/* Top Badges */}
                  <div className="kp-banner-top-badges">
                    <span
                      className={`kp-glass-badge ${
                        card.actionBtnKind === "kedinasan" ? "amber-text" : ""
                      }`}
                    >
                      {card.badgeLeft.includes("Unggul") ? (
                        <IconCheck size={11} color="#006190" />
                      ) : (
                        <IconSparkles size={11} color="#7C5400" />
                      )}
                      <span>{card.badgeLeft}</span>
                    </span>

                    <span
                      className={`kp-solid-badge ${
                        card.univTheme === "slate"
                          ? "slate"
                          : card.actionBtnKind === "vokasi" || card.actionBtnKind === "kedinasan"
                          ? "soft-blue"
                          : ""
                      }`}
                    >
                      <IconLocationPin size={10} color="currentColor" style={{ marginRight: 4 }} />
                      <span>{card.badgeRight}</span>
                    </span>
                  </div>

                  {/* Bottom Match Pill */}
                  <div className={`kp-match-pill ${card.matchPillTheme}`}>
                    <IconSparkles
                      size={13}
                      color={
                        card.matchPillTheme === "amber"
                          ? "#7C5400"
                          : card.matchPillTheme === "slate"
                          ? "#525E7E"
                          : "#006190"
                      }
                    />
                    <span>{card.matchPillText}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="kp-card-body">
                  {/* Univ Header */}
                  <div className="kp-card-head">
                    <div className="kp-card-head-info">
                      <span className="kp-card-univ">{card.univName}</span>
                      <h2 className="kp-card-title">{card.prodiTitle}</h2>
                      <p className="kp-card-dept">{card.faculty}</p>
                    </div>
                    <div className={`kp-univ-avatar ${card.univTheme}`}>
                      {card.univShort}
                    </div>
                  </div>

                  {/* Telemetry Metrics Grid */}
                  <div className="kp-metrics-grid">
                    <div className="kp-metric-box">
                      <span className="kp-metric-label">
                        {card.metricLeftLabel}
                      </span>
                      <div className="kp-metric-val-wrap">
                        <span className="kp-metric-val">{card.metricLeftVal}</span>
                        {card.metricLeftSub && (
                          <span className="kp-metric-sub">{card.metricLeftSub}</span>
                        )}
                      </div>
                    </div>

                    <div className="kp-metric-box">
                      <span className="kp-metric-label">
                        {card.metricRightLabel}
                      </span>
                      <div className="kp-metric-val-wrap">
                        <span
                          className={`kp-metric-val ${card.metricRightColor || ""}`}
                        >
                          {card.metricRightVal}
                        </span>
                        {card.metricRightSub && (
                          <span
                            className={`kp-metric-sub ${card.metricRightColor || ""}`}
                          >
                            {card.metricRightSub}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Subject Alignment & Grade Benchmark */}
                  <div className="kp-grade-section">
                    <div className="kp-grade-row">
                      <span className="kp-grade-label">{card.benchmarkLabel}</span>
                      <span className="kp-grade-val">{card.benchmarkVal}</span>
                    </div>

                    <div className="kp-progress-track">
                      <div
                        className={`kp-progress-fill ${card.progressTheme}`}
                        style={{ width: `${card.progressPercent}%` }}
                      />
                    </div>

                    <div className="kp-mapel-tags">
                      {card.mapelTags.map((tag, idx) => (
                        <span key={idx} className="kp-mapel-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="kp-card-actions">
                    <div className="kp-card-actions-row">
                      <button
                        type="button"
                        className={`kp-btn-target ${isLocked ? "locked" : ""}`}
                        onClick={() => toggleLockTarget(card.id)}
                      >
                        <IconLock size={14} color="#FFFFFF" />
                        <span>
                          {isLocked ? "Target Terkunci" : card.actionBtnText}
                        </span>
                      </button>

                      <button
                        type="button"
                        className={`kp-btn-round-action ${isBookmarked ? "bookmarked" : ""}`}
                        onClick={() => toggleBookmark(card.id)}
                        title={isBookmarked ? "Hapus dari Perbandingan" : "Bandingkan Prodi"}
                        aria-label="Bandingkan prodi"
                      >
                        <IconScale size={16} color="currentColor" />
                      </button>
                    </div>

                    <a
                      href={card.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="kp-card-ext-link"
                    >
                      <span>{card.externalLinkText}</span>
                      <IconExternalLink size={12} color="currentColor" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* ── SECTION 5: PAGINATION BAR ── */}
        <div className="kp-pagination-bar">
          <span className="kp-pagination-info">
            Menampilkan halaman {activePage} dari 8 (Total 48 Program Studi Terkait)
          </span>

          <div className="kp-pagination-controls">
            <button
              type="button"
              className="kp-page-btn"
              disabled={activePage === 1}
              onClick={() => setActivePage((p) => Math.max(1, p - 1))}
              aria-label="Halaman Sebelumnya"
            >
              <IconChevronLeft size={14} color="#3F4850" />
            </button>

            {[1, 2, 3].map((page) => (
              <button
                key={page}
                type="button"
                className={`kp-page-btn ${activePage === page ? "active" : ""}`}
                onClick={() => setActivePage(page)}
              >
                {page}
              </button>
            ))}

            <span className="kp-page-dots">...</span>

            <button
              type="button"
              className={`kp-page-btn ${activePage === 8 ? "active" : ""}`}
              onClick={() => setActivePage(8)}
            >
              8
            </button>

            <button
              type="button"
              className="kp-page-btn"
              disabled={activePage === 8}
              onClick={() => setActivePage((p) => Math.min(8, p + 1))}
              aria-label="Halaman Berikutnya"
            >
              <IconChevronRight size={14} color="#0B1C30" />
            </button>
          </div>
        </div>
      </main>

      {/* ═════════════════════════════════════════════════════════════════════
          STICKY / FLOATING COMPARISON DOCK (GLASSMORPHISM)
      ═════════════════════════════════════════════════════════════════════ */}
      {compareList.length > 0 && (
        <aside className="kp-floating-dock-wrap" aria-label="Bilah Perbandingan">
          <div className="kp-floating-dock">
            {/* Left Summary */}
            <div className="kp-dock-summary">
              <div className="kp-dock-icon-badge">
                <IconCompare size={16} color="#FFFFFF" />
              </div>
              <div className="kp-dock-meta">
                <span className="kp-dock-title">
                  Membandingkan {compareList.length} Kampus Target
                </span>
                <div className="kp-dock-chips">
                  <span className="kp-dock-chip">
                    <span className="kp-dock-dot blue" />
                    <span>UI (Fasilkom)</span>
                  </span>
                  <span>•</span>
                  <span className="kp-dock-chip">
                    <span className="kp-dock-dot slate" />
                    <span>ITB (STEI)</span>
                  </span>
                  <span>•</span>
                  <span className="kp-dock-chip">
                    <span className="kp-dock-dot amber" />
                    <span>PENS (RPLA)</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="kp-dock-actions">
              <button
                type="button"
                className="kp-btn-counselor"
                onClick={() => alert("Membuka ruang konsultasi dengan Guru BK...")}
              >
                <IconCounselor size={14} color="#7C5400" />
                <span>Konsultasi BK</span>
              </button>

              <button
                type="button"
                className="kp-btn-compare-primary"
                onClick={() => setCompareModalOpen(true)}
              >
                <span>Bandingkan Prodi (UI & Peluang)</span>
                <IconArrowRight size={14} color="#FFFFFF" />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* ═════════════════════════════════════════════════════════════════════
          FOOTER (4-COLUMN RESPONSIVE LAYOUT)
      ═════════════════════════════════════════════════════════════════════ */}
      <footer className="kp-footer">
        <div className="kp-footer-inner">
          <div className="kp-footer-grid">
            {/* Col 1: Brand Info */}
            <div className="kp-footer-col">
              <div className="kp-brand">
                <div className="kp-brand-logo">
                  <IconCompass size={18} color="#FFFFFF" />
                </div>
                <div className="kp-brand-text">
                  <span className="kp-brand-name">ArahMasaDepan</span>
                </div>
              </div>
              <p className="kp-footer-desc">
                Platform diagnostik minat bakat dan panduan pilihan program studi
                SNBP, SNBT, dan Jalur Mandiri berstandar Kurikulum Merdeka.
              </p>
            </div>

            {/* Col 2: Fitur Unggulan */}
            <div className="kp-footer-col">
              <h4 className="kp-footer-title">Fitur Unggulan</h4>
              <ul className="kp-footer-list">
                <li>
                  <Link href="/tes-minat" className="kp-footer-link">
                    Tes RIASEC Holland
                  </Link>
                </li>
                <li>
                  <Link href="/analitik" className="kp-footer-link">
                    Matriks Keselarasan Mapel
                  </Link>
                </li>
                <li>
                  <Link href="/rekomendasi" className="kp-footer-link">
                    Simulasi Rasionalisasi SNBP
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Eksplorasi */}
            <div className="kp-footer-col">
              <h4 className="kp-footer-title">Eksplorasi</h4>
              <ul className="kp-footer-list">
                <li>
                  <Link href="/eksplorasi-karir" className="kp-footer-link">
                    Peta Karir Vokasi & Akademik
                  </Link>
                </li>
                <li>
                  <Link href="/katalog-prodi" className="kp-footer-link">
                    Direktori PTN & PTS
                  </Link>
                </li>
                <li>
                  <Link href="/perkembangan" className="kp-footer-link">
                    Panduan Portofolio Seni & Olahraga
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Pusat Bantuan */}
            <div className="kp-footer-col">
              <h4 className="kp-footer-title">Pusat Bantuan</h4>
              <p className="kp-footer-desc">
                Konsultasi BK Sekolah & Layanan Panduan Siswa
              </p>
              <button
                type="button"
                className="kp-footer-help-btn"
                onClick={() => alert("Menghubungi konselor BK sekolah Anda...")}
              >
                <IconCounselor size={13} color="#006190" />
                <span>Bantuan Konselor BK</span>
              </button>
            </div>
          </div>

          {/* Bottom Legal & Copyright */}
          <div className="kp-footer-bottom">
            <span className="kp-footer-copy">
              © 2025 ArahMasaDepan • Inisiatif Pendampingan Karir Siswa Indonesia
            </span>
            <div className="kp-footer-legal">
              <Link href="#" className="kp-legal-link">
                Kebijakan Privasi Data Siswa
              </Link>
              <span>•</span>
              <Link href="#" className="kp-legal-link">
                Ketentuan Layanan
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ═════════════════════════════════════════════════════════════════════
          MOBILE NAVIGATION DRAWER
      ═════════════════════════════════════════════════════════════════════ */}
      <div
        className={`kp-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="kp-mobile-drawer-sheet"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="kp-drawer-header">
            <div className="kp-brand">
              <div className="kp-brand-logo">
                <IconCompass size={18} color="#FFFFFF" />
              </div>
              <span className="kp-brand-name">ArahMasaDepan</span>
            </div>
            <button
              type="button"
              className="kp-clear-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Tutup menu"
            >
              <IconClose size={14} color="#0B1C30" />
            </button>
          </div>

          <div className="kp-drawer-links">
            <Link
              href="/beranda"
              className="kp-drawer-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/rekomendasi"
              className="kp-drawer-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rekomendasi
            </Link>
            <Link
              href="/eksplorasi-karir"
              className="kp-drawer-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Eksplorasi Karir
            </Link>
            <Link
              href="/analitik"
              className="kp-drawer-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Analisis Keselarasan
            </Link>
            <Link
              href="/katalog-prodi"
              className="kp-drawer-link active"
              onClick={() => setMobileMenuOpen(false)}
            >
              Katalog Kampus
            </Link>
            <Link
              href="/profil"
              className="kp-drawer-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Profil Siswa (Citra Lestari)
            </Link>
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          COMPARISON MODAL DIALOG
      ═════════════════════════════════════════════════════════════════════ */}
      <div
        className={`kp-modal-backdrop ${compareModalOpen ? "open" : ""}`}
        onClick={() => setCompareModalOpen(false)}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="kp-modal-card"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="kp-modal-head">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div className="kp-dock-icon-badge">
                <IconCompare size={16} color="#FFFFFF" />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: "#0B1C30" }}>
                  Matriks Perbandingan Prodi Target
                </h3>
                <span style={{ fontSize: 12, color: "#6F7881" }}>
                  Berdasarkan Rapor Semester 1–5 & Nilai Mapel Pendukung
                </span>
              </div>
            </div>
            <button
              type="button"
              className="kp-clear-btn"
              onClick={() => setCompareModalOpen(false)}
              aria-label="Tutup Dialog"
            >
              <IconClose size={12} color="#0B1C30" />
            </button>
          </div>

          <div className="kp-modal-body">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
              {PRODI_DATA.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  style={{
                    border: "1px solid #E5EEFF",
                    borderRadius: 16,
                    padding: 16,
                    background: "#F8F9FF",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#006190" }}>{item.univShort}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, background: "#E5EEFF", padding: "2px 8px", borderRadius: 999 }}>{item.jenjang}</span>
                  </div>
                  <h4 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#0B1C30" }}>{item.prodiTitle}</h4>
                  <div style={{ fontSize: 12, color: "#3F4850" }}>
                    <div><strong>Kuota SNBP:</strong> {item.metricLeftVal} kursi</div>
                    <div><strong>Keketatan:</strong> {item.metricRightVal}</div>
                    <div><strong>Acuan Rapor:</strong> {item.benchmarkVal}</div>
                    <div style={{ marginTop: 6, fontWeight: 700, color: "#006190" }}>{item.matchPillText}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 8 }}>
              <button
                type="button"
                className="kp-btn-counselor"
                onClick={() => setCompareModalOpen(false)}
              >
                Tutup
              </button>
              <button
                type="button"
                className="kp-btn-primary"
                onClick={() => {
                  alert("Rekomendasi rasionalisasi pilihan SNBP telah disimpan ke akun Anda!");
                  setCompareModalOpen(false);
                }}
              >
                Simpan Sebagai Rencana Pilihan SNBP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
