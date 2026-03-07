export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "Berapa lama rata-rata durasi pengerjaan proyek?",
    answer:
      "Durasi proyek sangat bergantung pada kompleksitas fitur. Namun untuk MVP (Minimum Viable Product) aplikasi web standar, biasanya memakan waktu antara 4 hingga 8 minggu mulai dari tahap discovery hingga launch.",
  },
  {
    id: "faq-2",
    question:
      "Apakah Andhira bisa menyesuaikan solusi dengan budget perusahaan kami?",
    answer:
      "Tentu. Kami menggunakan pendekatan agile. Jika budget terbatas, kami akan memprioritaskan fitur-fitur krusial yang berdampak paling besar bagi bisnis (fase 1), lalu fitur tambahan bisa dikerjakan di fase berikutnya.",
  },
  {
    id: "faq-3",
    question: "Bagaimana sistem support setelah aplikasi selesai dan launch?",
    answer:
      "Kami menyediakan masa garansi bug fixes gratis selama 1-3 bulan setelah launch. Di luar itu, kami menawarkan layanan Maintenance & Support kontrak bulanan atau tahunan dengan SLA (Service Level Agreement) yang jelas.",
  },
  {
    id: "faq-4",
    question:
      "Apakah sistem baru ini bisa dihubungkan dengan software lama yang kami pakai?",
    answer:
      "Sangat bisa. Jika software lama Anda memiliki API, kemampuan ekspor database, atau sistem webhook, tim engineer kami berpengalaman melakukan integrasi agar transisi data berjalan mulus tanpa mengganggu operasional.",
  },
  {
    id: "faq-5",
    question: "Apakah kami mendapatkan full akses ke source code proyek?",
    answer:
      "Hal ini bergantung pada kesepakatan kontrak awal. Untuk proyek custom development secara penuh (white-label), source code tentu menjadi hak milik klien setelah pelunasan keseluruhan.",
  },
];
