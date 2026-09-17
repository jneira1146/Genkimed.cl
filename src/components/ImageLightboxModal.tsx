import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2,
  Info,
  Layers,
  Sparkles
} from 'lucide-react';

export interface LightboxImageItem {
  src: string;
  title: string;
  subtitle?: string;
  badge?: string;
  brand?: string;
  category?: string;
}

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: LightboxImageItem[];
  initialIndex?: number;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Sync initial index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(Math.max(0, Math.min(initialIndex, images.length - 1)));
      setZoomLevel(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen, initialIndex, images.length]);

  // Keyboard navigation & shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && images.length > 1) {
        handleNext();
      } else if (e.key === 'ArrowLeft' && images.length > 1) {
        handlePrev();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-' || e.key === '_') {
        handleZoomOut();
      } else if (e.key === '0') {
        handleResetZoom();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, zoomLevel]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex] || images[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Drag pan handlers when zoomed in
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoomLevel <= 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col bg-slate-950/95 backdrop-blur-md text-white select-none animate-fadeIn"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Top Controls Header */}
      <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0 z-10">
        <div className="flex items-center gap-3 min-w-0">
          {currentItem.brand && (
            <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded shadow-sm shrink-0 ${
              currentItem.brand.toLowerCase().includes('ver3')
                ? 'bg-amber-500 text-slate-950'
                : currentItem.brand.includes('Fixapro')
                  ? 'bg-[#A8287F] text-white'
                  : 'bg-[#2066BA] text-white'
            }`}>
              {currentItem.brand}
            </span>
          )}

          <div className="min-w-0">
            <h3 className="text-sm sm:text-base font-black text-white truncate flex items-center gap-2">
              <span>{currentItem.title}</span>
              {images.length > 1 && (
                <span className="text-[11px] font-mono text-slate-400 font-normal">
                  ({currentIndex + 1} de {images.length})
                </span>
              )}
            </h3>
            {currentItem.subtitle && (
              <p className="text-xs text-slate-400 truncate">
                {currentItem.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Toolbar buttons */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Zoom controls */}
          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-1">
            <button
              type="button"
              onClick={handleZoomOut}
              disabled={zoomLevel <= 1}
              className="p-1.5 rounded hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              title="Reducir zoom (-)"
            >
              <ZoomOut className="w-4 h-4" />
            </button>

            <span className="text-[11px] font-mono font-bold px-1.5 text-amber-400 min-w-[42px] text-center">
              {Math.round(zoomLevel * 100)}%
            </span>

            <button
              type="button"
              onClick={handleZoomIn}
              disabled={zoomLevel >= 3.5}
              className="p-1.5 rounded hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              title="Aumentar zoom (+)"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            {zoomLevel > 1 && (
              <button
                type="button"
                onClick={handleResetZoom}
                className="p-1.5 rounded hover:bg-slate-800 text-amber-400 cursor-pointer"
                title="Restablecer tamaño (0)"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Fullscreen button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
            title={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 hover:bg-red-950/80 border border-slate-800 hover:border-red-800 text-slate-300 hover:text-white cursor-pointer ml-1"
            title="Cerrar visor (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div 
        className="flex-1 relative flex items-center justify-center overflow-hidden p-2 sm:p-6"
        onClick={(e) => {
          // If clicked on backdrop, close
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
        onMouseMove={handleMouseMove}
      >
        {/* Previous Image Arrow */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-amber-500 border border-slate-700 hover:border-amber-400 text-white hover:text-slate-950 flex items-center justify-center shadow-2xl transition-all cursor-pointer hover:scale-105 active:scale-95"
            title="Imagen anterior (←)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Display Image */}
        <div 
          className="relative max-w-full max-h-full flex items-center justify-center"
          onMouseDown={handleMouseDown}
          style={{
            cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
          }}
          onClick={() => {
            if (zoomLevel === 1) {
              handleZoomIn();
            }
          }}
        >
          <img
            key={currentItem.src}
            src={currentItem.src}
            alt={currentItem.title}
            referrerPolicy="no-referrer"
            draggable={false}
            className="max-h-[75vh] sm:max-h-[82vh] max-w-[92vw] object-contain rounded-xl shadow-2xl transition-transform duration-100 ease-out pointer-events-auto bg-white/5 border border-white/10"
            style={{
              transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
            }}
          />
        </div>

        {/* Next Image Arrow */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 sm:right-6 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-amber-500 border border-slate-700 hover:border-amber-400 text-white hover:text-slate-950 flex items-center justify-center shadow-2xl transition-all cursor-pointer hover:scale-105 active:scale-95"
            title="Siguiente imagen (→)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Zoom Instructions Tip */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <span className="bg-slate-900/90 text-slate-400 text-[11px] px-3 py-1 rounded-full border border-slate-800 shadow-md backdrop-blur-xs flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-amber-400" />
            {zoomLevel > 1 ? 'Arrastra con el ratón para desplazar la imagen' : 'Haz clic sobre la imagen para ampliar zoom'}
          </span>
        </div>
      </div>

      {/* Bottom Thumbnail Strip (if multiple images) */}
      {images.length > 1 && (
        <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800 flex items-center justify-center gap-2 overflow-x-auto shrink-0 z-10">
          <div className="flex items-center gap-2 max-w-full">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setCurrentIndex(idx);
                  setZoomLevel(1);
                  setPosition({ x: 0, y: 0 });
                }}
                className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all p-0.5 bg-slate-900 shrink-0 cursor-pointer ${
                  currentIndex === idx
                    ? 'border-amber-500 ring-2 ring-amber-500/50 scale-105'
                    : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                }`}
                title={img.title}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain rounded bg-white/5"
                />
                <span className="absolute bottom-0.5 right-1 text-[9px] font-mono font-black text-amber-300 bg-black/70 px-1 rounded">
                  {idx + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
