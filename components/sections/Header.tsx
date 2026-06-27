"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Operaciones", href: "#operaciones" },
  { label: "Diferenciales", href: "#diferenciales" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(15, 23, 42, 0.97)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(37, 99, 235, 0.15)" : "none",
        }}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); handleNav("#inicio"); }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 group"
            >
              <LogisenLogo />
            </motion.a>

            {/* Desktop Nav */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden lg:flex items-center gap-8"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className="nav-link"
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block"
            >
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); handleNav("#contacto"); }}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                  color: "white",
                  boxShadow: "0 4px 15px rgba(37, 99, 235, 0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 25px rgba(37, 99, 235, 0.5)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 15px rgba(37, 99, 235, 0.3)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Solicitar Cotización
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md transition-colors"
              style={{ color: "white" }}
              aria-label="Menú"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
            style={{
              background: "rgba(15, 23, 42, 0.99)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(37, 99, 235, 0.2)",
            }}
          >
            <div className="container-max py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                  style={{ color: "#CBD5E1" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(37, 99, 235, 0.1)";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "#CBD5E1";
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-4 border-t border-white/10 mt-2">
                <a
                  href="#contacto"
                  onClick={(e) => { e.preventDefault(); handleNav("#contacto"); }}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold w-full"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                    color: "white",
                  }}
                >
                  Solicitar Cotización
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LogisenLogo() {
  return (
    <div className="flex items-center gap-3">
      {/* Icon */}
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M3 6h18M3 12h14M3 18h10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M19 15l3 3-3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span
          className="text-xl font-bold tracking-wide"
          style={{ fontFamily: "Manrope, sans-serif", color: "white" }}
        >
          LOGISEN
        </span>
        <span
          className="text-[9px] font-medium tracking-[0.15em] uppercase"
          style={{ color: "#2563EB" }}
        >
          Logística que Conecta Argentina
        </span>
      </div>
    </div>
  );
}
