import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.logisen.com.ar"),
  title: {
    default: "LOGISEN | Operador Logístico · Transporte Terrestre de Contenedores",
    template: "%s | LOGISEN",
  },
  description:
    "Operador logístico especializado en transporte terrestre de contenedores. Coordinamos importaciones y exportaciones desde los puertos de Buenos Aires y Zárate con trazabilidad total y cumplimiento operativo.",
  keywords: [
    "operador logístico",
    "transporte terrestre contenedores",
    "importaciones Argentina",
    "exportaciones Argentina",
    "Puerto Buenos Aires",
    "Puerto Zárate",
    "logística contenedores",
    "transporte marítimo terrestre",
    "round trip contenedores",
    "LOGISEN",
  ],
  authors: [{ name: "LOGISEN", url: "https://www.logisen.com.ar" }],
  creator: "LOGISEN",
  publisher: "LOGISEN",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.logisen.com.ar",
    siteName: "LOGISEN",
    title: "LOGISEN | Operador Logístico · Transporte Terrestre de Contenedores",
    description:
      "Coordinamos importaciones y exportaciones desde los principales puertos de Argentina con trazabilidad, cumplimiento y seguimiento operativo.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LOGISEN - Logística que Conecta Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LOGISEN | Transporte Terrestre de Contenedores",
    description:
      "Operador logístico especializado en importaciones y exportaciones desde puertos argentinos.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.logisen.com.ar",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LOGISEN",
  legalName: "LOGISEN S.A.",
  url: "https://www.logisen.com.ar",
  logo: "https://www.logisen.com.ar/logo.png",
  description:
    "Operador logístico especializado en transporte terrestre de contenedores para importaciones y exportaciones en Argentina.",
  foundingDate: "2014",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+54-9-11-3185-4127",
    contactType: "customer service",
    email: "ncenturion@logisen.com.ar",
    availableLanguage: "Spanish",
  },
  sameAs: ["https://www.logisen.com.ar"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "LOGISEN",
  image: "https://www.logisen.com.ar/og-image.jpg",
  url: "https://www.logisen.com.ar",
  telephone: "+54-9-11-3185-4127",
  email: "ncenturion@logisen.com.ar",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.6037,
    longitude: -58.3816,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
