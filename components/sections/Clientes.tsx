"use client";

import { useRef } from "react";
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

const ALL_CLIENTS = [...CLIENTS, ...CLIENTS];

export default function Clientes() {
  return (
    <section
      id="clientes"
      className="section-py"
      style={{ background: "#0F172A" }}
    >
      {/* Header — full width, centrado correctamente */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ textAlign: "center", maxWidth: "720px", padding: "0 1.5rem", marginBottom: "3.5rem" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.375rem 0.75rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
              background: "rgba(37, 99, 235, 0.15)",
              border: "1px solid rgba(37, 99, 235, 0.3)",
              color: "#60A5FA",
            }}
          >
            Clientes
          </div>
          <h2
            style={{
              fontFamily: "Manrope, sans-serif",
              color: "white",
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              fontWeight: 800,
              marginBottom: "1rem",
              lineHeight: 1.15,
            }}
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
          <p style={{ color: "#64748B", fontSize: "1rem", lineHeight: 1.6 }}>
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
          style={{ background: "linear-gradient(90deg, #0F172A, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(-90deg, #0F172A, transparent)" }}
        />

        {/* Track 1 — pausa on hover */}
        <Track clients={ALL_CLIENTS} trackId="t1" duration={20} reverse={false} />

        {/* Track 2 — pausa on hover, dirección inversa */}
        <Track clients={ALL_CLIENTS} trackId="t2" duration={25} reverse={true} />
      </div>

      {/* Bottom note */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "4rem" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ textAlign: "center" }}
        >
          <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "#64748B", marginBottom: "0.5rem" }}>
            Y muchas más empresas de primera línea
          </p>
          <p style={{ fontSize: "0.75rem", color: "#475569" }}>
            Industria alimentaria · Química · Agro · Salud · Consumo masivo
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Track({
  clients,
  trackId,
  duration,
  reverse,
}: {
  clients: typeof ALL_CLIENTS;
  trackId: string;
  duration: number;
  reverse: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
  };
  const handleMouseLeave = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "running";
  };

  return (
    <div
      ref={trackRef}
      className="flex gap-5 mb-5"
      style={{
        width: "max-content",
        animation: `marquee ${duration}s linear infinite ${reverse ? "reverse" : ""}`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {clients.map((client, i) => (
        <ClientCard key={`${trackId}-${i}`} client={client} />
      ))}
    </div>
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
