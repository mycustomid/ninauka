import React from 'react';
import { BRAND } from '../data/ninaukaData';
import { Gift, Sparkles, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function BespokeGifting() {
  const bespokeFeatures = [
    {
      title: "Kotak Magnetik Kaku (Rigid Box) Buatan Tangan",
      desc: "Dirancang menggunakan papan penjilidan tebal berbalut kertas matte noir bertekstur lembut dengan aksen embos foil emas yang elegan."
    },
    {
      title: "Kantung Pelindung Beludru (Velvet Dust Bag) Bersulam",
      desc: "Kantung beludru berpori lembut yang menjaga kemilau sisik kulit piton dan kehalusan serat tenun dari gesekan serta kelembapan ruang."
    },
    {
      title: "Sertifikat Keaslian & Kepatuhan CITES",
      desc: "Dokumen bernomor seri tunggal yang mengesahkan keaslian material, kurasi kriya tangan, serta kelayakan ekspor resmi."
    },
    {
      title: "Personalisasi Monogram VIP & Suvenir PaDi UMKM",
      desc: "Grafir inisial pribadi atau lambang instansi/korporasi dalam foil emas 24k pada tag kulit khusus—melayani pula pengadaan B2B dan diplomatik."
    }
  ];

  return (
    <section id="bespoke" className="py-28 relative bg-[#0e0e0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image of Exclusive Packaging */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#c5a880]/30 shadow-2xl bg-[#141413] group">
              <img
                src="/images/story/exclusive-luxury-packaging.jpg"
                alt="Kemasan Eksklusif Ninauka"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-6 inset-x-6 p-5 rounded-2xl bg-[#0e0e0d]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2 text-[#c5a880] text-xs font-cinzel uppercase tracking-widest">
                  <Gift className="w-4 h-4" />
                  <span>Rangkaian Kemasan Eksklusif</span>
                </div>
                <p className="text-xs text-[#b8b2a7] mt-1 font-light">
                  Kelengkapan standar untuk seluruh seri Kelly Bag, Minaudière, serta pesanan khusus VIP &amp; diplomatik.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Bespoke Perks */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#c5a880]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-cinzel">
                Kemasan VIP &amp; Suvenir Korporat
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#fbf8f5] leading-tight">
              Seni Persembahan <br />
              <span className="italic font-normal gold-gradient-text">
                Berstandar Bangsawan.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#b8b2a7] font-light leading-relaxed">
              Kemewahan sejati hadir sejak kotak pertama kali disentuh. Setiap karya Ninauka diselimuti dalam rangkaian kemasan eksklusif kami, menjadikan setiap akuisisi maupun pemberian cendera mata kenegaraan sebuah perayaan atas keunggulan kriya Indonesia.
            </p>

            {/* Feature List */}
            <div className="space-y-4 pt-2">
              {bespokeFeatures.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#141413] border border-white/5 hover:border-[#c5a880]/30 transition-colors"
                >
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#fbf8f5] flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>{item.title}</span>
                  </h4>
                  <p className="text-xs text-[#8e8980] mt-1 font-light leading-relaxed pl-5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href={`https://wa.me/${BRAND.whatsappNumber}?text=Halo%20Ninauka%20Atelier,%20saya%20tertarik%20dengan%20layanan%20VIP%20Corporate%20Gifting,%20suvenir%20diplomatik,%20dan%20hampers%20eksklusif.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#c5a880] text-[#0e0e0d] font-semibold text-xs tracking-wider uppercase transition-all hover:bg-[#d8c19f] shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi Bingkisan VIP &amp; Korporat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
