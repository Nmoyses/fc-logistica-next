import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";
import { BrandLogo } from "./BrandLogo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 16); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || open ? "border-b border-border bg-background/95 shadow-sm backdrop-blur-md" : "border-b border-ink-border/50 bg-primary/60 backdrop-blur-md")}>
      <div className="container-fc flex h-20 items-center justify-between gap-5">
        <a href="#inicio" aria-label="FC Supply Tech Solutions — início" className="shrink-0"><BrandLogo priority className="h-14 w-14 rounded-sm" /></a>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Navegação principal">{navItems.map((item) => <a key={item.href} href={item.href} className={cn("text-xs font-semibold transition-colors", scrolled ? "text-muted-foreground hover:text-foreground" : "text-ink-muted hover:text-ink-foreground")}>{item.label}</a>)}</nav>
        <div className="flex items-center gap-2"><a href="#contato" className="hidden rounded-md bg-accent px-5 py-2.5 text-xs font-semibold uppercase text-accent-foreground transition-all hover:-translate-y-0.5 hover:brightness-105 md:inline-flex">Fale com um especialista</a><button type="button" onClick={() => setOpen((value) => !value)} className={cn("inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors xl:hidden", scrolled || open ? "border-border text-foreground" : "border-ink-border text-ink-foreground")} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button></div>
      </div>
      {open && <div className="border-t border-border bg-background xl:hidden"><nav className="container-fc flex max-h-[calc(100vh-5rem)] flex-col overflow-y-auto py-2" aria-label="Navegação mobile">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-border/60 py-3.5 text-sm font-medium text-foreground last:border-0">{item.label}</a>)}<a href="#contato" onClick={() => setOpen(false)} className="my-4 rounded-md bg-accent px-5 py-3 text-center text-xs font-semibold uppercase text-accent-foreground">Fale com um especialista</a></nav></div>}
    </header>
  );
}