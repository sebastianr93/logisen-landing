"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

const CLIENTS = [
  { name: "AXIONLOG", color: "#0052A5" },
  { name: "Dánica", color: "#E31E24" },
  { name: "McCain", color: "#000000" },
  { name: "SNF Water Science", color: "#003087" },
  { name: "Syngenta", color: "#00A650" },
  { name: "BASF", color: "#004A9F" },
  { name: "Minera Exar", color: "#1A1A1A" },
  { name: "B|Braun", color: "#005EB8" },
  { name: "Cervecería Quilmes", color: "#0056A3" },
  { name: "Cartocor", color: "#E8510A" },
  { name: "Nestlé", color: "#009AC7" },
  { name: "PepsiCo", color: "#004B93" },
];

// Duplicate for infinite scroll
const ALL_CLIENTS = [...CLIENTS, ...CLIENTS];

export default function Clientes() {
  return (
    <section
      id="clientes"
      className="section-py"
      style={{ background: "#0F172A" }}
    >
      <div className="container-max">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{
              background: "rgba(37, 99, 235, 0.15)",
              border: "1px solid rgba(37, 99, 235, 0.3)",
              color: "#60A5FA",
            }}
          >
            Clientes
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Manrope, sans-serif", color: "white" }}
          >
            Empresas que confían{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA, #2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              en nosotros
            </span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#64748B" }}>
            Acompañamos a empresas líderes que necesitan un transporte de contenedores
            serio, previsible y coordinado.
          </p>
        </motion.div>
      </div>

      {/* Full-width carousel */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, #0F172A, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(-90deg, #0F172A, transparent)",
          }}
        />

        {/* Track 1 */}
        <div className="flex gap-5 marquee-track mb-5" style={{ width: "max-content" }}>
          {ALL_CLIENTS.map((client, i) => (
            <ClientCard key={`t1-${i}`} client={client} />
          ))}
        </div>

        {/* Track 2 — reversed */}
        <div
          className="flex gap-5"
          style={{
            width: "max-content",
            animation: "marquee 25s linear infinite reverse",
          }}
        >
          {ALL_CLIENTS.map((client, i) => (
            <ClientCard key={`t2-${i}`} client={client} />
          ))}
        </div>
      </div>

      {/* Bottom stats */}
      <div className="container-max mt-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <p className="text-sm font-medium mb-2" style={{ color: "#64748B" }}>
            Y muchas más empresas de primera línea
          </p>
          <p className="text-xs" style={{ color: "#475569" }}>
            Industria alimentaria · Química · Agro · Salud · Consumo masivo
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ClientCard({ client }: { client: { name: string; color: string } }) {
  return (
    <div
      className="flex-shrink-0 w-44 h-20 rounded-xl flex items-center justify-center px-4 transition-all duration-300 cursor-default"
      style={{
        background: "rgba(30, 41, 59, 0.6)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(37, 99, 235, 0.1)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(37, 99, 235, 0.3)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(30, 41, 59, 0.6)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
      }}
    >
      <span
        className="text-sm font-bold text-center leading-tight"
        style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Manrope, sans-serif" }}
      >
        {client.name}
      </span>
    </div>
  );
}
