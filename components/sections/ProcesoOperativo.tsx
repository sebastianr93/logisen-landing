"use client";

import { motion } from "framer-motion";
import { Phone, Truck, Route, Package, RotateCcw } from "lucide-react";
import { staggerContainer, staggerItem, fadeUp, viewportOnce } from "@/lib/animations";

const STEPS = [
  { number: "01", icon: Phone, title: "Coordinación", desc: "Planificación integral con el cliente: turnos, documentación y requerimientos operativos." },
  { number: "02", icon: Truck, title: "Retiro / Posicionamiento", desc: "Retiro de importación en terminal o posicionamiento del contenedor para exportación." },
  { number: "03", icon: Route, title: "Traslado", desc: "Transporte terrestre con seguimiento en tiempo real y comunicación activa." },
  { number: "04", icon: Package, title: "Entrega / Puerto", desc: "Entrega en planta, depósito fiscal o ingreso al puerto cumpliendo ventana horaria." },
  { number: "05", icon: RotateCcw, title: "Devolución de Vacío", desc: "Gestión de devolución del contenedor vacío y cierre documental de la operación." },
];

export default function ProcesoOperativo() {
  return (
    <section id="proceso" className="section-py relative overflow-hidden" style={{ background: "#0F172A" }}>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(29, 78, 216, 0.2) 0%, transparent 50%)` }} />

      <div className="container-max relative z-10">
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
            Cómo operamos
          </div>
          <h2 style={{ fontFamily: "Manrope, sans-serif", color: "white", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.15 }}>
            Proceso operativo{" "}
            <span style={{ background: "linear-gradient(135deg, #60A5FA, #2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              paso a paso
            </span>
          </h2>
          <p style={{ color: "#64748B", fontSize: "1rem", lineHeight: 1.6 }}>
            Cada operación sigue un proceso claro, documentado y trazable para garantizar previsibilidad en cada etapa.
          </p>
        </motion.div>

        <div className="relative rounded-2xl overflow-hidden mb-12" style={{ height: "220px" }}>
          <img src="https://images.unsplash.com/photo-1519003300449-424ad0405076?w=1400&q=80" alt="Puerto de contenedores" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(15, 23, 42, 0.75)" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xl md:text-2xl font-bold text-center px-6" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "Manrope, sans-serif" }}>
              "Cada operación con planificación,<br className="hidden md:block" />seguimiento y comunicación directa"
            </p>
          </div>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 mx-16" style={{ background: "linear-gradient(90deg, #2563EB, #1E40AF, #2563EB)", zIndex: 0 }} />
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-4">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.number} variants={staggerItem} className="relative flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0 lg:text-center">
                  {i < STEPS.length - 1 && (
                    <div className="lg:hidden absolute left-8 top-16 w-0.5 h-8" style={{ background: "rgba(37, 99, 235, 0.3)", zIndex: 0 }} />
                  )}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center" style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)", boxShadow: "0 0 0 4px rgba(37, 99, 235, 0.15), 0 8px 25px rgba(37, 99, 235, 0.3)" }}>
                      <Icon size={20} color="white" />
                    </div>
                  </div>
                  <div className="lg:mt-5 lg:px-2">
                    <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#2563EB" }}>Paso {step.number}</div>
                    <h3 className="text-sm font-bold mb-2" style={{ fontFamily: "Manrope, sans-serif", color: "white" }}>{step.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
