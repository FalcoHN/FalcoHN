
import React, { useState } from 'react';
import { VIDEOS } from '../constants';
import { Play, Youtube, X } from 'lucide-react';
import { VideoContent } from '../types';

const YouTubeSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoContent | null>(null);

  // Function to correctly format embed URL
  const getEmbedUrl = (videoId: string) => {
    // Adding origin and other security params for better compatibility
    const origin = window.location.origin;
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&origin=${origin}`;
  };

  return (
    <section id="youtube" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <Youtube size={20} /> Contenido de Valor
            </h2>
            <p className="text-4xl font-black text-slate-900">Historia, Identidad y Tecnología</p>
            <p className="text-lg text-slate-600">Mi canal de YouTube es el lugar donde conecto el pasado de Honduras con el futuro digital.</p>
          </div>
          <a href="https://www.youtube.com/@FalcoHN" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg flex items-center gap-2">
            Suscribirse al canal
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {VIDEOS.map((v) => (
            <div 
              key={v.id} 
              onClick={() => setSelectedVideo(v)}
              className="group cursor-pointer relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={v.thumbnail} 
                  alt={v.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                    <Play fill="white" size={24} />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900">
                    {v.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-tight">
                  {v.title}
                </h3>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span>@FalcoHN</span>
                  <span className="text-blue-600 group-hover:underline">Ver ahora →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-red-600 text-white rounded-full transition-all"
              aria-label="Cerrar video"
            >
              <X size={24} />
            </button>
            <iframe 
              className="w-full h-full border-0"
              src={getEmbedUrl(selectedVideo.videoId)}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default YouTubeSection;
