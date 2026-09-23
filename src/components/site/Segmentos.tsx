import { 
  ShieldCheck, 
  Cpu, 
  Smartphone, 
  HeartPulse, 
  ShoppingBag, 
  Sun, 
  Sprout 
} from "lucide-react";
import { segmentos } from "@/data/site";

const iconesMap: Record<string, any> = {
  "Transporte de sensíveis": ShieldCheck,
  "Eletroeletrônicos": Cpu,
  "Tecnologia e telecom": Smartphone,
  "Saúde e farmacêutico": HeartPulse,
  "Alimentos e cosméticos": ShoppingBag,
  "Energia Solar": Sun,
  "Agronegócio": Sprout,
};

export function Segmentos() {
  return (
    <section id="segmentos" className="bg-slate-50 py-16 lg:py-24">
      <div className="container-fc">
        <div className="mb-12 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
            SEGMENTOS DE ATUAÇÃO
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Soluções sob medida para operações de alta complexidade
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl">
            Atuação estratégica com suporte dedicado às particularidades e exigências técnicas de cada setor.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {segmentos.map((segmento, index) => {
            const Icon = iconesMap[segmento.titulo] || ShieldCheck;
            const isMainHighlight = segmento.titulo === "Transporte de sensíveis";
            const isSecondaryHighlight = segmento.titulo === "Alimentos e cosméticos";

            // Estilo dinâmico para quebrar o padrão de IA
            if (isMainHighlight) {
              return (
                <div
                  key={segmento.titulo}
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#02182B] via-[#032B56] to-[#010D1A] p-7 text-white shadow-xl flex flex-col justify-between border border-blue-900/50 group hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Luz de fundo sutil (glow effect) */}
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-orange-500/15 blur-2xl pointer-events-none" />
                  
                  <div>
                    <div className="mb-5 inline-flex p-3 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-1">
                      Alta Rigor de Risco
                    </span>
                    <h3 className="text-xl font-bold mb-3">{segmento.titulo}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {segmento.texto}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={segmento.titulo}
                className={`flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  isSecondaryHighlight
                    ? "bg-[#032B56] text-white border border-blue-900/40"
                    : "bg-white text-slate-800 border border-slate-200/80 shadow-sm"
                }`}
              >
                <div>
                  <div className="mb-4 inline-flex p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                    <Icon
                      className={`w-6 h-6 ${
                        isSecondaryHighlight ? "text-orange-400" : "text-orange-500"
                      }`}
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{segmento.titulo}</h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isSecondaryHighlight ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {segmento.texto}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}