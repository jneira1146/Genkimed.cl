import React from 'react';
import { 
  FileSpreadsheet, 
  ArrowRight, 
  MessageCircle, 
  Package, 
  Trash2, 
  X 
} from 'lucide-react';
import { QuoteItem } from '../types';

interface QuickQuoteBarProps {
  quoteItems: QuoteItem[];
  onOpenFunnel: () => void;
  onClearQuote: () => void;
}

export const QuickQuoteBar: React.FC<QuickQuoteBarProps> = ({
  quoteItems,
  onOpenFunnel,
  onClearQuote,
}) => {
  if (quoteItems.length === 0) return null;

  const totalBoxes = quoteItems.reduce((acc, item) => acc + item.quantityBoxes, 0);

  return (
    <aside 
      aria-label="Barra de cotización rápida"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-xl z-40 bg-slate-900/95 text-white rounded-2xl shadow-2xl border border-purple-500/40 backdrop-blur-md p-3.5 sm:p-4 transition-all animate-slideUp"
    >
      <div className="flex items-center justify-between gap-3">
        
        {/* Left count indicator */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#A8287F] to-[#2066BA] flex items-center justify-center text-white shrink-0 shadow-sm">
            <FileSpreadsheet className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-emerald-500 text-slate-950 font-black text-[11px] rounded-full flex items-center justify-center border-2 border-slate-900 shadow-xs">
              {quoteItems.length}
            </span>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-white truncate">
                Lista de Cotización Activa
              </span>
              <span className="text-[10px] font-bold bg-purple-900/80 text-purple-200 px-1.5 py-0.5 rounded border border-purple-700/50">
                {totalBoxes} {totalBoxes === 1 ? 'caja' : 'cajas'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 truncate">
              {quoteItems.map(i => i.productName).join(', ')}
            </p>
          </div>
        </div>

        {/* Right Action buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onClearQuote}
            className="p-2 text-slate-400 hover:text-rose-400 transition-colors hidden sm:inline-flex"
            title="Vaciar lista"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenFunnel}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] hover:opacity-95 text-white font-extrabold text-xs shadow-lg shadow-purple-950/40 transition-all hover:scale-105 active:scale-95"
          >
            <span>Cotizar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
};
