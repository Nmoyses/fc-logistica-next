import { ArrowUpRight, Download } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { contato, solucoes } from "@/data/site";

export function Solucoes() {
  return (
    <Section id="solucoes" tone="surface">
      <SectionHeading
        eyebrow="Soluções"
        title="Gestão completa da operação logística"
        description="Consultoria e gestão aplicadas a cada frente da cadeia — do planejamento e da negociação com transportadoras ao controle financeiro, à tecnologia e aos indicadores de performance."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {solucoes.map((s) => (
          <article
            key={s.titulo}
            className="group bg-card p-7 transition-colors hover:bg-background"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-base font-semibold leading-snug">{s.titulo}</h3>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
                aria-hidden="true"
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.descricao}</p>
            <p className="mt-4 border-t border-border pt-4 text-xs font-medium uppercase tracking-wide text-accent">
              {s.beneficio}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Vamos conversar sobre sua operação
        </a>
        <a
          href={contato.apresentacao}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Baixar apresentação institucional
        </a>
      </div>
    </Section>
  );
}
