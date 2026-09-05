import React, { useState } from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Layers, 
  Info, 
  MessageCircle,
  Package,
  Eye
} from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onOpenDatasheet: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onOpenDatasheet,
}) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [lockedImage, setLockedImage] = useState<string | null>(null);

  const isDressing = product.category === 'iv_fixation' || product.category === 'wound_care';
  const cardImage = activeImage || lockedImage || product.image;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-cyan-400/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      
      {/* Product Image and Badges */}
      <div>
        <div className="relative aspect-[16/11] bg-slate-100 overflow-hidden cursor-pointer" onClick={() => onSelectProduct(product)}>
          <img 
            src={cardImage} 
            alt={product.name} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          {/* Top badges */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
            {product.badge && (
              <span className="bg-[#7B37A0]/95 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md shadow-sm backdrop-blur-sm">
                {product.badge}
              </span>
            )}
          </div>

          {/* Top right referential disclaimer badge */}
          {isDressing && (
            <div className="absolute top-2.5 right-2.5 z-10">
              <span className="bg-slate-950/80 backdrop-blur-xs text-slate-200 text-[9px] font-medium px-2 py-0.5 rounded shadow-sm border border-white/10 flex items-center gap-1">
                <Info className="w-2.5 h-2.5 text-amber-400 shrink-0" />
                Imagen referencial
              </span>
            </div>
          )}

          {/* Quick Dimensions Overlay */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-lg">
            <span className="font-semibold text-cyan-300 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              {product.dimensions}
            </span>
            <span className="text-[10px] text-slate-300 font-medium">
              {product.technicalSpecs.sterilization.includes('Óxido') ? 'Estéril EO' : 'Grado Médico'}
            </span>
          </div>
        </div>

        {/* Product Details Header */}
        <div className="p-4 sm:p-5 space-y-3">
          
          <div className="space-y-1 cursor-pointer" onClick={() => onSelectProduct(product)}>
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#A8287F] uppercase tracking-wider">
              <span>{product.brand}</span>
              <span>•</span>
              <span className="text-slate-500 font-normal">{product.dimensions}</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-[#7B37A0] transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>

          {/* Quick Technical Highlights */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 space-y-1 text-[11px] text-slate-600">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#7B37A0] shrink-0" />
              <span className="truncate">{product.features[0]}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2066BA] shrink-0" />
              <span className="truncate">{product.features[1] || 'Hipoalergénico libre de látex'}</span>
            </div>
          </div>

          {/* Calibers Badge Bar for multi-size products (Sondas de Aspiración 6FR a 18FR) */}
          {product.availableCalibers && (
            <div className="bg-purple-50/70 border border-purple-100 rounded-xl p-2.5 space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold text-[#7B37A0] uppercase text-[10px] tracking-wider">
                  Calibres Disponibles:
                </span>
                <span className="text-[10px] font-bold text-slate-700 bg-white px-1.5 py-0.5 rounded border border-purple-200">
                  6 FR a 18 FR
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {product.availableCalibers.map((c) => (
                  <span
                    key={c.gauge}
                    className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-white text-slate-800 border border-slate-200 shadow-2xs"
                    title={`${c.gauge} (${c.colorName}) - ${c.description}`}
                  >
                    <span
                      className="w-2 h-2 rounded-full border border-black/10 shrink-0"
                      style={{ backgroundColor: c.hexColor }}
                    />
                    {c.gauge}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Formats / Multi-size / Multi-model Badge Bar (Bandages & Nebulizers) */}
          {product.availableFormats && (
            <div className={product.brand === 'Alveos®' 
              ? "bg-blue-50/70 border border-blue-100 rounded-xl p-2.5 space-y-1.5"
              : "bg-pink-50/70 border border-pink-100 rounded-xl p-2.5 space-y-1.5"
            }>
              <div className="flex items-center justify-between text-[11px]">
                <span className={`font-bold uppercase text-[10px] tracking-wider ${
                  product.brand === 'Alveos®' ? 'text-[#2066BA]' : 'text-[#A8287F]'
                }`}>
                  {product.category === 'nebulizers' ? 'Formatos Clínicos:' : 'Formatos y Medidas Clínicas:'}
                </span>
                <span className={`text-[10px] font-bold bg-white px-1.5 py-0.5 rounded border ${
                  product.brand === 'Alveos®' 
                    ? 'text-[#2066BA] border-blue-200' 
                    : 'text-[#A8287F] border-pink-200'
                }`}>
                  {product.category === 'nebulizers' 
                    ? 'Adulto y Pediátrico (x50)' 
                    : product.category === 'iv_fixation'
                    ? '3 Medidas (Pediátrico, CVP, CVC)'
                    : product.category === 'wound_care'
                    ? '3 Formatos (6x7, 10x12, 10x25)'
                    : '4 Anchos (2" a 5")'}
                </span>
              </div>
              <div className={product.availableFormats.length === 3 ? "grid grid-cols-1 sm:grid-cols-3 gap-1.5" : "grid grid-cols-2 gap-1.5"}>
                {product.availableFormats.map((f) => (
                  <div
                    key={f.format}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (f.image) {
                        setLockedImage(lockedImage === f.image ? null : f.image);
                      }
                    }}
                    onMouseEnter={() => {
                      if (f.image) setActiveImage(f.image);
                    }}
                    onMouseLeave={() => {
                      setActiveImage(null);
                    }}
                    className={`bg-white p-1.5 rounded-lg border shadow-2xs text-[10px] transition-all cursor-pointer ${
                      cardImage === f.image
                        ? 'border-[#7B37A0] ring-1 ring-purple-300 bg-purple-50/50'
                        : product.brand === 'Alveos®' ? 'border-blue-100/80 hover:border-blue-300' : 'border-pink-100/80 hover:border-pink-300'
                    }`}
                    title={`${f.format} • ${f.refCode || ''} • ${f.targetArea} • ${f.clinicalUse}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">{f.inches}</span>
                      <span className={`text-[9px] font-semibold px-1 rounded ${
                        product.brand === 'Alveos®' 
                          ? 'text-[#2066BA] bg-blue-50' 
                          : 'text-[#A8287F] bg-pink-50'
                      }`}>
                        x{f.boxUnits}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-1 mt-0.5">
                      <p className="text-[9px] text-slate-500 truncate">
                        {f.targetArea.split(',')[0]}
                      </p>
                      {f.refCode && (
                        <span className="text-[8px] font-mono font-bold text-[#7B37A0] shrink-0">
                          {f.refCode.replace('REF ', '')}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Presentation Standard Box Notice */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center justify-between">
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
            <span className="text-[10px] font-bold text-cyan-800 bg-cyan-100/70 px-2 py-0.5 rounded-md">
              Venta por Caja
            </span>
          </div>

          {/* Dressing referential images disclaimer note */}
          {isDressing && (
            <div className="bg-amber-50/80 border border-amber-200/70 rounded-lg p-2 flex items-center gap-1.5 text-[10px] text-amber-900 leading-tight">
              <Info className="w-3 h-3 text-amber-600 shrink-0" />
              <span>
                <strong>Aviso:</strong> Las imágenes de apósitos mostradas son referenciales e ilustrativas.
              </span>
            </div>
          )}

        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 sm:p-5 pt-0 space-y-3">
        
        {/* Availability info */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-3">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
              Disponibilidad
            </span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
              En Stock • Despacho Inmediato
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onSelectProduct(product)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] hover:opacity-95 text-white shadow-sm shadow-purple-900/15 transition-all"
          >
            <Eye className="w-4 h-4" />
            <span>Ver Detalle</span>
          </button>

          <button
            type="button"
            onClick={() => onOpenDatasheet(product)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-semibold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-700" />
            <span>Ficha Técnica</span>
          </button>
        </div>

        {/* WhatsApp Direct Inquiry */}
        <a
          href={`https://wa.me/56932539584?text=Hola%20Genkimed%20SpA,%20deseo%20consultar%20por%20el%20producto:%20${encodeURIComponent(product.name)}%20(Presentación:%20Caja%20x${product.unitPerBox}%20uds)`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 text-[11px] text-emerald-700 hover:text-emerald-800 hover:underline font-semibold w-full pt-1"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Consultar por WhatsApp</span>
        </a>

      </div>

    </div>
  );
};
