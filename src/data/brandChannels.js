/**
 * NINAUKA public presence — verification notes, 18 Oct 2026.
 * Verified handle/name in BRILiaNpreneur 2025 catalogue (pp 115–116), and
 * contact address/WA cross-referenced with PLN UID Banten BEWARA.
 * Platform search links are explicitly labelled SEARCH; never imply a direct
 * verified account URL when the account's canonical ID cannot be confirmed.
 */
const address = 'Ninauka, Nusaloka Sektor XIV-4, Blok J9/8, Jalan Jawa V, BSD City, Tangerang Selatan, Banten 15310';
export const CHANNELS = [
 {id:'instagram',name:'Instagram',handle:'@ninauka_n2k',url:'https://www.instagram.com/ninauka_n2k/',mode:'direct',label:'Buka profil Instagram',description:'Koleksi, aktivitas, dan kabar atelier.',color:'rose'},
 {id:'facebook',name:'Facebook',handle:'Ninauka Unik Kreasi',url:'https://www.facebook.com/search/pages/?q=Ninauka%20Unik%20Kreasi',mode:'search',label:'Cari halaman di Facebook',description:'Nama halaman tercantum di katalog resmi; tautan ini membuka pencarian.'},
 {id:'shopee',name:'Shopee',handle:'NINAUKA · katalog produk',url:'https://shopee.co.id/Ninauka-Imut-Bag-i.140193665.29674690557',mode:'listing',label:'Buka produk Ninauka di Shopee',description:'Tautan produk Ninauka ditemukan; bukan klaim bahwa seluruh katalog tersedia.'},
 {id:'tokopedia',name:'Tokopedia',handle:'Pencarian toko “ninauka”',url:'https://www.tokopedia.com/search?st=shop&q=ninauka',mode:'search',label:'Cari Ninauka di Tokopedia',description:'Nama toko tercantum di katalog; URL toko langsung belum dapat diverifikasi.'},
 {id:'maps',name:'Google Maps',handle:'Nusaloka · BSD City',url:'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(address),mode:'search',label:'Temukan alamat di Google Maps',description:'Pencarian berdasarkan alamat katalog. Konfirmasi janji kunjungan dahulu.'},
 {id:'catalogue',name:'Direktori Brand',handle:'BRILiaNpreneur 2025',url:'https://storage.googleapis.com/brilianpreneur2023-storage/bp25-prod-assets/catalogue/BP25_CATALOGUE_ACCESSORIES%20BEAUTY_270125.pdf#page=116',mode:'source',label:'Lihat katalog brand publik',description:'Rujukan profil brand, narasi, dan informasi kanal yang dipublikasikan.'},
];
export const PRIMARY_CHANNELS=CHANNELS.filter(c=>c.id!=='catalogue');
export const PUBLIC_SAME_AS=CHANNELS.filter(c=>c.mode==='direct').map(c=>c.url);
