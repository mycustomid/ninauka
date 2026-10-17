import React, { useState } from 'react';
import { BRAND } from '../data/ninaukaData';
import { X, MessageCircle, Mail, Sparkles, CheckCircle2, Ruler, ShieldCheck, Clock } from 'lucide-react';

export default function ProductDetailModal({ product, onClose }) {
  if (!product) return null;

  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  const whatsappMessage = encodeURIComponent(
    `Halo Ninauka Atelier, saya sangat tertarik dengan mahakarya berikut:\n\n` +
    `• Nama Karya: ${product.title}\n` +
    `• Kode Koleksi: ${product.code}\n` +
    `• Dimensi: ${product.dimensions}\n` +
    `• Kategori Material: ${product.categoryLabel}\n\n` +
    `Mohon informasi mengenai harga resmi, ketersediaan stok/pesanan khusus (made-to-order), serta opsi personalisasi monogram. Terima kasih.`
  );

  const emailSubject = encodeURIComponent(`Permintaan Informasi Koleksi Ninauka: ${product.title} (${product.code})`);
  const emailBody = encodeURIComponent(
    `Kepada Yth. Tim Kurator Ninauka Atelier,\n\nSaya ingin menanyakan informasi lebih lanjut mengenai mahakarya berikut:\n` +
    `Nama Karya: ${product.title} (${product.code})\n` +
    `Dimensi: ${product.dimensions}\n\n` +
    `Mohon kirimkan rincian penawaran harga, estimasi waktu pengerjaan, serta opsi pengiriman/ekspor.\n\nSalam hormat,\n[Nama Anda]`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#121110] border border-[#c5a880]/30 shadow-2xl overflow-hidden z-10 my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#1c1b19]/90 text-[#e8e4dc] hover:text-[#c5a880] border border-white/10 transition-colors"
          aria-label="Tutup jendela detail"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Image Showcase with Angle Selector */}
          <div className="md:col-span-6 bg-[#171615] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#100f0e] border border-white/10">
              <img
                src={images[activeImgIdx]}
                alt={`${product.title} sudut ${activeImgIdx + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0e0e0d]/80 backdrop-blur-sm border border-[#c5a880]/30 text-[10px] tracking-widest uppercase text-[#c5a880] font-cinzel">
                {product.code}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIdx(idx)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      activeImgIdx === idx ? 'border-[#c5a880]' : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Sudut ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#8e8980]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Fotografi Asli Karya Atelier</span>
              </span>
              <span>Nusaloka, BSD City</span>
            </div>
          </div>

          {/* Right Column: Product Dossier & Concierge Action */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-cinzel">
                  {product.categoryLabel}
                </span>
                <span className="text-white/20">•</span>
                <span className="text-[10px] uppercase tracking-wider text-[#a39e93] px-2 py-0.5 rounded bg-white/5">
                  {product.badge}
                </span>
              </div>

              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#fbf8f5] mt-1.5">
                {product.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#b8b2a7] font-light mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Specifications Card */}
              <div className="mt-6 space-y-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                <div className="flex items-start gap-2.5">
                  <Ruler className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8e8980] block text-[10px] uppercase tracking-wider">Dimensi</span>
                    <span className="text-[#e8e4dc] font-mono">{product.dimensions}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8e8980] block text-[10px] uppercase tracking-wider">Material &amp; Penyelesaian</span>
                    <span className="text-[#e8e4dc]">{product.materials}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8e8980] block text-[10px] uppercase tracking-wider">Estimasi Pengerjaan</span>
                    <span className="text-[#c5a880]">{product.leadTime}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8e8980] block text-[10px] uppercase tracking-wider">Kelengkapan Kemasan</span>
                    <span className="text-[#e8e4dc]">
                      Kotak presentasi magnetik kaku (rigid box), kantung pelindung beludru (velvet dust bag), dan Sertifikat Keaslian resmi.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-4 border-t border-white/5">
              <a
                href={`https://wa.me/${BRAND.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full bg-[#c5a880] text-[#0e0e0d] font-semibold text-xs tracking-[0.2em] uppercase transition-all hover:bg-[#d8c19f] shadow-lg active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pesan via WhatsApp Concierge</span>
              </a>

              <a
                href={`mailto:${BRAND.email}?subject=${emailSubject}&body=${emailBody}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-white/10 text-[#a39e93] hover:text-[#e8e4dc] hover:border-white/20 text-xs tracking-wider uppercase transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Tanya via Email Resmi</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
