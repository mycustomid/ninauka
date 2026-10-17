import React from 'react';
import { BRAND } from '../data/ninaukaData';
import { ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080807] text-[#a39e93] border-t border-[#c5a880]/20 pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={BRAND.logo}
                alt="NINAUKA"
                className="h-10 w-auto object-contain"
              />
              <div className="border-l border-[#c5a880]/30 pl-3">
                <span className="block text-[10px] tracking-[0.25em] uppercase text-[#c5a880] font-medium">
                  Atelier Nusaloka BSD
                </span>
                <span className="block text-[9px] tracking-wider text-[#8e8980]">
                  Kulit Eksotis &amp; Wastra Nusantara
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8e8980] font-light leading-relaxed max-w-sm">
              Rumah kriya tas tangan mewah dan <em>evening clutch</em> yang memadukan kulit ular piton bersertifikat CITES serta kulit sapi samak nabati dengan tenun serat daun Ulap Doyo Dayak Benuag, Tenun Baduy Gedogan, Tenun Inuh Lampung, dan Ecoprint. Dirancang di Nusaloka BSD City, Tangerang Selatan.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#c5a880]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span className="font-cinzel tracking-wider text-[11px]">
                Kurasi Resmi TEI 2026 · INACRAFT · KriyaNusa · PaDi UMKM
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#fbf8f5] font-cinzel">
              Navigasi
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#collections" className="hover:text-[#c5a880] transition-colors">Koleksi Utama</a></li>
              <li><a href="#manifesto" className="hover:text-[#c5a880] transition-colors">Kisah Atelier</a></li>
              <li><a href="#craftsmanship" className="hover:text-[#c5a880] transition-colors">Mahakarya Wastra</a></li>
              <li><a href="#bespoke" className="hover:text-[#c5a880] transition-colors">Kemasan VIP</a></li>
              <li><a href="#atelier-specs" className="hover:text-[#c5a880] transition-colors">Dossier Ekspor</a></li>
            </ul>
          </div>

          {/* Sourcing & Ethics */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#fbf8f5] font-cinzel">
              Warisan Material
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-[#e8e4dc]">Kulit Piton CITES</span></li>
              <li><span className="text-[#e8e4dc]">Tenun Baduy Gedogan</span></li>
              <li><span className="text-[#e8e4dc]">Serat Daun Ulap Doyo</span></li>
              <li><span className="text-[#e8e4dc]">Tenun Inuh &amp; Ecoprint</span></li>
              <li><span className="text-[#e8e4dc]">Goni &amp; Serat Alam</span></li>
            </ul>
          </div>

          {/* Atelier Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#fbf8f5] font-cinzel">
              Kontak &amp; Atelier
            </h4>
            <p className="text-xs text-[#8e8980] leading-relaxed">
              {BRAND.address}
            </p>
            <div className="space-y-1 pt-1 text-xs">
              <div><strong className="text-[#e8e4dc]">WhatsApp:</strong> {BRAND.phone}</div>
              <div><strong className="text-[#e8e4dc]">Email:</strong> {BRAND.email}</div>
              <div><strong className="text-[#e8e4dc]">Instagram:</strong> {BRAND.instagram}</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#736e66]">
          <div>
            &copy; {new Date().getFullYear()} NINAUKA oleh Titik Kurniasih. Hak cipta dilindungi undang-undang.
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`https://wa.me/${BRAND.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c5a880] transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c5a880] transition-colors"
            >
              Instagram
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#c5a880] hover:text-white transition-colors"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
