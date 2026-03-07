"use client";

import React, { useState } from "react";
import { faqs } from "@/lib/data/faqs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/components/ui/Button"; // reuse cn

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <SectionHeader
          badge="FAQ"
          title="Pertanyaan Umum"
          description="Temukan jawaban cepat mengenai layanan, proseskerja, dan model bisnis kami."
          className="mb-12"
        />

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={cn(
                "bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300",
                openId === faq.id
                  ? "shadow-md border-primary/30"
                  : "shadow-sm hover:border-slate-300",
              )}
            >
              <button
                type="button"
                className="w-full flex items-center justify-between p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={openId === faq.id}
              >
                <span className="font-semibold text-lg text-foreground pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300",
                    openId === faq.id && "rotate-180 text-primary",
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
