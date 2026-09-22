import { ArrowRight, Leaf } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const fluxo = ["Inventário", "Análise", "Redução", "Monitoramento", "Certificação", "Mercado de carbono"];

export function Sustentabilidade() {
  return (
    <Section id="sustentabilidade">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div><img src="/integracarbon-logo.png" alt="Integra Carbon" className="mb-6 h-10 w-auto object-contain" /> description="Em conjunto com o ecossistema Integra Carbon, apoiamos indústrias e empresas B2B na organização e gestão de dados relacionados às emissões de gases de efeito estufa." /><span className="mt-7 inline-flex cursor-not-allowed items-center gap-2 text-sm font-semibold text-muted-foreground" title="Endereço oficial ainda não fornecido">Conheça o Integra Carbon <span className="text-xs font-normal">— link em configuração</span></span></div>
        <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3">{fluxo.map((item, index) => <li key={item} className="relative rounded-md border border-border bg-card p-5"><span className="text-xs font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span><span className="mt-3 block text-sm font-semibold">{item}</span>{index < fluxo.length - 1 && <ArrowRight className="absolute right-2 top-2 h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />}</li>)}</ol>
      </div>
    </Section>
  );
}