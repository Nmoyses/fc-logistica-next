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
        <div className="relative min-h-[400px] w-full overflow-hidden rounded-lg bg-[#030712] p-8 text-primary-foreground flex items-center justify-center shadow-2xl border border-white/5">
          {/* Grid cibernético de fundo */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:28px_28px]" />
          
          {/* Constelação Logística / Plexus Digital com o Contorno Real Geográfico do Brasil */}
          <div className="absolute inset-0 flex items-center justify-center p-4 select-none">
            <svg viewBox="0 0 500 500" className="h-full w-auto filter drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" xmlns="http://w3.org">
              {/* Coordenadas Geográficas Reais e Precisas do Contorno do Brasil */}
              <path 
                d="M192.4,85.6 C206.8,81.1 228.3,95.5 242.7,91.0 C258.9,85.9 261.2,74.7 274.6,71.3 C288.0,67.9 313.8,70.1 324.4,81.3 C335.0,92.5 322.1,114.3 333.3,124.9 C344.5,135.5 373.6,128.8 385.4,141.7 C397.2,154.6 384.3,178.6 397.2,190.4 C410.1,202.2 429.7,211.7 433.0,227.4 C436.3,243.1 411.7,250.9 411.1,269.4 C410.5,287.9 428.4,302.4 416.7,320.9 C405.0,339.4 380.9,353.4 374.2,374.1 C367.5,394.8 348.4,417.8 335.5,431.2 C322.6,444.6 288.6,464.2 277.4,475.4 C266.2,486.6 261.2,467.0 252.8,454.1 C244.4,441.2 254.5,425.5 246.7,409.3 C238.9,393.1 214.2,393.1 205.3,380.2 C196.4,367.3 197.5,355.6 193.0,339.4 C188.5,323.2 208.7,309.7 202.0,287.3 C195.3,264.9 174.6,263.3 170.7,243.7 C166.8,224.1 179.6,211.2 166.8,197.8 C154.0,184.4 135.0,195.0 122.1,182.1 C109.2,169.2 119.8,149.6 107.0,140.7 C94.2,131.8 71.2,143.5 65.6,128.4 C60.0,113.3 80.7,100.4 99.2,94.8 C117.7,89.2 135.0,91.5 158.5,89.2 Z" 
                className="stroke-cyan-400 fill-cyan-950/15 stroke-[2] stroke-linejoin-round"
              />

              {/* Malha Interna de Conexões Geográficas Cruzadas (Plexus Digital) */}
              <g className="stroke-cyan-500/35 stroke-[0.8] stroke-dasharray-[1,1]">
                {/* Malha da Região Norte */}
                <line x1="120" y1="145" x2="180" y2="135" />
                <line x1="120" y1="145" x2="150" y2="190" />
                <line x1="180" y1="135" x2="150" y2="190" />
                <line x1="180" y1="135" x2="245" y2="155" />
                <line x1="150" y1="190" x2="245" y2="155" />
                <line x1="150" y1="190" x2="210" y2="245" />

                {/* Conexões Centro-Oeste e Hub Principal */}
                <line x1="245" y1="155" x2="260" y2="245" />
                <line x1="210" y1="245" x2="260" y2="245" />
                <line x1="260" y1="245" x2="240" y2="335" />

                {/* Expansão e Rotas da Região Nordeste */}
                <line x1="245" y1="155" x2="330" y2="140" />
                <line x1="330" y1="140" x2="395" y2="190" />
                <line x1="330" y1="140" x2="350" y2="235" />
                <line x1="260" y1="245" x2="350" y2="235" />
                <line x1="395" y1="190" x2="350" y2="235" />
                <line x1="350" y1="235" x2="335" y2="310" />

                {/* Rotas de Escoamento Sul e Sudeste */}
                <line x1="260" y1="245" x2="335" y2="310" />
                <line x1="240" y1="335" x2="335" y2="310" />
                <line x1="240" y1="335" x2="285" y2="400" />
                <line x1="335" y1="310" x2="285" y2="400" />
                <line x1="285" y1="400" x2="275" y2="455" />
              </g>

              {/* Pontos de Nós com Brilho de Constelação (Flashes de Luz) */}
              <g className="fill-white">
                {/* Nó Região Norte / Floresta */}
                <circle cx="150" cy="155" r="4.5" className="fill-cyan-300 drop-shadow-[0_0_8px_#22d3ee]" />
                <circle cx="150" cy="155" r="2" />
                
                {/* Nó Amapá / Pará */}
                <circle cx="245" cy="140" r="4" className="fill-cyan-300 drop-shadow-[0_0_6px_#22d3ee]" />
                <circle cx="245" cy="140" r="1.5" />

                {/* Nó Extremo Nordeste */}
                <circle cx="395" cy="185" r="4.5" className="fill-cyan-300 drop-shadow-[0_0_8px_#22d3ee]" />
                <circle cx="395" cy="185" r="2" />

                {/* Nó Litoral Nordeste / Hub Ativo */}
                <circle cx="365" cy="225" r="5" className="fill-cyan-300 drop-shadow-[0_0_10px_#22d3ee] animate-pulse" />
                <circle cx="365" cy="225" r="2.5" />

                {/* Ponto Central / Brasília (Grande Ponto Incandescente de Referência) */}
                <circle cx="275" cy="250" r="7" className="fill-white drop-shadow-[0_0_14px_#fff]" />
                <circle cx="275" cy="250" r="3" className="fill-cyan-400" />

                {/* Nó Polo Industrial Sudeste */}
                <circle cx="315" cy="325" r="5" className="fill-cyan-300 drop-shadow-[0_0_8px_#22d3ee]" />
                <circle cx="315" cy="325" r="2.5" />

                {/* Nó Região Sul / Fronteira */}
                <circle cx="275" cy="425" r="4" className="fill-cyan-300 drop-shadow-[0_0_6px_#22d3ee]" />
                <circle cx="275" cy="425" r="2" />
              </g>
            </svg>
          </div>

          {/* Marcador de Hub Operacional da Empresa flutuando ao centro */}
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-accent/40 bg-slate-950/90 backdrop-blur-md shadow-[0_0_35px_rgba(249,115,22,0.4)] animate-bounce">
            <MapPin className="h-7 w-7 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
