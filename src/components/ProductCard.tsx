import React, { useState } from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Layers, 
  Info, 
  MessageCircle, 
  Package, 
  Eye,
  Plus,
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onOpenDatasheet: (product: Product) => void;
  onAddToQuote?: (product: Product) => void;
  isInQuote?: boolean;
  quoteQuantity?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onOpenDatasheet,
  onAddToQuote,
  isInQuote = false,
  quoteQuantity = 0,
}) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [lockedImage, setLockedImage] = useState<string | null>(null);

  const isDressing = product.category === 'iv_fixation' || product.category === 'wound_care';
  const cardImage = activeImage || lockedImage || product.image;

  return (
    <div className={`group bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
      isInQuote 
        ? 'border-[#7B37A0] shadow-md ring-2 ring-[#7B37A0]/20' 
        : 'border-slate-200 hover:border-slate-300 hover:shadow-xl'
    }`}>
      
      {/* Top Media & Tags Header */}
      <div>
        
        {/* Image Container */}
        <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden border-b border-slate-100 flex items-center justify-center p-3">
          <img
            src={cardImage}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Brand & Badge Tags */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
            <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs ${
              product.brand === 'Fixapro®' 
                ? 'bg-[#A8287F] text-white' 
                : 'bg-[#2066BA] text-white'
            }`}>
              {product.brand}
            </span>

            {product.badge && (
              <span className="text-[10px] font-bold bg-amber-500 text-slate-950 px-2 py-0.5 rounded-md shadow-xs">
                {product.badge}
              </span>
            )}
          </div>

          {/* Dimensions Overlay Badge */}
          <div className="absolute bottom-2.5 right-2.5 z-10">
            <span className="text-xs font-black bg-slate-900/90 text-white px-2.5 py-1 rounded-lg backdrop-blur-xs border border-slate-800 shadow-xs">
              {product.dimensions}
            </span>
          </div>

          {/* In-Quote indicator badge */}
          {isInQuote && (
            <div className="absolute top-2.5 right-2.5 z-10">
              <span className="flex items-center gap-1 bg-[#7B37A0] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-md shadow-xs">
                <CheckCircle2 className="w-3 h-3" />
                <span>En Lista ({quoteQuantity})</span>
              </span>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 space-y-3">
          
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              {product.brand === 'Fixapro®' ? 'Línea Quirúrgica & Curación' : 'Terapia Respiratoria & Clínica'}
            </span>
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-[#7B37A0] transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Presentation Box Specs */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-cyan-700 shrink-0" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                  Presentación
                </span>
                <span className="text-xs font-bold text-slate-800">
                  Caja x{product.unitPerBox} {product.unitPerBox === 1 ? 'unidad' : 'unidades'}
                </span>
              </div>
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
              Stock Inmediato
            </span>
          </div>

        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 sm:p-5 pt-0 space-y-2.5">
        
        {/* PRIMARY CONVERSION ACTION: Add to Quote */}
        {onAddToQuote && (
          <button
            type="button"
            onClick={() => onAddToQuote(product)}
            className={`w-full py-2.5 px-3 rounded-xl font-extrabold text-xs transition-all flex items-center justify-center gap-2 shadow-sm ${
              isInQuote 
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                : 'bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] hover:opacity-95 text-white shadow-purple-900/20'
            }`}
          >
            {isInQuote ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>+ Agregar otra caja (Total: {quoteQuantity})</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>+ Cotizar este Insumo</span>
              </>
            )}
          </button>
        )}

        {/* Secondary Actions: Detail and Datasheet */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onSelectProduct(product)}
            className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-slate-500" />
            <span>Detalle</span>
          </button>

          <button
            type="button"
            onClick={() => onOpenDatasheet(product)}
            className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-700" />
            <span>Ficha Técnica</span>
          </button>
        </div>

        {/* WhatsApp Direct Inquiry */}
        <a
          href={`https://wa.me/56932539584?text=Hola%20Genkimed%20SpA,%20deseo%20consultar%20por%20el%20producto:%20${encodeURIComponent(product.name)}%20(Medida:%20${encodeURIComponent(product.dimensions)},%20Caja%20x${product.unitPerBox}%20uds)`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 text-[11px] text-emerald-700 hover:text-emerald-800 hover:underline font-semibold w-full pt-1"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Consultar disponibilidad en WhatsApp</span>
        </a>

      </div>

    </div>
  );
};
