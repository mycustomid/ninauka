/** Optional: run SITE_URL=https://your-live-domain.example node scripts/generate-sitemap.mjs */
import fs from 'node:fs';
import {PRODUCTS} from '../src/data/ninaukaData.js';
import {ARTICLES} from '../src/data/journal.js';
const base=(process.env.SITE_URL||'').replace(/\/$/,'');
if(!/^https:\/\/[a-z0-9.-]+(?::\d+)?$/i.test(base)){
 console.error('Set SITE_URL to your real HTTPS production domain, e.g. SITE_URL=https://example.com');
 process.exit(1)
}
const routes=['/','/collections','/maison','/savoir-faire','/journal','/bespoke','/contact',...PRODUCTS.map(p=>'/pieces/'+p.id),...ARTICLES.map(a=>'/journal/'+a.slug)];
const xml='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+routes.map(r=>`  <url><loc>${base}${r}</loc></url>`).join('\n')+'\n</urlset>\n';
fs.mkdirSync('public',{recursive:true});fs.writeFileSync('public/sitemap.xml',xml);console.log(`Generated sitemap: ${routes.length} routes.`);
