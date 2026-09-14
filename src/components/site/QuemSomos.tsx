import { Section, SectionHeading } from "./Section";
import cdImg from "@/assets/distribution-center.jpg";

const destaques = [
  {
    titulo: "Reduzimos custos",
    texto:
      "Buscamos novas soluções de transporte e armazenagem capazes de otimizar o capital logístico, com orçamentos e planejamento para novas operações em nível nacional.",
  },
  {
    titulo: "Negociamos contratos",
    texto:
      "Gerenciamos, negociamos e buscamos contratos logísticos com melhores condições para a sua operação, acompanhando os resultados ao longo do tempo.",
  },
  {
    titulo: "Gerimos indicadores",
    texto:
      "Geramos relatórios gerenciais com KPIs customizados, avaliando risco, desempenho, qualidade e retorno das operações em todo o Brasil.",
  },
];

export function QuemSomos() {
  return (
    <Section id="quem-somos">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Quem somos"
            title="Uma gestora logística, não apenas mais um prestador de transporte"
            description="A FC Logística é uma empresa 4PL de gerenciamento logístico. Nosso objetivo é customizar a operação de fornecedores de transporte e reduzir custos operacionais de grandes cadeias de operação logística."
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Atendemos grandes operações logísticas desde 2006, prestando suporte a multinacionais
              como Motorola Solutions, Zebra Technologies e Nokia Siemens — com relatórios gerenciais
              de KPIs customizados e análise de contratos, sistemas e parceiros de transporte.
            </p>
            <p className="rule-accent">
              Atuamos em todo o Brasil, disponibilizando equipes dedicadas e especializadas para
              controlar as operações dentro do próprio cliente ou fornecedor.
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

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {destaques.map((d) => (
          <article key={d.titulo} className="card-fc p-7">
            <h3 className="font-display text-lg font-semibold">{d.titulo}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
