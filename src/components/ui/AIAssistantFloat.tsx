import { Bot, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export const AIAssistantFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-50 flex items-end gap-3 pointer-events-none">
      {/* Tooltip / Prompt */}
      <div 
        className={`pointer-events-auto flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl shadow-primary/10 rounded-full pl-4 pr-2 py-2 transition-all duration-300 transform origin-bottom-right ${
          isOpen || isDismissed ? 'scale-0 opacity-0' : 'scale-100 opacity-100 delay-100'
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div className="flex flex-col pr-1">
          <span className="text-xs font-bold text-surface-text leading-tight">Assistente IA:</span>
          <span className="text-xs text-surface-text-variant leading-tight">Como posso ajudar?</span>
        </div>
        <button 
          onClick={() => setIsDismissed(true)}
          className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-surface-text/5 text-surface-text-variant hover:text-surface-text transition-colors"
          aria-label="Fechar"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto w-14 h-14 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white shadow-[0_8px_20px_rgba(43,109,94,0.3)] hover:shadow-[0_12px_25px_rgba(43,109,94,0.4)] hover:-translate-y-1 transition-all duration-300 border border-white/20"
      >
        <MessageCircle className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'scale-0 opacity-0 absolute' : 'scale-100 opacity-100'}`} />
        <Bot className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 absolute'}`} />
      </button>

      {/* Floating Chat Box (Mock) */}
      <div 
        className={`absolute bottom-20 right-0 w-72 bg-white/90 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-2xl shadow-primary/20 p-4 transition-all duration-300 origin-bottom-right pointer-events-auto ${
          isOpen ? 'scale-100 opacity-100 visible' : 'scale-90 opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-surface-container rounded-2xl rounded-tl-sm p-3 text-sm text-surface-text">
              Olá! Sou a assistente virtual da Dra. Larissa. Como posso ajudar você hoje?
            </div>
          </div>
          <button 
            className="w-full py-2 bg-primary-container text-primary rounded-xl text-sm font-semibold hover:bg-primary/20 transition-colors"
            onClick={() => window.open('https://wa.me/5548991033490', '_blank')}
          >
            Falar com um humano
          </button>
        </div>
      </div>
    </div>
  );
};
