import React from "react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  altText?: string;
}

export function BrandLogo({
  className,
  altText = "FC Supply Tech Solutions"
}: BrandLogoProps) {
  return (
    <img
      src="/logo.png"
      alt={altText}
      width={300}
      height={300}
      loading="lazy"
      className={cn("object-contain h-auto", className)}
    />
  );
}