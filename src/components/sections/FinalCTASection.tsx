"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export function FinalCTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Gagal mengirim pesan.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset toast after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <section
      id="kontak"
      className="py-24 relative overflow-hidden bg-primary text-white"
    >
      {/* Abstract Backgrounds */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.05]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Punya kebutuhan digitalisasi untuk bisnis Anda?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Diskusikan tantangan operasional Anda dengan teknikal expert kami,
              tanpa komitmen awal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/62895623318351"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 h-14 px-8 text-lg min-h-[44px] bg-emerald-600 hover:bg-emerald-700 text-white border-0"
              >
                Hubungi via WhatsApp
              </a>
              <span className="flex items-center text-sm text-slate-400 justify-center">
                atau isi form di samping
              </span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative text-foreground">
            <h3 className="text-2xl font-bold mb-2">Mulai Konsultasi</h3>
            <p className="text-slate-500 text-sm mb-6">
              Kami akan membalas pesan Anda maksimal dalam 1x24 jam kerja.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Nama Lengkap / Perusahaan *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base min-h-[44px]"
                  placeholder="Misal: John Doe - PT Bersama"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Alamat Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base min-h-[44px]"
                  placeholder="john@perusahaan.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Ceritakan Kebutuhan Anda *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-base min-h-[44px]"
                  placeholder="Kami butuh sistem inventory..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Mengirim Pesan..." : "Kirim Pesan"}
              </Button>
            </form>

            {/* Status Messages */}
            {status === "success" && (
              <div className="mt-4 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm text-center">
                ✅ Pesan berhasil terkirim! Tim kami akan segera menghubungi
                Anda.
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm text-center">
                ❌ {errorMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
