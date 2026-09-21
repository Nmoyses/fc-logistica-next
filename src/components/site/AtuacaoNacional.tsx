import { MapPin } from "lucide-react";
import { Section, SectionHeading } from "./Section";

export function AtuacaoNacional() {
  return (
    <Section id="atuacao-nacional" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <SectionHeading 
          eyebrow="Atuação nacional" 
          title="Gestão logística conectada em escala nacional" 
          description="Visão integrada para operações distribuídas em diferentes regiões do Brasil, com coordenação de parceiros, fluxos e indicadores." 
        />
        <div className="relative min-h-[320px] w-full overflow-hidden rounded-lg bg-primary p-8 text-primary-foreground flex items-center justify-center shadow-xl border border-white/5">
          {/* Grid de fundo sutil */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Imagem do Mapa do Brasil oficial em vetor (Opacidade sutil de fundo) */}
          <div className="absolute inset-0 flex items-center justify-center p-6 opacity-[0.15] pointer-events-none select-none mix-blend-screen">
            <img 
              src="https://wikimedia.org" 
              alt="Mapa do Brasil" 
              className="h-full w-auto object-contain brightness-0 invert" 
            />
          </div>

          {/* Linhas da malha de conexões (Ajustadas para ficarem acima do mapa) */}
          <div className="absolute inset-0 network-grid opacity-20 pointer-events-none" aria-hidden="true" />
          
          {/* Pontos de conexões simulando capitais/regiões do Brasil */}
          <span className="absolute left-[38%] top-[60%] h-3 w-1 rounded-full bg-accent ring-4 ring-accent/20 animate-pulse" title="Sul / Sudeste" />
          <span className="absolute left-[45%] top-[45%] h-2 w-2 rounded-full bg-accent ring-4 ring-accent/20" title="Centro-Oeste" />
          <span className="absolute right-[35%] top-[30%] h-1.5 w-1.5 rounded-full bg-accent ring-4 ring-accent/20" title="Nordeste" />
          <span className="absolute left-[30%] top-[25%] h-2 w-2 rounded-full bg-accent ring-4 ring-accent/20" title="Norte" />
          
          {/* Linhas conectando os pontos pelo Brasil */}
          <div className="absolute left-[39%] top-[55%] h-px w-[20%] rotate-[-25deg] bg-gradient-to-r from-accent to-transparent" />
          <div className="absolute left-[32%] top-[26%] h-px w-[15%] rotate-[35deg] bg-gradient-to-r from-accent to-transparent" />
          
          {/* Pin de localização principal centralizado no mapa */}
          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-accent/30 bg-primary/80 backdrop-blur-sm shadow-[0_0_30px_rgba(249,115,22,0.2)] animate-bounce">
            <MapPin className="h-8 w-8 text-accent" />
          </div>
        </div>
      </div>
    </Section>
  );
}
