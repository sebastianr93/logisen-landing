"use client";

import { Phone, Mail, Globe, MapPin, ArrowRight } from "lucide-react";

const QUICK_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Operaciones", href: "#operaciones" },
  { label: "Diferenciales", href: "#diferenciales" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICES_LINKS = [
  "Retiro de Importación",
  "Posicionamiento de Exportación",
  "Devolución de Vacío",
  "Turnos Portuarios",
  "Operación Round Trip",
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#080F1E" }}>
      {/* Top divider */}
      <div
        className="h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)",
        }}
      />

      <div className="container-max pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6h18M3 12h14M3 18h10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M19 15l3 3-3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div
                  className="text-lg font-bold tracking-wide"
                  style={{ fontFamily: "Manrope, sans-serif", color: "white" }}
                >
                  LOGISEN
                </div>
                <div
                  className="text-[8px] font-medium tracking-[0.12em] uppercase"
                  style={{ color: "#2563EB" }}
                >
                  Logística que Conecta Argentina
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#475569" }}>
              Operador logístico especializado en transporte terrestre de
              contenedores. Importaciones y exportaciones desde los puertos
              clave de Argentina.
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { icon: Phone, text: "+54 9 11 3185 4127", href: "tel:+5491131854127" },
                { icon: Mail, text: "ncenturion@logisen.com.ar", href: "mailto:ncenturion@logisen.com.ar" },
                { icon: Globe, text: "www.logisen.com.ar", href: "https://www.logisen.com.ar" },
                { icon: MapPin, text: "Buenos Aires, Argentina", href: null },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={13} style={{ color: "#2563EB", flexShrink: 0 }} />
                  {href ? (
                    <a
                      href={href}
                      className="text-xs transition-colors duration-200"
                      style={{ color: "#475569" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#60A5FA"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#475569"; }}
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-xs" style={{ color: "#475569" }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-widest mb-5"
              style={{ color: "white" }}
            >
              Navegación
            </h4>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="flex items-center gap-1.5 text-sm transition-colors duration-200 group"
                    style={{ color: "#475569" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#60A5FA"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#475569"; }}
                  >
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-widest mb-5"
              style={{ color: "white" }}
            >
              Servicios
            </h4>
            <ul className="flex flex-col gap-2.5">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <span className="text-sm" style={{ color: "#475569" }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-widest mb-5"
              style={{ color: "white" }}
            >
              Cotizar
            </h4>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#475569" }}>
              ¿Necesita transporte de contenedores? Cuéntenos su operación.
            </p>
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); scrollTo("#contacto"); }}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-300"
              style={{
                background: "rgba(37, 99, 235, 0.15)",
                border: "1px solid rgba(37, 99, 235, 0.3)",
                color: "#60A5FA",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(37, 99, 235, 0.25)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(37, 99, 235, 0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(37, 99, 235, 0.15)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(37, 99, 235, 0.3)";
              }}
            >
              Solicitar cotización
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </a>

            {/* Puerto tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {["Puerto Bs. As.", "Puerto Zárate", "Contenedores 20'", "Contenedores 40'"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#475569",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "#334155" }}>
            © {new Date().getFullYear()} LOGISEN. Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: "#334155" }}>
            Diseñado para empresas que exigen previsibilidad y cumplimiento operativo.
          </p>
        </div>
      </div>
    </footer>
  );
}
