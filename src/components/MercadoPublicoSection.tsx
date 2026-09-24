import React from 'react';
import { 
  Building, 
  FileCheck, 
  Truck, 
  Mail, 
  CheckCircle2, 
  Scale,
  Award,
  FileSpreadsheet,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Product } from '../types';

interface MercadoPublicoSectionProps {
  onOpenQuote?: () => void;
  onSelectProduct?: (product: Product) => void;
}

export const MercadoPublicoSection: React.FC<MercadoPublicoSectionProps> = ({
  onOpenQuote,
}) => {
  const handleScrollToCatalog = () => {
    const el = document.getElementById('catalogo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="mercado-publico" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold">
            <Building className="w-3.5 h-3.5 text-emerald-700" />
            Sector Público & Compras Estatales de Chile
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mercado Público & <span className="bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] bg-clip-text text-transparent">Licitaciones del Estado</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            <strong className="text-slate-900">GENKIMED SpA</strong> es proveedor habilitado del Estado en la plataforma <strong>Mercado Público (ChileCompra)</strong>. Proveemos insumos médicos hospitalarios bajo las marcas Fixapro®, Alveos® y Ossyn mediante Licitaciones Públicas (LP/LE), Compras Ágiles, Tratos Directos y Órdenes de Compra con facturación a 30 días.
          </p>
        </div>

        {/* 4 Pillars Grid for Public Procurement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Proveedor Acreditado</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Inscrito en el Registro Oficial de Proveedores del Estado con situación laboral y tributaria al día (SII / DT).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Licitaciones & Compra Ágil</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Atención inmediata de cotizaciones para Compra Ágil (&lt; 30 UTM), Licitaciones LP/LE y Convenios Asistenciales.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Despacho Institucional</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Entregas con guía y recepción conforme directa en bodegas de farmacia y abastecimiento en todo Chile.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Fichas Técnicas & Muestras</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Documentación técnica oficial, certificados ISO 13485 / CE y muestras clínicas para comités de evaluación IAAS.
            </p>
          </div>

        </div>

        {/* Informative Banner: ONU Codes registered in each product */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 mb-10 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                <span>Códigos ONU (UNSPSC) Registrados en Cada Producto</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-300">
                  ChileCompra
                </span>
              </h4>
              <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                Cada insumo clínico del catálogo dispone de su código ONU oficial individualizado directamente en su tarjeta y ficha técnica, permitiendo copiar y utilizar la nomenclatura estándar requerida por hospitales públicos y servicios de salud.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto">
            <button
              onClick={handleScrollToCatalog}
              className="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span>Explorar Productos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            {onOpenQuote && (
              <button
                onClick={onOpenQuote}
                className="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs"
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>Cotizar</span>
              </button>
            )}
          </div>
        </div>

        {/* ChileCompra Procurement Card */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-900/60 border border-cyan-500/40 text-cyan-300 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Datos para Órdenes de Compra (OC) y Licitaciones en Mercado Público
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white">
                Información Corporativa para Compradores Públicos e Institucionales
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Razón Social</span>
                  <span className="font-bold text-white text-sm">GENKIMED SpA</span>
                </div>

                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Acreditación Estado</span>
                  <span className="font-bold text-cyan-300 text-sm">Proveedor Oficial Mercado Público</span>
                </div>

                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Modalidades de Adquisición</span>
                  <span className="font-semibold text-slate-200">Licitaciones Públicas, Compra Ágil y Trato Directo</span>
                </div>

                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Condiciones de Pago</span>
                  <span className="font-semibold text-emerald-400">30 / 60 días recepción conforme factura</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 pt-1">
                Para solicitar requerimientos de bases técnicas, convenios marco o muestras clínicas, contacte directamente a nuestra mesa comercial.
              </p>
            </div>

            <div className="lg:col-span-4 bg-slate-800/90 border border-slate-700 rounded-2xl p-5 space-y-4">
              <h4 className="font-bold text-sm text-white flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                Mesa de Licitaciones y Ventas
              </h4>
              
              <div className="space-y-2 text-xs text-slate-300">
                <p>
                  <strong className="text-white block">Email de Contacto:</strong>
                  <a href="mailto:contacto@genkimed.cl" className="text-cyan-400 hover:underline">
                    contacto@genkimed.cl
                  </a>
                </p>
                <p>
                  <strong className="text-white block">Teléfono / WhatsApp Comercial:</strong>
                  <a href="https://wa.me/56932539584" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                    +56 9 3253 9584
                  </a>
                </p>
              </div>

              <a
                href="mailto:contacto@genkimed.cl?subject=Solicitud%20de%20Bases%20y%20Suministro%20Mercado%20Público%20-%20Genkimed%20SpA"
                className="w-full flex items-center justify-center gap-2 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold text-xs shadow-md transition-all"
              >
                <span>Enviar Solicitud de Bases o Información</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
