"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cloud,
  Server,
  Network,
  BarChart3,
  Wrench,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Arsitektur Sistem",
    description:
      "Bangun infrastruktur yang siap skalabel — dari microservices hingga sistem cloud-native untuk kebutuhan enterprise.",
    icon: Code2,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "Platform SaaS",
    description:
      "Kembangkan produk SaaS multi-tenant dengan frontend modern berbasis React/Next.js yang cepat dan mudah dikelola.",
    icon: Cloud,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "DevOps & Cloud",
    description:
      "Otomatisasi pipeline CI/CD dan manajemen Kubernetes agar deployment lebih cepat tanpa risiko downtime.",
    icon: Server,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Integrasi Data",
    description:
      "Hubungkan sistem yang terpisah lewat API gateway dan middleware handal untuk alur data yang mulus dan real-time.",
    icon: Network,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Transformasi Digital",
    description:
      "Pandu transisi bisnis dari sistem lama ke arsitektur modern yang lebih lincah dan efisien.",
    icon: BarChart3,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    title: "Pemeliharaan & SRE",
    description:
      "Monitoring 24/7 oleh tim SRE kami untuk memastikan platform Anda selalu berjalan dengan uptime 99,99%.",
    icon: Wrench,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-slate-50 relative overflow-hidden"
    >
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-grid-slate-900 opacity-20" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-end justify-between mb-20">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">
              Apa yang Kami Kerjakan
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Dibangun untuk tumbuh. <br />
              Dirancang untuk bertahan.
            </h3>
            <p className="text-slate-600 text-xl font-light">
              Layanan IT kami dirancang untuk kebutuhan nyata bisnis — bukan
              sekadar fitur, tapi solusi yang berdampak langsung.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors pb-2">
            Lihat Stack Teknologi <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card p-10 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 relative overflow-hidden flex flex-col"
            >
              {/* Card Hover Glow */}
              <div className="absolute -inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 shadow-sm ${service.bg}`}
              >
                <service.icon
                  className={`w-7 h-7 stroke-[1.5px] ${service.color}`}
                />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed font-light mt-auto">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
