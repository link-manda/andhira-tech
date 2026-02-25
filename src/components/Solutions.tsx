"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const solutions = [
  {
    title: "Sistem HRIS",
    tagline: "Manajemen SDM Modern",
    description:
      "Kelola seluruh siklus SDM dalam satu platform — dari rekrutmen, penggajian otomatis, hingga analitik performa berbasis data.",
    category: "Platform SaaS",
    color: "from-[#0F172A] to-[#1E293B]",
    accent: "bg-blue-500",
  },
  {
    title: "ProcureSync",
    tagline: "Pengadaan Perusahaan",
    description:
      "Sederhanakan rantai pengadaan B2B Anda — dari seleksi vendor hingga persetujuan kontrak, prosesnya 80% lebih cepat.",
    category: "Integrasi Sistem",
    color: "from-[#0F172A] to-[#022C22]",
    accent: "bg-emerald-500",
  },
  {
    title: "FinMatrix",
    tagline: "Hub Data Finansial",
    description:
      "Hubungkan berbagai sistem perbankan ke satu dashboard terpadu. Middleware keuangan throughput tinggi, siap untuk skala enterprise.",
    category: "API Inti",
    color: "from-[#0F172A] to-[#311024]",
    accent: "bg-pink-500",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-32 bg-slate-50 relative">
      {/* Background blob */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-slate-200/50 rounded-bl-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">
              Produk &amp; Karya Kami
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Solusi nyata, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                hasil yang terukur.
              </span>
            </h3>
            <p className="text-slate-600 text-xl font-light leading-relaxed">
              Platform kami dirancang untuk menangani jutaan request dan
              menyederhanakan proses bisnis yang paling kompleks sekalipun.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-900 font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all w-max shadow-sm">
            Lihat Dokumentasi
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group relative rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col"
            >
              {/* Abstract App UI Mockup */}
              <div
                className={`h-64 bg-gradient-to-br ${solution.color} p-8 relative overflow-hidden shrink-0`}
              >
                <div className="absolute inset-0 bg-grid-white opacity-10 mix-blend-overlay" />

                {/* Floating UI Elements */}
                <div className="relative z-10 w-[120%] h-full bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-5 transform translate-y-12 translate-x-4 group-hover:translate-y-8 group-hover:-rotate-2 transition-transform duration-700 ease-out">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full ${solution.accent} opacity-50 blur-sm`}
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="h-2.5 w-1/3 bg-white/20 rounded-full" />
                    <div className="h-2.5 w-1/2 bg-white/10 rounded-full" />
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="h-16 bg-white/5 rounded-xl border border-white/5" />
                    <div className="h-16 bg-white/5 rounded-xl border border-white/5" />
                    <div className="col-span-2 h-16 bg-white/5 rounded-xl border border-white/5" />
                  </div>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${solution.accent}`}
                  />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    {solution.category}
                  </span>
                </div>

                <h4 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
                  {solution.title}
                </h4>
                <p className="text-accent font-semibold text-sm mb-5 tracking-wide">
                  {solution.tagline}
                </p>
                <p className="text-slate-600 font-light leading-relaxed mb-8 flex-1">
                  {solution.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-accent transition-colors mt-auto w-max"
                >
                  Jelajahi Platform{" "}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
