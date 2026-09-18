import { Section, SectionHeading } from "./Section";

export function Fundador() {
  return (
    <Section id="fundador">
      <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
        <SectionHeading eyebrow="Nosso fundador" title="Daniel Ramos" description="Fundador da FC Supply Tech Solutions e sócio-fundador da Integra Cargo." />
        <div className="border-l-2 border-accent pl-6 sm:pl-10">
          <p className="text-lg leading-relaxed text-foreground">Executivo e empreendedor com trajetória em Supply Chain, logística, tecnologia e transformação digital, é pós-graduado em Supply Chain pela UNICAMP.</p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">Desde 2006, sua atuação está ligada ao desenvolvimento e gestão de projetos 4PL. A criação da Integra Cargo ampliou essa visão, conectando conhecimento operacional a software, automação, integrações e inteligência aplicada ao Supply Chain.</p>
          <div className="mt-8 flex flex-wrap gap-2">{["Conhecimento logístico", "Gestão 4PL", "Tecnologia"].map((item) => <span key={item} className="rounded-md bg-secondary px-4 py-2 text-xs font-semibold uppercase text-secondary-foreground">{item}</span>)}</div>
        </div>
      </div>
    </Section>
  );
}