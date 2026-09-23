import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { QuemSomos } from "@/components/site/QuemSomos";
import { Transicao } from "@/components/site/Transicao";
import { Fundador } from "@/components/site/Fundador";
import { OndeFCAtua } from "@/components/site/OndeFCAtua";
import { Solucoes } from "@/components/site/Solucoes";
import { Tecnologia } from "@/components/site/Tecnologia";
import { Sustentabilidade } from "@/components/site/Sustentabilidade";
import { ArquiteturaMarcas } from "@/components/site/ArquiteturaMarcas";
import { Metodologia } from "@/components/site/Metodologia";
import { Diferenciais } from "@/components/site/Diferenciais";
import { Segmentos } from "@/components/site/Segmentos";
import { Experiencia } from "@/components/site/Experiencia";
import { CtaComercial } from "@/components/site/CtaComercial";
import { Contato } from "@/components/site/Contato";
import { Footer } from "@/components/site/Footer";

const title = "FC Supply Tech Solutions – Gestão 4PL, Supply Chain e Tecnologia";
const description = "Gestão 4PL desde 2006, conectando Supply Chain, transportadores, fornecedores, tecnologia, inteligência de dados, custos e performance.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Experiencia />
        <Transicao />
        <Fundador />
        <OndeFCAtua />
        <Solucoes />
        <Tecnologia />
        <Sustentabilidade />
        <ArquiteturaMarcas />
        <Metodologia />
        <Diferenciais />
        <Segmentos />
        <CtaComercial />
        <Contato />
      </main>
      <Footer />
      <WhatsAppWidget/>
    </div>
  );
}