import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  FileCheck2, 
  Building2, 
  ArrowRight, 
  MessageCircle, 
  FileSpreadsheet,
  Clock,
  Sparkles,
  HeartPulse,
  Pipette,
  Wind,
  CheckCircle2
} from 'lucide-react';
import { Product, ProductCategory } from '../types';

interface HeroProps {
  onExploreCatalog: () => void;
  onSelectCategoryFilter: (category: ProductCategory) => void;
  onOpenQuickQuote: () => void;
  featuredProducts: Product[];
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCatalog,
  onSelectCategoryFilter,
  onOpenQuickQuote,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#0B0F19] to-slate-900 text-white pt-8 pb-14 sm:pt-14 sm:pb-20">
      {/* Subtle brand glow effects */}
      <div className="absolute top-0 right-1/4 -mt-32 w-96 h-96 bg-[#A8287F]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-[#2066BA]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Pills */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#A8287F]/20 via-[#7B37A0]/20 to-[#2066BA]/20 border border-[#7B37A0]/40 text-purple-200 text-xs font-semibold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Genkimed SpA • Distribuidor Oficial Fixapro® & Alveos®
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            Proveedor Activo Mercado Público & Convenios
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight sm:leading-tight lg:leading-[1.12]">
              Insumos Médicos Certificados para Hospitales y Clínicas en Chile
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Abastecimiento institucional ágil de <strong className="text-pink-300 font-semibold">Fixapro®</strong> (apósitos avanzados de poliuretano, fijación vascular y vendas) y <strong className="text-blue-300 font-semibold">Alveos®</strong> (terapia respiratoria y sondas traqueales) con despacho en 24/48 horas y facturación a 30 días.
            </p>

            {/* Funnel Core CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenQuickQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] hover:opacity-95 text-white font-black text-sm shadow-xl shadow-purple-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileSpreadsheet className="w-5 h-5" />
                <span>Iniciar Cotización Rápida</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/56932539584?text=Hola%20Genkimed%20SpA,%20necesito%20cotizar%20insumos%20médicos%20para%20mi%20institución"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Ejecutivo Inmediato</span>
              </a>
            </div>

            {/* Key Micro-trust indicators */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#7B37A0]" />
                Cotizaciones en &lt; 2 horas
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-emerald-400" />
                Despacho a todo Chile (Arica a Punta Arenas)
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Normas ISO 13485 & CE
              </span>
            </div>

          </div>

          {/* Funnel Step 1: "Elija lo que necesita abastecer hoy" (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-700/90 rounded-3xl p-5 sm:p-6 shadow-2xl backdrop-blur-md space-y-4">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-200">
                    Paso 1: Seleccione su Requerimiento
                  </span>
                </div>
                <span className="text-[11px] font-bold text-slate-400">
                  Acceso directo
                </span>
              </div>

              <p className="text-xs text-slate-300">
                Haga clic en la categoría de su interés para cotizar al instante:
              </p>

              {/* 4 Interactive Funnel Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                
                {/* Wound Care / Film */}
                <button
                  onClick={() => onSelectCategoryFilter('wound_care')}
                  className="p-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-[#A8287F] text-left transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-8 h-8 rounded-xl bg-[#A8287F]/20 text-pink-400 flex items-center justify-center">
                      <HeartPulse className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold text-pink-300 uppercase">
                      Fixapro®
                    </span>
                  </div>
                  <h4 className="font-bold text-xs text-white group-hover:text-pink-300 transition-colors">
                    Apósitos Film Curación
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    10x12, 10x25 y 6x7 cm estériles.
                  </p>
                </button>

                {/* IV Fixation */}
                <button
                  onClick={() => onSelectCategoryFilter('iv_fixation')}
                  className="p-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-400 text-left transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold text-purple-300 uppercase">
                      Fixapro®
                    </span>
                  </div>
                  <h4 className="font-bold text-xs text-white group-hover:text-purple-300 transition-colors">
                    Fijación Vascular & CHG
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    CVC, CVP, Pediátrico y CHG.
                  </p>
                </button>

                {/* Respiratory */}
                <button
                  onClick={() => onSelectCategoryFilter('nebulizers')}
                  className="p-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-[#2066BA] text-left transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Wind className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold text-blue-300 uppercase">
                      Alveos®
                    </span>
                  </div>
                  <h4 className="font-bold text-xs text-white group-hover:text-blue-300 transition-colors">
                    Micronebulización
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Kits Adulto y Pediátrico con tubo.
                  </p>
                </button>

                {/* Suction tubes */}
                <button
                  onClick={() => onSelectCategoryFilter('respiratory')}
                  className="p-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400 text-left transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <Pipette className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold text-cyan-300 uppercase">
                      Alveos®
                    </span>
                  </div>
                  <h4 className="font-bold text-xs text-white group-hover:text-cyan-300 transition-colors">
                    Sondas de Aspiración
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Gama completa 6 FR a 18 FR ISO.
                  </p>
                </button>

              </div>

              {/* Quick Action below cards */}
              <button
                onClick={onExploreCatalog}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
              >
                <span>Ver todos los insumos en el catálogo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
