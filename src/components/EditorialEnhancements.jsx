import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, ArrowDown, X, MessageCircle, Phone, ShoppingBag, Gift, BookOpen, Leaf, MapPin, MoveUpRight, Store, ExternalLink } from 'lucide-react';
import { BRAND, PRODUCTS } from '../data/ninaukaData';
import {CHANNELS} from '../data/brandChannels';
import './EditorialEnhancements.css';

const Instagram = ({ size = 24, strokeWidth = 1.5, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Facebook = ({ size = 24, strokeWidth = 1.5, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

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
    {icon:ShoppingBag,label:'Koleksi & ketersediaan',hint:'Tanya detail produk',subject:contextual},
    {icon:Gift,label:'Bespoke & gifting',hint:'Pesanan personal / korporat',subject:'bespoke gifting atau kebutuhan korporat'},
    {icon:Leaf,label:'Material & pengiriman',hint:'Komposisi, dokumen, tujuan',subject:'material, dokumen dan opsi pengiriman'},
  ];
  return <aside className={'n-wa '+(open?'n-wa-open':'')} ref={wrapper} aria-label="Konsultasi WhatsApp Ninauka">
    {open && <div id="ninauka-wa-panel" className="n-wa-panel" role="region" aria-label="Pilihan konsultasi WhatsApp">
      <div className="n-wa-top"><div><span className="n-wa-kicker">NINAUKA / PRIVATE CONCIERGE</span><strong>A conversation<br/><em>begins here.</em></strong></div><button type="button" onClick={()=>setOpen(false)} className="n-wa-close" aria-label="Tutup pilihan WhatsApp"><X size={20}/></button></div>
      <p>Pilih topik, lalu lanjutkan langsung ke WhatsApp atelier. Tanpa chatbot atau formulir tambahan.</p>
      <div className="n-wa-options">{choices.map(c => <a href={message(c.subject)} key={c.label} target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)}><c.icon size={20} strokeWidth={1.5}/><span><b>{c.label}</b><small>{c.hint}</small></span><ArrowUpRight size={16}/></a>)}</div>
      <span className="n-wa-caption">WHATSAPP · {BRAND.phone}</span>
    </div>}
    <button type="button" className="n-wa-trigger" aria-expanded={open} aria-controls={open?'ninauka-wa-panel':undefined} aria-label={open?'Tutup pilihan konsultasi WhatsApp':'Buka konsultasi WhatsApp'} onClick={()=>setOpen(s=>!s)}>
      <span className="n-wa-symbol"><MessageCircle size={24} strokeWidth={1.8}/><span className="n-wa-phone"><Phone size={13} strokeWidth={2}/></span></span><span className="n-wa-trigger-label"><b>WhatsApp</b><small>PRIVATE CONCIERGE</small></span><span className="n-wa-trigger-arrow">{open?<X size={19}/>:<ArrowUpRight size={19}/>}</span>
    </button>
  </aside>;
}

export function CollectionMaterials({ select }) {
 const entries = [
  {number:'01',title:'Kulit eksotis',local:'THE LEATHER EDIT',image:'/images/products/kelly-ke01-front.jpg',detail:'Siluet tegas, permukaan berkarakter, dan finishing yang teliti.',id:'python'},
  {number:'02',title:'Tenun Baduy',local:'THE WOVEN EDIT',image:'/images/products/baduy-heritage-tote.jpg',detail:'Ritme garis yang lahir dari tradisi menenun tangan.',id:'baduy'},
  {number:'03',title:'Ulap Doyo',local:'THE FIBRE EDIT',image:'/images/products/doyo-envelope-front.jpg',detail:'Serat dan tekstur alam dari Kalimantan Timur.',id:'doyo'},
   {number:'04',title:'Goni & Serat Alam',local:'THE NATURAL EDIT',image:'/images/products/goni-ga1-black-cowhide.jpg',detail:'Ragam bahan alam dalam aksesori yang fungsional.',id:'goni'},
 ];
 return <section className="n-collection-guide"><div className="n-guide-head"><span>JELAJAH MATERIAL / 01—04</span><p>Empat wajah bahan.<br/><em>Satu rumah kriya.</em></p></div><div className="n-material-cards">{entries.map(x=><button type="button" key={x.id} className="n-material-card" onClick={()=>select(x.id)} aria-label={'Lihat koleksi '+x.title}><div className="n-material-photo">{image(x.image,'Ninauka — '+x.title)}<span>{x.number} / MATERIAL</span></div><div className="n-material-caption"><span>{x.local}</span><h3>{x.title}</h3><p>{x.detail}</p><ArrowUpRight size={21}/></div></button>)}</div></section>;
}

export function ProductDossier({ product, go }) {
 const isPython = product.category==='python' || product.materials.toLowerCase().includes('piton');
 const cover = (product.gallery||[]).length>1 ? product.gallery[1] : product.image;
 const textile = product.category==='baduy' ? '/images/story/baduy-textile-detail.jpg' : product.category==='doyo' ? '/images/story/doyo-natural-dyeing.jpg' : product.category==='goni' ? '/images/story/eco-goni-raw.jpg' : '/images/story/atelier-craftsman.jpg';
 return <section className="n-object-dossier" aria-label="Dossier karya dan perawatan"><div className="n-object-heading wrap"><div><span>CATATAN KARYA / {product.code || 'ARSIP NINAUKA'}</span><h2>A closer look<br/><em>at the details.</em></h2></div><p>Sebuah benda yang dibuat untuk dilihat dekat: keunikan tekstur, pilihan material, dan detail yang layak diperhatikan.</p></div>
 <div className="n-object-mosaic"><figure className="n-object-primary">{image(cover,`${product.title} — detail karya`)}<figcaption>01 / THE SILHOUETTE</figcaption></figure><figure className="n-object-secondary">{image(textile,'Material dan teknik dari arsip Ninauka')}<figcaption>02 / THE MATERIAL STORY</figcaption></figure><div className="n-object-note"><span>ATELIER NOTE</span><h3>Care for what<br/><em>you carry.</em></h3><p>Simpan di tempat sejuk dan kering, jauh dari sinar matahari langsung, kelembapan berlebih, serta tekanan yang dapat mengubah bentuk. Untuk noda atau permukaan khusus, konsultasikan perawatan dengan atelier sebelum memakai cairan pembersih.</p><div className="n-object-links"><a href={message(product.title + (product.code ? ' ('+product.code+')' : ' (referensi foto)'))} target="_blank" rel="noopener noreferrer">Konsultasi produk <ArrowUpRight size={17}/></a>{isPython&&<button type="button" onClick={()=>go('/journal/cites-dan-dokumen-kulit-eksotis')}>Catatan dokumen kulit <ArrowUpRight size={17}/></button>}</div></div></div>
 <div className="n-object-under wrap"><span>INDIVIDUAL PIECE / ATELIER NINAUKA</span><span>Details and availability confirmed upon enquiry.</span></div></section>;
}

export function MaisonInterlude({ go }) {
 return <section className="n-maison-interlude" aria-label="Cerita rumah kriya Ninauka"><div className="n-maison-interlude-photo">{image('/images/story/atelier-bsd-city.jpg','Ruang dan lingkungan atelier Ninauka')}<span>THE ATELIER / SOUTH TANGERANG</span></div><div className="n-maison-interlude-copy"><span>AN ADDRESS, A POINT OF VIEW</span><h2>Rooted here.<br/><em>Carried elsewhere.</em></h2><p>Dari Tangerang Selatan, karya Ninauka membuka percakapan antara material setempat dan pemakai dari berbagai tempat. Sebuah rumah desain yang melihat asal bahan sebagai bagian dari pengalaman memiliki.</p><div className="n-maison-notes"><div><b>01</b><span>Origin</span><small>Menghargai asal-usul serat dan teknik kriya.</small></div><div><b>02</b><span>Form</span><small>Memberi ruang pada fungsi dan proporsi.</small></div><div><b>03</b><span>Continuity</span><small>Menghubungkan cerita material dengan kehidupan sehari-hari.</small></div></div><button type="button" onClick={()=>go('/savoir-faire')}>Discover our material stories <ArrowUpRight size={19}/></button></div></section>;
}

export function CraftIndex() {
 const items = [
 {num:'I',name:'Ulap Doyo',region:'KALIMANTAN TIMUR',src:'/images/story/doyo-leaf-fiber-harvest.jpg',anchor:'material-doyo'},
 {num:'II',name:'Tenun Gedogan',region:'KANEKES · BANTEN',src:'/images/story/baduy-gedogan-loom.jpg',anchor:'material-baduy'},
 {num:'III',name:'Leathercraft',region:'ATELIER PRACTICE',src:'/images/story/atelier-craftsman.jpg',anchor:'material-python'},
 ];
 return <section className="n-craft-index wrap"><div className="n-craft-index-top"><span>MATERIAL INDEX</span><p>Follow the thread<br/><em>back to its origin.</em></p></div><div className="n-craft-index-items">{items.map(x=><a href={'#'+x.anchor} key={x.num} className="n-craft-index-card"><span>{x.num} — {x.region}</span>{image(x.src,x.name)}<h3>{x.name} <ArrowDown size={22}/></h3></a>)}</div></section>;
}

export function JournalInterlude({ go }) {
 return <section className="n-journal-interlude" aria-label="Panduan membaca jurnal"><div className="n-journal-photo">{image('/images/story/baduy-textile-detail.jpg','Detail tekstil Baduy dalam koleksi Ninauka')}<span>A TEXTILE IS AN ARCHIVE</span></div><div className="n-journal-copy"><span>THE EDITOR'S LETTER / ISSUE 01</span><h2>More than<br/><em>a beautiful object.</em></h2><p>Apa yang tak terlihat dalam foto produk sering kali menjadi bagian paling menarik: asal serat, proses tangan, dan konteks budaya.</p><p>Jurnal ini bukan etalase baru, melainkan ruang untuk membaca karya dengan lebih dekat.</p><div className="n-journal-links"><button type="button" onClick={()=>go('/journal/tenun-gedogan-baduy')}>Begin with the textile <ArrowUpRight size={18}/></button><button type="button" onClick={()=>go('/journal/merawat-tas-kulit-eksotis')}>Explore care notes <ArrowUpRight size={18}/></button></div></div></section>;
}

export function BespokeCurations() {
 const cards=[
  {n:'01',k:'PERSONAL',title:'A singular gesture.',image:'/images/products/minaudiere-ma03-hero.jpg',desc:'Satu karya untuk seseorang yang memiliki arti khusus.',subject:'hadiah personal dari koleksi Ninauka'},
  {n:'02',k:'CORPORATE',title:'A considered edit.',image:'/images/story/curated-exhibition.jpg',desc:'Kurasi produk dan kemasan untuk kebutuhan perusahaan atau acara.',subject:'kurasi hadiah korporasi dan kebutuhan acara'},
  {n:'03',k:'PRESENTATION',title:'The final detail.',image:'/images/story/exclusive-luxury-packaging.jpg',desc:'Diskusikan presentasi, kartu cerita, dan kemungkinan personalisasi.',subject:'kemasan dan personalisasi hadiah Ninauka'},
 ];
 return <section className="n-bespoke-curations wrap"><div className="n-bespoke-heading"><span>CURATED FOR AN OCCASION</span><h2>Different reasons.<br/><em>Thoughtful objects.</em></h2></div><div className="n-bespoke-list">{cards.map(x=><article key={x.n} className="n-bespoke-card"><div className="n-bespoke-visual">{image(x.image,x.title)}</div><div className="n-bespoke-text"><span>{x.n} / {x.k}</span><h3>{x.title}</h3><p>{x.desc}</p><a href={message(x.subject)} target="_blank" rel="noopener noreferrer">Discuss this request <ArrowUpRight size={18}/></a></div></article>)}</div></section>;
}

export function AtelierVisit() {
 return <section className="n-atelier-visit"><div className="n-atelier-visit-image">{image('/images/story/atelier-bsd-city.jpg','Dokumentasi Ninauka di BSD City')}</div><div className="n-atelier-visit-content"><span>BASED IN BSD CITY / INDONESIA</span><h2>Find the<br/><em>atelier.</em></h2><p>{BRAND.address}</p><p>Hubungi atelier terlebih dahulu untuk mengonfirmasi kesempatan konsultasi atau kunjungan. Jam kunjungan tidak dipublikasikan di website ini.</p><a href={BRAND.googleMapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={17}/> View on Google Maps <ArrowUpRight size={17}/></a></div></section>;
}

export function ArticleReadingProgress() {
 const [progress,setProgress]=useState(0);
 useEffect(()=>{const onScroll=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;setProgress(max>0?Math.min(100,Math.round(window.scrollY/max*100)):0)};onScroll();window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll);return()=>{window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll)}},[]);
 return <div className="n-reading-progress" role="progressbar" aria-label="Progres membaca halaman" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><span style={{width:progress+'%'}}/></div>;
}


/** Research-backed discovery links; search links are never presented as verified profiles. */
export function AtelierChannels() {
 const iconFor={instagram:Instagram,facebook:Facebook,shopee:ShoppingBag,tokopedia:Store,maps:MapPin,catalogue:BookOpen,tiktok:ExternalLink};
 return <section className="n-channels" aria-label="Jejak digital dan kanal Ninauka">
  <div className="n-channels-intro"><span>THE MAISON, BEYOND THE WEBSITE / CONNECT</span><div><h2>Find us where<br/><em>the story continues.</em></h2><p>Jelajahi kanal sosial, marketplace, lokasi atelier, dan direktori publik Ninauka. Tautan pencarian diberi label khusus bila alamat profil langsung belum dapat dipastikan.</p></div></div>
  <div className="n-channels-grid">{CHANNELS.map((c,i)=>{const Icon=iconFor[c.id]||ExternalLink;return <a href={c.url} key={c.id} className={'n-channel-card n-channel-'+c.id} target="_blank" rel="noopener noreferrer" aria-label={c.label}>
   <div className="n-channel-card-top"><span>{String(i+1).padStart(2,'0')} / {c.mode==='direct'?'SOCIAL':c.mode==='search'?'SEARCH':c.mode==='listing'?'MARKETPLACE':'DIRECTORY'}</span><ArrowUpRight size={19}/></div>
   <div className="n-channel-symbol"><Icon size={26} strokeWidth={1.3}/></div>
   <div className="n-channel-card-bottom"><h3>{c.name}</h3><strong>{c.handle}</strong><p>{c.description}</p><span className="n-channel-cta">{c.label}<ArrowUpRight size={14}/></span></div>
  </a>})}</div>
  <p className="n-channels-disclaimer">INFORMATION NOTE — Instagram dan identitas kanal tercantum dalam katalog BRILiaNpreneur. Untuk Facebook dan Tokopedia, halaman ini membuka pencarian, bukan profil resmi yang telah diverifikasi. Handle TikTok @ninaukaleather tercantum pada Company Profile Ninauka halaman 22. Tautannya adalah hasil pencarian, bukan klaim bahwa URL profil langsung sudah terverifikasi. YouTube belum didukung dokumen.</p>
 </section>;
}
