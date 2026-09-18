import motorola from "@/assets/brands/motorola-solutions.jpg";
import zebra from "@/assets/brands/zebra-technologies.jpg";
import claro from "@/assets/brands/claro.jpg";
import axis from "@/assets/brands/axis-communications.jpg";
import dana from "@/assets/brands/dana-cosmeticos.jpg";
import suez from "@/assets/brands/suez.jpg";
import { SectionHeading } from "./Section";

const brands = [{ name: "Motorola Solutions", src: motorola }, { name: "Zebra Technologies", src: zebra }, { name: "Claro", src: claro }, { name: "Axis Communications", src: axis }, { name: "Dana Cosméticos", src: dana }, { name: "Suez Water Technologies & Solutions", src: suez }];
export function Experiencia() {
  return (
    <section id="experiencia" className="bg-background py-20 lg:py-24"><div className="container-fc"><SectionHeading eyebrow="Nossa experiência" title="Experiência construída ao longo da nossa trajetória" description="Ao longo de sua história, a FC participou de projetos e operações para empresas nacionais e multinacionais." /><div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{brands.map((brand) => <div key={brand.name} className="flex min-h-36 items-center justify-center bg-card p-7"><img src={brand.src} alt={`Marca ${brand.name}`} loading="lazy" className="max-h-16 max-w-[190px] object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100" /></div>)}</div><p className="mt-5 text-xs leading-relaxed text-muted-foreground">Empresas atendidas ao longo da trajetória da FC. A apresentação das marcas não implica vínculo comercial atual.</p></div></section>
  );
}