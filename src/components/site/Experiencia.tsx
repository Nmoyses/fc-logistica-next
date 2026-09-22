import React from "react";

// Exemplo da estrutura de dados das logos/parceiros
const logosData = [
  { name: "Motorola Solutions", src: "/assets/motorola-solutions.png" },
  { name: "Claro", src: "/assets/claro.webp" },
  { name: "Axis Communications", src: "/assets/axis-communications.png" },
  { name: "Suez", src: "/assets/suez-logo.png" },
  { name: "Zebra", src: "/assets/zebra-logo.png" },
  { name: "Cambium", src: "/assets/cambium-logo.png" },
];

export function Experiencia() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="mb-10">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-wider">
            NOSSA TRAJETÓRIA
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-3">
            Experiência construída ao longo da nossa trajetória
          </h2>
          <p className="text-slate-600 max-w-2xl text-base">
            Conectando grandes marcas e consolidando parcerias de longo prazo através de uma gestão logística de excelência.
          </p>
        </div>

        {/* Grade de Logos Corrigida */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {logosData.map((logo, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-lg p-4 flex items-center justify-center h-24 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <img
                src={logo.src}
                alt={logo.name}
                /*
                  Ajustes cruciais de visibilidade:
                  - Removemos 'brightness-0' ou 'invert' que deixavam a imagem branca.
                  - Usamos 'object-contain' para manter a proporção da logo.
                  - Opacidade padrão ajustada para 80%, subindo para 100% no hover.
                */
                className="max-h-12 w-auto object-contain transition-opacity duration-200 opacity-80 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiencia;