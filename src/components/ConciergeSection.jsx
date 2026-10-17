import React, { useState } from 'react';
import { BRAND } from '../data/ninaukaData';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default function ConciergeSection() {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    interest: 'Koleksi Kulit Piton Excellence (Kelly KE.01 / KC.02)',
    notes: ''
  });

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo Ninauka Atelier,\n\n` +
      `Saya ingin mengajukan konsultasi / pemesanan koleksi adibusana Ninauka:\n\n` +
      `• Nama Klien: ${form.name || '-'}\n` +
      `• Instansi / Butik: ${form.organization || '-'}\n` +
      `• Peminatan Koleksi: ${form.interest}\n` +
      `• Catatan / Permintaan Khusus: ${form.notes || '-'}\n\n` +
      `Mohon dihubungkan dengan Ibu Titik Kurniasih atau Tim Kurator Ninauka. Terima kasih.`
    );
    window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="concierge" className="py-28 relative bg-[#0e0e0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Atelier Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#c5a880]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-cinzel">
                  Konsultasi Privat
                </span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#fbf8f5]">
                Concierge Atelier Langsung.
              </h2>
              <p className="text-sm text-[#a39e93] font-light leading-relaxed">
                Terhubung langsung dengan Ibu Titik Kurniasih dan maestro perajin kulit kami di Nusaloka, BSD City untuk kunjungan galeri privat, pesanan khusus (<em>bespoke</em>), pengadaan PaDi UMKM, maupun distribusi butik internasional.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href={`https://wa.me/${BRAND.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#141413] border border-white/5 hover:border-[#c5a880]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8e8980]">WhatsApp Concierge</span>
                  <div className="text-sm font-semibold text-[#fbf8f5] group-hover:text-[#c5a880] transition-colors">
                    {BRAND.phone}
                  </div>
                  <span className="text-[11px] text-emerald-400/80">Melayani Senin – Sabtu (09.00 – 18.00 WIB)</span>
                </div>
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#141413] border border-white/5 hover:border-[#c5a880]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c5a880]/10 border border-[#c5a880]/20 flex items-center justify-center text-[#c5a880] group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8e8980]">Korespondensi Resmi</span>
                  <div className="text-sm font-semibold text-[#fbf8f5] group-hover:text-[#c5a880] transition-colors">
                    {BRAND.email}
                  </div>
                  <span className="text-[11px] text-[#8e8980]">Kemitraan butik, PaDi UMKM &amp; permintaan ekspor</span>
                </div>
              </a>

              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#141413] border border-white/5 hover:border-[#c5a880]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8e8980]">Jurnal Visual Instagram</span>
                  <div className="text-sm font-semibold text-[#fbf8f5] group-hover:text-[#c5a880] transition-colors">
                    {BRAND.instagram}
                  </div>
                  <span className="text-[11px] text-[#8e8980]">Kabar terbaru atelier, pameran &amp; rilis koleksi</span>
                </div>
              </a>

              <div className="p-4 rounded-2xl bg-[#141413] border border-white/5 space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8e8980]">Alamat Atelier Privat</span>
                    <p className="text-xs text-[#e8e4dc] mt-0.5 leading-relaxed">
                      {BRAND.address}
                    </p>
                    <a
                      href={BRAND.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-[11px] text-[#c5a880] hover:underline uppercase tracking-wider font-semibold"
                    >
                      Buka di Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#141312] border border-[#c5a880]/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="mb-6 space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#c5a880] font-cinzel">
                  Formulir Peminatan Karya
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#fbf8f5]">
                  Mulai Konsultasi &amp; Pesanan Khusus
                </h3>
              </div>

              <form onSubmit={handleSubmitWhatsApp} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8e8980] mb-2">
                    Nama Lengkap Klien *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Contoh: Ibu Kartika Wijaya / Bapak Hendra Kusuma"
                    className="w-full px-4 py-3 rounded-xl bg-[#0e0e0d] border border-white/10 text-sm text-[#fbf8f5] focus:outline-none focus:border-[#c5a880] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8e8980] mb-2">
                    Instansi / Butik / Kolektor Privat (Opsional)
                  </label>
                  <input
                    type="text"
                    value={form.organization}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    placeholder="Contoh: Kolektor Pribadi / Kementerian / Galeri Mode"
                    className="w-full px-4 py-3 rounded-xl bg-[#0e0e0d] border border-white/10 text-sm text-[#fbf8f5] focus:outline-none focus:border-[#c5a880] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8e8980] mb-2">
                    Koleksi yang Diminati *
                  </label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0e0e0d] border border-white/10 text-sm text-[#fbf8f5] focus:outline-none focus:border-[#c5a880] transition-colors"
                  >
                    <option value="Koleksi Kulit Piton Excellence (Kelly KE.01 / KC.02)">Koleksi Kulit Piton Excellence (Kelly KE.01 / KC.02)</option>
                    <option value="Minaudière Evening Clutch Piton (MA.03 / MA.05)">Minaudière Evening Clutch Piton (MA.03 / MA.05)</option>
                    <option value="Koleksi Tenun Serat Daun Ulap Doyo Kalimantan Timur">Koleksi Tenun Serat Daun Ulap Doyo Kalimantan Timur</option>
                    <option value="Koleksi Tenun Baduy Gedogan & Tenun Inuh Lampung">Koleksi Tenun Baduy Gedogan &amp; Tenun Inuh Lampung</option>
                    <option value="Koleksi Eco-Luxe Goni, Ecoprint & Kulit Sapi">Koleksi Eco-Luxe Goni, Ecoprint &amp; Kulit Sapi</option>
                    <option value="Hampers VIP Korporat, Monogram & Pengadaan PaDi UMKM">Hampers VIP Korporat, Monogram &amp; Pengadaan PaDi UMKM</option>
                    <option value="Kemitraan Ekspor Internasional & Private Label">Kemitraan Ekspor Internasional &amp; Private Label</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8e8980] mb-2">
                    Catatan Khusus &amp; Rincian Kustomisasi
                  </label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Tuliskan preferensi warna kulit, jenis wastra, inisial monogram emas, jumlah pesanan, atau jadwal pengiriman yang diharapkan..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0e0e0d] border border-white/10 text-sm text-[#fbf8f5] focus:outline-none focus:border-[#c5a880] transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#c5a880] text-[#0e0e0d] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#d8c19f] hover:shadow-[0_0_25px_rgba(197,168,128,0.35)] flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Kirim Konsultasi via WhatsApp Concierge</span>
                  </button>
                  <p className="text-center text-[10px] text-[#8e8980] mt-3">
                    Respons cepat dan personal langsung dari kurator Atelier Ninauka. Seluruh data klien dijaga kerahasiaannya.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
