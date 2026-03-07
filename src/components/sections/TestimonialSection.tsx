import React from "react";
import { testimonials } from "@/lib/data/testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Quote } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Testimoni"
          title="Kepercayaan Klien"
          description="Apa kata mereka yang telah bertransformasi digital bersama Andhira Tech?"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="bg-white border border-slate-200 rounded-2xl p-8 relative shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Quote Icon BG */}
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/5" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-slate-700 leading-relaxed mb-8 relative z-10 italic">
                "{testi.quote}"
              </blockquote>

              <div className="mt-auto flex items-center gap-4 border-t border-slate-100 pt-6">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-lg uppercase">
                  {testi.name.substring(0, 2)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testi.name}</h4>
                  <p className="text-sm text-slate-500">
                    {testi.role}, {testi.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
