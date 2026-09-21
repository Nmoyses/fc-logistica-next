import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { solucoesIntegra } from "@/data/site";

export function Tecnologia() {
  return (
    <Section id="tecnologia" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[0.72fr_1.2fr] lg:items-start">
        <div className="flex flex-col items-start">
          <img src="/integracargo-logo.png" alt="Integra Cargo" className="mb-6 h-10 w-auto object-contain rounded-sm" />
          <SectionHeading 
            eyebrow="FC + Integra Cargo" 
            title="Gestão logística potencializada por tecnologia" 
            description="A experiência operacional da FC pode ser combinada com a tecnologia da Integra Cargo, criando um ecossistema integrado de gestão e digitalização do Supply Chain." 
          />
          
          {/* Superlink Customizado — [ CONHEÇA A INTEGRA CARGO ] */}
          <a 
            href="https://integracargo.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-orange-500/30 bg-orange-500/5 px-5 py-2.5 text-xs font-semibold tracking-wider text-orange-400 uppercase transition-all duration-300 hover:border-orange-500 hover:bg-orange-600 hover:text-white shadow-[0_0_15px_rgba(249,115,22,0.1)] group"
          >
            [ CONHEÇA A INTEGRA CARGO ]
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        
        <div className="rounded-lg bg-primary p-6 text-primary-foreground sm:p-8">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {solucoesIntegra.map((item) => (
              <span key={item} className="text-sm font-medium">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
