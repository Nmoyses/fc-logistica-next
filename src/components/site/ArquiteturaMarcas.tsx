import React from "react";

const marcasEcossistema = [
  {
    title: "FC Supply Technologies Solutions",
    tag: "Tecnologia & Gestão 4PL",
    description:
      "Plataforma completa de soluções tecnológicas integradas para otimização e controlo ponta a ponta da cadeia de abastecimento.",
    logo: "/assets/fc-supply-tech-logo.png",
    bgColor: "bg-[#0A192F] text-white", // Azul Escuro
    tagColor: "bg-blue-900/50 text-blue-200 border border-blue-700",
    textColor: "text-slate-300",
    buttonColor: "text-blue-400 hover:text-blue-300",
    link: "#fc-supply",
  },
  {
    title: "Integra Cargo",
    tag: "Soluções Logísticas",
    description:
      "Software, integração, automação, IA e inteligência aplicada à logística.",
    logo: "/integracargo-logo.png",
    bgColor: "bg-orange-600 text-white", // Laranja
    tagColor: "bg-orange-700/60 text-orange-100 border border-orange-500",
    textColor: "text-orange-50",
    buttonColor: "text-white font-bold underline hover:text-orange-100",
    link: "#integracargo",
  },
  {
    title: "Integra Carbon",
    tag: "Sustentabilidade & ESG",
    description:
      "Inventário de emissões, descarbonização, certificação e soluções relacionadas ao mercado de carbono.",
    logo: "/integracarbon-logo.png",
    bgColor: "bg-emerald-700 text-white", // Verde
    tagColor: "bg-emerald-800/60 text-emerald-100 border border-emerald-600",
    textColor: "text-emerald-50",
    buttonColor: "text-emerald-200 hover:text-white font-bold underline",
    link: "#integracarbon",
  },
];

export function ArquiteturaMarcas() {
  return (
    <section id="ecossistema" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold tracking-wider text-orange-600 uppercase">
            Arquitetura das Marcas
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-4">
            Um ecossistema com papéis claros
          </h2>
          <p className="text-slate-600">
            A FC permanece no centro da Gestão 4PL e do Supply Chain, conectada a frentes especializadas em tecnologia e sustentabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {marcasEcossistema.map((marca, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-6 flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-1 ${marca.bgColor}`}
            >
              <div>
                <div className="h-14 flex items-center mb-6">
                  {marca.logo ? (
                    <img
                      src={marca.logo}
                      alt={marca.title}
                      className="h-10 object-contain"
                    />
                  ) : (
                    <span className="text-xl font-bold">{marca.title}</span>
                  )}
                </div>
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${marca.tagColor}`}
                >
                  {marca.tag}
                </span>
                <h3 className="text-xl font-bold mb-3">{marca.title}</h3>
                <p className={`text-sm leading-relaxed ${marca.textColor}`}>
                  {marca.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}