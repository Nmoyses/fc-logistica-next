import { Section, SectionHeading } from "./Section";
import cdImg from "@/assets/distribution-center.jpg";

const timeline = [
  { titulo: "2006", texto: "Início da trajetória da FC Logística." },
  { titulo: "Evolução", texto: "Projetos em diferentes segmentos e operações." },
  { titulo: "4PL", texto: "Gestão integrada de transportes e cadeia logística." },
  { titulo: "Hoje", texto: "Tecnologia, indicadores e melhoria contínua." },
];

export function QuemSomos() {
  return (
    <Section id="quem-somos">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Quem somos"
             title="Gestão construída dentro da operação"
             description="A FC é uma empresa 4PL especializada em customizar operações de embarcadores, controlar fornecedores de transporte e reduzir ineficiências na cadeia logística."
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Desde 2006, desenvolvemos projetos que conectam estoques, inventário, transporte, planejamento de compras, fornecedores e portais logísticos.
            </p>
            <p className="rule-accent">
               Atuamos em todo o Brasil com gestão próxima, informação estruturada e responsabilidade pelos níveis de serviço acordados.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Desde
              </dt>
              <dd className="mt-1 font-display text-3xl font-semibold">2006</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Atuação
              </dt>
              <dd className="mt-1 font-display text-3xl font-semibold">Brasil</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Modelo
              </dt>
              <dd className="mt-1 font-display text-3xl font-semibold">4PL</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <img
            src={cdImg}
            alt="Gestor logístico acompanhando a operação em um centro de distribuição"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full rounded-lg object-cover shadow-[var(--shadow-lift)]"
          />
        </div>
      </div>

       <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
         {timeline.map((d, index) => (
           <article key={d.titulo} className="relative bg-card p-7">
             <span className="text-xs font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span>
             <h3 className="mt-5 font-display text-lg font-semibold">{d.titulo}</h3>
             <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
