import React, { useEffect, useState, useMemo } from "react";
import { Section, SectionHeading } from "./Section";

// Importa a imagem oficial da sua pasta assets
import mapNetworkImg from "@/assets/hero-logistics-network.png";

interface NodePin {
  x: string;
  y: string;
}

export function AtuacaoNacional() {
  const [pinPosition, setPinPosition] = useState<NodePin | null>(null);

  // Lista de posições estratégicas (em %) para o pin flutuar em cima dos nós laranjas
  const logisticNodes = useMemo(() => [
    { x: "65%", y: "42%" }, // Região Sudeste
    { x: "72%", y: "28%" }, // Região Nordeste
    { x: "55%", y: "35%" }, // Região Centro-Oeste
    { x: "42%", y: "25%" }, // Região Norte / Manaus
    { x: "58%", y: "55%" }  // Região Sul
  ], []);

  // Escolhe um ponto aleatório ao carregar a página
  useEffect(() => {
    const randomPoint = logisticNodes[Math.floor(Math.random() * logisticNodes.length)];
    setPinPosition(randomPoint);
  }, [logisticNodes]);

  return (
    <Section id="atuacao-nacional" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <SectionHeading 
          eyebrow="Atuação nacional" 
          title="Gestão logística conectada em escala nacional" 
          description="Visão integrada para operações distribuídas em differentes regiões do Brasil, com coordenação de parceiros, fluxos e indicadores." 
        />
        
        <div className="relative min-h-[380px] w-full overflow-hidden rounded-lg bg-[#040d1a] border border-white/5 shadow-2xl flex items-center justify-center">
          
          {/* Imagem de Fundo Oficial Corrigida */}
          <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
            <img 
              src={mapNetworkImg} 
              alt="Malha Logística Nacional" 
              className="w-full h-full object-cover mix-blend-lighten opacity-85" 
            />
          </div>

          {/* Grid cibernético de linhas */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          {/* ALFINETE DE LOCALIZAÇÃO DINÂMICO */}
          {pinPosition && (
            <div 
              className="absolute z-20 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
              style={{ left: pinPosition.x, top: pinPosition.y }}
            >
              <div className="absolute h-12 w-12 rounded-full border border-cyan-400/40 bg-cyan-500/5 animate-ping" />
              <div className="absolute h-6 w-6 rounded-full bg-cyan-500/20 filter blur-sm" />
              
              <svg viewBox="0 0 24 24" className="h-8 w-8 filter drop-shadow-[0_0_8px_#06b6d4]">
                <path 
                  d="M12,2 C7.5,2 4,5.5 4,10 C4,15.5 12,22 12,22 C12,22 20,15.5 20,10 C20,5.5 16.5,2 12,2 Z" 
                  className="fill-[#040d1a] stroke-cyan-400 stroke-[1.5]"
                />
                <circle cx="12" cy="10" r="2.5" className="fill-white" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
