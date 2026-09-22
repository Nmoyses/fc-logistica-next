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
import { AtuacaoNacional } from "@/components/site/AtuacaoNacional";
import { CtaComercial } from "@/components/site/CtaComercial";
import { Contato } from "@/components/site/Contato";
import { Footer } from "@/components/site/Footer";
import { contato } from "@/data/site";

const title = "FC Supply Tech Solutions — Gestão 4PL, Supply Chain e Tecnologia";
const description = "Gestão 4PL desde 2006, conectando Supply Chain, transportadores, fornecedores, tecnologia, inteligência de dados, custos e performance.";
export const Route = createFileRoute("/")({ component: Index, head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: "https://fc-logistica-next.lovable.app/" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "https://fc-logistica-next.lovable.app/" }], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "FC Supply Tech Solutions", legalName: "FINANCIAL & CONTROL SUPPLY TECH SOLUTIONS LTDA.", description, foundingDate: "2006", email: contato.email, telephone: "+55 19 97405-5550", areaServed: "BR", address: { "@type": "PostalAddress", streetAddress: "Rua Joaquim Olavo de Carvalho, 29 — Centro", addressLocality: "Porto Feliz", addressRegion: "SP", addressCountry: "BR" } }) }] }) });
function Index() { return <div className="min-h-screen bg-background"><Header /><main><Hero /><QuemSomos /><Transicao /><Fundador /><OndeFCAtua /><Solucoes /><Tecnologia /><Sustentabilidade /><ArquiteturaMarcas /><Experiencia /><Diferenciais /><Metodologia /><Segmentos /><AtuacaoNacional /><CtaComercial /><Contato /></main><Footer /></div>; }