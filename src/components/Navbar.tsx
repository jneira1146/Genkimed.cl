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
  MessageCircle,
  FileSpreadsheet,
  Package,
  Layers,
  Award,
  ChevronRight
} from 'lucide-react';
import { Product } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  onSelectProduct: (product: Product) => void;
  products: Product[];
  activePage: 'productos' | 'empresa';
  onNavigatePage: (page: 'productos' | 'empresa', subSection?: string) => void;
  selectedBrand?: 'all' | 'Fixapro' | 'Alveos';
  onNavigateBrand?: (brand: 'Fixapro' | 'Alveos') => void;
  onOpenQuickQuote?: () => void;
  quoteCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSelectProduct,
  products,
  activePage,
  onNavigatePage,
  selectedBrand = 'all',
  onNavigateBrand,
  onOpenQuickQuote,
  quoteCount = 0,
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

  const handleSelectSearchedProduct = (prod: Product) => {
    onNavigatePage('productos');
    onSelectProduct(prod);
    setSearchQuery('');
    setIsSearchFocused(false);
  };

  const handleBrandClick = (brand: 'Fixapro' | 'Alveos') => {
    onNavigatePage('productos');
    if (onNavigateBrand) {
      onNavigateBrand(brand);
    }
    setIsMobileMenuOpen(false);
  };

  const handlePageClick = (page: 'productos' | 'empresa', subSection?: string) => {
    onNavigatePage(page, subSection);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
      
      {/* Institutional Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3 overflow-hidden text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-semibold text-white whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Proveedor Habilitado Mercado Público</span>
            </span>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="text-slate-400 hidden md:inline truncate">
              Despacho prioritario 24/48h a hospitales y clínicas de todo Chile
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] shrink-0">
            <a 
              href="https://wa.me/56932539584?text=Hola%20Genkimed%20SpA,%20solicito%20atención%20comercial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">+56 9 3253 9584</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a 
              href="mailto:compras@genkimed.cl" 
              className="hidden sm:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>compras@genkimed.cl</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Brand Identity */}
          <div 
            className="flex items-center cursor-pointer select-none" 
            onClick={() => handlePageClick('empresa')}
            title="Ir a página de Nuestra Empresa - Genkimed SpA"
          >
            <Logo size="md" showSubtitle={true} />
          </div>

          {/* Live Search Bar for Products */}
          <div className="hidden md:block flex-1 max-w-xs xl:max-w-sm relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar apósito, sonda o medida..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 250)}
                className="w-full pl-9 pr-4 py-2 bg-slate-100 hover:bg-slate-100/90 focus:bg-white border border-slate-200 focus:border-[#7B37A0] rounded-xl text-xs transition-all focus:outline-none focus:ring-2 focus:ring-[#7B37A0]/20"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-[11px]"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* Autocomplete Dropdown */}
            {isSearchFocused && filteredSearchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 overflow-hidden divide-y divide-slate-100">
                <div className="p-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50">
                  Insumos sugeridos Fixapro® & Alveos®
                </div>
                {filteredSearchResults.map((prod) => (
                  <div
                    key={prod.id}
                    onMouseDown={() => handleSelectSearchedProduct(prod)}
                    className="p-3 hover:bg-purple-50/70 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <img 
                        src={prod.image} 
                        alt={prod.name} 
                        referrerPolicy="no-referrer"
                        className="w-9 h-9 object-contain bg-slate-50 rounded-lg p-1 border border-slate-200"
                      />
                      <div>
                        <p className="font-bold text-xs text-slate-900 leading-tight">{prod.name}</p>
                        <p className="text-[11px] text-slate-500">{prod.dimensions} • Caja x {prod.unitPerBox} un.</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-[#7B37A0] bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-md">
                      Ver Ficha
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PRIMARY 2-PAGE NAVIGATOR (Desktop) */}
          <nav className="hidden lg:flex items-center gap-2 text-xs font-bold">
            
            {/* 1. PRIMERO: NUESTRA EMPRESA */}
            <button
              onClick={() => handlePageClick('empresa')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border transition-all ${
                activePage === 'empresa'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
              }`}
            >
              <Building2 className={`w-3.5 h-3.5 ${activePage === 'empresa' ? 'text-emerald-400' : 'text-slate-500'}`} />
              <span>Nuestra Empresa</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-normal ${
                activePage === 'empresa' ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-500'
              }`}>
                ChileCompra
              </span>
            </button>

            {/* 2. SEGUNDO: INSUMOS MÉDICOS / PRODUCTOS */}
            <div className="flex items-center bg-slate-100/90 p-1 rounded-2xl border border-slate-200">
              <button
                onClick={() => handlePageClick('productos')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all ${
                  activePage === 'productos'
                    ? 'bg-white text-slate-950 font-black shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Package className={`w-3.5 h-3.5 ${activePage === 'productos' ? 'text-[#7B37A0]' : 'text-slate-400'}`} />
                <span>Insumos Médicos</span>
              </button>

              {/* Quick brand sub-filters */}
              <div className="flex items-center pl-1 border-l border-slate-200/80 my-0.5">
                <button
                  onClick={() => handleBrandClick('Fixapro')}
                  className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-all ${
                    activePage === 'productos' && selectedBrand === 'Fixapro'
                      ? 'bg-pink-100/80 text-[#A8287F]'
                      : 'text-slate-500 hover:text-[#A8287F]'
                  }`}
                  title="Filtrar por apósitos y cintas Fixapro"
                >
                  Fixapro®
                </button>
                <button
                  onClick={() => handleBrandClick('Alveos')}
                  className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-all ${
                    activePage === 'productos' && selectedBrand === 'Alveos'
                      ? 'bg-blue-100/80 text-[#2066BA]'
                      : 'text-slate-500 hover:text-[#2066BA]'
                  }`}
                  title="Filtrar por respiratorio y sondas Alveos"
                >
                  Alveos®
                </button>
              </div>
            </div>

          </nav>

          {/* Actions: Quick Quote Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-2">
            
            {onOpenQuickQuote && (
              <button
                onClick={onOpenQuickQuote}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] text-white font-extrabold text-xs shadow-md hover:opacity-95 transition-all hover:scale-[1.02] active:scale-95"
                title="Abrir cotizador de insumos médicos"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Cotizar</span>
                {quoteCount > 0 ? (
                  <span className="w-4 h-4 rounded-full bg-emerald-400 text-slate-950 font-black text-[10px] flex items-center justify-center shadow-xs">
                    {quoteCount}
                  </span>
                ) : null}
              </button>
            )}

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Mobile Search input */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar apósito, sonda o medida..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-100 rounded-xl text-xs border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#7B37A0]"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

      </div>

      {/* Mobile Drawer Menu (2 Pages Navigation) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          
          <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100 text-xs">
            <p className="font-extrabold text-[#7B37A0]">Genkimed SpA • Insumos Médicos</p>
            <p className="text-[11px] text-slate-600 mt-0.5">Distribución hospitalaria en todo Chile.</p>
          </div>

          <div className="space-y-1.5 text-xs font-bold">
            
            {/* TAB 1: EMPRESA (PRIMERO) */}
            <button
              onClick={() => handlePageClick('empresa')}
              className={`w-full flex items-center justify-between p-3.5 rounded-2xl border text-left transition-all ${
                activePage === 'empresa'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Building2 className={`w-4 h-4 ${activePage === 'empresa' ? 'text-emerald-400' : 'text-slate-600'}`} />
                <span>Nuestra Empresa</span>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${
                activePage === 'empresa' ? 'bg-slate-800 text-cyan-300' : 'bg-slate-100 text-slate-600'
              }`}>
                ChileCompra & Respaldo
              </span>
            </button>

            {/* TAB 2: PRODUCTOS (SEGUNDO) */}
            <div className="rounded-2xl border border-slate-200 p-2 bg-slate-50 space-y-1">
              <button
                onClick={() => handlePageClick('productos')}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all ${
                  activePage === 'productos'
                    ? 'bg-white text-slate-900 font-black shadow-xs border border-slate-200'
                    : 'text-slate-700 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#7B37A0]" />
                  <span>Insumos Médicos</span>
                </div>
                <span className="text-[10px] text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md font-bold">
                  Catálogo
                </span>
              </button>

              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <button
                  onClick={() => handleBrandClick('Fixapro')}
                  className="p-2 rounded-lg bg-white border border-slate-200 text-left text-[11px] text-slate-700 font-semibold flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#A8287F]"></span>
                  <span>Fixapro®</span>
                </button>

                <button
                  onClick={() => handleBrandClick('Alveos')}
                  className="p-2 rounded-lg bg-white border border-slate-200 text-left text-[11px] text-slate-700 font-semibold flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#2066BA]"></span>
                  <span>Alveos®</span>
                </button>
              </div>
            </div>

          </div>

          <div className="pt-2 border-t border-slate-100 space-y-2">
            <a
              href="https://wa.me/56932539584?text=Hola%20Genkimed%20SpA,%20necesito%20cotizar%20insumos%20médicos"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold text-xs shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Comercial Directo</span>
            </a>
          </div>

        </div>
      )}

    </header>
  );
};
