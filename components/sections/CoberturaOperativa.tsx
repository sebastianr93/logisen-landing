"use client";

import { motion } from "framer-motion";
import { Anchor, ArrowRight } from "lucide-react";
import { fadeLeft, fadeRight, viewportOnce, fadeUp } from "@/lib/animations";

const PORTS = [
  {
    name: "Puerto de Buenos Aires",
    subtitle: "Principal hub de operaciones",
    services: ["Retiros y entregas de importación", "Exportaciones y posicionamiento", "Coordinación con Exolgan, TRP y BACTSSA", "Gestión de turnos portuarios"],
  },
  {
    name: "Puerto de Zárate",
    subtitle: "Cobertura norte del Gran Buenos Aires",
    services: ["Coordinación operativa integral", "Posicionamiento de cargas", "Retiros de importación", "Cumplimiento de ventanas de embarque"],
  },
];

export default function CoberturaOperativa() {
  return (
    <section id="cobertura" className="section-py" style={{ background: "#F8FAFC" }}>
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
            Cobertura Operativa
          </div>
          <h2 style={{ fontFamily: "Manrope, sans-serif", color: "#0F172A", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.15 }}>
            Operación en los{" "}
            <span style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              puertos clave
            </span>
          </h2>
          <p style={{ color: "#64748B", fontSize: "1rem", lineHeight: 1.6 }}>
            Presencia y experiencia operativa en los dos principales puertos de la región,
            con cobertura para toda la zona del Gran Buenos Aires.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce} className="relative">
            <div className="relative rounded-2xl overflow-hidden" style={{ background: "#0F172A", border: "1px solid rgba(37, 99, 235, 0.2)", minHeight: "480px" }}>
              <svg viewBox="0 0 400 560" className="w-full h-full" style={{ minHeight: "480px" }}>
                <rect width="400" height="560" fill="#0F172A" />
                {[1,2,3,4,5,6,7,8].map((i) => <line key={`h${i}`} x1="0" y1={i*70} x2="400" y2={i*70} stroke="rgba(37,99,235,0.07)" strokeWidth="1" />)}
                {[1,2,3,4,5].map((i) => <line key={`v${i}`} x1={i*80} y1="0" x2={i*80} y2="560" stroke="rgba(37,99,235,0.07)" strokeWidth="1" />)}
                <path d="M 180 40 L 230 45 L 260 60 L 275 80 L 270 110 L 280 140 L 290 170 L 285 200 L 280 240 L 275 270 L 265 300 L 260 330 L 250 360 L 240 390 L 230 420 L 215 450 L 200 480 L 185 500 L 170 510 L 160 490 L 150 470 L 140 450 L 145 420 L 150 390 L 155 360 L 160 330 L 150 300 L 145 270 L 140 240 L 135 210 L 130 180 L 125 150 L 120 120 L 130 90 L 150 65 Z" fill="rgba(37, 99, 235, 0.08)" stroke="rgba(37, 99, 235, 0.25)" strokeWidth="1.5" />
                <circle cx="210" cy="310" r="35" fill="rgba(37, 99, 235, 0.1)" stroke="rgba(37, 99, 235, 0.2)" strokeWidth="1" />
                <motion.g initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, type: "spring" }}>
                  <circle cx="215" cy="315" r="10" fill="#2563EB" opacity="0.2" />
                  <circle cx="215" cy="315" r="6" fill="#2563EB" opacity="0.5" />
                  <circle cx="215" cy="315" r="3" fill="#60A5FA" />
                  <rect x="225" y="305" width="120" height="24" rx="4" fill="rgba(37,99,235,0.9)" />
                  <text x="232" y="321" fill="white" fontSize="9" fontWeight="bold" fontFamily="Inter, sans-serif">Puerto Bs. As.</text>
                </motion.g>
                <motion.g initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, type: "spring" }}>
                  <circle cx="220" cy="265" r="10" fill="#1D4ED8" opacity="0.2" />
                  <circle cx="220" cy="265" r="6" fill="#1D4ED8" opacity="0.5" />
                  <circle cx="220" cy="265" r="3" fill="#93C5FD" />
                  <rect x="230" y="255" width="95" height="24" rx="4" fill="rgba(29,78,216,0.9)" />
                  <text x="237" y="271" fill="white" fontSize="9" fontWeight="bold" fontFamily="Inter, sans-serif">Puerto Zárate</text>
                </motion.g>
                <motion.line x1="215" y1="310" x2="220" y2="270" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1, duration: 1 }} />
                <text x="200" y="40" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Inter" textAnchor="middle">REPÚBLICA ARGENTINA</text>
                <g transform="translate(350, 50)">
                  <circle cx="0" cy="0" r="18" fill="rgba(37,99,235,0.1)" stroke="rgba(37,99,235,0.3)" strokeWidth="1" />
                  <text x="0" y="-6" fill="#60A5FA" fontSize="8" fontWeight="bold" textAnchor="middle">N</text>
                  <line x1="0" y1="-14" x2="0" y2="14" stroke="rgba(37,99,235,0.4)" strokeWidth="1" />
                  <line x1="-14" y1="0" x2="14" y2="0" stroke="rgba(37,99,235,0.4)" strokeWidth="1" />
                </g>
              </svg>
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl" style={{ background: "rgba(15, 23, 42, 0.95)", border: "1px solid rgba(37, 99, 235, 0.2)", backdropFilter: "blur(10px)" }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ background: "#60A5FA" }} /><span className="text-xs" style={{ color: "#94A3B8" }}>Puerto Buenos Aires</span></div>
                  <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ background: "#93C5FD" }} /><span className="text-xs" style={{ color: "#94A3B8" }}>Puerto Zárate</span></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce} className="flex flex-col gap-6">
            {PORTS.map((port) => (
              <div key={port.name} className="rounded-2xl overflow-hidden transition-all duration-300" style={{ border: "1px solid #E2E8F0", background: "white" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,99,235,0.3)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(37,99,235,0.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div className="p-5 flex items-center gap-4" style={{ background: "#0F172A" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(37, 99, 235, 0.2)" }}><Anchor size={20} style={{ color: "#60A5FA" }} /></div>
                  <div>
                    <h3 className="font-bold text-base" style={{ fontFamily: "Manrope, sans-serif", color: "white" }}>{port.name}</h3>
                    <p className="text-xs" style={{ color: "#64748B" }}>{port.subtitle}</p>
                  </div>
                </div>
                <div className="p-5">
                  <ul className="grid grid-cols-1 gap-2.5">
                    {port.services.map((s) => (
                      <li key={s} className="flex items-center gap-2.5">
                        <ArrowRight size={12} style={{ color: "#2563EB", flexShrink: 0 }} />
                        <span className="text-sm" style={{ color: "#475569" }}>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
