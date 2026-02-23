"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, ShieldCheck, Play } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Abstract Image / Graphic - Reordered for visual balance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:order-1 order-2"
          >
            {/* Glowing background blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-secondary/30 rounded-full blur-[80px] transform -translate-x-10 translate-y-10" />

            <div className="relative glass rounded-[2rem] overflow-hidden border border-slate-100/50 shadow-2xl p-10 aspect-square flex flex-col justify-center bg-white/40">
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full -z-10 opacity-50" />

              <div className="flex justify-between items-end mb-12">
                <div className="space-y-3">
                  <div className="h-3 w-16 bg-accent rounded-full mb-4" />
                  <div className="h-6 w-48 bg-slate-900 rounded-full" />
                  <div className="h-6 w-32 bg-slate-900 rounded-full opacity-40" />
                </div>
                <div className="w-16 h-16 rounded-full bg-white shadow-xl shadow-slate-200 border border-slate-100 flex items-center justify-center -translate-y-4">
                  <Play className="w-6 h-6 text-primary ml-1" />
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex gap-5 items-center p-5 rounded-2xl bg-white shadow-sm border border-slate-100/50 hover:-translate-y-1 transition-transform cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center">
                      <div
                        className={`w-5 h-5 rounded-full ${i === 1 ? "bg-accent" : i === 2 ? "bg-secondary" : "bg-emerald-400"}`}
                      />
                    </div>
                    <div className="space-y-2.5 flex-1">
                      <div className="h-2.5 w-full bg-slate-200 rounded-full" />
                      <div className="h-2.5 w-3/4 bg-slate-100 rounded-full" />
                    </div>
                    <ShieldCheck className="w-5 h-5 text-slate-300" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:order-2 order-1"
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">
              Siapa Kami
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Pondasi digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                untuk bisnis modern.
              </span>
            </h3>
            <p className="text-slate-600 mb-6 text-xl leading-relaxed font-light">
              Andhira adalah tim teknisi berpengalaman yang fokus membangun
              sistem andal dan platform SaaS siap enterprise — solusi nyata
              untuk masalah pertumbuhan bisnis Anda.
            </p>
            <p className="text-slate-500 mb-12 text-lg leading-relaxed font-light">
              Ide besar Anda layak diwujudkan dengan teknologi terbaik. Kami
              hadir untuk memastikan sistem Anda tumbuh bersama bisnis, bukan
              menjadi hambatan.
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 mb-6 group-hover:bg-primary transition-colors">
                  <Target className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-3">
                    Misi Kami
                  </h4>
                  <p className="text-base text-slate-500 font-light leading-relaxed">
                    Mengubah sistem lama yang rumit menjadi arsitektur modern
                    yang fleksibel, agar bisnis bisa berkembang tanpa batas
                    teknis.
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 mb-6 group-hover:bg-secondary transition-colors">
                  <Lightbulb className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-3">
                    Visi Kami
                  </h4>
                  <p className="text-base text-slate-500 font-light leading-relaxed">
                    Menjadi mitra transformasi digital terpercaya bagi
                    perusahaan dan institusi di seluruh Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
