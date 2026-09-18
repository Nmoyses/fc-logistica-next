import { Cpu, Leaf, Network } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { BrandLogo } from "./BrandLogo";

const marcas = [
  { nome: "FC Supply Tech Solutions", texto: "Gestão 4PL, Supply Chain, pessoas, processos e coordenação do ecossistema logístico.", Icon: Network, central: true },
  { nome: "Integra Cargo", texto: "Software, integração, automação, IA e inteligência aplicada à logística.", Icon: Cpu, central: false },
  { nome: "Integra Carbon", texto: "Inventário de emissões, descarbonização, certificação e soluções relacionadas ao mercado de carbono.", Icon: Leaf, central: false },
];

export function ArquiteturaMarcas() {
  return (
    <Section id="ecossistema" tone="surface">
      <SectionHeading eyebrow="Arquitetura das marcas" title="Um ecossistema com papéis claros" description="A FC permanece no centro da Gestão 4PL e do Supply Chain, conectada a frentes especializadas em tecnologia e sustentabilidade." />
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {marcas.map(({ nome, texto, Icon, central }) => (
          <article key={nome} className={central ? "rounded-lg bg-primary p-8 text-primary-foreground" : "card-fc p-8"}>
            {central ? <BrandLogo className="h-20 w-20 rounded-md" /> : <Icon className="h-8 w-8 text-accent" aria-hidden="true" />}
            <h3 className="mt-8 font-display text-xl font-semibold">{nome}</h3>
            <p className={central ? "mt-4 text-sm leading-relaxed text-ink-muted" : "mt-4 text-sm leading-relaxed text-muted-foreground"}>{texto}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}