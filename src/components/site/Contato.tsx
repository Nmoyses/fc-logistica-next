import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SectionHeading } from "./Section";
import { contato } from "@/data/site";

export function Contato() {
  return (
    <section id="contato" className="py-20 lg:py-24 bg-card">
      <div className="container-fc">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <SectionHeading
              eyebrow="Contato"
              title="Converse com um especialista em Gestão 4PL"
              description="Compartilhe o principal desafio da sua operação para iniciarmos uma conversa objetiva sobre gestão, tecnologia e performance."
            />

            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                    TELEFONE
                  </span>
                  <a
                    href={contato.telefoneHref}
                    className="text-sm font-medium text-foreground hover:text-orange-500 transition-colors"
                  >
                    {contato.telefone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                    E-MAIL
                  </span>
                  <a
                    href={`mailto:${contato.email}`}
                    className="text-sm font-medium text-foreground hover:text-orange-500 transition-colors"
                  >
                    {contato.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500 mt-1 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                    LOCALIZAÇÃO
                  </span>
                  <p className="text-sm font-medium text-foreground whitespace-nowrap overflow-x-auto">
                    {contato.endereco}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                    ATENDIMENTO
                  </span>
                  <p className="text-sm font-medium text-foreground">
                    {contato.atendimento}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-background p-8 rounded-2xl border border-border shadow-sm">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="voce@empresa.com.br"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Conte brevemente como podemos ajudar."
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors text-sm"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}