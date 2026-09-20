import motorola from "@/assets/brands-official/motorola-solutions.svg.asset.json";
import claro from "@/assets/brands-official/claro.webp.asset.json";
import axis from "@/assets/brands-official/axis-communications.png.asset.json";
import dana from "@/assets/brands-official/dana-cosmeticos.png.asset.json";
import { SectionHeading } from "./Section";

const brands = [
  { name: "Motorola Solutions", src: motorola.url, size: "max-h-12 max-w-64" },
  { name: "Zebra Technologies" },
  { name: "Claro", src: claro.url, size: "max-h-24 max-w-28" },
  { name: "Axis Communications", src: axis.url, size: "max-h-20 max-w-56" },
  { name: "Dana Cosméticos", src: dana.url, size: "max-h-14 max-w-48" },
  { name: "SUEZ Water Technologies & Solutions" },
];

export function Experiencia() {
  return (
    <section id="experiencia" className="bg-card py-20 lg:py-24">
      <div className="container-fc">
        <SectionHeading eyebrow="Nossa experiência" title="Experiência construída ao longo da nossa trajetória" description="Ao longo de sua história, a FC participou de projetos e operações para empresas nacionais e multinacionais." />
        <ul className="mt-12 grid gap-x-12 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <li key={brand.name} className="flex min-h-40 items-center justify-center px-6 py-8 text-center">
              {brand.src ? (
                <img src={brand.src} alt={brand.name} loading="lazy" className={`h-auto w-auto object-contain ${brand.size}`} />
              ) : (
                <div className="max-w-56" aria-label={`${brand.name}: arquivo oficial pendente`}>
                  <span className="block font-display text-base font-semibold text-foreground">{brand.name}</span>
                  <span className="mt-2 block text-xs text-muted-foreground">Arquivo oficial pendente</span>
                </div>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">Empresas atendidas ao longo da trajetória da FC. A apresentação das marcas não implica vínculo comercial atual.</p>
      </div>
    </section>
  );
}