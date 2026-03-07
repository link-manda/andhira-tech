export type UseCase = {
  id: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
};

export const useCases: UseCase[] = [
  {
    id: "digitalisasi-internal",
    category: "Digitalisasi Operasional Internal",
    problem:
      "Banyak perusahaan SMB masih menggunakan proses manual berbasis kertas atau spreadsheet yang rentan human-error dan sulit dilacak secara realtime.",
    solution:
      "Andhira mengembangkan sistem ERP/CRM custom yang terpusat, mengotomatisasi input data dan memberikan dashboard analitik terpadu.",
    impact:
      "Efisiensi waktu operasional meningkat hingga 40% dan pengambilan keputusan lebih cepat berkat data realtime.",
  },
  {
    id: "portal-pelanggan",
    category: "Pengembangan Portal Pelanggan",
    problem:
      "Pelanggan kesulitan melacak status pesanan, tiket bantuan, atau layanan berlangganan mereka karena tidak ada sistem mandiri (self-service).",
    solution:
      "Kami merancang Customer Portal berbasis web yang aman, responsif, dan terintegrasi langsung dengan database internal perusahaan.",
    impact:
      "Menurunkan beban tim customer service hingga 30% dan meningkatkan kepuasan serta loyalitas pelanggan.",
  },
  {
    id: "otomasi-workflow",
    category: "Otomasi Workflow dan Reporting",
    problem:
      "Proses approval antar departemen memakan waktu berhari-hari dan laporan bulanan butuh waktu lama untuk dikompilasi.",
    solution:
      "Implementasi automated workflow engine untuk approval berjenjang, lengkap dengan auto-generated report yang dikirimkan via email/dashboard.",
    impact:
      "Siklus persetujuan berkurang dari 3 hari menjadi hitungan jam, serta laporan akurat siap kapan saja.",
  },
];
