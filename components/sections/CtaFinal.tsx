"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function CtaFinal() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(15,23,42,0.97) 0%, rgba(37,99,235,0.85) 100%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.5), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.5), transparent)" }} />

      {/* Content — centrado con flexbox puro, sin depender de Tailwind text-center */}
      <div
        className="container-max relative z-10"
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1.25rem",
              borderRadius: "9999px",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "2rem",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            ¿Listo para optimizar su logística?
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "Manrope, sans-serif",
              color: "white",
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              fontWeight: 800,
              marginBottom: "1.5rem",
              lineHeight: 1.1,
              textAlign: "center",
              maxWidth: "48rem",
            }}
          >
            Optimice su operación logística con un socio estratégico
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "1.125rem",
              marginBottom: "3rem",
              maxWidth: "32rem",
              textAlign: "center",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
            }}
          >
            Cuéntenos su operación. Diseñamos una solución a medida con cobertura
            en los principales puertos de Argentina.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <button
              onClick={() => scrollTo("#contacto")}
              className="group"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "1rem 2.25rem",
                borderRadius: "0.75rem",
                fontWeight: 700,
                fontSize: "1rem",
                background: "white",
                color: "#0F172A",
                boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 50px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.3)";
              }}
            >
              Solicitar Cotización
              <ArrowRight size={16} />
            </button>

            <a
              href="tel:+5491131854127"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2.25rem",
                borderRadius: "0.75rem",
                fontWeight: 600,
                fontSize: "1rem",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
                backdropFilter: "blur(10px)",
                textDecoration: "none",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
              }}
            >
              +54 9 11 3185 4127
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
