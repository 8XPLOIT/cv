<div align="center">

<!-- Logo & Title -->
<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOyHc40uUxDor4NeQC-FQ-6domgoq1z-VbiCI583NgcEwtLyXQpG4aRguR4pIhBqIdKmNyKo0f8b8homnph51aUDytZixZMUh-eIFcu2EVvRCDoBRWCub0ZjNMfcXIqEQdlsglTHkq7CnkETJvDO9OcHYSqI1ZD2dJIH3DuRzO-jd8hV2sLFMDRcf0sa8/s1600/Image_6qi3ab6qi3ab6qi3.jpg?w=200&h=200&fit=crop&crop=face" alt="Kapten Nemo Avatar" width="120" height="120" style="border-radius: 50%; border: 2px solid rgba(255,255,255,0.2);" />

# KAPTEN NEMO PERSONAL HUB

### Digital Creator & IT Support — Lombok, Indonesia

[![Website](https://img.shields.io/badge/nemospiritgeek.my.id-Live_Site-red?style=for-the-badge&logo=googlechrome&logoColor=white)](https://nemospiritgeek.my.id/)
[![Version](https://img.shields.io/badge/version-2.0.0-blue?style=for-the-badge)]()
[![Design](https://img.shields.io/badge/design-Dark%20Glassmorphism-black?style=for-the-badge)]()
[![Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)]()
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)]()

**L. Moh. Banu Pebrianto** · @nemospiritgeek · Kapten Nemo

*Bridging technology and consciousness — crafting innovative, ethical, and impactful digital solutions.*

</div>

---

## Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Tentang Kreator](#tentang-kreator)
- [Fitur Utama](#fitur-utama)
- [Struktur Halaman](#struktur-halaman)
- [Link Redirect Pages](#link-redirect-pages)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Proyek](#struktur-proyek)
- [Pengembangan Lokal](#pengembangan-lokal)
- [Build & Deploy](#build--deploy)
- [Portofolio Proyek](#portofolio-proyek)
- [Kontak & Kolaborasi](#kontak--kolaborasi)
- [Lisensi](#lisensi)

---

## Tentang Proyek

**Kapten Nemo Personal Hub** adalah sebuah *landing page* portofolio personal yang modern dan elegan. Dirancang dengan estetika **Dark Glassmorphism** (efek kaca buram ala iOS) di atas latar belakang hitam pekat dengan aksen merah minimalis, halaman ini berfungsi sebagai:

- Kartu nama digital untuk perkenalan profesional
- Pusat tautan utama (CV, Bio Link, media sosial)
- Showcase keahlian dan portofolio proyek
- Alternatif Linktree/Bento yang lebih sophisticated

Halaman ini mendukung **Dark Mode** (default) dan **Light Mode** dengan toggle yang menyimpan preferensi pengguna di `localStorage`.

**Live Demo:** [nemospiritgeek.my.id](https://nemospiritgeek.my.id/)

---

## Tentang Kreator

<table>
<tr>
<td width="50%">

**L. Moh. Banu Pebrianto**
*(Kapten Nemo | @nemospiritgeek)*

**Tech Blogger & Digital Creator**

Lulusan **B.Sc. Computer Science** dari STMIK Lombok Praya. Berpengalaman lebih dari **10 tahun** di bidang IT Security, Graphic Design, Digital Research, Networking, Hardware-Software, dan Machine Learning. Selain dunia teknologi, juga aktif dalam Spiritual Consultation, Divination, Ancient Reading, dan Metaphysics — menggabungkan disiplin teknologi dengan kesadaran untuk menciptakan solusi digital yang inovatif, etis, dan berdampak.

</td>
<td width="50%" align="center">

| Info | Detail |
|------|--------|
| Lokasi | Lombok, Indonesia |
| Website | nemospiritgeek.my.id |
| Pendidikan | B.Sc. Computer Science |
| Pengalaman | 10+ Tahun |
| Fokus Area | 7+ Disiplin |
| Status | Open for Collaboration |

</td>
</tr>
</table>

### Area Keahlian:

| # | Disiplin | Deskripsi |
|---|----------|-----------|
| 1 | IT Security & Networking | Mengamankan infrastruktur digital, manajemen jaringan, dan integritas sistem |
| 2 | AI & Machine Learning | Eksplorasi AI, prompting, dan penerapan data-driven insights |
| 3 | Graphic Design | Desain visual dengan Adobe Photoshop & AI untuk konten digital dan brand |
| 4 | Tech Researching | Riset mendalam tentang teknologi, sejarah, web, AI, dan digital lifestyle |
| 5 | Digital Marketing | Strategi konten marketing dan manajemen kehadiran digital |
| 6 | Multi Maintenance | Diagnostik, update, optimasi, dan maintenance hardware/software |

---

## Fitur Utama

### Desain & UI/UX

- **Dark Glassmorphism** — Efek *frosted glass* (kaca buram) dengan `backdrop-filter: blur()` di atas latar belakang hitam pekat
- **Aksen Merah Minimalis** — Palet warna merah (`#dc2626`, `#ef4444`) yang konsisten di seluruh elemen interaktif
- **Dual Theme** — Dark mode (default) & Light mode dengan transisi halus 0.4s dan persistensi `localStorage`
- **Ambient Glow** — Tiga elemen *blur glow* merah yang melayang di latar belakang untuk kedalaman visual
- **System Font Stack** — Menggunakan font bawaan sistem (-apple-system, SF Pro Display, Segoe UI, Roboto) untuk loading secepat mungkin

### Interaktivitas & Animasi

- **Scroll Reveal** — Setiap elemen muncul dengan animasi `fadeInUp` saat masuk viewport (IntersectionObserver, threshold 0.15)
- **Animated Skill Bars** — Bar keahlian terisi secara progresif (1.5s ease-out) saat section terlihat
- **Avatar Pulse Ring** — Efek *pulse ring* merah yang berdenyut di sekitar foto profil
- **Scroll Indicator** — Ikon panah *bounce* di hero section yang mengarah ke section About
- **Active Nav Tracking** — Link navigasi aktif disorot otomatis berdasarkan posisi scroll
- **Navbar Shadow on Scroll** — Navigasi mendapatkan *shadow* tambahan setelah scroll 50px
- **Scroll-to-Top Button** — Tombol melayang yang muncul setelah scroll 300px, dengan efek hover lift
- **Portfolio Hover Overlay** — Gambar portofolio zoom 1.08x dengan overlay gradient dan deskripsi
- **Partners Ticker** — Marquee horizontal infinite scroll untuk klien & mitra (22s linear), pause on hover

### Navigasi & Responsivitas

- **Mobile-First Design** — Layout satu kolom di mobile, multi-kolom di tablet/desktop
- **Floating Glass Navbar** — Navigasi *fixed* dengan efek glassmorphism, rounded-full
- **Hamburger Menu** — Menu mobile dengan animasi *max-height* transition, auto-close saat link diklik
- **Smooth Scroll** — `scroll-behavior: smooth` untuk navigasi yang halus antar section
- **Custom Scrollbar** — Scrollbar tipis 6px dengan thumb merah yang cocok dengan tema

### SEO & Meta

- **Open Graph** — Meta tags `og:image` untuk preview saat dibagikan di media sosial
- **Twitter Card** — `summary_large_image` untuk preview di Twitter/X
- **Meta Description** — Deskripsi untuk mesin pencari
- **Favicon** — Icon dari blog nemospiritgeek

---

## Struktur Halaman

Halaman utama (`index.html`) terdiri dari **6 section** + footer:

```
navbar (fixed, glassmorphism)
│
├── Hero (#hero)
│   ├── Avatar dengan pulse ring animation
│   ├── Status badge "Available for Collaboration"
│   ├── Nama lengkap + alias
│   ├── Tagline "Digital Creator & IT Support"
│   ├── Intro text
│   ├── CTA: View CV (red) & Bio Link (glass)
│   └── Scroll indicator (bounce arrow)
│
├── About (#about)
│   ├── Foto workspace dalam glass frame
│   ├── Bio narrative
│   ├── Info grid (Location, Website, Education, Experience)
│   ├── Focus pills (6 keahlian)
│   └── Stats grid (Autodidactic, Years, Focus Areas, Curiosity)
│
├── Services (#services)
│   └── 6 service cards (3 kolom di desktop)
│       ├── IT Security & Networking
│       ├── AI & Machine Learning
│       ├── Graphic Design
│       ├── Tech Researching
│       ├── Digital Marketing
│       └── Multi Maintenance
│
├── Skills (#skills)
│   ├── 8 animated skill bars (2 kolom)
│   │   Photoshop 92% · IT Security 88% · AI/ML 85%
│   │   Software Engineer 70% · Digital Marketing 82%
│   │   Photography 75% · Hardware/Software 87% · Digital Research 89%
│   └── 9 skill pills (HTML5, CSS3, Python, Linux, AI Prompting,
│       Content Strategy, Metaphysics, Divination, Spirituality)
│
├── Portfolio (#portfolio)
│   └── 4 project cards (2 kolom)
│       ├── Matrix World — Personal Page
│       ├── Destiny Matrix — Tech & Consciousness
│       ├── MTgenX — Security & Infrastructure
│       └── CyberNET Template — High-tech Customization
│
├── Contact (#contact)
│   ├── 3 contact cards (Email, LinkedIn, GitHub)
│   └── CTA: View CV (red) & Bio Link (glass)
│
└── Footer
    ├── Clients & Partners ticker (infinite scroll)
    └── Copyright
```

---

## Link Redirect Pages

Direktori `link/` berisi **4 halaman redirect** dengan desain Dark Glassmorphism yang konsisten. Setiap halaman menampilkan *spinner* loading, pesan "Sedang Mengalihkan...", dan tombol "LANJUTKAN" sebagai fallback manual. Redirect otomatis terjadi setelah **5 detik** via `meta http-equiv="refresh"`.

| File | Tujuan Redirect | Deskripsi |
|------|----------------|-----------|
| `link/cbwar.html` | [github.com/8XPLOIT/CyberNET](https://github.com/8XPLOIT/CyberNET) | CyberNET Template repository |
| `link/join.html` | [bolt.cello.so/2dExBq7nNdm](https://bolt.cello.so/2dExBq7nNdm) | Collaboration invite link |
| `link/mdest.html` | [8xploit.github.io/MatrixDestiny](https://8xploit.github.io/MatrixDestiny/) | Destiny Matrix web app |
| `link/mtgen.html` | [8xploit.github.io/MTgenX](https://8xploit.github.io/MTgenX/) | MikroTik Generator External |

Setiap halaman redirect memiliki:
- Background hitam pekat (`#09090b`) dengan dua *glow* merah ambient
- Kartu *frosted glass* dengan `backdrop-filter: blur(16px)`
- *Spinner* animasi `spin 1s` infinite
- Tombol aksen merah (`#dc2626`) dengan hover effect `translateY(-2px)`
- Auto-redirect 5 detik + tombol manual "LANJUTKAN"

---

## Teknologi yang Digunakan

| Teknologi | Peran | Detail |
|-----------|-------|--------|
| **HTML5** | Struktur | Semantic markup, meta tags SEO/OG/Twitter |
| **CSS3** | Styling | Animasi keyframes, backdrop-filter, custom scrollbar |
| **Tailwind CSS** | Framework | Utility-first via CDN, dark mode `class` strategy |
| **Vanilla JavaScript** | Interaktivitas | IntersectionObserver, localStorage, scroll tracking |
| **Vite** | Build Tool | Dev server & production build (`vite build` → `dist/`) |
| **Google Blogger CDN** | Image Hosting | Foto profil, workspace, portfolio thumbnails |
| **SVG Icons** | Iconography | Inline SVG (lucide-style) untuk semua ikon |

Tidak ada dependency NPM selain Vite — semua styling dan interaktivitas berjalan *client-side* murni.

---

## Struktur Proyek

```
kapten-nemo-personal-hub/
│
├── index.html              # Halaman utama portofolio
├── package.json            # Konfigurasi NPM & scripts
├── vite.config.js          # Konfigurasi Vite
├── CNAME                   # Custom domain (nemospiritgeek.my.id)
├── .gitignore              # Git ignore rules
│
├── link/                   # Halaman redirect (glassmorphism)
│   ├── cbwar.html          # → GitHub CyberNET
│   ├── join.html           # → Bolt collaboration link
│   ├── mdest.html          # → Matrix Destiny web app
│   └── mtgen.html          # → MTgenX MikroTik tool
│
└── dist/                   # Output build Vite
    └── index.html          # Compiled production build
```

---

## Pengembangan Lokal

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Build untuk production
npm run build

# Preview hasil build
npm run preview
```

Dev server Vite berjalan secara otomatis — tidak perlu konfigurasi tambahan.

---

## Build & Deploy

- **Build command:** `npm run build` (output ke direktori `dist/`)
- **Custom domain:** `nemospiritgeek.my.id` (via file `CNAME`)
- **Deploy:** Static hosting (GitHub Pages, Netlify, Vercel, atau platform statis lainnya)

---

## Portofolio Proyek

| # | Proyek | Kategori | Link |
|---|--------|----------|------|
| 1 | **Matrix World** | Personal Page — Tech & Human Resource Digital Hub | [nemospiritgeek.my.id](https://nemospiritgeek.my.id) |
| 2 | **Destiny Matrix** | Tech & Consciousness — Machine Learning & Metaphysics | [8xploit.github.io/MatrixDestiny](https://8xploit.github.io/MatrixDestiny/) |
| 3 | **MTgenX** | Security & Infrastructure — MikroTik Generator (RouterOS v6, 100% client-side) | [8xploit.github.io/MTgenX](https://8xploit.github.io/MTgenX/) |
| 4 | **CyberNET Template** | High-tech Customization — Networking & Professional Interface | [github.com/8XPLOIT/CyberNET](https://github.com/8XPLOIT/CyberNET) |

**Browse all projects:** [github.com/8XPLOIT?tab=repositories](https://github.com/8XPLOIT?tab=repositories)

### Klien & Mitra

- [Kia Maheswari](http://www.kiamaheswari.blogspot.com/)
- [Mataram IT Eternal](http://www.toko-online-mataram.blogspot.com)
- [Averantz Avengers](https://averantz.blogspot.com/)

---

## Kontak & Kolaborasi

Tertarik untuk berdiskusi soal teknologi, kerja sama *review*, atau proyek pengembangan web? Jangan ragu untuk terhubung!

| Platform | Link |
|----------|------|
| Website | [nemospiritgeek.my.id](https://nemospiritgeek.my.id/) |
| Email | [nemospiritgeek@proton.me](mailto:nemospiritgeek@proton.me) |
| LinkedIn | [linkedin.com/in/nemospiritgeek](https://www.linkedin.com/in/nemospiritgeek) |
| GitHub | [github.com/8XPLOIT](https://github.com/8XPLOIT/) |
| Bio Link | [nemospiritgeek.taplink.id](https://nemospiritgeek.taplink.id/) |
| CV | [mataram.my.canva.site/procv-kapten-nemo](https://mataram.my.canva.site/procv-kapten-nemo) |

---

## Lisensi

MIT License — Copyright &copy; 2026 Kapten Nemo · Powered by 8XPLOIT

---

<div align="center">

*Dibuat dengan komputer dan kopi oleh Kapten Nemo.*

**Bridging Technology & Consciousness**

</div>
