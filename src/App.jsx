import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandManifesto from './components/BrandManifesto';
import CollectionsSection from './components/CollectionsSection';
import CraftsmanshipDossier from './components/CraftsmanshipDossier';
import BespokeGifting from './components/BespokeGifting';
import AtelierSpecs from './components/AtelierSpecs';
import ConciergeSection from './components/ConciergeSection';
import Footer from './components/Footer';
import { BRAND } from './data/ninaukaData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0e0e0d] text-[#e8e4dc] relative selection:bg-[#c5a880] selection:text-[#0e0e0d]">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Exhibition */}
        <Hero />

        {/* 2. Brand Manifesto & Founder Story */}
        <BrandManifesto />

        {/* 3. The Haute Collections (Filterable Grid + Inspection Modal) */}
        <CollectionsSection />

        {/* 4. Craftsmanship & Heritage Dossier */}
        <CraftsmanshipDossier />

        {/* 5. Bespoke VIP Packaging & Corporate Gifting */}
        <BespokeGifting />

        {/* 6. Technical Specifications & Export Readiness */}
        <AtelierSpecs />

        {/* 7. Private Concierge Consultation & Order Form */}
        <ConciergeSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Concierge Action Trigger */}
      <aside aria-label="Layanan Concierge Cepat" className="fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${BRAND.whatsappNumber}?text=Halo%20Ninauka%20Atelier,%20saya%20ingin%20berkonsultasi%20mengenai%20koleksi%20tas%20kulit%20eksotis%20dan%20wastra%20Nusantara.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-[#1c1b19]/90 backdrop-blur-md border border-[#c5a880]/40 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-[#c5a880]"
        >
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-[#c5a880] text-[#0e0e0d] flex items-center justify-center font-bold shadow-md">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#1c1b19] animate-pulse" />
          </div>
          <div className="hidden sm:block text-left pr-1">
            <span className="block text-[9px] uppercase tracking-widest text-[#c5a880] font-cinzel">
              Concierge Privat
            </span>
            <span className="block text-xs font-semibold text-[#fbf8f5]">
              Hubungi Atelier
            </span>
          </div>
        </a>
      </aside>
    </div>
  );
}
