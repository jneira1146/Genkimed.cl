import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Mail, 
  MapPin, 
  HeartPulse, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onNavigateBrand?: (brand: 'Fixapro' | 'Alveos') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onNavigateBrand }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Company Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <Logo size="md" theme="dark" showSubtitle={true} />
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Empresa chilena especializada en la provisión y comercialización de insumos clínicos, apósitos de curación avanzada, fijación de vías periféricas y bioseguridad línea <strong className="text-white">Fixapro®</strong> y terapia respiratoria <strong className="text-white">Alveos®</strong>.
            </p>

            <div className="pt-1 space-y-1 text-[11px]">
              <p className="text-slate-300 font-semibold">Genkimed SpA</p>
              <p className="text-slate-400">Proveedor Acreditado del Estado de Chile • Mercado Público</p>
            </div>
          </div>

          {/* Catalog Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Líneas Fixapro® & Alveos®
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateBrand ? onNavigateBrand('Fixapro') : onNavigate('catalogo')} className="hover:text-[#A8287F] transition-colors text-left flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8287F]"></span>
                  <span>Catálogo Fixapro® (Apósitos & Fijación IV)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateBrand ? onNavigateBrand('Alveos') : onNavigate('catalogo')} className="hover:text-[#2066BA] transition-colors text-left flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2066BA]"></span>
                  <span>Catálogo Alveos® (Respiratorio & Sondas)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateBrand ? onNavigateBrand('Fixapro') : onNavigate('catalogo')} className="hover:text-cyan-400 transition-colors text-left">
                  Apósitos Transparentes Fixapro® IV Advanced
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateBrand ? onNavigateBrand('Fixapro') : onNavigate('catalogo')} className="hover:text-cyan-400 transition-colors text-left">
                  Cintas Quirúrgicas Microporosas Fixapro®
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateBrand ? onNavigateBrand('Alveos') : onNavigate('catalogo')} className="hover:text-cyan-400 transition-colors text-left">
                  Sondas de Aspiración Traqueal Alveos® (6 a 18 FR)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateBrand ? onNavigateBrand('Alveos') : onNavigate('catalogo')} className="hover:text-cyan-400 transition-colors text-left">
                  Kits de Micronebulización Alveos® Adulto y Pediátrico
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('catalogo')} className="hover:text-cyan-400 transition-colors">
                  Catálogo Clínico
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('asistente-clinico')} className="hover:text-cyan-400 transition-colors">
                  Guía de Procedimientos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('mercado-publico')} className="hover:text-cyan-400 transition-colors">
                  Mercado Público & Licitaciones
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('nosotros')} className="hover:text-cyan-400 transition-colors">
                  Sobre Genkimed SpA
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contacto')} className="hover:text-cyan-400 transition-colors">
                  Contacto Comercial
                </button>
              </li>
            </ul>
          </div>

          {/* Contact and Direct (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Contacto Comercial & Ventas
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a 
                  href="https://wa.me/56932539584?text=Hola%20Genkimed%20SpA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  +56 9 3253 9584
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:contacto@genkimed.cl" className="hover:text-white transition-colors">contacto@genkimed.cl</a>
              </p>
              <p className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Santiago, Región Metropolitana, Chile. Despacho nacional.</span>
              </p>
            </div>
          </div>

        </div>

        {/* Certifications Bar */}
        <div className="mt-10 pt-6 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Certificación de Calidad Médica
            </span>
            <span>•</span>
            <span className="text-slate-300">Normas ISO 13485:2016</span>
            <span>•</span>
            <span className="text-slate-300">Conformidad CE 0123</span>
            <span>•</span>
            <span className="text-slate-300">Insumos Clínicos Certificados</span>
          </div>

          <div>
            <span>© {new Date().getFullYear()} Genkimed SpA. Todos los derechos reservados.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
