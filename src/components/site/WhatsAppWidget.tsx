import { useState } from "react";
import { MessageCircle, ChevronDown, Send } from "lucide-react";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState("");

  // 5519974055550
  const phone = "5519974055550";

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const textToSend = message.trim() || "Olá Daniel, gostaria de conversar!";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 overflow-hidden rounded-2xl bg-[#E5DDD5] shadow-2xl border border-slate-200 animate-in fade-in slide-in-from-bottom-5">
          {/* Cabeçalho WhatsApp */}
          <div className="bg-[#075E54] px-4 py-3 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 fill-current text-white"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              <span className="font-semibold text-lg tracking-wide">WhatsApp</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:opacity-80 transition-opacity p-1"
              aria-label="Minimizar conversa"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>

          {/* Área da Mensagem (Estilo Balão do WhatsApp) */}
          <div className="p-4 min-h-[140px] flex flex-col justify-start">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm max-w-[85%] self-start relative">
              <p className="text-xs font-semibold text-[#075E54] mb-0.5">Daniel</p>
              <p className="text-sm text-slate-800 leading-snug">Vamos conversar?</p>
              <span className="block text-[10px] text-slate-400 text-right mt-1">
                21:07
              </span>
            </div>
          </div>

          {/* Campo de Entrada de Mensagem e Botão Enviar */}
          <form onSubmit={handleSend} className="p-3 bg-transparent flex items-center gap-2">
            <input
              type="text"
              placeholder="Digite uma mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-white text-slate-800 text-sm rounded-full px-4 py-2.5 outline-none shadow-sm placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="bg-[#128C7E] hover:bg-[#075E54] text-white p-2.5 rounded-full shadow-md transition-colors flex items-center justify-center shrink-0"
              aria-label="Enviar mensagem"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Botão Flutuante (quando minimizado ou fechado) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#128C7E] transition-all transform hover:scale-105"
          aria-label="Abrir atendimento WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}
    </div>
  );
}