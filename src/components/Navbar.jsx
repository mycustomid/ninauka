import React, { useState, useEffect } from 'react';
import { BRAND } from '../data/ninaukaData';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenConcierge }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Koleksi', href: '#collections' },
    { label: 'Kisah Atelier', href: '#manifesto' },
    { label: 'Mahakarya Wastra', href: '#craftsmanship' },
    { label: 'Kemasan VIP', href: '#bespoke' },
    { label: 'Dossier Ekspor', href: '#atelier-specs' },
    { label: 'Konsultasi', href: '#concierge' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0e0e0d]/90 backdrop-blur-md py-3.5 border-b border-[#c5a880]/20 shadow-2xl'
          : 'bg-gradient-to-b from-[#0e0e0d]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo & Origin */}
        <a href="#" className="flex items-center gap-3.5 group">
          <img
            src={BRAND.logo}
            alt="NINAUKA"
            className="h-9 md:h-11 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="hidden sm:block border-l border-[#c5a880]/30 pl-3">
            <span className="block text-[10px] tracking-[0.25em] uppercase text-[#c5a880] font-medium">
              Atelier BSD City
            </span>
            <span className="block text-[9px] tracking-wider text-[#a39e93]">
              Kulit Eksotis &amp; Wastra
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-[0.18em] uppercase text-[#d1cbc2] hover:text-[#c5a880] transition-colors duration-300 font-medium relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a880] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button & WhatsApp indicator */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1c1b19] border border-[#c5a880]/25 text-[11px] text-[#c5a880] tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Kurasi TEI 2026</span>
          </div>

          <a
            href={`https://wa.me/${BRAND.whatsappNumber}?text=Halo%20Ninauka%20Atelier,%20saya%20ingin%20berkonsultasi%20mengenai%20koleksi%20tas%20kulit%20eksotis%20dan%20wastra%20Nusantara.`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#c5a880] text-[#0e0e0d] text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#d8c19f] hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Konsultasi</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#e8e4dc] hover:text-[#c5a880] transition-colors"
          aria-label="Buka menu navigasi"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0e0e0d]/98 backdrop-blur-xl border-b border-[#c5a880]/30 px-6 py-8 transition-all">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-[0.25em] uppercase text-[#e8e4dc] hover:text-[#c5a880] py-1 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`https://wa.me/${BRAND.whatsappNumber}?text=Halo%20Ninauka%20Atelier,%20saya%20ingin%20berkonsultasi%20koleksi.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#c5a880] text-[#0e0e0d] font-semibold text-xs tracking-widest uppercase"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Concierge Privat</span>
              </a>
              <p className="text-center text-[10px] text-[#a39e93] tracking-widest uppercase mt-2">
                Atelier Nusaloka BSD City · Sektor XIV-4 Blok J9/8
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
