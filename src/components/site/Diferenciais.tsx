import { Section, SectionHeading } from "./Section";
import { diferenciais, resultados } from "@/data/site";
import networkImg from "@/assets/network-abstract.jpg";

export function Diferenciais() {
  return (
    <>
      <Section id="diferenciais">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que empresas confiam a gestão logística à FC"
        />
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((d, i) => (
            <article key={d.titulo} className="border-t border-border pt-6">
              <span className="font-display text-xs font-semibold tracking-widest text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">{d.titulo}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="relative isolate overflow-hidden surface-ink py-20 lg:py-28">
        <img
          src={networkImg}
          alt="Representação abstrata de uma malha logística integrada"
          width={1400}
          height={900}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="container-fc">
          <SectionHeading
            tone="ink"
            eyebrow="Foco em resultado"
            title="O impacto de uma operação logística bem gerida"
            description="Gestão logística não se mede apenas em frete. Ela aparece no controle da operação, na previsibilidade e na qualidade das decisões."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-ink-border bg-ink-border sm:grid-cols-2 lg:grid-cols-3">
            {resultados.map((r) => (
              <article key={r.titulo} className="bg-ink-soft/90 p-8 backdrop-blur-sm">
                <h3 className="font-display text-base font-semibold uppercase tracking-wide text-ink-foreground">
                  {r.titulo}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{r.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
