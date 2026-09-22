import React from "react";
import { Section, SectionHeading } from "./Section";

// Importações originais mantidas para as marcas automáticas se houver
import motorola from "@/assets/brands-official/motorola-solutions.svg.asset.json";
import axis from "@/assets/brands-official/axis-communications.png.asset.json";

const marcasClientes = [
  { name: "Motorola Solutions", src: motorola.url || "", size: "max-h-12 max-w-64" },
  { name: "Zebra Technologies", src: "/zebra-logo.png", size: "max-h-12 max-w-64" },
  { name: "Axis Communications", src: axis.url || "", size: "max-h-20 max-w-56" },
  { name: "Dana Cosméticos", src: "/danacosmeticos-logo.png", size: "max-h-12 max-w-64" },
  { name: "RB Alimentos", src: "/rbalimentos-logo.png", size: "max-h-14 max-w-64" },
  { name: "Cambium Networks", src: "/cambium-logo.png", size: "max-h-14 max-w-64" },
  { name: "Nokia Siemens Networks", src: "/nokia-logo.png", size: "max-h-16 max-w-64" },
];

export function Experiencia() {
  return (
    <Section id="experiencia" tone="surface">
      <div className="container-fc">
        <SectionHeading 
          eyebrow="Nossa trajetória" 
          title="Experiência construída ao longo da nossa trajetória" 
          description="Conectando grandes marcas e consolidando parcerias de longo prazo através de uma gestão logística de excelência." 
        />
        <div className="mt-12 grid grid-cols-2 gap-8 items-center justify-items-center md:grid-cols-4 lg:grid-cols-7 opacity-75">
          {marcasClientes.map((marca) => (
            <div key={marca.name} className="flex items-center justify-center p-4 bg-white/5 rounded-lg w-full h-24 border border-white/5 shadow-sm">
              <img 
                src={marca.src} 
                alt={marca.name} 
                className={`${marca.size} object-contain filter brightness-0 invert`} 
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
