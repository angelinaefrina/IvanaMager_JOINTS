"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import "../../../styles/katalog-prodi.css";
import "../../../styles/eksplorasi-karir.css";

import {
  IconCompass,
  IconSearch,
  IconBell,
  IconUser,
  IconClose,
  IconCheck,
  IconSparkles,
  IconBuilding,
  IconCounselor,
  IconArrowRight,
  IconMenu,
  IconBookmark,
  IconTrendingUp,
  IconWallet,
  IconBriefcase,
  IconFlame,
  IconGraduationCap,
  IconBook,
  IconTarget,
} from "../../../components/siswa/KatalogIcons";

// ─── Data ─────────────────────────────────────────────────────────────────────

type TipeRiasec = "R" | "I" | "A" | "S" | "E" | "C";

const NAMA_RIASEC: Record<TipeRiasec, string> = {
  R: "Realistic",
  I: "Investigative",
  A: "Artistic",
  S: "Social",
  E: "Enterprising",
  C: "Conventional",
};

/** Profil RIASEC siswa (mock — samakan dengan hasil tes minat terakhir). */
const RIASEC_SISWA = "IRC";

interface ProdiRujukan {
  nama: string;
  match: number;
  riasec: string;
  rumpun: string;
  deskripsi: string;
  kampus: string;
  rasio: string;
}

interface MapelKesiapan {
  nama: string;
  nilai: number;
  minimal: number;
}

interface LangkahKarir {
  fase: string;
  judul: string;
  deskripsi: string;
}

interface KarirItem {
  id: string;
  nama: string;
  ringkas: string;
  bidang: string;
  tren: string;
  riasec: string;
  pertumbuhan: string;
  gaji: string;
  lapangan: string;
  lapanganNote: string;
  peran: string;
  skills: string[];
  prodi: ProdiRujukan[];
  mapel: MapelKesiapan[];
  roadmap: LangkahKarir[];
}

const KARIR_DATA: KarirItem[] = [
  {
    id: "ai-engineer",
    nama: "Artificial Intelligence (AI) Engineer",
    ringkas:
      "Merancang sistem cerdas yang mampu belajar dari data, mulai dari chatbot, pengenalan wajah, hingga sistem rekomendasi.",
    bidang: "Teknologi & Data Sains",
    tren: "Tren 2025 • High Demand",
    riasec: "IRC",
    pertumbuhan: "+40% / thn",
    gaji: "9–15 Jt",
    lapangan: "Sangat Tinggi",
    lapanganNote: "Global & Domestik Unicorn",
    peran:
      "Sebagai AI Engineer, kamu akan merancang, melatih, dan menyempurnakan algoritma cerdas berbasis Neural Networks, Large Language Models (LLM), dan Computer Vision. Pekerjaan ini menuntut perpaduan tajam antara deduksi matematika formal, rekayasa perangkat lunak berskala besar, serta etika kecerdasan artifisial.",
    skills: [
      "Python, PyTorch & TensorFlow (Deep Learning)",
      "Aljabar Linear & Kalkulus Lanjut",
      "Statistika & Probabilitas Terapan",
      "MLOps, Cloud Computing & Docker",
      "Natural Language Processing & Computer Vision",
    ],
    prodi: [
      {
        nama: "Teknik Informatika / Ilmu Komputer",
        match: 98,
        riasec: "IRC",
        rumpun: "Rumpun Saintek",
        deskripsi:
          "Fokus komputasi algoritma, struktur data kompleks, rekayasa kecerdasan mesin, dan arsitektur sistem perangkat lunak.",
        kampus: "UI, ITB, UGM, ITS",
        rasio: "Keketatan 1 : 24",
      },
      {
        nama: "Sains Data",
        match: 95,
        riasec: "ICR",
        rumpun: "Rumpun Saintek",
        deskripsi:
          "Mengolah data berskala besar dengan statistika, machine learning, dan visualisasi untuk mendukung keputusan berbasis bukti.",
        kampus: "ITS, UNAIR, IPB, Telkom",
        rasio: "Keketatan 1 : 18",
      },
      {
        nama: "Matematika (Peminatan Komputasi)",
        match: 87,
        riasec: "ICA",
        rumpun: "Rumpun MIPA",
        deskripsi:
          "Membangun fondasi teori optimasi, pemodelan matematis, dan analisis numerik yang menjadi inti algoritma AI modern.",
        kampus: "ITB, UGM, UI, UNPAD",
        rasio: "Keketatan 1 : 12",
      },
    ],
    mapel: [
      { nama: "Matematika Tingkat Lanjut", nilai: 93, minimal: 88 },
      { nama: "Informatika", nilai: 95, minimal: 85 },
      { nama: "Fisika", nilai: 86, minimal: 84 },
      { nama: "Bahasa Inggris", nilai: 82, minimal: 85 },
    ],
    roadmap: [
      {
        fase: "Kelas 12 • Sekarang",
        judul: "Perkuat Matematika & Informatika",
        deskripsi: "Pertahankan rata-rata rapor ≥ 90 dan ikuti OSN Informatika atau kompetisi coding.",
      },
      {
        fase: "S1 • Tahun 1–2",
        judul: "Dasar Pemrograman & Statistika",
        deskripsi: "Kuasai Python, struktur data, aljabar linear, dan probabilitas.",
      },
      {
        fase: "S1 • Tahun 3–4",
        judul: "Spesialisasi Machine Learning",
        deskripsi: "Ambil mata kuliah Deep Learning, magang di startup AI, dan bangun portofolio GitHub.",
      },
      {
        fase: "Karier Awal",
        judul: "Junior AI / ML Engineer",
        deskripsi: "Bergabung dengan tim produk AI di unicorn, BUMN digital, atau perusahaan global remote.",
      },
    ],
  },
  {
    id: "data-scientist",
    nama: "Data Scientist",
    ringkas:
      "Menggali pola tersembunyi dari data untuk menjawab pertanyaan bisnis dan memprediksi tren masa depan.",
    bidang: "Teknologi & Data Sains",
    tren: "Tren 2025 • High Demand",
    riasec: "ICR",
    pertumbuhan: "+35% / thn",
    gaji: "8–13 Jt",
    lapangan: "Tinggi",
    lapanganNote: "Fintech, E-commerce, BUMN",
    peran:
      "Data Scientist mengubah data mentah menjadi wawasan yang dapat ditindaklanjuti. Kamu akan membersihkan data, membangun model statistik dan prediktif, lalu mengomunikasikan temuan kepada pengambil keputusan melalui visualisasi yang jelas.",
    skills: [
      "Python, SQL & Pandas",
      "Statistika Inferensial & Eksperimen A/B",
      "Machine Learning (Scikit-learn)",
      "Visualisasi Data (Tableau, Looker)",
      "Komunikasi Bisnis & Storytelling Data",
    ],
    prodi: [
      {
        nama: "Sains Data",
        match: 97,
        riasec: "ICR",
        rumpun: "Rumpun Saintek",
        deskripsi:
          "Kurikulum terpadu statistika, pemrograman, dan machine learning yang langsung diterapkan pada studi kasus industri.",
        kampus: "ITS, UNAIR, IPB, Telkom",
        rasio: "Keketatan 1 : 18",
      },
      {
        nama: "Statistika",
        match: 93,
        riasec: "ICE",
        rumpun: "Rumpun MIPA",
        deskripsi:
          "Mendalami teori peluang, inferensi, dan pemodelan statistik sebagai fondasi analisis data yang ketat.",
        kampus: "IPB, ITS, UGM, UNPAD",
        rasio: "Keketatan 1 : 14",
      },
      {
        nama: "Teknik Informatika / Ilmu Komputer",
        match: 89,
        riasec: "IRC",
        rumpun: "Rumpun Saintek",
        deskripsi:
          "Memberi kekuatan rekayasa perangkat lunak dan basis data untuk membangun pipeline data berskala besar.",
        kampus: "UI, ITB, UGM, ITS",
        rasio: "Keketatan 1 : 24",
      },
    ],
    mapel: [
      { nama: "Matematika Tingkat Lanjut", nilai: 93, minimal: 87 },
      { nama: "Informatika", nilai: 95, minimal: 82 },
      { nama: "Ekonomi", nilai: 84, minimal: 80 },
      { nama: "Bahasa Inggris", nilai: 82, minimal: 84 },
    ],
    roadmap: [
      {
        fase: "Kelas 12 • Sekarang",
        judul: "Asah Logika & Statistika",
        deskripsi: "Fokus pada Matematika TL dan coba proyek analisis data sederhana dengan spreadsheet.",
      },
      {
        fase: "S1 • Tahun 1–2",
        judul: "Statistika & Pemrograman",
        deskripsi: "Kuasai SQL, Python, dan metode statistik inferensial.",
      },
      {
        fase: "S1 • Tahun 3–4",
        judul: "Proyek Data Nyata",
        deskripsi: "Ikuti kompetisi Kaggle, magang sebagai Data Analyst, dan publikasikan studi kasus.",
      },
      {
        fase: "Karier Awal",
        judul: "Junior Data Scientist",
        deskripsi: "Bergabung dengan tim analitik di fintech, e-commerce, atau konsultan data.",
      },
    ],
  },
  {
    id: "uiux-designer",
    nama: "UI/UX Designer",
    ringkas:
      "Merancang pengalaman digital yang intuitif dan indah, dari riset pengguna hingga prototipe aplikasi.",
    bidang: "Desain & Industri Kreatif",
    tren: "Tren 2025 • Stabil Tinggi",
    riasec: "AIE",
    pertumbuhan: "+22% / thn",
    gaji: "6–10 Jt",
    lapangan: "Tinggi",
    lapanganNote: "Startup, Agensi, Freelance",
    peran:
      "UI/UX Designer menjembatani kebutuhan pengguna dan tujuan bisnis. Kamu akan melakukan riset pengguna, menyusun alur dan wireframe, merancang antarmuka visual, lalu menguji prototipe agar produk digital mudah dan menyenangkan digunakan.",
    skills: [
      "Figma, Prototyping & Design System",
      "User Research & Usability Testing",
      "Tipografi, Warna & Layout",
      "Information Architecture",
      "Dasar HTML/CSS untuk Handoff",
    ],
    prodi: [
      {
        nama: "Desain Komunikasi Visual",
        match: 94,
        riasec: "AES",
        rumpun: "Rumpun Seni & Desain",
        deskripsi:
          "Mempelajari komunikasi visual, tipografi, ilustrasi, dan desain media digital interaktif.",
        kampus: "ITB, ISI Yogyakarta, UNS, Binus",
        rasio: "Keketatan 1 : 16",
      },
      {
        nama: "Desain Produk / Interaksi",
        match: 90,
        riasec: "ARI",
        rumpun: "Rumpun Seni & Desain",
        deskripsi:
          "Fokus perancangan produk dan interaksi manusia–komputer berbasis riset ergonomi dan pengguna.",
        kampus: "ITB, ITS, Telkom",
        rasio: "Keketatan 1 : 12",
      },
      {
        nama: "Sistem Informasi",
        match: 84,
        riasec: "ICE",
        rumpun: "Rumpun Saintek",
        deskripsi:
          "Menggabungkan analisis kebutuhan bisnis dengan rancangan sistem digital yang berpusat pada pengguna.",
        kampus: "UI, ITS, UGM, Telkom",
        rasio: "Keketatan 1 : 15",
      },
    ],
    mapel: [
      { nama: "Seni Budaya / Seni Rupa", nilai: 88, minimal: 85 },
      { nama: "Informatika", nilai: 95, minimal: 80 },
      { nama: "Bahasa Indonesia", nilai: 87, minimal: 82 },
      { nama: "Bahasa Inggris", nilai: 82, minimal: 82 },
    ],
    roadmap: [
      {
        fase: "Kelas 12 • Sekarang",
        judul: "Bangun Portofolio Awal",
        deskripsi: "Redesain aplikasi favoritmu di Figma dan siapkan portofolio untuk seleksi prodi desain.",
      },
      {
        fase: "S1 • Tahun 1–2",
        judul: "Dasar Desain Visual",
        deskripsi: "Pelajari prinsip desain, tipografi, dan teori warna.",
      },
      {
        fase: "S1 • Tahun 3–4",
        judul: "Riset & Studi Kasus",
        deskripsi: "Magang di startup, ikuti bootcamp UX, dan tulis studi kasus mendalam.",
      },
      {
        fase: "Karier Awal",
        judul: "Junior Product Designer",
        deskripsi: "Bergabung dengan tim produk digital atau agensi kreatif.",
      },
    ],
  },
  {
    id: "cyber-security",
    nama: "Cyber Security Analyst",
    ringkas:
      "Melindungi sistem dan data organisasi dari serangan siber melalui pemantauan, analisis, dan respons insiden.",
    bidang: "Teknologi & Keamanan Siber",
    tren: "Tren 2025 • Kekurangan Talenta",
    riasec: "IRC",
    pertumbuhan: "+32% / thn",
    gaji: "8–14 Jt",
    lapangan: "Sangat Tinggi",
    lapanganNote: "Perbankan, BSSN, BUMN",
    peran:
      "Cyber Security Analyst memantau jaringan, mendeteksi ancaman, dan merespons insiden keamanan. Kamu akan menguji celah sistem, menyusun kebijakan keamanan, serta memastikan data sensitif terlindungi sesuai regulasi.",
    skills: [
      "Jaringan Komputer & Protokol TCP/IP",
      "Linux, Scripting & Python",
      "Penetration Testing & Ethical Hacking",
      "Kriptografi Terapan",
      "SIEM & Incident Response",
    ],
    prodi: [
      {
        nama: "Teknik Informatika / Ilmu Komputer",
        match: 95,
        riasec: "IRC",
        rumpun: "Rumpun Saintek",
        deskripsi:
          "Memberi fondasi sistem operasi, jaringan, dan keamanan perangkat lunak dengan peminatan keamanan siber.",
        kampus: "UI, ITB, UGM, ITS",
        rasio: "Keketatan 1 : 24",
      },
      {
        nama: "D4 Rekayasa Kriptografi",
        match: 92,
        riasec: "ICR",
        rumpun: "Sekolah Kedinasan",
        deskripsi:
          "Pendidikan ikatan dinas di Poltek SSN yang berfokus pada persandian dan keamanan informasi negara.",
        kampus: "Poltek SSN (BSSN)",
        rasio: "Ikatan Dinas • Calon ASN",
      },
      {
        nama: "Teknik Komputer",
        match: 86,
        riasec: "RIC",
        rumpun: "Rumpun Saintek",
        deskripsi:
          "Mempelajari perangkat keras, sistem tertanam, dan jaringan sebagai dasar keamanan infrastruktur.",
        kampus: "ITS, UNDIP, Telkom, PENS",
        rasio: "Keketatan 1 : 14",
      },
    ],
    mapel: [
      { nama: "Matematika Tingkat Lanjut", nilai: 93, minimal: 85 },
      { nama: "Informatika", nilai: 95, minimal: 86 },
      { nama: "Fisika", nilai: 86, minimal: 80 },
      { nama: "Bahasa Inggris", nilai: 82, minimal: 85 },
    ],
    roadmap: [
      {
        fase: "Kelas 12 • Sekarang",
        judul: "Kenali Dunia Keamanan Siber",
        deskripsi: "Ikuti CTF tingkat SMA dan pelajari dasar Linux serta jaringan.",
      },
      {
        fase: "S1 / D4 • Tahun 1–2",
        judul: "Jaringan & Sistem Operasi",
        deskripsi: "Kuasai administrasi sistem, jaringan, dan pemrograman skrip.",
      },
      {
        fase: "S1 / D4 • Tahun 3–4",
        judul: "Sertifikasi & Praktik",
        deskripsi: "Ambil sertifikasi dasar (mis. CompTIA Security+) dan magang di SOC.",
      },
      {
        fase: "Karier Awal",
        judul: "SOC Analyst / Pentester Junior",
        deskripsi: "Bergabung dengan tim keamanan bank, BUMN, atau lembaga negara.",
      },
    ],
  },
  {
    id: "cloud-architect",
    nama: "Cloud Solutions Architect",
    ringkas:
      "Merancang infrastruktur cloud yang andal, aman, dan hemat biaya untuk aplikasi berskala jutaan pengguna.",
    bidang: "Teknologi & Infrastruktur",
    tren: "Tren 2025 • High Demand",
    riasec: "RIC",
    pertumbuhan: "+28% / thn",
    gaji: "10–16 Jt",
    lapangan: "Tinggi",
    lapanganNote: "Cloud Provider & Enterprise",
    peran:
      "Cloud Solutions Architect merancang arsitektur sistem di platform seperti AWS, GCP, atau Azure. Kamu akan menentukan cara aplikasi di-deploy, diskalakan, dan diamankan, sambil menyeimbangkan performa dan biaya operasional.",
    skills: [
      "AWS / GCP / Azure Fundamentals",
      "Kubernetes, Docker & Infrastructure as Code",
      "Jaringan & Keamanan Cloud",
      "Linux & Otomasi Skrip",
      "Desain Sistem Terdistribusi",
    ],
    prodi: [
      {
        nama: "Teknik Informatika / Ilmu Komputer",
        match: 94,
        riasec: "IRC",
        rumpun: "Rumpun Saintek",
        deskripsi:
          "Mempelajari sistem terdistribusi, jaringan, dan rekayasa perangkat lunak sebagai dasar arsitektur cloud.",
        kampus: "UI, ITB, UGM, ITS",
        rasio: "Keketatan 1 : 24",
      },
      {
        nama: "Teknik Komputer",
        match: 90,
        riasec: "RIC",
        rumpun: "Rumpun Saintek",
        deskripsi:
          "Fokus infrastruktur, jaringan, dan sistem komputer yang menopang layanan cloud modern.",
        kampus: "ITS, UNDIP, Telkom, PENS",
        rasio: "Keketatan 1 : 14",
      },
      {
        nama: "D4 Teknologi Rekayasa Internet",
        match: 85,
        riasec: "RCI",
        rumpun: "Vokasi Terapan",
        deskripsi:
          "Pendidikan vokasi dengan porsi praktik besar pada jaringan, server, dan layanan internet.",
        kampus: "UGM (SV), PENS, Polban",
        rasio: "70% Praktik",
      },
    ],
    mapel: [
      { nama: "Matematika Tingkat Lanjut", nilai: 93, minimal: 84 },
      { nama: "Informatika", nilai: 95, minimal: 86 },
      { nama: "Fisika", nilai: 86, minimal: 82 },
      { nama: "Bahasa Inggris", nilai: 82, minimal: 85 },
    ],
    roadmap: [
      {
        fase: "Kelas 12 • Sekarang",
        judul: "Pahami Cara Kerja Internet",
        deskripsi: "Pelajari dasar jaringan dan coba deploy website sederhana gratis.",
      },
      {
        fase: "S1 / D4 • Tahun 1–2",
        judul: "Sistem Operasi & Jaringan",
        deskripsi: "Kuasai Linux, jaringan komputer, dan pemrograman backend.",
      },
      {
        fase: "S1 / D4 • Tahun 3–4",
        judul: "Sertifikasi Cloud",
        deskripsi: "Ambil sertifikasi Cloud Practitioner dan magang sebagai DevOps.",
      },
      {
        fase: "Karier Awal",
        judul: "Cloud / DevOps Engineer",
        deskripsi: "Mengelola infrastruktur di perusahaan teknologi sebelum naik menjadi arsitek.",
      },
    ],
  },
];

const TREN_CHIPS = ["ai-engineer", "data-scientist", "uiux-designer", "cyber-security", "cloud-architect"];

/** Skor kecocokan sederhana: posisi huruf RIASEC yang sama mendapat bobot lebih besar. */
function skorKecocokan(kodeKarir: string, kodeSiswa: string): number {
  let skor = 0;
  [...kodeKarir].forEach((huruf, i) => {
    const j = kodeSiswa.indexOf(huruf);
    if (j === -1) return;
    skor += (3 - i) * (j === i ? 1 : 0.7);
  });
  return Math.round(60 + (skor / 6) * 38);
}

function namaPendek(nama: string): string {
  const kurung = nama.match(/\(([^)]+)\)/);
  if (kurung) return `${kurung[1]} Engineer`;
  return nama;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EksplorasiKarirPage() {
  const [activeId, setActiveId] = useState(KARIR_DATA[0].id);
  const [query, setQuery] = useState(KARIR_DATA[0].nama);
  const [suggestOpen, setSuggestOpen] = useState(false);
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const karir = KARIR_DATA.find((k) => k.id === activeId) ?? KARIR_DATA[0];
  const match = skorKecocokan(karir.riasec, RIASEC_SISWA);
  const isSaved = saved.has(karir.id);

  const saran = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return KARIR_DATA;
    return KARIR_DATA.filter(
      (k) =>
        k.nama.toLowerCase().includes(q) ||
        k.bidang.toLowerCase().includes(q) ||
        k.skills.some((s) => s.toLowerCase().includes(q)) ||
        k.prodi.some((p) => p.nama.toLowerCase().includes(q))
    );
  }, [query]);

  const serupa = KARIR_DATA.filter((k) => k.id !== karir.id)
    .map((k) => ({ ...k, skor: skorKecocokan(k.riasec, RIASEC_SISWA) }))
    .sort((a, b) => b.skor - a.skor)
    .slice(0, 3);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  const pilihKarir = (id: string) => {
    const k = KARIR_DATA.find((x) => x.id === id);
    if (!k) return;
    setActiveId(id);
    setQuery(k.nama);
    setSuggestOpen(false);
  };

  const telusuri = () => {
    if (saran.length > 0) pilihKarir(saran[0].id);
    else setSuggestOpen(true);
  };

  const toggleSimpan = (id: string) => {
    const k = KARIR_DATA.find((x) => x.id === id);
    setSaved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    if (k) {
      setToast(
        saved.has(id)
          ? `${namaPendek(k.nama)} dihapus dari Karir Impian`
          : `${namaPendek(k.nama)} disimpan sebagai Karir Impian`
      );
    }
  };

  return (
    <div className="kp-page">
      {/* ═════════════════════════════════════════════════════════════════════
          HEADER: FLOATING PILL NAVBAR
      ═════════════════════════════════════════════════════════════════════ */}
      <header className="kp-header-wrap">
        <nav className="kp-navbar" aria-label="Main Navigation">
          <Link href="/beranda" className="kp-brand">
            <div className="kp-brand-logo">
              <IconCompass size={22} color="#FFFFFF" />
            </div>
            <div className="kp-brand-text">
              <span className="kp-brand-name">ArahMasaDepan</span>
              <span className="kp-brand-badge">Siswa SMA • Kurikulum Merdeka</span>
            </div>
          </Link>

          <div className="kp-nav-menu">
            <Link href="/beranda" className="kp-nav-link">
              Beranda
            </Link>
            <Link href="/rekomendasi" className="kp-nav-link">
              Rekomendasi
            </Link>
            <Link href="/eksplorasi-karir" className="kp-nav-link active">
              Eksplorasi Karir
            </Link>
            <Link href="/analitik" className="kp-nav-link">
              Analisis Keselarasan
            </Link>
            <Link href="/katalog-prodi" className="kp-nav-link">
              Katalog Kampus
            </Link>
          </div>

          <div className="kp-nav-actions">
            <button
              type="button"
              className="kp-quick-search-btn"
              onClick={() => document.getElementById("karir-search")?.focus()}
              title="Cari Prodi / Karir"
            >
              <IconSearch size={14} color="#6F7881" />
              <span>Cari Prodi / Karir</span>
              <span className="kp-kbd-badge">⌘K</span>
            </button>

            <button
              type="button"
              className="kp-icon-btn"
              title="Notifikasi"
              aria-label="Notifikasi"
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

      <main className="ek-main">
        {/* ── HERO & FILTER EKSPLORASI ── */}
        <section className="ek-hero" aria-label="Eksplorasi Karir Impian">
          <div className="ek-hero-sphere" aria-hidden="true" />
          <div className="ek-hero-sphere-2" aria-hidden="true" />

          <div className="ek-hero-inner">
            <nav className="ek-breadcrumbs" aria-label="Breadcrumb">
              <span className="ek-crumb-badge">
                <span className="ek-crumb-dot" />
                Eksplorasi Karir • UC05 / F10
              </span>
              <span className="ek-crumb-sep" aria-hidden="true">/</span>
              <Link href="/beranda" className="ek-crumb">
                Beranda Siswa
              </Link>
              <span className="ek-crumb-sep" aria-hidden="true">/</span>
              <span className="ek-crumb" aria-current="page">
                {karir.nama}
              </span>
            </nav>

            <div className="ek-headline-row">
              <div className="ek-headline">
                <h1 className="ek-title">Eksplorasi Karir Impian Masa Depan</h1>
                <p className="ek-desc">
                  Temukan profesi yang selaras dengan minat RIASEC dan nilai rapormu.
                  Lihat prospek kerja, keterampilan kunci, serta program studi
                  SNBP/SNBT yang menjadi jalur menuju karir tersebut.
                </p>
              </div>

              <div className="ek-stats-pill">
                <div className="ek-stat">
                  <span className="ek-stat-label">KARIR TERDATA</span>
                  <span className="ek-stat-value blue">1.240+</span>
                </div>
                <div className="ek-stat-divider" />
                <div className="ek-stat">
                  <span className="ek-stat-label">COCOK PROFIL {RIASEC_SISWA}</span>
                  <span className="ek-stat-value">86 Karir</span>
                </div>
              </div>
            </div>

            <div className="ek-search">
              <div className="ek-search-box">
                <span className="ek-search-icon">
                  <IconSearch size={20} color="#006190" />
                </span>
                <input
                  id="karir-search"
                  type="text"
                  className="ek-search-input"
                  placeholder="Cari profesi, bidang, atau keterampilan..."
                  value={query}
                  autoComplete="off"
                  role="combobox"
                  aria-expanded={suggestOpen}
                  aria-controls="karir-suggest"
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSuggestOpen(true);
                  }}
                  onFocus={() => setSuggestOpen(true)}
                  onBlur={() => setTimeout(() => setSuggestOpen(false), 120)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") telusuri();
                    if (e.key === "Escape") setSuggestOpen(false);
                  }}
                />
                <button type="button" className="ek-search-btn" onClick={telusuri}>
                  <span>Telusuri</span>
                  <IconArrowRight size={12} color="#FFFFFF" />
                </button>

                {suggestOpen && (
                  <ul id="karir-suggest" className="ek-suggest" role="listbox">
                    {saran.length === 0 ? (
                      <li className="ek-suggest-empty">
                        Belum ada karir yang cocok dengan &quot;{query}&quot;.
                      </li>
                    ) : (
                      saran.map((k) => (
                        <li key={k.id} role="option" aria-selected={k.id === karir.id}>
                          <button
                            type="button"
                            className="ek-suggest-item"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => pilihKarir(k.id)}
                          >
                            <span>{k.nama}</span>
                            <span className="ek-suggest-meta">{k.bidang}</span>
                          </button>
                        </li>
                      ))
                    )}
                  </ul>
                )}
              </div>

              <div className="ek-chips">
                <span className="ek-chips-label">TREN 2025:</span>
                {TREN_CHIPS.map((id) => {
                  const k = KARIR_DATA.find((x) => x.id === id)!;
                  const active = id === karir.id;
                  return (
                    <button
                      key={id}
                      type="button"
                      className={`ek-chip ${active ? "active" : ""}`}
                      aria-pressed={active}
                      onClick={() => pilihKarir(id)}
                    >
                      {active && <IconFlame size={12} color="#FFFFFF" />}
                      {namaPendek(k.nama)}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── SPLIT VIEW 60 : 40 ── */}
        <div className="ek-split">
          {/* ════ KOLOM KIRI ════ */}
          <div className="ek-col">
            <article className="ek-card" aria-labelledby="karir-title">
              <div className="ek-career-top">
                <div className="ek-career-head">
                  <div className="ek-badges">
                    <span className="ek-badge field">
                      <IconBriefcase size={11} color="#006190" />
                      {karir.bidang}
                    </span>
                    <span className="ek-badge trend">{karir.tren.toUpperCase()}</span>
                  </div>
                  <h2 id="karir-title" className="ek-career-title">
                    {karir.nama}
                  </h2>
                  <p className="ek-career-sub">{karir.ringkas}</p>
                </div>

                <button
                  type="button"
                  className={`ek-bookmark ${isSaved ? "saved" : ""}`}
                  onClick={() => toggleSimpan(karir.id)}
                  aria-pressed={isSaved}
                  aria-label={isSaved ? "Hapus dari Karir Impian" : "Simpan sebagai Karir Impian"}
                  title={isSaved ? "Hapus dari Karir Impian" : "Simpan sebagai Karir Impian"}
                >
                  <IconBookmark size={17} color="currentColor" filled={isSaved} />
                </button>
              </div>

              <div className="ek-riasec-row">
                <div className="ek-riasec-left">
                  <span className="ek-riasec-label">Profil RIASEC Dibutuhkan</span>
                  <div className="ek-riasec-pills">
                    {[...karir.riasec].map((h, i) => (
                      <span key={h} className={`ek-riasec-pill t${i}`}>
                        {NAMA_RIASEC[h as TipeRiasec]} ({h})
                      </span>
                    ))}
                  </div>
                </div>
                <span className="ek-riasec-match">
                  <IconSparkles size={14} color="#006190" />
                  Cocok {match}% dengan profilmu
                </span>
              </div>

              <div className="ek-metrics">
                <div className="ek-metric">
                  <div className="ek-metric-head">
                    <span className="ek-metric-label">PERTUMBUHAN</span>
                    <IconTrendingUp size={15} color="#006190" />
                  </div>
                  <span className="ek-metric-value">{karir.pertumbuhan}</span>
                  <span className="ek-metric-note">Tingkat ekspansi hingga 2030</span>
                </div>

                <div className="ek-metric">
                  <div className="ek-metric-head">
                    <span className="ek-metric-label">RENTANG GAJI</span>
                    <IconWallet size={16} color="#9D6B00" />
                  </div>
                  <span className="ek-metric-value">Rp {karir.gaji}</span>
                  <span className="ek-metric-note">IDR / Bulan (Fresh Graduate)</span>
                </div>

                <div className="ek-metric">
                  <div className="ek-metric-head">
                    <span className="ek-metric-label">LAPANGAN KERJA</span>
                    <IconBriefcase size={16} color="#007BB5" />
                  </div>
                  <span className="ek-metric-value">{karir.lapangan}</span>
                  <span className="ek-metric-note">{karir.lapanganNote}</span>
                </div>
              </div>

              <div className="ek-block">
                <h3 className="ek-h3">Apa Peran Utama Profesi Ini?</h3>
                <p className="ek-body">{karir.peran}</p>
              </div>

              <div className="ek-block">
                <div className="ek-block-head">
                  <h3 className="ek-h3">Keterampilan & Tech Stack Kunci</h3>
                  <span className="ek-block-note">STANDAR INDUSTRI 2025</span>
                </div>
                <div className="ek-skills">
                  {karir.skills.map((s) => (
                    <span key={s} className="ek-skill">
                      <span className="ek-skill-dot" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Prodi Rujukan SNBP/SNBT */}
            <section className="ek-section" aria-labelledby="prodi-title">
              <div className="ek-section-head">
                <div>
                  <h2 id="prodi-title" className="ek-h2">
                    Prodi Rujukan SNBP / SNBT
                  </h2>
                  <p className="ek-section-desc">
                    Program studi yang paling relevan untuk menjadi {karir.nama},
                    diurutkan berdasarkan kecocokan dengan profil minat dan nilai rapormu.
                  </p>
                </div>
                <span className="ek-count-pill">{karir.prodi.length} Prodi Relevan</span>
              </div>

              {karir.prodi.map((p, idx) => (
                <article key={p.nama} className="ek-major">
                  <div className="ek-major-body">
                    <div className="ek-major-badges">
                      <span className={`ek-major-badge match ${idx > 0 ? "mid" : ""}`}>
                        {p.match}% MATCH{idx === 0 ? " • PRIORITAS UTAMA" : ""}
                      </span>
                      <span className="ek-major-badge riasec">RIASEC: {p.riasec}</span>
                      <span className="ek-major-rumpun">{p.rumpun}</span>
                    </div>
                    <h3 className="ek-major-title">{p.nama}</h3>
                    <p className="ek-major-desc">{p.deskripsi}</p>
                    <div className="ek-major-meta">
                      <span className="ek-major-meta-item">
                        <IconBuilding size={12} color="#006190" />
                        Kampus Unggulan: {p.kampus}
                      </span>
                      <span className="ek-major-meta-item muted">
                        <IconTarget size={12} color="#525E7F" />
                        {p.rasio}
                      </span>
                    </div>
                  </div>

                  <div className="ek-major-side">
                    <div
                      className="ek-ring"
                      style={{ "--p": p.match } as React.CSSProperties}
                      aria-label={`Kecocokan ${p.match}%`}
                    >
                      <div className="ek-ring-inner">{p.match}%</div>
                    </div>
                    <Link href="/katalog-prodi" className="ek-major-link">
                      Lihat Kampus
                      <IconArrowRight size={12} color="currentColor" />
                    </Link>
                  </div>
                </article>
              ))}
            </section>
          </div>

          {/* ════ KOLOM KANAN ════ */}
          <aside className="ek-col" aria-label="Analisis Kesiapan Karir">
            {/* Kesiapan mapel */}
            <section className="ek-card">
              <div className="ek-side-title">
                <span className="ek-side-icon">
                  <IconBook size={16} color="#006190" />
                </span>
                <div>
                  <h2 className="ek-h2">Kesiapan Mapel Pendukung</h2>
                  <p className="ek-section-desc">Rata-rata rapor Semester 1–5 vs acuan prodi rujukan</p>
                </div>
              </div>

              <ul className="ek-mapel-list">
                {karir.mapel.map((m) => {
                  const aman = m.nilai >= m.minimal;
                  return (
                    <li key={m.nama}>
                      <div className="ek-mapel-row">
                        <span className="ek-mapel-name">{m.nama}</span>
                        <span className="ek-mapel-score">
                          <span className={aman ? "ok" : "warn"}>{m.nilai}</span> / min. {m.minimal}
                        </span>
                      </div>
                      <div className="ek-bar">
                        <div
                          className={`ek-bar-fill ${aman ? "" : "warn"}`}
                          style={{ width: `${m.nilai}%` }}
                        />
                        <span className="ek-bar-mark" style={{ left: `${m.minimal}%` }} />
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="ek-legend">
                <span>
                  <span className="ek-legend-swatch" /> Nilai kamu
                </span>
                <span>
                  <span className="ek-legend-mark" /> Acuan minimal
                </span>
              </div>
            </section>

            {/* Roadmap */}
            <section className="ek-card">
              <div className="ek-side-title">
                <span className="ek-side-icon">
                  <IconGraduationCap size={16} color="#006190" />
                </span>
                <div>
                  <h2 className="ek-h2">Peta Jalan Menuju Karir</h2>
                  <p className="ek-section-desc">Langkah bertahap dari bangku SMA hingga dunia kerja</p>
                </div>
              </div>

              <ol className="ek-roadmap">
                {karir.roadmap.map((l, i) => (
                  <li key={l.judul} className={`ek-step ${i === 0 ? "done" : ""}`}>
                    <span className="ek-step-num">{i + 1}</span>
                    <div>
                      <span className="ek-step-phase">{l.fase}</span>
                      <p className="ek-step-title">{l.judul}</p>
                      <p className="ek-step-desc">{l.deskripsi}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Karir serupa */}
            <section className="ek-card">
              <div className="ek-side-title">
                <span className="ek-side-icon">
                  <IconSparkles size={16} color="#006190" />
                </span>
                <div>
                  <h2 className="ek-h2">Karir Serupa untukmu</h2>
                  <p className="ek-section-desc">Berdasarkan profil RIASEC {RIASEC_SISWA}</p>
                </div>
              </div>

              <ul className="ek-similar-list">
                {serupa.map((k) => (
                  <li key={k.id}>
                    <button
                      type="button"
                      className="ek-similar"
                      onClick={() => {
                        pilihKarir(k.id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <span>
                        <span className="ek-similar-name">{k.nama}</span>
                        <span className="ek-similar-meta">
                          {k.bidang} • Rp {k.gaji}
                        </span>
                      </span>
                      <span className="ek-similar-score">{k.skor}%</span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA */}
            <section className="ek-card ek-cta">
              <h2 className="ek-h2">Yakin dengan pilihan ini?</h2>
              <p className="ek-cta-desc">
                Simpan {namaPendek(karir.nama)} sebagai Karir Impian agar rekomendasi
                prodi dan analisis keselarasan mapel disesuaikan untukmu.
              </p>
              <div className="ek-cta-actions">
                <button
                  type="button"
                  className="ek-btn-light"
                  onClick={() => toggleSimpan(karir.id)}
                >
                  {isSaved ? (
                    <IconCheck size={14} color="#006190" />
                  ) : (
                    <IconBookmark size={14} color="#006190" />
                  )}
                  {isSaved ? "Tersimpan sebagai Karir Impian" : "Simpan Karir Impian"}
                </button>
                <button
                  type="button"
                  className="ek-btn-ghost"
                  onClick={() => setToast("Permintaan konsultasi dikirim ke Guru BK")}
                >
                  <IconCounselor size={14} color="#FFFFFF" />
                  Konsultasi BK
                </button>
              </div>
            </section>
          </aside>
        </div>
      </main>

      {/* ═════════════════════════════════════════════════════════════════════
          FOOTER
      ═════════════════════════════════════════════════════════════════════ */}
      <footer className="kp-footer">
        <div className="kp-footer-inner">
          <div className="kp-footer-grid">
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

            <div className="kp-footer-col">
              <h4 className="kp-footer-title">Pusat Bantuan</h4>
              <p className="kp-footer-desc">
                Konsultasi BK Sekolah & Layanan Panduan Siswa
              </p>
              <button
                type="button"
                className="kp-footer-help-btn"
                onClick={() => setToast("Permintaan konsultasi dikirim ke Guru BK")}
              >
                <IconCounselor size={13} color="#006190" />
                <span>Bantuan Konselor BK</span>
              </button>
            </div>
          </div>

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
        <div className="kp-mobile-drawer-sheet" onClick={(e) => e.stopPropagation()}>
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
            {[
              ["/beranda", "Beranda"],
              ["/rekomendasi", "Rekomendasi"],
              ["/eksplorasi-karir", "Eksplorasi Karir"],
              ["/analitik", "Analisis Keselarasan"],
              ["/katalog-prodi", "Katalog Kampus"],
              ["/profil", "Profil Siswa (Citra Lestari)"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className={`kp-drawer-link ${href === "/eksplorasi-karir" ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {toast && (
        <div className="ek-toast" role="status">
          <IconCheck size={14} color="#CBE6FF" />
          {toast}
        </div>
      )}
    </div>
  );
}
