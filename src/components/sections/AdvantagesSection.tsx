import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2, TrendingUp, Users, Wrench } from "lucide-react";

export function AdvantagesSection() {
  const advantages = [
    {
      title: "Pendekatan Berbasis Bisnis",
      description:
        "Kami tidak sekadar menulis kode. Kami memastikan setiap baris kode berkontribusi langsung pada efisiensi atau pendapatan perusahaan Anda.",
      icon: TrendingUp,
    },
    {
      title: "Eksekusi Agile & Terukur",
      description:
        "Pengiriman hasil secara berkelanjutan. Anda bisa melihat progres nyata setiap minggunya, meminimalisir risiko kegagalan proyek di akhir.",
      icon: CheckCircle2,
    },
    {
      title: "Komunikasi Transparan",
      description:
        "Tidak ada biaya tersembunyi atau jargon teknis yang membingungkan. Kami memberikan laporan rutin dengan bahasa yang mudah dipahami.",
      icon: Users,
    },
    {
      title: "Dukungan Purna Implementasi",
      description:
        "Layanan kami tidak berhenti saat aplikasi rilis. Kami mendampingi masa transisi, pelatihan staf, hingga garansi pemeliharaan sistem.",
      icon: Wrench,
    },
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Abstract Backgrounds */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.05]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Keunggulan Andhira"
          title="Mengapa Memilih Kami?"
          description="Sebagai mitra teknologi, kami menggabungkan keahlian teknis dengan pemahaman bisnis mendalam."
          className="mb-16 [&>h2]:text-white [&>p]:text-slate-300 [&>span]:bg-white/10 [&>span]:text-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <Icon size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">{adv.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
