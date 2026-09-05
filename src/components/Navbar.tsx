import React, { useState } from 'react';
import { 
  Mail, 
  FileText, 
  Search, 
  Menu, 
  X, 
  ShieldCheck, 
  Building2, 
  Sparkles, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { Product } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  onSelectProduct: (product: Product) => void;
  products: Product[];
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  selectedBrand?: 'all' | 'Fixapro' | 'Alveos';
  onNavigateBrand?: (brand: 'Fixapro' | 'Alveos') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSelectProduct,
  products,
  activeSection,
  onNavigate,
  selectedBrand = 'all',
  onNavigateBrand,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredSearchResults = searchQuery.trim() === '' 
    ? [] 
    : products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.dimensions.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleBrandNavClick = (brand: 'Fixapro' | 'Alveos') => {
    if (onNavigateBrand) {
      onNavigateBrand(brand);
    } else {
      onNavigate('catalogo');
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-200">
      {/* Top Notification / Info Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center flex-wrap gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Proveedor del Estado de Chile & Licitaciones
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              Genkimed SpA • Insumos Médicos Hospitalarios
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:flex items-center gap-1 text-cyan-300">
              <ShieldCheck className="w-3.5 h-3.5" />
              Distribuidor Oficial Fixapro® & Alveos® Chile
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a 
              href="https://wa.me/56932539584?text=Hola%20Genkimed%20SpA,%20necesito%20cotizar%20insumos%20médicos%20Fixapro" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Ventas: +56 9 3253 9584
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="mailto:contacto@genkimed.cl" 
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              contacto@genkimed.cl
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('hero')}>
            <Logo size="md" showSubtitle={true} />
          </div>

          {/* Live Search Bar for Products / Dimensions / Categories */}
          <div className="hidden md:block flex-1 max-w-xs xl:max-w-sm 2xl:max-w-md relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar por apósito, sonda o medidas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 250)}
                className="w-full pl-10 pr-4 py-2 bg-slate-100/80 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-cyan-500 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* Autocomplete Dropdown */}
            {isSearchFocused && filteredSearchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden divide-y divide-slate-100">
                <div className="p-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50">
                  Resultados sugeridos Fixapro® & Alveos®
                </div>
                {filteredSearchResults.map((prod) => (
                  <div
                    key={prod.id}
                    onMouseDown={() => {
                      onSelectProduct(prod);
                      setSearchQuery('');
                    }}
                    className="p-3 hover:bg-cyan-50/70 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={prod.image} 
                        alt={prod.name} 
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-md object-cover border border-slate-200" 
                      />
                      <div>
                        <p className="text-xs font-bold text-slate-900">{prod.name}</p>
                        <p className="text-[11px] text-slate-500">
                          {prod.dimensions} • {prod.presentation}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded">
                        Ver Ficha
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-xs xl:text-sm font-semibold text-slate-700">
            <button
              onClick={() => handleBrandNavClick('Fixapro')}
              className={`flex items-center gap-1.5 px-2.5 xl:px-3.5 py-2 rounded-lg transition-all ${
                activeSection === 'catalogo' && selectedBrand === 'Fixapro'
                  ? 'text-[#A8287F] bg-pink-50 font-bold border border-pink-200' 
                  : 'hover:text-[#A8287F] hover:bg-slate-50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#A8287F]"></span>
              <span>Catálogo Fixapro®</span>
            </button>
            <button
              onClick={() => handleBrandNavClick('Alveos')}
              className={`flex items-center gap-1.5 px-2.5 xl:px-3.5 py-2 rounded-lg transition-all ${
                activeSection === 'catalogo' && selectedBrand === 'Alveos'
                  ? 'text-[#2066BA] bg-blue-50 font-bold border border-blue-200' 
                  : 'hover:text-[#2066BA] hover:bg-slate-50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#2066BA]"></span>
              <span>Catálogo Alveos®</span>
            </button>
            <button
              onClick={() => handleNavClick('asistente-clinico')}
              className={`px-2.5 xl:px-3 py-2 rounded-lg transition-colors ${
                activeSection === 'asistente-clinico' ? 'text-cyan-700 bg-cyan-50 font-bold' : 'hover:text-cyan-600 hover:bg-slate-50'
              }`}
            >
              Guía Clínica
            </button>
            <button
              onClick={() => handleNavClick('mercado-publico')}
              className={`px-2.5 xl:px-3 py-2 rounded-lg transition-colors ${
                activeSection === 'mercado-publico' ? 'text-cyan-700 bg-cyan-50 font-bold' : 'hover:text-cyan-600 hover:bg-slate-50'
              }`}
            >
              Mercado Público
            </button>
            <button
              onClick={() => handleNavClick('nosotros')}
              className={`px-2.5 xl:px-3 py-2 rounded-lg transition-colors ${
                activeSection === 'nosotros' ? 'text-cyan-700 bg-cyan-50 font-bold' : 'hover:text-cyan-600 hover:bg-slate-50'
              }`}
            >
              Genkimed SpA
            </button>
            <button
              onClick={() => handleNavClick('contacto')}
              className={`px-2.5 xl:px-3 py-2 rounded-lg transition-colors ${
                activeSection === 'contacto' ? 'text-cyan-700 bg-cyan-50 font-bold' : 'hover:text-cyan-600 hover:bg-slate-50'
              }`}
            >
              Contacto
            </button>
          </nav>

          {/* Actions: Mobile Menu Trigger */}
          <div className="flex items-center gap-2">
            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search input */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar apósito, sonda o descripción..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-100 rounded-lg text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2">
          <div className="p-3 bg-cyan-50 rounded-xl mb-3 border border-cyan-100">
            <p className="text-xs font-bold text-cyan-900">Genkimed SpA • Insumos Médicos</p>
            <p className="text-[11px] text-cyan-700 mt-0.5">Venta institucional y despacho a todo Chile.</p>
          </div>
          <button
            onClick={() => handleBrandNavClick('Fixapro')}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              activeSection === 'catalogo' && selectedBrand === 'Fixapro'
                ? 'bg-pink-50 text-[#A8287F] font-bold border border-pink-200'
                : 'text-slate-800 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A8287F]"></span>
              <span>Catálogo Línea Fixapro®</span>
            </div>
            <span className="text-[10px] text-[#A8287F] font-bold bg-pink-100/70 px-2 py-0.5 rounded">
              Apósitos & Fijación
            </span>
          </button>
          <button
            onClick={() => handleBrandNavClick('Alveos')}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              activeSection === 'catalogo' && selectedBrand === 'Alveos'
                ? 'bg-blue-50 text-[#2066BA] font-bold border border-blue-200'
                : 'text-slate-800 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2066BA]"></span>
              <span>Catálogo Línea Alveos®</span>
            </div>
            <span className="text-[10px] text-[#2066BA] font-bold bg-blue-100/70 px-2 py-0.5 rounded">
              Respiratorio & Sondas
            </span>
          </button>
          <button
            onClick={() => handleNavClick('asistente-clinico')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Asistente de Selección Clínica
          </button>
          <button
            onClick={() => handleNavClick('mercado-publico')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Mercado Público & Licitaciones
          </button>
          <button
            onClick={() => handleNavClick('nosotros')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Sobre Genkimed SpA
          </button>
          <button
            onClick={() => handleNavClick('contacto')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Contacto & Casa Matriz
          </button>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://wa.me/56932539584?text=Hola%20Genkimed%20SpA,%20necesito%20cotizar%20insumos%20médicos%20Fixapro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 rounded-xl font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Ejecutivo Comercial
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
