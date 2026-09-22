import { Cpu, Leaf, Network } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { BrandLogo } from "./BrandLogo";

const marcas = [
  { nome: "FC Supply Tech Solutions", texto: "Gestão 4PL, Supply Chain, pessoas, processos e coordenação do ecossistema logístico.", Icon: Network, central: true, image: "" },
  { nome: "Integra Cargo", texto: "Software, integração, automação, IA e inteligência aplicada à logística.", Icon: Cpu, central: false, image: "/integracargo-logo.png" },
  { nome: "Integra Carbon", texto: "Inventário de emissões, descarbonização, certificação e soluções relacionadas ao mercado de carbono.", Icon: Leaf, central: false, image: "" },
];

export function ArquiteturaMarcas() {
  return (
    <section id="ecossistema" className="py-20 lg:py-24">
      <div className="container-fc">
        <SectionHeading 
          eyebrow="Arquitetura das marcas" 
          title="Um ecossistema com papéis claros" 
          description="A FC permanece no centro da Gestão 4PL e do Supply Chain, conectada a frentes especializadas em tecnologia e sustentabilidade." 
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {marcas.map(({ nome, texto, Icon, central, image }) => {
            const ehIntegraCargo = nome === "Integra Cargo";
            const ehIntegraCarbon = nome === "Integra Carbon";
            
            return (
              <article 
                key={nome} 
                className={
                  central 
                    ? "rounded-lg bg-primary p-8 text-primary-foreground transform lg:scale-105 shadow-xl z-10" 
                    : ehIntegraCargo 
                      ? "rounded-lg bg-orange-600 p-8 text-white transform lg:scale-105 shadow-xl z-10" 
                      : ehIntegraCarbon
                        ? "rounded-lg bg-emerald-600 p-8 text-white transform lg:scale-105 shadow-xl z-10"
                        : "card-fc p-8"
                }
              >
                {central ? (
                  <BrandLogo className="h-20 w-20 rounded-md" />
                ) : image ? (
                  <img src={image} alt={nome} className="h-10 w-auto object-contain mb-4 rounded-sm" />
                ) : (
                  <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                )}
                <h3 className="mt-4 font-display text-xl font-semibold">{nome}</h3>
                <p className={(central || ehIntegraCargo || ehIntegraCarbon) ? "mt-4 text-sm leading-relaxed text-white/90" : "mt-4 text-sm leading-relaxed text-muted-foreground"}>
                  {texto}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
