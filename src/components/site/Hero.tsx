import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-supply-control.jpg";
import { BrandLogo } from "./BrandLogo";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[760px] overflow-hidden surface-ink pt-28 pb-16 lg:min-h-[820px] lg:pt-36 lg:pb-20">
      <img src={heroImg} alt="Profissionais de Supply Chain monitorando rotas e indicadores logísticos em uma torre de controle" width={1920} height={1200} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 hero-overlay" aria-hidden="true" />
      <div className="container-fc flex min-h-[610px] items-center">
        <div className="max-w-3xl animate-reveal">
          <BrandLogo priority className="mb-8 h-24 w-24 rounded-md shadow-[var(--shadow-lift)] sm:h-28 sm:w-28" />
          <span className="eyebrow"><span className="h-2 w-2 rounded-full bg-accent" />Gestão 4PL desde 2006</span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.06] text-ink-foreground sm:text-5xl lg:text-6xl">Gestão, tecnologia e inteligência para transformar o Supply Chain.</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">A FC Supply Tech Solutions é a evolução da FC Logística. Desde 2006, conectamos pessoas, processos, fornecedores e tecnologia para transformar operações complexas em cadeias mais eficientes, controladas e orientadas por dados.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contato" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-4 text-sm font-semibold uppercase text-accent-foreground transition-all hover:-translate-y-0.5 hover:brightness-110">Fale com um especialista <ArrowRight className="h-4 w-4" /></a>
            <a href="#gestao-4pl" className="inline-flex items-center justify-center rounded-md border border-ink-border bg-ink/45 px-7 py-4 text-sm font-semibold uppercase text-ink-foreground transition-colors hover:bg-ink-soft">Conheça nossa Gestão 4PL</a>
          </div>
          <p className="mt-10 border-t border-ink-border pt-6 text-xs font-semibold uppercase text-ink-muted">4PL <span className="mx-3 text-accent">•</span> Supply Chain <span className="mx-3 text-accent">•</span> Technology</p>
        </div>
      </div>
    </section>
  );
}