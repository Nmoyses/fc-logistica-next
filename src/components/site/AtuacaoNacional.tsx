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
        <div className="relative min-h-[380px] w-full overflow-hidden rounded-lg bg-[#030712] p-8 text-primary-foreground flex items-center justify-center shadow-xl border border-white/5">
          {/* Grid de fundo sutil com efeito cibernético */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px]" />
          
          {/* Mapa do Brasil Estilo Plexus Digital (Nativo e Preciso) */}
          <div className="absolute inset-0 flex items-center justify-center p-4 select-none animate-fade-in">
            <svg viewBox="0 0 500 500" className="h-full w-auto filter drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]" xmlns="http://w3.org">
              {/* Contorno Geográfico Oficial Simplificado do Brasil em Ciano Neon */}
              <path 
                d="M165,80 C190,75 220,95 240,90 C260,85 275,65 295,75 C315,85 310,120 330,125 C350,130 380,125 390,140 C400,155 385,175 405,190 C425,205 440,215 440,230 C440,245 410,250 405,270 C400,290 415,310 395,330 C375,350 355,365 345,390 C335,415 310,430 295,445 C280,460 270,470 260,480 C250,490 245,475 240,460 C235,445 250,435 245,415 C240,395 225,390 215,380 C205,370 195,365 195,350 C195,335 220,325 215,300 C210,275 190,270 185,250 C180,230 190,215 175,200 C160,185 145,195 130,180 C115,165 125,145 110,135 C95,125 75,135 70,120 C65,105 85,95 105,90 C125,85 140,85 165,80 Z" 
                className="stroke-cyan-400 fill-cyan-950/20 stroke-[2] stroke-linejoin-round"
              />

              {/* Malha de Linhas de Conectividade Interna (Estilo Rede Neural / Plexus) */}
              <g className="stroke-cyan-500/30 stroke-[1]">
                {/* Região Norte e conexões */}
                <line x1="130" y1="140" x2="200" y2="130" />
                <line x1="130" y1="140" x2="160" y2="200" />
                <line x1="200" y1="130" x2="160" y2="200" />
                <line x1="200" y1="130" x2="260" y2="160" />
                <line x1="160" y1="200" x2="260" y2="160" />

                {/* Centro-Oeste e conexões */}
                <line x1="260" y1="160" x2="250" y2="260" />
                <line x1="160" y1="200" x2="250" y2="260" />
                <line x1="250" y1="260" x2="230" y2="350" />

                {/* Nordeste e conexões */}
                <line x1="260" y1="160" x2="350" y2="160" />
                <line x1="350" y1="160" x2="390" y2="200" />
                <line x1="350" y1="160" x2="340" y2="240" />
                <line x1="250" y1="260" x2="340" y2="240" />
                <line x1="390" y1="200" x2="340" y2="240" />

                {/* Sudeste / Sul e conexões */}
                <line x1="340" y1="240" x2="320" y2="320" />
                <line x1="250" y1="260" x2="320" y2="320" />
                <line x1="230" y1="350" x2="320" y2="320" />
                <line x1="320" y1="320" x2="280" y2="400" />
                <line x1="230" y1="350" x2="280" y2="400" />
                <line x1="280" y1="400" x2="255" y2="450" />
              </g>

              {/* Nós de Conexão com Brilho Neon (Pontos de Luz Brancos/Ciano) */}
              <g className="fill-white">
                {/* Ponto Manaus */}
                <circle cx="160" cy="150" r="4" className="fill-cyan-300 drop-shadow-[0_0_6px_#22d3ee]" />
                <circle cx="160" cy="150" r="2" />
                
                {/* Ponto Belém */}
                <circle cx="260" cy="135" r="4" className="fill-cyan-300 drop-shadow-[0_0_6px_#22d3ee]" />
                <circle cx="260" cy="135" r="2" />

                {/* Ponto Recife */}
                <circle cx="395" cy="195" r="4" className="fill-cyan-300 drop-shadow-[0_0_6px_#22d3ee]" />
                <circle cx="395" cy="195" r="2" />

                {/* Ponto Salvador */}
                <circle cx="355" cy="235" r="5" className="fill-cyan-300 drop-shadow-[0_0_8px_#22d3ee] animate-ping opacity-75" />
                <circle cx="355" cy="235" r="3" />

                {/* Ponto Brasília / HUB */}
                <circle cx="280" cy="245" r="6" className="fill-white drop-shadow-[0_0_10px_#fff]" />
                <circle cx="280" cy="245" r="3" className="fill-cyan-400" />

                {/* Ponto São Paulo / Rio */}
                <circle cx="305" cy="335" r="5" className="fill-cyan-300 drop-shadow-[0_0_8px_#22d3ee]" />
                <circle cx="305" cy="335" r="2.5" />

                {/* Ponto Porto Alegre */}
                <circle cx="255" cy="435" r="4" className="fill-cyan-300 drop-shadow-[0_0_6px_#22d3ee]" />
                <circle cx="255" cy="435" r="2" />
              </g>
            </svg>
          </div>

          {/* Pin de localização principal do Hub Centralizador flutuando no meio */}
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-accent/40 bg-slate-950/90 backdrop-blur-md shadow-[0_0_35px_rgba(249,115,22,0.35)] animate-bounce">
            <MapPin className="h-7 w-7 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
