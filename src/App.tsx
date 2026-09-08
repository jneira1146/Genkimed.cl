import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CatalogSection } from './components/CatalogSection';
import { TrustSection } from './components/TrustSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { TechnicalDatasheetModal } from './components/TechnicalDatasheetModal';
import { QuoteFunnelModal } from './components/QuoteFunnelModal';
import { QuickQuoteBar } from './components/QuickQuoteBar';
import { PRODUCTS } from './data/products';
import { Product, ProductCategory, QuoteItem } from './types';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function App() {
  const [products] = useState<Product[]>(PRODUCTS);
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<Product | null>(null);
  const [selectedDatasheetProduct, setSelectedDatasheetProduct] = useState<Product | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Conversion Funnel State
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

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavigateBrand = (brand: 'Fixapro' | 'Alveos') => {
    setSelectedCatalogBrand(brand);
    setSelectedCategoryFilter('all');
    scrollToSection('catalogo');
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
    scrollToSection('catalogo');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white">
      
      {/* Navigation Bar with conversion trigger */}
      <Navbar
        onSelectProduct={(prod) => setSelectedDetailProduct(prod)}
        products={products}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        selectedBrand={selectedCatalogBrand}
        onNavigateBrand={handleNavigateBrand}
        onOpenQuickQuote={() => setIsQuoteFunnelOpen(true)}
        quoteCount={quoteItems.length}
      />

      {/* Main Funnel Flow */}
      <main className="flex-grow">
        
        {/* FUNNEL STEP 1: Hero & Needs Selection */}
        <Hero
          onExploreCatalog={() => {
            setSelectedCatalogBrand('all');
            setSelectedCategoryFilter('all');
            scrollToSection('catalogo');
          }}
          onSelectCategoryFilter={handleSelectCategoryFromHero}
          onOpenQuickQuote={() => setIsQuoteFunnelOpen(true)}
          featuredProducts={products.filter((p) => p.featured)}
        />

        {/* FUNNEL STEP 2: Agile Product Selection Catalog */}
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

        {/* INSTITUTIONAL TRUST & GUARANTEES: Compact & high credibility */}
        <TrustSection onOpenQuickQuote={() => setIsQuoteFunnelOpen(true)} />

        {/* FUNNEL STEP 3: Institutional Conversion & Quote Request */}
        <ContactSection
          quoteItems={quoteItems}
          onOpenQuickQuote={() => setIsQuoteFunnelOpen(true)}
        />

      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} onNavigateBrand={handleNavigateBrand} />

      {/* STICKY BOTTOM QUOTE BAR (When user has selected items) */}
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
