import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  FileText, 
  Check,
  MessageCircle, 
  Download, 
  AlertCircle, 
  Layers, 
  Sparkles,
  Award,
  Clock,
  HelpCircle,
  Building,
  Info,
  Play,
  Video,
  CheckCircle2,
  ZoomIn
} from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenDatasheet: (product: Product) => void;
  onOpenVideo?: (product: Product) => void;
  onOpenImage?: (product: Product, initialImageSrc?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenDatasheet,
  onOpenVideo,
  onOpenImage,
}) => {
  if (!product) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'protocol' | 'specs' | 'video'>('overview');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentImage = selectedImage || product.image;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Left Column: Image, Badges & Certifications (5 cols) */}
          <div className="md:col-span-5 bg-slate-50 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200">
            <div className="space-y-4">
              
              {/* Product Image with Zoom Click */}
              <div 
                onClick={() => onOpenImage && onOpenImage(product, currentImage)}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-white border border-slate-200 shadow-inner group cursor-zoom-in"
                title="Haz clic para ver la imagen en tamaño grande y alta resolución"
              >
                <img 
                  src={currentImage} 
                  alt={product.name} 
                  referrerPolicy="no-referrer"
                  className={`w-full h-full ${product.brand.toLowerCase().includes('ver3') || product.brand.toLowerCase().includes('unomis') || product.brand.toLowerCase().includes('openped') ? 'object-contain p-2 bg-white' : 'object-cover'} transition-all duration-300 group-hover:scale-105`}
                  onError={(e) => {
                    if (product.image && e.currentTarget.src !== product.image) {
                      e.currentTarget.src = product.image;
                    }
                  }}
                />
                
                {/* Hover Zoom Badge */}
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="bg-slate-950/85 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/20 shadow-xl flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-4 h-4 text-amber-400" />
                    <span>Ampliar Imagen</span>
                  </span>
                </div>

                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md shadow-sm ${
                    product.brand.toLowerCase().includes('ver3')
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : product.brand.toLowerCase().includes('unomis')
                        ? 'bg-emerald-600 text-white font-black'
                        : product.brand.toLowerCase().includes('openped')
                          ? 'bg-purple-900 text-amber-300 border border-purple-400 font-black'
                          : 'bg-[#7B37A0] text-white'
                  }`}>
                    {product.brand}
                  </span>
                  {product.badge && (
                    <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-md shadow-sm border border-amber-500">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="absolute bottom-2.5 right-2.5">
                  <span className="bg-slate-950/80 backdrop-blur-xs text-slate-200 text-[10px] font-medium px-2 py-0.5 rounded shadow-sm border border-white/10 flex items-center gap-1">
                    <Info className="w-3 h-3 text-amber-400 shrink-0" />
                    Imagen referencial
                  </span>
                </div>
              </div>

              {/* Gallery Thumbnails (if available) */}
              {product.galleryImages && product.galleryImages.length > 1 && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Vistas y Cajas por Formato:
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Haz clic para cambiar o ampliar
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {product.galleryImages.map((img, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          setSelectedImage(img);
                        }}
                        onDoubleClick={() => {
                          if (onOpenImage) onOpenImage(product, img);
                        }}
                        className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all p-0.5 bg-white cursor-pointer group ${
                          currentImage === img
                            ? 'border-[#7B37A0] ring-2 ring-purple-300 scale-102 shadow-xs'
                            : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300'
                        }`}
                        title={i === 0 ? 'Línea completa (Doble clic para ampliar)' : `Formato ${i} (Doble clic para ampliar)`}
                      >
                        <img 
                          src={img} 
                          alt={`Caja ${i + 1}`} 
                          className={`w-full h-full ${product.brand.toLowerCase().includes('ver3') || product.brand.toLowerCase().includes('unomis') || product.brand.toLowerCase().includes('openped') ? 'object-contain p-0.5' : 'object-cover'} rounded-lg`}
                          referrerPolicy="no-referrer" 
                          onError={(e) => {
                            if (product.image && e.currentTarget.src !== product.image) {
                              e.currentTarget.src = product.image;
                            }
                          }}
                        />
                        <div className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/70 text-white rounded p-0.5">
                          <ZoomIn className="w-2.5 h-2.5" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Ver3 Video Quick Launch Card if hasVideo */}
              {product.hasVideo && (
                <div 
                  onClick={() => {
                    if (onOpenVideo) {
                      onOpenVideo(product);
                    } else {
                      setActiveTab('video');
                    }
                  }}
                  className="p-3 rounded-xl bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 border border-amber-500/50 shadow-md cursor-pointer hover:border-amber-400 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow group-hover:scale-105 transition-transform">
                      <Play className="w-4 h-4 fill-slate-950 ml-0.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-black uppercase text-amber-400">Video Quirúrgico</span>
                        <span className="text-[9px] font-mono text-slate-400">
                          {product.videoInfo?.duration || 'Video HD'}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-white group-hover:text-amber-200 transition-colors truncate">
                        {product.videoInfo?.title || 'Ver animación y técnica quirúrgica'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Codes & Accreditations Card */}
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 space-y-2 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Marca Oficial:</span>
                  <span className="font-bold text-purple-900">{product.brand}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Dimensiones:</span>
                  <span className="font-bold text-slate-800">{product.dimensions}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Presentación:</span>
                  <span className="font-bold text-slate-700">{product.unitPerBox} uds / caja</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Esterilización:</span>
                  <span className="font-bold text-emerald-700">{product.technicalSpecs.sterilization}</span>
                </div>
              </div>

              {/* Badges List */}
              <div className="flex flex-wrap gap-1.5">
                {product.certifications.map((cert, idx) => (
                  <span 
                    key={idx} 
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-200/70 text-slate-700 text-[11px] font-semibold"
                  >
                    <ShieldCheck className="w-3 h-3 text-cyan-600" />
                    {cert}
                  </span>
                ))}
              </div>

              {/* Referential Images Advisory */}
              <div className="bg-amber-50/90 border border-amber-200/80 rounded-xl p-3 flex items-start gap-2 text-[11px] text-amber-950">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold block text-amber-900">Nota sobre las imágenes:</span>
                  <p className="text-amber-800 leading-snug">
                    Las imágenes de apósitos y empaques son de carácter estrictamente referencial e ilustrativo. La presentación exterior, diseño gráfico y rotulado pueden presentar variaciones según lote del fabricante.
                  </p>
                </div>
              </div>

            </div>

            {/* Genkimed Guarantee Footer */}
            <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-slate-500 text-[11px]">
              <Building className="w-4 h-4 text-cyan-600 shrink-0" />
              <span>Despacho directo desde Bodega Central Genkimed SpA, Santiago.</span>
            </div>
          </div>

          {/* Right Column: Clinical Tabs & Pricing Action (7 cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              
              {/* Product Header */}
              <div>
                <div className="text-xs font-bold tracking-wider uppercase mb-1 flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${
                    product.brand.toLowerCase().includes('ver3') 
                      ? 'bg-amber-500' 
                      : product.brand.toLowerCase().includes('unomis')
                        ? 'bg-emerald-500'
                        : product.category === 'spine_surgery' || product.brand.toLowerCase().includes('columna')
                          ? 'bg-purple-600'
                          : product.brand.toLowerCase().includes('fixapro')
                            ? 'bg-[#A8287F]'
                            : 'bg-[#2066BA]'
                  }`}></span>
                  <span className={
                    product.brand.toLowerCase().includes('ver3') 
                      ? 'text-amber-700 font-extrabold' 
                      : product.brand.toLowerCase().includes('unomis')
                        ? 'text-emerald-700 font-extrabold'
                        : product.category === 'spine_surgery' || product.brand.toLowerCase().includes('columna')
                          ? 'text-purple-700 font-extrabold'
                          : product.brand.toLowerCase().includes('fixapro')
                            ? 'text-[#A8287F]'
                            : 'text-[#2066BA]'
                  }>
                    {product.brand.toLowerCase().includes('ver3')
                      ? 'Línea Columna MIS • Ver3® Vertres (Restauración Vertebral & PMMA)'
                      : product.brand.toLowerCase().includes('unomis')
                        ? 'Línea Columna MIS • Unomis® MIS (Fijación Pedicular MIS & Técnica CBT)'
                        : product.category === 'spine_surgery'
                          ? 'Línea Columna MIS'
                          : product.brand.toLowerCase().includes('fixapro')
                            ? 'Línea Fixapro® • Insumo Hospitalario & Clínico'
                            : 'Línea Alveos® • Dispositivos Médicos & Terapia Respiratoria'}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                    {product.name}
                  </h2>
                  {product.badge && (
                    <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md shadow-xs border border-amber-500 flex items-center gap-1.5">
                      {product.badge.toLowerCase().includes('próx') && (
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping"></span>
                      )}
                      {product.badge}
                    </span>
                  )}
                  {product.onuCode && (
                    <span className="bg-emerald-100 text-emerald-950 text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-emerald-300 shadow-2xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      <span>Cód. ONU:</span>
                      <strong className="font-mono font-black text-emerald-900">{product.onuCode}</strong>
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {product.subtitle}
                </p>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-slate-200 space-x-4 text-xs font-bold">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-2.5 border-b-2 transition-all ${
                    activeTab === 'overview'
                      ? 'border-[#7B37A0] text-[#7B37A0]'
                      : 'border-transparent text-slate-400 hover:text-slate-700'
                  }`}
                >
                  Descripción Clínica
                </button>
                <button
                  onClick={() => setActiveTab('protocol')}
                  className={`pb-2.5 border-b-2 transition-all ${
                    activeTab === 'protocol'
                      ? 'border-[#7B37A0] text-[#7B37A0]'
                      : 'border-transparent text-slate-400 hover:text-slate-700'
                  }`}
                >
                  Protocolo de Aplicación
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-2.5 border-b-2 transition-all ${
                    activeTab === 'specs'
                      ? 'border-[#7B37A0] text-[#7B37A0]'
                      : 'border-transparent text-slate-400 hover:text-slate-700'
                  }`}
                >
                  Ficha Técnica Resumida
                </button>

                {product.hasVideo && (
                  <button
                    onClick={() => setActiveTab('video')}
                    className={`pb-2.5 border-b-2 transition-all flex items-center gap-1.5 ${
                      activeTab === 'video'
                        ? 'border-amber-500 text-amber-600 font-black'
                        : 'border-transparent text-amber-700 hover:text-amber-800'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Video Quirúrgico MIS (03:16)</span>
                  </button>
                )}
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-3.5 text-xs text-slate-600 animate-fadeIn">
                  <p className="leading-relaxed text-slate-700">
                    {product.description}
                  </p>

                  {/* Calibers Table if Available (Sondas de Aspiración 6FR a 18FR) */}
                  {product.availableCalibers && (
                    <div className="pt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#7B37A0]"></span>
                          Tabla de Calibres Disponibles (6 FR a 18 FR - Estándar ISO):
                        </p>
                        <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                          Largo 48 cm • C/Control
                        </span>
                      </div>

                      <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                        <div className="grid grid-cols-12 bg-slate-100 text-[10px] font-bold text-slate-700 p-2 border-b border-slate-200">
                          <div className="col-span-3">Calibre (FR)</div>
                          <div className="col-span-3">Color ISO</div>
                          <div className="col-span-6">Aplicación Clínica</div>
                        </div>
                        <div className="divide-y divide-slate-100 text-[11px]">
                          {product.availableCalibers.map((cal) => (
                            <div key={cal.gauge} className="grid grid-cols-12 p-2 items-center hover:bg-purple-50/40 transition-colors">
                              <div className="col-span-3 font-extrabold text-slate-900 flex items-center gap-1.5">
                                <span
                                  className="w-2.5 h-2.5 rounded-full border border-black/15 shrink-0"
                                  style={{ backgroundColor: cal.hexColor }}
                                />
                                {cal.gauge}
                              </div>
                              <div className="col-span-3 text-slate-600 text-[10px] font-medium">
                                {cal.colorName}
                              </div>
                              <div className="col-span-6 text-slate-700 text-[10px] leading-tight">
                                {cal.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Formats and Application Methods Table (Vendas Elásticas & Nebulizadores Alveos®) */}
                  {product.availableFormats && (
                    <div className="pt-2 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${
                            product.brand === 'Alveos®' ? 'bg-[#2066BA]' : 'bg-[#A8287F]'
                          }`}></span>
                          {product.category === 'nebulizers' 
                            ? 'Formatos Clínicos, Especificaciones y Usos:' 
                            : product.category === 'iv_fixation'
                            ? 'Formatos, Medidas y Técnicas de Fijación Vascular:'
                            : product.category === 'wound_care'
                            ? 'Formatos, Medidas y Aplicaciones Quirúrgicas:'
                            : 'Formatos, Medidas y Maneras de Aplicación Clínica:'}
                        </p>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                          product.brand === 'Alveos®' 
                            ? 'text-[#2066BA] bg-blue-50 border-blue-200' 
                            : 'text-[#A8287F] bg-pink-50 border-pink-200'
                        }`}>
                          {product.category === 'nebulizers' 
                            ? `${product.availableFormats.length} Formatos • Cajas x${product.unitPerBox} Kits` 
                            : product.category === 'iv_fixation'
                            ? '3 Medidas Clínicas • Cajas x50 / x100 Uds'
                            : product.category === 'wound_care'
                            ? '3 Medidas Clínicas • Cajas x30 / x50 / x100 Uds'
                            : '4 Medidas • Cajas x12 Rollos'}
                        </span>
                      </div>

                      <div className="space-y-2">
                        {product.availableFormats.map((fmt) => {
                          const isSelected = currentImage === fmt.image;
                          return (
                            <div 
                              key={fmt.format} 
                              onClick={() => {
                                if (fmt.image) {
                                  setSelectedImage(fmt.image);
                                }
                              }}
                              className={`border rounded-xl p-3 space-y-1.5 transition-all ${
                                fmt.image ? 'cursor-pointer' : ''
                              } ${
                                isSelected
                                  ? 'bg-purple-50/70 border-[#7B37A0] ring-2 ring-[#7B37A0]/20 shadow-xs'
                                  : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <div className="flex flex-wrap items-center justify-between gap-1">
                                <div className="flex items-center gap-2.5">
                                  {fmt.image && (
                                    <div className={`w-10 h-10 rounded-lg overflow-hidden border shrink-0 ${
                                      isSelected ? 'border-[#7B37A0] ring-2 ring-purple-300' : 'border-slate-200 bg-white'
                                    }`}>
                                      <img src={fmt.image} alt={fmt.inches} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                    </div>
                                  )}
                                  <div>
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                      <span className={`font-black text-xs ${
                                        product.brand === 'Alveos®' ? 'text-[#2066BA]' : 'text-[#A8287F]'
                                      }`}>
                                        {fmt.inches}
                                      </span>
                                      {fmt.refCode && (
                                        <span className="text-[10px] font-mono font-black bg-slate-900 text-cyan-300 px-1.5 py-0.5 rounded">
                                          {fmt.refCode}
                                        </span>
                                      )}
                                    </div>
                                    <span className="text-[11px] font-mono text-slate-600 block">
                                      {fmt.format}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  {fmt.image && (
                                    <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-md ${
                                      isSelected ? 'bg-[#7B37A0] text-white font-bold' : 'bg-white text-slate-600 border border-slate-200'
                                    }`}>
                                      {isSelected ? 'Caja en vista' : 'Ver empaque'}
                                    </span>
                                  )}
                                  {fmt.badge && (
                                    <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                                      product.brand === 'Alveos®' 
                                        ? 'bg-[#2066BA]/10 text-[#2066BA]' 
                                        : 'bg-[#A8287F]/10 text-[#A8287F]'
                                    }`}>
                                      {fmt.badge}
                                    </span>
                                  )}
                                  {(fmt.onuCode || product.onuCode) && (
                                    <span className="text-[9px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-1.5 py-0.5 rounded">
                                      ONU: {fmt.onuCode || product.onuCode}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                                <div>
                                  <span className="text-[10px] font-bold text-slate-500 uppercase block">
                                    {product.category === 'nebulizers' 
                                      ? 'Población / Región Anatómica:' 
                                      : product.category === 'iv_fixation'
                                      ? 'Acceso Vascular / Indicación:'
                                      : product.category === 'wound_care'
                                      ? 'Tipo de Herida / Zona Quirúrgica:'
                                      : 'Segmento / Región Anatómica:'}
                                  </span>
                                  <span className="text-slate-800 font-medium">
                                    {fmt.targetArea}
                                  </span>
                                </div>
                                <div>
                                  <span className="text-[10px] font-bold text-slate-500 uppercase block">
                                    Uso Clínico Principal:
                                  </span>
                                  <span className="text-slate-800 font-medium">
                                    {fmt.clinicalUse}
                                  </span>
                                </div>
                              </div>

                              <div className="bg-white p-2 rounded-lg border border-slate-200 text-[10px] text-slate-700">
                                <span className={`font-bold ${
                                  product.brand === 'Alveos®' ? 'text-[#2066BA]' : 'text-[#7B37A0]'
                                }`}>
                                  {product.category === 'nebulizers' 
                                    ? 'Especificación y técnica de uso: ' 
                                    : product.category === 'iv_fixation'
                                    ? 'Técnica de fijación y sujeción: '
                                    : product.category === 'wound_care'
                                    ? 'Técnica de colocación y cobertura: '
                                    : 'Técnica de vendaje recomendada: '}
                                </span>
                                {fmt.technique}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 pt-1">
                    <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                      Características Principales:
                    </p>
                    <ul className="space-y-1.5 pl-1">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 pt-1">
                    <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                      Indicaciones Clínicas:
                    </p>
                    <ul className="space-y-1.5 pl-1">
                      {product.clinicalIndications.map((ind, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0 mt-1.5"></span>
                          <span>{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'protocol' && (
                <div className="space-y-4 text-xs text-slate-600 animate-fadeIn">
                  <div>
                    <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                      Pasos de Aplicación Clínica:
                    </p>
                    <ol className="space-y-2.5 pl-1">
                      {product.applicationSteps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-800 font-bold flex items-center justify-center shrink-0 text-[11px]">
                            {idx + 1}
                          </span>
                          <span className="pt-0.5 text-slate-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 space-y-1 text-amber-900">
                    <p className="font-bold text-[11px] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                      Protocolo de Retiro Atraumático:
                    </p>
                    <p className="text-[11px] leading-relaxed text-amber-800">
                      {product.removalProtocol}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="space-y-2.5 text-xs animate-fadeIn">
                  <div className="grid grid-cols-2 gap-2 text-slate-700">
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Material</span>
                      <span className="font-semibold">{product.technicalSpecs.material}</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Tipo de Adhesivo</span>
                      <span className="font-semibold">{product.technicalSpecs.adhesive}</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Permeabilidad (MVTR)</span>
                      <span className="font-semibold">{product.technicalSpecs.permeability}</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Vida Útil</span>
                      <span className="font-semibold">{product.technicalSpecs.shelfLife}</span>
                    </div>
                  </div>

                  {product.onuCode && (
                    <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/80 flex items-start justify-between gap-3 text-emerald-950">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 mb-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                          Código ONU Oficial • Mercado Público / ChileCompra
                        </span>
                        <p className="text-[11px] text-emerald-900 font-medium">
                          {product.unspscName || 'Clasificación oficial UNSPSC para adquisiciones hospitalarias'}
                        </p>
                      </div>
                      <span className="shrink-0 font-mono font-black text-sm bg-white text-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-300 shadow-2xs">
                        {product.onuCode}
                      </span>
                    </div>
                  )}

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => onOpenDatasheet(product)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-900 bg-cyan-50 border border-cyan-200 px-3.5 py-2 rounded-xl"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Ver Ficha Técnica Oficial Completa
                    </button>
                  </div>
                </div>
              )}

              {/* Video Tab Content */}
              {activeTab === 'video' && product.hasVideo && (
                <div className="space-y-4 text-xs text-slate-700 animate-fadeIn">
                  {/* Video Player Preview (Supports YouTube and MP4) */}
                  <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black border border-amber-500/40 shadow-xl relative">
                    {(() => {
                      const vUrl = product.videoInfo?.videoUrl || 'https://youtu.be/obF2R_95aLo';
                      const ytMatch = vUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
                      if (ytMatch && ytMatch[1]) {
                        return (
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${ytMatch[1]}?rel=0`}
                            className="w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            title={product.videoInfo?.title || "Video Quirúrgico Ver3"}
                          />
                        );
                      }
                      return (
                        <video
                          src={vUrl}
                          controls
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-contain"
                        />
                      );
                    })()}
                  </div>

                  {/* Video Overview Banner */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white border border-amber-500/40 shadow-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
                        <span className="text-xs font-black uppercase text-amber-400 tracking-wider">
                          {product.brand || 'Genkimed SpA'} • Video Quirúrgico Oficial
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-white/10">
                        Duración: {product.videoInfo?.duration || '00:24 min'}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-black text-white leading-snug">
                      {product.videoInfo?.title || 'Vertres - Sistema de Expansión Tridimensional MIS'}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {product.videoInfo?.subtitle}
                    </p>

                    <div className="pt-1 flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => onOpenVideo && onOpenVideo(product)}
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-slate-950 text-xs font-black transition-all hover:opacity-95 shadow-md flex items-center gap-2 cursor-pointer"
                      >
                        <Play className="w-4 h-4 fill-slate-950" />
                        <span>Abrir en Pantalla Completa y Cargar Mi Video</span>
                      </button>
                    </div>
                  </div>

                  {/* Procedural Chapters Breakdown */}
                  {product.videoInfo?.chapters && (
                    <div className="space-y-2 pt-1">
                      <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-amber-600" />
                        Pasos Quirúrgicos Guiados en el Video:
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.videoInfo.chapters.map((chap, i) => (
                          <div 
                            key={i} 
                            onClick={() => onOpenVideo && onOpenVideo(product)}
                            className="p-2.5 rounded-xl border border-slate-200 hover:border-amber-400 bg-slate-50 hover:bg-amber-50/50 transition-all flex items-start gap-2.5 cursor-pointer group"
                          >
                            <div 
                              onClick={(e) => {
                                if (onOpenImage) {
                                  e.stopPropagation();
                                  onOpenImage(product, chap.image);
                                }
                              }}
                              className="w-12 h-12 rounded-lg overflow-hidden bg-slate-900 border border-slate-300 shrink-0 relative cursor-zoom-in"
                              title="Haz clic para ver el render 3D ampliado"
                            >
                              <img src={chap.image} alt={chap.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                              <div className="absolute inset-0 bg-slate-950/20"></div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-mono font-bold text-amber-700">
                                  {chap.time}
                                </span>
                                <Play className="w-3 h-3 text-slate-400 group-hover:text-amber-600" />
                              </div>
                              <h5 className="text-xs font-bold text-slate-900 truncate">
                                {chap.title}
                              </h5>
                              <p className="text-[10px] text-slate-600 line-clamp-1 mt-0.5">
                                {chap.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 4 Pillars */}
                  <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 space-y-1.5 text-[11px] text-amber-950">
                    <span className="font-bold flex items-center gap-1 text-amber-900">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      Ventajas Demostradas en la Animación Quirúrgica:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-1">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span><strong>Three-dimensional expansion:</strong> soporte activo</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span><strong>Stable restoration:</strong> mantenimiento de altura</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span><strong>VCF restoration:</strong> reducción anatómica</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span><strong>Larger volume:</strong> distribución simétrica PMMA</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

            </div>

            {/* Institutional Distribution & Direct Contact Actions */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-4 shadow-xl">
              
              {/* Presentation info */}
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] block">
                    Formato de Distribución
                  </span>
                  <span className="text-white text-sm font-bold">
                    Caja x{product.unitPerBox} {product.unitPerBox === 1 ? 'unidad' : 'unidades'} • Presentación Institucional
                  </span>
                </div>
                <span className="text-[11px] font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800/60 px-2.5 py-1 rounded-md shrink-0">
                  Venta por Caja
                </span>
              </div>

              {/* Stock & Origin */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800 pt-3 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    Disponibilidad
                  </span>
                  <span className={`font-bold ${
                    product.badge?.toLowerCase().includes('próx') ? 'text-amber-400' : 'text-emerald-400'
                  }`}>
                    {product.badge?.toLowerCase().includes('próx') ? 'Próximamente' : 'En Stock'}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    Despacho
                  </span>
                  <span className="font-bold text-slate-200">
                    24/48 hrs hábiles
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    Almacenamiento
                  </span>
                  <span className="font-semibold text-slate-300">
                    Bodega Central Santiago
                  </span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => onOpenDatasheet(product)}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] hover:opacity-95 text-white shadow-purple-900/30 transition-all shadow-lg"
                >
                  <FileText className="w-4 h-4" />
                  <span>Ver Ficha Técnica Oficial</span>
                </button>

                <a
                  href={`https://wa.me/56932539584?text=Hola%20Genkimed%20SpA,%20deseo%20consultar%20información%20sobre%20el%20producto:%20${encodeURIComponent(product.name)}%20(Presentación:%20Caja%20x${product.unitPerBox}%20uds)`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
