import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-ink-border/50 bg-primary/45 backdrop-blur-sm",
      )}
    >
      <div className="container-fc flex h-20 items-center justify-between gap-6">
        <a
          href="#inicio"
          className={cn(
            "flex items-baseline gap-2 transition-colors",
            scrolled || open ? "text-foreground" : "text-ink-foreground",
          )}
          aria-label="FC Logística — início"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground ring-1 ring-ink-border">FC</span>
          <span className="font-display text-lg font-semibold">Logística</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-ink-muted hover:text-ink-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
             className="hidden rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:brightness-105 md:inline-flex"
          >
            Fale com um especialista
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors lg:hidden",
              scrolled || open
                ? "border-border text-foreground"
                : "border-ink-border text-ink-foreground",
            )}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-fc flex flex-col py-2" aria-label="Navegação mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3.5 text-base font-medium text-foreground last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="my-4 rounded-md bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Fale com um especialista
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
