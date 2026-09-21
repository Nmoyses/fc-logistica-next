import React from "react";
import { Cpu, Network } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { BrandLogo } from "./BrandLogo";

// Importa as duas logos oficiais da sua pasta assets
import cargoLogoImg from "@/assets/integracargo-logo.png";
import carbonLogoImg from "@/assets/integracarbon-logo.png";

const marcas = [
  { nome: "FC Supply Tech Solutions", texto: "Gestão 4PL, Supply Chain, pessoas, processos e coordenação do ecossistema logístico.", Icon: Network, central: true, type: "fc" },
  { nome: "Integra Cargo", texto: "Software, integração, automação, IA e inteligência aplicada à logística.", Icon: Cpu, central: false, type: "cargo" },
  { nome: "Integra Carbon", texto: "Inventário de emissões, descarbonização, certificação e soluções relacionadas ao mercado de carbono.", Icon: Cpu, central: false, type: "carbon" },
];

export function ArquiteturaMarcas() {
  return (
    <section id="ecossistema" className="py-20 lg:py-24">
      <div className="container-fc">
        <SectionHeading 
          eyebrow="ARQUITETURA DAS MARCAS" 
          title="Um ecossistema com papéis claros" 
          description="A FC permanece no centro da Gestão 4PL e do Supply Chain, conectada a frentes especializadas em tecnologia e sustentabilidade." 
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {marcas.map(({ nome, texto, central, type }) => (
            <article 
              key={nome} 
              className={
                central 
                  ? "rounded-lg bg-primary p-8 text-primary-foreground transform lg:scale-105 shadow-xl z-10" 
                  : type === "cargo" 
                    ? "rounded-lg bg-orange-600 p-8 text-white transform lg:scale-105 shadow-xl z-10" 
                    : type === "carbon"
                      ? "rounded-lg bg-emerald-600 p-8 text-white transform lg:scale-105 shadow-xl z-10"
                      : "card-fc p-8"
              }
            >
              {central ? (
                <BrandLogo className="h-20 w-20 rounded-md" />
              ) : type === "cargo" ? (
                <img src={cargoLogoImg} alt={nome} className="h-10 w-auto object-contain mb-4" />
              ) : type === "carbon" ? (
                <img src={carbonLogoImg} alt={nome} className="h-10 w-auto object-contain mb-4" />
              ) : null}
              
              <h3 className="mt-4 font-display text-xl font-semibold">{nome}</h3>
              <p className={(central || type === "cargo" || type === "carbon") ? "mt-4 text-sm leading-relaxed text-white/95" : "mt-4 text-sm leading-relaxed text-muted-foreground"}>
                {texto}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
