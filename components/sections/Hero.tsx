"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, MapPin, Clock } from "lucide-react";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85')` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.82) 50%, rgba(30,41,59,0.75) 100%)" }}
      />
      <div
        className="absolute top-0 left-0 w-1.5 h-full"
        style={{ background: "linear-gradient(180deg, #2563EB, #1E40AF, transparent)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-max relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">

          {/* Eyebrow — padding aumentado, texto blanco, z-index explícito */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div
              style={{
                position: "relative",
                zIndex: 10,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "0.625rem 1.25rem",
                borderRadius: "9999px",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "white",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "9999px",
                  background: "#2563EB",
                  flexShrink: 0,
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              />
              Operador Logístico · Argentina
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-6"
            style={{ fontFamily: "Manrope, sans-serif", color: "white" }}
          >
            Especialistas en{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA, #2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Transporte Terrestre
            </span>{" "}
            de Contenedores
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ color: "#94A3B8" }}
          >
            Coordinamos importaciones y exportaciones desde los principales puertos
            de Argentina con trazabilidad total, cumplimiento documental y seguimiento
            operativo en cada etapa del viaje.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <button
              onClick={() => scrollTo("#contacto")}
              className="group flex items-center gap-2.5 rounded-lg font-semibold transition-all duration-300"
              style={{
                padding: "1rem 2rem",
                fontSize: "1rem",
                background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                color: "white",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 30px rgba(37, 99, 235, 0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(37, 99, 235, 0.55)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(37, 99, 235, 0.4)";
              }}
            >
              Solicitar Cotización
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollTo("#servicios")}
              className="group flex items-center gap-2.5 rounded-lg font-semibold transition-all duration-300"
              style={{
                padding: "1rem 2rem",
                fontSize: "1rem",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              Conocer Servicios
              <ChevronDown size={16} />
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap items-center gap-6 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            {[
              { icon: Shield, text: "+10 años de trayectoria" },
              { icon: MapPin, text: "Puertos Bs. As. y Zárate" },
              { icon: Clock, text: "+300 contenedores / mes" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: "rgba(37, 99, 235, 0.2)" }}>
                  <Icon size={13} style={{ color: "#60A5FA" }} />
                </div>
                <span className="text-sm font-medium" style={{ color: "#94A3B8" }}>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("#quienes")}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "#475569" }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={18} style={{ color: "#2563EB" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
