"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin, Send, CheckCircle } from "lucide-react";
import { fadeLeft, fadeRight, viewportOnce, fadeUp } from "@/lib/animations";

type FormState = { nombre: string; empresa: string; email: string; telefono: string; mensaje: string; };
type Errors = Partial<Record<keyof FormState, string>>;

const inputStyle = {
  base: {
    width: "100%",
    padding: "0.875rem 1rem",
    borderRadius: "0.5rem",
    fontSize: "0.9375rem",
    outline: "none",
    transition: "all 0.2s ease",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "white",
  },
  error: {
    border: "1px solid #EF4444",
  },
};

export default function Contacto() {
  const [form, setForm] = useState<FormState>({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.nombre.trim()) e.nombre = "El nombre es obligatorio";
    if (!form.empresa.trim()) e.empresa = "La empresa es obligatoria";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Email inválido";
    if (!form.mensaje.trim()) e.mensaje = "El mensaje es obligatorio";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  const Field = ({
    id, label, type = "text", placeholder = "", optional = false,
  }: { id: keyof FormState; label: string; type?: string; placeholder?: string; optional?: boolean }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <label style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748B" }}>
        {label}{!optional && <span style={{ color: "#2563EB" }}> *</span>}
      </label>
      <input
        type={type}
        value={form[id]}
        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
        placeholder={placeholder}
        style={{ ...inputStyle.base, ...(errors[id] ? inputStyle.error : {}) }}
        onFocus={(e) => {
          if (!errors[id]) e.target.style.borderColor = "rgba(37,99,235,0.6)";
          e.target.style.background = "rgba(255,255,255,0.08)";
        }}
        onBlur={(e) => {
          if (!errors[id]) e.target.style.borderColor = "rgba(255,255,255,0.1)";
          e.target.style.background = "rgba(255,255,255,0.05)";
        }}
      />
      {errors[id] && <p style={{ fontSize: "0.75rem", color: "#EF4444", marginTop: "0.125rem" }}>{errors[id]}</p>}
    </div>
  );

  return (
    <section id="contacto" className="section-py" style={{ background: "#0F172A" }}>
      <div className="container-max">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="section-header"
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.375rem 0.75rem", borderRadius: "9999px",
            fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em",
            textTransform: "uppercase", marginBottom: "1.5rem",
            background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)", color: "#60A5FA",
          }}>
            Contacto
          </div>
          <h2 style={{ fontFamily: "Manrope, sans-serif", color: "white", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.15 }}>
            Sigamos en{" "}
            <span style={{ background: "linear-gradient(135deg, #60A5FA, #2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              contacto
            </span>
          </h2>
          <p style={{ color: "#64748B", fontSize: "1rem", lineHeight: 1.6 }}>
            Cuéntenos su operación y le diseñamos una solución logística a medida.
            Respuesta en menos de 24 horas hábiles.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2"
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {/* Person card */}
            <div style={{ borderRadius: "1rem", padding: "2rem", background: "rgba(30,41,59,0.5)", border: "1px solid rgba(37,99,235,0.2)" }}>
              <div style={{
                width: "3.5rem", height: "3.5rem", borderRadius: "9999px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.25rem",
                background: "linear-gradient(135deg, #2563EB, #1D4ED8)", color: "white",
                fontFamily: "Manrope, sans-serif",
              }}>
                NC
              </div>
              <h3 style={{ fontFamily: "Manrope, sans-serif", color: "white", fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                Nicolás Centurión
              </h3>
              <p style={{ color: "#64748B", fontSize: "0.875rem", marginBottom: "1.75rem" }}>
                Gerente de Operaciones y Nuevos Negocios
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
                {[
                  { icon: Phone, label: "+54 9 11 3185 4127", href: "tel:+5491131854127" },
                  { icon: Mail, label: "ncenturion@logisen.com.ar", href: "mailto:ncenturion@logisen.com.ar" },
                  { icon: Globe, label: "www.logisen.com.ar", href: "https://www.logisen.com.ar" },
                  { icon: MapPin, label: "Buenos Aires, Argentina", href: null },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: "2.25rem", height: "2.25rem", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: "rgba(37,99,235,0.15)" }}>
                      <Icon size={15} style={{ color: "#60A5FA" }} />
                    </div>
                    {href ? (
                      <a href={href} style={{ fontSize: "0.9rem", color: "#94A3B8", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#60A5FA"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#94A3B8"; }}
                      >{label}</a>
                    ) : (
                      <span style={{ fontSize: "0.9rem", color: "#94A3B8" }}>{label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Cobertura */}
            <div style={{ borderRadius: "1rem", padding: "1.25rem 1.5rem", background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)" }}>
              <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#60A5FA", marginBottom: "0.5rem" }}>Cobertura operativa</p>
              <p style={{ fontSize: "0.8125rem", color: "#64748B", lineHeight: 1.6 }}>
                Puerto de Buenos Aires · Puerto de Zárate · Gran Buenos Aires · Interior del país bajo consulta
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3"
          >
            <div style={{ borderRadius: "1rem", padding: "2.5rem", background: "rgba(30,41,59,0.4)", border: "1px solid rgba(255,255,255,0.06)" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "4rem 0" }}>
                  <div style={{ width: "4rem", height: "4rem", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", background: "rgba(37,99,235,0.15)" }}>
                    <CheckCircle size={30} style={{ color: "#2563EB" }} />
                  </div>
                  <h3 style={{ fontFamily: "Manrope, sans-serif", color: "white", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>¡Mensaje enviado!</h3>
                  <p style={{ color: "#64748B" }}>Nos pondremos en contacto en menos de 24 horas hábiles.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <Field id="nombre" label="Nombre completo" placeholder="Juan García" />
                    <Field id="empresa" label="Empresa" placeholder="Empresa S.A." />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <Field id="email" label="Email corporativo" type="email" placeholder="juan@empresa.com" />
                    <Field id="telefono" label="Teléfono" placeholder="+54 11 ..." optional />
                  </div>

                  {/* Textarea */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748B" }}>
                      Mensaje <span style={{ color: "#2563EB" }}>*</span>
                    </label>
                    <textarea
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      rows={5}
                      placeholder="Cuéntenos sobre su operación: tipo de carga, puerto, frecuencia estimada..."
                      style={{
                        ...inputStyle.base,
                        ...(errors.mensaje ? inputStyle.error : {}),
                        resize: "none",
                        minHeight: "140px",
                      }}
                      onFocus={(e) => {
                        if (!errors.mensaje) e.target.style.borderColor = "rgba(37,99,235,0.6)";
                        e.target.style.background = "rgba(255,255,255,0.08)";
                      }}
                      onBlur={(e) => {
                        if (!errors.mensaje) e.target.style.borderColor = "rgba(255,255,255,0.1)";
                        e.target.style.background = "rgba(255,255,255,0.05)";
                      }}
                    />
                    {errors.mensaje && <p style={{ fontSize: "0.75rem", color: "#EF4444" }}>{errors.mensaje}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.75rem",
                      width: "100%",
                      padding: "1.125rem 2rem",
                      borderRadius: "0.75rem",
                      fontWeight: 600,
                      fontSize: "1rem",
                      border: "none",
                      cursor: loading ? "not-allowed" : "pointer",
                      background: loading ? "rgba(37,99,235,0.5)" : "linear-gradient(135deg, #2563EB, #1D4ED8)",
                      color: "white",
                      boxShadow: loading ? "none" : "0 8px 25px rgba(37,99,235,0.3)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 35px rgba(37,99,235,0.45)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!loading) {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 25px rgba(37,99,235,0.3)";
                      }
                    }}
                  >
                    {loading ? (
                      <>
                        <div style={{ width: "1rem", height: "1rem", borderRadius: "9999px", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", animation: "spin 0.8s linear infinite" }} />
                        Enviando...
                      </>
                    ) : (
                      <>Solicitar Cotización <Send size={15} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
