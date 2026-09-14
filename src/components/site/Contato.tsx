import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Section, SectionHeading } from "./Section";
import { contato } from "@/data/site";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo."),
  empresa: z.string().trim().min(2, "Informe o nome da empresa."),
  email: z.string().trim().email("Informe um e-mail válido."),
  telefone: z.string().trim().min(8, "Informe um telefone com DDD."),
  mensagem: z.string().trim().min(10, "Conte brevemente como podemos ajudar."),
});

type Campos = z.infer<typeof schema>;
type Erros = Partial<Record<keyof Campos, string>>;

const vazio: Campos = { nome: "", empresa: "", email: "", telefone: "", mensagem: "" };

const campos: { name: keyof Campos; label: string; type?: string; placeholder: string }[] = [
  { name: "nome", label: "Nome", placeholder: "Seu nome completo" },
  { name: "empresa", label: "Empresa", placeholder: "Nome da empresa" },
  { name: "email", label: "E-mail corporativo", type: "email", placeholder: "voce@empresa.com.br" },
  { name: "telefone", label: "Telefone", type: "tel", placeholder: "(00) 00000-0000" },
];

export function Contato() {
  const [valores, setValores] = useState<Campos>(vazio);
  const [erros, setErros] = useState<Erros>({});
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(valores);
    if (!result.success) {
      const novos: Erros = {};
      for (const issue of result.error.issues) {
        const campo = issue.path[0] as keyof Campos;
        if (!novos[campo]) novos[campo] = issue.message;
      }
      setErros(novos);
      toast.error("Verifique os campos destacados antes de enviar.");
      return;
    }

    setErros({});
    const d = result.data;
    const corpo = [
      `Nome: ${d.nome}`,
      `Empresa: ${d.empresa}`,
      `E-mail: ${d.email}`,
      `Telefone: ${d.telefone}`,
      "",
      d.mensagem,
    ].join("\n");

    window.location.href = `mailto:${contato.email}?subject=${encodeURIComponent(
      `Solicitação de contato — ${d.empresa}`,
    )}&body=${encodeURIComponent(corpo)}`;

    setEnviado(true);
    setValores(vazio);
    toast.success("Solicitação preparada. Confirme o envio no seu e-mail.");
  }

  function update(campo: keyof Campos, valor: string) {
    setValores((v) => ({ ...v, [campo]: valor }));
    setErros((e) => ({ ...e, [campo]: undefined }));
  }

  return (
    <Section id="contato" tone="surface">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Contato"
            title="Fale com um especialista em gestão logística"
            description="Conte sobre a sua operação. Retornamos com uma conversa objetiva sobre oportunidades de controle, performance e custo."
          />

          <ul className="mt-10 space-y-6">
            <li className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Telefone
                </span>
                <a href={contato.telefoneHref} className="text-base font-medium hover:text-accent">
                  {contato.telefone}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  E-mail
                </span>
                <a
                  href={`mailto:${contato.email}`}
                  className="break-all text-base font-medium hover:text-accent"
                >
                  {contato.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Localização
                </span>
                <p className="text-base font-medium">{contato.endereco}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Atendimento
                </span>
                <p className="text-base font-medium">{contato.atendimento}</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="card-fc p-7 hover:translate-y-0 hover:shadow-[var(--shadow-card)] sm:p-10">
          {enviado ? (
            <div className="flex h-full min-h-64 flex-col items-start justify-center">
              <CheckCircle2 className="h-10 w-10 text-accent" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-semibold">Solicitação preparada</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Abrimos seu aplicativo de e-mail com a mensagem pronta para {contato.email}. Se nada
                abrir, escreva diretamente para esse endereço ou ligue para {contato.telefone}.
              </p>
              <button
                type="button"
                onClick={() => setEnviado(false)}
                className="mt-6 text-sm font-semibold text-accent hover:opacity-80"
              >
                Enviar outra solicitação
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {campos.map((c) => (
                  <div key={c.name}>
                    <label
                      htmlFor={c.name}
                      className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                    >
                      {c.label}
                    </label>
                    <input
                      id={c.name}
                      name={c.name}
                      type={c.type ?? "text"}
                      value={valores[c.name]}
                      placeholder={c.placeholder}
                      onChange={(e) => update(c.name, e.target.value)}
                      aria-invalid={Boolean(erros[c.name])}
                      className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/25"
                    />
                    {erros[c.name] && (
                      <p className="mt-1.5 text-xs text-destructive">{erros[c.name]}</p>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                >
                  Como podemos ajudar?
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  value={valores.mensagem}
                  placeholder="Descreva brevemente sua operação e o desafio atual."
                  onChange={(e) => update("mensagem", e.target.value)}
                  aria-invalid={Boolean(erros.mensagem)}
                  className="mt-2 w-full resize-y rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/25"
                />
                {erros.mensagem && (
                  <p className="mt-1.5 text-xs text-destructive">{erros.mensagem}</p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110 sm:w-auto"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Enviar solicitação
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
