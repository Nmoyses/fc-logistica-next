import React from "react";

const marcasEcossistema = [
  {
    title: "FC Supply Technologies Solutions",
    tag: "Tecnologia & Gestão 4PL",
    description:
      "Plataforma completa de soluções tecnológicas integradas para otimização e controlo ponta a ponta da cadeia de abastecimento.",
    logo: "/assets/fc-supply-tech-logo.png", // Ajuste o caminho da imagem se necessário
    bgColor: "bg-[#0A192F] text-white", // Azul Escuro
    tagColor: "bg-blue-900/50 text-blue-200 border border-blue-700",
    textColor: "text-slate-300",
    buttonColor: "text-blue-400 hover:text-blue-300",
    link: "#fc-supply",
  },
  {
    title: "Integracard",
    tag: "Soluções Financeiras",
    description:
      "Sistema de gestão financeira e cartão corporativo integrado para controlo de despesas e operações logísticas.",
    logo: "/assets/integracard-logo.png", // Adicione a logo correspondente em public/assets
    bgColor: "bg-orange-600 text-white", // Laranja
    tagColor: "bg-orange-700/60 text-orange-100 border border-orange-500",
    textColor: "text-orange-50",
    buttonColor: "text-white font-bold underline hover:text-orange-100",
    link: "#integracard",
  },
  {
    title: "Integracarbon",
    tag: "Sustentabilidade & ESG",
    description:
      "Plataforma dedicada à medição, gestão de emissões e estratégias de descarbonização para a cadeia logística.",
    logo: "/assets/integracarbon-logo.png", // Adicione a logo correspondente em public/assets
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
        <div className="mb-10">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-wider">
            ECOSSISTEMA DE SOLUÇÕES
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-3">
            Arquitetura de Marcas
          </h2>
          <p className="text-slate-600 max-w-2xl text-base">
            Conheça os pilares e unidades de negócios que compõem o nosso ecossistema de inteligência logística e tecnologia.
          </p>
        </div>

        {/* Grade de Cards com Cores Personalizadas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {marcasEcossistema.map((marca, index) => (
            <div
              key={index}
              className={`${marca.bgColor} rounded-xl p-6 shadow-lg hover:scale-[1.02] transition-all duration-200 flex flex-col justify-between`}
            >
              <div>
                {/* Logo da Marca */}
                <div className="h-16 flex items-center mb-4 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <img
                    src={marca.logo}
                    alt={marca.title}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>

                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-1 rounded mb-4 ${marca.tagColor}`}
                >
                  {marca.tag}
                </span>

                <h3 className="text-xl font-bold mb-3">{marca.title}</h3>

                <p className={`text-sm leading-relaxed mb-6 ${marca.textColor}`}>
                  {marca.description}
                </p>
              </div>

              <div>
                <a
                  href={marca.link}
                  className={`text-sm inline-flex items-center gap-1 transition-colors ${marca.buttonColor}`}
                >
                  Saiba mais &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArquiteturaMarcas;