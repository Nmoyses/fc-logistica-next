import { MapPin } from "lucide-react";
import { Section, SectionHeading } from "./Section";

export function AtuacaoNacional() {
  return (
    <Section id="atuacao-nacional" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <SectionHeading eyebrow="Atuação nacional" title="Gestão logística conectada em escala nacional" description="Visão integrada para operações distribuídas em diferentes regiões do Brasil, com coordenação de parceiros, fluxos e indicadores." />
        <div className="relative min-h-80 overflow-hidden rounded-lg bg-primary p-8 text-primary-foreground">
          <div className="absolute inset-0 network-grid opacity-35" aria-hidden="true" />
          <div className="relative mx-auto flex min-h-64 max-w-md items-center justify-center" aria-label="Representação abstrata de uma rede logística conectada no Brasil">
            <span className="absolute left-[24%] top-[24%] h-3 w-3 rounded-full bg-accent ring-4 ring-accent/20" /><span className="absolute right-[27%] top-[20%] h-3 w-3 rounded-full bg-accent ring-4 ring-accent/20" /><span className="absolute left-[45%] top-[46%] h-4 w-4 rounded-full bg-accent ring-4 ring-accent/20" /><span className="absolute bottom-[22%] right-[32%] h-3 w-3 rounded-full bg-accent ring-4 ring-accent/20" />
            <div className="absolute left-[25%] top-[26%] h-px w-[45%] rotate-[-6deg] bg-ink-border" /><div className="absolute left-[27%] top-[35%] h-px w-[32%] rotate-[28deg] bg-ink-border" /><div className="absolute bottom-[32%] left-[47%] h-px w-[24%] rotate-[38deg] bg-ink-border" />
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-ink-border bg-ink-soft shadow-[var(--shadow-lift)]"><MapPin className="h-8 w-8 text-accent" aria-hidden="true" /></div>
          </div>
        </div>
      </div>
    </Section>
  );
}