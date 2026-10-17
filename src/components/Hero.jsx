import React, { useState } from 'react';
import { BRAND, STATS } from '../data/ninaukaData';
import { ArrowDownRight, Sparkles, ShieldCheck, Feather, Compass } from 'lucide-react';

export default function Hero({ onSelectProduct }) {
  const featuredPieces = [
    {
      code: "KE.01",
      name: "Excellence Kelly Bag Python",
      category: "Kulit Piton Eksotis Bersertifikat CITES",
      dim: "26 x 7 x 15 cm",
      image: "/images/products/kelly-ke01-front.jpg",
      note: "Mahakarya Utama · Kunci Putar & Clochette Berlapis Emas"
    },
    {
      code: "MA.03",
      name: "Python Minaudière Clutch",
      category: "Edisi Malam & Karpet Merah",
      dim: "16 x 5 x 9 cm",
      image: "/images/products/minaudiere-ma03-hero.jpg",
      note: "Rangka Permata Kaku · Pengait Kisslock Berukir"
    },
    {
      code: "DE.01",
      name: "Tas Amplop Tenun Ulap Doyo",
      category: "Serat Daun Doyo Liar Dayak Benuag",
      dim: "28 x 6 x 18 cm",
      image: "/images/products/doyo-envelope-front.jpg",
      note: "Pewarna Nabati Hutan · Penutup Kulit Piton Asli"
    }
  ];

  const [activeHeroIdx, setActiveHeroIdx] = useState(0);
  const activePiece = featuredPieces[activeHeroIdx];

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-between">
      {/* Background Ambience & Subtle Radial Gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#c5a880]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#8c5339]/12 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#262420_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full my-auto">
        {/* Top Eyebrow Tag */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#c5a880]" />
          <span className="text-xs tracking-[0.3em] uppercase text-[#c5a880] font-medium font-cinzel">
            Rumah Kriya Adibusana · Nusaloka, BSD City
          </span>
          <span className="text-[10px] tracking-widest px-2.5 py-0.5 rounded-full bg-[#1e1c19] text-[#d6c7b2] border border-[#c5a880]/20">
            Kurasi TEI 2026 · INACRAFT &amp; KriyaNusa
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Manifesto */}
          <div className="lg:col-span-7 space-y-7">
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#fbf8f5] leading-[1.08]">
              Mahakarya Kulit Eksotis <br />
              <span className="italic font-normal gold-gradient-text">
                &amp; Warisan Wastra Nusantara.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#b8b2a7] font-light leading-relaxed max-w-2xl">
              Dari atelier privat kami di Nusaloka, BSD City, Tangerang Selatan, Ninauka mengolah kekayaan alam paling langka di Indonesia—kulit ular piton bersertifikat <span className="text-[#fbf8f5] font-normal">CITES</span>, kesakralan <span className="text-[#fbf8f5] font-normal">Tenun Baduy Gedogan</span>, serat liar <span className="text-[#fbf8f5] font-normal">Ulap Doyo Kalimantan Timur</span>, hingga <span className="text-[#fbf8f5] font-normal">Tenun Inuh Lampung</span>—menjadi tas tangan dan <em>evening clutch</em> berstandar kolektor dunia yang telah dikurasi di panggung INACRAFT, KriyaNusa, dan Trade Expo Indonesia 2026.
            </p>

            {/* Micro Credibility Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-xl">
              <div className="p-3 rounded-lg bg-[#141413] border border-white/5 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#c5a880] shrink-0" />
                <div>
                  <div className="text-[11px] font-semibold text-[#e8e4dc]">Sertifikasi CITES</div>
                  <div className="text-[9px] text-[#8e8980]">Kulit Piton Lestari</div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#141413] border border-white/5 flex items-center gap-2.5">
                <Feather className="w-4 h-4 text-[#c5a880] shrink-0" />
                <div>
                  <div className="text-[11px] font-semibold text-[#e8e4dc]">Tenun Gedogan</div>
                  <div className="text-[9px] text-[#8e8980]">Adat Baduy Kanekes</div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#141413] border border-white/5 flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#c5a880] shrink-0" />
                <div>
                  <div className="text-[11px] font-semibold text-[#e8e4dc]">Serat Ulap Doyo</div>
                  <div className="text-[9px] text-[#8e8980]">Dayak Kalimantan Timur</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#collections"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#c5a880] text-[#0e0e0d] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#d8c19f] hover:shadow-[0_0_30px_rgba(197,168,128,0.35)]"
              >
                <span>Jelajahi Koleksi Utama</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${BRAND.whatsappNumber}?text=Halo%20Ninauka%20Atelier,%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20koleksi%20tas%20kulit%20eksotis%20dan%20wastra%20Nusantara.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-[#c5a880]/30 text-[#e8e4dc] hover:text-[#c5a880] hover:border-[#c5a880] text-xs tracking-[0.2em] uppercase transition-all duration-300"
              >
                <span>Konsultasi Privat</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Featured Product Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#c5a880]/30 via-transparent to-[#8c5339]/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-[#141312] border border-[#c5a880]/30 overflow-hidden shadow-2xl">
                {/* Image Showcase */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1918]">
                  <img
                    src={activePiece.image}
                    alt={activePiece.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0d] via-transparent to-transparent opacity-80" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e0e0d]/80 backdrop-blur-md border border-[#c5a880]/30 text-[10px] tracking-widest uppercase text-[#c5a880]">
                    <Sparkles className="w-3 h-3 text-[#c5a880]" />
                    <span>{activePiece.code}</span>
                  </div>

                  {/* Bottom Information Overlay */}
                  <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-[#0e0e0d]/85 backdrop-blur-md border border-white/10">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[#c5a880]">
                          {activePiece.category}
                        </span>
                        <h3 className="font-serif-luxury text-xl font-normal text-[#fbf8f5]">
                          {activePiece.name}
                        </h3>
                        <p className="text-xs text-[#a39e93] mt-0.5">{activePiece.note}</p>
                      </div>
                      <span className="text-[11px] font-mono px-2 py-1 rounded bg-white/5 text-[#d1cbc2] border border-white/10 shrink-0">
                        {activePiece.dim}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Switcher Tabs at Bottom of Card */}
                <div className="p-3 bg-[#11100f] border-t border-white/5 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                    {featuredPieces.map((p, idx) => (
                      <button
                        key={p.code}
                        onClick={() => setActiveHeroIdx(idx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          activeHeroIdx === idx
                            ? 'bg-[#c5a880] text-[#0e0e0d]'
                            : 'bg-white/5 text-[#a39e93] hover:text-[#e8e4dc]'
                        }`}
                      >
                        {p.code}
                      </button>
                    ))}
                  </div>

                  <a
                    href="#collections"
                    className="text-[11px] text-[#c5a880] hover:underline tracking-wider uppercase font-medium flex items-center gap-1 shrink-0 px-2"
                  >
                    <span>Semua Karya</span>
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Stats Strip */}
      <div className="mt-16 border-y border-[#c5a880]/15 bg-[#121110]/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="space-y-1 group">
              <div className="font-serif-luxury text-3xl sm:text-4xl text-[#c5a880] font-light">
                {stat.number}
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold text-[#fbf8f5]">
                {stat.label}
              </div>
              <p className="text-[11px] text-[#8e8980] leading-snug">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
