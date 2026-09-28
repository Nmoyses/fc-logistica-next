import { SectionHeading } from "./Section";

const brands = [
  { name: "Motorola Solutions", src: "/motorola-logo.png" } ,
  { name: "Zebra Technologies", src: "/zebra-logo.png" },
  { name: "Axis Communications", src: "/axis-logo.png", size: "max-h-20 max-w-56" },
  { name: "Dana Cosméticos", src: "/danacosmeticos-logo.png" },
  { name: "Nokia", src: "/nokia-logo.png" },
  { name: "RB Alimentos", src: "/rbalimentos-logo.png" },
  { name: "Cambium", src: "/cambium-logo.png" },
];

export function Experiencia() {
  return (
    <section id="experiencia" className="bg-card py-20 lg:py-24">
      <div className="container-fc">
        <SectionHeading
          eyebrow="Nossa experiência"
          title="Experiência construída ao longo da nossa trajetória"
          description="Ao longo de sua trajetória, a FC construiu uma sólida experiência na gestão de projetos estratégicos e operações logísticas de alta complexidade, atendendo grandes empresas e construindo relações de longo prazo, muitas delas ativas, sempre incorporando inovação e tecnologia para tornar as operações mais eficientes, inteligentes e sustentáveis, incluindo soluções para mensuração e inventário das emissões de carbono na cadeia logística."
        />
        <ul className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-8">
          {brands.map((brand) => (
            <li
              key={brand.name}
              className="flex min-h-28 w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.33%-2rem)] lg:w-[calc(25%-2.25rem)] items-center justify-center px-4 py-6 text-center"
            >
              {brand.src ? (
                <img
                  src={brand.src}
                  alt={brand.name}
                  className={`h-auto w-auto object-contain ${brand.size ?? ""}`}
                />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}