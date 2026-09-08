import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Mail, 
  MapPin, 
  HeartPulse, 
  ExternalLink,
  MessageCircle,
  Package,
  ArrowRight
} from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigatePage: (page: 'productos' | 'empresa', subSection?: string) => void;
  onNavigateBrand?: (brand: 'Fixapro' | 'Alveos') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigatePage, onNavigateBrand }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Company Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              className="flex items-center cursor-pointer select-none"
              onClick={() => onNavigatePage('empresa')}
              title="Conocer más sobre Genkimed SpA"
            >
              <Logo size="md" theme="dark" showSubtitle={true} />
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Empresa chilena especializada en la provisión institucional de apósitos de curación avanzada, fijación de vías periféricas <strong className="text-white">Fixapro®</strong> y terapia respiratoria y sondas clínicas <strong className="text-white">Alveos®</strong>.
            </p>

            <div className="pt-1 space-y-1 text-[11px]">
              <p className="text-white font-bold">GENKIMED SpA</p>
              <p className="text-emerald-400 font-semibold">Proveedor Habilitado del Estado de Chile • Mercado Público</p>
              <p className="text-slate-400">RUT y situación laboral al día para emisión de Órdenes de Compra.</p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigatePage('empresa')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Conocer credenciales de la empresa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Institutional Navigation (Nuestra Empresa FIRST) (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-400" />
              Nuestra Empresa
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigatePage('empresa')} 
                  className="hover:text-white transition-colors text-left font-bold text-slate-300"
                >
                  Sobre Genkimed SpA
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage('empresa', 'garantias')} 
                  className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Mercado Público & ChileCompra</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage('empresa', 'garantias')} 
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>Certificaciones Sanitarias (ISO/CE)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage('empresa', 'garantias')} 
                  className="hover:text-cyan-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Bodega Central & Despacho 24/48h</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage('empresa', 'contacto')} 
                  className="hover:text-purple-400 transition-colors text-left"
                >
                  Contacto Institucional & Cotizaciones
                </button>
              </li>
            </ul>
          </div>

          {/* Catalog Categories (Insumos Médicos SECOND) (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white flex items-center gap-2">
              <Package className="w-4 h-4 text-[#A8287F]" />
              Catálogo de Insumos
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => {
                    onNavigatePage('productos');
                    if (onNavigateBrand) onNavigateBrand('Fixapro');
                  }} 
                  className="hover:text-[#A8287F] transition-colors text-left flex items-center gap-1.5 font-bold text-slate-300"
                >
                  <span className="w-2 h-2 rounded-full bg-[#A8287F]"></span>
                  <span>Línea Fixapro® (Apósitos & Cintas)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigatePage('productos');
                    if (onNavigateBrand) onNavigateBrand('Alveos');
                  }} 
                  className="hover:text-[#2066BA] transition-colors text-left flex items-center gap-1.5 font-bold text-slate-300"
                >
                  <span className="w-2 h-2 rounded-full bg-[#2066BA]"></span>
                  <span>Línea Alveos® (Respiratorio & Sondas)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage('productos')} 
                  className="hover:text-cyan-400 transition-colors text-left block"
                >
                  Apósitos Transparentes de Poliuretano
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage('productos')} 
                  className="hover:text-cyan-400 transition-colors text-left block"
                >
                  Apósitos con Almohadilla de Clorhexidina (CHG)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage('productos')} 
                  className="hover:text-cyan-400 transition-colors text-left block"
                >
                  Kits de Micronebulización Adulto y Pediátrico
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage('productos')} 
                  className="hover:text-cyan-400 transition-colors text-left block"
                >
                  Sondas de Aspiración Traqueal con Control
                </button>
              </li>
            </ul>
          </div>

          {/* Contact and Direct (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Contacto Comercial
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href="https://wa.me/56932539584?text=Hola%20Genkimed%20SpA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-bold"
                >
                  +56 9 3253 9584 (WhatsApp Ejecutivo)
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="mailto:compras@genkimed.cl" className="hover:text-white transition-colors">
                  compras@genkimed.cl
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:ventas@genkimed.cl" className="hover:text-white transition-colors">
                  ventas@genkimed.cl
                </a>
              </p>
              <p className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Santiago, Región Metropolitana, Chile. Despacho nacional a bodegas de farmacia.</span>
              </p>
            </div>
          </div>

        </div>

        {/* Certifications Bar */}
        <div className="mt-10 pt-6 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Sistemas de Gestión de Calidad
            </span>
            <span>•</span>
            <span className="text-slate-300">Normas ISO 13485:2016</span>
            <span>•</span>
            <span className="text-slate-300">Marcado CE 0123</span>
            <span>•</span>
            <span className="text-slate-300">Inocuidad y Biocompatibilidad</span>
          </div>

          <div>
            <span>© {new Date().getFullYear()} Genkimed SpA. Todos los derechos reservados.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
