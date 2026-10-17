import React from 'react';
import { BRAND } from '../data/ninaukaData';
import { ArrowUp, MessageCircle, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

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
                  BSD City Atelier
                </span>
                <span className="block text-[9px] tracking-wider text-[#8e8980]">
                  Haute Maroquinerie
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8e8980] font-light leading-relaxed max-w-sm">
              Artisan luxury handbags and evening clutches blending certified exotic python skin with indigenous Dayak Doyo leaf weaving and ancient Tenun Baduy gedogan textiles. Handcrafted in Tangerang Selatan, Indonesia.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#c5a880]">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-cinzel tracking-wider text-[11px]">
                Trade Expo Indonesia (TEI 2026) Official Exhibitor
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#fbf8f5] font-cinzel">
              Maison
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#collections" className="hover:text-[#c5a880] transition-colors">Haute Collections</a></li>
              <li><a href="#manifesto" className="hover:text-[#c5a880] transition-colors">The Atelier</a></li>
              <li><a href="#craftsmanship" className="hover:text-[#c5a880] transition-colors">Savoir-Faire</a></li>
              <li><a href="#bespoke" className="hover:text-[#c5a880] transition-colors">VIP Packaging</a></li>
              <li><a href="#atelier-specs" className="hover:text-[#c5a880] transition-colors">Export Dossier</a></li>
            </ul>
          </div>

          {/* Sourcing & Ethics */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#fbf8f5] font-cinzel">
              Heritage
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-[#e8e4dc]">CITES Python Hide</span></li>
              <li><span className="text-[#e8e4dc]">Tenun Baduy Gedogan</span></li>
              <li><span className="text-[#e8e4dc]">Dayak Doyo Wild Leaf</span></li>
              <li><span className="text-[#e8e4dc]">Eco-Luxe Goni Burlap</span></li>
              <li><span className="text-[#e8e4dc]">Botanical Plant Dyes</span></li>
            </ul>
          </div>

          {/* Atelier Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#fbf8f5] font-cinzel">
              Contact &amp; Atelier
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
            &copy; {new Date().getFullYear()} NINAUKA by Titik Kurniasih. All rights reserved.
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
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
