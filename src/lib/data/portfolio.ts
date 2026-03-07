export type Portfolio = {
  id: string;
  title: string;
  category: string;
  image: string;
  background: string;
  solution: string;
  result: string;
};

export const portfolios: Portfolio[] = [
  {
    id: "ecommerce-b2b",
    title: "B2B E-Commerce Terintegrasi ERP",
    category: "Web Development",
    image: "/images/portfolio/b2b-ecommerce.jpg", // Placeholder path
    background:
      "Distributor lokal kesulitan mengelola pesanan B2B dari puluhan klien secara manual.",
    solution:
      "Membangun portal B2B custom yang terhubung dua arah dengan sistem inventory gudang legasi.",
    result:
      "Proses pemesanan 50% lebih cepat dan tingkat kesalahan order turun hingga 0%.",
  },
  {
    id: "healthtech-dashboard",
    title: "Sistem Informasi Manajemen Klinik",
    category: "SaaS Development",
    image:
      "https://i.ibb.co.com/qFg3zzPz/Gemini-Generated-Image-oxyp8roxyp8roxyp.png", // Placeholder path
    background:
      "Klinik dengan 5 cabang membutuhkan sistem antrean, rekam medis, dan kasir yang tersentralisasi.",
    solution:
      "Pengembangan SaaS multi-tenant berbasis Next.js dan PostgreSQL untuk manajemen end-to-end klinik.",
    result:
      "Menangani 500+ pasien per hari tanpa downtime, laporan keuangan otomatis tergenerate tiap shift.",
  },
  {
    id: "edu-lms",
    title: "Platform Pelatihan Karyawan (LMS)",
    category: "System Integration",
    image: "/images/portfolio/lms.jpg", // Placeholder path
    background:
      "Perusahaan manufaktur kesulitan melacak sertifikasi dan progres pelatihan ratusan karyawannya.",
    solution:
      "Implementasi Learning Management System yang terintegrasi dengan HRIS perusahaan.",
    result: "HR dapat melacak kepatuhan mandatory training 100% lebih efisien.",
  },
];
