import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  Search, 
  ShieldCheck, 
  Sparkles, 
  Tag, 
  Download, 
  SlidersHorizontal,
  ChevronRight,
  HeartPulse,
  Bandage,
  Activity,
  ShieldAlert,
  BriefcaseMedical,
  LayoutGrid,
  Percent,
  Wind,
  Pipette,
  Play,
  Layers
} from 'lucide-react';
import { Product, ProductCategory, CategoryInfo, QuoteItem, ProductBrand } from '../types';
import { CATEGORIES } from '../data/products';
import { ProductCard } from './ProductCard';
import { Ver3VideoBanner } from './Ver3VideoBanner';

interface CatalogSectionProps {
  products: Product[];
  selectedBrand?: ProductBrand;
  onBrandChange?: (brand: ProductBrand) => void;
  selectedCategory?: ProductCategory;
  onSelectCategory?: (category: ProductCategory) => void;
  onSelectProduct: (product: Product) => void;
  onOpenDatasheet: (product: Product) => void;
  onAddToQuote?: (product: Product) => void;
  onOpenVideo?: (product: Product) => void;
  onOpenImage?: (product: Product, initialImageSrc?: string) => void;
  quoteItems?: QuoteItem[];
  onOpenQuickQuote?: () => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  products,
  selectedBrand: controlledBrand,
  onBrandChange,
  selectedCategory: controlledCategory,
  onSelectCategory,
  onSelectProduct,
  onOpenDatasheet,
  onAddToQuote,
  onOpenVideo,
  onOpenImage,
  quoteItems = [],
  onOpenQuickQuote,
}) => {
  const [internalBrand, setInternalBrand] = useState<ProductBrand>('all');
  const selectedBrand = controlledBrand !== undefined ? controlledBrand : internalBrand;

  const [internalCategory, setInternalCategory] = useState<ProductCategory>('all');
  const selectedCategory = controlledCategory !== undefined ? controlledCategory : internalCategory;

  const setSelectedCategory = (cat: ProductCategory) => {
    setInternalCategory(cat);
    onSelectCategory?.(cat);
  };

  const handleBrandSelect = (brand: ProductBrand) => {
    setInternalBrand(brand);
    onBrandChange?.(brand);
    if (brand === 'Ossyn' || brand === 'Columna' || brand === 'Ver3' || brand === 'Unomis' || brand === 'OpenPed') {
      setSelectedCategory('spine_surgery');
    } else if (brand === 'Alveos' && selectedCategory !== 'all' && selectedCategory !== 'respiratory' && selectedCategory !== 'nebulizers') {
      setSelectedCategory('all');
    } else if (brand === 'Fixapro' && (selectedCategory === 'respiratory' || selectedCategory === 'nebulizers' || selectedCategory === 'spine_surgery')) {
      setSelectedCategory('all');
    }
  };

  const handleCategorySelect = (catId: ProductCategory) => {
    setSelectedCategory(catId);
    if (catId === 'spine_surgery') {
      if (selectedBrand === 'Fixapro' || selectedBrand === 'Alveos') {
        setInternalBrand('Columna');
        onBrandChange?.('Columna');
      }
    } else if (catId === 'respiratory' || catId === 'nebulizers') {
      if (selectedBrand === 'Fixapro' || selectedBrand === 'Columna' || selectedBrand === 'Ver3' || selectedBrand === 'Unomis' || selectedBrand === 'OpenPed') {
        setInternalBrand('all');
        onBrandChange?.('all');
      }
    } else if (catId !== 'all') {
      if (selectedBrand === 'Alveos' || selectedBrand === 'Columna' || selectedBrand === 'Ver3' || selectedBrand === 'Unomis' || selectedBrand === 'OpenPed') {
        setInternalBrand('all');
        onBrandChange?.('all');
      }
    }
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'name'>('featured');
  const [onlyInStock, setOnlyInStock] = useState(false);

  // Filter & Sort logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Brand filter
      if (selectedBrand === 'Fixapro' && !product.brand.toLowerCase().includes('fixapro')) {
        return false;
      }
      if (selectedBrand === 'Alveos' && !product.brand.toLowerCase().includes('alveos')) {
        return false;
      }
      if (
        (selectedBrand === 'Ossyn' || selectedBrand === 'Columna' || selectedBrand === 'Ver3' || selectedBrand === 'Unomis' || selectedBrand === 'OpenPed') &&
        !(
          product.category === 'spine_surgery' ||
          product.brand.toLowerCase().includes('ossyn') ||
          product.brand.toLowerCase().includes('columna') ||
          product.brand.toLowerCase().includes('ver3') ||
          product.brand.toLowerCase().includes('unomis') ||
          product.brand.toLowerCase().includes('openped')
        )
      ) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Stock filter
      if (onlyInStock && !product.inStock) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesDim = product.dimensions.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        return matchesName || matchesDesc || matchesDim || matchesBrand;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      // default: featured first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [products, selectedBrand, selectedCategory, searchQuery, sortBy, onlyInStock]);

  const getCategoryIcon = (id: ProductCategory) => {
    switch (id) {
      case 'nebulizers': return Wind;
      case 'respiratory': return Pipette;
      case 'urology_tubes': return Pipette;
      case 'iv_fixation': return ShieldCheck;
      case 'wound_care': return HeartPulse;
      case 'tapes': return Bandage;
      case 'bandages': return Activity;
      case 'ppe_safety': return ShieldAlert;
      case 'antisepsis': return Sparkles;
      case 'first_aid': return BriefcaseMedical;
      default: return LayoutGrid;
    }
  };

  return (
    <section id="catalogo" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 text-[#7B37A0] text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#A8287F]" />
              Catálogo Oficial Genkimed Medical Solutions • Distribución Nacional
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Insumos Médicos <span className="text-[#A8287F]">Fixapro®</span> & <span className="text-[#2066BA]">Alveos®</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-2xl">
              Dispositivos médicos certificados de alta calidad, abarcando terapia respiratoria y sondas de aspiración Alveos®, y apósitos avanzados, fijación vascular y cintas quirúrgicas Fixapro®.
            </p>
          </div>

          {/* Availability / Catalog indicator */}
          <div className="flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-2 rounded-2xl shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-700">Stock Institucional Disponible</span>
          </div>
        </div>

        {/* Brand Selector Filter Tabs */}
        <div className="flex items-center gap-2 mb-4 bg-slate-200/70 p-1.5 rounded-2xl w-fit flex-wrap">
          <button
            onClick={() => handleBrandSelect('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedBrand === 'all'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Todas las Líneas ({products.length})
          </button>
          <button
            onClick={() => handleBrandSelect('Fixapro')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedBrand === 'Fixapro'
                ? 'bg-gradient-to-r from-[#A8287F] to-[#7B37A0] text-white shadow-sm'
                : 'text-slate-600 hover:text-[#A8287F]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-pink-300"></span>
            Línea Fixapro® (Apósitos & Curación)
          </button>
          <button
            onClick={() => handleBrandSelect('Alveos')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedBrand === 'Alveos'
                ? 'bg-gradient-to-r from-[#7B37A0] to-[#2066BA] text-white shadow-sm'
                : 'text-slate-600 hover:text-[#2066BA]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-blue-300"></span>
            Línea Alveos® (Respiratorio & Sondas)
          </button>
          <button
            onClick={() => handleBrandSelect('Ossyn')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedBrand === 'Ossyn' || selectedBrand === 'Columna' || selectedBrand === 'Ver3' || selectedBrand === 'Unomis' || selectedBrand === 'OpenPed'
                ? 'bg-gradient-to-r from-slate-900 via-purple-950 to-slate-950 text-white border border-purple-500/40 shadow-sm'
                : 'text-slate-600 hover:text-purple-700'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 via-emerald-400 to-purple-400 animate-pulse"></span>
            <span>Línea Ossyn (Ver3®, Unomis® & OpenPed®)</span>
            <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-950 border border-amber-500 ml-0.5">
              Próximamente
            </span>
          </button>
        </div>

        {/* Category Filter Pills (Horizontal scrolling on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] border-transparent text-white shadow-md shadow-purple-900/20'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                {cat.image ? (
                  <img 
                    src={cat.image} 
                    alt={cat.shortLabel} 
                    referrerPolicy="no-referrer"
                    className={`w-6 h-6 rounded-md object-cover border shrink-0 ${
                      isSelected ? 'border-white/60' : 'border-slate-200 bg-white'
                    }`} 
                  />
                ) : (
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                )}
                <span>{cat.shortLabel}</span>
                {cat.badge && (
                  <span className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-amber-300 text-slate-950' : 'bg-amber-100 text-amber-900 border border-amber-300'
                  }`}>
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Category Banner if filtered */}
        {selectedCategory !== 'all' && (() => {
          const currentCat = CATEGORIES.find(c => c.id === selectedCategory);
          if (!currentCat) return null;
          return (
            <div className={`border rounded-2xl p-4 sm:p-5 mb-8 shadow-sm flex flex-col md:flex-row items-center gap-5 ${
              currentCat.id === 'spine_surgery' || currentCat.id === 'ver3_spine'
                ? 'bg-gradient-to-br from-slate-900 via-purple-950/90 to-slate-950 text-white border-purple-500/30'
                : 'bg-white border-slate-200/90'
            }`}>
              {currentCat.image && (
                <div className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden ${
                  currentCat.id === 'spine_surgery' || currentCat.id === 'ver3_spine' ? 'bg-slate-900 border-purple-500/40 p-1.5' : 'bg-slate-950 border-slate-200'
                } border shadow-2xs shrink-0 flex items-center justify-center`}>
                  <img 
                    src={currentCat.image} 
                    alt={currentCat.label} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain" 
                  />
                  <div className="absolute top-1 left-1">
                    <span className={`text-[8px] font-black uppercase px-1.5 py-0.5 rounded ${
                      currentCat.id === 'spine_surgery' || currentCat.id === 'ver3_spine'
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-[#7B37A0] text-white'
                    }`}>
                      {currentCat.badge || 'Oficial'}
                    </span>
                  </div>
                </div>
              )}
              <div className="flex-1 text-center md:text-left space-y-1.5">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                    currentCat.id === 'spine_surgery' || currentCat.id === 'ver3_spine'
                      ? 'text-purple-200 bg-purple-900/60 border-purple-400/40 font-black'
                      : 'text-[#7B37A0] bg-purple-50 border-purple-100'
                  }`}>
                    {currentCat.id === 'spine_surgery' ? '★ Línea Quirúrgica de Columna' : 'Categoría Destacada'}
                  </span>
                  {currentCat.id === 'spine_surgery' && (
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-500/40 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      Ver3® Vertres, Unomis® MISS & OpenPed®
                    </span>
                  )}
                  {selectedCategory === 'wound_care' && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      3 Formatos en Caja Oficial
                    </span>
                  )}
                  {selectedCategory === 'iv_fixation' && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                      Línea Vascular con Caja Oficial
                    </span>
                  )}
                </div>
                <h3 className={`text-base sm:text-lg font-black ${
                  currentCat.id === 'spine_surgery' ? 'text-white' : 'text-slate-900'
                }`}>
                  {currentCat.label}
                </h3>
                <p className={`text-xs max-w-3xl leading-relaxed ${
                  currentCat.id === 'spine_surgery' ? 'text-purple-100/90' : 'text-slate-600'
                }`}>
                  {currentCat.description}
                </p>
                {(selectedCategory === 'spine_surgery' || selectedCategory === 'ver3_spine' || selectedCategory === 'unomis_spine' || selectedCategory === 'openped_spine') && (() => {
                  const ver3Product = products.find(p => p.brand.toLowerCase().includes('ver3') || p.id.includes('ver3'));
                  const unomisProduct = products.find(p => p.brand.toLowerCase().includes('unomis') || p.id.includes('unomis'));
                  const openpedProduct = products.find(p => p.brand.toLowerCase().includes('openped') || p.id.includes('openped'));
                  return (
                    <div className="pt-2 space-y-2">
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-[11px]">
                        <span className="bg-amber-500/20 border border-amber-400/50 text-amber-200 px-2.5 py-1 rounded-lg font-bold flex items-center gap-1.5">
                          <strong className="text-amber-300">Ver3® Vertres:</strong> Implante Expansible Ti-6Al-4V ELI + Cemento PMMA (T6-L5)
                          <span className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 border border-amber-500 ml-1">
                            Próximamente
                          </span>
                        </span>
                        <span className="bg-emerald-500/20 border border-emerald-400/50 text-emerald-200 px-2.5 py-1 rounded-lg font-bold flex items-center gap-1.5">
                          <strong className="text-emerald-300">Unomis® MISS:</strong> Tornillos Ø 5.0-7.0 mm (Incisión 1.8 mm) + Barras Bullet Ø 5.5 mm
                          <span className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 border border-amber-500 ml-1">
                            Próximamente
                          </span>
                        </span>
                        <span className="bg-purple-500/20 border border-purple-400/50 text-purple-200 px-2.5 py-1 rounded-lg font-bold flex items-center gap-1.5">
                          <strong className="text-purple-300">OpenPed®:</strong> Tornillos Canulados Ø 4.5-6.0 mm (Aletas Reducción + PMMA) + Cross Link + Barras 5.5 mm
                          <span className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 border border-amber-500 ml-1">
                            Próximamente
                          </span>
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
                        {ver3Product && onOpenVideo && (
                          <button
                            type="button"
                            onClick={() => onOpenVideo(ver3Product)}
                            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                          >
                            <Play className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                            <span>Video Ver3® Vertres</span>
                          </button>
                        )}
                        {unomisProduct && onOpenVideo && (
                          <button
                            type="button"
                            onClick={() => onOpenVideo(unomisProduct)}
                            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                          >
                            <Play className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                            <span>Video Unomis® MISS CBT</span>
                          </button>
                        )}
                        {openpedProduct && (
                          <button
                            type="button"
                            onClick={() => onSelectProduct(openpedProduct)}
                            className="bg-purple-600 hover:bg-purple-500 text-white font-black px-3 py-1 rounded-lg text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                          >
                            <Layers className="w-3.5 h-3.5 text-amber-400" />
                            <span>Ver Ficha OpenPed®</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })()}
                {selectedCategory === 'wound_care' && (
                  <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-2 text-[11px]">
                    <span className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-semibold text-slate-800">
                      <strong className="text-[#7B37A0]">10x12 cm:</strong> Caja x50 uds (REF 20-008)
                    </span>
                    <span className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-semibold text-slate-800">
                      <strong className="text-[#7B37A0]">10x25 cm:</strong> Caja x30 uds (REF 20-010)
                    </span>
                    <span className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-semibold text-slate-800">
                      <strong className="text-[#7B37A0]">6x7 cm:</strong> Caja x100 uds (REF 20-007)
                    </span>
                  </div>
                )}
                {selectedCategory === 'iv_fixation' && (
                  <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-2 text-[11px]">
                    <span className="bg-cyan-50 border border-cyan-300 text-cyan-900 px-2 py-0.5 rounded font-bold">
                      <strong className="text-cyan-800">8.5x11.5 cm CHG:</strong> Caja x25 uds (Cód. 55432)
                    </span>
                    <span className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-semibold text-slate-800">
                      <strong className="text-cyan-700">8.5x11.5 cm CVC:</strong> Caja x50 uds (REF 20-001)
                    </span>
                    <span className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-semibold text-slate-800">
                      <strong className="text-cyan-700">5.0x5.7 cm:</strong> Caja x100 uds (REF 20-002)
                    </span>
                    <span className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-semibold text-slate-800">
                      <strong className="text-cyan-700">6.5x7.0 cm:</strong> Caja x100 uds (REF 20-005)
                    </span>
                  </div>
                )}
                {(selectedCategory === 'iv_fixation' || selectedCategory === 'wound_care') && (
                  <p className="text-[10px] text-slate-500 italic pt-0.5">
                    * Nota informativa: Las imágenes de apósitos exhibidas son de carácter referencial e ilustrativo.
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelectedCategory('all')}
                className="text-xs text-slate-500 hover:text-slate-800 underline underline-offset-2 shrink-0"
              >
                Ver todo el catálogo
              </button>
            </div>
          );
        })()}

        {/* Search & Sort Controls Toolbar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Inner Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por nombre, medidas, sonda o apósito..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-semibold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sort and Filters */}
          <div className="flex items-center flex-wrap gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
              <span>Ordenar:</span>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              >
                <option value="featured">Destacados Clínicos</option>
                <option value="name">Nombre Alfabético</option>
              </select>
            </div>

            <div className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'} encontrados
            </div>
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const quoteItem = quoteItems?.find((item) => item.productId === product.id);
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelectProduct={onSelectProduct}
                  onOpenDatasheet={onOpenDatasheet}
                  onAddToQuote={onAddToQuote}
                  onOpenVideo={onOpenVideo}
                  onOpenImage={onOpenImage}
                  isInQuote={Boolean(quoteItem)}
                  quoteQuantity={quoteItem?.quantityBoxes || 0}
                />
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800">No se encontraron insumos</h3>
            <p className="text-xs text-slate-500 mt-1">
              Prueba modificando el término de búsqueda o cambiando la línea de producto seleccionada.
            </p>
            <button
              onClick={() => {
                handleBrandSelect('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-cyan-700 text-white rounded-xl text-xs font-bold hover:bg-cyan-800 transition-colors"
            >
              Restablecer Filtros
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
