import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // 5519974055550
  const whatsappUrl =
    "https://wa.me/5519974055550?text=Ol%C3%A1%20Daniel,%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es!";

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-80 overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200">
          {/* Cabeçalho */}
          <div className="bg-[#075E54] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-800 font-bold">
                  D
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Daniel</h4>
                <p className="text-xs text-green-100">Online agora</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:opacity-80 transition-opacity"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat */}
          <div className="p-4 bg-[#ECE5DD] min-h-[120px] flex flex-col justify-end">
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] mb-2">
              <p className="text-xs font-semibold text-slate-700 mb-1">Daniel</p>
              <p className="text-sm text-slate-800">Vamos conversar?</p>
            </div>
          </div>

          {/* Botão de Envio */}
          <div className="p-3 bg-white border-t border-slate-100">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-2.5 px-4 rounded-xl transition-colors text-sm"
            >
              <span>Iniciar conversa</span>
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {/* Ícone Flutuante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-all transform hover:scale-105"
        aria-label="Atendimento WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}