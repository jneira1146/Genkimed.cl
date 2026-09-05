import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Truck, 
  Users, 
  Award, 
  CheckCircle2, 
  HeartHandshake, 
  Globe2,
  PackageCheck,
  HeartPulse
} from 'lucide-react';
import { Logo } from './Logo';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-[#7B37A0] text-xs font-bold">
            <Building2 className="w-3.5 h-3.5 text-[#7B37A0]" />
            Empresa Chilena de Insumos Médicos • Genkimed Medical Solutions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sobre <span className="bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] bg-clip-text text-transparent">Genkimed SpA</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Comprometidos con el abastecimiento continuo, la excelencia en bioseguridad y el respaldo técnico a los profesionales de la salud en todo el territorio nacional.
          </p>
        </div>

        {/* Company Identity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          <div className="lg:col-span-6 space-y-4 text-slate-700 text-sm leading-relaxed">
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm inline-block mb-2">
              <Logo size="lg" showSubtitle={true} />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              Especialistas en Distribución Hospitalaria & Curación Avanzada
            </h3>

            <p>
              <strong className="text-slate-900">Genkimed SpA Medical Solutions</strong> nació con el propósito de acercar insumos clínicos de alta tecnología a precios justos y competitivos tanto para el sistema público como para instituciones privadas de salud en Chile.
            </p>

            <p>
              Como distribuidor autorizado de las líneas médicas <strong className="text-[#A8287F]">Fixapro®</strong> y <strong className="text-[#2066BA]">Alveos®</strong>, garantizamos apósitos transparentes de poliuretano, espumas hidrofílicas, cintas hipoalergénicas, kits de micronebulización y sondas clínicas que cumplen con los más rigurosos estándares internacionales (ISO 13485, CE) y estrictos controles de calidad médica.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-1">
                <span className="text-2xl font-black text-[#7B37A0]">100%</span>
                <p className="text-xs font-bold text-slate-800">Trazabilidad de Lote</p>
                <p className="text-[11px] text-slate-500">Certificados de calidad e inocuidad por despacho.</p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-1">
                <span className="text-2xl font-black text-[#2066BA]">24/48h</span>
                <p className="text-xs font-bold text-slate-800">Despacho Express</p>
                <p className="text-[11px] text-slate-500">Logística ágil con bodega central en Santiago.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[16/11] bg-slate-900 group">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80" 
                alt="Infraestructura Genkimed SpA" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  Centro de Distribución Santiago
                </div>
                <h4 className="text-lg font-bold">
                  Almacenamiento Climatizado y Control de Calidad
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Bodega habilitada bajo normativas sanitarias para preservación de esterilidad de dispositivos médicos.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold">
              <PackageCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Stock Crítico Permanente</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mantenemos inventarios de seguridad para evitar quiebres de stock en insumos de alta rotación como apósitos IV y cintas de fijación.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Asesoría Clínica Dedicada</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipo con capacitación en enfermería y gestión de compras para orientar la selección del insumo más costo-efectivo.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <Globe2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Cobertura Nacional</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Alianzas logísticas con transportistas líderes para despachos seguros a todas las regiones y centros asistenciales de Chile.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
