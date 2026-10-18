import React, {useEffect, useState, useMemo, useRef} from 'react';
import {ArrowUpRight, ArrowRight, ArrowLeft, ChevronDown, Plus, Minus, Menu, X, Mail, MapPin, MessageCircle, Search, Check, MoveUpRight, ChevronLeft, ChevronRight} from 'lucide-react';
import {BRAND, PRODUCTS, CATEGORIES, CRAFTSMANSHIP_CHAPTERS} from './data/ninaukaData';
import {ARTICLES} from './data/journal';
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
  {to:'/savoir-faire',label:'Savoir-faire'},
  {to:'/journal',label:'Journal'},
  {to:'/bespoke',label:'Bespoke'},
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
  const textTitle=title?title+' — NINAUKA':'NINAUKA — Mahakarya Kulit & Wastra Nusantara';
  document.title=textTitle;
  const put=(selector,tag,attrs,value)=>{let t=document.head.querySelector(selector);if(!t){t=document.createElement(tag);Object.entries(attrs).forEach(([k,v])=>t.setAttribute(k,v));document.head.appendChild(t)}t.setAttribute('content',value)};
  const desc=description||'Ninauka Atelier: koleksi leather goods dan wastra Nusantara, tentang kriya tangan, tradisi, dan desain kontemporer.';
  put('meta[name="description"]','meta',{name:'description'},desc);
  put('meta[property="og:title"]','meta',{property:'og:title'},textTitle);
  put('meta[property="og:description"]','meta',{property:'og:description'},desc);
  put('meta[property="og:image"]','meta',{property:'og:image'},new URL(image||'/brand/ninauka-hero.jpg',window.location.origin).href);
  put('meta[property="og:type"]','meta',{property:'og:type'},product?'product':'website');
  let canonical=document.querySelector('link[rel="canonical"]'); if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical)}canonical.href=window.location.origin+window.location.pathname;
  const data={ '@context':'https://schema.org','@type':product?'Product':'WebPage',name:title||'NINAUKA Atelier',description:desc,url:window.location.href,...(product?{image:new URL(image,window.location.origin).href,brand:{'@type':'Brand',name:'NINAUKA'}}:{})};
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
    <A to="/" go={go} className="wordmark" aria-label="Ninauka, kembali ke beranda"><span>NINAUKA</span><small>AN INDONESIAN MAISON</small></A>
    <nav className="header-links" aria-label="Navigasi utama">{nav.map(n=><A key={n.to} to={n.to} go={go} className={path===n.to?'active':''}>{n.label}</A>)}</nav>
    <div className="header-right"><A to="/contact" go={go} className="header-inquiry">Private enquiry <ArrowUpRight size={16}/></A><button className="menu-toggle" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open?'Tutup menu':'Buka menu'}>{open?<X size={23}/>:<Menu size={23}/>}</button></div>
 </header>
 <div className={'mobile-menu '+(open?'mobile-menu-show':'')} id="mobile-navigation" aria-hidden={!open}>
   <span className="mobile-label">NAVIGATION / NINAUKA</span>
   {nav.map((n,i)=><A key={n.to} to={n.to} go={go} tabIndex={open?0:-1} className="mobile-route"><small>0{i+1}</small>{n.label}<ArrowUpRight/></A>)}
   <A to="/contact" go={go} tabIndex={open?0:-1} className="mobile-route"><small>06</small>Contact<ArrowUpRight/></A>
   <div className="mobile-menu-meta">BSD CITY — TANGERANG SELATAN <span>MADE IN INDONESIA</span></div>
 </div></>;
}
function Footer({go}){
 return <footer className="site-footer"><div className="footer-first"><Tag>THE CONVERSATION CONTINUES</Tag><h2>Objects with stories.<br/><em>Stories worth carrying.</em></h2><RoundArrow to="/contact" go={go}>Hubungi atelier</RoundArrow></div>
  <div className="footer-sections"><div className="footer-brand"><A to="/" go={go}>NINAUKA</A><span>Luxury meets Indonesian heritage.<br/>Nusaloka, BSD City, Tangerang Selatan.</span></div><div><b>THE MAISON</b>{nav.map(n=><A to={n.to} go={go} key={n.to}>{n.label}</A>)}</div><div><b>PRIVATE ENQUIRIES</b><a href={'mailto:'+BRAND.email}>{BRAND.email}</a><a href={inquiries()} target="_blank" rel="noreferrer">WhatsApp Atelier <ArrowUpRight size={13}/></a><a href={BRAND.instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13}/></a></div></div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} NINAUKA. ALL RIGHTS RESERVED.</span><span><A to="/privacy" go={go}>Privacy</A><A to="/terms" go={go}>Terms</A></span><A to="/" go={go}>BACK TO TOP ↑</A></div>
 </footer>;
}
function Home({go}){
 const favorites=[PRODUCTS[0],PRODUCTS[6],PRODUCTS[8],PRODUCTS[2]];
 return <><HeadSEO description="NINAUKA adalah atelier aksesori kulit dan wastra Nusantara di Tangerang Selatan. Jelajahi koleksi, kerajinan, dan cerita di balik karya." />
 <section className="home-hero">
   <div className="home-hero-photo"><Photo src="/images/story/hero-cover.jpg" alt="Koleksi signature Ninauka dari arsip resmi brand" loading="eager"/></div><div className="home-hero-shade"/>
   <div className="home-hero-meta"><span>INDEPENDENT LEATHER & TEXTILE ATELIER</span><span>BSD CITY · INDONESIA</span></div>
   <div className="home-hero-title"><Tag>AN INDONESIAN MAISON</Tag><h1>Crafted to be<br/><em>remembered.</em></h1><p>A contemporary expression of exceptional leather, living textiles, and the hands that bring them together.</p><RoundArrow to="/collections" go={go}>Discover the collection</RoundArrow></div>
   <div className="home-hero-bottom"><span>01 — ARTISTRY IN EVERY FORM</span><span>SCROLL TO EXPLORE <ChevronDown size={14}/></span><span>EST. IN INDONESIA</span></div>
 </section>
 <section className="home-intro wrap spacious"><SectionTop index="01 / THE HOUSE" title="ARTISTRY, WITH A SENSE OF PLACE"/><div className="home-intro-layout"><h2>Objects can be<br/><em>beautiful.</em><br/>Or they can mean<br/><em>something.</em></h2><div><p>Di Ninauka, sebuah tas tidak hanya dibentuk oleh siluetnya. Ada tekstur bahan, ketelitian kriya, dan cerita Nusantara yang ikut berjalan bersamanya.</p><p>Kami mempertemukan kulit berkualitas dengan warisan wastra dalam bahasa desain yang relevan untuk hari ini.</p><LinkArrow to="/maison" go={go}>Tentang Ninauka</LinkArrow></div></div></section>
 <section className="home-feature"><div className="home-feature-photo"><Photo src="/images/story/curated-exhibition.jpg" alt="Presentasi kurasi koleksi Ninauka"/></div><div className="home-feature-copy"><Tag>THE SIGNATURE EDIT</Tag><small>AN ART OF DISTINCTION / 2026</small><h2>A form of<br/><em>quiet presence.</em></h2><p>Ekspresi yang tak perlu berteriak. Material berbicara lewat karakter, garis, dan detail.</p><LinkArrow to="/collections" go={go}>Explore our pieces</LinkArrow></div></section>
 <section className="wrap home-collection spacious"><SectionTop index="02 / SELECTED OBJECTS" title="THE COLLECTION"/><div className="collection-title-row"><h2>The objects<br/><em>we carry.</em></h2><div><p>Silhouettes for a life in motion. Selected works from the Ninauka catalogue.</p><LinkArrow to="/collections" go={go}>Lihat seluruh koleksi</LinkArrow></div></div><div className="products-grid featured-grid">{favorites.map((p,i)=><ProductCard p={p} key={p.id} i={i} go={go}/>)}</div></section>
 <section className="home-quote"><span>NINAUKA / A PHILOSOPHY</span><h2>What we choose to carry<br/>can say <em>where we come from.</em></h2><span>MADE WITH CULTURAL INTENTION</span></section>
 <section className="home-story"><div className="home-story-copy"><Tag>03 / SAVOIR-FAIRE</Tag><h2>Made of<br/><em>many stories.</em></h2><p>Di balik setiap material, ada asal. Di balik setiap tekstur, ada keterampilan. Dari tenun Baduy hingga Ulap Doyo, Ninauka merayakan keragaman material dan tangan pembuatnya.</p><LinkArrow to="/savoir-faire" go={go}>The art of making</LinkArrow></div><div className="home-story-photo"><Photo src="/images/story/baduy-gedogan-loom.jpg" alt="Dokumentasi proses tenun Baduy"/></div></section>
 <section className="wrap home-journal spacious"><SectionTop index="04 / ATELIER NOTES" title="WORDS & PERSPECTIVES"/><div className="collection-title-row"><h2>Stories behind<br/><em>the objects.</em></h2><LinkArrow to="/journal" go={go}>Seluruh jurnal</LinkArrow></div><div className="home-articles">{ARTICLES.slice(0,3).map(a=><ArticleCard a={a} key={a.slug} go={go}/>)}</div></section>
 <section className="home-bespoke"><div className="home-bespoke-photo"><Photo src="/images/story/exclusive-luxury-packaging.jpg" alt="Kemasan personal Ninauka"/></div><div className="home-bespoke-copy"><Tag>05 / THE PERSONAL TOUCH</Tag><h2>Considered.<br/><em>For someone.</em></h2><p>Hadiah korporasi, kesempatan istimewa, atau karya personal. Mulailah dengan percakapan bersama atelier.</p><RoundArrow to="/bespoke" go={go}>Explore bespoke</RoundArrow></div></section>
 </>;
}
function Collections({go}){
 const [filter,setFilter]=useState('all');const [search,setSearch]=useState('');
 const selected=useMemo(()=>PRODUCTS.filter(p=>(filter==='all'||filter===p.category) && (p.title+' '+p.materials+' '+p.categoryLabel).toLowerCase().includes(search.toLowerCase())),[filter,search]);
 return <><HeadSEO title="Koleksi" description="Temukan katalog lengkap Ninauka: tas kulit piton, tenun Baduy, Ulap Doyo, dan karya goni. Lihat spesifikasi dan konsultasikan pesanan."/>
 <PageHero index="01" kicker="THE COLLECTION" title="Objects of" em="meaning." lead="Tiap siluet memiliki karakter. Jelajahi karya yang mempertemukan desain kontemporer dengan ekspresi material Nusantara." image="/brand/ninauka-bestseller-2026.jpg"/>
 <section className="wrap listing-section"><SectionTop index="THE OBJECTS" title={`${PRODUCTS.length} SELECTED PIECES`}/><div className="catalog-toolbar"><div className="filter-list" aria-label="Filter koleksi">{CATEGORIES.map(c=><button type="button" key={c.id} onClick={()=>setFilter(c.id)} aria-pressed={filter===c.id} className={filter===c.id?'filter-on':''}>{c.label}</button>)}</div><label className="catalog-search"><Search size={17}/><input aria-label="Cari koleksi" placeholder="Cari karya / material" value={search} onChange={e=>setSearch(e.target.value)}/></label></div>
 <p className="catalog-counter">MENAMPILKAN {selected.length} KARYA <span>Harga dan ketersediaan dikonfirmasi oleh atelier.</span></p>
 {selected.length?<div className="products-grid listing-grid">{selected.map((p,i)=><ProductCard key={p.id} p={p} i={i} go={go}/>)}</div>:<div className="empty-results"><h2>Belum ada karya yang cocok.</h2><p>Coba kata kunci atau kategori lain.</p><button onClick={()=>{setFilter('all');setSearch('')}}>Reset pencarian <ArrowRight size={16}/></button></div>}
 </section></>;
}
function ProductDetail({go,product}){
 const [active,setActive]=useState(0);useEffect(()=>setActive(0),[product?.id]);
 if(!product)return <NotFound go={go}/>;
 const gallery=(product.gallery?.length?product.gallery:[product.image]);const more=PRODUCTS.filter(p=>p.id!==product.id&&p.category===product.category).slice(0,3);if(more.length<3)more.push(...PRODUCTS.filter(p=>p.id!==product.id&&!more.includes(p)).slice(0,3-more.length));
 return <><HeadSEO title={product.title} description={product.description} image={product.image} product/>
 <section className="product-detail wrap"><div className="breadcrumb"><A to="/collections" go={go}>Koleksi</A><span>/</span><span>{product.code}</span></div><div className="product-detail-layout">
 <div className="product-gallery"><div className="product-gallery-main"><Photo src={gallery[active]} alt={`${product.title}, sudut ${active+1}`} loading="eager" contain/></div><div className="thumbs" aria-label="Galeri foto produk">{gallery.map((source,i)=><button key={source} className={i===active?'thumb-active':''} aria-label={`Tampilkan foto ${i+1}`} aria-pressed={i===active} onClick={()=>setActive(i)}><Photo src={source} alt="" contain/></button>)}</div></div>
 <div className="product-summary"><Tag>{product.categoryLabel} / {product.code}</Tag><h1>{product.title}</h1><p className="product-badge">{product.badge}</p><p className="product-description">{product.description}</p><div className="spec-list"><div><span>UKURAN</span><strong>{product.dimensions}</strong></div><div><span>MATERIAL</span><strong>{product.materials}</strong></div><div><span>KETERSEDIAAN</span><strong>Konfirmasi stok dan waktu produksi dengan atelier</strong></div></div><a className="primary-dark" target="_blank" rel="noreferrer" href={inquiries(`${product.title} (${product.code})`)}>Enquire about this piece <ArrowUpRight size={19}/></a><p className="detail-fineprint">Spesifikasi dapat dikonfirmasi ulang saat konsultasi. Tidak ada transaksi pembayaran langsung di website.</p></div>
 </div></section>
 <section className="wrap related-products spacious"><SectionTop index="YOU MAY ALSO APPRECIATE" title="NINAUKA EDIT"/><h2>Other <em>expressions.</em></h2><div className="products-grid three-grid">{more.map((p,i)=><ProductCard key={p.id} i={i} p={p} go={go}/>)}</div></section></>;
}
function Maison({go}){
 return <><HeadSEO title="The Maison" description="Mengenal Ninauka Atelier, pendirinya Titik Kurniasih, dan pandangan tentang kulit eksotis serta wastra Nusantara."/>
 <PageHero index="02" kicker="OUR HOUSE" title="Not simply made." em="Meaningfully made." lead="Atelier independen yang memaknai kriya lewat keterampilan, asal material, dan hubungan personal dengan setiap karya." image="/images/story/atelier-bsd-city.jpg"/>
 <section className="wrap maison-body spacious"><SectionTop index="01 / OUR PERSPECTIVE" title="A STORY OF INTENTION"/><div className="maison-body-grid"><h2>Beauty is in<br/><em>the knowing.</em></h2><div><p>Ninauka bergerak di antara dua dunia: estetika aksesori kontemporer dan kekayaan kriya Nusantara. Di sini, tas dipahami sebagai objek yang punya fungsi sekaligus identitas.</p><p>Material tenun tidak ditempatkan sekadar menjadi motif. Tekstur, proses pembuatan, dan asal-usulnya menjadi pertimbangan yang ikut membentuk pilihan desain.</p><p>Berbasis di kawasan Nusaloka, BSD City, Tangerang Selatan, atelier ini mempertemukan aneka material untuk menciptakan karya yang terasa personal.</p></div></div></section>
 <section className="maison-founder"><div className="founder-visual"><Photo src="/images/story/atelier-craftsman.jpg" alt="Dokumentasi kegiatan atelier Ninauka"/></div><div className="founder-copy"><Tag>THE FOUNDER</Tag><h2>A vision<br/><em>carried forward.</em></h2><p className="founder-name">{BRAND.founder}</p><span>{BRAND.founderTitle}</span><p>Sebuah visi yang memberikan ruang bagi desain modern untuk berdialog dengan seni kriya dan warisan tekstil Indonesia.</p><p className="founder-note">*Foto menampilkan dokumentasi atelier, bukan potret identitas pendiri.</p></div></section>
 <section className="wrap maison-values spacious"><SectionTop index="02 / WHAT MATTERS" title="OUR POINT OF VIEW"/><div className="value-grid"><div><span>01</span><h3>Material matters.</h3><p>Karakter bahan dihargai; setiap tekstur dipilih untuk menghidupkan bentuk.</p></div><div><span>02</span><h3>Craft carries history.</h3><p>Wastra Nusantara dibicarakan bersama asal dan pengetahuan pembuatnya.</p></div><div><span>03</span><h3>Luxury is personal.</h3><p>Kemewahan datang dari hubungan dan kecermatan, bukan sekadar label.</p></div></div><LinkArrow to="/savoir-faire" go={go}>Explore craftsmanship</LinkArrow></section></>;
}
function SavoirFaire({go}){
 return <><HeadSEO title="Savoir-faire" description="Material dan proses kriya Ninauka: tenun Baduy, Ulap Doyo Kalimantan, kulit, dan kemasan personal."/>
 <PageHero index="03" kicker="SAVOIR-FAIRE" title="The hand behind" em="the form." lead="Kerajinan yang baik meninggalkan jejak: pada detail, tekstur, dan cara sebuah benda bertahan untuk dipakai." image="/images/story/atelier-craftsman.jpg" dark/>
 <section className="wrap craft-opening spacious"><SectionTop index="THE MATERIAL DOSSIER" title="FROM ORIGIN TO OBJECT"/><h2>Every material<br/>has a <em>beginning.</em></h2><p>Sebuah pandangan editorial tentang material pilihan Ninauka, dari tekstil tradisional hingga teknik kriya aksesori.</p></section>
 {CRAFTSMANSHIP_CHAPTERS.map((c,i)=><section key={c.id} className={'craft-chapter '+(i%2?'chapter-reverse':'')}><div className="chapter-image"><Photo src={c.image} alt={c.title}/><span>CHAPTER {c.number} / NINAUKA</span></div><div className="chapter-copy"><Tag>CHAPTER {c.number} / CRAFT & CULTURE</Tag><h2>{c.title}</h2><strong>{c.subtitle}</strong><p>{c.body}</p>{i<2?<LinkArrow to={'/journal/'+(i===0?'ulap-doyo-dari-kalimantan':'tenun-gedogan-baduy')} go={go}>Baca cerita material</LinkArrow>:<LinkArrow to="/contact" go={go}>Tanyakan detail material</LinkArrow>}</div></section>)}
 <section className="compliance-note wrap"><h2>Material. Transparency. <em>Responsibility.</em></h2><p>Produk dengan material yang diatur perundangan memerlukan pemeriksaan asal material dan dokumen yang relevan. Persyaratan CITES untuk pengiriman lintas negara bergantung pada spesies, transaksi, dan negara tujuan; dokumen dikonfirmasi per pesanan, bukan dijamin secara umum oleh halaman ini.</p><LinkArrow to="/journal/cites-dan-dokumen-kulit-eksotis" go={go}>Pahami dokumen perdagangan</LinkArrow></section></>;
}
function Journal({go}){return <><HeadSEO title="Journal" description="Artikel editorial Ninauka tentang tenun Baduy, Ulap Doyo, perawatan kulit eksotis, bespoke gifting, dan dokumentasi perdagangan."/>
 <section className="journal-heading wrap"><Tag>04 / THE JOURNAL</Tag><h1>Notes from<br/><em>the atelier.</em></h1><div><span>FIELD NOTES · MATERIAL · CULTURE · PERSPECTIVE</span><p>Catatan mengenai hal-hal yang tak selalu terlihat di balik sebuah karya—material, tempat, dan cara kita memaknainya.</p></div></section>
 <section className="wrap journal-index"><SectionTop index="THE EDITORIAL INDEX" title={`${ARTICLES.length} STORIES`}/><ArticleCard a={ARTICLES[0]} go={go} featured/><div className="journal-articles">{ARTICLES.slice(1).map(a=><ArticleCard a={a} key={a.slug} go={go}/>)}</div></section></>}
function Article({go,article}){
 if(!article)return <NotFound go={go}/>;
 const other=ARTICLES.filter(a=>a.slug!==article.slug).slice(0,2);const product=PRODUCTS.find(p=>p.id===article.relatedProduct);
 return <><HeadSEO title={article.title} description={article.excerpt} image={article.image}/>
 <article className="longread"><div className="article-heading wrap"><A to="/journal" go={go} className="article-back"><ArrowLeft size={16}/> Kembali ke Journal</A><Tag>{article.category} / NINAUKA JOURNAL</Tag><h1>{article.title}</h1><p>{article.subtitle}</p><div className="article-heading-bottom"><span>AN ATELIER NOTE</span><span>WAKTU BACA {article.readTime.toUpperCase()}</span></div></div>
 <div className="article-cover"><Photo src={article.image} alt={article.imageAlt} loading="eager"/><span>FROM THE NINAUKA IMAGE ARCHIVE</span></div>
 <div className="article-body wrap"><aside className="article-aside"><span>NINAUKA JOURNAL</span><span>{article.category}</span><A to="/journal" go={go}><ArrowLeft size={15}/> ALL STORIES</A></aside><div className="article-prose"><p className="article-lead">{article.excerpt}</p>{article.sections.map((s,i)=><React.Fragment key={s.heading}><h2>{s.heading}</h2>{s.paragraphs.map((p,j)=><p key={j}>{p}</p>)}{i===1&&<figure><Photo src={article.secondary} alt={'Arsip Ninauka — '+article.title}/><figcaption>VISUAL REFERENCE · NINAUKA ARCHIVE</figcaption></figure>}</React.Fragment>)}<div className="editorial-note"><span>EDITORIAL NOTE</span><p>Artikel ini merupakan konten editorial Ninauka. Untuk spesifikasi atau dokumen produk tertentu, silakan konfirmasi langsung dengan atelier.</p></div></div></div>
 {product&&<div className="article-product wrap"><div><Tag>IN THE COLLECTION</Tag><h2>From story<br/><em>to object.</em></h2><p>{product.title}</p><LinkArrow to={'/pieces/'+product.id} go={go}>Lihat karya terkait</LinkArrow></div><A to={'/pieces/'+product.id} go={go}><Photo src={product.image} alt={product.title} contain/></A></div>}
 </article><section className="wrap article-more spacious"><SectionTop index="CONTINUE READING" title="NINAUKA JOURNAL"/><h2>More from <em>the journal.</em></h2><div className="home-articles two-articles">{other.map(a=><ArticleCard a={a} key={a.slug} go={go}/>)}</div></section></>;
}
function Bespoke({go}){
 const [open,setOpen]=useState(0);
 const faqs=[{q:'Apakah menerima pesanan untuk perusahaan?',a:'Atelier melayani konsultasi kebutuhan hadiah korporasi dan acara khusus. Pilihan produk, jumlah, dan tenggat dikonfirmasi setelah brief diterima.'},{q:'Apakah setiap produk dapat diberi monogram?',a:'Opsi personalisasi bergantung pada material, konstruksi, dan jumlah pesanan. Tim atelier akan memeriksa kelayakannya untuk setiap pilihan produk.'},{q:'Apakah ada minimum pemesanan?',a:'Kuantitas minimum dan waktu produksi ditentukan berdasarkan produk serta kompleksitas permintaan. Hubungi atelier untuk proposal yang sesuai.'},{q:'Bagaimana dengan pengiriman internasional?',a:'Pengiriman akan ditinjau sesuai negara tujuan dan karakter material, termasuk persyaratan dokumen apabila berlaku. Jangan menganggap seluruh produk bisa dikirim ke setiap negara.'}];
 return <><HeadSEO title="Bespoke & Gifting" description="Konsultasi hadiah korporasi, kurasi suvenir personal, dan kebutuhan acara bersama Ninauka Atelier."/>
 <PageHero index="05" kicker="BESPOKE & GIFTING" title="A gesture made" em="personal." lead="Untuk hadiah yang tak sekadar diberikan, tetapi dipilih dengan pemikiran—dari satu karya istimewa hingga kurasi acara." image="/images/story/exclusive-luxury-packaging.jpg"/>
 <section className="wrap bespoke-intro spacious"><SectionTop index="THE SERVICE" title="PERSONAL BY DESIGN"/><div className="maison-body-grid"><h2>A different<br/><em>kind of gift.</em></h2><div><p>Setiap kesempatan memiliki konteks dan penerima yang berbeda. Kami memulai konsultasi dari kebutuhan Anda—bukan memaksakan satu format paket untuk semua.</p><p>Kurasi dapat mempertimbangkan material, kategori karya, presentasi kemasan, dan kemungkinan personalisasi. Setiap detail akan ditinjau bersama atelier sebelum konfirmasi.</p><LinkArrow to="/contact" go={go}>Start a private enquiry</LinkArrow></div></div></section>
 <section className="bespoke-process wrap"><SectionTop index="HOW WE WORK" title="FROM BRIEF TO OBJECT"/><div className="process-grid">{[['01','The conversation','Ceritakan penerima, kesempatan, kisaran jumlah, dan tenggat.'],['02','The edit','Atelier mengusulkan pilihan karya, spesifikasi, dan kemasan yang sesuai.'],['03','The details','Personalisasi, jumlah, penawaran, dan waktu disepakati sebelum proses.'],['04','The presentation','Pengemasan dan pengiriman diatur sesuai kesepakatan.']].map(x=><div key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></section>
 <div className="bespoke-showcase"><Photo src="/brand/ninauka-exclusive-packaging.jpg" alt="Presentasi kemasan Ninauka"/><div><Tag>DETAILS THAT MATTER</Tag><h2>Made to<br/><em>feel considered.</em></h2><p>Konsultasikan pilihan kemasan, kartu cerita, dan detail personal sesuai produk dan acara.</p><a className="light-link" target="_blank" rel="noreferrer" href={inquiries('bespoke gifting dan pesanan korporasi')}>Speak to the atelier <ArrowUpRight size={19}/></a></div></div>
 <section className="wrap faq-block spacious"><SectionTop index="QUESTIONS & ANSWERS" title="GOOD TO KNOW"/><h2>Frequently <em>asked.</em></h2><div className="faq-list">{faqs.map((q,i)=><div className="faq-item" key={q.q}><button aria-expanded={open===i} onClick={()=>setOpen(open===i?-1:i)}><span>{String(i+1).padStart(2,'0')}</span><strong>{q.q}</strong>{open===i?<Minus size={20}/>:<Plus size={20}/>}</button>{open===i&&<p>{q.a}</p>}</div>)}</div></section></>;
}
function Contact({go}){
 const [form,setForm]=useState({name:'',purpose:'Koleksi produk',message:''});
 const send=e=>{e.preventDefault();const m=`Halo Ninauka Atelier, saya ${form.name}.\nTopik: ${form.purpose}.\nPesan: ${form.message}`;window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(m)}`,'_blank','noopener,noreferrer')};
 return <><HeadSEO title="Private Enquiry" description="Hubungi Ninauka Atelier di BSD City melalui WhatsApp, Instagram, dan email untuk konsultasi koleksi, material, serta bespoke."/>
 <section className="contact-main wrap"><Tag>06 / PRIVATE ENQUIRY</Tag><h1>Every meaningful piece<br/>begins with <em>a conversation.</em></h1><div className="contact-layout"><div className="contact-info"><h2>In conversation<br/><em>with the atelier.</em></h2><p>Untuk konsultasi produk, kerja sama, atau pesanan personal, tinggalkan pesan yang jelas. Tim atelier akan menindaklanjuti melalui kanal yang Anda pilih.</p><div className="contact-method"><span>WHATSAPP</span><a href={inquiries()} target="_blank" rel="noreferrer">{BRAND.phone} <ArrowUpRight size={17}/></a></div><div className="contact-method"><span>EMAIL</span><a href={'mailto:'+BRAND.email}>{BRAND.email}<ArrowUpRight size={17}/></a></div><div className="contact-method"><span>INSTAGRAM</span><a href={BRAND.instagramUrl} target="_blank" rel="noreferrer">{BRAND.instagram} <ArrowUpRight size={17}/></a></div><div className="contact-method"><span>ATELIER</span><p>{BRAND.address}</p><a target="_blank" rel="noreferrer" href={BRAND.googleMapsUrl}>Lihat lokasi <ArrowUpRight size={15}/></a></div></div>
 <form className="contact-form" onSubmit={send}><h2>Send your <em>enquiry.</em></h2><p>Form ini membuka WhatsApp dengan pesan terisi. Tidak ada data yang disimpan di server website.</p><label>YOUR NAME <input required minLength="2" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Nama Anda"/></label><label>ENQUIRY TYPE <select value={form.purpose} onChange={e=>setForm({...form,purpose:e.target.value})}><option>Koleksi produk</option><option>Pesanan bespoke / gifting</option><option>Kolaborasi</option><option>Pertanyaan material & ekspor</option></select></label><label>YOUR MESSAGE <textarea required rows="5" minLength="8" placeholder="Ceritakan kebutuhan Anda..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/></label><button type="submit" className="primary-dark">Continue to WhatsApp <ArrowUpRight size={19}/></button></form></div></section></>;
}
function Legal({type,go}){
 const privacy=type==='privacy';return <><HeadSEO title={privacy?'Privacy':'Terms & Enquiries'}/><section className="wrap legal-page"><Tag>INFORMATION / NINAUKA</Tag><h1>{privacy?'Privacy':'Terms of'} <em>{privacy?'notice':'enquiry'}</em></h1><p className="legal-lead">{privacy?'Informasi mengenai penggunaan data ketika Anda menghubungi atelier.':'Informasi dasar tentang katalog dan proses pemesanan melalui konsultasi.'}</p><h2>{privacy?'Formulir dan kanal komunikasi':'Katalog dan ketersediaan'}</h2><p>{privacy?'Formulir di halaman kontak hanya menyiapkan pesan untuk WhatsApp. Website ini tidak mengirim atau menyimpan isi formulir ke database internal. Komunikasi selanjutnya diproses melalui platform pilihan Anda sesuai kebijakan platform tersebut.':'Informasi produk di website bersifat katalog. Foto, bahan, dimensi, harga, waktu produksi, ketersediaan, dan opsi personalisasi perlu dikonfirmasi melalui komunikasi langsung dengan atelier sebelum transaksi.'}</p><h2>{privacy?'Data teknis':'Pembayaran dan pengiriman'}</h2><p>{privacy?'Hosting dan penyedia layanan analitik pihak ketiga, apabila ditambahkan oleh pengelola saat deployment, dapat mengolah data teknis sesuai kebijakan masing-masing. Versi patch ini tidak memasang pelacak pihak ketiga.':'Website ini tidak memproses pembayaran. Ketentuan pembayaran, pengiriman, retur, serta dokumen ekspor/import akan disampaikan dalam penawaran atau kesepakatan terpisah sesuai pesanan dan ketentuan hukum yang berlaku.'}</p><h2>Kontak</h2><p>Untuk pertanyaan lebih lanjut, hubungi <a href={'mailto:'+BRAND.email}>{BRAND.email}</a>.</p><LinkArrow to="/contact" go={go}>Hubungi atelier</LinkArrow></section></>;
}
function NotFound({go}){return <><HeadSEO title="Page not found"/><section className="not-found wrap"><Tag>404 / THIS PAGE HAS MOVED</Tag><h1>Not everything<br/><em>is where we left it.</em></h1><p>Halaman tidak tersedia. Jelajahi koleksi atau kembali ke beranda.</p><LinkArrow to="/" go={go}>Back to the maison</LinkArrow></section></>}
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
 return <div className="ninauka"><a className="skip-link" href="#main-content">Lewati navigasi</a><Header path={path} go={go}/><main id="main-content" key={path}>{page}</main><Footer go={go}/></div>
}
