import React from 'react';
import { motion } from "motion/react";

export function Hero({ onContact }: { onContact: () => void }) {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 lg:px-12 pt-36 pb-24 bg-[#120f18] text-white">
      
      {/* Fondo base oscuro y atmósfera general */}
      <div className="absolute inset-0 z-0 bg-[#26222e]" />

      {/* Contenedor principal con grid de 2 columnas */}
      <div className="relative z-10 mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* COLUMNA IZQUIERDA: Textos limpios y estilizados (Estándar Hero1.png) */}
        <div className="lg:col-span-6 space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-semibold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full bg-[#8d6fa8]/20 text-[#d8b4fe] border border-[#8d6fa8]/30 font-mono"
          >
            Bienestar y Belleza Integral
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
          >
            Lo esencial para tu <span className="text-[#d8b4fe]">belleza</span> y cuidado personal.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg text-gray-300 max-w-xl font-light leading-relaxed"
          >
            Enseñamos a mujeres comprometidas a elaborar y usar cosmética natural de forma sostenible, a través de talleres online, productos y asesorías.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button 
              onClick={onContact}
              className="bg-[#8d6fa8] hover:bg-[#7a5d93] text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-[#8d6fa8]/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Explorar Cursos
            </button>
            <a 
              href="#catalogo" 
              className="border border-white/20 hover:border-white/50 text-white font-medium px-8 py-3.5 rounded-xl transition-all backdrop-blur-sm"
            >
              Ver Catálogo
            </a>
          </motion.div>
        </div>

        {/* COLUMNA DERECHA: Video Cinemático del desodorante con Cloudinary */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-6 relative flex justify-center items-center min-h-[450px]"
        >
          <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/20 backdrop-blur-md">
            <video
              className="absolute inset-0 size-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source
                src="https://res.cloudinary.com/xo2azlb3/video/upload/v1787927257/VideoUTD.mp4" 
                type="video/mp4"
              />
            </video>
            
            {/* Viñeta sutil para integrar los bordes */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#120f18]/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
