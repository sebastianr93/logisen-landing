"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpFromLine, Check } from "lucide-react";
import { fadeLeft, fadeRight, viewportOnce, fadeUp } from "@/lib/animations";

const IMPORTACIONES = [
  "Retiro desde Puerto de Buenos Aires",
  "Retiro desde Puerto de Zárate",
  "Coordinación con terminales portuarias",
  "Entrega en planta del cliente",
  "Entrega en depósitos fiscales",
  "Entrega en almacenes del cliente",
];

const EXPORTACIONES = [
  "Posicionamiento de contenedores para carga",
  "Traslado al puerto de embarque",
  "Coordinación operativa integral",
  "Cumplimiento de turnos portuarios",
  "Cumplimiento de ventanas de embarque",
  "Control y seguimiento de condiciones",
];

export default function ImportExport() {
  return (
    <section id="operaciones" className="section-py" style={{ background: "white" }}>
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
              background: "rgba(37, 99, 235, 0.08)",
              border: "1px solid rgba(37, 99, 235, 0.2)", color: "#2563EB",
            }}
          >
            Transporte y Distribución
          </div>
          <h2 style={{ fontFamily: "Manrope, sans-serif", color: "#0F172A", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.15 }}>
            Importaciones &{" "}
            <span style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Exportaciones
            </span>
          </h2>
          <p style={{ color: "#64748B", fontSize: "1rem", lineHeight: 1.6 }}>
            Cobertura completa del ciclo de comercio exterior con operación terrestre
            integrada desde y hacia los principales puertos argentinos.
          </p>
        </motion.div>

        <div className="relative rounded-2xl overflow-hidden mb-12" style={{ height: "280px" }}>
          <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1400&q=80" alt="Flota de camiones LOGISEN" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.4) 100%)" }} />
          <div className="absolute inset-0 flex items-center px-10">
            <div>
              <p className="text-2xl md:text-3xl font-extrabold mb-2" style={{ fontFamily: "Manrope, sans-serif", color: "white" }}>
                Transporte y distribución<br />de contenedores
              </p>
              <p className="text-sm" style={{ color: "#94A3B8" }}>Puerto de Buenos Aires · Puerto de Zárate</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Importaciones", icon: ArrowDownToLine, subtitle: "Retiro y distribución desde puertos", items: IMPORTACIONES },
            { title: "Exportaciones", icon: ArrowUpFromLine, subtitle: "Posicionamiento y cumplimiento portuario", items: EXPORTACIONES },
          ].map(({ title, icon: Icon, subtitle, items }, i) => (
            <motion.div
              key={title}
              variants={i === 0 ? fadeLeft : fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid #E2E8F0" }}
            >
              <div className="p-6 flex items-center gap-4" style={{ background: "#0F172A" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(37, 99, 235, 0.2)" }}>
                  <Icon size={22} style={{ color: "#60A5FA" }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: "Manrope, sans-serif", color: "white" }}>{title}</h3>
                  <p className="text-xs" style={{ color: "#64748B" }}>{subtitle}</p>
                </div>
              </div>
              <div className="p-6" style={{ background: "#F8FAFC" }}>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(37, 99, 235, 0.1)" }}>
                        <Check size={11} style={{ color: "#2563EB" }} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium" style={{ color: "#1E293B" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
