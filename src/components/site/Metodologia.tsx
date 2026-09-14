import { Section, SectionHeading } from "./Section";
import { metodologia } from "@/data/site";

export function Metodologia() {
  return (
    <Section id="metodologia">
      <SectionHeading
        eyebrow="Como geramos valor"
        title="Gestão contínua, não um projeto pontual"
        description="Um método de trabalho que começa no diagnóstico da operação e não termina na implementação: seguimos gerindo, medindo e melhorando."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {metodologia.map((etapa) => (
          <article key={etapa.numero} className="relative bg-card p-8">
            <span
              className="font-display text-5xl font-bold text-muted opacity-80"
              aria-hidden="true"
            >
              {etapa.numero}
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold">{etapa.titulo}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{etapa.texto}</p>
            <span className="absolute inset-x-8 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 hover:scale-x-100" />
          </article>
        ))}
      </div>
    </Section>
  );
}
