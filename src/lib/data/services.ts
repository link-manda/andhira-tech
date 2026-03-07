import { Globe, Cpu, LineChart, ShieldCheck } from "lucide-react";
import React from "react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development & SaaS",
    description:
      "Meningkatkan kehadiran digital dan efisiensi operasional dengan aplikasi web kustom yang terukur dan aman.",
    icon: Globe,
    deliverables: [
      "Custom Web Application",
      "Landing Page Berkonversi Tinggi",
      "Sistem Manajemen Konten (CMS)",
    ],
  },
  {
    id: "system-integration",
    title: "Integrasi Sistem",
    description:
      "Menghubungkan berbagai platform software untuk alur kerja yang mulus dan menghilangkan silo data.",
    icon: Cpu,
    deliverables: [
      "API Development",
      "Integrasi ERP & CRM",
      "Data Pipeline Architecture",
    ],
  },
  {
    id: "it-consulting",
    title: "IT Consulting & Audit",
    description:
      "Saran strategis untuk menyelaraskan teknologi dengan tujuan bisnis dan mengoptimalkan infrastruktur saat ini.",
    icon: LineChart,
    deliverables: [
      "Audit Infrastruktur IT",
      "Roadmap Transformasi Digital",
      "Optimasi Biaya Cloud",
    ],
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    description:
      "Memastikan sistem Anda tetap berjalan optimal dengan dukungan teknis proaktif dan pemeliharaan berkala.",
    icon: ShieldCheck,
    deliverables: [
      "Monitoring 24/7",
      "Pembaruan Keamanan Reguler",
      "SLA Support Cepat",
    ],
  },
];
