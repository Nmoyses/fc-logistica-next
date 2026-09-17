import { Section, SectionHeading } from "./Section";
import { BarChart3, Cpu, Eye, Gauge, RefreshCw, WalletCards } from "lucide-react";
import { diferenciais } from "@/data/site";

const icons = [WalletCards, Gauge, BarChart3, Eye, Cpu, RefreshCw];

export function Diferenciais() {
  return (
      <Section id="diferenciais">
        <SectionHeading
          eyebrow="Por que a FC?"
          title="Controle para transformar operação em performance"
          description="Gestão, tecnologia e melhoria contínua reunidas em uma única visão da cadeia."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((d, i) => (
            <article key={d.titulo} className={i === 1 || i === 4 ? "group rounded-lg bg-primary p-8 text-primary-foreground transition-transform hover:-translate-y-1" : "group rounded-lg border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent/40"}>
              {(() => { const Icon = icons[i] ?? Gauge; return <Icon className="h-6 w-6 text-accent" aria-hidden="true" />; })()}
              <span className={i === 1 || i === 4 ? "mt-10 block text-xs font-semibold tracking-widest text-ink-muted" : "mt-10 block text-xs font-semibold tracking-widest text-muted-foreground"}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{d.titulo}</h3>
              <p className={i === 1 || i === 4 ? "mt-2.5 text-sm leading-relaxed text-ink-muted" : "mt-2.5 text-sm leading-relaxed text-muted-foreground"}>{d.texto}</p>
            </article>
          ))}
        </div>
      </Section>
  );
}
