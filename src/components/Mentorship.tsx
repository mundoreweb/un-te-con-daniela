import { motion } from "motion/react";
import { Quote, Sparkles, Heart, Sprout, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export function Mentorship() {
  return (
    <section id="mentorship" className="py-32 bg-[#faf9f6] overflow-hidden relative">
      {/* Soft warm gradients for background depth */}
      <div className="absolute top-0 right-0 w-[50vw] h-[100%] bg-brand-primary/3 -skew-x-6 origin-top-right" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-wheat/20 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-brand-wheat/30 text-brand-forest rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10"
            >
              <Heart size={14} className="text-brand-primary" />
               Acompañamiento Especializado
            </motion.div>

            <h2 className="font-sans text-4xl md:text-6xl font-black tracking-tighter mb-10 text-brand-secondary leading-[0.95] uppercase premium-heading">
              Crece tu negocio: <br />
              <span className="text-brand-primary">De cosmética natural</span> <br />
            </h2>

            <p className="text-lg text-brand-secondary/80 mb-12 leading-relaxed font-sans font-light max-w-xl">
              Si tienes un negocio de cosmética natural y quieres crecerlo, disfrutando el proceso y sin quemarte en el camino, puedes postularte a nuestro programa grupal “Grow it” en Simple y Tranqui o al plan de mentorías personalizadas, donde vemos el modelo de negocio, mentalidad, mensaje y objetivos, para así alinear tu negocio con su verdadero propósito y crecerlo con bases sólidas.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 mb-12">
              <MentorFeature 
                icon={<Sprout className="text-brand-primary" />} 
                title="Crecimiento Orgánico" 
                desc="Respetamos tus tiempos y los de tu negocio, nos adaptamos al momento en el que te encuentres y necesidades específicas, porque tu bienestar es fundamental.
" 
              />
              <MentorFeature 
                icon={<Compass className="text-brand-primary" />} 
                title="Guía Estratégica" 
                desc="Cada aspecto del programa está pensado para que puedas aplicarlo desde el primer momento y evaluar resultados con el acompañamiento oportuno." 
              />
            </div>

            <Link to="/mentoria">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-brand-primary text-white rounded-full font-sans text-[10px] uppercase font-black tracking-widest hover:bg-brand-secondary hover:shadow-2xl hover:shadow-brand-secondary/20 transition-all shadow-xl flex items-center gap-4 group"
              >
                Comenzar mi acompañamiento
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <Sparkles size={16} />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative order-1 lg:order-2 mb-20 lg:mb-0"
          >
            <div className="relative">
              {/* Main Image with organic frame */}
              <div className="relative z-10 rounded-[5rem] overflow-hidden shadow-2xl border-2 border-white aspect-[4/5] max-w-[450px] mx-auto lg:ml-auto group">
                <img 
                  src="/Sobre-daniela.jpg" 
                  alt="Sesión de mentoría consciente" 
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/30 via-transparent to-transparent" />
              </div>

              {/* Floating Testimonial Card */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-16 md:-bottom-20 -left-2 sm:-left-6 lg:-left-20 p-6 md:p-8 bg-white/90 backdrop-blur-md rounded-[2.5rem] md:rounded-[3rem] shadow-2xl z-20 max-w-[240px] md:max-w-[280px] border border-brand-primary/5"
              >
                <Quote className="text-brand-primary/20 mb-3 md:mb-4 w-8 h-8 md:w-10 md:h-10" />
                <p className="text-xs md:text-sm font-sans font-medium text-brand-forest leading-relaxed italic">
                  "Daniela no solo me enseñó a formular, me enseñó a confiar en mi proceso."
                </p>
                <div className="mt-4 md:mt-6 flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-wheat/50" />
                  <div>
                    <h5 className="text-[9px] md:text-[10px] font-black uppercase text-brand-forest">Valentina M.</h5>
                    <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-brand-primary font-bold">Emprendedora</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative behind elements */}
              <div className="absolute -top-12 -right-12 w-48 h-48 border-[20px] border-brand-wheat/20 rounded-full -z-10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function MentorFeature({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="flex flex-col gap-4 p-6 glass rounded-3xl border border-brand-primary/5 hover:border-brand-primary/20 transition-colors group">
      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h4 className="font-sans font-black text-[12px] uppercase tracking-widest text-brand-secondary mb-2">{title}</h4>
        <p className="text-brand-secondary/60 text-xs font-light leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
