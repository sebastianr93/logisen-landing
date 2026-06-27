"use client";

import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  RotateCcw,
  Anchor,
  Factory,
  Clock,
  RefreshCw,
  Box,
  Calendar,
  Star,
} from "lucide-react";
import { staggerContainer, staggerItem, fadeUp, viewportOnce } from "@/lib/animations";

const SERVICES = [
  {
    icon: ArrowDownToLine,
    title: "Retiro de Importación",
    desc: "Retiro de contenedores desde terminales portuarias con coordinación completa.",
    color: "#2563EB",
  },
  {
    icon: ArrowUpFromLine,
    title: "Posicionamiento de Exportación",
    desc: "Posicionamiento de contenedores para carga y traslado al puerto.",
    color: "#2563EB",
  },
  {
    icon: RotateCcw,
    title: "Devolución de Vacío",
    desc: "Gestión de devolución de contenedores vacíos a depósitos y terminales.",
    color: "#2563EB",
  },
  {
    icon: Anchor,
    title: "Ingreso a Puerto",
    desc: "Coordinación de ingreso a terminales portuarias cumpliendo turnos asignados.",
    color: "#2563EB",
  },
  {
    icon: Factory,
    title: "Entrega en Planta",
    desc: "Entrega directa en planta del cliente, depósito fiscal o almacén.",
    color: "#2563EB",
  },
  {
    icon: Clock,
    title: "Turnos Portuarios",
    desc: "Gestión y cumplimiento de turnos en terminales de Buenos Aires y Zárate.",
    color: "#2563EB",
  },
  {
    icon: RefreshCw,
    title: "Operación Round Trip",
    desc: "Optimización de viajes de retorno para máxima eficiencia operativa.",
    color: "#2563EB",
  },
  {
    icon: Box,
    title: "Contenedores 20' y 40'",
    desc: "Capacidad operativa para contenedores de 20 y 40 pies estándar.",
    color: "#2563EB",
  },
  {
    icon: Calendar,
    title: "Servicios Recurrentes",
    desc: "Esquemas de servicio continuo para operaciones de volumen regular.",
    color: "#2563EB",
  },
  {
    icon: Star,
    title: "Operaciones Especiales",
    desc: "Soluciones a medida para cargas, rutas y requisitos especiales.",
    color: "#2563EB",
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="section-py"
      style={{ background: "#0F172A" }}
    >
      <div className="container-max">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{
              background: "rgba(37, 99, 235, 0.15)",
              border: "1px solid rgba(37, 99, 235, 0.3)",
              color: "#60A5FA",
            }}
          >
            Tipos de Servicio
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Manrope, sans-serif", color: "white" }}
          >
            Soluciones para cada{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA, #2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              operación logística
            </span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#64748B" }}>
            Cobertura integral del ciclo de transporte de contenedores, desde el retiro
            hasta la devolución, con servicios adaptados a cada necesidad.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="group relative p-6 rounded-xl cursor-default transition-all duration-300"
              style={{
                background: "rgba(30, 41, 59, 0.6)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
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
              {/* Number label */}
              <div
                className="absolute top-4 right-4 text-xs font-bold"
                style={{ color: "rgba(37, 99, 235, 0.3)" }}
              >
                {String(SERVICES.indexOf({ icon: Icon, title, desc } as typeof SERVICES[0]) + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                style={{ background: "rgba(37, 99, 235, 0.15)" }}
              >
                <Icon size={18} style={{ color: "#60A5FA" }} />
              </div>

              <h3
                className="text-sm font-bold mb-2 leading-tight"
                style={{ color: "white", fontFamily: "Manrope, sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
