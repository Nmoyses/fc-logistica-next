import { ArrowDown, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { timeline } from "@/data/site";

export function Transicao() {
  return (
    <Section id="transicao" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="Evolução da marca" title="A experiência permanece. A marca evolui." description="Em 2026, a FC Logística inicia um novo capítulo como FC Supply Tech Solutions, refletindo a evolução do modelo de atuação e a ampliação das soluções." />
          <p className="mt-6 rule-accent text-sm leading-relaxed text-muted-foreground">A mudança de nome não representa o início de uma nova empresa, mas a evolução de uma trajetória construída desde 2006.</p>
        </div>
        <div className="rounded-lg bg-primary p-7 text-primary-foreground sm:p-10">
          <div className="flex flex-col items-center text-center">
            <span className="text-sm font-semibold uppercase text-ink-muted">FC Logística</span>
            <ArrowDown className="my-5 h-6 w-6 text-accent" aria-hidden="true" />
            <span className="font-display text-2xl font-semibold sm:text-3xl">FC Supply Tech Solutions</span>
            <span className="mt-3 text-xs font-semibold uppercase text-accent">A mesma experiência. Uma atuação mais ampla. Uma nova identidade.</span>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-5">
            {["Tecnologia", "Dados", "Automação", "Pessoas", "Sustentabilidade"].map((item) => <span key={item} className="rounded-md border border-ink-border px-3 py-3 text-center text-xs text-ink-muted">{item}</span>)}
          </div>
        </div>
      </div>
      <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {timeline.map((item) => <article key={item.ano} className="relative bg-card p-7"><Sparkles className="h-4 w-4 text-accent" aria-hidden="true" /><span className="mt-5 block font-display text-2xl font-semibold text-primary">{item.ano}</span><h3 className="mt-2 text-sm font-semibold uppercase text-foreground">{item.titulo}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.texto}</p></article>)}
      </div>
    </Section>
  );
}