import { BarChart3, Cpu, Factory, Leaf, Network, Users, WalletCards } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { diferenciais } from "@/data/site";

const icons = [BarChart3, Factory, Network, Cpu, WalletCards, Users, Leaf];
export function Diferenciais() {
  return (
    <Section id="diferenciais">
      <SectionHeading eyebrow="Por que FC Supply Tech?" title="Experiência, gestão e tecnologia aplicadas ao Supply Chain." description="Controle, visibilidade, performance e tomada de decisão reunidos em uma atuação orientada à evolução da cadeia." />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{diferenciais.map((item, index) => { const Icon = icons[index] ?? Network; return <article key={item.titulo} className={index === 0 ? "rounded-lg bg-primary p-7 text-primary-foreground lg:col-span-2" : "card-fc p-7"}><Icon className="h-6 w-6 text-accent" aria-hidden="true" /><span className={index === 0 ? "mt-9 block text-xs font-semibold text-ink-muted" : "mt-9 block text-xs font-semibold text-muted-foreground"}>{String(index + 1).padStart(2, "0")}</span><h3 className="mt-3 text-base font-semibold">{item.titulo}</h3><p className={index === 0 ? "mt-3 text-sm leading-relaxed text-ink-muted" : "mt-3 text-sm leading-relaxed text-muted-foreground"}>{item.texto}</p></article>; })}</div>
    </Section>
  );
}