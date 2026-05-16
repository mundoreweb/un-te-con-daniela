import { motion } from "motion/react";
import { Youtube, ExternalLink, Sparkles } from "lucide-react";

export function YouTubeSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full filter blur-[100px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-wheat/10 rounded-full filter blur-[100px] -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-brand-primary/5 text-brand-primary rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10">
              <Youtube size={14} />
              Contenido Gratuito
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-secondary mb-8 leading-none premium-heading">
              Visítanos en <br />
              <span className="text-brand-primary">YouTube.</span>
            </h2>
            
            <div className="w-24 h-1 bg-brand-primary/30 rounded-full mb-10 mx-auto lg:mx-0" />
            
            <p className="text-base md:text-lg text-brand-secondary/80 font-light leading-relaxed italic mb-8 mx-auto lg:mx-0 max-w-xl">
              ¿Quieres aprender a hacer cosmética natural casera? ¡Suscríbete a mi canal de YouTube! 
              En mis videos encontrarás recetas fáciles y sencillas para hacer tus propios productos 
              de belleza con ingredientes naturales y económicos. 
            </p>
            
            <p className="hidden md:block text-base text-brand-secondary/70 font-light leading-relaxed mb-12 mx-auto lg:mx-0 max-w-xl">
              Aprenderás a hacer productos faciales, corporales como mascarillas, maquillaje, champú, 
              tónicos y más. También conocerás los beneficios de las plantas y cómo usarlas para 
              mejorar tu salud y belleza. ¡Te espero!
            </p>
            
            <a 
              href="https://www.youtube.com/@untecondaniela" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-10 py-5 bg-brand-primary text-white rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-brand-secondary hover:shadow-brand-secondary/20 transition-all group w-full sm:w-auto justify-center"
            >
              Ir al canal ahora
              <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative group w-full"
          >
            <div className="relative aspect-video rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-2 md:border-4 border-white group-hover:scale-[1.02] transition-transform duration-700">
              {/* Visual Mockup for YouTube Video */}
              <div className="absolute inset-0 bg-brand-forest/10 group-hover:bg-transparent transition-colors duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1200" 
                alt="Miniatura YouTube" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 md:w-24 md:h-24 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                >
                   <Youtube size={32} fill="currentColor" />
                </motion.div>
              </div>
              
              {/* Mockup Overlay Title */}
              <div className="absolute top-6 left-6 right-6">
                <div className="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-xs font-bold uppercase tracking-widest">Último Video</p>
                  <p className="text-white/80 text-[10px] mt-1 font-light">Cuidado facial natural con ingredientes de casa</p>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border-[20px] border-brand-primary/5 rounded-full -z-10" />
            <div className="absolute -top-12 -left-12">
               <Sparkles className="text-brand-wheat" size={48} />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
