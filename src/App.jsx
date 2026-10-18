import React, {useEffect, useState, useMemo, useRef} from 'react';
import {ArrowUpRight, ArrowRight, ArrowLeft, ChevronDown, Plus, Minus, Menu, X, Mail, MapPin, MessageCircle, Search, Check, MoveUpRight, ChevronLeft, ChevronRight} from 'lucide-react';
import {BRAND, PRODUCTS, CATEGORIES, CRAFTSMANSHIP_CHAPTERS} from './data/ninaukaData';
import {ARTICLES} from './data/journal';
import {PRIMARY_CHANNELS, PUBLIC_SAME_AS} from './data/brandChannels';
import { FloatingWhatsApp, CollectionMaterials, ProductDossier, MaisonInterlude, CraftIndex, JournalInterlude, BespokeCurations, AtelierVisit, ArticleReadingProgress, AtelierChannels } from './components/EditorialEnhancements';
import './index.css';

function Instagram({size=18, className='', strokeWidth=1.75}) {
  return (
    <svg width={size} height={size} className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const W = '/images/';
const nav = [
  {to:'/collections',label:'Koleksi'},
  {to:'/maison',label:'Maison'},
  {to:'/savoir-faire',label:'Kriya & Wastra'},
  {to:'/journal',label:'Jurnal'},
  {to:'/bespoke',label:'Pesanan Khusus'},
];
const inquiries = (subject='Koleksi Ninauka') => `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(`Halo Atelier Ninauka, saya ingin bertanya tentang ${subject}. Mohon informasi lebih lanjut.`)}`;
const img = (src) => src || '/images/story/hero-cover.jpg';
const elTitle = (slug) => slug.replaceAll('-', ' ');

function useRoute(){
  const [path, setPath] = useState(() => window.location.pathname.replace(/\/$/,'')||'/');
  useEffect(()=>{
    const pop=()=>setPath(window.location.pathname.replace(/\/$/,'')||'/');
    window.addEventListener('popstate',pop);
    return()=>window.removeEventListener('popstate',pop);
  },[]);
  function go(to){
    if(to===path){window.scrollTo({top:0,behavior:'smooth'});return;}
    window.history.pushState({},'',to);
    setPath(to.split('?')[0].replace(/\/$/,'')||'/');
    window.scrollTo({top:0,behavior:'instant'});
  }
  return {path,go};
}
function A({to,go,children,className='',...props}){
  return <a href={to} className={className} onClick={e=>{
    if(!e.defaultPrevented && e.button===0 && !e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey && to?.startsWith('/') && !to?.startsWith('//')){e.preventDefault();go(to);}
  }} {...props}>{children}</a>;
}
function Photo({src,alt='',className='',loading='lazy',position,contain=false}){
  return <img src={img(src)} alt={alt} className={'photo '+(contain?'photo-contain ':'')+className} loading={loading} decoding="async" style={position?{objectPosition:position}:undefined}/>;
}
function Tag({children,className=''}){return <span className={'eyebrow '+className}><span className="eyebrow-dot"/>{children}</span>}
function LinkArrow({to,go,children,className=''}){return <A to={to} go={go} className={'line-link '+className}>{children}<ArrowUpRight size={19} strokeWidth={1.5}/></A>}
function RoundArrow({to,go,children}){return <A to={to} go={go} className="round-arrow-link"><span>{children}</span><span className="circle-arrow"><ArrowUpRight size={19}/></span></A>}
function SectionTop({index,title}){return <div className="section-top"><span>{index}</span><span>{title}</span></div>}
function PageHero({index,kicker,title,em,lead,image,dark=false}){
 return <section className={'page-hero '+(dark?'page-hero-dark':'')}>
   <div className="page-hero-text"><Tag>{index} / {kicker}</Tag><h1>{title}{' '}<em>{em}</em></h1><p>{lead}</p></div>
   {image&&<div className="page-hero-art"><Photo src={image} alt={title+' — Ninauka Atelier'} loading="eager"/></div>}
 </section>
}
function ProductCard({p,go,i=0}){
 return <article className="product-card"><A to={'/pieces/'+p.id} go={go} className="product-visual">
   <Photo src={p.image} alt={`${p.title} — ${p.categoryLabel}`} contain/>
   <span className="product-card-count">{String(i+1).padStart(2,'0')} / NINAUKA</span><span className="product-card-action"><ArrowUpRight size={22}/></span>
   </A><div className="product-card-info"><div><span>{p.categoryLabel}</span><h3><A to={'/pieces/'+p.id} go={go}>{p.title}</A></h3></div><span>{p.code}</span></div></article>
}
function ArticleCard({a,go,featured=false}){
 return <article className={'article-card '+(featured?'article-feature':'')}>
 <A to={'/journal/'+a.slug} go={go} className="article-image"><Photo src={a.image} alt={a.imageAlt}/><span className="article-arrow"><ArrowUpRight size={24}/></span></A>
 <div className="article-card-copy"><span className="article-kicker">{a.category} <b>·</b> {a.readTime}</span><h3><A to={'/journal/'+a.slug} go={go}>{a.title}</A></h3><p>{a.excerpt}</p><LinkArrow to={'/journal/'+a.slug} go={go}>Baca cerita</LinkArrow></div>
 </article>
}
function HeadSEO({title,description,image,product}){
 useEffect(()=>{
  const textTitle=title?title+' — NINAUKA':'NINAUKA — Mahakarya Kulit Eksotis & Warisan Wastra Nusantara';
  document.title=textTitle;
  const put=(selector,tag,attrs,value)=>{let t=document.head.querySelector(selector);if(!t){t=document.createElement(tag);Object.entries(attrs).forEach(([k,v])=>t.setAttribute(k,v));document.head.appendChild(t)}t.setAttribute('content',value)};
  const desc=description||'Ninauka Atelier: koleksi tas kulit eksotis dan wastra Nusantara, tentang kriya tangan, tradisi, dan desain kontemporer.';
  put('meta[name="description"]','meta',{name:'description'},desc);
  put('meta[property="og:title"]','meta',{property:'og:title'},textTitle);
  put('meta[property="og:description"]','meta',{property:'og:description'},desc);
  put('meta[property="og:image"]','meta',{property:'og:image'},new URL(image||'/images/story/hero-cover.jpg',window.location.origin).href);
  put('meta[property="og:type"]','meta',{property:'og:type'},product?'product':'website');
  let canonical=document.querySelector('link[rel="canonical"]'); if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical)}canonical.href=window.location.origin+window.location.pathname;
  const data={ '@context':'https://schema.org','@type':product?'Product':'WebPage',name:title||'NINAUKA Atelier',description:desc,url:window.location.href,...(product?{image:new URL(image,window.location.origin).href,brand:{'@type':'Brand',name:'NINAUKA'}}:{})};
  if(!product){data.publisher={'@type':'Organization',name:'NINAUKA',url:window.location.origin+'/',sameAs:PUBLIC_SAME_AS};}
  let ld=document.getElementById('ninauka-jsonld');if(!ld){ld=document.createElement('script');ld.id='ninauka-jsonld';ld.type='application/ld+json';document.head.appendChild(ld)}ld.textContent=JSON.stringify(data);
 },[title,description,image,product]);return null;
}
function Header({go,path}){
 const [open,setOpen]=useState(false);const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>25);onScroll();window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[]);
 useEffect(()=>{setOpen(false)},[path]);
 useEffect(()=>{document.body.classList.toggle('menu-open',open);return()=>document.body.classList.remove('menu-open')},[open]);
 useEffect(()=>{const onKey=e=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey)},[]);
 return <><header className={'site-header '+(scrolled?'header-scroll':'')}>
    <A to="/" go={go} className="wordmark" aria-label="Ninauka, kembali ke beranda">
      <img src={BRAND.logoDark || '/brand/ninauka-logo-clean.png'} alt="NINAUKA" style={{height:'32px',width:'auto',objectFit:'contain'}}/>
      <small>MAISON KRIYA INDONESIA</small>
    </A>
    <nav className="header-links" aria-label="Navigasi utama">{nav.map(n=><A key={n.to} to={n.to} go={go} className={path===n.to?'active':''}>{n.label}</A>)}</nav>
    <div className="header-right"><A to="/contact" go={go} className="header-inquiry">Konsultasi Privat <ArrowUpRight size={16}/></A><button className="menu-toggle" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open?'Tutup menu':'Buka menu'}>{open?<X size={23}/>:<Menu size={23}/>}</button></div>
 </header>
 <div className={'mobile-menu '+(open?'mobile-menu-show':'')} id="mobile-navigation" aria-hidden={!open}>
   <span className="mobile-label">NAVIGASI / NINAUKA</span>
   {nav.map((n,i)=><A key={n.to} to={n.to} go={go} tabIndex={open?0:-1} className="mobile-route"><small>0{i+1}</small>{n.label}<ArrowUpRight/></A>)}
   <A to="/contact" go={go} tabIndex={open?0:-1} className="mobile-route"><small>06</small>Kontak Atelier<ArrowUpRight/></A>
   <div className="mobile-menu-meta">BSD CITY — TANGERANG SELATAN <span>KRIYA ASLI INDONESIA</span></div>
 </div></>;
}
function Footer({go}){
 return <footer className="site-footer"><div className="footer-first"><Tag>PERCAKAPAN BERLANJUT</Tag><h2>Karya dengan cerita.<br/><em>Cerita yang layak dibawa.</em></h2><RoundArrow to="/contact" go={go}>Hubungi atelier</RoundArrow></div>
  <div className="footer-sections"><div className="footer-brand"><A to="/" go={go}><img src={BRAND.logo || '/brand/ninauka-logo-light.png'} alt="NINAUKA" style={{height:'42px',width:'auto',objectFit:'contain'}}/></A><span>Kemewahan kriya berpadu warisan wastra Indonesia.<br/>Nusaloka, BSD City, Tangerang Selatan.</span></div><div><b>RUMAH KRIYA</b>{nav.map(n=><A to={n.to} go={go} key={n.to}>{n.label}</A>)}</div><div><b>KONSULTASI PRIVAT</b><a href={'mailto:'+BRAND.email}>{BRAND.email}</a><a href={inquiries()} target="_blank" rel="noreferrer">WhatsApp Atelier <ArrowUpRight size={13}/></a><a href={BRAND.instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13}/></a></div></div>
  <div className="n-footer-connect"><span>FIND NINAUKA / ONLINE & IN PERSON</span><div>{PRIMARY_CHANNELS.map(ch=><a href={ch.url} key={ch.id} target="_blank" rel="noopener noreferrer" title={ch.description}>{ch.name}{ch.mode==='search'?' · cari':''} <ArrowUpRight size={13}/></a>)}</div></div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} NINAUKA. HAK CIPTA DILINDUNGI.</span><span><A to="/privacy" go={go}>Privasi</A><A to="/terms" go={go}>Ketentuan</A></span><A to="/" go={go}>KEMBALI KE ATAS ↑</A></div>
 </footer>;
}
function Home({go}){
 const favorites=[PRODUCTS[0],PRODUCTS[6],PRODUCTS[8],PRODUCTS[2]];
 return <><HeadSEO description="NINAUKA adalah atelier aksesori kulit dan wastra Nusantara di Tangerang Selatan. Jelajahi koleksi, kerajinan, dan cerita di balik karya." />
 <section className="home-hero">
   <div className="home-hero-photo"><Photo src="/images/story/hero-cover.jpg" alt="Koleksi signature Ninauka dari arsip resmi brand" loading="eager"/></div><div className="home-hero-shade"/>
   <div className="home-hero-meta"><span>ATELIER KULIT EKSOTIS & WASTRA INDEPENDEN</span><span>BSD CITY · INDONESIA</span></div>
   <div className="home-hero-title"><Tag>MAISON KRIYA INDONESIA</Tag><h1>Diciptakan untuk<br/><em>dikenang.</em></h1><p>Ekspresi kontemporer dari kulit eksotis pilihan, tenun Nusantara yang hidup, serta tangan-tangan terampil yang menyatukannya.</p><RoundArrow to="/collections" go={go}>Jelajahi koleksi</RoundArrow></div>
   <div className="home-hero-bottom"><span>01 — KEINDAHAN DALAM SETIAP SILUET</span><span>GULIR UNTUK MENJELAJAH <ChevronDown size={14}/></span><span>DIRANCANG DI INDONESIA</span></div>
 </section>
 <section className="home-intro wrap spacious"><SectionTop index="01 / RUMAH KRIYA" title="SENI KRIYA DENGAN IDENTITAS NUSANTARA"/><div className="home-intro-layout"><h2>Sebuah karya bisa<br/><em>indah.</em><br/>Atau memiliki<br/><em>makna.</em></h2><div><p>Di Ninauka, sebuah tas tidak hanya dibentuk oleh siluetnya. Ada tekstur bahan, ketelitian kriya, dan cerita Nusantara yang ikut berjalan bersamanya.</p><p>Kami mempertemukan kulit berkualitas dengan warisan wastra dalam bahasa desain yang relevan untuk hari ini.</p><LinkArrow to="/maison" go={go}>Tentang Ninauka</LinkArrow></div></div></section>
 <section className="home-feature"><div className="home-feature-photo"><Photo src="/images/story/curated-exhibition.jpg" alt="Presentasi kurasi koleksi Ninauka"/></div><div className="home-feature-copy"><Tag>KURASI UTAMA</Tag><small>SENI KEANGGUNAN / 2026</small><h2>Wujud dari<br/><em>keanggunan tenang.</em></h2><p>Ekspresi yang tak perlu berteriak. Material berbicara lewat karakter, garis, dan detail.</p><LinkArrow to="/collections" go={go}>Telusuri mahakarya kami</LinkArrow></div></section>
 <section className="wrap home-collection spacious"><SectionTop index="02 / KARYA TERPILIH" title="KOLEKSI UTAMA"/><div className="collection-title-row"><h2>Karya yang<br/><em>kita bawa.</em></h2><div><p>Siluet anggun untuk setiap langkah perjalanan. Kurasi karya pilihan dari katalog resmi Ninauka.</p><LinkArrow to="/collections" go={go}>Lihat seluruh koleksi</LinkArrow></div></div><div className="products-grid featured-grid">{favorites.map((p,i)=><ProductCard p={p} key={p.id} i={i} go={go}/>)}</div></section>
 <section className="home-quote"><span>NINAUKA / SEBUAH FILOSOFI</span><h2>Apa yang kita pilih untuk dibawa<br/>mencerminkan <em>dari mana kita berasal.</em></h2><span>DIBUAT DENGAN KESADARAN BUDAYA</span></section>
 <section className="home-story"><div className="home-story-copy"><Tag>03 / KRIYA & WASTRA</Tag><h2>Tercipta dari<br/><em>banyak cerita.</em></h2><p>Di balik setiap material, ada asal. Di balik setiap tekstur, ada keterampilan. Dari tenun Baduy hingga Ulap Doyo, Ninauka merayakan keragaman material dan tangan pembuatnya.</p><LinkArrow to="/savoir-faire" go={go}>Seni pembuatan kriya</LinkArrow></div><div className="home-story-photo"><Photo src="/images/story/baduy-gedogan-loom.jpg" alt="Dokumentasi proses tenun Baduy"/></div></section>
 <section className="wrap home-journal spacious"><SectionTop index="04 / CATATAN ATELIER" title="KISAH & PERSPEKTIF"/><div className="collection-title-row"><h2>Kisah di balik<br/><em>setiap karya.</em></h2><LinkArrow to="/journal" go={go}>Seluruh jurnal</LinkArrow></div><div className="home-articles">{ARTICLES.slice(0,3).map(a=><ArticleCard a={a} key={a.slug} go={go}/>)}</div></section>
 <section className="home-bespoke"><div className="home-bespoke-photo"><Photo src="/images/story/exclusive-luxury-packaging.jpg" alt="Kemasan personal Ninauka"/></div><div className="home-bespoke-copy"><Tag>05 / SENTUHAN PERSONAL</Tag><h2>Dirancang penuh<br/><em>perhatian.</em></h2><p>Hadiah korporasi, kesempatan istimewa, atau karya personal. Mulailah dengan percakapan bersama atelier.</p><RoundArrow to="/bespoke" go={go}>Layanan pesanan khusus</RoundArrow></div></section>
 </>;
}
function Collections({go}){
 const [filter,setFilter]=useState('all');const [search,setSearch]=useState('');
 const selected=useMemo(()=>PRODUCTS.filter(p=>(filter==='all'||filter===p.category) && (p.title+' '+p.materials+' '+p.categoryLabel).toLowerCase().includes(search.toLowerCase())),[filter,search]);
 return <><HeadSEO title="Koleksi" description="Temukan katalog lengkap Ninauka: tas kulit piton, tenun Baduy, Ulap Doyo, dan karya goni. Lihat spesifikasi dan konsultasikan pesanan."/>
 <PageHero index="01" kicker="KOLEKSI UTAMA" title="Karya penuh" em="makna." lead="Tiap siluet memiliki karakter. Jelajahi karya yang mempertemukan desain kontemporer dengan ekspresi material Nusantara." image="/brand/ninauka-bestseller-2026.jpg"/>
 <CollectionMaterials select={category=>{setFilter(category);setSearch('');document.getElementById('collection-grid')?.scrollIntoView({behavior:'smooth',block:'start'});}}/>
 <section className="wrap listing-section" id="collection-grid"><SectionTop index="KATALOG KARYA" title={`${PRODUCTS.length} KARYA KURASI`}/><div className="catalog-toolbar"><div className="filter-list" aria-label="Filter koleksi">{CATEGORIES.map(c=><button type="button" key={c.id} onClick={()=>setFilter(c.id)} aria-pressed={filter===c.id} className={filter===c.id?'filter-on':''}>{c.label}</button>)}</div><label className="catalog-search"><Search size={17}/><input aria-label="Cari koleksi" placeholder="Cari karya / material" value={search} onChange={e=>setSearch(e.target.value)}/></label></div>
 <p className="catalog-counter">MENAMPILKAN {selected.length} KARYA <span>Harga dan ketersediaan dikonfirmasi oleh atelier.</span></p>
 {selected.length?<div className="products-grid listing-grid">{selected.map((p,i)=><ProductCard key={p.id} p={p} i={i} go={go}/>)}</div>:<div className="empty-results"><h2>Belum ada karya yang cocok.</h2><p>Coba kata kunci atau kategori lain.</p><button onClick={()=>{setFilter('all');setSearch('')}}>Atur ulang pencarian <ArrowRight size={16}/></button></div>}
 </section></>;
}
function ProductDetail({go,product}){
 const [active,setActive]=useState(0);useEffect(()=>setActive(0),[product?.id]);
 if(!product)return <NotFound go={go}/>;
 const gallery=(product.gallery?.length?product.gallery:[product.image]);const more=PRODUCTS.filter(p=>p.id!==product.id&&p.category===product.category).slice(0,3);if(more.length<3)more.push(...PRODUCTS.filter(p=>p.id!==product.id&&!more.includes(p)).slice(0,3-more.length));
 return <><HeadSEO title={product.title} description={product.description} image={product.image} product/>
 <section className="product-detail wrap"><div className="breadcrumb"><A to="/collections" go={go}>Koleksi</A><span>/</span><span>{product.code}</span></div><div className="product-detail-layout">
 <div className="product-gallery"><div className="product-gallery-main"><Photo src={gallery[active]} alt={`${product.title}, sudut ${active+1}`} loading="eager" contain/></div><div className="thumbs" aria-label="Galeri foto produk">{gallery.map((source,i)=><button key={source} className={i===active?'thumb-active':''} aria-label={`Tampilkan foto ${i+1}`} aria-pressed={i===active} onClick={()=>setActive(i)}><Photo src={source} alt="" contain/></button>)}</div></div>
 <div className="product-summary"><Tag>{product.categoryLabel} / {product.code}</Tag><h1>{product.title}</h1><p className="product-badge">{product.badge}</p><p className="product-description">{product.description}</p><div className="spec-list"><div><span>UKURAN</span><strong>{product.dimensions}</strong></div><div><span>MATERIAL</span><strong>{product.materials}</strong></div><div><span>KETERSEDIAAN</span><strong>Konfirmasi stok dan waktu produksi dengan atelier</strong></div></div><a className="primary-dark" target="_blank" rel="noreferrer" href={inquiries(`${product.title} (${product.code})`)}>Konsultasikan karya ini <ArrowUpRight size={19}/></a><p className="detail-fineprint">Spesifikasi dapat dikonfirmasi ulang saat konsultasi. Tidak ada transaksi pembayaran langsung di website.</p></div>
 </div></section>
 <ProductDossier product={product} go={go}/>
 <section className="wrap related-products spacious"><SectionTop index="KURASI TERKAIT" title="PILIHAN NINAUKA"/><h2>Ekspresi <em>lainnya.</em></h2><div className="products-grid three-grid">{more.map((p,i)=><ProductCard key={p.id} i={i} p={p} go={go}/>)}</div></section></>;
}
function Maison({go}){
 return <><HeadSEO title="Maison Ninauka" description="Mengenal Ninauka Atelier, pendirinya Titik Kurniasih, dan pandangan tentang kulit eksotis serta wastra Nusantara."/>
 <PageHero index="02" kicker="RUMAH KRIYA KAMI" title="Tidak sekadar dibuat." em="Dibuat dengan makna." lead="Atelier independen yang memaknai kriya lewat keterampilan, asal material, dan hubungan personal dengan setiap karya." image="/images/story/atelier-bsd-city.jpg"/>
 <section className="wrap maison-body spacious"><SectionTop index="01 / PERSPEKTIF KAMI" title="KISAH TENTANG KETELITIAN"/><div className="maison-body-grid"><h2>Keindahan lahir dari<br/><em>pemahaman.</em></h2><div><p>Ninauka bergerak di antara dua dunia: estetika aksesori kontemporer dan kekayaan kriya Nusantara. Di sini, tas dipahami sebagai objek yang punya fungsi sekaligus identitas.</p><p>Material tenun tidak ditempatkan sekadar menjadi motif. Tekstur, proses pembuatan, dan asal-usulnya menjadi pertimbangan yang ikut membentuk pilihan desain.</p><p>Berbasis di kawasan Nusaloka, BSD City, Tangerang Selatan, atelier ini mempertemukan aneka material untuk menciptakan karya yang terasa personal.</p></div></div></section>
 <section className="maison-founder"><div className="founder-visual"><Photo src="/images/story/atelier-craftsman.jpg" alt="Dokumentasi kegiatan atelier Ninauka"/></div><div className="founder-copy"><Tag>PENDIRI ATELIER</Tag><h2>Sebuah visi yang<br/><em>terus dilanjutkan.</em></h2><p className="founder-name">{BRAND.founder}</p><span>{BRAND.founderTitle}</span><p>Sebuah visi yang memberikan ruang bagi desain modern untuk berdialog dengan seni kriya dan warisan tekstil Indonesia.</p><p className="founder-note">*Foto menampilkan dokumentasi atelier, bukan potret identitas pendiri.</p></div></section>
 <MaisonInterlude go={go}/>
 <section className="wrap maison-values spacious"><SectionTop index="02 / NILAI UTAMA" title="PRINSIP KRIYA KAMI"/><div className="value-grid"><div><span>01</span><h3>Karakter Material.</h3><p>Karakter bahan dihargai; setiap tekstur dipilih untuk menghidupkan bentuk.</p></div><div><span>02</span><h3>Kriya Menyimpan Sejarah.</h3><p>Wastra Nusantara dibicarakan bersama asal dan pengetahuan pembuatnya.</p></div><div><span>03</span><h3>Kemewahan Personal.</h3><p>Kemewahan datang dari hubungan dan kecermatan, bukan sekadar label.</p></div></div><LinkArrow to="/savoir-faire" go={go}>Jelajahi proses kriya</LinkArrow></section></>;
}
function SavoirFaire({go}){
 return <><HeadSEO title="Kriya & Wastra" description="Material dan proses kriya Ninauka: tenun Baduy, Ulap Doyo Kalimantan, kulit, dan kemasan personal."/>
 <PageHero index="03" kicker="KRIYA & WASTRA" title="Tangan di balik" em="setiap bentuk." lead="Kerajinan yang baik meninggalkan jejak: pada detail, tekstur, dan cara sebuah benda bertahan untuk dipakai." image="/images/story/atelier-craftsman.jpg" dark/>
 <section className="wrap craft-opening spacious"><SectionTop index="DOSSIER MATERIAL" title="DARI ASAL MENUJU MAHAKARYA"/><h2>Setiap material<br/>memiliki <em>awal cerita.</em></h2><p>Sebuah pandangan editorial tentang material pilihan Ninauka, dari tekstil tradisional hingga teknik kriya aksesori.</p></section>
 <CraftIndex/>
 {CRAFTSMANSHIP_CHAPTERS.map((c,i)=><section id={'material-'+c.id} key={c.id} className={'craft-chapter '+(i%2?'chapter-reverse':'')}><div className="chapter-image"><Photo src={c.image} alt={c.title}/><span>BAB {c.number} / NINAUKA</span></div><div className="chapter-copy"><Tag>BAB {c.number} / KRIYA & BUDAYA</Tag><h2>{c.title}</h2><strong>{c.subtitle}</strong><p>{c.body}</p>{i<2?<LinkArrow to={'/journal/'+(i===0?'ulap-doyo-dari-kalimantan':'tenun-gedogan-baduy')} go={go}>Baca cerita material</LinkArrow>:<LinkArrow to="/contact" go={go}>Tanyakan detail material</LinkArrow>}</div></section>)}
 <section className="compliance-note wrap"><h2>Material. Transparansi. <em>Tanggung Jawab.</em></h2><p>Produk dengan material yang diatur perundangan memerlukan pemeriksaan asal material dan dokumen yang relevan. Persyaratan CITES untuk pengiriman lintas negara bergantung pada spesies, transaksi, dan negara tujuan; dokumen dikonfirmasi per pesanan, bukan dijamin secara umum oleh halaman ini.</p><LinkArrow to="/journal/cites-dan-dokumen-kulit-eksotis" go={go}>Pahami dokumen perdagangan</LinkArrow></section></>;
}
function Journal({go}){return <><HeadSEO title="Jurnal Atelier" description="Artikel editorial Ninauka tentang tenun Baduy, Ulap Doyo, perawatan kulit eksotis, bespoke gifting, dan dokumentasi perdagangan."/>
 <section className="journal-heading wrap"><Tag>04 / JURNAL ATELIER</Tag><h1>Catatan dari<br/><em>ruang kriya.</em></h1><div><span>CATATAN LAPANGAN · MATERIAL · BUDAYA · PERSPEKTIF</span><p>Catatan mengenai hal-hal yang tak selalu terlihat di balik sebuah karya—material, tempat, dan cara kita memaknainya.</p></div></section>
 <JournalInterlude go={go}/>
 <section className="wrap journal-index"><SectionTop index="INDEKS EDITORIAL" title={`${ARTICLES.length} ARTIKEL`}/><ArticleCard a={ARTICLES[0]} go={go} featured/><div className="journal-articles">{ARTICLES.slice(1).map(a=><ArticleCard a={a} key={a.slug} go={go}/>)}</div></section></>}
function Article({go,article}){
 if(!article)return <NotFound go={go}/>;
 const other=ARTICLES.filter(a=>a.slug!==article.slug).slice(0,2);const product=PRODUCTS.find(p=>p.id===article.relatedProduct);
 return <><HeadSEO title={article.title} description={article.excerpt} image={article.image}/>
 <ArticleReadingProgress/>
 <article className="longread"><div className="article-heading wrap"><A to="/journal" go={go} className="article-back"><ArrowLeft size={16}/> Kembali ke Jurnal</A><Tag>{article.category} / JURNAL NINAUKA</Tag><h1>{article.title}</h1><p>{article.subtitle}</p><div className="article-heading-bottom"><span>CATATAN ATELIER</span><span>WAKTU BACA {article.readTime.toUpperCase()}</span></div></div>
 <div className="article-cover"><Photo src={article.image} alt={article.imageAlt} loading="eager"/><span>DARI ARSIP VISUAL NINAUKA</span></div>
 <div className="article-body wrap"><aside className="article-aside"><span>JURNAL NINAUKA</span><span>{article.category}</span><A to="/journal" go={go}><ArrowLeft size={15}/> SEMUA ARTIKEL</A></aside><div className="article-prose"><p className="article-lead">{article.excerpt}</p>{article.sections.map((s,i)=><React.Fragment key={s.heading}><h2>{s.heading}</h2>{s.paragraphs.map((p,j)=><p key={j}>{p}</p>)}{i===1&&<figure><Photo src={article.secondary} alt={'Arsip Ninauka — '+article.title}/><figcaption>REFERENSI VISUAL · ARSIP NINAUKA</figcaption></figure>}</React.Fragment>)}<div className="editorial-note"><span>CATATAN EDITORIAL</span><p>Artikel ini merupakan konten editorial Ninauka. Untuk spesifikasi atau dokumen produk tertentu, silakan konfirmasi langsung dengan atelier.</p></div></div></div>
 {product&&<div className="article-product wrap"><div><Tag>DALAM KOLEKSI</Tag><h2>Dari cerita<br/><em>menjadi karya.</em></h2><p>{product.title}</p><LinkArrow to={'/pieces/'+product.id} go={go}>Lihat karya terkait</LinkArrow></div><A to={'/pieces/'+product.id} go={go}><Photo src={product.image} alt={product.title} contain/></A></div>}
 </article><section className="wrap article-more spacious"><SectionTop index="LANJUTKAN MEMBACA" title="JURNAL NINAUKA"/><h2>Artikel <em>lainnya.</em></h2><div className="home-articles two-articles">{other.map(a=><ArticleCard a={a} key={a.slug} go={go}/>)}</div></section></>;
}
function Bespoke({go}){
 const [open,setOpen]=useState(0);
 const faqs=[{q:'Apakah menerima pesanan untuk perusahaan?',a:'Atelier melayani konsultasi kebutuhan hadiah korporasi dan acara khusus. Pilihan produk, jumlah, dan tenggat dikonfirmasi setelah brief diterima.'},{q:'Apakah setiap produk dapat diberi monogram?',a:'Opsi personalisasi bergantung pada material, konstruksi, dan jumlah pesanan. Tim atelier akan memeriksa kelayakannya untuk setiap pilihan produk.'},{q:'Apakah ada minimum pemesanan?',a:'Kuantitas minimum dan waktu produksi ditentukan berdasarkan produk serta kompleksitas permintaan. Hubungi atelier untuk proposal yang sesuai.'},{q:'Bagaimana dengan pengiriman internasional?',a:'Pengiriman akan ditinjau sesuai negara tujuan dan karakter material, termasuk persyaratan dokumen apabila berlaku. Jangan menganggap seluruh produk bisa dikirim ke setiap negara.'}];
 return <><HeadSEO title="Pesanan Khusus & Hadiah VIP" description="Konsultasi hadiah korporasi, kurasi suvenir personal, dan kebutuhan acara bersama Ninauka Atelier."/>
 <PageHero index="05" kicker="PESANAN KHUSUS & HADIAH VIP" title="Sebuah persembahan" em="personal." lead="Untuk hadiah yang tak sekadar diberikan, tetapi dipilih dengan pemikiran—dari satu karya istimewa hingga kurasi acara." image="/images/story/exclusive-luxury-packaging.jpg"/>
 <section className="wrap bespoke-intro spacious"><SectionTop index="LAYANAN ATELIER" title="DIRANCANG SECARA PERSONAL"/><div className="maison-body-grid"><h2>Bentuk hadiah<br/><em>yang berbeda.</em></h2><div><p>Setiap kesempatan memiliki konteks dan penerima yang berbeda. Kami memulai konsultasi dari kebutuhan Anda—bukan memaksakan satu format paket untuk semua.</p><p>Kurasi dapat mempertimbangkan material, kategori karya, presentasi kemasan, dan kemungkinan personalisasi. Setiap detail akan ditinjau bersama atelier sebelum konfirmasi.</p><LinkArrow to="/contact" go={go}>Mulai konsultasi privat</LinkArrow></div></div></section>
 <section className="bespoke-process wrap"><SectionTop index="TAHAPAN KERJA" title="DARI GAGASAN MENUJU KARYA"/><div className="process-grid">{[['01','Percakapan Awal','Ceritakan penerima, kesempatan, kisaran jumlah, dan tenggat.'],['02','Kurasi Karya','Atelier mengusulkan pilihan karya, spesifikasi, dan kemasan yang sesuai.'],['03','Detail & Penyesuaian','Personalisasi, jumlah, penawaran, dan waktu disepakati sebelum proses.'],['04','Presentasi Akhir','Pengemasan dan pengiriman diatur sesuai kesepakatan.']].map(x=><div key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></section>
 <BespokeCurations/>
 <div className="bespoke-showcase"><Photo src="/brand/ninauka-exclusive-packaging.jpg" alt="Presentasi kemasan Ninauka"/><div><Tag>DETAIL YANG BERMAKNA</Tag><h2>Dibuat dengan<br/><em>ketulusan penuh.</em></h2><p>Konsultasikan pilihan kemasan, kartu cerita, dan detail personal sesuai produk dan acara.</p><a className="light-link" target="_blank" rel="noreferrer" href={inquiries('bespoke gifting dan pesanan korporasi')}>Bicara dengan atelier <ArrowUpRight size={19}/></a></div></div>
 <section className="wrap faq-block spacious"><SectionTop index="TANYA JAWAB" title="INFORMASI PENTING"/><h2>Pertanyaan <em>umum.</em></h2><div className="faq-list">{faqs.map((q,i)=><div className="faq-item" key={q.q}><button aria-expanded={open===i} onClick={()=>setOpen(open===i?-1:i)}><span>{String(i+1).padStart(2,'0')}</span><strong>{q.q}</strong>{open===i?<Minus size={20}/>:<Plus size={20}/>}</button>{open===i&&<p>{q.a}</p>}</div>)}</div></section></>;
}
function Contact({go}){
 const [form,setForm]=useState({name:'',purpose:'Koleksi produk',message:''});
 const send=e=>{e.preventDefault();const m=`Halo Ninauka Atelier, saya ${form.name}.\nTopik: ${form.purpose}.\nPesan: ${form.message}`;window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(m)}`,'_blank','noopener,noreferrer')};
 return <><HeadSEO title="Konsultasi Privat" description="Hubungi Ninauka Atelier di BSD City melalui WhatsApp, Instagram, dan email untuk konsultasi koleksi, material, serta bespoke."/>
 <section className="contact-main wrap"><Tag>06 / KONSULTASI PRIVAT</Tag><h1>Setiap karya bermakna<br/>bermula dari <em>percakapan.</em></h1><div className="contact-layout"><div className="contact-info"><h2>Berdialog bersama<br/><em>atelier kami.</em></h2><p>Untuk konsultasi produk, kerja sama, atau pesanan personal, tinggalkan pesan yang jelas. Tim atelier akan menindaklanjuti melalui kanal yang Anda pilih.</p><div className="contact-method"><span>WHATSAPP</span><a href={inquiries()} target="_blank" rel="noreferrer">{BRAND.phone} <ArrowUpRight size={17}/></a></div><div className="contact-method"><span>EMAIL</span><a href={'mailto:'+BRAND.email}>{BRAND.email}<ArrowUpRight size={17}/></a></div><div className="contact-method"><span>INSTAGRAM</span><a href={BRAND.instagramUrl} target="_blank" rel="noreferrer">{BRAND.instagram} <ArrowUpRight size={17}/></a></div><div className="contact-method"><span>ATELIER</span><p>{BRAND.address}</p><a target="_blank" rel="noreferrer" href={BRAND.googleMapsUrl}>Lihat lokasi <ArrowUpRight size={15}/></a></div></div>
 <form className="contact-form" onSubmit={send}><h2>Kirim pesan <em>konsultasi.</em></h2><p>Formulir ini membuka WhatsApp dengan pesan terisi. Tidak ada data yang disimpan di server website.</p><label>NAMA LENGKAP <input required minLength="2" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Nama Anda"/></label><label>TOPIK KONSULTASI <select value={form.purpose} onChange={e=>setForm({...form,purpose:e.target.value})}><option>Koleksi produk</option><option>Pesanan khusus / hadiah VIP</option><option>Kolaborasi</option><option>Pertanyaan material & ekspor</option></select></label><label>PESAN ANDA <textarea required rows="5" minLength="8" placeholder="Ceritakan kebutuhan Anda..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/></label><button type="submit" className="primary-dark">Lanjutkan ke WhatsApp <ArrowUpRight size={19}/></button></form></div></section><AtelierChannels/><AtelierVisit/></>;
}
function Legal({type,go}){
 const privacy=type==='privacy';return <><HeadSEO title={privacy?'Kebijakan Privasi':'Ketentuan & Konsultasi'}/><section className="wrap legal-page"><Tag>INFORMASI / NINAUKA</Tag><h1>{privacy?'Kebijakan':'Ketentuan'} <em>{privacy?'privasi':'konsultasi'}</em></h1><p className="legal-lead">{privacy?'Informasi mengenai penggunaan data ketika Anda menghubungi atelier.':'Informasi dasar tentang katalog dan proses pemesanan melalui konsultasi.'}</p><h2>{privacy?'Formulir dan kanal komunikasi':'Katalog dan ketersediaan'}</h2><p>{privacy?'Formulir di halaman kontak hanya menyiapkan pesan untuk WhatsApp. Website ini tidak mengirim atau menyimpan isi formulir ke database internal. Komunikasi selanjutnya diproses melalui platform pilihan Anda sesuai kebijakan platform tersebut.':'Informasi produk di website bersifat katalog. Foto, bahan, dimensi, harga, waktu produksi, ketersediaan, dan opsi personalisasi perlu dikonfirmasi melalui komunikasi langsung dengan atelier sebelum transaksi.'}</p><h2>{privacy?'Data teknis':'Pembayaran dan pengiriman'}</h2><p>{privacy?'Hosting dan penyedia layanan analitik pihak ketiga, apabila ditambahkan oleh pengelola saat deployment, dapat mengolah data teknis sesuai kebijakan masing-masing. Versi ini tidak memasang pelacak pihak ketiga.':'Website ini tidak memproses pembayaran. Ketentuan pembayaran, pengiriman, retur, serta dokumen ekspor/impor akan disampaikan dalam penawaran atau kesepakatan terpisah sesuai pesanan dan ketentuan hukum yang berlaku.'}</p><h2>Kontak</h2><p>Untuk pertanyaan lebih lanjut, hubungi <a href={'mailto:'+BRAND.email}>{BRAND.email}</a>.</p><LinkArrow to="/contact" go={go}>Hubungi atelier</LinkArrow></section></>;
}
function NotFound({go}){return <><HeadSEO title="Halaman tidak ditemukan"/><section className="not-found wrap"><Tag>404 / HALAMAN TIDAK TERSEDIA</Tag><h1>Tidak semua hal<br/><em>berada di tempat semula.</em></h1><p>Halaman tidak tersedia. Jelajahi koleksi atau kembali ke beranda.</p><LinkArrow to="/" go={go}>Kembali ke beranda</LinkArrow></section></>}
export default function App(){
 const {path,go}=useRoute();let page;
 if(path==='/')page=<Home go={go}/>;
 else if(path==='/collections')page=<Collections go={go}/>;
 else if(path.startsWith('/pieces/'))page=<ProductDetail go={go} product={PRODUCTS.find(p=>p.id===path.split('/')[2])}/>;
 else if(path==='/maison')page=<Maison go={go}/>;
 else if(path==='/savoir-faire')page=<SavoirFaire go={go}/>;
 else if(path==='/journal')page=<Journal go={go}/>;
 else if(path.startsWith('/journal/'))page=<Article go={go} article={ARTICLES.find(a=>a.slug===path.split('/')[2])}/>;
 else if(path==='/bespoke')page=<Bespoke go={go}/>;
 else if(path==='/contact')page=<Contact go={go}/>;
 else if(path==='/privacy'||path==='/terms')page=<Legal type={path.slice(1)} go={go}/>;
 else page=<NotFound go={go}/>;
 return <div className="ninauka"><a className="skip-link" href="#main-content">Lewati navigasi</a><Header path={path} go={go}/><main id="main-content" key={path}>{page}</main><Footer go={go}/><FloatingWhatsApp path={path}/></div>
}
