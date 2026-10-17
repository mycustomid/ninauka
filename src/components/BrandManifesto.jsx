import React from 'react';
import { BRAND } from '../data/ninaukaData';
import { MapPin, Award, HeartHandshake } from 'lucide-react';

export default function BrandManifesto() {
  return (
    <section id="manifesto" className="py-28 relative overflow-hidden bg-[#0a0a09]">
      {/* Decorative hairline line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#c5a880]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Atelier Photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Primary Image: Atelier Handcraft */}
              <div className="relative rounded-2xl overflow-hidden border border-[#c5a880]/30 aspect-[3/4] bg-[#141413] shadow-2xl">
                <img
                  src="/images/story/atelier-craftsman.jpg"
                  alt="Titik Kurniasih - Atelier Ninauka Nusaloka BSD City"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0d] via-transparent to-transparent opacity-70" />
                
                {/* Gold Seal Stamp */}
                <div className="absolute top-4 right-4 p-3 rounded-full bg-[#0e0e0d]/90 backdrop-blur-md border border-[#c5a880]/50 text-center">
                  <div className="text-[9px] uppercase tracking-widest text-[#c5a880] font-cinzel">Atelier</div>
                  <div className="text-[10px] font-bold text-[#fbf8f5]">NUSALOKA</div>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-[#0e0e0d]/85 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2 text-[#c5a880] text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Nusaloka BSD City, Sektor XIV-4 Blok J9/8</span>
                  </div>
                  <p className="text-[11px] text-[#a39e93] mt-1">
                    Penyesetan kulit presisi, pemolesan tepi manual, dan perakitan pusaka di Jl. Jawa V, Tangerang Selatan.
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Image: Curated Exhibition */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-48 h-56 rounded-xl overflow-hidden border-2 border-[#c5a880]/40 shadow-2xl bg-[#1c1b19]">
                <img
                  src="/images/story/curated-exhibition.jpg"
                  alt="Pameran Kurasi Ninauka"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                  <span className="text-[9px] uppercase tracking-wider text-[#c5a880] font-medium">
                    Panggung TEI 2026, INACRAFT &amp; KriyaNusa
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#c5a880]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-cinzel">
                Falsafah Atelier &amp; Sang Pendiri
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#fbf8f5] leading-tight">
              Ketika Tenun Pusaka Nusantara <br />
              <span className="italic font-normal gold-gradient-text">
                Menyatu dengan Seni Kriya Kulit Tinggi.
              </span>
            </h2>

            <p className="text-base text-[#b8b2a7] font-light leading-relaxed">
              Didirikan oleh Ibu <strong className="text-[#fbf8f5] font-normal">Titik Kurniasih</strong> di kawasan Nusaloka, BSD City (Sektor XIV-4, Blok J9/8, Jl. Jawa V, Tangerang Selatan), <strong className="text-[#fbf8f5] font-normal">Ninauka</strong> lahir dari dedikasi luhur: mengangkat kemurnian material kulit dan wastra tradisional Indonesia menjadi karya adibusana berkelas museum yang sejajar dengan rumah mode dunia.
            </p>

            <p className="text-sm text-[#9e998e] font-light leading-relaxed">
              Setiap mahakarya Ninauka memadukan kulit ular piton asli bersertifikat konservasi internasional serta kulit sapi samak nabati pilihan dengan tenun tangan <strong className="text-[#d1cbc2] font-normal">Baduy Gedogan</strong> dari Kanekes Banten, serat daun liar <strong className="text-[#d1cbc2] font-normal">Ulap Doyo</strong> dari suku Dayak Benuag Kalimantan Timur, <strong className="text-[#d1cbc2] font-normal">Tenun Inuh Lampung</strong>, hingga eksplorasi <strong className="text-[#d1cbc2] font-normal">Batik, Ecoprint</strong>, dan serat alam Nusantara. Konsistensi mutu ini mengantarkan Ninauka meraih penghargaan juara di ajang <strong className="text-[#d1cbc2] font-normal">Tangsel Digifest</strong>, tampil memukau di pameran <strong className="text-[#d1cbc2] font-normal">INACRAFT</strong> serta <strong className="text-[#d1cbc2] font-normal">KriyaNusa</strong>, terdaftar di ekosistem <strong className="text-[#d1cbc2] font-normal">PaDi UMKM</strong>, dan terpilih sebagai delegasi ekspor resmi pada <strong className="text-[#d1cbc2] font-normal">Trade Expo Indonesia (TEI 2026)</strong>.
            </p>

            {/* Quote Block */}
            <div className="my-6 p-6 rounded-2xl bg-[#141413] border-l-2 border-[#c5a880] border-y border-r border-white/5 space-y-3">
              <p className="font-serif-luxury italic text-lg sm:text-xl text-[#e8e4dc] leading-snug">
                "Kami tidak sekadar merangkai tas tangan; kami menjaga napas budaya para penenun perempuan Baduy, perajin serat Dayak, dan komunitas kriya Nusantara, lalu memuliakannya melalui disiplin seni kulit yang tak lekang oleh zaman."
              </p>
              <div className="flex items-center justify-between pt-2">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#c5a880]">
                    Titik Kurniasih
                  </div>
                  <div className="text-[10px] text-[#8e8980]">
                    Pendiri &amp; Direktur Kreatif, Ninauka
                  </div>
                </div>
                <div className="font-serif-luxury text-2xl text-[#c5a880]/40 italic select-none">
                  Ninauka
                </div>
              </div>
            </div>

            {/* Atelier Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <Award className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#fbf8f5]">
                    Kurasi TEI 2026, INACRAFT &amp; Digifest
                  </h4>
                  <p className="text-[11px] text-[#8e8980] mt-0.5">
                    Delegasi ekspor Disperindag Tangerang Selatan, eksibitor KriyaNusa &amp; INACRAFT, serta juara Tangsel Digifest.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <HeartHandshake className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#fbf8f5]">
                    Pemberdayaan Perajin Perempuan
                  </h4>
                  <p className="text-[11px] text-[#8e8980] mt-0.5">
                    Mendukung penenun adat Nusantara dan perajin lokal melalui kemitraan berkeadilan serta jaringan PaDi UMKM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
