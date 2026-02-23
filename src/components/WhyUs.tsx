"use client";

import { motion } from "framer-motion";
import {
  Users,
  Zap,
  LayoutGrid,
  Fingerprint,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    title: "Tim Engineer Berpengalaman",
    description:
      "Developer senior kami menulis kode yang kuat dan mudah dikelola — bukan kode sekali jalan.",
    icon: Users,
  },
  {
    title: "Infrastruktur Zero Downtime",
    description:
      "Sistem kami dibangun di atas Kubernetes dan CDN global sehingga bisnis Anda tak pernah offline.",
    icon: Zap,
  },
  {
    title: "Arsitektur Microservices",
    description:
      "Desain modular yang memisahkan tanggung jawab, agar sistem mudah dikembangkan kapan pun.",
    icon: LayoutGrid,
  },
  {
    title: "Skalabilitas Elastis",
    description:
      "Sistem kami siap menghadapi lonjakan trafik tanpa performa menurun, kapasitas menyesuaikan otomatis.",
    icon: TrendingUp,
  },
  {
    title: "Keamanan Standar Bank",
    description:
      "Enkripsi end-to-end dan standar kepatuhan terjaga — data dan IP klien kami lindungi sepenuhnya.",
    icon: Fingerprint,
  },
];

export default function WhyUs() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden text-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white opacity-5" />
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-accent rounded-full blur-[150px] opacity-20 mix-blend-screen" />
        <div className="absolute bottom-[0%] left-[0%] w-[600px] h-[600px] bg-secondary rounded-full blur-[120px] opacity-10 mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">
              Kenapa Pilih Kami
            </h2>
            <h3 className="text-4xl md:text-6xl font-extrabold mb-8 text-white leading-[1.1] tracking-tight">
              Lebih dari sekedar vendor.
              <br />
              <span className="text-slate-400 font-light">
                Kami tim teknik Anda.
              </span>
            </h3>
            <p className="text-slate-300 mb-10 text-xl font-light leading-relaxed max-w-lg">
              Kami bukan sekadar vendor. Kami hadir sebagai bagian dari tim Anda
              — membawa kecepatan dan keandalan yang dibutuhkan bisnis untuk
              tumbuh di era digital.
            </p>

            <div className="flex flex-col gap-4 mb-12">
              {[
                "Jaminan Uptime SLA 99.99%",
                "Sprint 2 Minggu, Hasil Cepat & Terukur",
                "Standar Keamanan ISO 27001",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-10 p-8 glass-dark rounded-3xl border-white/5 inline-flex">
              <div>
                <h4 className="text-5xl font-extrabold text-white mb-2">
                  150<span className="text-accent">+</span>
                </h4>
                <span className="text-slate-400 text-sm font-bold tracking-wider uppercase">
                  Deployments
                </span>
              </div>
              <div>
                <h4 className="text-5xl font-extrabold text-white mb-2">
                  99<span className="text-accent">%</span>
                </h4>
                <span className="text-slate-400 text-sm font-bold tracking-wider uppercase">
                  Retention
                </span>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex gap-6 p-6 md:p-8 rounded-3xl glass-dark hover:bg-white/5 border border-white/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-110 transition-transform shadow-inner text-accent">
                  <reason.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    {reason.title}
                  </h4>
                  <p className="text-slate-400 leading-relaxed font-light text-base">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
