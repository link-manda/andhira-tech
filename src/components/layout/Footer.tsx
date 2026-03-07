import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-slate-300 pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 inline-block focus-visible:ring-2 focus-visible:ring-accent rounded-sm max-w-max"
            >
              <Image
                src="/Andhira-Logo.png"
                alt="Andhira Tech Logo"
                width={160}
                height={48}
                className="h-10 w-auto object-contain rounded-md"
              />
            </Link>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed max-w-xs">
              Sistem development, SaaS solutions, IT infrastructure, and digital
              transformation. Integrating Technology, Empowering Future.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="text-slate-400 hover:text-accent transition-colors aria-label='LinkedIn'"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-accent transition-colors aria-label='Instagram'"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-accent transition-colors aria-label='Facebook'"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Navigasi</h4>
            <ul className="space-y-3">
              {[
                "Beranda",
                "Layanan",
                "Solusi",
                "Portofolio",
                "Tentang Kami",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded-sm outline-none px-1 -mx-1 block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6">Layanan</h4>
            <ul className="space-y-3">
              {[
                "Web & SaaS Development",
                "System Integration",
                "IT Consulting & Audit",
                "Maintenance & Support",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#layanan"
                    className="text-sm hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded-sm outline-none px-1 -mx-1 block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span>
                  Jl. Cempaka. GG.II, Sukawati, Kec. Sukawati, Kabupaten
                  Gianyar, Bali 80582
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-accent shrink-0" />
                <a
                  href="tel:+62895623318351"
                  className="hover:text-white transition-colors py-1 focus-visible:ring-2 focus-visible:ring-accent rounded-sm outline-none"
                >
                  +62 895 6233 1835 1
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-accent shrink-0" />
                <a
                  href="mailto:sales@andhira-tech.my.id"
                  className="hover:text-white transition-colors py-1 focus-visible:ring-2 focus-visible:ring-accent rounded-sm outline-none"
                >
                  sales@andhira-tech.my.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} PT Andhira Teknologi Nusantara. All
            rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <Link
              href="#"
              className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded-sm outline-none py-1"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded-sm outline-none py-1"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
