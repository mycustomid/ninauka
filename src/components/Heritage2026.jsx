import React from 'react';
import { ArrowUpRight, ArrowRight, ArrowDown, MoveUpRight, Sparkles } from 'lucide-react';
import { EDITION_2026 } from '../data/edition2026';
import { BRAND } from '../data/ninaukaData';
import './Heritage2026.css';

const wa = subject => `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(`Halo Ninauka, saya melihat ${subject} di website. Boleh saya meminta informasi produk dan ketersediaannya?`)}`;
const Image = ({src,alt,loading='lazy'}) => <img src={src} alt={alt} loading={loading} decoding="async" />;

export function BrandOrigins({go,short=false}) {
 return <section className={'v4-origins '+(short?'v4-origins-short':'')} aria-label="Cerita awal Ninauka">
   <div className="v4-origins-picture"><Image src="/images/story/atelier-bsd-city.jpg" alt="Foto dari dokumentasi Ninauka"/><span>01 / BERAWAL DARI KARYA TANGAN</span></div>
   <div className="v4-origins-copy"><span className="v4-kicker">DARI SEBUAH HOBI / MENUJU RUMAH KRIYA</span><h2>Dimulai dari<br/><em>kegemaran mencipta.</em></h2>
   <p>Perjalanan Ninauka berawal dari kegemaran membuat karya seni yang diberikan kepada teman sebagai hadiah dan suvenir—termasuk untuk lamaran, pernikahan, hingga tamu dari luar negeri. Seiring waktu, perhatian terhadap karya-karya tersebut tumbuh menjadi permintaan dan pesanan.</p>
   {!short&&<p>Kisah itu menjadi inti Ninauka hari ini: mengolah pandan, lontar, rotan, mendong, agel, batik, tempurung kelapa, manik-manik, wastra, dan kulit menjadi benda yang menarik sekaligus punya kegunaan.</p>}
   <button className="v4-text-action" onClick={()=>go('/maison')}>Baca kisah Ninauka <ArrowUpRight size={18}/></button>
   <small>SUMBER: COMPANY PROFILE NINAUKA, HALAMAN 2</small></div>
 </section>;
}

export function VisionMission() {
 return <section className="v4-vision" aria-label="Visi dan misi Ninauka">
   <div className="v4-vision-heading"><span>02 / ARAH KAMI</span><h2>Indah untuk dipakai.<br/><em>Baik untuk dikembangkan.</em></h2><p>Ninauka ingin mempertemukan kualitas karya, kreativitas, dan kesempatan bagi orang-orang yang terlibat dalam proses pembuatannya.</p></div>
   <div className="v4-vision-grid"><article><span>01 — VISI</span><h3>Berkreasi<br/><em>dengan tanggung jawab.</em></h3><p>Menjadi usaha yang menghasilkan beragam kreasi unik dan ramah lingkungan, dikenal di Indonesia serta dunia internasional, dan mampu bersaing melalui inovasi.</p></article><article><span>02 — MISI</span><h3>Kualitas karya.<br/><em>Pengembangan manusia.</em></h3><p>Menyediakan produk bermutu dengan ragam kreasi untuk menjaga kepuasan pelanggan, sekaligus meningkatkan kemampuan sumber daya manusia—khususnya ibu rumah tangga.</p></article></div>
   <div className="v4-vision-foot">Ringkasan berbahasa Indonesia dari Visi & Misi pada company profile, halaman 3. Tidak menyatakan jumlah penerima manfaat atau program dampak yang belum terdokumentasi.</div>
 </section>;
}

export function MaterialPanorama({go}) {
 const parts=[
  {title:'Tenun Baduy',label:'KANEKES / BANTEN',image:'/images/story/baduy-gedogan-loom.jpg',text:'Tenun yang dikerjakan melalui teknik gedogan. Sumber katalog menyebut pemakaian pewarna alami maupun sintetis.',href:'/journal/tenun-gedogan-baduy'},
  {title:'Ulap Doyo',label:'KALIMANTAN TIMUR',image:'/images/story/doyo-leaf-fiber-harvest.jpg',text:'Serat tumbuhan doyo, teknik penyeratan, dan pengetahuan pewarnaan alam yang terpelihara.',href:'/journal/ulap-doyo-dari-kalimantan'},
  {title:'Goni',label:'SERAT ALAM / NUSANTARA',image:'/images/story/eco-goni-raw.jpg',text:'Bahan bertekstur yang digunakan untuk tote dan clutch bersama detail kulit dan tenun.',href:'/collections'},
  {title:'Kulit & Konstruksi',label:'KOLEKSI AKSESORI',image:'/images/products/minaudiere-ma03-detail.jpg',text:'Siluet kulit hadir sebagai satu cabang di antara ragam kriya dan material Ninauka.',href:'/collections'}
 ];
 return <section className="v4-panorama" aria-label="Jelajah material Nusantara"><div className="v4-section-head"><span>EMPAT BAHASA MATERIAL</span><h2>Bukan satu bahan.<br/><em>Banyak kemungkinan.</em></h2><p>Ninauka merangkai tradisi, tekstur, dan kegunaan melalui berbagai bahan asal Indonesia.</p></div><div className="v4-panorama-grid">{parts.map((p,i)=><button className="v4-material" type="button" key={p.title} onClick={()=>go(p.href)}><div className="v4-material-image"><Image src={p.image} alt={p.title}/><span>{String(i+1).padStart(2,'0')}</span></div><div><small>{p.label}</small><h3>{p.title} <ArrowUpRight size={20}/></h3><p>{p.text}</p></div></button>)}</div></section>;
}

export function EditionPreview({go}) {
 return <section className="v4-edition-preview" aria-label="Koleksi pilihan tahun 2026"><div className="v4-edition-heading"><span>NEW PRODUCTS & BEST SELLER / 2026</span><h2>Yang baru.<br/><em>Yang paling dicari.</em></h2><p>Dipilih dari halaman 4–5 profil dan katalog terbaru Ninauka. Foto merupakan dokumentasi brand, bukan listing produk dengan stok atau harga otomatis.</p><button className="v4-light-link" onClick={()=>go('/edisi-2026')}>Masuk ke Edisi 2026 <ArrowUpRight size={19}/></button></div><button type="button" onClick={()=>go('/edisi-2026')} className="v4-edition-preview-image" aria-label="Jelajahi Edisi 2026"><Image src="/images/editorial-2026/new-products-montage.webp" alt="Kolase produk baru Ninauka 2026"/><span>ARSIP / 2026 <ArrowUpRight size={20}/></span></button></section>;
}

export function Edition2026({go}) {
 return <div className="v4-edition-page"><header className="v4-edition-hero"><div className="v4-edition-hero-copy"><span className="v4-kicker">ARSIP KOLEKSI / 2026</span><h1>Yang baru.<br/><em>Yang menjadi pilihan.</em></h1><p>Menelusuri New Products dan Best Seller 2026 sebagaimana ditampilkan pada company profile Ninauka. Halaman ini mengutamakan dokumentasi visual; rincian dan ketersediaan setiap item dikonfirmasi langsung dengan atelier.</p><a href={wa('koleksi 2026')} target="_blank" rel="noopener noreferrer">Tanya koleksi 2026 <ArrowUpRight size={19}/></a></div><div className="v4-edition-hero-photo"><Image src="/images/editorial-2026/bestseller-striped-bag.webp" alt="Salah satu produk pilihan 2026" loading="eager"/></div></header>
 <section className="v4-edition-gallery v4-new-arrivals"><div className="v4-section-head"><span>01 / PRODUK BARU</span><h2>Bentuk-bentuk<br/><em>yang berkembang.</em></h2><p>Produk baru yang tercantum dalam company profile halaman 4. Nama model dan kode yang tidak tercantum tidak diada-adakan.</p></div><div className="v4-new-grid">{EDITION_2026.newProducts.map((e,i)=><article key={e.image}><div><Image src={e.image} alt={e.title}/></div><span>PRODUK BARU / {String(i+1).padStart(2,'0')}</span><h3>{e.title}</h3><p>{e.note}</p><a href={wa('produk baru Ninauka yang terlihat pada halaman 4 katalog')} target="_blank" rel="noopener noreferrer">Tanya koleksi <ArrowUpRight size={16}/></a></article>)}</div></section>
 <section className="v4-edition-gallery v4-best"><div className="v4-section-head"><span>02 / BEST SELLER 2026</span><h2>Karya yang<br/><em>menarik perhatian.</em></h2><p>Berikut foto produk yang dikelompokkan sebagai Best Seller 2026 oleh Ninauka pada halaman 5 profil. Tidak ada klaim jumlah penjualan atau posisi peringkat.</p></div><div className="v4-bestseller-grid">{EDITION_2026.bestSellers.map((e,i)=><article key={e.image} className={i===0||i===5?'v4-bestseller-highlight':''}><div><Image src={e.image} alt={e.title}/></div><small>ARSIP NINAUKA / {String(i+1).padStart(2,'0')}</small><h3>{e.title}</h3></article>)}</div><div className="v4-edition-end"><p>Ingin mengetahui nama model, dimensi, varian, harga, atau ketersediaan? Tunjukkan foto pilihan kepada atelier melalui WhatsApp.</p><a href={wa('Best Seller Ninauka 2026')} target="_blank" rel="noopener noreferrer">Konsultasi pilihan 2026 <ArrowUpRight size={18}/></a><button onClick={()=>go('/collections')} type="button">Lihat katalog berkode <ArrowRight size={18}/></button></div></section>
 </div>;
}

export function PackagingReality({go}) {
 return <section className="v4-packaging"><div className="v4-packaging-image"><Image src="/images/story/exclusive-luxury-packaging.jpg" alt="Foto kemasan Ninauka dalam company profile halaman 13"/></div><div className="v4-packaging-copy"><span className="v4-kicker">KEMASAN NINAUKA / ARSIP RESMI</span><h2>Detail akhir,<br/><em>identitas yang utuh.</em></h2><p>Company profile memperlihatkan ragam kotak kemasan dengan identitas Ninauka dalam warna biru, hijau, dan hitam. Pilihan pembungkus, isi paket, serta detail personalisasi bergantung pada pesanan dan perlu dikonfirmasi kepada atelier.</p><button type="button" className="v4-text-action" onClick={()=>go('/contact')}>Tanyakan kemasan & hadiah <ArrowUpRight size={18}/></button><small>SUMBER: COMPANY PROFILE, HALAMAN 13</small></div></section>;
}
