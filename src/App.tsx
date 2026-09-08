import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CatalogSection } from './components/CatalogSection';
import { CompanyPage } from './components/CompanyPage';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { TechnicalDatasheetModal } from './components/TechnicalDatasheetModal';
import { QuoteFunnelModal } from './components/QuoteFunnelModal';
import { QuickQuoteBar } from './components/QuickQuoteBar';
import { PRODUCTS } from './data/products';
import { Product, ProductCategory, QuoteItem } from './types';
import { MessageCircle, ArrowUp, Building2, ArrowRight, ShieldCheck, FileSpreadsheet } from 'lucide-react';

export default function App() {
  const [products] = useState<Product[]>(PRODUCTS);
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<Product | null>(null);
  const [selectedDatasheetProduct, setSelectedDatasheetProduct] = useState<Product | null>(null);
  
  // 2 Distinct Pages: 'empresa' | 'productos' (Nuestra Empresa is primary)
  const [activePage, setActivePage] = useState<'empresa' | 'productos'>(() => {
    try {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('producto') || hash.includes('catalogo') || hash.includes('insumo')) {
        return 'productos';
      }
    } catch {}
    return 'empresa';
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Conversion Funnel State (Persistent across both pages)
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>(() => {
    try {
      const saved = localStorage.getItem('genkimed_quote_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isQuoteFunnelOpen, setIsQuoteFunnelOpen] = useState(false);
  const [selectedCatalogBrand, setSelectedCatalogBrand] = useState<'all' | 'Fixapro' | 'Alveos'>('all');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<ProductCategory>('all');

  // Hash change synchronization for browser history (back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('producto') || hash.includes('catalogo') || hash.includes('insumo')) {
        setActivePage('productos');
      } else {
        setActivePage('empresa');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll listener for top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleNavigatePage = (page: 'productos' | 'empresa', subSection?: string) => {
    setActivePage(page);
    try {
      window.location.hash = page === 'empresa' ? '#empresa' : '#productos';
    } catch {}
    
    if (subSection) {
      setTimeout(() => {
        const el = document.getElementById(subSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateBrand = (brand: 'Fixapro' | 'Alveos') => {
    setActivePage('productos');
    setSelectedCatalogBrand(brand);
    setSelectedCategoryFilter('all');
    try {
      window.location.hash = '#productos';
    } catch {}
    setTimeout(() => {
      const el = document.getElementById('catalogo');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  // Funnel Actions
  const handleAddToQuote = (product: Product) => {
    setQuoteItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.productId === product.id);
      let updated: QuoteItem[];
      if (existingIndex >= 0) {
        updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantityBoxes: updated[existingIndex].quantityBoxes + 1,
        };
      } else {
        updated = [
          ...prev,
          {
            productId: product.id,
            productName: product.name,
            brand: product.brand,
            dimensions: product.dimensions,
            unitPerBox: product.unitPerBox,
            quantityBoxes: 1,
            image: product.image,
          },
        ];
      }
      try {
        localStorage.setItem('genkimed_quote_items', JSON.stringify(updated));
      } catch {}
      return updated;
    });
    showToast(`✓ Insumo agregado a cotización: ${product.name}`);
  };

  const handleUpdateQuoteQuantity = (productId: string, quantity: number) => {
    setQuoteItems((prev) => {
      let updated: QuoteItem[];
      if (quantity <= 0) {
        updated = prev.filter((i) => i.productId !== productId);
      } else {
        updated = prev.map((i) =>
          i.productId === productId ? { ...i, quantityBoxes: quantity } : i
        );
      }
      try {
        localStorage.setItem('genkimed_quote_items', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleRemoveQuoteItem = (productId: string) => {
    setQuoteItems((prev) => {
      const updated = prev.filter((i) => i.productId !== productId);
      try {
        localStorage.setItem('genkimed_quote_items', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleClearQuote = () => {
    setQuoteItems([]);
    try {
      localStorage.removeItem('genkimed_quote_items');
    } catch {}
    showToast('Lista de cotización vaciada');
  };

  const handleSelectCategoryFromHero = (cat: ProductCategory) => {
    setSelectedCategoryFilter(cat);
    if (cat === 'respiratory' || cat === 'nebulizers') {
      setSelectedCatalogBrand('Alveos');
    } else {
      setSelectedCatalogBrand('Fixapro');
    }
    const el = document.getElementById('catalogo');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white">
      
      {/* Dynamic 2-Page Navigation Bar */}
      <Navbar
        onSelectProduct={(prod) => {
          setActivePage('productos');
          setSelectedDetailProduct(prod);
        }}
        products={products}
        activePage={activePage}
        onNavigatePage={handleNavigatePage}
        selectedBrand={selectedCatalogBrand}
        onNavigateBrand={handleNavigateBrand}
        onOpenQuickQuote={() => setIsQuoteFunnelOpen(true)}
        quoteCount={quoteItems.length}
      />

      {/* RENDER ACTIVE PAGE */}
      <main className="flex-grow">
        
        {/* ==================================================== */}
        {/* PÁGINA 1: CATÁLOGO DE PRODUCTOS E INSUMOS MÉDICOS     */}
        {/* ==================================================== */}
        {activePage === 'productos' ? (
          <div className="animate-fadeIn">
            {/* Hero de Insumos */}
            <Hero
              onExploreCatalog={() => {
                setSelectedCatalogBrand('all');
                setSelectedCategoryFilter('all');
                const el = document.getElementById('catalogo');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onSelectCategoryFilter={handleSelectCategoryFromHero}
              onOpenQuickQuote={() => setIsQuoteFunnelOpen(true)}
              featuredProducts={products.filter((p) => p.featured)}
            />

            {/* Catálogo de Productos */}
            <CatalogSection
              products={products}
              selectedBrand={selectedCatalogBrand}
              onBrandChange={setSelectedCatalogBrand}
              selectedCategory={selectedCategoryFilter}
              onSelectCategory={setSelectedCategoryFilter}
              onSelectProduct={(prod) => setSelectedDetailProduct(prod)}
              onOpenDatasheet={(prod) => setSelectedDatasheetProduct(prod)}
              onAddToQuote={handleAddToQuote}
              quoteItems={quoteItems}
              onOpenQuickQuote={() => setIsQuoteFunnelOpen(true)}
            />

            {/* Banner Conector a la Página de la Empresa */}
            <section className="py-12 bg-white border-t border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center md:text-left">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-900/60 border border-cyan-500/40 text-cyan-300 text-xs font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Respaldo y Certificación Institucional</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black">
                      ¿Necesita antecedentes de <span className="bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] bg-clip-text text-transparent">Genkimed SpA</span> para su Orden de Compra?
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                      Conozca nuestro registro de proveedor habilitado en Mercado Público (ChileCompra), certificaciones de calidad ISO 13485 / CE y despacho express desde nuestra bodega central en Santiago.
                    </p>
                  </div>

                  <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => handleNavigatePage('empresa')}
                      className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 hover:scale-[1.02]"
                    >
                      <Building2 className="w-4 h-4 text-[#7B37A0]" />
                      <span>Ver Información de la Empresa</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => setIsQuoteFunnelOpen(true)}
                      className="px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
                    >
                      <FileSpreadsheet className="w-4 h-4" />
                      <span>Cotizar Ahora</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          /* ==================================================== */
          /* PÁGINA 2: NUESTRA COMPAÑÍA / EMPRESA GENKIMED SpA   */
          /* ==================================================== */
          <CompanyPage
            onNavigateToProducts={(brand) => {
              if (brand) {
                handleNavigateBrand(brand);
              } else {
                handleNavigatePage('productos');
              }
            }}
            onOpenQuickQuote={() => setIsQuoteFunnelOpen(true)}
            quoteItems={quoteItems}
          />
        )}

      </main>

      {/* Global Footer (Supports 2-Page navigation) */}
      <Footer 
        onNavigatePage={handleNavigatePage} 
        onNavigateBrand={handleNavigateBrand} 
      />

      {/* STICKY BOTTOM QUOTE BAR (When user has selected items, visible across both pages) */}
      <QuickQuoteBar
        quoteItems={quoteItems}
        onOpenFunnel={() => setIsQuoteFunnelOpen(true)}
        onClearQuote={handleClearQuote}
      />

      {/* 3-STEP CONVERSION FUNNEL MODAL */}
      <QuoteFunnelModal
        isOpen={isQuoteFunnelOpen}
        onClose={() => setIsQuoteFunnelOpen(false)}
        quoteItems={quoteItems}
        onUpdateQuantity={handleUpdateQuoteQuantity}
        onRemoveItem={handleRemoveQuoteItem}
        onClearQuote={handleClearQuote}
        onAddQuickProduct={handleAddToQuote}
        allProducts={products}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedDetailProduct}
        onClose={() => setSelectedDetailProduct(null)}
        onOpenDatasheet={(prod) => setSelectedDatasheetProduct(prod)}
      />

      {/* Technical Datasheet Printable Modal */}
      <TechnicalDatasheetModal
        product={selectedDatasheetProduct}
        onClose={() => setSelectedDatasheetProduct(null)}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2.5">
        
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/56932539584?text=Hola%20Genkimed%20SpA,%20necesito%20cotizar%20insumos%20médicos%20Fixapro%20y%20Alveos"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl text-xs font-black transition-all hover:scale-105 active:scale-95"
          title="Contactar por WhatsApp a Genkimed SpA"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp Ejecutivo</span>
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2.5 bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full shadow-lg border border-slate-700 transition-all"
            title="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-2xl shadow-2xl border border-purple-500/50 flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
