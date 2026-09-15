import {
  Apple,
  Cpu,
  HeartPulse,
  Laptop,
  Pill,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { segmentos } from "@/data/site";

const icones = [ShieldCheck, Cpu, Laptop, Smartphone, HeartPulse, Apple, Pill, Sparkles];

export function Segmentos() {
  return (
    <Section id="segmentos" tone="surface">
      <SectionHeading
        eyebrow="Segmentos de atuação"
        title="Experiência em cadeias que não admitem improviso"
        description="Nossa expertise vem da expansão e do planejamento de diferentes mercados logísticos, com equipes dedicadas às exigências de cada tipo de carga."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {segmentos.map((seg, i) => {
          const Icon = icones[i % icones.length] ?? ShieldCheck;
          return (
            <article key={seg.titulo} className="card-fc p-7">
              <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <h3 className="mt-5 font-display text-base font-semibold leading-snug">
                {seg.titulo}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{seg.texto}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
