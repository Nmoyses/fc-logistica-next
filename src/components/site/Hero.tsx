import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-control-tower.jpg";

const pilares = ["Gestão 4PL", "Supply chain", "Custos e KPIs", "Tecnologia"];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden surface-ink pt-32 pb-20 lg:pt-40 lg:pb-28">
      <img
        src={heroImg}
        alt="Especialistas em logística analisando indicadores de supply chain em uma sala de controle"
        width={1600}
        height={1104}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,var(--ink)_18%,transparent_85%)]"
        aria-hidden="true"
      />

      <div className="container-fc">
        <div className="max-w-3xl">
          <span className="eyebrow">Gestão logística 4PL desde 2006</span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-ink-foreground sm:text-5xl lg:text-6xl">
            Gestão inteligente para operações logísticas mais eficientes
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            A FC Logística é uma empresa 4PL de gerenciamento logístico. Assumimos a gestão da sua
            cadeia de transportes e fornecedores para reduzir custos operacionais, elevar o nível de
            serviço e dar visibilidade total ao seu supply chain.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
            >
              Fale com um especialista
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-ink-border px-7 py-4 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-soft"
            >
              Conheça nossas soluções
            </a>
          </div>

          <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink-border pt-8 sm:grid-cols-4">
            {pilares.map((p) => (
              <li key={p} className="font-display text-sm font-medium tracking-wide text-ink-muted">
                <span className="mr-2 text-accent">—</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
