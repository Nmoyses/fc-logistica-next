import { ArrowRight, Cpu, PlugZap } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { integracoes, solucoesIntegra } from "@/data/site";

export function Tecnologia() {
  return (
    <Section id="tecnologia" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div><Cpu className="mb-6 h-9 w-9 text-accent" aria-hidden="true" /><SectionHeading eyebrow="FC + Integra Cargo" title="Gestão 4PL potencializada por tecnologia" description="A experiência operacional da FC pode ser combinada com a tecnologia da Integra Cargo, criando um ecossistema integrado de gestão e digitalização do Supply Chain." /><span className="mt-7 inline-flex cursor-not-allowed items-center gap-2 text-sm font-semibold text-muted-foreground" title="Endereço oficial ainda não fornecido">Conheça a Integra Cargo <span className="text-xs font-normal">— link em configuração</span></span></div>
        <div className="rounded-lg bg-primary p-6 text-primary-foreground sm:p-8"><div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{solucoesIntegra.map((item) => <span key={item} className="rounded-md border border-ink-border bg-ink-soft px-3 py-3 text-xs font-medium text-ink-foreground">{item}</span>)}</div><div className="mt-8 border-t border-ink-border pt-6"><div className="flex items-center gap-2"><PlugZap className="h-4 w-4 text-accent" /><h3 className="text-xs font-semibold uppercase text-ink-muted">Capacidade de integração</h3></div><div className="mt-4 flex flex-wrap gap-2">{integracoes.map((item) => <span key={item} className="rounded-md bg-ink px-3 py-2 text-xs text-ink-muted">{item}</span>)}</div></div></div>
      </div>
      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-5">{["Dados", "Informação", "Gestão", "Decisão", "Performance"].map((item, index, array) => <div key={item} className="relative rounded-md border border-border bg-card p-5 text-center"><span className="text-xs font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span><span className="mt-2 block text-sm font-semibold">{item}</span>{index < array.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-accent p-1 text-accent-foreground md:block" />}</div>)}</div>
    </Section>
  );
}