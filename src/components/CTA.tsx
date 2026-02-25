"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-primary w-full mx-auto sm:px-6">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-x-0 h-px top-1/4 bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />
        <div className="absolute inset-y-0 w-px left-1/4 bg-gradient-to-b from-transparent via-white to-transparent opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-30 mix-blend-screen" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[3rem] p-12 md:p-24 text-center overflow-hidden"
        >
          {/* Internal Glowing Background */}
          <div className="absolute inset-0 bg-slate-900 border border-white/10" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-transparent to-slate-900/80 mix-blend-overlay" />

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold text-white/90 tracking-widest uppercase">
                Menerima Proyek Baru
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
              Siap bawa bisnis Anda <br className="hidden md:block" /> ke level{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
                berikutnya?
              </span>
            </h2>
            <p className="text-slate-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Ceritakan kebutuhan teknologi Anda. Tim kami siap membantu
              merancang solusi yang pas — dari nol sampai production-ready.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                onClick={() => scrollTo("#contact")}
                className="px-10 py-5 rounded-full bg-white text-primary font-extrabold text-lg hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                Hubungi Kami
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="px-10 py-5 rounded-full glass-dark text-white font-bold text-lg border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all w-full sm:w-auto"
              >
                Lihat Layanan Kami
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
