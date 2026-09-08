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
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Users,
  Globe2,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Logo } from './Logo';
import { ContactSection } from './ContactSection';
import { QuoteItem } from '../types';

interface CompanyPageProps {
  onNavigateToProducts: (brand?: 'Fixapro' | 'Alveos') => void;
  onOpenQuickQuote: () => void;
  quoteItems?: QuoteItem[];
}

export const CompanyPage: React.FC<CompanyPageProps> = ({
  onNavigateToProducts,
  onOpenQuickQuote,
  quoteItems = [],
}) => {
  const [activeTrustTab, setActiveTrustTab] = useState<'mercado_publico' | 'certificaciones' | 'logistica'>('mercado_publico');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 animate-fadeIn">
      
      {/* 1. HERO INSTITUCIONAL */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white pt-12 pb-20 border-b border-slate-800">
        {/* Glow accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#A8287F]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2066BA]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb indicator */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <button 
              onClick={() => onNavigateToProducts()}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Inicio</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-400 font-semibold">Nuestra Empresa</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col: Corporate Presentation */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-bold text-slate-200 shadow-inner">
                <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Empresa Chilena de Insumos Médicos • Proveedor de Salud</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Abastecimiento Médico de Excelencia con <span className="bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] bg-clip-text text-transparent">Genkimed SpA</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Especialistas en la distribución hospitalaria de insumos para curación avanzada, fijación de accesos vasculares y terapia respiratoria bajo las marcas certificadas <strong>Fixapro®</strong> y <strong>Alveos®</strong>. Acreditados para abastecer a la Red Asistencial Pública (ChileCompra) y clínicas privadas a lo largo de todo Chile.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigateToProducts()}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] hover:opacity-95 text-white font-extrabold text-xs sm:text-sm shadow-xl transition-all flex items-center gap-2 hover:scale-[1.02]"
                >
                  <PackageCheck className="w-4 h-4" />
                  <span>Explorar Catálogo de Productos</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/56932539584?text=Hola%20Genkimed%20SpA,%20solicito%20atención%20comercial%20para%20nuestra%20institución"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Contactar a Ventas (+56 9 3253 9584)</span>
                </a>
              </div>

              {/* Fast KPIs */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
                <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/60">
                  <p className="text-xs text-slate-400">Razón Social</p>
                  <p className="text-sm font-extrabold text-white">GENKIMED SpA</p>
                </div>
                <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/60">
                  <p className="text-xs text-slate-400">Despacho Nacional</p>
                  <p className="text-sm font-extrabold text-emerald-400">24 / 48 Horas</p>
                </div>
                <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/60">
                  <p className="text-xs text-slate-400">Trazabilidad</p>
                  <p className="text-sm font-extrabold text-cyan-400">100% de Lote</p>
                </div>
              </div>

            </div>

            {/* Right Col: Santiago Warehouse Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950/80 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl p-2">
                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80" 
                    alt="Centro de Distribución Genkimed SpA en Santiago" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex flex-col justify-end p-5">
                    <span className="text-[10px] font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800 px-2 py-0.5 rounded-md inline-block w-fit mb-1">
                      Santiago, Región Metropolitana
                    </span>
                    <h3 className="text-base font-black text-white">
                      Centro de Almacenamiento & Bodega Central
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Condiciones climatizadas y control de inocuidad para insumos estériles.
                    </p>
                  </div>
                </div>

                <div className="p-4 space-y-2 text-xs text-slate-400">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Auditorías de Calidad
                    </span>
                    <span className="font-bold text-white">ISO 13485 & CE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Truck className="w-4 h-4 text-cyan-400" />
                      Cobertura Logística
                    </span>
                    <span className="font-bold text-white">Arica a Punta Arenas</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. PILARES DE VALOR CORPORATIVO */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              ¿Por qué los Servicios de Salud eligen a Genkimed?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Pilares de gestión orientados a la seguridad del paciente y la continuidad operativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-pink-100 text-[#A8287F] flex items-center justify-center font-bold">
                <PackageCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Stock de Seguridad Permanente</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mantenemos inventarios estratégicos en Santiago para insumos de alto recambio como apósitos transparentes IV y cintas microporosas, protegiendo a su institución frente a quiebres de cadena logística.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#7B37A0] flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Asesoría Técnica y Fichas Oficiales</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Entregamos soporte técnico a comités de infecciones (IAAS), abastecimiento y farmacia hospitalaria. Proporcionamos muestras clínicas para evaluación y validación de enfermería.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#2066BA] flex items-center justify-center font-bold">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Despacho Ágil a Todo Chile</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Red de transporte con entregas prioritarias en bodegas de farmacia de hospitales públicos, mutuales y clínicas en todas las regiones del país.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. RESALDO INSTITUCIONAL, CHILECOMPRA Y CERTIFICACIONES */}
      <section id="garantias" className="py-14 sm:py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Garantías para Compradores Institucionales</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Acreditación Pública, Calidad & Cadena Logística
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Revise nuestras credenciales para compras a través de ChileCompra o convenios privados.
            </p>
          </div>

          {/* Interactive Pillars Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white p-1 rounded-2xl border border-slate-200 shadow-2xs inline-flex gap-1">
              <button
                onClick={() => setActiveTrustTab('mercado_publico')}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                  activeTrustTab === 'mercado_publico'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Building2 className="w-4 h-4 text-emerald-400" />
                <span>Mercado Público & ChileCompra</span>
              </button>

              <button
                onClick={() => setActiveTrustTab('certificaciones')}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                  activeTrustTab === 'certificaciones'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>Certificaciones Sanitarias</span>
              </button>

              <button
                onClick={() => setActiveTrustTab('logistica')}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                  activeTrustTab === 'logistica'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Truck className="w-4 h-4 text-cyan-400" />
                <span>Logística & Despacho</span>
              </button>
            </div>
          </div>

          {/* Tab Panel */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 max-w-4xl mx-auto">
            
            {/* TAB 1: MERCADO PÚBLICO */}
            {activeTrustTab === 'mercado_publico' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      Proveedor Habilitado del Estado de Chile
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
                      Empresa al día con el Servicio de Impuestos Internos (SII) y la Dirección del Trabajo para emisión ágil de OC.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                      <Scale className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-xs text-slate-900">Modalidades de Compra</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Atención inmediata a Licitaciones Públicas (LP/LE), Compras Ágiles y Trato Directo hospitalario.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                      <Clock className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-xs text-slate-900">Pago a 30 Días</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Cumplimiento de la Ley de Pago Oportuno para compras con recepción conforme de factura.
                    </p>
                  </div>
                </div>

                {/* Corporate ID card for Public Procurement */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-bold text-cyan-300">Datos Institucionales para Adquisiciones:</span>
                    <span className="text-[11px] text-slate-400">Razón Social: <strong>GENKIMED SpA</strong></span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                    <div className="bg-slate-800 p-2.5 rounded-lg">
                      <span className="text-slate-400 block text-[10px]">Líneas Distribuidas</span>
                      <span className="font-bold text-white">Fixapro® / Alveos®</span>
                    </div>
                    <div className="bg-slate-800 p-2.5 rounded-lg">
                      <span className="text-slate-400 block text-[10px]">Facturación</span>
                      <span className="font-bold text-emerald-400">Electrónica 30 días</span>
                    </div>
                    <div className="bg-slate-800 p-2.5 rounded-lg">
                      <span className="text-slate-400 block text-[10px]">Muestras Clínicas</span>
                      <span className="font-bold text-cyan-400">Disponibles a solicitud</span>
                    </div>
                    <div className="bg-slate-800 p-2.5 rounded-lg">
                      <span className="text-slate-400 block text-[10px]">Mesa de Ayuda</span>
                      <span className="font-bold text-white">+56 9 3253 9584</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CERTIFICACIONES */}
            {activeTrustTab === 'certificaciones' && (
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-5">
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                    Estándares Sanitarios Internacionales
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    Calidad Fixapro® & Alveos® Certificada
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                      <Award className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-xs text-slate-900">ISO 13485 & Marcado CE</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Sistemas de gestión de calidad auditados conforme a directivas internacionales para dispositivos médicos.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-xs text-slate-900">Esterilidad EO Garantizada</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Esterilización por Óxido de Etileno con indicador visual en cada envase pouch individual.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-xs text-slate-900">Biocompatibilidad Libre de Látex</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Adhesivos médicos hipoalergénicos no citotóxicos aptos para neonatología, geriatría y piel frágil.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: LOGÍSTICA & DESPACHO */}
            {activeTrustTab === 'logistica' && (
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-5">
                  <span className="text-[10px] font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200">
                    Cadena de Suministro Continua
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    Despacho Prioritario 24/48 Horas a Todo Chile
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
                      <Truck className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-xs text-slate-900">Distribución Nacional</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Entregas directas a bodegas centrales de farmacia asistencial de Arica a Punta Arenas.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                      <Clock className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-xs text-slate-900">Urgencias Región Metropolitana</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Atención exprés para contingencias y cirugías programadas en el Gran Santiago.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-xs text-slate-900">Embalaje Hospitalario</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Cajas master reforzadas con códigos de barra y rotulación de lote y vencimiento legibles.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 4. MESA DE CONTACTO INSTITUCIONAL & SOLICITUDES */}
      <ContactSection quoteItems={quoteItems} onOpenQuickQuote={onOpenQuickQuote} />

      {/* 5. CALL TO ACTION FINAL: IR AL CATÁLOGO DE INSUMOS */}
      <section className="py-14 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-900/60 border border-cyan-500/40 text-cyan-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Abastecimiento Inmediato Fixapro® y Alveos®</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            ¿Listo para revisar y cotizar los insumos para su institución?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Acceda al catálogo interactivo completo con medidas, fichas técnicas descargables y cotización en 3 pasos.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigateToProducts()}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] hover:opacity-95 text-white font-extrabold text-sm shadow-xl transition-all flex items-center gap-2"
            >
              <span>Ver Catálogo de Insumos Médicos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigateToProducts('Fixapro')}
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
            >
              Línea Fixapro® (Apósitos y Cintas)
            </button>
            <button
              onClick={() => onNavigateToProducts('Alveos')}
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
            >
              Línea Alveos® (Respiratorio y Sondas)
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
