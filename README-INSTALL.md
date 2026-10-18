# NINAUKA — V3 Atelier & Connected Channels Patch

**Repo:** https://github.com/mycustomid/ninauka  
**Baseline GitHub main:** `1ded76428188555cb8d03b2d8a83ccfbab2832d7` (18 Oktober 2026).  
**Jenis distribusi:** overlay / patch, bukan source code repo lengkap. Tidak menimpa gambar maupun logo brand.

## Instalasi (folder `ninauka`)

1. Buat backup atau Git branch sebelum mengubah file.
2. Ekstrak **isi ZIP ini** ke root repository `ninauka/`. Izinkan overwrite pada empat file kode berikut:
   - `src/App.jsx`
   - `src/components/EditorialEnhancements.jsx` (baru)
   - `src/components/EditorialEnhancements.css` (baru)
   - `src/data/brandChannels.js` (baru)
3. **Jangan hapus folder `public/`**. Patch menggunakan gambar produk, cerita material, dan logo yang sudah berada di repo.
4. Dari root repo: `npm ci` lalu `npm run build`.
5. Jalankan `npm run dev` untuk memeriksa tampilan pada desktop/mobile dan klik seluruh link.
6. Deploy seperti biasa (rewrites SPA Vercel `vercel.json` pada repo sekarang tetap digunakan).

## Fitur dan cakupan

- Floating WhatsApp **global** (nomor `+62 813-1400-7827`) di semua rute: konsultasi koleksi & ketersediaan, bespoke/corporate gifting, serta material/pengiriman. Di halaman detail produk pesan WhatsApp otomatis menyebut judul dan kode produk.
- **Koleksi:** editorial material selector, filter yang scroll ke grid, tipografi/komposisi yang diperkuat.
- **15 halaman detail produk:** tambahan galeri/object dossier, kisah material dan panduan perawatan umum, CTA konsultasi dan pengantar dokumen kulit bila relevan.
- **Maison:** interlude fotografi, tiga pendekatan identitas brand, navigasi silang ke proses kriya.
- **Savoir-faire:** visual material index dengan anchor ke bab aktual (Doyo, Baduy, leathercraft).
- **Jurnal dan 5 halaman artikel:** editorial reading intro dan reading-progress bar pada artikel.
- **Bespoke:** tiga konteks kurasi hadiah dan produk; tidak menjanjikan inventaris/kustomisasi yang belum disepakati.
- **Kontak:** direktori visual 6 kanal dengan tautan dan keterangan tingkat verifikasi. Tautan sosial juga tampil pada footer setiap halaman.
- Perbaikan: `og:image` fallback kini mengarah ke foto hero yang benar-benar tersedia di repo.
- Perbaikan kompatibilitas: mengatasi JSX syntax error pada tombol hamburger di baseline commit terbaru (penutup `{...}` hilang).

## Audit social links dan kanal digital

| Kanal | Tautan yang dipakai | Status |
|---|---|---|
| Instagram | `https://www.instagram.com/ninauka_n2k/` | Handle tercantum dalam katalog BRILiaNpreneur 2025; tautan profil disusun dari handle tersebut. |
| Facebook | `https://www.facebook.com/search/pages/?q=Ninauka%20Unik%20Kreasi` | **Pencarian**, BUKAN permalink profil. Katalog mencantumkan nama halaman “Ninauka Unik Kreasi”, tetapi URL langsung belum diverifikasi. |
| Shopee | `https://shopee.co.id/Ninauka-Imut-Bag-i.140193665.29674690557` | Listing produk Ninauka yang ditemukan online; BUKAN jaminan produk atau seluruh toko masih tersedia. Katalog 2025 menyebut `ninauka_bag`. |
| Tokopedia | `https://www.tokopedia.com/search?st=shop&q=ninauka` | **Pencarian**, BUKAN URL toko terverifikasi. Nama `ninauka` tercantum dalam katalog. |
| Google Maps | Google Maps Search API dengan alamat Nusaloka sektor XIV-4 Blok J9/8, Jl. Jawa V, BSD City, Tangerang Selatan | **Pencarian alamat**, bukan klaim pin tempat resmi telah terverifikasi. |
| Brand Directory | Katalog BRILiaNpreneur 2025 (PDF) | Rujukan publik untuk identitas brand & akun. |

**Media sosial lain:** Tidak ada bukti yang cukup untuk akun resmi TikTok, YouTube, atau LinkedIn Ninauka; sengaja tidak dibuat tautan fiktif. Catatan arsip PLN sekitar 2022 menyebut Instagram `@ninaukaunikreasi`, tetapi tidak ditampilkan sebagai akun aktif karena katalog lebih baru menunjukkan `@ninauka_n2k`.

Rujukan audit:
- [BRILiaNpreneur 2025 — Accessories & Beauty, entri NINAUKA](https://storage.googleapis.com/brilianpreneur2023-storage/bp25-prod-assets/catalogue/BP25_CATALOGUE_ACCESSORIES%20BEAUTY_270125.pdf#page=116)
- [PLN UID Banten — BEWARA, halaman 7](https://fliphtml5.com/lgrez/zgeu/BEWARA_EDISI_APRIL/7/)
- [Produk Ninauka di Shopee](https://shopee.co.id/Ninauka-Imut-Bag-i.140193665.29674690557)

## Verifikasi patch ini

- JSX (dua berkas): **0 sintaks error** setelah memperbaiki kesalahan pada commit baseline.
- CSS: **0 parser error** (tinycss2).
- Simulasi render React ke HTML: **31 rute lulus**, termasuk seluruh 15 detail produk, seluruh 5 artikel, legal, contact dan fallback 404.
- Footer social links dan enam tautan direktori diperiksa keberadaannya pada render HTML.
- **Belum menjalankan `npm run build` production** karena paket dependensi Vite/React tidak tersedia di lingkungan pengujian terisolasi. Jalankan sendiri setelah menerapkan patch. Tes render tidak menyamai tes build atau tes end-to-end di browser nyata.

> Ini adalah desain **Awwwards-inspired**, bukan klaim lolos penjurian Awwwards. URL eksternal dapat berubah, jadi cek ulang sebelum publikasi. Claim CITES/kemampuan ekspor setiap produk tetap perlu dokumen transaksi nyata dan verifikasi pemilik usaha.
