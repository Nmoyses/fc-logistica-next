import { ArrowRight } from "lucide-react";
import { contato } from "@/data/site";

export function CtaComercial() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container-fc">
        <div className="rounded-lg bg-primary px-7 py-12 text-primary-foreground shadow-[var(--shadow-lift)] sm:px-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Sua operação logística pode ser mais eficiente
              </h2>
               <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
                Converse com nossos especialistas e descubra oportunidades para melhorar a
                performance, o controle e a eficiência da sua operação logística.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
              >
                Fale com um especialista
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={contato.telefoneHref}
                 className="inline-flex items-center justify-center rounded-md border border-ink-border px-7 py-4 text-sm font-semibold transition-colors hover:bg-ink-soft"
              >
                {contato.telefone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
