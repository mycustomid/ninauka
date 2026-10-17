import React from 'react';
import { BRAND } from '../data/ninaukaData';
import { Gift, ShieldCheck, Sparkles, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function BespokeGifting() {
  const bespokeFeatures = [
    {
      title: "Handcrafted Rigid Magnetic Box",
      desc: "Engineered from thick bookbinder board wrapped in tactile matte noir paper with subtle gold-foil debossing."
    },
    {
      title: "Embroidered Velvet Dust Cover",
      desc: "Breathable plush velvet pouch safeguarding delicate python scales and handwoven fibers from friction and ambient humidity."
    },
    {
      title: "Certificate of Authenticity & CITES",
      desc: "Individually serial-numbered documentation certifying genuine origin, sustainable harvesting, and legal export status."
    },
    {
      title: "Personalized VIP Monogramming",
      desc: "Custom initials or corporate emblem hot-stamped in 24k gold foil or blind-debossed onto dedicated leather hangtags."
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
                alt="Ninauka Exclusive Luxury Packaging"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-6 inset-x-6 p-5 rounded-2xl bg-[#0e0e0d]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2 text-[#c5a880] text-xs font-cinzel uppercase tracking-widest">
                  <Gift className="w-4 h-4" />
                  <span>The Exclusive Presentation Suite</span>
                </div>
                <p className="text-xs text-[#b8b2a7] mt-1 font-light">
                  Standard accompaniment for all Kelly Bags, Minaudières, and bespoke VIP commissions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Bespoke Perks */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#c5a880]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-cinzel">
                Bespoke &amp; VIP Gifting
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#fbf8f5] leading-tight">
              An Unboxing Experience <br />
              <span className="italic font-normal gold-gradient-text">
                Befitting Royalty.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#b8b2a7] font-light leading-relaxed">
              True luxury extends far beyond the handbag itself. Every Ninauka creation is cocooned within our signature presentation suite, meticulously engineered to make each acquisition an indelible celebration of Indonesian artisanal triumph.
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
                href={`https://wa.me/${BRAND.whatsappNumber}?text=Halo%20Ninauka,%20saya%20tertarik%20dengan%20layanan%20VIP%20Corporate%20Gifting%20dan%20eksklusif%20hampers.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#c5a880] text-[#0e0e0d] font-semibold text-xs tracking-wider uppercase transition-all hover:bg-[#d8c19f] shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire Corporate VIP Gifting</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
