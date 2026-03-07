"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[120%] bg-grid-slate-900 pointer-events-none opacity-50" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-6 max-w-2xl"
          >
            <Badge
              variant="accent"
              className="px-3 py-1 text-sm bg-accent/10 text-accent-dark"
            >
              ⭐️ Trusted Tech Partner for SMBs
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
              Kami membantu bisnis{" "}
              <span className="gradient-text">mempercepat pertumbuhan</span>{" "}
              melalui solusi teknologi.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
              Tinggalkan proses manual yang lambat. Andhira adalah mitra
              strategis untuk transformasi digital yang terukur, transparan, dan
              fokus pada dampak bisnis nyata.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <Link
                href="#kontak"
                className="group inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 h-14 px-8 text-lg min-h-[44px] bg-primary text-white hover:bg-primary/90 shadow-md"
              >
                Jadwalkan Konsultasi
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#portofolio"
                className="group bg-white/50 backdrop-blur-sm inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 h-14 px-8 text-lg min-h-[44px] border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                <PlayCircle className="mr-2 w-5 h-5 text-primary group-hover:text-white transition-colors" />
                Lihat Portofolio
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-8 pt-6 border-t border-slate-200/60 text-sm font-medium text-slate-500 w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">50+</span>
                <span className="leading-tight">
                  Proyek
                  <br />
                  Selesai
                </span>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">95%</span>
                <span className="leading-tight">
                  Tingkat
                  <br />
                  Kepuasan
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative lg:ml-auto w-full max-w-lg lg:max-w-none xl:w-[110%] -mr-[10%] hidden md:block" // Hidden on small screens to save space, shown on md+
          >
            {/* Mockup Container */}
            <div className="relative aspect-[4/3] rounded-2xl glass-card overflow-hidden border border-white/40 shadow-2xl p-2 bg-slate-50">
              <div className="absolute top-0 left-0 right-0 h-10 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2 z-10">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>

              {/* Abstract Dashboard UI */}
              <div className="mt-10 p-6 grid grid-cols-3 gap-4 h-full">
                <div className="col-span-2 space-y-4">
                  <div className="h-24 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10"></div>
                  <div className="h-40 rounded-xl bg-gradient-to-br from-slate-100 to-white shadow-sm border border-slate-200"></div>
                </div>
                <div className="col-span-1 space-y-4">
                  <div className="h-32 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/10"></div>
                  <div className="h-32 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/10"></div>
                </div>
              </div>
            </div>

            {/* Floating Badge 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-xl flex items-center gap-4 border border-white/50 shadow-xl"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">
                  Sistem Terintegrasi
                </p>
                <p className="text-lg font-bold text-foreground">
                  100% Seamless
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
