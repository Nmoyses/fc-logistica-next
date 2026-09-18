import { ArrowRight, Network } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { fluxoCadeia } from "@/data/site";

export function OndeFCAtua() {
  return (
    <Section id="cadeia" tone="surface">
      <SectionHeading eyebrow="Onde a FC atua" title="A FC coordena o ecossistema" description="Gestão, coordenação, integração e controle conectando os agentes da cadeia — sem substituir a execução especializada de cada parceiro." />
      <div className="mt-12 rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-card)] sm:p-8">
        <div className="grid gap-3 md:grid-cols-7">
          {fluxoCadeia.map((item, index) => <div key={item} className="relative flex min-h-24 items-center justify-center rounded-md border border-border bg-background p-3 text-center"><div><span className="text-xs font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span><span className="mt-2 block text-sm font-semibold">{item}</span></div>{index < fluxoCadeia.length - 1 && <ArrowRight className="absolute -right-3.5 z-10 hidden h-5 w-5 rounded-full bg-accent p-1 text-accent-foreground md:block" aria-hidden="true" />}</div>)}
        </div>
        <div className="mt-6 flex items-center gap-4 rounded-md bg-primary p-5 text-primary-foreground"><Network className="h-8 w-8 shrink-0 text-accent" aria-hidden="true" /><div><p className="font-display text-lg font-semibold">FC Supply Tech Solutions</p><p className="mt-1 text-xs font-semibold uppercase text-ink-muted">Gestão • Coordenação • Integração • Controle</p></div></div>
      </div>
    </Section>
  );
}