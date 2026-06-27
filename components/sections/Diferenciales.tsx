"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { ShieldCheck, MapPin, Truck, Settings2 } from "lucide-react";
import { staggerContainer, staggerItem, fadeUp, viewportOnce } from "@/lib/animations";

const DIFFERENTIALS = [
  { icon: ShieldCheck, title: "Cumplimiento y Formalidad", desc: "Documentación y operación en regla para importación y exportación. Gestión formal y transparente en cada etapa." },
  { icon: MapPin, title: "Trazabilidad Total", desc: "Seguimiento e información actualizada en cada etapa del viaje. Visibilidad completa del estado de su carga." },
  { icon: Truck, title: "Capacidad Operativa", desc: "Disponibilidad para operaciones puntuales o volúmenes recurrentes. Flota propia con más de 150 unidades." },
  { icon: Settings2, title: "Condiciones a Medida", desc: "Esquemas comerciales según puerto, destino y frecuencia. Soluciones adaptadas a cada cliente." },
];

const METRICS = [
  { value: 10, suffix: "+", label: "Años de trayectoria" },
  { value: 150, suffix: "+", label: "Unidades propias" },
  { value: 300, suffix: "+", label: "Contenedores / mes" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 1.8, ease: "easeOut",
      onUpdate(v) { if (ref.current) ref.current.textContent = Math.round(v).toString() + suffix; },
    });
    return controls.stop;
  }, [inView, value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export default function Diferenciales() {
  return (
    <section id="diferenciales" className="section-py" style={{ background: "white" }}>
      <div className="container-max">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="section-header"
          style={{ marginBottom: "1rem" }}
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
            Diferenciales
          </div>
          <h2 style={{ fontFamily: "Manrope, sans-serif", color: "#0F172A", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.15 }}>
            ¿Por qué{" "}
            <span style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              elegirnos?
            </span>
          </h2>
          <p style={{ color: "#64748B", fontSize: "1rem", lineHeight: 1.6 }}>
            Pensado para operaciones que exigen previsibilidad, control documental y cumplimiento operativo.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {DIFFERENTIALS.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={staggerItem} className="group p-6 rounded-2xl transition-all duration-300 cursor-default"
              style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#0F172A"; el.style.borderColor = "rgba(37, 99, 235, 0.3)"; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 50px rgba(15, 23, 42, 0.2)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#F8FAFC"; el.style.borderColor = "#E2E8F0"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(37, 99, 235, 0.1)" }}><Icon size={22} style={{ color: "#2563EB" }} /></div>
              <h3 className="text-base font-bold mb-3" style={{ fontFamily: "Manrope, sans-serif", color: "#0F172A" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="rounded-2xl overflow-hidden" style={{ background: "#0F172A" }}>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {METRICS.map(({ value, suffix, label }) => (
              <div key={label} className="p-8 md:p-10 text-center group hover:bg-blue-900/20 transition-colors duration-300">
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2" style={{ fontFamily: "Manrope, sans-serif", background: "linear-gradient(135deg, #60A5FA, #2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  <Counter value={value} suffix={suffix} />
                </div>
                <p className="text-sm font-medium uppercase tracking-widest" style={{ color: "#64748B" }}>{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
