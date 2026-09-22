import React from "react";
import { Section, SectionHeading } from "./Section";

// Importa a nova logo oficial diretamente da sua pasta assets
import carbonLogoImg from "@/assets/integracarbon-logo.png";

const topicosCarbon = [
  { numero: "01", titulo: "Inventário" },
  { numero: "02", titulo: "Análise" },
  { numero: "03", titulo: "Redução" },
  { numero: "04", titulo: "Monitoramento" },
  { numero: "05", titulo: "Certificação" },
  { numero: "06", titulo: "Mercado de carbono" },
];

export function Sustentabilidade() {
  return (
    <Section id="sustentabilidade" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="flex flex-col items-start">
          {/* Substituição da folha antiga pela logo verde oficial */}
          <div className="mb-6 flex items-center justify-start">
            <img src={carbonLogoImg} alt="Integra Carbon" className="h-16 w-auto object-contain" />
          </div>
          
          <SectionHeading 
            eyebrow="INTEGRA CARBON" 
            title="Eficiência logística conectada à gestão das emissões" 
            description="Em conjunto com o ecossistema Integra Carbon, apoiamos indústrias e empresas B2B na organization e gestão de dados relacionados às emissões de gases de efeito estufa." 
          />
          <span className="mt-6 text-sm text-muted-foreground">
            Conheça o Integra Carbon <span className="text-xs opacity-60">— link em configuração</span>
          </span>
        </div>

        {/* Grade com os 6 blocos de serviços */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topicosCarbon.map((item) => (
            <div key={item.numero} className="card-fc p-6 flex flex-col justify-between bg-white/5 border border-white/5 rounded-lg min-h-[120px] relative group hover:border-[#00AEEF]/30 transition-all">
              <span className="text-xs font-mono text-[#00AEEF]/60">{item.numero}</span>
              <h3 className="mt-4 font-display text-base font-semibold text-white">{item.titulo}</h3>
              <span className="absolute top-6 right-6 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
