"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-slate-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-100 to-transparent pointer-events-none" />
      <div className="absolute -left-64 top-64 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">
            Hubungi Kami
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Ada yang ingin <br />
            Anda bangun?
          </h3>
          <p className="text-slate-500 text-xl font-light">
            Mau migrasi sistem lama, bangun platform SaaS, atau mulai
            transformasi digital? Kami siap mendengarkan dan langsung bergerak.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-slate-900 tracking-tight">
                Bicara Langsung dengan Tim
              </h4>
              <p className="text-slate-500 font-light">
                Kami tidak punya script atau template balasan. Setiap proyek
                kami perlakukan secara personal.
              </p>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <div className="pt-1">
                <h4 className="font-bold text-slate-900 mb-1">
                  Email Tim Kami
                </h4>
                <a
                  href="mailto:sales@andhiratech.com"
                  className="text-slate-500 hover:text-accent font-medium transition-colors text-lg"
                >
                  sales@indhira-tech.my.id
                </a>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-secondary" strokeWidth={1.5} />
              </div>
              <div className="pt-1">
                <h4 className="font-bold text-slate-900 mb-1">Telepon Kami</h4>
                <a
                  href="tel:+62895623318351"
                  className="text-slate-500 hover:text-secondary font-medium transition-colors text-lg"
                >
                  +62 895 6233 18351
                </a>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                <MapPin
                  className="w-6 h-6 text-emerald-500"
                  strokeWidth={1.5}
                />
              </div>
              <div className="pt-1">
                <h4 className="font-bold text-slate-900 mb-1">Kantor Pusat</h4>
                <p className="text-slate-500 leading-relaxed font-light text-lg">
                  Jl. Cempaka. GG.II, Sukawati, Kec. Sukawati,
                  <br />
                  Kabupaten Gianyar, Bali 80582
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2">
            <form className="glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] -z-10 group-hover:bg-accent/10 transition-colors" />

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-3">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold tracking-wide text-slate-700 uppercase"
                  >
                    Nama Depan
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Budi"
                    className="w-full px-5 py-4 rounded-xl bg-white/50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="company"
                    className="text-sm font-bold tracking-wide text-slate-700 uppercase"
                  >
                    Perusahaan
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="PT Maju Bersama"
                    className="w-full px-5 py-4 rounded-xl bg-white/50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <label
                  htmlFor="email"
                  className="text-sm font-bold tracking-wide text-slate-700 uppercase"
                >
                  Email Kerja
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="budi@majubersama.co.id"
                  className="w-full px-5 py-4 rounded-xl bg-white/50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-3 mb-10">
                <label
                  htmlFor="message"
                  className="text-sm font-bold tracking-wide text-slate-700 uppercase"
                >
                  Detail Proyek
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Ceritakan kebutuhan atau tujuan bisnis Anda..."
                  className="w-full px-5 py-4 rounded-xl bg-white/50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none font-medium text-slate-900 placeholder:text-slate-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-5 px-6 rounded-xl bg-primary text-white font-extrabold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 group/btn"
              >
                Kirim Pesan
                <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
