import { Section, SectionHeading } from "./Section";
import strategyImg from "@/assets/supply-chain-strategy.jpg";

export function QuemSomos() {
  return (
    <Section id="quem-somos">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
        <div><SectionHeading eyebrow="Quem somos" title="Uma história construída na Gestão 4PL" description="Nossa história começou em 2006, ainda como FC Logística, a partir da gestão de uma operação logística para a Nokia Siemens Networks." /><div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground"><p>Esse projeto marcou o início de uma trajetória dedicada à coordenação e gestão integrada de operações logísticas complexas.</p><p>Ao longo de quase duas décadas, ampliamos nossa experiência em Gestão 4PL, Supply Chain, transportadores e operadores, custos, indicadores, profissionais especializados e melhoria contínua, atendendo empresas nacionais e multinacionais.</p><p className="rule-accent font-medium text-foreground">FINANCIAL &amp; CONTROL SUPPLY TECH SOLUTIONS LTDA.</p></div></div>
        <img src={strategyImg} alt="Equipe de Supply Chain analisando indicadores e rotas logísticas em uma sala de gestão" width={1600} height={1104} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover shadow-[var(--shadow-lift)]" />
      </div>
    </Section>
  );
}