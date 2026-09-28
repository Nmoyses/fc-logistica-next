const marcasEcossistema = [
  {
    title: "FC Supply Technologies Solutions",
    tag: "Tecnologia & Gestão 4PL",
    description:
      "Plataforma completa de soluções tecnológicas integradas para otimização e controlo ponta a ponta da cadeia de abastecimento.",
    logo: "/logo.png",
    bgColor: "bg-[#0A192F] text-white",
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
    bgColor: "bg-orange-600 text-white",
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
    bgColor: "bg-emerald-700 text-white",
    tagColor: "bg-emerald-800/60 text-emerald-100 border border-emerald-600",
    textColor: "text-emerald-50",
    buttonColor: "text-emerald-200 hover:text-white font-bold underline",
    link: "#integracarbon",
  },
];

export function ArquiteturaMarcas() {
  return (
    <section id="ecossistema" className="bg-surface py-16">
      <div className="container-fc">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="eyebrow">Arquitetura das marcas</span>
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            Um ecossistema com papéis claros
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A FC permanece no centro da Gestão 4PL e do Supply Chain, conectada a frentes especializadas em tecnologia e sustentabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {marcasEcossistema.map((marca) => (
            <article key={marca.title} className={`flex flex-col justify-between rounded-lg p-6 shadow-lg transition-transform hover:-translate-y-1 ${marca.bgColor}`}>
              <div>
                <div className="mb-6 flex h-20 items-center">
                  <img src={marca.logo} alt={marca.title} className="h-16 md:h-20 w-auto object-contain" />
                </div>
                <span className={`mb-4 inline-block rounded-md px-3 py-1 text-xs font-semibold ${marca.tagColor}`}>
                  {marca.tag}
                </span>
                <h3 className="mb-3 text-xl font-bold">{marca.title}</h3>
                <p className={`text-sm leading-relaxed ${marca.textColor}`}>{marca.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}