"use client";

import React, { useState } from "react";
import { useCases } from "@/lib/data/use-cases";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/components/ui/Button"; // reuse cn
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Target, Lightbulb, Zap } from "lucide-react";

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(useCases[0].id);

  const activeData = useCases.find((uc) => uc.id === activeTab) || useCases[0];

  return (
    <section
      id="solusi"
      className="py-24 bg-slate-50 border-y border-slate-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Solusi Industri"
          title="Menjawab Tantangan Spesifik Bisnis Anda"
          description="Sistem yang kami bangun dirancang untuk memecahkan masalah nyata dan memberikan dampak terukur bagi berbagai use case operasional."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Sidebar / Tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 snap-x hide-scrollbar">
            {useCases.map((uc) => (
              <button
                key={uc.id}
                onClick={() => setActiveTab(uc.id)}
                className={cn(
                  "text-left px-6 py-4 rounded-xl transition-all duration-200 border flex flex-row items-center justify-between whitespace-nowrap lg:whitespace-normal flex-shrink-0 snap-start",
                  activeTab === uc.id
                    ? "bg-white border-primary shadow-md text-primary font-semibold"
                    : "bg-white/50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border-transparent",
                )}
              >
                <span className="mr-4 lg:mr-0">{uc.category}</span>
                <ChevronRight
                  className={cn(
                    "w-5 h-5 transition-transform duration-200",
                    activeTab === uc.id
                      ? "text-primary translate-x-1"
                      : "text-transparent",
                  )}
                />
              </button>
            ))}
          </div>

          {/* Right Column: Tab Content Container */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 md:p-12 space-y-8"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    {activeData.category}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Problem */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-rose-600 font-semibold mb-1">
                        <Target size={20} />
                        <h4>Tantangan (Masalah)</h4>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {activeData.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                        <Lightbulb size={20} />
                        <h4>Solusi Andhira</h4>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {activeData.solution}
                      </p>
                    </div>
                  </div>

                  {/* Impact Banner */}
                  <div className="mt-8 bg-emerald-50 border border-emerald-100 rounded-xl p-6 flex items-start gap-4">
                    <div className="mt-1 bg-emerald-100 p-2 rounded-lg text-emerald-600 shrink-0">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-900 mb-2">
                        Dampak Terukur
                      </h4>
                      <p className="text-emerald-800 text-sm leading-relaxed font-medium">
                        {activeData.impact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
