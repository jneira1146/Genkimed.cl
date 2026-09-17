import React from 'react';
import { Play, Sparkles, Clock, CheckCircle2, Video, ChevronRight, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface Ver3VideoBannerProps {
  product: Product;
  onOpenVideo: () => void;
  className?: string;
  variant?: 'compact' | 'full';
}

export const Ver3VideoBanner: React.FC<Ver3VideoBannerProps> = ({
  product,
  onOpenVideo,
  className = '',
  variant = 'full'
}) => {
  const videoInfo = product.videoInfo || {
    title: 'Vertres - Sistema de Expansión Tridimensional Intracorporal MIS',
    subtitle: 'Video quirúrgico oficial y técnica para restauración anatómica de fracturas por compresión vertebral (VCF)',
    duration: '03:16 min',
    author: 'MaffHealth / Ossyn',
    chapters: []
  };

  const thumbnail = product.image || videoInfo.chapters?.[0]?.image;

  if (variant === 'compact') {
    return (
      <div 
        onClick={onOpenVideo}
        className={`relative overflow-hidden rounded-xl border border-amber-500/40 bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/40 p-3 flex items-center justify-between gap-3 cursor-pointer group hover:border-amber-400 transition-all shadow-md ${className}`}
      >
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-slate-950 border border-amber-500/50 shrink-0 flex items-center justify-center">
            {thumbnail && (
              <img 
                src={thumbnail} 
                alt="Ver3 Video Thumbnail" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
              />
            )}
            <div className="absolute inset-0 bg-slate-950/50 flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow">
                <Play className="w-3.5 h-3.5 fill-slate-950 ml-0.5" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">
                Video Demostrativo MIS
              </span>
              <span className="text-[10px] text-slate-400 font-mono">{videoInfo.duration || '00:24 min'}</span>
            </div>
            <h5 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
              {videoInfo.title}
            </h5>
          </div>
        </div>

        <button 
          onClick={e => {
            e.stopPropagation();
            onOpenVideo();
          }}
          className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black shrink-0 flex items-center gap-1 transition-all"
        >
          <span>Ver Video</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl border border-amber-500/40 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/50 shadow-xl p-4 sm:p-6 text-white ${className}`}
    >
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
        
        {/* Left: Video Preview Player Card with Hover play */}
        <div 
          onClick={onOpenVideo}
          className="relative w-full md:w-72 sm:h-48 aspect-video md:aspect-auto rounded-xl overflow-hidden bg-slate-950 border border-slate-700 shadow-2xl cursor-pointer group shrink-0"
        >
          {thumbnail && (
            <img 
              src={thumbnail} 
              alt="Vertres 3D Video" 
              className="w-full h-full object-contain bg-slate-950 group-hover:scale-105 transition-transform duration-500" 
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

          {/* Top badges */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-500 text-slate-950 shadow-sm flex items-center gap-1">
              <Video className="w-3 h-3" />
              Video Oficial
            </span>
            <span className="text-[10px] font-mono text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded border border-white/10">
              {videoInfo.duration || '00:24 min'}
            </span>
          </div>

          {/* Center Pulsing Play Button */}
          <div className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
          </div>

          {/* Bottom title */}
          <div className="absolute bottom-2 inset-x-2 text-center">
            <span className="text-[11px] font-bold text-amber-200 block truncate drop-shadow">
              Video Quirúrgico MaffHealth • Cirugía MIS
            </span>
          </div>
        </div>

        {/* Right: Informational Copy & Highlights */}
        <div className="flex-1 space-y-3 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-950 bg-amber-300 px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Video Quirúrgico Oficial
            </span>
            <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {videoInfo.duration || '00:24 min'}
            </span>
            <span className="text-[10px] font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800 px-2 py-0.5 rounded-full">
              MaffHealth
            </span>
          </div>

          <h3 className="text-base sm:text-xl font-black text-white leading-tight">
            Video Demostrativo del Procedimiento Quirúrgico Ver3® Vertres
          </h3>

          <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
            Aprecie en detalle en este video quirúrgico la <strong>expansión tridimensional en trípode</strong> del implante en titanio Ti-6Al-4V, la técnica percutánea transpedicular en columna toracolumbar (T6-L5), la restauración de altura vertebral y la <strong>inyección contenida de cemento óseo PMMA</strong> bajo fluoroscopía C-Arm biplanar.
          </p>

          {/* 4 Feature pills from the video */}
          <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-2 text-[11px]">
            <span className="bg-slate-800/80 border border-slate-700 px-2.5 py-1 rounded-lg text-slate-200 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Three-dimensional supporting expansion</span>
            </span>
            <span className="bg-slate-800/80 border border-slate-700 px-2.5 py-1 rounded-lg text-slate-200 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Anatomical restoration of VCF</span>
            </span>
            <span className="bg-slate-800/80 border border-slate-700 px-2.5 py-1 rounded-lg text-slate-200 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
              <span>Larger volume for cement filling</span>
            </span>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <button
              onClick={onOpenVideo}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-slate-950 font-black text-xs sm:text-sm hover:opacity-95 transition-all shadow-lg flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Reproducir Video Quirúrgico Completo</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
