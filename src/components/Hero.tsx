import { motion } from "motion/react";
import { Sparkles, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 md:pt-16 overflow-hidden bg-glow">
      {/* Background Tech Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#9778d1 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 py-12 md:py-0">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-5 text-center lg:text-left"
          >
            <div className="mb-4 flex items-center justify-center lg:justify-start">
              <span className="w-2 h-2 bg-brand-primary rounded-full mr-2"></span>
              <span className="text-[10px] font-sans uppercase tracking-[0.4em] font-black text-brand-secondary/40">BIENESTAR Y BELLEZA INTEGRAL</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-black leading-tight mb-6 md:mb-8 text-brand-secondary uppercase tracking-tighter premium-heading">
              Lo esencial para tu <span className="text-brand-primary"> belleza </span>,<br />
              y cuidado personal.
            </h1>

            <p className="text-base md:text-lg font-sans font-light leading-relaxed mb-8 md:mb-10 text-brand-secondary max-w-lg mx-auto lg:mx-0">
              Enseñamos a mujeres comprometidas a elaborar y usar cosmética natural de forma sostenible, a través de talleres online, productos y asesorías.
            </p>

             <p className="text-base md:text-lg font-sans font-light leading-relaxed -mt-3 md:-mt-4 mb-5 md:mb-6  text-brand-secondary max-w-lg mx-auto lg:mx-0">
              Ingredientes naturales - No testados en animales - Libres de gluten
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <Link to="/cursos" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-brand-primary text-white rounded-full font-sans text-xs uppercase font-bold tracking-widest hover:bg-brand-secondary hover:shadow-xl transition-all"
                >
                  Explorar Cursos
                </motion.button>
              </Link>
              <Link to="/productos" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 border border-brand-primary/20 text-brand-primary rounded-full font-sans text-xs uppercase font-bold tracking-widest hover:bg-brand-primary/5 transition-all"
                >
                  Ver catálogo
                </motion.button>
              </Link>
            </div>

            {/* Small Authority Stats */}
            <div className="mt-12 md:mt-16 flex justify-center lg:justify-start gap-8 md:gap-12 border-t border-black/10 pt-8">
              <div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-light">10k+</motion.div>
                <div className="text-[10px] uppercase tracking-wider font-sans opacity-50">Alumnos</div>
              </div>
              <div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-light">100%</motion.div>
                <div className="text-[10px] uppercase tracking-wider font-sans opacity-50">Orgánico</div>
              </div>
              <div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-light">BioTech</motion.div>
                <div className="text-[10px] uppercase tracking-wider font-sans opacity-50">Fórmula Pro</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 relative h-full flex items-center justify-end"
          >
            {/* Tech Decorative Elements */}
            <div className="absolute top-1/4 -left-10 w-40 h-40 border border-dashed border-brand-primary/20 rounded-full" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 border border-brand-primary/5 rounded-full" />
            
            <div className="relative z-10 w-4/5 aspect-[4/5] daniela-frame bg-gray-100 overflow-hidden shadow-2xl group">
              <img 
                src="/Principal.jpg" 
                alt="Daniela Portrait" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-brand-primary/5 uppercase tracking-[2em] -rotate-90 font-sans text-4xl font-extrabold pointer-events-none">
                Daniela
              </div>
            </div>

            {/* Floating Content Card (Innovation Layer) */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="glass absolute bottom-12 left-0 p-8 rounded-3xl w-72 shadow-xl z-20 border-brand-primary/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-brand-primary rounded-full animate-pulse"></div>
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-black text-brand-primary">Lleva tu emprendimiento al siguiente nivel</span>
              </div>
              <h4 className="text-lg mb-2 text-brand-secondary font-sans font-black leading-tight uppercase">Masterclass: Proyecta tu Marca Natural</h4>
              <p className="text-xs font-sans text-brand-secondary leading-relaxed">
                Valora y celebra cada pequeño paso que das hacia una vida más saludable y consciente. -Dan.
              </p>
              <div className="mt-4 tech-line opacity-20"></div>
              <div className="mt-4 text-[10px] font-sans uppercase font-black tracking-widest text-brand-primary/60">
                Acceso exclusivo • 
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer/Sidebar micro-label */}
      <div className="absolute bottom-8 left-12 hidden lg:block">
        <p className="text-[10px] font-sans uppercase tracking-[0.5em] opacity-40">
          Inspiración • Naturaleza • Tecnología
        </p>
      </div>
    </section>
  );
}
