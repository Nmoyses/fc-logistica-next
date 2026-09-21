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
          
          {/* Vetor do Mapa do Brasil posicionado ao fundo */}
          <div className="absolute inset-0 flex items-center justify-center p-6 opacity-[0.12] pointer-events-none mix-blend-screen select-none">
            <svg viewBox="0 0 550 550" className="h-full w-auto text-white fill-current" xmlns="http://w3.org">
              <path d="M260.1 536.4c-3.1-2.9-6.3-5.8-9.2-9-4-4.5-5.9-10.1-7.8-15.6-2.5-7.3-6.2-13.8-11.2-19.6-3.8-4.4-4-9.6-3.5-15 .5-5.3-2.1-9-5.4-12.7-3.9-4.3-5-9.6-4.9-15.1.1-6-1.5-11.4-5-16.3-2.7-3.8-3.1-8.2-3-12.7.2-6.5-1.9-12.2-6.2-17.1-3-3.4-3.4-7.4-2.8-11.7.9-6-1.2-10.9-4.9-15.3-3.8-4.5-4.2-9.7-4-15.3.3-6.4-1.8-12-6-16.9-3.2-3.8-3.3-8.3-2.8-13 .6-5.8-1.5-10.7-5.1-15-3.3-3.9-3.8-8.5-3.2-13.4.7-6-1.4-11-5.1-15.4-3.1-3.6-3.6-7.8-3.1-12.4.7-6-1.4-11-5.1-15.3-3-3.6-3.5-7.8-2.9-12.4.8-6.1-1.3-11.1-5-15.5-3.2-3.8-3.4-8.3-2.8-13 .6-5.8-1.5-10.8-5.1-15.1-3-3.6-3.5-7.8-2.9-12.4.8-6.1-1.3-11.1-5-15.4-3.3-3.8-3.6-8.4-2.9-13.2.7-5.6-1.4-10.4-4.9-14.7-3.7-4.6-4.1-10-3.9-15.7.3-6.4-1.9-12.1-6.2-17.1-2.9-3.3-3.3-7.2-2.7-11.4.9-6.3-1.4-11.3-5.3-15.8-3.3-3.8-3.7-8.3-3-13.1.8-5.7-1.4-10.6-4.9-14.9-3.5-4.4-4-9.5-3.7-14.9.4-6.3-1.8-11.7-5.9-16.5-3.1-3.6-3.4-7.9-2.8-12.5.8-5.9-1.4-10.9-5-15.2-3.2-3.8-3.5-8.4-2.9-13.2.7-5.6-1.4-10.4-4.9-14.7-3.5-4.4-4-9.4-3.8-14.7.3-6.1-1.6-11.3-5.4-15.8-3.3-3.8-3.8-8.4-3.1-13.3.8-5.6-1.4-10.4-4.9-14.7-3.8-4.7-4.2-10.1-4-15.9.3-6.3-1.9-11.9-6.1-16.8-2.9-3.4-3.3-7.3-2.7-11.6.9-6-1.2-10.9-4.9-15.3-3.7-4.4-4.1-9.5-3.9-14.9.3-6.2-1.8-11.6-5.8-16.2-3-3.5-3.5-7.6-2.9-12.1.8-5.9-1.4-10.8-5-15.1-3.3-3.9-3.7-8.5-3.1-13.4.7-5.8-1.5-10.7-5.1-15-3.1-3.6-3.6-7.8-3.1-12.4.7-6-1.4-11-5.1-15.3l175-100 175 100c-3.7 4.3-5.8 9.3-5.1 15.3.5 4.6 0 8.8-3.1 12.4-3.7 4.3-5.8 9.3-5.1 15.3.5 4.9.1 9.4-2.9 13.2-3.6 4.3-5.7 9.3-5 15.2.6 4.8.1 9.4-2.9 13.2-3.6 4.3-5.7 9.3-5 15.2.6 4.8.1 9.4-2.9 13.2-3.6 4.3-5.7 9.3-5 15.2.6 4.8.1 9.4-2.9 13.2-3.6 4.3-5.7 9.3-5 15.2.6 4.8.1 9.4-2.9 13.2-3.6 4.3-5.7 9.3-5 15.2.6 4.8.1 9.4-2.9 13.2-3.6 4.3-5.7 9.3-5 15.2.6 4.8.1 9.4-2.9 13.2-3.6 4.3-5.7 9.3-5 15.2.6 4.8.1 9.4-2.9 13.2-3.6 4.3-5.7 9.3-5 15.2.7 5.5-1.4 10.3-4.9 14.6-3.5 4.3-4 9.3-3.8 14.6.3 5.9-1.7 11.1-5.3 15.5-3.3 3.8-3.8 8.4-3.1 13.3.8 5.6-1.4 10.4-4.9 14.7-3.8 4.7-4.2 10.1-4 15.9.3 6.3-1.9 11.9-6.1 16.8-2.9 3.4-3.3 7.3-2.7 11.6.9 6-1.2 10.9-4.9 15.3-3.7 4.4-4.1 9.5-3.9 14.9.3 6.2-1.8 11.6-5.8 16.2-3 3.5-3.5 7.6-2.9-12.1.8-5.9-1.4-10.8-5-15.1-3.3-3.9-3.7-8.5-3.1-13.4.7-5.8-1.5-10.7-5.1-15-3.1-3.6-3.6-7.8-3.1-12.4.7-6-1.4-11-5.1-15.3-3.1-3.6-3.6-7.8-3.1-12.4.7-6-1.4-11-5.1-15.3-3.1-3.6-3.6-7.8-3.1-12.4.7-6-1.4-11-5.1-15.3-3.1-3.6-3.6-7.8-3.1-12.4.7-6-1.4-11-5.1-15.3-3.1-3.6-3.6-7.8-3.1-12.4.7-6-1.4-11-5.1-15.3-3.1-3.6-3.6-7.8-3.1-12.4.7-6-1.4-11-5.1-15.3-3.1-3.6-3.6-7.8-3.1-12.4.7-6-1.4-11-5.1-15.3z" />
            </svg>
          </div>

          {/* Linhas da malha de conexões (Mantendo a estrutura do seu projeto) */}
          <div className="absolute inset-0 network-grid opacity-20 pointer-events-none" aria-hidden="true" />
          <span className="absolute left-[24%] top-[24%] h-3 w-1 rounded-full bg-accent ring-4 ring-accent/20 animate-pulse" />
          <span className="absolute right-[22%] top-[26%] h-1.5 w-1.5 rounded-full bg-accent ring-4 ring-accent/20" />
          <div className="absolute left-[25%] top-[25%] h-px w-[45%] rotate-[-6deg] bg-gradient-to-r from-accent to-transparent" />
          <div className="absolute left-[27%] top-[35%] h-px w-[12%] rotate-[20deg] bg-gradient-to-r from-accent to-transparent" />
          
          {/* Pin de localização principal */}
          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-accent/30 bg-primary/80 backdrop-blur-sm shadow-[0_0_30px_rgba(249,115,22,0.15)] animate-bounce">
            <MapPin className="h-8 w-8 text-accent" />
          </div>
        </div>
      </div>
    </Section>
  );
}
