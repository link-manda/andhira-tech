export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Budi Santoso",
    role: "Direktur Operasional",
    company: "PT Logistik Maju Jaya",
    quote:
      "Sejak bekerja sama dengan Andhira, sistem tracking logistik kami menjadi jauh lebih akurat. Tim mereka sangat responsif dan paham betul apa yang bisnis kami butuhkan, bukan sekadar memberikan solusi template.",
  },
  {
    id: "t2",
    name: "Siti Amelia",
    role: "Founder",
    company: "Amelia Retail Group",
    quote:
      "Migrasi sistem kasir lama kami ke platform baru berjalan sangat mulus berkat pendampingan tim Andhira. Impact ke laporan penjualan bulanan sangat terasa, kami jadi bisa mengambil keputusan lebih cepat.",
  },
  {
    id: "t3",
    name: "Hendra Wijaya",
    role: "IT Manager",
    company: "Klinik Sehat Bersama",
    quote:
      "Dokumentasi yang rapi, clean code, dan support yang luar biasa. Andhira adalah mitra teknologi yang bisa diandalkan untuk jangka panjang bagi kelangsungan operasional IT 저희.",
  },
];
