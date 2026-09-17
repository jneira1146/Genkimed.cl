import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Upload, 
  CheckCircle2, 
  Sparkles, 
  X, 
  Layers, 
  FileText,
  Trash2,
  ExternalLink,
  Film,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import { Product } from '../types';
import { saveVideoBlob, getVideoBlob, deleteVideoBlob } from '../utils/videoStorage';

interface Ver3VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onOpenDatasheet?: () => void;
  onPreOrder?: () => void;
  onOpenImage?: (product: Product, initialImageSrc?: string) => void;
}

const DEFAULT_VIDEO_URL = 'https://youtu.be/obF2R_95aLo';

export const Ver3VideoModal: React.FC<Ver3VideoModalProps> = ({
  isOpen,
  onClose,
  product,
  onOpenDatasheet,
  onPreOrder,
  onOpenImage
}) => {
  const prodId = product?.id || 'ver3-vertres-mis';
  const currentStorageKey = `${prodId}_user_video`;
  const currentUrlStorageKey = `${prodId}_user_video_url`;
  const defaultProductVideo = product?.videoInfo?.videoUrl || DEFAULT_VIDEO_URL;
  const defaultProductTitle = product?.videoInfo?.title || 'Video Quirúrgico';

  const [videoSrc, setVideoSrc] = useState<string>(defaultProductVideo);
  const [videoTitle, setVideoTitle] = useState<string>(defaultProductTitle);
  const [isUserCustomVideo, setIsUserCustomVideo] = useState<boolean>(false);
  const [embedUrl, setEmbedUrl] = useState<string | null>(null);
  const [inputUrl, setInputUrl] = useState<string>('');
  const [showUrlInput, setShowUrlInput] = useState<boolean>(false);
  
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(24);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Helper to parse YouTube / Vimeo URLs
  const parseVideoUrl = (rawUrl: string): { type: 'youtube' | 'vimeo' | 'url'; embedSrc?: string; videoId?: string } => {
    const trimmed = rawUrl.trim();
    // YouTube
    const ytMatch = trimmed.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    if (ytMatch && ytMatch[1]) {
      return {
        type: 'youtube',
        videoId: ytMatch[1],
        embedSrc: `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1`
      };
    }
    // Vimeo
    const vimeoMatch = trimmed.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)/);
    if (vimeoMatch && vimeoMatch[3]) {
      return {
        type: 'vimeo',
        videoId: vimeoMatch[3],
        embedSrc: `https://player.vimeo.com/video/${vimeoMatch[3]}?autoplay=1`
      };
    }
    return { type: 'url' };
  };

  // Safe play helper to prevent unhandled promise rejections
  const attemptPlay = async () => {
    if (!videoRef.current) return;
    try {
      setVideoError(null);
      await videoRef.current.play();
      setIsPlaying(true);
      setAutoplayBlocked(false);
    } catch (err) {
      console.warn('Playback blocked or requires user interaction:', err);
      // Modern browsers require muted for autoplay
      if (videoRef.current && !videoRef.current.muted) {
        videoRef.current.muted = true;
        setIsMuted(true);
        setAutoplayBlocked(true);
        try {
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (innerErr) {
          console.warn('Muted playback also prevented:', innerErr);
          setIsPlaying(false);
        }
      } else {
        setIsPlaying(false);
      }
    }
  };

  // Load video source on modal open
  useEffect(() => {
    if (!isOpen) return;

    let active = true;
    const initializeSource = async () => {
      setVideoError(null);
      setAutoplayBlocked(false);

      try {
        // 1. Check if user has uploaded a custom video in IndexedDB
        const stored = await getVideoBlob(currentStorageKey);
        if (stored && active) {
          const objectUrl = URL.createObjectURL(stored.blob);
          setVideoSrc(objectUrl);
          setVideoTitle(`Mi video: ${stored.name}`);
          setIsUserCustomVideo(true);
          setEmbedUrl(null);
          return;
        }

        // 2. Check if user saved a custom external URL in localStorage
        const savedUrl = localStorage.getItem(currentUrlStorageKey);
        if (savedUrl && (savedUrl.includes('8A1S') || savedUrl === 'https://youtu.be/8A1S-p4BFVU')) {
          localStorage.removeItem(currentUrlStorageKey);
        } else if (savedUrl && active) {
          const parsed = parseVideoUrl(savedUrl);
          if (parsed.type === 'youtube' || parsed.type === 'vimeo') {
            setEmbedUrl(parsed.embedSrc || savedUrl);
            setVideoTitle(`Video: ${savedUrl}`);
            setIsUserCustomVideo(true);
            return;
          } else {
            setVideoSrc(savedUrl);
            setVideoTitle(`Video URL: ${savedUrl}`);
            setIsUserCustomVideo(true);
            setEmbedUrl(null);
            return;
          }
        }

        // 3. Use default product video URL or local MP4 / YouTube
        const fallbackUrl = product?.videoInfo?.videoUrl || DEFAULT_VIDEO_URL;
        if (active) {
          const parsed = parseVideoUrl(fallbackUrl);
          if (parsed.type === 'youtube' || parsed.type === 'vimeo') {
            setEmbedUrl(parsed.embedSrc || fallbackUrl);
            setVideoTitle(product?.videoInfo?.title || 'Video Quirúrgico');
            setIsUserCustomVideo(false);
          } else {
            setVideoSrc(fallbackUrl);
            setVideoTitle(product?.videoInfo?.title || 'Video Quirúrgico');
            setIsUserCustomVideo(false);
            setEmbedUrl(null);
          }
        }
      } catch (err) {
        console.warn('Error reading stored video:', err);
        if (active) {
          const fallbackUrl = product?.videoInfo?.videoUrl || DEFAULT_VIDEO_URL;
          const parsed = parseVideoUrl(fallbackUrl);
          if (parsed.type === 'youtube') {
            setEmbedUrl(parsed.embedSrc || fallbackUrl);
          } else {
            setVideoSrc(fallbackUrl);
            setEmbedUrl(null);
          }
          setVideoTitle(product?.videoInfo?.title || 'Video Quirúrgico');
          setIsUserCustomVideo(false);
        }
      }
    };

    initializeSource();

    return () => {
      active = false;
    };
  }, [isOpen, product]);

  // Attempt auto-play when video element or src is ready
  useEffect(() => {
    if (!isOpen || embedUrl || !videoSrc) return;

    const timer = setTimeout(() => {
      attemptPlay();
    }, 200);

    return () => clearTimeout(timer);
  }, [isOpen, videoSrc, embedUrl]);

  // Handle local file selection
  const handleFileChange = async (file: File) => {
    if (!file) return;
    try {
      setVideoError(null);
      // Clean up previous blob URL if needed
      if (videoSrc && videoSrc.startsWith('blob:')) {
        URL.revokeObjectURL(videoSrc);
      }

      await saveVideoBlob(currentStorageKey, file, file.name);
      const url = URL.createObjectURL(file);
      
      setVideoSrc(url);
      setVideoTitle(`Mi video: ${file.name}`);
      setIsUserCustomVideo(true);
      setEmbedUrl(null);
      localStorage.removeItem(currentUrlStorageKey);

      setTimeout(() => {
        attemptPlay();
      }, 100);
    } catch (err: any) {
      console.error('Error saving user video:', err);
      setVideoError('No se pudo cargar el archivo de video. Por favor intenta con un archivo MP4 estándar.');
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileChange(file);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;
    const url = inputUrl.trim();
    localStorage.setItem(currentUrlStorageKey, url);
    deleteVideoBlob(currentStorageKey);

    const parsed = parseVideoUrl(url);
    if (parsed.type === 'youtube' || parsed.type === 'vimeo') {
      setEmbedUrl(parsed.embedSrc || url);
      setVideoTitle(`Video: ${url}`);
      setIsUserCustomVideo(true);
    } else {
      setVideoSrc(url);
      setVideoTitle(`Video URL: ${url}`);
      setIsUserCustomVideo(true);
      setEmbedUrl(null);
      setTimeout(() => attemptPlay(), 150);
    }
    setShowUrlInput(false);
    setInputUrl('');
  };

  const handleRestoreDefaultVideo = async () => {
    if (videoSrc && videoSrc.startsWith('blob:')) {
      URL.revokeObjectURL(videoSrc);
    }
    await deleteVideoBlob(currentStorageKey);
    localStorage.removeItem(currentUrlStorageKey);

    const fallbackUrl = product?.videoInfo?.videoUrl || DEFAULT_VIDEO_URL;
    const parsed = parseVideoUrl(fallbackUrl);
    if (parsed.type === 'youtube' || parsed.type === 'vimeo') {
      setEmbedUrl(parsed.embedSrc || fallbackUrl);
      setVideoTitle(product?.videoInfo?.title || 'Video Quirúrgico Oficial');
      setIsUserCustomVideo(false);
    } else {
      setVideoSrc(fallbackUrl);
      setVideoTitle(product?.videoInfo?.title || 'Video Quirúrgico Oficial');
      setIsUserCustomVideo(false);
      setEmbedUrl(null);
      setTimeout(() => attemptPlay(), 150);
    }
    setVideoError(null);
  };

  // Video playback controls
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      attemptPlay();
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (seconds: number) => {
    if (embedUrl) {
      const parsed = parseVideoUrl(embedUrl);
      if (parsed.type === 'youtube' && parsed.videoId) {
        setEmbedUrl(`https://www.youtube-nocookie.com/embed/${parsed.videoId}?autoplay=1&rel=0&modestbranding=1&start=${seconds}`);
        setCurrentTime(seconds);
        return;
      }
    }
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      setCurrentTime(seconds);
      if (videoRef.current.paused) {
        attemptPlay();
      }
    }
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      setAutoplayBlocked(false);
    }
  };

  const handleVolumeChange = (vol: number) => {
    setVolume(vol);
    if (videoRef.current) {
      videoRef.current.volume = vol;
      videoRef.current.muted = vol === 0;
      setIsMuted(vol === 0);
      setAutoplayBlocked(false);
    }
  };

  const toggleFullscreen = () => {
    if (!videoContainerRef.current) return;
    if (!document.fullscreenElement) {
      videoContainerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!isOpen || !product) return null;

  const chapters = product.videoInfo?.chapters || [
    {
      time: '00:00 - 00:06',
      seconds: 0,
      title: 'Fase 1: Morfología & Expansión Tridimensional',
      description: 'Estructura biomecánica en titanio Ti-6Al-4V ELI con trípode expansor retráctil.',
      image: product.image
    },
    {
      time: '00:06 - 00:12',
      seconds: 6,
      title: 'Fase 2: Instrumental y Acceso Transpedicular MIS',
      description: 'Punción percutánea bajo escopía con trocar y cánula de trabajo.',
      image: product.image
    },
    {
      time: '00:12 - 00:18',
      seconds: 12,
      title: 'Fase 3: Elevación Activa y Restauración Anatómica',
      description: 'Despliegue milimétrico con mango en T y restauración de altura.',
      image: product.image
    },
    {
      time: '00:18 - 00:24',
      seconds: 18,
      title: 'Fase 4: Control Fluoroscópico C-Arm y Cemento PMMA',
      description: 'Inyección contenida de cemento óseo y fijación vertebral.',
      image: product.image
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/90 backdrop-blur-md">
      <div 
        className="relative w-full max-w-5xl bg-slate-900 border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-1.5 truncate">
                  <span>{product?.videoInfo?.title || product?.name || 'Video Quirúrgico'}</span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded font-black uppercase shrink-0">
                    {product?.brand ? product.brand.split('/')[0].trim() : 'MaffHealth'}
                  </span>
                </h3>
              </div>
              <p className="text-xs text-slate-400 truncate flex items-center gap-1.5">
                {isUserCustomVideo ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{videoTitle}</span>
                  </span>
                ) : (
                  <span className="text-amber-400/90 font-medium">
                    {product?.videoInfo?.subtitle || 'Procedimiento Quirúrgico Oficial'}
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Action button to upload / replace video */}
            <a
              href={product?.videoInfo?.videoUrl || DEFAULT_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg bg-red-600/90 hover:bg-red-500 text-white text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Abrir este video directamente en YouTube"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ver en YouTube</span>
            </a>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
              title="Cargar tu propio archivo de video (MP4 / MOV)"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>{isUserCustomVideo ? 'Cambiar Video' : 'Subir Mi Video'}</span>
            </button>

            <button
              type="button"
              onClick={() => setShowUrlInput(!showUrlInput)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all flex items-center gap-1 cursor-pointer"
              title="Pegar enlace de video YouTube, Vimeo o MP4"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Pegar URL</span>
            </button>

            {isUserCustomVideo && (
              <button
                type="button"
                onClick={handleRestoreDefaultVideo}
                className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-all flex items-center gap-1 cursor-pointer"
                title="Restaurar video demostrativo oficial"
              >
                <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Restaurar Oficial</span>
              </button>
            )}

            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={e => {
                const f = e.target.files?.[0];
                if (f) handleFileChange(f);
              }} 
              accept="video/mp4,video/webm,video/quicktime,video/mov,video/m4v,video/x-matroska,video/*" 
              className="hidden" 
            />

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
              title="Cerrar reproductor"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* URL Input Bar Collapsible */}
        {showUrlInput && (
          <form onSubmit={handleUrlSubmit} className="p-3 bg-slate-950 border-b border-slate-800 flex items-center gap-2">
            <input
              type="url"
              placeholder="Pega el enlace de tu video (ej. YouTube, Vimeo o enlace directo .mp4)..."
              value={inputUrl}
              onChange={e => setInputUrl(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs cursor-pointer"
            >
              Cargar Enlace
            </button>
            <button
              type="button"
              onClick={() => setShowUrlInput(false)}
              className="px-2 py-1.5 text-xs text-slate-400 hover:text-white cursor-pointer"
            >
              Cancelar
            </button>
          </form>
        )}

        {/* Autoplay muted notice */}
        {autoplayBlocked && (
          <div className="bg-amber-950/70 border-b border-amber-800/80 px-4 py-2 flex items-center justify-between text-xs text-amber-200">
            <div className="flex items-center gap-2">
              <VolumeX className="w-4 h-4 text-amber-400" />
              <span>El video se inició en silencio por la política de reproducción automática del navegador.</span>
            </div>
            <button
              type="button"
              onClick={toggleMute}
              className="px-2.5 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1 cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Activar Sonido</span>
            </button>
          </div>
        )}

        {/* Video Error Message */}
        {videoError && (
          <div className="bg-red-950/80 border-b border-red-800 px-4 py-2.5 flex items-center justify-between text-xs text-red-200">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{videoError}</span>
            </div>
            <button
              type="button"
              onClick={handleRestoreDefaultVideo}
              className="px-2 py-1 rounded bg-red-800 hover:bg-red-700 text-white font-bold text-[11px] cursor-pointer"
            >
              Cargar video oficial
            </button>
          </div>
        )}

        {/* Modal Body / Scrollable */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-4">
          
          {/* Main Video Cinema Screen Container */}
          <div 
            ref={videoContainerRef}
            className={`relative aspect-video w-full rounded-xl overflow-hidden bg-black border ${
              isDragging ? 'border-amber-400 ring-2 ring-amber-400/50' : 'border-slate-800'
            } shadow-2xl group flex items-center justify-center`}
            onDragOver={e => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
          >
            {/* 1. Embed Player (YouTube / Vimeo) */}
            {embedUrl ? (
              <iframe
                key={embedUrl}
                src={embedUrl}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="Ver3 Video Player"
              />
            ) : (
              /* 2. Direct Native HTML5 Video Player */
              <div className="relative w-full h-full bg-black flex items-center justify-center">
                <video
                  key={videoSrc}
                  ref={videoRef}
                  src={videoSrc}
                  className="w-full h-full object-contain"
                  controls
                  playsInline
                  autoPlay
                  preload="auto"
                  onPlay={() => {
                    setIsPlaying(true);
                    setVideoError(null);
                  }}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  onTimeUpdate={() => {
                    if (videoRef.current) {
                      setCurrentTime(videoRef.current.currentTime);
                    }
                  }}
                  onLoadedMetadata={() => {
                    if (videoRef.current) {
                      setDuration(videoRef.current.duration || 24);
                    }
                  }}
                  onError={(e) => {
                    console.error('Video tag error:', e);
                    setVideoError('No se pudo reproducir este archivo de video. Por favor verifica el formato o haz clic en "Restaurar Oficial".');
                  }}
                />

                {/* Big floating overlay play button if video is paused */}
                {!isPlaying && (
                  <button
                    type="button"
                    onClick={attemptPlay}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-amber-500/90 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 z-20 cursor-pointer pointer-events-auto"
                    title="Reproducir Video"
                  >
                    <Play className="w-8 h-8 fill-slate-950 ml-1" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Quick Playback Shortcuts Bar */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{isPlaying ? 'Pausa' : 'Reproducir'}</span>
              </button>

              <button
                type="button"
                onClick={() => handleSeek(0)}
                className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
                title="Reiniciar desde el inicio (00:00)"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="hidden sm:inline">Reiniciar</span>
              </button>

              <div className="font-mono text-slate-400 text-[11px] ml-1">
                <span className="text-white font-bold">{formatTime(currentTime)}</span> / {formatTime(duration)}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Playback speed */}
              <div className="flex items-center gap-1 bg-slate-900 px-1.5 py-1 rounded border border-slate-800 text-[10px] font-mono">
                <span className="text-slate-400 text-[9px] mr-1 hidden sm:inline">Velocidad:</span>
                {[1, 1.25, 1.5, 2].map(speed => (
                  <button
                    key={speed}
                    type="button"
                    onClick={() => handleSpeedChange(speed)}
                    className={`px-1.5 py-0.5 rounded cursor-pointer ${
                      playbackSpeed === speed ? 'text-amber-400 font-bold bg-slate-800' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>

              {/* Mute button */}
              <button
                type="button"
                onClick={toggleMute}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
                title={isMuted ? 'Activar sonido' : 'Silenciar'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4" />}
              </button>

              {/* Fullscreen */}
              <button
                type="button"
                onClick={toggleFullscreen}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
                title="Pantalla completa"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Key Advantages Highlighted in Video */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            <div className="bg-slate-800/80 border border-slate-700/80 p-2 rounded-xl text-center">
              <span className="text-[10px] text-amber-400 font-black block uppercase tracking-wider">3D Expansion</span>
              <span className="text-xs text-white font-bold">Expansión Tridimensional</span>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/80 p-2 rounded-xl text-center">
              <span className="text-[10px] text-cyan-400 font-black block uppercase tracking-wider">Stable Fixation</span>
              <span className="text-xs text-white font-bold">Mantenimiento Estable</span>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/80 p-2 rounded-xl text-center">
              <span className="text-[10px] text-emerald-400 font-black block uppercase tracking-wider">VCF Restoration</span>
              <span className="text-xs text-white font-bold">Reducción Anatómica</span>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/80 p-2 rounded-xl text-center">
              <span className="text-[10px] text-purple-400 font-black block uppercase tracking-wider">Larger Volume</span>
              <span className="text-xs text-white font-bold">Llenado PMMA Amplio</span>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-slate-800/80 border border-slate-700/80 p-2 rounded-xl text-center">
              <span className="text-[10px] text-yellow-400 font-black block uppercase tracking-wider">Retractable</span>
              <span className="text-xs text-white font-bold">100% Reversible</span>
            </div>
          </div>

          {/* Timeline Chapters with Seek jump */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Capítulos Quirúrgicos de la Técnica Ver3®</span>
              </h4>
              <span className="text-[11px] text-slate-400">
                Haz clic en cualquier fase para reproducirla de inmediato
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {chapters.map((chap, idx) => {
                const isActive = currentTime >= chap.seconds && (idx === chapters.length - 1 || currentTime < chapters[idx + 1].seconds);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSeek(chap.seconds)}
                    className={`p-3 rounded-xl text-left transition-all border flex items-start gap-2.5 cursor-pointer ${
                      isActive
                        ? 'bg-amber-500/20 border-amber-500 text-white shadow-md ring-1 ring-amber-500/50'
                        : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <div 
                      onClick={(e) => {
                        if (onOpenImage && product) {
                          e.stopPropagation();
                          onOpenImage(product, chap.image);
                        }
                      }}
                      className="relative w-12 h-12 rounded-lg overflow-hidden bg-slate-950 border border-slate-700 shrink-0 cursor-zoom-in group/thumb"
                      title="Haz clic para ver el render 3D ampliado"
                    >
                      <img 
                        src={chap.image} 
                        alt={chap.title} 
                        className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform" 
                      />
                      <div className="absolute inset-0 bg-slate-950/20 group-hover/thumb:bg-transparent"></div>
                      <span className="absolute bottom-0.5 right-1 text-[9px] font-mono font-bold text-amber-300 bg-black/60 px-1 rounded">
                        {chap.time.split(' - ')[0]}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className={`text-[10px] font-mono font-bold ${
                          isActive ? 'text-amber-400' : 'text-slate-400'
                        }`}>
                          {chap.time}
                        </span>
                        {isActive && (
                          <span className="text-[8px] font-black uppercase bg-amber-500 text-slate-950 px-1 py-0.2 rounded">
                            En curso
                          </span>
                        )}
                      </div>
                      <h5 className="text-xs font-bold text-white leading-tight line-clamp-1 mt-0.5">
                        {chap.title}
                      </h5>
                      <p className="text-[10px] text-slate-400 line-clamp-2 mt-0.5 leading-snug">
                        {chap.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Drag and Drop Zone or Alternative Upload Section */}
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="p-3 sm:p-4 rounded-xl border border-dashed border-slate-700 hover:border-amber-500/60 bg-slate-950/50 hover:bg-slate-900/50 transition-colors flex items-center justify-between gap-3 cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <Film className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">
                  {isUserCustomVideo ? '¿Deseas reemplazar el video actual?' : `¿Tienes tu propio archivo de video de ${product?.name ? product.name.split(' ')[0] : 'este producto'}?`}
                </p>
                <p className="text-[11px] text-slate-400">
                  Haz clic aquí o arrastra tu archivo (MP4, MOV, WebM). Se guarda en tu navegador automáticamente.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="px-3 py-1.5 rounded-lg bg-slate-800 group-hover:bg-amber-500 text-slate-300 group-hover:text-slate-950 font-bold text-xs transition-colors shrink-0 flex items-center gap-1.5"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Seleccionar Archivo</span>
            </button>
          </div>

        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="px-4 py-3 bg-slate-950 border-b-0 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Respaldado por <strong>Genkimed SpA</strong> • {product?.brand || 'Línea Quirúrgica de Columna'}</span>
          </div>

          <div className="flex items-center gap-2">
            {onOpenDatasheet && (
              <button
                type="button"
                onClick={onOpenDatasheet}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors flex items-center gap-1.5 border border-slate-700 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Ver Ficha Técnica PDF</span>
              </button>
            )}

            {onPreOrder && (
              <button
                type="button"
                onClick={onPreOrder}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-slate-950 text-xs font-black transition-all hover:opacity-95 shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Consultar / Pre-ordenar</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
