import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { fluxoCadeia } from "@/data/site";

export function QuatroPL() {
  return (
    <Section id="gestao-4pl" tone="ink">
      <SectionHeading tone="ink" eyebrow="O que é Gestão 4PL?" title="Não somos apenas um operador logístico. Somos gestores da cadeia." description="A FC Supply Tech Solutions atua como uma extensão da estrutura de Supply Chain do cliente, coordenando transportadores, operadores, fornecedores, processos, tecnologia e indicadores." />
      <div className="mt-14 overflow-x-auto pb-3"><ol className="flex min-w-[900px] items-stretch gap-3">{fluxoCadeia.map((item, index) => <li key={item} className="relative flex min-h-32 flex-1 items-center justify-center rounded-md border border-ink-border bg-ink-soft p-4 text-center"><div><span className="text-xs font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span><span className="mt-3 block text-sm font-semibold text-ink-foreground">{item}</span></div>{index < fluxoCadeia.length - 1 && <ArrowRight className="absolute -right-3 z-10 h-5 w-5 rounded-full bg-accent p-1 text-accent-foreground" aria-hidden="true" />}</li>)}</ol></div>
      <div className="mt-8 flex flex-wrap gap-2">{["Planejar", "Coordenar", "Executar com parceiros", "Monitorar", "Medir", "Otimizar"].map((item) => <span key={item} className="rounded-md border border-ink-border px-4 py-2 text-xs font-semibold uppercase text-ink-muted">{item}</span>)}</div>
    </Section>
  );
}