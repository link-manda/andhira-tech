import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Search, PenTool, Code, Rocket, Headphones } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      id: "01",
      title: "Discovery & Kebutuhan",
      description:
        "Diskusi mendalam untuk memahami alur operasi bisnis, tantangan utama, dan ekspektasi hasil.",
      icon: Search,
    },
    {
      id: "02",
      title: "Perencanaan & Estimasi",
      description:
        "Penyusunan blueprint arsitektur, timeline, dan budget yang transparan sebelum penulisan kode dimulai.",
      icon: PenTool,
    },
    {
      id: "03",
      title: "Development Iteratif",
      description:
        "Pengembangan sistem secara bertahap (agile) di mana klien dapat meninjau progress di setiap akhir sprint.",
      icon: Code,
    },
    {
      id: "04",
      title: "UAT & Deployment",
      description:
        "Pengujian menyeluruh bersama tim Anda (User Acceptance Test) hingga siap dirilis ke server produksi.",
      icon: Rocket,
    },
    {
      id: "05",
      title: "Monitoring & Support",
      description:
        "Evaluasi performa pasca-rilis, perbaikan bug (jika ada), dan opsi kontrak pemeliharaan berkelanjutan.",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-24 bg-background border-b border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Proses Kerja"
          title="Kerangka Kerja Transparan"
          description="Hilangkan ketidakpastian. Kami memastikan Anda selalu mengetahui progres sistem pada setiap fasenya."
          className="mb-16"
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[44px] left-0 w-full h-1 bg-slate-100 -z-10" />

          {/* Connector Line (Mobile/Tablet Only) */}
          <div className="block lg:hidden absolute left-[31px] top-12 bottom-12 w-1 bg-slate-100 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative flex flex-row lg:flex-col items-start text-left group gap-6 lg:gap-0"
                >
                  {/* Number & Icon Container */}
                  <div className="relative flex shrink-0 justify-center lg:justify-start lg:mb-6">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-lg group-hover:border-primary group-hover:shadow-primary/20 transition-all duration-300 z-10">
                      <Icon
                        size={32}
                        className="text-slate-400 group-hover:text-primary transition-colors"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-2 w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center shadow-md border-2 border-white z-20">
                      {step.id}
                    </div>
                  </div>

                  <div className="flex-1 pt-2 lg:pt-0">
                    <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2 lg:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed pr-0 lg:pr-4">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
