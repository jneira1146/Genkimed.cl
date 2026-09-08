import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Truck, 
  FileCheck, 
  Scale, 
  Award, 
  Clock, 
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { Logo } from './Logo';

interface TrustSectionProps {
  onOpenQuickQuote: () => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onOpenQuickQuote }) => {
  const [activeTab, setActiveTab] = useState<'mercado_publico' | 'certificaciones' | 'despacho'>('mercado_publico');

  return (
    <section id="respaldo" className="py-12 sm:py-16 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Respaldo y Seguridad para Compradores de Salud</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Garantías Institucionales de <span className="bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] bg-clip-text text-transparent">Genkimed SpA</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Acreditados para proveer a la Red Asistencial Pública (ChileCompra) y clínicas privadas con los más estrictos estándares de trazabilidad.
          </p>
        </div>

        {/* 3 Interactive Pillars / Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-2xl border border-slate-200 shadow-2xs inline-flex gap-1">
            <button
              onClick={() => setActiveTab('mercado_publico')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'mercado_publico'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>Mercado Público & ChileCompra</span>
            </button>

            <button
              onClick={() => setActiveTab('certificaciones')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'certificaciones'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Certificaciones & Calidad</span>
            </button>

            <button
              onClick={() => setActiveTab('despacho')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'despacho'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Truck className="w-4 h-4 text-cyan-400" />
              <span>Logística & Despacho</span>
            </button>
          </div>
        </div>

        {/* Tab Content Panels */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 max-w-4xl mx-auto">
          
          {/* TAB 1: MERCADO PÚBLICO */}
          {activeTab === 'mercado_publico' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    Proveedor Habilitado del Estado
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    ChileCompra, Licitaciones (LP/LE) y Compra Ágil
                  </h3>
                </div>
                <button
                  onClick={onOpenQuickQuote}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 shadow-sm"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>Cotizar para Orden de Compra</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">Registro al Día</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Situación tributaria y laboral validada en el Registro Oficial de Proveedores.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">Modalidades de Compra</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Atención ágil para Trato Directo, Compras Ágiles y Licitaciones Públicas institucionales.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">Facturación a 30 Días</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Condiciones comerciales compatibles con la Ley de Pago Oportuno y órdenes de compra.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CERTIFICACIONES */}
          {activeTab === 'certificaciones' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                    Estándares Sanitarios Internacionales
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    Calidad Fixapro® & Alveos® Certificada
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">ISO 13485 & CE</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Dispositivos médicos fabricados bajo sistemas de gestión de calidad auditados internacionalmente.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">100% Trazabilidad</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Certificado de lote, esterilidad (Óxido de Etileno) y fecha de caducidad por cada entrega.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">Biocompatibilidad</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Adhesivos médicos hipoalergénicos libres de látex, seguros para piel frágil o neonatal.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: LOGÍSTICA & DESPACHO */}
          {activeTab === 'despacho' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <span className="text-[10px] font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200">
                    Cadena de Suministro Continua
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    Despacho Inmediato 24/48 Horas a Todo Chile
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
                    <Truck className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">Cobertura Nacional</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Entregas directas en bodegas de farmacia hospitalaria y clínicas desde Arica hasta Punta Arenas.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">Despacho Express RM</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Envíos prioritarios para contingencias asistenciales y cirugías programadas en la Región Metropolitana.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">Embalaje Hospitalario</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Cajas reforzadas identificadas con código de barra y formato estándar por unidad.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Conversion callout bar */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 mb-2">
            ¿Su institución requiere muestras técnicas o validación por comité de infecciones (IAAS)?
          </p>
          <a
            href="https://wa.me/56932539584?text=Hola%20Genkimed%20SpA,%20solicito%20muestras%20técnicas%20para%20evaluación%20clínica%20en%20nuestra%20institución"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#7B37A0] hover:underline"
          >
            <span>Solicitar Muestras para Evaluación Clínica por WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
