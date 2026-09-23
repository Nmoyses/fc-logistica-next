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
    <section id="segmentos" className="bg-slate-50 py-16 lg:py-20">
      <div className="container-fc">
        <div className="mb-10 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
            SEGMENTOS DE ATUAÇÃO
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Soluções sob medida para operações de alta complexidade
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {segmentos.map((segmento) => {
            const Icon = iconesMap[segmento.titulo] || ShieldCheck;
            const isHighlight =
              segmento.titulo === "Transporte de sensíveis" ||
              segmento.titulo === "Alimentos e cosméticos";

            return (
              <div
                key={segmento.titulo}
                className={`flex flex-col justify-between rounded-xl p-6 transition-all shadow-sm ${
                  isHighlight
                    ? "bg-[#032B56] text-white"
                    : "bg-white text-slate-800 border border-slate-200"
                }`}
              >
                <div>
                  <div className="mb-4">
                    <Icon
                      className={`w-6 h-6 ${
                        isHighlight ? "text-orange-400" : "text-orange-500"
                      }`}
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{segmento.titulo}</h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isHighlight ? "text-slate-300" : "text-slate-600"
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