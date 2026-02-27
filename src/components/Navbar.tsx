"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Layanan", href: "#services" },
  { name: "Solusi", href: "#solutions" },
  { name: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? "py-2 sm:py-3" : "py-4 sm:py-6"
      }`}
    >
      <div
        className={`mx-auto px-5 sm:px-6 max-w-7xl transition-all duration-500 ${
          isScrolled
            ? "glass mx-4 sm:mx-auto mt-2 rounded-4xl sm:rounded-full"
            : "rounded-2xl sm:rounded-full"
        }`}
      >
        <div className="flex items-center justify-between h-16">
          <div className="flex w-full sm:w-auto items-center justify-between">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#home");
              }}
              className="flex items-center gap-3 group"
            >
              {/* <div className="relative flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="PT Andhira Teknologi Nusantara Logo"
                  width={40}
                  height={36}
                  className="object-contain w-auto h-8 sm:h-9 rounded-lg sm:rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300"
                />
              </div> */}
              <span
                className={`font-bold text-xl sm:text-2xl tracking-tight transition-colors ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
              >
                Andhira.
              </span>
            </a>
            {/* Mobile Toggle */}
            <button
              className="sm:hidden p-2 -mr-2 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X
                  className={isScrolled ? "text-primary" : "text-white"}
                  size={24}
                />
              ) : (
                <Menu
                  className={isScrolled ? "text-primary" : "text-white"}
                  size={24}
                />
              )}
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-white/10 ${
                  isScrolled
                    ? "text-slate-600 hover:text-primary hover:bg-slate-100/50"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center">
            <button
              onClick={() => scrollTo("#contact")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg ${
                isScrolled
                  ? "bg-primary text-white shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
                  : "bg-white text-primary shadow-white/20 hover:shadow-white/40 hover:-translate-y-0.5"
              }`}
            >
              Mulai Konsultasi
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden absolute top-full left-4 right-4 mt-2 origin-top rounded-2xl p-4 glass-card border border-slate-200"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100/50 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-slate-200 my-2" />
              <button
                onClick={() => scrollTo("#contact")}
                className="w-full px-5 py-3.5 rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow text-center"
              >
                Mulai Konsultasi
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
