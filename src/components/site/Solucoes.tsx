import { ArrowUpRight, Download } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { contato, solucoes } from "@/data/site";

export function Solucoes() {
  return (
    <Section id="solucoes" tone="surface">
      <SectionHeading
        eyebrow="Soluções"
        title="O que fazemos e qual problema resolvemos"
        description="Gestão aplicada a cada frente da cadeia, com responsabilidade clara sobre operação, fornecedores, custos e performance."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {solucoes.slice(0, 9).map((s, index) => (
          <article
            key={s.titulo}
            className={index === 0 || index === 7 ? "group rounded-lg bg-primary p-7 text-primary-foreground transition-transform hover:-translate-y-1 lg:col-span-2" : "group rounded-lg border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/40"}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-base font-semibold leading-snug">{s.titulo}</h3>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-accent"
                aria-hidden="true"
              />
            </div>
            <p className={index === 0 || index === 7 ? "mt-3 text-sm leading-relaxed text-ink-muted" : "mt-3 text-sm leading-relaxed text-muted-foreground"}>{s.descricao}</p>
            <p className={index === 0 || index === 7 ? "mt-5 border-t border-ink-border pt-4 text-xs font-medium uppercase tracking-wide text-accent" : "mt-5 border-t border-border pt-4 text-xs font-medium uppercase tracking-wide text-secondary-foreground"}>
              Resultado: {s.beneficio}
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
