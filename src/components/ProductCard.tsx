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
  FileSpreadsheet,
  Play,
  ZoomIn
} from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onOpenDatasheet: (product: Product) => void;
  onAddToQuote?: (product: Product) => void;
  onOpenVideo?: (product: Product) => void;
  onOpenImage?: (product: Product, initialImageSrc?: string) => void;
  isInQuote?: boolean;
  quoteQuantity?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onOpenDatasheet,
  onAddToQuote,
  onOpenVideo,
  onOpenImage,
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
        
        {/* Image Container with Zoomable Click */}
        <div 
          onClick={(e) => {
            e.stopPropagation();
            if (onOpenImage) {
              onOpenImage(product, cardImage);
            } else {
              onSelectProduct(product);
            }
          }}
          className={`relative aspect-[4/3] ${product.brand.toLowerCase().includes('ver3') || product.brand.toLowerCase().includes('unomis') || product.brand.toLowerCase().includes('openped') ? 'bg-white' : 'bg-slate-50'} overflow-hidden border-b border-slate-100 flex items-center justify-center p-3 cursor-zoom-in group/img`}
          title="Haz clic para ver la imagen ampliada en alta resolución"
        >
          <img
            src={cardImage}
            alt={product.name}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-contain ${product.brand.toLowerCase().includes('ver3') || product.brand.toLowerCase().includes('unomis') || product.brand.toLowerCase().includes('openped') ? '' : 'mix-blend-multiply'} transition-transform duration-500 group-hover/img:scale-110`}
            loading="lazy"
            onError={(e) => {
              if (product.image && e.currentTarget.src !== product.image) {
                e.currentTarget.src = product.image;
              }
            }}
          />

          {/* Hover Zoom Indicator */}
          <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="bg-slate-950/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/20 shadow-lg flex items-center gap-1.5 transform translate-y-1 group-hover/img:translate-y-0 transition-transform">
              <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
              <span>Ampliar</span>
            </span>
          </div>

          {/* Brand & Badge Tags */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
            <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs ${
              product.brand.toLowerCase().includes('ver3')
                ? 'bg-amber-500 text-slate-950 font-black'
                : product.brand.toLowerCase().includes('unomis')
                  ? 'bg-emerald-600 text-white font-black'
                  : product.brand.toLowerCase().includes('openped')
                    ? 'bg-purple-900 text-amber-300 border border-purple-400 font-black'
                    : product.brand === 'Fixapro®' 
                      ? 'bg-[#A8287F] text-white' 
                      : 'bg-[#2066BA] text-white'
            }`}>
              {product.brand}
            </span>

            {product.badge && (
              <span className={`text-[10px] font-black px-2 py-0.5 rounded-md shadow-xs ${
                product.badge.toLowerCase().includes('próx')
                  ? 'bg-amber-400 text-slate-950 border border-amber-600 flex items-center gap-1 shadow-sm'
                  : 'bg-amber-500 text-slate-950'
              }`}>
                {product.badge.toLowerCase().includes('próx') && (
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping"></span>
                )}
                {product.badge}
              </span>
            )}
          </div>

          {/* Dimensions Overlay Badge */}
          <div className="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1.5">
            {product.hasVideo && onOpenVideo && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenVideo(product);
                }}
                className="px-2 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-[10px] font-black uppercase flex items-center gap-1 shadow-md transition-transform hover:scale-105"
                title="Ver video quirúrgico Ver3®"
              >
                <Play className="w-3 h-3 fill-slate-950" />
                <span>Video Ver3</span>
              </button>
            )}
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
              {product.category === 'spine_surgery' || product.brand.toLowerCase().includes('ver3') || product.brand.toLowerCase().includes('unomis') || product.brand.toLowerCase().includes('openped')
                ? 'Categoría Ossyn • Cirugía de Columna'
                : product.brand === 'Fixapro®' 
                  ? 'Línea Quirúrgica & Curación' 
                  : 'Terapia Respiratoria & Clínica'}
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
                  {product.category === 'spine_surgery' || product.category === 'ver3_spine' || product.category === 'unomis_spine' || product.category === 'openped_spine' || product.brand.toLowerCase().includes('ver3') || product.brand.toLowerCase().includes('unomis') || product.brand.toLowerCase().includes('openped')
                    ? product.brand.toLowerCase().includes('ver3')
                      ? 'Implante Ti-6Al-4V ELI + Set'
                      : 'Implantes Ti-6Al-4V + Instrumental'
                    : `Caja x${product.unitPerBox} ${product.unitPerBox === 1 ? 'unidad' : 'unidades'}`}
                </span>
              </div>
            </div>
            {!product.inStock || product.badge?.toLowerCase().includes('próx') ? (
              <span className="text-[10px] font-black text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md border border-amber-300">
                Próximamente
              </span>
            ) : (
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                Stock Inmediato
              </span>
            )}
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
                : product.badge?.toLowerCase().includes('próx')
                  ? 'bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-slate-950 hover:opacity-95 font-black'
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
                <span>
                  {product.badge?.toLowerCase().includes('próx')
                    ? (product.brand.toLowerCase().includes('openped')
                        ? '+ Pre-ordenar / Consultar OpenPed®'
                        : product.brand.toLowerCase().includes('unomis')
                          ? '+ Pre-ordenar / Consultar Unomis®'
                          : product.brand.toLowerCase().includes('ver3')
                            ? '+ Pre-ordenar / Consultar Ver3®'
                            : '+ Pre-ordenar / Consultar')
                    : '+ Cotizar este Insumo'}
                </span>
              </>
            )}
          </button>
        )}

        {/* Video Direct Action if available */}
        {product.hasVideo && onOpenVideo && (
          <button
            type="button"
            onClick={() => onOpenVideo(product)}
            className="w-full py-2 px-3 rounded-xl font-black text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 border border-amber-500/60 shadow-xs flex items-center justify-center gap-1.5 transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-slate-950" />
            <span>
              {product.brand.toLowerCase().includes('unomis')
                ? 'Ver Video Quirúrgico Unomis® (Técnica CBT)'
                : 'Ver Video Quirúrgico Ver3® (03:16 min)'}
            </span>
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
