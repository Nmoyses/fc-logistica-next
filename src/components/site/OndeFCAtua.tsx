import { ArrowRight, Network } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { fluxoCadeia } from "@/data/site";

export function OndeFCAtua() {
  return (
    <Section id="gestao-4pl" tone="ink">
      <SectionHeading tone="ink" eyebrow="Gestão 4PL" title="A FC coordena o ecossistema. Somos gestores da cadeia." description="A FC Supply Tech Solutions atua como uma extensão da estrutura de Supply Chain do cliente, conectando planejamento, fornecedores, transporte, armazenagem, distribuição, tecnologia e indicadores em uma única gestão." />
      <div className="mt-12">
        <div className="overflow-x-auto pb-3">
          <ol className="flex min-w-[900px] items-stretch gap-3">
            {fluxoCadeia.map((item, index) => <li key={item} className="relative flex min-h-28 flex-1 items-center justify-center rounded-md border border-ink-border bg-ink-soft p-4 text-center"><div><span className="text-xs font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span><span className="mt-3 block text-sm font-semibold text-ink-foreground">{item}</span></div>{index < fluxoCadeia.length - 1 && <ArrowRight className="absolute -right-3 z-10 h-5 w-5 rounded-full bg-accent p-1 text-accent-foreground" aria-hidden="true" />}</li>)}
          </ol>
        </div>
        <div className="mt-6 flex items-center gap-4 rounded-md border border-ink-border bg-primary p-5 text-primary-foreground"><Network className="h-8 w-8 shrink-0 text-accent" aria-hidden="true" /><div><p className="font-display text-lg font-semibold">FC Supply Tech Solutions</p><p className="mt-1 text-xs font-semibold uppercase text-ink-muted">Gestão • Coordenação • Integração • Controle</p></div></div>
        <div className="mt-8 flex flex-wrap gap-2">{["Planejar", "Coordenar", "Executar com parceiros", "Monitorar", "Medir", "Otimizar"].map((item) => <span key={item} className="rounded-md border border-ink-border px-4 py-2 text-xs font-semibold uppercase text-ink-muted">{item}</span>)}</div>
      </div>
    </Section>
  );
}