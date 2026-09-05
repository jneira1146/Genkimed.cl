import React, { useState } from 'react';
import { 
  HeartPulse, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Info, 
  Eye,
  Stethoscope,
  Activity,
  Layers,
  HelpCircle
} from 'lucide-react';
import { CLINICAL_RECOMMENDATIONS } from '../data/products';
import { Product } from '../types';

interface ClinicalRecommenderProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const ClinicalRecommender: React.FC<ClinicalRecommenderProps> = ({
  products,
  onSelectProduct,
}) => {
  const [selectedRecId, setSelectedRecId] = useState<string>(CLINICAL_RECOMMENDATIONS[0].id);

  const activeRec = CLINICAL_RECOMMENDATIONS.find(r => r.id === selectedRecId) || CLINICAL_RECOMMENDATIONS[0];
  const recommendedProducts = products.filter(p => activeRec.recommendedProductIds.includes(p.id));

  return (
    <section id="asistente-clinico" className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background visual elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-bold">
            <Stethoscope className="w-3.5 h-3.5 text-cyan-400" />
            Guía de Práctica Clínica y Protocolos
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Asistente de Selección Clínica <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">Fixapro® & Alveos®</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Optimice la seguridad del paciente y los costos institucionales seleccionando el dispositivo Alveos® y apósito Fixapro® ideal según el procedimiento clínico.
          </p>
        </div>

        {/* Procedures Grid Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {CLINICAL_RECOMMENDATIONS.map((rec) => {
            const isSelected = selectedRecId === rec.id;
            return (
              <button
                key={rec.id}
                type="button"
                onClick={() => setSelectedRecId(rec.id)}
                className={`p-4 rounded-2xl text-left transition-all border ${
                  isSelected
                    ? 'bg-cyan-950/80 border-cyan-500/80 shadow-lg shadow-cyan-900/30 ring-1 ring-cyan-500'
                    : 'bg-slate-800/60 border-slate-700/80 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                    isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {rec.specialty.split('/')[0]}
                  </span>
                  {isSelected && <Sparkles className="w-4 h-4 text-cyan-400" />}
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-white leading-snug">
                  {rec.procedureName}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Procedure Detailed Card */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Procedure Protocol Insights (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  Fundamento Clínico y Seguridad
                </span>
                <h3 className="text-xl font-black text-white">
                  {activeRec.procedureName}
                </h3>
                <p className="text-xs text-slate-400">
                  Especialidad: <span className="text-slate-200">{activeRec.specialty}</span>
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-700/80 space-y-2 text-xs">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  Racionalidad Médica:
                </p>
                <p className="text-slate-300 leading-relaxed">
                  {activeRec.clinicalRationale}
                </p>
              </div>

              <div className="p-4 bg-cyan-950/40 rounded-2xl border border-cyan-800/40 space-y-2 text-xs">
                <p className="font-bold text-cyan-300 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-cyan-400" />
                  Recomendación de Buenas Prácticas (MINSAL):
                </p>
                <p className="text-cyan-100/90 leading-relaxed text-[11px]">
                  {activeRec.bestPracticeTip}
                </p>
              </div>
            </div>

            {/* Recommended Fixapro Products List (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Kit de Insumos Fixapro® Recomendados para este Procedimiento:
              </span>

              <div className="space-y-3">
                {recommendedProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="p-4 bg-slate-900/90 rounded-2xl border border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-cyan-500/60 transition-colors"
                  >
                    <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => onSelectProduct(prod)}>
                      <img 
                        src={prod.image} 
                        alt={prod.name} 
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-xl object-cover border border-slate-700 bg-slate-800"
                      />
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-900">
                            {prod.brand}
                          </span>
                          <span className="text-[10px] text-slate-300 font-medium">
                            {prod.dimensions}
                          </span>
                        </div>
                        <h4 className="font-bold text-xs sm:text-sm text-white hover:text-cyan-300 transition-colors">
                          {prod.name}
                        </h4>
                        <p className="text-[11px] text-slate-400 line-clamp-1">
                          {prod.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                      <div className="text-right">
                        <span className="text-xs font-bold text-cyan-300 block">
                          Caja x{prod.unitPerBox} un.
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {prod.dimensions}
                        </span>
                      </div>

                      <button
                        onClick={() => onSelectProduct(prod)}
                        className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] hover:opacity-95 text-white rounded-xl text-xs font-bold shadow-md transition-all whitespace-nowrap"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Ver Insumo</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
