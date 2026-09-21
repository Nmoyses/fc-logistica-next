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
        <div className="relative min-h-[340px] w-full overflow-hidden rounded-lg bg-primary p-8 text-primary-foreground flex items-center justify-center shadow-xl border border-white/5">
          {/* Grid de fundo sutil */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Silhueta Geométrica Abstrata do Mapa do Brasil em CSS Nativo (Não quebra na nuvem) */}
          <div className="absolute inset-0 flex items-center justify-center p-4 opacity-[0.06] pointer-events-none select-none" aria-hidden="true">
            <div className="relative h-64 w-64 bg-white rounded-full blur-2xl transform scale-x-125 translate-x-4 translate-y-2" />
            <div className="absolute h-48 w-48 bg-white rounded-3xl rotate-45 -translate-x-12 -translate-y-6" />
            <div className="absolute h-36 w-40 bg-white rounded-full translate-x-14 -translate-y-12" />
            <div className="absolute h-32 w-24 bg-white rounded-md rotate-12 -translate-x-4 translate-y-16" />
          </div>

          {/* Desenho em linhas do Vetor do País integrado ao fundo */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.15] pointer-events-none text-white select-none">
            <svg viewBox="0 0 100 100" className="h-full w-auto stroke-current stroke-[0.5] fill-none" xmlns="http://w3.org">
              {/* Contorno simplificado do Brasil feito por polígonos nativos */}
              <polygon points="35,15 50,12 70,18 85,25 90,40 82,55 70,68 62,80 50,90 45,92 42,85 38,75 32,68 35,58 25,50 15,45 10,38 12,28 20,20 28,18" />
              {/* Linhas internas de rotas logísticas cruzando o país */}
              <path d="M35,15 L50,55 M70,18 L50,55 M90,40 L50,55 M62,80 L50,55 M15,45 L50,55" className="stroke-[0.2] stroke-dashed opacity-50" />
            </svg>
          </div>

          {/* Pontos de conexões simulando as filiais/parceiros */}
          <span className="absolute left-[35%] top-[45%] h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent/20" />
          <span className="absolute left-[50%] top-[25%] h-2 w-2 rounded-full bg-accent ring-4 ring-accent/20 animate-pulse" />
          <span className="absolute right-[30%] top-[35%] h-1.5 w-1.5 rounded-full bg-accent ring-4 ring-accent/20" />
          <span className="absolute left-[45%] top-[70%] h-2 w-2 rounded-full bg-accent ring-4 ring-accent/20" />
          
          {/* Linhas de conexão que amarram os pontos ao centro logístico principal */}
          <div className="absolute left-[36%] top-[46%] h-px w-[15%] rotate-[20deg] bg-gradient-to-r from-accent to-transparent opacity-40" />
          <div className="absolute left-[46%] top-[56%] h-px w-[12%] rotate-[-45deg] bg-gradient-to-r from-accent to-transparent opacity-40" />
          
          {/* Pin de localização principal (Hub Centralizador do Ecossistema) */}
          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-accent/30 bg-primary/85 backdrop-blur-sm shadow-[0_0_40px_rgba(249,115,22,0.25)] animate-bounce">
            <MapPin className="h-8 w-8 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
