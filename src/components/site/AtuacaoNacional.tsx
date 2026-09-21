import { MapPin } from "lucide-react";
import { Section, SectionHeading } from "./Section";

export function AtuacaoNacional() {
  return (
    <Section id="atuacao-nacional" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <SectionHeading 
          eyebrow="Atuação nacional" 
          title="Gestão logística conectada em escala nacional" 
          description="Visão integrada para operações distribuídas em diferentes regiões do Brasil, com coordenação de parceiros, fluxos e indicadores." 
        />
        <div className="relative min-h-[460px] w-full overflow-hidden rounded-lg bg-[#030712] p-8 text-primary-foreground flex items-center justify-center shadow-2xl border border-white/5">
          {/* Grid cibernético de fundo */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Mapa do Brasil Estilo Plexus Digital - IDÊNTICO À REFERÊNCIA */}
          <div className="absolute inset-0 flex items-center justify-center p-6 select-none">
            <svg 
              viewBox="0 0 550 550" 
              className="h-full w-auto filter drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]" 
              xmlns="http://w3.org"
            >
              {/* MALHA CARTOGRÁFICA OFICIAL DO BRASIL - GEOMETRIA PRECISA */}
              <path 
                d="M145.2,141.2 L148.5,135.4 L154.2,132.1 L161.5,134.5 L168.2,131.2 L172.5,124.5 L175.4,115.2 L172.1,105.4 L165.2,98.5 L162.1,90.2 L164.5,82.4 L171.2,76.5 L178.5,74.2 L185.4,75.2 L192.5,72.4 L198.2,66.5 L204.5,62.1 L212.4,62.4 L218.5,66.5 L222.4,72.4 L221.5,80.2 L225.4,86.5 L232.1,89.2 L240.2,87.4 L246.5,82.4 L250.2,74.5 L255.4,69.5 L263.1,68.4 L269.2,71.2 L272.5,77.5 L271.2,85.4 L274.5,91.2 L281.2,93.4 L289.5,91.2 L296.2,93.5 L301.5,98.4 L308.2,100.2 L315.4,98.4 L321.2,100.5 L325.2,105.4 L324.5,113.2 L328.4,118.5 L335.2,120.2 L342.1,118.4 L348.5,121.2 L352.4,126.5 L352.1,134.2 L356.5,139.5 L363.2,141.2 L370.5,139.4 L376.2,142.1 L379.5,148.4 L377.2,156.5 L381.5,162.4 L389.2,164.5 L394.5,162.1 L400.2,165.4 L404.5,171.2 L403.2,179.4 L407.5,185.2 L414.2,187.4 L420.5,185.1 L426.2,188.4 L429.5,194.2 L427.2,202.4 L431.5,208.2 L439.2,210.4 L444.5,208.1 L450.2,211.4 L453.5,217.2 L451.2,225.4 L455.5,231.2 L463.2,233.4 L468.5,231.1 L474.2,234.4 L477.5,240.2 L475.2,248.4 L479.5,254.2 L487.2,256.4 L492.5,254.1 L498.2,257.4 L501.5,263.2 L499.2,271.4 L503.5,277.2 L511.2,279.4 L516.5,277.1 L522.2,280.4 L525.5,286.2 L523.2,294.4 L527.5,300.2 L535.2,302.4 L540.5,300.1 L546.2,303.4 L549.5,309.2 L547.2,317.4 L543.1,324.5 L536.2,330.2 L532.4,337.5 L525.2,342.1 L521.4,349.5 L514.2,354.1 L510.4,361.5 L503.2,366.1 L499.4,373.5 L492.2,378.1 L488.4,385.5 L481.2,390.1 L477.4,397.5 L470.2,402.1 L466.4,409.5 L459.2,414.1 L455.4,421.5 L448.2,426.1 L444.4,433.5 L437.2,438.1 L433.4,445.5 L426.2,450.1 L422.4,457.5 L415.2,462.1 L411.4,469.5 L404.2,474.1 L400.4,481.5 L393.2,486.1 L389.4,493.5 L382.2,498.1 L378.4,505.5 L371.2,510.1 L365.4,514.5 L358.2,512.1 L352.4,506.5 L347.2,501.2 L343.4,493.5 L339.2,486.1 L335.4,479.5 L331.2,472.1 L327.4,465.5 L323.2,458.1 L319.4,451.5 L315.2,444.1 L311.4,437.5 L307.2,430.1 L303.4,423.5 L299.2,416.1 L295.4,409.5 L291.2,402.1 L287.4,395.5 L283.2,388.1 L279.4,381.5 L275.2,374.1 L271.4,367.5 L267.2,360.1 L263.4,353.5 L259.2,346.1 L255.4,339.5 L251.2,332.1 L247.4,325.5 L243.2,318.1 L239.4,311.5 L235.2,304.1 L231.4,297.5 L227.2,290.1 L223.4,283.5 L219.2,276.1 L215.4,269.5 L211.2,262.1 L207.4,255.5 L203.2,248.1 L199.4,241.5 L195.2,234.1 L191.4,227.5 L187.2,220.1 L183.4,213.5 L179.2,206.1 L175.4,199.5 L171.2,192.1 L167.4,185.5 L163.2,178.1 L159.4,171.5 L155.2,164.1 L151.4,157.5 L147.2,150.1 Z" 
                className="stroke-cyan-400 fill-cyan-950/20 stroke-[1.5] stroke-linejoin-round"
              />

              {/* NETWORK PLEXUS - MALHA INTERNA COMPLETA */}
              <g className="stroke-cyan-500/40 stroke-[0.8]">
                {/* Linhas de conexão cruzadas idênticas à foto */}
                <line x1="171" y1="142" x2="232" y2="120" /><line x1="171" y1="142" x2="167" y2="220" />
                <line x1="232" y1="120" x2="167" y2="220" /><line x1="232" y1="120" x2="315" y2="130" />
                <line x1="167" y1="220" x2="251" y2="215" /><line x1="315" y1="130" x2="251" y2="215" />
                <line x1="167" y1="220" x2="199" y2="295" /><line x1="251" y1="215" x2="199" y2="295" />
                <line x1="251" y1="215" x2="307" y2="290" /><line x1="315" y1="130" x2="307" y2="290" />
                <line x1="199" y1="295" x2="307" y2="290" /><line x1="307" y1="290" x2="283" y2="374" />
                <line x1="315" y1="130" x2="394" y2="145" /><line x1="394" y1="145" x2="466" y2="211" />
                <line x1="394" y1="145" x2="422" y2="265" /><line x1="466" y1="211" x2="422" y2="265" />
                <line x1="307" y1="290" x2="422" y2="265" /><line x1="422" y1="265" x2="389" y2="346" />
                <line x1="307" y1="290" x2="389" y2="346" /><line x1="283" y1="374" x2="389" y2="346" />
                <line x1="283" y1="374" x2="331" y2="438" /><line x1="389" y1="346" x2="331" y2="438" />
                <line x1="331" y1="438" x2="311" y2="493" /><line x1="283" y1="374" x2="311" y2="493" />
              </g>

              {/* NÓS DE CONEXÃO E FLASHES DE LUZ NEON */}
              <g className="fill-white">
                <circle cx="171" cy="142" r="4.5" className="fill-cyan-300 drop-shadow-[0_0_8px_#22d3ee]" />
                <circle cx="232" cy="120" r="4" className="fill-cyan-300 drop-shadow-[0_0_6px_#22d3ee]" />
                <circle cx="167" cy="220" r="4.5" className="fill-cyan-300 drop-shadow-[0_0_8px_#22d3ee]" />
                <circle cx="251" cy="215" r="4.5" className="fill-cyan-300 drop-shadow-[0_0_8px_#22d3ee]" />
                <circle cx="315" cy="130" r="4" className="fill-cyan-300 drop-shadow-[0_0_6px_#22d3ee]" />
                <circle cx="199" cy="295" r="4" className="fill-cyan-300 drop-shadow-[0_0_6px_#22d3ee]" />
                <circle cx="394" cy="145" r="4.5" className="fill-cyan-300 drop-shadow-[0_0_8px_#22d3ee]" />
                <circle cx="466" cy="211" r="5.5" className="fill-cyan-300 drop-shadow-[0_0_12px_#22d3ee] animate-pulse" />
                <circle cx="422" cy="265" r="4.5" className="fill-cyan-300 drop-shadow-[0_0_8px_#22d3ee]" />
                <circle cx="350" cy="320" r="5" className="fill-cyan-300 drop-shadow-[0_0_8px_#22d3ee]" />
                
                {/* HUB CENTRAL DE OPERAÇÕES BRASÍLIA */}
                <circle cx="307" cy="290" r="7.5" className="fill-white drop-shadow-[0_0_16px_#fff]" />
                <circle cx="307" cy="290" r="3" className="fill-cyan-400" />
                
                <circle cx="283" cy="374" r="4" className="fill-cyan-300 drop-shadow-[0_0_6px_#22d3ee]" />
                <circle cx="389" cy="346" r="5" className="fill-cyan-300 drop-shadow-[0_0_8px_#22d3ee]" />
                <circle cx="331" cy="438" r="4.5" className="fill-cyan-300 drop-shadow-[0_0_8px_#22d3ee]" />
                <circle cx="311" cy="493" r="4" className="fill-cyan-300 drop-shadow-[0_0_6px_#22d3ee]" />
              </g>
            </svg>
          </div>

          {/* Pin de localização principal */}
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-accent/40 bg-slate-950/90 backdrop-blur-md shadow-[0_0_35px_rgba(249,115,22,0.4)] animate-bounce">
            <MapPin className="h-7 w-7 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
