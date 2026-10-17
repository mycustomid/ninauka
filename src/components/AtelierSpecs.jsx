import React from 'react';
import { ATELIER_SPECS, BRAND } from '../data/ninaukaData';
import { Globe2, FileText, CheckCircle2, Building2, Truck, ShieldCheck } from 'lucide-react';

export default function AtelierSpecs() {
  const icons = [Building2, Globe2, ShieldCheck, Truck];

  return (
    <section id="atelier-specs" className="py-24 relative bg-[#0a0a09] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-cinzel">
            <Globe2 className="w-4 h-4" />
            <span>Commercial Specifications</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#fbf8f5] font-light">
            International Export Dossier.
          </h2>
          <p className="text-xs sm:text-sm text-[#8e8980] font-light">
            Engineered for high-end international boutiques, luxury department stores, and private label procurement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ATELIER_SPECS.map((spec, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#121110] border border-white/5 hover:border-[#c5a880]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c5a880] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8e8980] block font-cinzel">
                    {spec.title}
                  </span>
                  <h4 className="font-serif-luxury text-xl text-[#fbf8f5] mt-1 mb-2 font-normal">
                    {spec.value}
                  </h4>
                  <p className="text-xs text-[#a39e93] font-light leading-relaxed">
                    {spec.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified TEI 2026 Standards</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
