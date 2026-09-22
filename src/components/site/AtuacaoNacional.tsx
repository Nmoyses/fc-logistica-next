import React, { useEffect, useState, useMemo } from "react";
import { Section, SectionHeading } from "./Section";

const BRASIL_GEOGRAPHIC_PATH = "M172.5,76.5 C176.2,74.3 182.1,72.1 187.5,72.4 C193.2,72.7 197.8,75.9 203.4,75.2 C209.5,74.5 214.2,69.2 220.5,69.5 C226.7,69.8 231.1,74.5 236.4,77.2 C242.1,80.1 249.2,79.5 255.4,82.4 C260.9,85.0 263.1,90.4 268.5,92.5 C274.2,94.7 281.3,92.3 287.4,94.2 C293.9,96.2 298.1,101.4 304.5,103.1 C311.2,104.9 318.4,101.9 325.2,104.2 C331.9,106.5 336.1,112.5 342.1,115.8 C348.5,119.3 356.1,118.5 362.5,122.4 C367.9,125.7 370.4,131.9 375.4,135.8 C381.2,140.3 388.9,140.1 394.5,145.2 C399.1,149.4 400.2,156.4 405.1,161.2 C409.8,165.8 416.9,166.7 421.4,171.8 C425.2,176.1 425.5,182.8 429.5,187.5 C434.1,192.9 441.5,194.8 445.4,200.8 C449.1,206.5 448.1,214.1 451.2,220.4 C454.1,226.3 460.5,229.8 462.4,236.1 C464.2,242.1 460.4,247.9 461.4,254.2 C462.4,260.5 467.4,265.4 467.5,271.8 C467.6,278.2 462.3,283.4 461.4,289.8 C460.5,296.2 464.3,302.2 462.4,308.2 C460.4,314.5 454.1,317.8 451.1,323.8 C448.1,329.8 449.2,337.5 445.4,343.2 C441.5,349.1 434.1,351.1 429.5,356.5 C425.5,361.2 425.2,367.9 421.4,372.2 C416.9,377.3 409.8,378.2 405.1,382.8 C400.2,387.6 399.1,394.6 394.5,398.8 C388.9,403.9 381.2,403.7 375.4,408.2 C370.4,412.1 367.9,418.3 362.5,421.6 C356.1,425.5 348.5,424.7 342.1,428.2 C336.1,431.5 331.9,437.5 325.2,439.8 C318.4,442.1 311.2,439.1 304.5,440.9 C298.1,442.6 293.9,447.8 287.4,449.8 C281.3,451.7 274.2,449.3 268.5,451.5 C263.1,453.6 260.9,459.0 255.4,461.6 C249.2,464.5 242.1,463.9 236.4,466.8 C231.1,469.5 226.7,474.2 220.5,474.5 C214.2,474.8 209.5,469.5 203.4,468.8 C197.8,468.1 193.2,471.3 187.5,471.6 C182.1,471.9 176.2,469.7 172.5,467.5 C167.5,464.5 165.1,458.3 160.5,454.8 C154.9,450.5 147.2,450.7 141.9,446.1 C137.1,441.9 135.5,434.9 131.1,429.9 C126.5,424.7 119.5,423.2 115.5,417.8 C111.9,412.9 112.5,405.2 109.4,399.5 C106.3,393.8 100.2,389.9 97.9,383.6 C95.9,378.1 98.9,372.1 97.5,366.4 C96.1,360.5 90.9,356.1 90.3,350.2 C89.7,344.2 93.9,339.1 94.1,333.1 C94.3,326.8 90.5,321.4 91.5,315.2 C92.5,309.2 97.9,304.9 99.8,299.1 C101.8,292.9 99.5,286.3 102.3,280.4 C105.1,274.6 112.1,271.9 115.7,266.4 C119.2,260.9 118.1,253.3 122.5,248.4 C126.8,243.6 134.4,243.2 139.4,239.0 C144.6,234.6 145.8,227.1 151.7,223.4 C157.4,219.8 165.1,221.7 171.4,218.8 C177.3,216.1 180.2,209.6 186.5,207.5 C192.7,205.4 199.5,208.6 205.9,207.1 C211.9,205.7 215.4,200.2 221.5,199.1 C227.4,198.0 233.1,201.8 239.1,201.3 C245.2,200.8 249.2,195.8 255.1,195.5 C260.9,195.2 266.1,199.5 272.1,199.3 C277.9,199.1 282.2,194.5 288.1,194.5 C293.9,194.5 298.2,199.1 304.0,199.3 C310.0,199.5 315.2,195.2 321.0,195.5 C326.9,195.8 330.9,200.8 337.0,201.3 C343.0,201.8 348.7,198.0 354.6,199.1 C360.7,200.2 364.2,205.7 370.2,207.1 C376.6,208.6 383.4,205.4 389.6,207.5 C395.9,209.6 398.8,216.1 404.7,218.8 C411.0,221.7 418.7,219.8 424.4,223.4 C430.3,227.1 431.5,234.6 436.7,239.0 C441.7,243.2 449.3,243.6 453.6,248.4 C458.0,253.3 456.9,260.9 460.4,266.4 C464.0,271.9 471.0,274.6 473.8,280.4 Z";

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  isStrategic: boolean;
}

interface Connection {
  from: Node;
  to: Node;
}

export function AtuacaoNacional() {
  const [pinNode, setPinNode] = useState<Node | null>(null);

  const nodes = useMemo(() => {
    const generatedNodes: Node[] = [];
    const totalNodes = 110;

    const minX = 110;
    const maxX = 460;
    const minY = 80;
    const maxY = 450;

    const strategicHubs = [
      { x: 310, y: 330, r: 50 },
      { x: 400, y: 210, r: 60 },
      { x: 270, y: 230, r: 40 }
    ];

    for (let i = 0; i < totalNodes; i++) {
      let x = 0;
      let y = 0;

      if (Math.random() > 0.35) {
        const hub = strategicHubs[Math.floor(Math.random() * strategicHubs.length)];
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * hub.r;
        x = hub.x + Math.cos(angle) * radius;
        y = hub.y + Math.sin(angle) * radius;
      } else {
        x = minX + Math.random() * (maxX - minX);
        y = minY + Math.random() * (maxY - minY);
      }

      const isStrategic = i < 7;
      const size = isStrategic ? 4.5 : 1.2 + Math.random() * 2;

      generatedNodes.push({
        id: i,
        x: Math.min(Math.max(x, minX), maxX),
        y: Math.min(Math.max(y, minY), maxY),
        size,
        isStrategic
      });
    }

    return generatedNodes;
  }, []);

  const connections = useMemo(() => {
    const generatedConnections: Connection[] = [];
    const maxLinkDistance = 45;

    for (let i = 0; i < nodes.length; i++) {
      const current = nodes[i];
      
      const nearTargets = nodes
        .filter((n) => n.id !== current.id)
        .map((target) => ({
          node: target,
          distance: Math.hypot(target.x - current.x, target.y - current.y)
        }))
        .filter((item) => item.distance < maxLinkDistance)
        .sort((a, b) => a.distance - b.distance);

      const maxConnections = 2 + Math.floor(Math.random() * 3);
      const chosenTargets = nearTargets.slice(0, maxConnections);

      chosenTargets.forEach((target) => {
        if (current.id < target.node.id) {
          generatedConnections.push({ from: current, to: target.node });
        }
      });
    }

    return generatedConnections;
  }, [nodes]);

  useEffect(() => {
    if (nodes.length > 0) {
      const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
      setPinNode(randomNode);
    }
  }, [nodes]);

  return (
    <Section id="atuacao-nacional" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <SectionHeading 
          eyebrow="Atuação nacional" 
          title="Gestão logística conectada em escala nacional" 
          description="Visão integrada para operações distribuídas em diferentes regiões do Brasil, com coordenação de parceiros, fluxos e indicadores." 
        />
        <div className="relative min-h-[440px] w-full overflow-hidden rounded-lg bg-[#061525] p-6 text-primary-foreground flex items-center justify-center shadow-2xl border border-white/5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:28px_28px]" />
          
          <div className="absolute inset-0 flex items-center justify-center p-4 select-none">
            <svg 
              viewBox="0 0 550 550" 
              className="h-full w-auto filter drop-shadow-[0_0_25px_rgba(0,174,239,0.55)]" 
              xmlns="http://w3.org"
            >
              <style>{`
                .brazil-outline-pulse {
                  animation: outlineBreath 4s ease-in-out infinite;
                }
                .node-pulse-normal {
                  animation: nodeBreath 3s ease-in-out infinite alternate;
                }
                .node-pulse-strategic {
                  animation: nodeHighGlow 2s ease-in-out infinite alternate;
                }
                @keyframes outlineBreath {
                  0%, 100% { stroke-width: 1.2px; opacity: 0.8; filter: drop-shadow(0 0 2px #00AEEF); }
                  50% { stroke-width: 1.8px; opacity: 1; filter: drop-shadow(0 0 8px #00AEEF); }
                }
                @keyframes nodeBreath {
                  0% { opacity: 0.6; }
                  100% { opacity: 1; }
                }
                @keyframes nodeHighGlow {
                  0% { r: 4px; filter: drop-shadow(0 0 3px #fff); }
                  100% { r: 5.5px; filter: drop-shadow(0 0 10px #00AEEF); }
                }
              `}</style>

              <defs>
                <clipPath id="geographic-brazil-clip">
                  <path d={BRASIL_GEOGRAPHIC_PATH} />
                </clipPath>
              </defs>

              <g clipPath="url(#geographic-brazil-clip)">
                {connections.map((conn, idx) => (
                  <line
                    key={idx}
                    x1={conn.from.x}
                    y1={conn.from.y}
                    x2={conn.to.x}
                    y2={conn.to.y}
                    className="stroke-[#00AEEF]/20 stroke-[0.7]"
                  />
                ))}

                {nodes.map((node) => (
                  <circle
                    key={node.id}
                    cx={node.x}
                    cy={node.y}
                    r={node.size}
                    className={node.isStrategic ? "fill-white node-pulse-strategic" : "fill-[#00AEEF] node-pulse-normal"}
                    style={{ animationDelay: `${node.id * 0.04}s` }}
                  />
                ))}
              </g>

              <path 
                d={BRASIL_GEOGRAPHIC_PATH} 
                className="stroke-[#00AEEF] fill-none brazil-outline-pulse stroke-linejoin-round"
              />

              {pinNode && (
                <g transform={`translate(${pinNode.x}, ${pinNode.y})`}>
                  <circle r="15" className="fill-none stroke-[#00AEEF]/40 stroke-[1.2] animate-ping" />
                  <circle r="6" className="fill-[#00AEEF]/30 filter blur-xs" />
                  <path 
                    d="M0,-11 C-3.5,-11 -5.5,-8.5 -5.5,-5.5 C-5.5,-1.5 0,0 0,0 C0,0 5.5,-1.5 5.5,-5.5 C5.5,-8.5 3.5,-11 0,-11 Z" 
                    className="fill-[#061525] stroke-[#00AEEF] stroke-[1.5] drop-shadow-[0_0_6px_#00AEEF]"
                  />
                  <circle cy="-5.5" r="2" className="fill-white" />
                </g>
              )}
            </svg>
          </div>
        </div>
      </div>
    </Section>
  );
}
