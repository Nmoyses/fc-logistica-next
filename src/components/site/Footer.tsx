import { contato, navItems, solucoes } from "@/data/site";

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="surface-ink">
      <div className="container-fc py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-xl font-bold text-ink-foreground">
              FC <span className="font-light">Logística</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              Empresa 4PL de gerenciamento logístico. Gestão da cadeia de transportes, fornecedores e
              performance, em todo o Brasil, desde 2006.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-ink-foreground">
              Navegação
            </h3>
            <ul className="mt-5 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-ink-foreground">
              Soluções
            </h3>
            <ul className="mt-5 space-y-2.5">
              {solucoes.slice(0, 6).map((s) => (
                <li key={s.titulo}>
                  <a
                    href="#solucoes"
                    className="text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    {s.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-ink-foreground">
              Contato
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-muted">
              <li>
                <a href={contato.telefoneHref} className="hover:text-accent">
                  {contato.telefone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contato.email}`} className="break-all hover:text-accent">
                  {contato.email}
                </a>
              </li>
              <li>{contato.endereco}</li>
              <li>{contato.atendimento}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-muted">
            © {ano} FC Logística. Todos os direitos reservados.
          </p>
          <a
            href={contato.apresentacao}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink-muted transition-colors hover:text-accent"
          >
            Apresentação institucional (PDF)
          </a>
        </div>
      </div>
    </footer>
  );
}
