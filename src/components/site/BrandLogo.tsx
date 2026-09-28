import React from "react";
import { cn } from "@/lib/utils";

// Definimos props simples apenas para customização de estilo e acessibilidade
interface BrandLogoProps {
  className?: string;
  altText?: string;
}

export function BrandLogo({ 
  className, 
  altText = "FC Supply Tech Solutions" 
}: BrandLogoProps) {
  // O caminho é fixo na pasta public/logo.png para evitar erros
  return (
    <img
      src="/logo.png" 
      alt={altText}
      width={300} // Definimos um tamanho base seguro
      height={300}
      loading="lazy"
      className={cn("object-contain h-auto", className)}
    />
  );
}