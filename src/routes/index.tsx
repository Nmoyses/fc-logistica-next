import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { QuemSomos } from "@/components/site/QuemSomos";
import { QuatroPL } from "@/components/site/QuatroPL";
import { Solucoes } from "@/components/site/Solucoes";
import { Metodologia } from "@/components/site/Metodologia";
import { Segmentos } from "@/components/site/Segmentos";
import { Diferenciais } from "@/components/site/Diferenciais";
import { CtaComercial } from "@/components/site/CtaComercial";
import { Contato } from "@/components/site/Contato";
import { Footer } from "@/components/site/Footer";
import { contato } from "@/data/site";

const title = "FC Logística — Gestão Logística e Consultoria 4PL";
const description =
  "Empresa 4PL de gerenciamento logístico desde 2006. Gestão de transportes, supply chain, fornecedores, KPIs e redução de custos logísticos em todo o Brasil.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "FC Logística",
          description,
          foundingDate: "2006",
          email: contato.email,
          telephone: "+55 19 97405-5550",
          areaServed: "BR",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Joaquim Olavo de Carvalho, 29 — Centro",
            addressLocality: "Porto Feliz",
            addressRegion: "SP",
            addressCountry: "BR",
          },
        }),
      },
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
        <QuatroPL />
        <Solucoes />
        <Metodologia />
        <Segmentos />
        <Diferenciais />
        <CtaComercial />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
