import React from 'react';
import { 
  Building, 
  FileCheck, 
  Truck, 
  Mail, 
  CheckCircle2, 
  Scale,
  Award
} from 'lucide-react';

export const MercadoPublicoSection: React.FC = () => {
  return (
    <section id="mercado-publico" className="py-14 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
            <Building className="w-3.5 h-3.5 text-emerald-600" />
            Sector Público & Compras Estatales de Chile
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mercado Público & <span className="bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] bg-clip-text text-transparent">Licitaciones del Estado</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            <strong className="text-slate-900">Genkimed SpA</strong> es proveedor habilitado del Estado de Chile en Mercado Público (ChileCompra), facilitando la adquisición ágil y transparente de insumos médicos Fixapro® y Alveos® a través de Licitaciones Públicas (LP/LE), Compras Ágiles, Trato Directo y Órdenes de Compra institucionales.
          </p>
        </div>

        {/* 4 Pillars Grid for Public Procurement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Proveedor Acreditado</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Empresa inscrita y validada en el Registro Oficial de Proveedores de ChileCompra con situación tributaria y laboral al día.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Licitaciones & Compra Ágil</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Participación oportuna en Licitaciones Públicas (LP/LE), Compras Ágiles, Licitaciones Privadas y Tratos Directos de abastecimiento asistencial.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Despacho Institucional</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Entregas garantizadas en bodegas de farmacia y abastecimiento de hospitales de la Red Asistencial desde Arica a Magallanes.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Fichas Técnicas & Muestras</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Disponibilidad de muestras clínicas para comités de evaluación de enfermería y certificados de calidad y lote.
            </p>
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
