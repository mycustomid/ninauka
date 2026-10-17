import React, { useState } from 'react';
import { CRAFTSMANSHIP_CHAPTERS } from '../data/ninaukaData';
import { Sparkles, ArrowRight, ShieldCheck, Leaf, Feather } from 'lucide-react';

export default function CraftsmanshipDossier() {
  const [activeChapterIdx, setActiveChapterIdx] = useState(0);
  const chapter = CRAFTSMANSHIP_CHAPTERS[activeChapterIdx];

  const icons = [Leaf, Feather, ShieldCheck, Sparkles];

  return (
    <section id="craftsmanship" className="py-28 relative bg-[#0a0a09] border-t border-[#c5a880]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181716] border border-[#c5a880]/25 text-xs text-[#c5a880] tracking-[0.25em] uppercase font-cinzel">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ensiklopedia Savoir-Faire</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#fbf8f5]">
            Serat Pusaka &amp; Adibusana Kulit.
          </h2>
          <p className="text-sm text-[#a39e93] font-light leading-relaxed">
            Setiap tas tangan Ninauka menghormati kesabaran para empu tenun dan perajin kulit Nusantara—menyatukan serat hutan Kalimantan, Tenun Baduy Kanekes, Tenun Inuh Lampung, serta Ecoprint dengan konstruksi kulit berstandar internasional.
          </p>
        </div>

        {/* Chapter Selection Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {CRAFTSMANSHIP_CHAPTERS.map((chap, idx) => {
            const Icon = icons[idx];
            const isActive = activeChapterIdx === idx;
            return (
              <button
                key={chap.id}
                onClick={() => setActiveChapterIdx(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#1a1918] border-[#c5a880] shadow-[0_0_25px_rgba(197,168,128,0.2)]'
                    : 'bg-[#121110] border-white/5 hover:border-white/15'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#c5a880]' : 'text-[#8e8980]'}`}>
                    BAB {chap.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#c5a880]' : 'text-[#8e8980]'}`} />
                </div>
                <div>
                  <h4 className={`text-xs uppercase tracking-wider font-semibold ${isActive ? 'text-[#fbf8f5]' : 'text-[#a39e93]'}`}>
                    {chap.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Feature Panel */}
        <div className="rounded-3xl bg-[#141312] border border-[#c5a880]/25 overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Dual Photography Showcase */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#1a1918] border border-white/10 shadow-lg">
                <img
                  src={chapter.image}
                  alt={chapter.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <span className="text-[10px] uppercase tracking-wider text-[#c5a880] font-cinzel">
                    Hulu Material Alami
                  </span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#1a1918] border border-white/10 shadow-lg sm:translate-y-4">
                <img
                  src={chapter.secondaryImage}
                  alt={`${chapter.title} detail`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <span className="text-[10px] uppercase tracking-wider text-[#c5a880] font-cinzel">
                    Eksekusi Kriya Tangan
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Narrative & Sourcing Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#c5a880] px-2.5 py-1 rounded bg-[#c5a880]/10 border border-[#c5a880]/30">
                  DOSSIER BAB {chapter.number}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#8e8980]">
                  Keaslian Terverifikasi
                </span>
              </div>

              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#fbf8f5] font-light leading-tight">
                {chapter.title}
              </h3>

              <div className="text-xs uppercase tracking-widest text-[#c5a880] font-cinzel">
                {chapter.subtitle}
              </div>

              <p className="text-sm sm:text-base text-[#b8b2a7] font-light leading-relaxed">
                {chapter.body}
              </p>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
                <a
                  href="#collections"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c5a880] text-[#0e0e0d] font-semibold text-xs tracking-wider uppercase transition-all hover:bg-[#d8c19f]"
                >
                  <span>Lihat Koleksi Berbahan Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
