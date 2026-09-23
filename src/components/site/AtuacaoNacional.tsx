import { ArrowRight, Network } from "lucide-react";

export function AtuacaoNacional() {
  return (
    <section id="gestao-4pl" className="bg-[#02182B] py-20 text-white">
      <div className="container-fc">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
            GESTÃO 4PL
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
            A FC coordena o ecossistema. Somos gestores da cadeia.
          </h2>
          <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed">
            A FC Supply Tech Solutions atua como uma extensão da estrutura de Supply Chain do cliente, conectando planejamento, fornecedores, transporte, armazenagem, distribuição, tecnologia e indicadores em uma única gestão.
          </p>
        </div>

        {/* CONTAINER COM LARGURA MÁXIMA CONTROLADA */}
        <div className="max-w-5xl mx-auto space-y-4">
          
          {/* 1. Grelha dos 5 cards com mesmo tamanho (1/5 de largura cada no desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            {["Pedido", "Planejamento", "Armazenagem", "Distribuição", "Indicadores"].map((step, idx) => (
              <div
                key={step}
                className="relative flex flex-col items-center justify-center rounded-xl border border-blue-800/60 bg-[#032B56]/80 p-5 text-center shadow-lg"
              >
                <span className="text-xs font-bold text-orange-500">0{idx + 1}</span>
                <h3 className="mt-2 text-sm font-bold text-white">{step}</h3>
                
                {/* Seta indicativa entre os passos (visível até ao 4º item) */}
                {idx < 4 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-orange-500 items-center justify-center text-white shadow">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 2. Bloco FC Supply Tech Solutions (Ajustado para ter exatamente a MESMA LARGURA do bloco superior) */}
          <div className="rounded-xl border border-blue-800/60 bg-[#032B56]/90 p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500">
                <Network className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">FC Supply Tech Solutions</h3>
                <p className="text-xs font-semibold tracking-wider text-slate-300 mt-1">
                  GESTÃO • COORDENAÇÃO • INTEGRAÇÃO • CONTROLE
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}