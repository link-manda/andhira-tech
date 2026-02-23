"use client";

import Image from "next/image";
import { Linkedin, Twitter, Github, MousePointer2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060D1A] text-slate-400 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Glossy gradient bottom border effect */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2 pr-8">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                Andhira.
              </span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light max-w-sm">
              Kami bangun sistem yang menopang pertumbuhan bisnis Anda. Andal,
              skalabel, dan aman sejak hari pertama.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all text-slate-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all text-slate-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all text-slate-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">
              Platform
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="hover:text-amber-400 transition-colors text-base font-medium"
                >
                  Ringkasan
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors text-base font-medium"
                >
                  Arsitektur
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-amber-400 transition-colors text-base font-medium"
                >
                  Studi Kasus
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-amber-400 transition-colors text-base font-medium"
                >
                  Perusahaan
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">
              Kapabilitas
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors text-base font-medium"
                >
                  Layanan Mikro
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors text-base font-medium"
                >
                  Infrastruktur Cloud
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors text-base font-medium"
                >
                  Pipeline DevOps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors text-base font-medium"
                >
                  Rekayasa UI/UX
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors text-base font-medium"
                >
                  SRE Sistem
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">
              Hukum
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors text-base font-medium"
                >
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors text-base font-medium"
                >
                  Ketentuan Layanan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors text-base font-medium"
                >
                  Detail Keamanan
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-base text-slate-500 font-light text-center md:text-left">
            &copy; {currentYear} PT Andhira Teknologi Nusantara. Hak cipta
            dilindungi undang-undang.
          </p>
          <p className="text-base text-slate-500 font-light flex items-center gap-2">
            Status:{" "}
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />{" "}
              Semua Sistem Aktif
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
