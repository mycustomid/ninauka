/** Offline content check. Run from repository root after applying ZIP. */
import fs from 'node:fs';
import path from 'node:path';
const must = [
  'src/App.jsx', 'src/data/ninaukaData.js','src/data/journal.js','src/data/brandChannels.js',
  'src/data/edition2026.js','src/components/Heritage2026.jsx', 'src/components/Heritage2026.css',
  'public/images/editorial-2026/new-products-montage.webp','public/images/editorial-2026/bestseller-green-bag.webp'
];
let failed=0;
for(const p of must){if(!fs.existsSync(p)){console.error('MISSING:',p);failed++}}
for(const f of ['src/App.jsx','src/data/journal.js','src/components/Heritage2026.jsx','src/data/edition2026.js']){
  const content=fs.readFileSync(f,'utf8');
  const assets=[...content.matchAll(/['\"](\/images\/[\w/.-]+|\/brand\/[\w/.-]+)['\"]/g)].map(x=>x[1]);
  for(const a of assets){if(!fs.existsSync(path.join('public',a))){console.warn('Missing media in local repo:',a);failed++}}
}
const app=fs.readFileSync('src/App.jsx','utf8');
for(const route of ['/edisi-2026','/collections','/maison','/savoir-faire','/journal','/bespoke','/contact']){
 if(!app.includes(route)){console.error('MISSING ROUTE:',route);failed++}
}
if(!app.includes('<FloatingWhatsApp path={path}/>')){console.error('Missing global floating WhatsApp');failed++}
console.log(`NINAUKA V4 / ${failed ? `${failed} checks failed` : 'content references OK'}`);
process.exitCode=failed?1:0;
