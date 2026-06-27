"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Users, TrendingUp, Radio } from "lucide-react";
import { fadeLeft, fadeRight, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const STATS = [
  { value: "+10", label: "Años de trayectoria", color: "#2563EB" },
  { value: "+150", label: "Unidades propias", color: "#2563EB" },
  { value: "+300", label: "Contenedores / mes", color: "#2563EB" },
  { value: "2", label: "Puertos principales", color: "#2563EB" },
];

const HIGHLIGHTS = [
  {
    icon: CheckCircle2,
    title: "Especialización",
    desc: "Operador 100% enfocado en transporte terrestre de contenedores.",
  },
  {
    icon: TrendingUp,
    title: "Importaciones",
    desc: "Retiro desde Puerto de Buenos Aires y Puerto de Zárate con coordinación integral.",
  },
  {
    icon: TrendingUp,
    title: "Exportaciones",
    desc: "Posicionamiento y traslado al puerto cumpliendo ventanas y turnos de embarque.",
  },
  {
    icon: Radio,
    title: "Trazabilidad",
    desc: "Seguimiento e información actualizada en cada etapa de la operación.",
  },
  {
    icon: Users,
    title: "Comunicación directa",
    desc: "Acompañamos con planificación y contacto directo con el cliente.",
  },
];

export default function QuienesSomos() {
  const ref = useRef(null);

  return (
    <section
      id="quienes"
      className="section-py"
      style={{ background: "#F8FAFC" }}
    >
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{
                background: "rgba(37, 99, 235, 0.08)",
                border: "1px solid rgba(37, 99, 235, 0.2)",
                color: "#2563EB",
              }}
            >
              ¿Quiénes somos?
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
              style={{ fontFamily: "Manrope, sans-serif", color: "#0F172A" }}
            >
              Logística que{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Conecta Argentina
              </span>
            </h2>

            <p className="text-base leading-relaxed mb-8" style={{ color: "#64748B" }}>
              Somos un operador logístico especializado en transporte terrestre de
              contenedores. Coordinamos retiros y entregas desde el Puerto de Buenos
              Aires y el Puerto de Zárate, tanto para importaciones como para
              exportaciones.
            </p>

            <p className="text-base leading-relaxed mb-10" style={{ color: "#64748B" }}>
              Acompañamos cada operación con planificación, seguimiento y comunicación
              directa con el cliente, garantizando previsibilidad, control documental y
              cumplimiento operativo en cada etapa del proceso.
            </p>

            {/* Highlights */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col gap-3"
            >
              {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={staggerItem}
                  className="flex items-start gap-3 p-3 rounded-lg transition-colors"
                  style={{ background: "white" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "white";
                  }}
                >
                  <div
                    className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(37, 99, 235, 0.1)" }}
                  >
                    <Icon size={15} style={{ color: "#2563EB" }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: "#0F172A" }}>
                      {title}
                    </p>
                    <p className="text-sm" style={{ color: "#64748B" }}>
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Image + Stats */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=85"
                alt="Flota LOGISEN en ruta"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.6) 100%)",
                }}
              />
              {/* Overlay badge */}
              <div
                className="absolute bottom-6 left-6 right-6 p-4 rounded-xl"
                style={{
                  background: "rgba(15, 23, 42, 0.9)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(37, 99, 235, 0.3)",
                }}
              >
                <p
                  className="text-sm font-semibold"
                  style={{ color: "white" }}
                >
                  Flota propia con más de 150 unidades
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>
                  Disponibilidad para operaciones puntuales y recurrentes
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="p-5 rounded-xl transition-all duration-300"
                  style={{ background: "white", border: "1px solid #E2E8F0" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,99,235,0.3)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 25px rgba(37,99,235,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <p
                    className="text-2xl font-extrabold mb-1"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#2563EB" }}
                  >
                    {value}
                  </p>
                  <p className="text-xs font-medium" style={{ color: "#64748B" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
