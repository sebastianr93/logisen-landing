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
    <section
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(15,23,42,0.97) 0%, rgba(37,99,235,0.85) 100%)",
        }}
      />

      {/* Decorative lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.5), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.5), transparent)" }}
      />

      <div className="container-max relative z-10 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            ¿Listo para optimizar su logística?
          </div>

          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 max-w-3xl mx-auto leading-tight"
            style={{ fontFamily: "Manrope, sans-serif", color: "white" }}
          >
            Optimice su operación logística con un socio estratégico
          </h2>

          <p className="text-lg mb-12 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Cuéntenos su operación. Diseñamos una solución a medida con cobertura
            en los principales puertos de Argentina.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollTo("#contacto")}
              className="group flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300"
              style={{
                background: "white",
                color: "#0F172A",
                boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
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
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="tel:+5491131854127"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
                backdropFilter: "blur(10px)",
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
