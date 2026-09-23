import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[#010D1A] py-12 text-slate-400 text-sm border-t border-slate-800">
      <div className="container-fc grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna 1: Marca e Informações */}
        <div>
          <div className="mb-4">
            <BrandLogo className="h-10 w-auto" />
          </div>
          <h3 className="text-white font-bold text-base mb-1">
            FC Supply Tech Solutions
          </h3>
          <p className="text-xs text-slate-400 mb-3">
            FINANCIAL & CONTROL SUPPLY TECH SOLUTIONS LTDA.
          </p>
          <p className="text-xs text-orange-500 font-semibold tracking-wider mb-2">
            4PL • SUPPLY CHAIN • TECHNOLOGY
          </p>
          <p className="text-xs text-slate-500">Desde 2006.</p>
        </div>

        {/* Coluna 2: Navegação */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
            Navegação
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li><a href="#inicio" className="hover:text-orange-500 transition-colors">Início</a></li>
            <li><a href="#quem-somos" className="hover:text-orange-500 transition-colors">Quem Somos</a></li>
            <li><a href="#gestao-4pl" className="hover:text-orange-500 transition-colors">Gestão 4PL</a></li>
            <li><a href="#solucoes" className="hover:text-orange-500 transition-colors">Soluções</a></li>
            <li><a href="#tecnologia" className="hover:text-orange-500 transition-colors">Tecnologia</a></li>
            <li><a href="#experiencia" className="hover:text-orange-500 transition-colors">Experiência</a></li>
            <li><a href="#contato" className="hover:text-orange-500 transition-colors">Contato</a></li>
          </ul>
        </div>

        {/* Coluna 3: Ecossistema e Contato */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
            Ecossistema e Contato
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li className="text-slate-300 font-medium">FC Supply Tech Solutions</li>
            <li>
              <a 
                href="https://www.integracargo.com.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-orange-500 transition-colors underline decoration-orange-500/40"
              >
                Integra Cargo
              </a>
            </li>
            <li className="text-slate-500">Integra Carbon — link em configuração</li>
            <li className="pt-2 text-slate-300">+55 15 99253 6034</li>
            <li className="text-slate-300">daniel.ramos@fclogistica.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}