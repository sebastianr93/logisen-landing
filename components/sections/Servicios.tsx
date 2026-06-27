"use client";

import { motion } from "framer-motion";
import {
  ArrowDownToLine, ArrowUpFromLine, RotateCcw, Anchor,
  Factory, Clock, RefreshCw, Box, Calendar, Star,
} from "lucide-react";
import { staggerContainer, staggerItem, fadeUp, viewportOnce } from "@/lib/animations";

const SERVICES = [
  { icon: ArrowDownToLine, title: "Retiro de Importación", desc: "Retiro de contenedores desde terminales portuarias con coordinación completa." },
  { icon: ArrowUpFromLine, title: "Posicionamiento de Exportación", desc: "Posicionamiento de contenedores para carga y traslado al puerto." },
  { icon: RotateCcw, title: "Devolución de Vacío", desc: "Gestión de devolución de contenedores vacíos a depósitos y terminales." },
  { icon: Anchor, title: "Ingreso a Puerto", desc: "Coordinación de ingreso a terminales portuarias cumpliendo turnos asignados." },
  { icon: Factory, title: "Entrega en Planta", desc: "Entrega directa en planta del cliente, depósito fiscal o almacén." },
  { icon: Clock, title: "Turnos Portuarios", desc: "Gestión y cumplimiento de turnos en terminales de Buenos Aires y Zárate." },
  { icon: RefreshCw, title: "Operación Round Trip", desc: "Optimización de viajes de retorno para máxima eficiencia operativa." },
  { icon: Box, title: "Contenedores 20' y 40'", desc: "Capacidad operativa para contenedores de 20 y 40 pies estándar." },
  { icon: Calendar, title: "Servicios Recurrentes", desc: "Esquemas de servicio continuo para operaciones de volumen regular." },
  { icon: Star, title: "Operaciones Especiales", desc: "Soluciones a medida para cargas, rutas y requisitos especiales." },
];

export default function Servicios() {
  return (
    <section id="servicios" className="section-py" style={{ background: "#0F172A" }}>
      <div className="container-max">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="section-header"
        >
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.375rem 0.75rem", borderRadius: "9999px",
              fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: "1.5rem",
              background: "rgba(37, 99, 235, 0.15)",
              border: "1px solid rgba(37, 99, 235, 0.3)", color: "#60A5FA",
            }}
          >
            Tipos de Servicio
          </div>
          <h2 style={{ fontFamily: "Manrope, sans-serif", color: "white", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.15 }}>
            Soluciones para cada{" "}
            <span style={{ background: "linear-gradient(135deg, #60A5FA, #2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              operación logística
            </span>
          </h2>
          <p style={{ color: "#64748B", fontSize: "1rem", lineHeight: 1.6 }}>
            Cobertura integral del ciclo de transporte de contenedores, desde el retiro
            hasta la devolución, con servicios adaptados a cada necesidad.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {SERVICES.map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="group relative p-6 rounded-xl cursor-default transition-all duration-300"
              style={{ background: "rgba(30, 41, 59, 0.6)", border: "1px solid rgba(255,255,255,0.06)" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(37, 99, 235, 0.12)";
                el.style.borderColor = "rgba(37, 99, 235, 0.4)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 40px rgba(37, 99, 235, 0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(30, 41, 59, 0.6)";
                el.style.borderColor = "rgba(255,255,255,0.06)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div className="absolute top-4 right-4 text-xs font-bold" style={{ color: "rgba(37, 99, 235, 0.3)" }}>
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(37, 99, 235, 0.15)" }}>
                <Icon size={18} style={{ color: "#60A5FA" }} />
              </div>
              <h3 className="text-sm font-bold mb-2 leading-tight" style={{ color: "white", fontFamily: "Manrope, sans-serif" }}>{title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
