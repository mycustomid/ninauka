import React, { useState } from 'react';
import { CATEGORIES, PRODUCTS, BRAND } from '../data/ninaukaData';
import ProductDetailModal from './ProductDetailModal';
import { Eye, MessageCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function CollectionsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [inspectingProduct, setInspectingProduct] = useState(null);

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="collections" className="py-28 relative bg-[#0e0e0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#c5a880]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-cinzel">
                Koleksi Adibusana
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#fbf8f5]">
              Mahakarya Terkurasi.
            </h2>
            <p className="text-sm text-[#a39e93] font-light max-w-xl">
              Mulai dari siluet ikonik Kelly berbalut kulit piton retikulasi hingga tenun botani Ulap Doyo Kalimantan dan Gedogan Baduy, setiap karya dibuat terbatas sebagai persembahan kriya luhur Indonesia.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-xs text-[#c5a880] tracking-widest uppercase font-cinzel">
              Menampilkan {filteredProducts.length} Karya
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs tracking-wider uppercase font-medium whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-[#c5a880] text-[#0e0e0d] font-semibold shadow-[0_0_20px_rgba(197,168,128,0.3)]'
                  : 'bg-[#181716] text-[#a39e93] hover:text-[#e8e4dc] border border-white/5 hover:border-white/15'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const waQuickMsg = encodeURIComponent(
              `Halo Ninauka Atelier, saya tertarik dengan ${product.title} (Kode: ${product.code}). Mohon informasi ketersediaan dan harga resmi.`
            );

            return (
              <div
                key={product.id}
                className="group relative rounded-2xl bg-[#141312] border border-white/5 hover:border-[#c5a880]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl"
              >
                {/* Top Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1918]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover img-editorial"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-transparent opacity-80" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-[#0e0e0d]/80 backdrop-blur-md border border-[#c5a880]/30 text-[10px] tracking-widest uppercase text-[#c5a880] font-cinzel">
                      {product.code}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-[9px] uppercase tracking-wider text-[#d1cbc2]">
                      {product.badge}
                    </span>
                  </div>

                  {/* Quick Action Button on Hover */}
                  <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    <button
                      onClick={() => setInspectingProduct(product)}
                      className="flex-1 py-2.5 rounded-xl bg-[#0e0e0d]/90 backdrop-blur-md text-[#fbf8f5] hover:text-[#c5a880] border border-white/20 text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Lihat Detail Karya</span>
                    </button>
                    <a
                      href={`https://wa.me/${BRAND.whatsappNumber}?text=${waQuickMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-[#c5a880] text-[#0e0e0d] hover:bg-[#d8c19f] transition-colors"
                      title="Konsultasi Langsung via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#8e8980]">
                    <span>{product.categoryLabel}</span>
                    <span className="font-mono text-[#c5a880]">{product.dimensions}</span>
                  </div>

                  <h3
                    onClick={() => setInspectingProduct(product)}
                    className="font-serif-luxury text-xl text-[#fbf8f5] group-hover:text-[#c5a880] transition-colors cursor-pointer"
                  >
                    {product.title}
                  </h3>

                  <p className="text-xs text-[#9e998e] font-light line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#8e8980] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{product.leadTime.split('/')[0]}</span>
                    </span>

                    <button
                      onClick={() => setInspectingProduct(product)}
                      className="text-[#c5a880] hover:text-white text-xs font-medium tracking-wider uppercase flex items-center gap-1"
                    >
                      <span>Lihat Detail Karya</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Product Detail Modal */}
      {inspectingProduct && (
        <ProductDetailModal
          product={inspectingProduct}
          onClose={() => setInspectingProduct(null)}
        />
      )}
    </section>
  );
}
