import React from "react";
import { portfolios } from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

export function PortfolioSection() {
  return (
    <section
      id="portofolio"
      className="py-24 bg-slate-50 border-t border-slate-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Studi Kasus"
          title="Dampak Nyata Solusi Kami"
          description="Lihat bagaimana kami membantu berbagai perusahaan mengatasi tantangan operasional dan mencapai target bisnis mereka melalui teknologi."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10"></div>

                {/* Simulated Image Placeholder since assets are missing */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100/50 backdrop-blur-sm p-6 text-center transform group-hover:scale-105 transition-transform duration-500 ease-out">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 mb-4 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-primary/40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-400 font-medium text-sm">
                    Screenshot Proyek
                    <br />
                    {item.title}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-1">
                <Badge
                  variant="outline"
                  className="w-fit mb-4 bg-slate-50 border-slate-200 text-slate-600"
                >
                  {item.category}
                </Badge>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 mb-6 flex-1 line-clamp-3">
                  {item.background}
                </p>

                {/* Result Highlight */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold text-emerald-800">
                    "{item.result}"
                  </p>
                </div>

                <a
                  href={`#case-study-${item.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link mt-auto"
                >
                  Pelajari Kasus Ini
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
