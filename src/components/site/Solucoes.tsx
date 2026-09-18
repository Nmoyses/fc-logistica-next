import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { solucoes } from "@/data/site";

export function Solucoes() {
  return (
    <Section id="solucoes">
      <SectionHeading eyebrow="Nossas soluções" title="Gestão aplicada às frentes críticas do Supply Chain" description="Soluções estruturadas para coordenar fornecedores, fluxos, custos, pessoas e níveis de serviço em uma visão integrada." />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{solucoes.map((item, index) => <article key={item.titulo} className="group card-fc p-6"><div className="flex items-start justify-between gap-3"><span className="text-xs font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span><ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" aria-hidden="true" /></div><h3 className="mt-7 text-base font-semibold leading-snug">{item.titulo}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.descricao}</p></article>)}</div>
    </Section>
  );
}