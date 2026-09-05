import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  FileCheck2, 
  Building, 
  Sparkles, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2,
  Award,
  Layers,
  HeartPulse
} from 'lucide-react';
import { Product } from '../types';

interface HeroProps {
  onExploreCatalog: () => void;
  onSelectFeaturedProduct: (product: Product) => void;
  featuredProducts: Product[];
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCatalog,
  onSelectFeaturedProduct,
  featuredProducts,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#0B0F19] to-slate-900 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Glow Elements with brand magenta & blue */}
      <div className="absolute top-0 right-1/4 -mt-32 w-96 h-96 bg-[#A8287F]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 -mr-32 w-96 h-96 bg-[#2066BA]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-[#7B37A0]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#A8287F]/20 via-[#7B37A0]/20 to-[#2066BA]/20 border border-[#7B37A0]/40 text-purple-200 text-xs font-semibold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping"></span>
            Genkimed Medical Solutions • Insumos Médicos Certificados
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Insumos Médicos Certificados
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium">
            <Building className="w-3.5 h-3.5 text-amber-400" />
            Proveedor Activo Mercado Público
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight sm:leading-tight lg:leading-[1.15]">
              Distribución Especializada de Insumos Clínicos <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">Fixapro® & Alveos®</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              <strong className="text-white font-semibold">Genkimed SpA</strong> suministra a hospitales de la red pública, clínicas privadas, mutualidades y centros de salud en todo Chile con las líneas oficiales <strong className="text-pink-300 font-semibold">Fixapro®</strong> (apósitos avanzados, vendas elásticas de compresión, fijación vascular y cintas quirúrgicas) y <strong className="text-blue-300 font-semibold">Alveos®</strong> (terapia respiratoria, kits de micronebulización y sondas de aspiración traqueal), con disponibilidad directa y a través de Mercado Público.
            </p>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-sm hover:border-purple-500/40 transition-colors">
                <ShieldCheck className="w-5 h-5 text-purple-400 mb-1.5" />
                <p className="text-xs font-bold text-white">Calidad Certificada</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Normas ISO 13485, CE y grado médico hospitalario.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-sm hover:border-blue-500/40 transition-colors">
                <Truck className="w-5 h-5 text-emerald-400 mb-1.5" />
                <p className="text-xs font-bold text-white">Despacho 24/48 Horas</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Cobertura nacional de Arica a Punta Arenas.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-sm hover:border-amber-500/40 transition-colors">
                <FileCheck2 className="w-5 h-5 text-amber-400 mb-1.5" />
                <p className="text-xs font-bold text-white">Facturación Institucional</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Orden de Compra, ChileCompra y crédito 30 días.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <button
                onClick={onExploreCatalog}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] hover:opacity-95 text-white font-extrabold text-sm shadow-lg shadow-purple-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explorar Catálogo Clínico</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/56932539584?text=Hola%20Genkimed%20SpA,%20necesito%20asesoría%20sobre%20insumos%20Fixapro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-emerald-400 hover:text-emerald-300 font-bold text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Asesoría Técnica</span>
              </a>
            </div>

          </div>

          {/* Featured Fixapro Card / Visual Showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative bg-slate-800/90 border border-slate-700/90 rounded-2xl p-5 shadow-2xl backdrop-blur-md">
              
              {/* Highlight ribbon */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></div>
                  <span className="text-xs font-extrabold text-cyan-300 tracking-wide uppercase">
                    Destacado Clínico • Fixapro®
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-cyan-300 bg-slate-900/70 px-2 py-0.5 rounded border border-slate-700">
                  {featuredProducts[0]?.dimensions || '6.5 x 7 cm'}
                </span>
              </div>

              {/* Showcase item */}
              {featuredProducts[0] && (
                <div className="mt-4 space-y-4">
                  <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-700/60 aspect-[16/10] group cursor-pointer" onClick={() => onSelectFeaturedProduct(featuredProducts[0])}>
                    <img 
                      src={featuredProducts[0].image} 
                      alt={featuredProducts[0].name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                      <span className="inline-block bg-cyan-600 text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-md mb-1 w-max">
                        {featuredProducts[0].badge || 'Alta Demanda'}
                      </span>
                      <h2 className="text-base font-bold text-white leading-snug">
                        {featuredProducts[0].name}
                      </h2>
                      <p className="text-xs text-cyan-200 font-medium">
                        Medida: {featuredProducts[0].dimensions} • {featuredProducts[0].presentation}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Película ultrafina de poliuretano con alto MVTR para respiración cutánea.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Borde no tejido reforzado con muesca anatómica para aletas de vía venosa.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Libre de látex, estéril EO individual y alta biocompatibilidad cutánea.</span>
                    </div>
                  </div>

                  {/* Micro Quick Actions */}
                  <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-700/80">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Distribución Oficial</span>
                      <span className="text-sm font-extrabold text-cyan-300">
                        Stock Disponible
                      </span>
                      <span className="text-[10px] text-slate-400 block">Presentación: Caja x{featuredProducts[0].unitPerBox} uds</span>
                    </div>
                    <button
                      onClick={() => onSelectFeaturedProduct(featuredProducts[0])}
                      className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-bold transition-all shadow-md"
                    >
                      Ver Ficha Técnica
                    </button>
                  </div>
                </div>
              )}

              {/* Trust Footer Bar */}
              <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  Homologado Red de Salud
                </span>
                <span>Stock Permanente en Bodega RM</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
