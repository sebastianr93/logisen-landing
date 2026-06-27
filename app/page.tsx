import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import QuienesSomos from "@/components/sections/QuienesSomos";
import Servicios from "@/components/sections/Servicios";
import ImportExport from "@/components/sections/ImportExport";
import ProcesoOperativo from "@/components/sections/ProcesoOperativo";
import CoberturaOperativa from "@/components/sections/CoberturaOperativa";
import Diferenciales from "@/components/sections/Diferenciales";
import Clientes from "@/components/sections/Clientes";
import CtaFinal from "@/components/sections/CtaFinal";
import Contacto from "@/components/sections/Contacto";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <QuienesSomos />
      <Servicios />
      <ImportExport />
      <ProcesoOperativo />
      <CoberturaOperativa />
      <Diferenciales />
      <Clientes />
      <CtaFinal />
      <Contacto />
      <Footer />
    </main>
  );
}
