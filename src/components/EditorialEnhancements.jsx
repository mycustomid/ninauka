import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowDown, X, MessageCircle, Phone, ShoppingBag, Gift, BookOpen, Leaf, MapPin, Store, ExternalLink } from 'lucide-react';
import { BRAND, PRODUCTS } from '../data/ninaukaData';
import { CHANNELS } from '../data/brandChannels';
import './EditorialEnhancements.css';

function Instagram({ size = 26, strokeWidth = 1.3, className = '' }) {
  return (
    <svg width={size} height={size} className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function Facebook({ size = 26, strokeWidth = 1.3, className = '' }) {
  return (
    <svg width={size} height={size} className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const image = (src, alt, extra = '') => <img src={src} alt={alt} loading="lazy" decoding="async" className={extra} />;
const message = subject => `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent('Halo Ninauka Atelier, saya ingin berkonsultasi mengenai '+subject+'. Mohon informasi lebih lanjut.')}`;

/** Discreet site-wide concierge. All URLs lead directly to the verified number in brand data. */
export function FloatingWhatsApp({ path = '/' }) {
  const [open, setOpen] = useState(false);
  const wrapper = useRef(null);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    if (!open) return;
    const closeOnOutside = (e) => { if (wrapper.current && !wrapper.current.contains(e.target)) setOpen(false); };
    const closeOnEscape = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('pointerdown', closeOnOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => { document.removeEventListener('pointerdown', closeOnOutside); document.removeEventListener('keydown', closeOnEscape); };
  }, [open]);
  const item = path.startsWith('/pieces/') ? PRODUCTS.find(p => p.id === path.split('/')[2]) : null;
  const contextual = item ? `produk ${item.title} (${item.code})` : path.startsWith('/journal/') ? 'artikel dan cerita material Ninauka' : 'koleksi Ninauka';
  const choices = [
    {icon:ShoppingBag,label:'Koleksi & ketersediaan',hint:'Tanya detail karya & stok',subject:contextual},
    {icon:Gift,label:'Pesanan khusus & hadiah VIP',hint:'Kustomisasi personal / korporat',subject:'pesanan khusus atau bingkisan korporat VIP'},
    {icon:Leaf,label:'Material & pengiriman',hint:'Komposisi, dokumen CITES, tujuan',subject:'material, dokumen dan opsi pengiriman'},
  ];
  return <aside className={'n-wa '+(open?'n-wa-open':'')} ref={wrapper} aria-label="Konsultasi WhatsApp Ninauka">
    {open && <div id="ninauka-wa-panel" className="n-wa-panel" role="region" aria-label="Pilihan konsultasi WhatsApp">
      <div className="n-wa-top"><div><span className="n-wa-kicker">NINAUKA / CONCIERGE PRIVAT</span><strong>Percakapan bermula<br/><em>di sini.</em></strong></div><button type="button" onClick={()=>setOpen(false)} className="n-wa-close" aria-label="Tutup pilihan WhatsApp"><X size={20}/></button></div>
      <p>Pilih topik konsultasi, lalu terhubung langsung ke WhatsApp resmi Atelier Ninauka tanpa perantara bot otomatis.</p>
      <div className="n-wa-options">{choices.map(c => <a href={message(c.subject)} key={c.label} target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)}><c.icon size={20} strokeWidth={1.5}/><span><b>{c.label}</b><small>{c.hint}</small></span><ArrowUpRight size={16}/></a>)}</div>
      <span className="n-wa-caption">WHATSAPP · {BRAND.phone}</span>
    </div>}
    <button type="button" className="n-wa-trigger" aria-expanded={open} aria-controls={open?'ninauka-wa-panel':undefined} aria-label={open?'Tutup pilihan konsultasi WhatsApp':'Buka konsultasi WhatsApp'} onClick={()=>setOpen(s=>!s)}>
      <span className="n-wa-symbol"><MessageCircle size={24} strokeWidth={1.8}/><span className="n-wa-phone"><Phone size={13} strokeWidth={2}/></span></span><span className="n-wa-trigger-label"><b>WhatsApp</b><small>CONCIERGE PRIVAT</small></span><span className="n-wa-trigger-arrow">{open?<X size={19}/>:<ArrowUpRight size={19}/>}</span>
    </button>
  </aside>;
}

export function CollectionMaterials({ select }) {
 const entries = [
  {number:'01',title:'Kulit Eksotis',local:'KURASI KULIT PITON',image:'/images/products/kelly-ke01-front.jpg',detail:'Siluet tegas, simetri sisik berkarakter, dan penyelesaian tepi yang teliti.',id:'python'},
  {number:'02',title:'Tenun Baduy',local:'KURASI TENUN GEDOGAN',image:'/images/products/baduy-heritage-tote.jpg',detail:'Ritme benang kapas pintal yang lahir dari tradisi menenun tangan di Kanekes.',id:'baduy'},
  {number:'03',title:'Ulap Doyo',local:'KURASI SERAT ALAM',image:'/images/products/doyo-envelope-front.jpg',detail:'Serat daun Doyo liar dan pewarna nabati hutan dari Kalimantan Timur.',id:'doyo'},
 ];
 return <section className="n-collection-guide"><div className="n-guide-head"><span>EKSPLORASI MATERIAL / 01—03</span><p>Tiga karakter.<br/><em>Satu rumah kriya.</em></p></div><div className="n-material-cards">{entries.map(x=><button type="button" key={x.id} className="n-material-card" onClick={()=>select(x.id)} aria-label={'Lihat koleksi '+x.title}><div className="n-material-photo">{image(x.image,'Ninauka — '+x.title)}<span>{x.number} / MATERIAL</span></div><div className="n-material-caption"><span>{x.local}</span><h3>{x.title}</h3><p>{x.detail}</p><ArrowUpRight size={21}/></div></button>)}</div></section>;
}

export function ProductDossier({ product, go }) {
 const isPython = product.category==='python' || product.materials.toLowerCase().includes('piton');
 const cover = (product.gallery||[]).length>1 ? product.gallery[1] : product.image;
 const textile = product.category==='baduy' ? '/images/story/baduy-textile-detail.jpg' : product.category==='doyo' ? '/images/story/doyo-natural-dyeing.jpg' : product.category==='goni' ? '/images/story/eco-goni-raw.jpg' : '/images/story/atelier-craftsman.jpg';
 return <section className="n-object-dossier" aria-label="Dossier karya dan perawatan"><div className="n-object-heading wrap"><div><span>STUDI KARYA / {product.code}</span><h2>Menilik lebih dekat<br/><em>setiap detail.</em></h2></div><p>Sebuah mahakarya yang diciptakan untuk diamati dari dekat: keunikan tekstur alami, ketepatan proporsi, dan detail kriya tangan yang terjaga.</p></div>
 <div className="n-object-mosaic"><figure className="n-object-primary">{image(cover,`${product.title} — detail karya`)}<figcaption>01 / SILUET KARYA</figcaption></figure><figure className="n-object-secondary">{image(textile,'Material dan teknik dari arsip Ninauka')}<figcaption>02 / KISAH MATERIAL</figcaption></figure><div className="n-object-note"><span>CATATAN ATELIER</span><h3>Merawat karya<br/><em>yang Anda bawa.</em></h3><p>Simpan di ruang yang sejuk dan kering menggunakan kantung pelindung, jauh dari paparan matahari langsung, kelembapan berlebih, serta tekanan yang dapat mengubah struktur. Untuk pembersihan permukaan kulit eksotis maupun tenun, konsultasikan terlebih dahulu dengan atelier.</p><div className="n-object-links"><a href={message(product.title+' ('+product.code+')')} target="_blank" rel="noopener noreferrer">Konsultasi produk <ArrowUpRight size={17}/></a>{isPython&&<button type="button" onClick={()=>go('/journal/cites-dan-dokumen-kulit-eksotis')}>Catatan dokumen kulit <ArrowUpRight size={17}/></button>}</div></div></div>
 <div className="n-object-under wrap"><span>KARYA TERKURASI / ATELIER NINAUKA</span><span>Detail spesifikasi dan ketersediaan dikonfirmasi langsung saat konsultasi.</span></div></section>;
}

export function MaisonInterlude({ go }) {
 return <section className="n-maison-interlude" aria-label="Cerita rumah kriya Ninauka"><div className="n-maison-interlude-photo">{image('/images/story/atelier-bsd-city.jpg','Ruang dan lingkungan atelier Ninauka')}<span>ATELIER NUSALOKA / TANGERANG SELATAN</span></div><div className="n-maison-interlude-copy"><span>SEBUAH RUANG, SEBUAH PANDANGAN</span><h2>Berakar di sini.<br/><em>Melangkah jauh.</em></h2><p>Dari Nusaloka, BSD City, Tangerang Selatan, karya Ninauka membuka percakapan antara warisan material Nusantara dan penikmat mode di berbagai penjuru. Sebuah rumah kriya yang memandang asal-usul bahan sebagai jiwa dari setiap karya.</p><div className="n-maison-notes"><div><b>01</b><span>Asal Material</span><small>Menghargai kemurnian serat alam dan teknik tenun tradisional.</small></div><div><b>02</b><span>Proporsi</span><small>Memberi ruang seimbang bagi fungsi, struktur, dan keanggunan.</small></div><div><b>03</b><span>Keberlanjutan</span><small>Menghubungkan cerita perajin Nusantara dengan keseharian modern.</small></div></div><button type="button" onClick={()=>go('/savoir-faire')}>Telusuri kisah material kami <ArrowUpRight size={19}/></button></div></section>;
}

export function CraftIndex() {
 const items = [
 {num:'I',name:'Ulap Doyo',region:'KALIMANTAN TIMUR',src:'/images/story/doyo-leaf-fiber-harvest.jpg',anchor:'material-doyo'},
 {num:'II',name:'Tenun Gedogan',region:'KANEKES · BANTEN',src:'/images/story/baduy-gedogan-loom.jpg',anchor:'material-baduy'},
 {num:'III',name:'Kriya Kulit',region:'DISIPLIN ATELIER',src:'/images/story/atelier-craftsman.jpg',anchor:'material-python'},
 ];
 return <section className="n-craft-index wrap"><div className="n-craft-index-top"><span>INDEKS MATERIAL</span><p>Menelusuri benang<br/><em>hingga ke hulunya.</em></p></div><div className="n-craft-index-items">{items.map(x=><a href={'#'+x.anchor} key={x.num} className="n-craft-index-card"><span>{x.num} — {x.region}</span>{image(x.src,x.name)}<h3>{x.name} <ArrowDown size={22}/></h3></a>)}</div></section>;
}

export function JournalInterlude({ go }) {
 return <section className="n-journal-interlude" aria-label="Panduan membaca jurnal"><div className="n-journal-photo">{image('/images/story/baduy-textile-detail.jpg','Detail tekstil Baduy dalam koleksi Ninauka')}<span>SELEMBAR WASTRA ADALAH ARSIP</span></div><div className="n-journal-copy"><span>PENGANTAR REDAKSI / EDISI 01</span><h2>Lebih dari sekadar<br/><em>objek yang indah.</em></h2><p>Apa yang tak terlihat dalam foto produk sering kali menjadi bagian paling berharga: asal serat, ketekunan tangan penenun, dan konteks budaya yang menyertainya.</p><p>Jurnal ini dihadirkan bukan sebagai etalase tambahan, melainkan ruang hening untuk membaca karya dengan lebih dekat.</p><div className="n-journal-links"><button type="button" onClick={()=>go('/journal/tenun-gedogan-baduy')}>Mulai dari kisah tenun Baduy <ArrowUpRight size={18}/></button><button type="button" onClick={()=>go('/journal/merawat-tas-kulit-eksotis')}>Pelajari panduan perawatan kulit <ArrowUpRight size={18}/></button></div></div></section>;
}

export function BespokeCurations() {
 const cards=[
  {n:'01',k:'PERSONAL',title:'Perhatian yang tulus.',image:'/images/products/minaudiere-ma03-hero.jpg',desc:'Satu mahakarya terpilih untuk sosok yang memiliki arti istimewa.',subject:'hadiah personal dari koleksi Ninauka'},
  {n:'02',k:'KORPORAT & VIP',title:'Kurasi penuh wibawa.',image:'/images/story/curated-exhibition.jpg',desc:'Kurasi karya dan kemasan eksklusif untuk apresiasi korporasi, BUMN, atau tamu kehormatan.',subject:'kurasi hadiah korporasi dan kebutuhan acara'},
  {n:'03',k:'PRESENTASI',title:'Sentuhan akhir yang utuh.',image:'/images/story/exclusive-luxury-packaging.jpg',desc:'Diskusikan opsi kotak presentasi, kartu cerita material, dan kemungkinan personalisasi monogram.',subject:'kemasan dan personalisasi hadiah Ninauka'},
 ];
 return <section className="n-bespoke-curations wrap"><div className="n-bespoke-heading"><span>KURASI UNTUK MOMEN ISTIMEWA</span><h2>Beragam momen.<br/><em>Persembahan bermakna.</em></h2></div><div className="n-bespoke-list">{cards.map(x=><article key={x.n} className="n-bespoke-card"><div className="n-bespoke-visual">{image(x.image,x.title)}</div><div className="n-bespoke-text"><span>{x.n} / {x.k}</span><h3>{x.title}</h3><p>{x.desc}</p><a href={message(x.subject)} target="_blank" rel="noopener noreferrer">Konsultasikan kebutuhan ini <ArrowUpRight size={18}/></a></div></article>)}</div></section>;
}

export function AtelierVisit() {
 return <section className="n-atelier-visit"><div className="n-atelier-visit-image">{image('/images/story/atelier-bsd-city.jpg','Dokumentasi Ninauka di BSD City')}</div><div className="n-atelier-visit-content"><span>BERBASIS DI BSD CITY / INDONESIA</span><h2>Kunjungi<br/><em>atelier kami.</em></h2><p>{BRAND.address}</p><p>Hubungi atelier terlebih dahulu untuk menjadwalkan sesi konsultasi privat atau kunjungan langsung di Nusaloka, BSD City.</p><a href={BRAND.googleMapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={17}/> Lihat di Google Maps <ArrowUpRight size={17}/></a></div></section>;
}

export function ArticleReadingProgress() {
 const [progress,setProgress]=useState(0);
 useEffect(()=>{const onScroll=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;setProgress(max>0?Math.min(100,Math.round(window.scrollY/max*100)):0)};onScroll();window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll);return()=>{window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll)}},[]);
 return <div className="n-reading-progress" role="progressbar" aria-label="Progres membaca halaman" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><span style={{width:progress+'%'}}/></div>;
}


/** Research-backed discovery links; search links are never presented as verified profiles. */
export function AtelierChannels() {
 const iconFor={instagram:Instagram,facebook:Facebook,shopee:ShoppingBag,tokopedia:Store,maps:MapPin,catalogue:BookOpen};
 return <section className="n-channels" aria-label="Jejak digital dan kanal Ninauka">
  <div className="n-channels-intro"><span>JEJAK DIGITAL &amp; KANAL RESMI / TERHUBUNG</span><div><h2>Temukan kami di mana<br/><em>cerita berlanjut.</em></h2><p>Jelajahi kanal media sosial, lokapasar, lokasi atelier di Nusaloka BSD City, serta direktori publik Ninauka. Tautan pencarian diberi penanda khusus apabila alamat profil langsung masih merujuk pada indeks pencarian.</p></div></div>
  <div className="n-channels-grid">{CHANNELS.map((c,i)=>{const Icon=iconFor[c.id]||ExternalLink;return <a href={c.url} key={c.id} className={'n-channel-card n-channel-'+c.id} target="_blank" rel="noopener noreferrer" aria-label={c.label}>
   <div className="n-channel-card-top"><span>{String(i+1).padStart(2,'0')} / {c.mode==='direct'?'MEDIA SOSIAL':c.mode==='search'?'PENCARIAN':c.mode==='listing'?'MARKETPLACE':'DIREKTORI PUBLIK'}</span><ArrowUpRight size={19}/></div>
   <div className="n-channel-symbol"><Icon size={26} strokeWidth={1.3}/></div>
   <div className="n-channel-card-bottom"><h3>{c.name}</h3><strong>{c.handle}</strong><p>{c.description}</p><span className="n-channel-cta">{c.label}<ArrowUpRight size={14}/></span></div>
  </a>})}</div>
  <p className="n-channels-disclaimer">CATATAN INFORMASI — Akun Instagram (@ninauka_n2k) dan identitas kanal tercantum dalam katalog publik BRILiaNpreneur 2025. Untuk Facebook dan Tokopedia, tautan di atas mengarah ke pencarian nama brand sesuai katalog resmi. Konsultasi utama dan pemesanan tetap dilayani secara langsung melalui WhatsApp Concierge Atelier.</p>
 </section>;
}
