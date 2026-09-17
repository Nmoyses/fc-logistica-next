import { marcasHistoricas } from "@/data/site";

export function Experiencia() {
  return (
    <section id="experiencia" className="bg-primary py-20 text-primary-foreground lg:py-24">
      <div className="container-fc">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="eyebrow">Experiência</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">Experiência em operações de alta exigência</h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-ink-muted">
            Conhecimento construído ao longo de anos em operações que exigem controle, integração e precisão.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-ink-border bg-ink-border sm:grid-cols-2 lg:grid-cols-3">
          {marcasHistoricas.map((marca) => (
            <div key={marca} className="flex min-h-28 items-center justify-center bg-ink-soft px-6 text-center">
              <span className="font-display text-base font-semibold text-ink-foreground/80">{marca}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs leading-relaxed text-ink-muted">
          Marcas apresentadas na documentação institucional de 2018 como parte da trajetória da FC. A exibição não indica vínculo comercial atual.
        </p>
      </div>
    </section>
  );
}