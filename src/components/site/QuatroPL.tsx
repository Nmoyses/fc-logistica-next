import { Check } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { fluxo4pl } from "@/data/site";

const entregas = [
  "Redução de custos em procurement, estoque, transportes, distribuição e staff",
  "Atualização permanente da tecnologia e inovação de processos",
  "Tecnologia e visibilidade da operação",
  "Melhoria contínua e parceria de longo prazo",
  "Simplificação das relações comerciais e de controle",
  "Aumento do nível de serviço",
  "Estruturação de armazéns e Centros de Distribuição",
  "Suporte ao planejamento de produção e vendas",
  "Otimização da malha de distribuição",
  "Consolidação de cargas próprias e com outras companhias",
  "Monitoramento, rastreabilidade e controle de KPIs",
  "Conferência, controle, pagamento e auditoria de fretes de terceiros",
];

export function QuatroPL() {
  return (
    <Section id="4pl" tone="ink">
      <SectionHeading
        tone="ink"
        eyebrow="Metodologia 4PL"
        title="O que é 4PL e por que isso muda a sua operação"
        description="O 4PL (Fourth-Party Logistics) é a evolução da quarteirização dos serviços terceirizados (3PL). Nesse modelo, a indústria confere a um contratado a responsabilidade pela gestão global da sua supply chain — da participação nas reuniões de planejamento de produção e vendas (S&OP) até a entrega final ao consumidor. Em outras palavras: nós respondemos pelos indicadores de níveis de serviço acordados em contrato."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink-muted">
            Gestão integrada da cadeia
          </h3>
          <ol className="mt-8 relative border-l border-ink-border pl-8">
            {fluxo4pl.map((etapa, i) => (
              <li key={etapa.titulo} className="relative pb-8 last:pb-0">
                <span
                  className="absolute -left-[2.3rem] flex h-6 w-6 items-center justify-center rounded-full border border-accent bg-ink text-[0.6rem] font-semibold text-accent"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h4 className="font-display text-base font-semibold text-ink-foreground">
                  {etapa.titulo}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{etapa.texto}</p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink-muted">
            O que a gestão 4PL entrega
          </h3>
          <ul className="mt-8 grid gap-3">
            {entregas.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            className="mt-10 inline-flex items-center gap-2 border-b border-accent pb-1 font-display text-sm font-semibold text-accent transition-opacity hover:opacity-80"
          >
            Entenda nossa atuação 4PL na sua operação
          </a>
        </div>
      </div>
    </Section>
  );
}
