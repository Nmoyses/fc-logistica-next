import { ArrowRight, Cpu, PlugZap } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { integracoes, solucoesIntegra } from "@/data/site";

export function Tecnologia() {
  return (
    <Section id="tecnologia" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div>
          <img src="/integracargo-logo.png" alt="Integra Cargo" className="mb-6 h-10 w-auto object-contain rounded-sm" />
          <SectionHeading
            eyebrow="FC + Integra Cargo"
            title="Gestão 4PL potencializada por tecnologia"
            description="A experiência operacional da FC pode ser combinada com a tecnologia da Integra Cargo, criando um ecossistema integrado de gestão e digitalização do Supply Chain."
          />
          <div className="mt-6">
            <a
              href="https://integracargo.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-orange-700 hover:shadow-lg"
            >
              [ CONHEÇA A INTEGRA CARGO ]
            </a>
          </div>
        </div>
        <div className="rounded-lg bg-primary p-6 text-primary-foreground sm:p-8">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {solucoesIntegra.map((item) => (
              <span key={item} className="text-sm font-medium">{item}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-5">
        {["Dados", "Informação", "Gestão", "Decisão", "Performance"].map((item) => (
          <div key={item} className="text-center">{item}</div>
        ))}
      </div>
    </Section>
  );
}