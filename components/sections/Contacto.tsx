"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin, Send, CheckCircle } from "lucide-react";
import { fadeLeft, fadeRight, viewportOnce, fadeUp } from "@/lib/animations";

type FormState = {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function Contacto() {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!form.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!form.empresa.trim()) newErrors.empresa = "La empresa es obligatoria";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Email inválido";
    if (!form.mensaje.trim()) newErrors.mensaje = "El mensaje es obligatorio";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  const field = (
    key: keyof FormState,
    label: string,
    type = "text",
    placeholder = ""
  ) => (
    <div>
      <label
        className="block text-xs font-semibold uppercase tracking-wider mb-2"
        style={{ color: "#64748B" }}
      >
        {label}
        {key !== "telefono" && <span style={{ color: "#2563EB" }}> *</span>}
      </label>
      <input
        type={type}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: errors[key] ? "1px solid #EF4444" : "1px solid rgba(255,255,255,0.1)",
          color: "white",
        }}
        onFocus={(e) => {
          if (!errors[key]) e.target.style.borderColor = "rgba(37, 99, 235, 0.6)";
          e.target.style.background = "rgba(255,255,255,0.08)";
        }}
        onBlur={(e) => {
          if (!errors[key]) e.target.style.borderColor = "rgba(255,255,255,0.1)";
          e.target.style.background = "rgba(255,255,255,0.05)";
        }}
      />
      {errors[key] && (
        <p className="text-xs mt-1" style={{ color: "#EF4444" }}>{errors[key]}</p>
      )}
    </div>
  );

  return (
    <section
      id="contacto"
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
            Contacto
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Manrope, sans-serif", color: "white" }}
          >
            Sigamos en{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA, #2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              contacto
            </span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "#64748B" }}>
            Cuéntenos su operación y le diseñamos una solución logística a medida.
            Respuesta en menos de 24 horas hábiles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Contact Info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2"
          >
            {/* Person card */}
            <div
              className="rounded-2xl p-6 mb-6"
              style={{
                background: "rgba(30, 41, 59, 0.5)",
                border: "1px solid rgba(37, 99, 235, 0.2)",
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mb-4"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                  color: "white",
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                NC
              </div>
              <h3
                className="text-lg font-bold mb-1"
                style={{ fontFamily: "Manrope, sans-serif", color: "white" }}
              >
                Nicolás Centurión
              </h3>
              <p className="text-sm mb-5" style={{ color: "#64748B" }}>
                Gerente de Operaciones y Nuevos Negocios
              </p>

              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: Phone,
                    label: "+54 9 11 3185 4127",
                    href: "tel:+5491131854127",
                  },
                  {
                    icon: Mail,
                    label: "ncenturion@logisen.com.ar",
                    href: "mailto:ncenturion@logisen.com.ar",
                  },
                  {
                    icon: Globe,
                    label: "www.logisen.com.ar",
                    href: "https://www.logisen.com.ar",
                  },
                  {
                    icon: MapPin,
                    label: "Buenos Aires, Argentina",
                    href: null,
                  },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(37, 99, 235, 0.15)" }}
                    >
                      <Icon size={15} style={{ color: "#60A5FA" }} />
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: "#94A3B8" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "#60A5FA";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "#94A3B8";
                        }}
                      >
                        {label}
                      </a>
                    ) : (
                      <span className="text-sm" style={{ color: "#94A3B8" }}>
                        {label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick info */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "rgba(37, 99, 235, 0.08)",
                border: "1px solid rgba(37, 99, 235, 0.2)",
              }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: "#60A5FA" }}>
                Cobertura operativa
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>
                Puerto de Buenos Aires · Puerto de Zárate · Gran Buenos Aires
                · Interior del país bajo consulta
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
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(30, 41, 59, 0.4)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: "rgba(37, 99, 235, 0.15)" }}
                  >
                    <CheckCircle size={30} style={{ color: "#2563EB" }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "Manrope, sans-serif", color: "white" }}
                  >
                    ¡Mensaje enviado!
                  </h3>
                  <p style={{ color: "#64748B" }}>
                    Nos pondremos en contacto en menos de 24 horas hábiles.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {field("nombre", "Nombre completo", "text", "Juan García")}
                    {field("empresa", "Empresa", "text", "Empresa S.A.")}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {field("email", "Email corporativo", "email", "juan@empresa.com")}
                    {field("telefono", "Teléfono (opcional)", "tel", "+54 11 ...")}
                  </div>

                  {/* Textarea */}
                  <div className="mb-6">
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: "#64748B" }}
                    >
                      Mensaje <span style={{ color: "#2563EB" }}>*</span>
                    </label>
                    <textarea
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      rows={4}
                      placeholder="Cuéntenos sobre su operación: tipo de carga, puerto, frecuencia estimada..."
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: errors.mensaje
                          ? "1px solid #EF4444"
                          : "1px solid rgba(255,255,255,0.1)",
                        color: "white",
                      }}
                      onFocus={(e) => {
                        if (!errors.mensaje) e.target.style.borderColor = "rgba(37, 99, 235, 0.6)";
                      }}
                      onBlur={(e) => {
                        if (!errors.mensaje) e.target.style.borderColor = "rgba(255,255,255,0.1)";
                      }}
                    />
                    {errors.mensaje && (
                      <p className="text-xs mt-1" style={{ color: "#EF4444" }}>{errors.mensaje}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-base transition-all duration-300"
                    style={{
                      background: loading
                        ? "rgba(37, 99, 235, 0.5)"
                        : "linear-gradient(135deg, #2563EB, #1D4ED8)",
                      color: "white",
                      boxShadow: loading ? "none" : "0 8px 25px rgba(37, 99, 235, 0.3)",
                      cursor: loading ? "not-allowed" : "pointer",
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 35px rgba(37, 99, 235, 0.45)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!loading) {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 25px rgba(37, 99, 235, 0.3)";
                      }
                    }}
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                        />
                        Enviando...
                      </div>
                    ) : (
                      <>
                        Solicitar Cotización
                        <Send size={15} className="transition-transform group-hover:translate-x-1" />
                      </>
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
