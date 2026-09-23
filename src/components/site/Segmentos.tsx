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
        title="Nossa expertise vem da expansão e do planejamento de diferentes mercados logísticos, com equipes dedicadas às exigências de cada tipo de carga."
        description="A FC Supply Tech Solutions atua em diversos segmentos, oferecendo soluções logísticas especializadas para atender às necessidades específicas de cada setor."
      />

       <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {segmentos.map((seg, i) => {
          const Icon = icones[i % icones.length] ?? ShieldCheck;
          return (
             <article key={seg.titulo} className={i === 0 || i === 4 ? "group rounded-lg bg-primary p-7 text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1 lg:row-span-2" : "group rounded-lg border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/40"}>
              <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <h3 className="mt-5 font-display text-base font-semibold leading-snug">
                {seg.titulo}
              </h3>
               <p className={i === 0 || i === 4 ? "mt-2.5 text-sm leading-relaxed text-ink-muted" : "mt-2.5 text-sm leading-relaxed text-muted-foreground"}>{seg.texto}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
