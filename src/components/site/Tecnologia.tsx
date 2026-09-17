import { ArrowDown, BarChart3, Boxes, Cable, FileCheck2, Radar, Route } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { capacidadesTecnologicas, fluxoDecisao } from "@/data/site";

const icons = [Cable, Boxes, BarChart3, Radar, FileCheck2, Route];

export function Tecnologia() {
  return (
    <Section id="tecnologia" tone="surface">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <SectionHeading
          eyebrow="Gestão + tecnologia"
          title="Gestão logística conectada por tecnologia"
          description="Integramos informações, processos e indicadores para ampliar a visibilidade, apoiar decisões e tornar o controle logístico mais eficiente."
        />
        <p className="border-l-2 border-accent pl-5 text-sm leading-relaxed text-muted-foreground lg:ml-auto lg:max-w-md">
          Capacidades apresentadas no material institucional da FC, aplicadas conforme a necessidade de cada operação.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-12">
        <article className="relative overflow-hidden rounded-lg bg-primary p-7 text-primary-foreground lg:col-span-7 lg:row-span-2 lg:p-10">
          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Tecnologia a serviço da gestão</span>
            <h3 className="mt-4 text-3xl font-semibold">Central de Fretes</h3>
            <p className="mt-4 max-w-lg leading-relaxed text-ink-muted">
              Informação, controle e integração para uma gestão de transportes mais eficiente.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-md bg-ink-border sm:grid-cols-3">
              {["Controle de gastos", "Conferência", "Pré-fatura", "Rastreamento", "Indicadores", "Transportadoras"].map((item) => (
                <span key={item} className="bg-ink-soft px-4 py-4 text-xs font-semibold uppercase tracking-wide text-ink-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-20 -right-14 h-64 w-64 rounded-full border border-ink-border" aria-hidden="true" />
          <div className="absolute -bottom-8 -right-2 h-40 w-40 rounded-full border border-ink-border" aria-hidden="true" />
        </article>

        {capacidadesTecnologicas.map((item, index) => {
          const Icon = icons[index] ?? Cable;
          return (
            <article key={item.titulo} className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-card)] lg:col-span-5">
              <Icon className="h-5 w-5 text-secondary-foreground transition-colors group-hover:text-accent" aria-hidden="true" />
              <h3 className="mt-5 text-base font-semibold">{item.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.texto}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-20 border-y border-border py-12">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <span className="eyebrow">Da operação à decisão</span>
            <h3 className="mt-4 text-3xl font-semibold leading-tight">Não basta movimentar. É preciso enxergar, controlar e melhorar.</h3>
          </div>
          <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {fluxoDecisao.map((item, index) => (
              <li key={item} className="relative rounded-md bg-secondary px-3 py-5 text-center">
                <span className="block text-xs font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span>
                <span className="mt-2 block text-sm font-semibold">{item}</span>
                {index < fluxoDecisao.length - 1 && <ArrowDown className="mx-auto mt-3 h-3.5 w-3.5 text-muted-foreground lg:hidden" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}