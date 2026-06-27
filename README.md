# LOGISEN — Landing Page Corporativa

Sitio corporativo para **LOGISEN**, operador logístico especializado en transporte terrestre de contenedores. Coordinan importaciones y exportaciones desde los puertos de Buenos Aires y Zárate con trazabilidad total y cumplimiento operativo.

---

## Stack tecnológico

- **Next.js 15** — App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — animaciones y scroll reveal
- **Lucide React** — íconos

---

## Estructura del proyecto

```
logisen/
├── app/
│   ├── layout.tsx        # Root layout + metadata SEO
│   ├── page.tsx          # Página principal
│   └── sitemap.ts        # Sitemap dinámico
├── components/
│   └── sections/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── QuienesSomos.tsx
│       ├── Servicios.tsx
│       ├── ImportExport.tsx
│       ├── ProcesoOperativo.tsx
│       ├── CoberturaOperativa.tsx
│       ├── Diferenciales.tsx
│       ├── Clientes.tsx
│       ├── CtaFinal.tsx
│       ├── Contacto.tsx
│       └── Footer.tsx
├── lib/
│   ├── animations.ts     # Variantes Framer Motion
│   └── utils.ts          # cn() helper
├── styles/
│   └── globals.css       # Tokens de diseño + Tailwind
└── public/
    └── robots.txt
```

---

## Secciones

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | Header | Sticky con blur al scroll, menú responsive |
| 2 | Hero | Pantalla completa con overlay y animaciones de entrada |
| 3 | Quiénes Somos | Layout texto + imagen, estadísticas con hover |
| 4 | Servicios | Grid de 10 cards con hover premium |
| 5 | Importaciones & Exportaciones | Dos bloques diferenciados |
| 6 | Proceso Operativo | Timeline horizontal (desktop) / vertical (mobile) |
| 7 | Cobertura Operativa | Mapa SVG de Argentina con marcadores animados |
| 8 | Diferenciales | Cards + banner de métricas con contador animado |
| 9 | Clientes | Carrusel doble con logos de empresas |
| 10 | CTA Final | Bloque de conversión con imagen de fondo |
| 11 | Contacto | Formulario con validación completa |
| 12 | Footer | Links rápidos, datos de contacto, copyright |

---

## Instalación y desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/logisen-landing.git
cd logisen-landing

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

---

## Scripts disponibles

```bash
npm run dev      # Desarrollo con hot reload
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting
```

---

## SEO

- Metadata completa con Open Graph y Twitter Cards
- Schema.org `Organization` y `LocalBusiness`
- `robots.txt` y `sitemap.xml` dinámico
- Lighthouse objetivo: Performance, SEO, Accessibility y Best Practices > 95

---

## Despliegue en Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Importar el repositorio desde el dashboard de Vercel
2. Vercel detecta Next.js automáticamente — no requiere configuración adicional
3. Hacer clic en **Deploy**

Para conectar el dominio `logisen.com.ar`, agregar los siguientes registros DNS:

| Tipo | Nombre | Valor |
|------|--------|-------|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

---

## Paleta de colores

| Token | Hex | Uso |
|-------|-----|-----|
| Primary | `#0F172A` | Fondo dark, textos principales |
| Primary Light | `#1E293B` | Cards dark, superficies secundarias |
| Accent | `#2563EB` | Botones, íconos, highlights |
| Accent Hover | `#1D4ED8` | Estados hover |
| Surface | `#F8FAFC` | Fondo secciones claras |
| Muted | `#64748B` | Textos secundarios |

---

## Contacto cliente

**Nicolás Centurión** — Gerente de Operaciones y Nuevos Negocios  
📞 +54 9 11 3185 4127  
📧 ncenturion@logisen.com.ar  
🌐 [www.logisen.com.ar](https://www.logisen.com.ar)

---

*Desarrollado por [Sebastian](https://github.com/sebastianr93)*
# logisen-landing
