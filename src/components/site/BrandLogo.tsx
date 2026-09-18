import logoAsset from "@/assets/fc-supply-tech-logo.jpg.asset.json";
import { cn } from "@/lib/utils";

export function BrandLogo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <img
      src={logoAsset.url}
      alt="FC Supply Tech Solutions — 4PL, Supply Chain e Technology"
      width={236}
      height={236}
      loading={priority ? "eager" : "lazy"}
      className={cn("object-contain", className)}
    />
  );
}