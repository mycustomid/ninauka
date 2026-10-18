import fs from 'node:fs';
import path from 'node:path';
import {PRODUCTS, CRAFTSMANSHIP_CHAPTERS, BRAND} from '../src/data/ninaukaData.js';
import {ARTICLES} from '../src/data/journal.js';
const failures=[];
const paths=[];
for(const p of PRODUCTS){
 if(!p.id||!p.title)failures.push(`Produk tanpa id atau title: ${JSON.stringify(p).slice(0,30)}`);
 paths.push(p.image,...(p.gallery||[]));
}
for(const a of ARTICLES){
 if(!a.slug||!a.sections?.length)failures.push(`Artikel tidak lengkap: ${a.slug}`);
 paths.push(a.image,a.secondary);
}
for(const c of CRAFTSMANSHIP_CHAPTERS){paths.push(c.image,c.secondaryImage)}
paths.push(BRAND.heroImage,BRAND.logo,BRAND.logoDark,BRAND.favicon,'/images/story/atelier-bsd-city.jpg','/images/story/atelier-craftsman.jpg','/images/story/curated-exhibition.jpg','/images/story/exclusive-luxury-packaging.jpg','/brand/ninauka-bestseller-2026.jpg','/brand/ninauka-exclusive-packaging.jpg');
for(const f of new Set(paths.filter(Boolean))){
 if(!fs.existsSync(path.join('public',f.slice(1))))failures.push(`Asset tidak ditemukan: public${f}`)
}
if(new Set(PRODUCTS.map(x=>x.id)).size!==PRODUCTS.length)failures.push('Ada product id duplikat');
if(new Set(ARTICLES.map(x=>x.slug)).size!==ARTICLES.length)failures.push('Ada slug artikel duplikat');
console.log(`Inventory: ${PRODUCTS.length} product pages, ${ARTICLES.length} journal articles, ${new Set(paths).size} media references.`);
if(failures.length){console.error('FAIL\n'+failures.map(x=>' - '+x).join('\n'));process.exit(1)}
console.log('PASS: product, journal, and media references have been checked against the repository.');
