import React from "react";
import { services } from "@/lib/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export function ServicesSection() {
  return (
    <section id="layanan" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Layanan Utama"
          title="Solusi End-to-End untuk Bisnis Anda"
          description="Dari pengembangan aplikasi kustom hingga integrasi sistem kelas enterprise, kami hadir untuk memberdayakan operasional Anda."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="h-full flex flex-col group hover:-translate-y-1 transition-transform duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-slate-600 text-sm mb-6 flex-1">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <ul className="space-y-2">
                      {service.deliverables.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <svg
                            className="w-4 h-4 text-accent shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
