import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CatalogSection } from './components/CatalogSection';
import { ClinicalRecommender } from './components/ClinicalRecommender';
import { MercadoPublicoSection } from './components/MercadoPublicoSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { TechnicalDatasheetModal } from './components/TechnicalDatasheetModal';
import { PRODUCTS } from './data/products';
import { Product } from './types';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function App() {
  const [products] = useState<Product[]>(PRODUCTS);
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<Product | null>(null);
  const [selectedDatasheetProduct, setSelectedDatasheetProduct] = useState<Product | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Scroll listener for top button and active section
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

  const [selectedCatalogBrand, setSelectedCatalogBrand] = useState<'all' | 'Fixapro' | 'Alveos'>('all');

  const handleNavigateBrand = (brand: 'Fixapro' | 'Alveos') => {
    setSelectedCatalogBrand(brand);
    scrollToSection('catalogo');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white">
      
      {/* Navigation Bar */}
      <Navbar
        onSelectProduct={(prod) => setSelectedDetailProduct(prod)}
        products={products}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        selectedBrand={selectedCatalogBrand}
        onNavigateBrand={handleNavigateBrand}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero
          onExploreCatalog={() => {
            setSelectedCatalogBrand('all');
            scrollToSection('catalogo');
          }}
          onSelectFeaturedProduct={(prod) => setSelectedDetailProduct(prod)}
          featuredProducts={products.filter((p) => p.featured)}
        />

        <CatalogSection
          products={products}
          selectedBrand={selectedCatalogBrand}
          onBrandChange={setSelectedCatalogBrand}
          onSelectProduct={(prod) => setSelectedDetailProduct(prod)}
          onOpenDatasheet={(prod) => setSelectedDatasheetProduct(prod)}
        />

        <ClinicalRecommender
          products={products}
          onSelectProduct={(prod) => setSelectedDetailProduct(prod)}
        />

        <MercadoPublicoSection />

        <AboutSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} onNavigateBrand={handleNavigateBrand} />

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
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/56932539584?text=Hola%20Genkimed%20SpA,%20necesito%20información%20sobre%20insumos%20médicos%20Fixapro%20y%20Alveos"
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
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-2xl shadow-2xl border border-cyan-500/50 flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
