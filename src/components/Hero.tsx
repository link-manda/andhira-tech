"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary w-full min-h-[90vh] flex flex-col justify-center"
    >
      {/* Premium Dark Tech Background */}
      <div className="absolute inset-0 bg-grid-white opacity-20" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary to-transparent z-0" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-primary to-transparent z-10" />

      {/* Animated Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] right-[0%] w-[800px] h-[800px] rounded-full bg-accent/20 blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-secondary/30 blur-[100px] mix-blend-screen"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20 w-full text-center mt-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white/90 text-sm font-semibold border-white/10 shadow-2xl backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-accent" />
              PT Andhira Teknologi Nusantara
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.1] max-w-4xl mx-auto tracking-tight"
          >
            Teknologi yang bekerja <br />
            <span className="gradient-text italic pr-2">
              untuk bisnis Anda.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-300 xl:text-2xl mb-12 max-w-2xl text-center leading-relaxed font-light"
          >
            Kami bantu bisnis Anda tumbuh lewat sistem yang kuat, platform SaaS
            siap pakai, dan layanan IT yang terukur.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center"
          >
            {/* Premium CTA Button */}
            <div className="relative group w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
              <button
                onClick={() => scrollTo("#contact")}
                className="relative w-full sm:w-auto px-8 py-4 rounded-full bg-white text-primary font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Konsultasi Gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <button
              onClick={() => scrollTo("#services")}
              className="px-8 py-4 rounded-full glass-dark text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 w-full sm:w-auto border border-white/10"
            >
              Lihat Layanan Kami
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Futuristic Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-20 md:mt-32 relative mx-auto w-full max-w-6xl perspective-[2000px]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent z-20 rounded-2xl" />
          <div className="glass-dark rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(56,189,248,0.15)] transform rotateX-[5deg] scale-105 backdrop-blur-2xl">
            {/* MacOS style window controls */}
            <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2 backdrop-blur-md">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>
              <div className="mx-auto px-16">
                <div className="h-5 w-48 bg-white/5 rounded mx-auto flex items-center justify-center text-[10px] text-slate-400 font-mono">
                  andhira-platform.app
                </div>
              </div>
            </div>

            {/* Dashboard Content Mockup */}
            <div className="aspect-video relative bg-[#060D1A] p-6 lg:p-8 flex gap-6 z-10">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col w-48 border-r border-white/5 pr-6 gap-4 opacity-70">
                <div className="h-8 w-full bg-white/5 rounded-md mb-4" />
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-5 w-full bg-white/5 rounded-md" />
                ))}
              </div>
              {/* Main Content Area */}
              <div className="flex-1 flex flex-col gap-6">
                {/* Header stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-24 glass-dark rounded-xl border border-white/5 p-4 flex flex-col justify-between"
                    >
                      <div className="w-8 h-8 rounded-full bg-accent/20" />
                      <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                      <div className="h-4 w-3/4 bg-white/60 rounded-full" />
                    </div>
                  ))}
                </div>
                {/* Charts array */}
                <div className="flex-1 grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 glass-dark rounded-xl border border-white/5 relative overflow-hidden">
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-accent/10 to-transparent" />
                    {/* Chart Lines Sim */}
                    <svg
                      viewBox="0 0 100 40"
                      className="absolute bottom-0 w-full h-full preserve-3d opacity-50"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,40 L0,20 Q25,30 50,15 T100,25 L100,40 Z"
                        fill="url(#grad)"
                      />
                      <path
                        d="M0,20 Q25,30 50,15 T100,25"
                        fill="none"
                        stroke="#38BDF8"
                        strokeWidth="0.5"
                      />
                      <defs>
                        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                          <stop
                            offset="0%"
                            stopColor="#38BDF8"
                            stopOpacity="0.4"
                          />
                          <stop
                            offset="100%"
                            stopColor="#38BDF8"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="glass-dark rounded-xl border border-white/5 flex flex-col p-6 gap-4">
                    <div className="h-4 w-1/3 bg-white/20 rounded-full" />
                    <div className="flex-1 flex items-center justify-center relative">
                      <div className="w-32 h-32 rounded-full border-[8px] border-white/5 border-t-accent border-r-secondary border-b-emerald-400 transform rotate-45" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-xl font-bold text-white">87%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
