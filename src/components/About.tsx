import { motion } from "motion/react";
import { Leaf, Heart, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

export function About() {
  return (
    <section id="philosophy" className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl bg-brand-primary/5">
              <img 
                src="/Principal-01.jpg" 
                alt="Sobre Daniela" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none" />
            </div>
            
            {/* Counter Badge */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-primary rounded-full flex flex-col items-center justify-center text-white shadow-2xl animate-float">
               <span className="text-4xl font-sans font-black tracking-tighter">15k+</span>
               <span className="text-[10px] uppercase tracking-widest font-black">Vidas Sanas</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-4xl md:text-5xl font-black tracking-tighter text-brand-secondary mb-8 uppercase leading-tight premium-heading"
            >
              Nuestra <span className="text-brand-primary text-secondary">Filosofía</span>
            </motion.h2>

            <p className="text-lg text-brand-secondary mb-10 leading-relaxed font-sans font-light">
              Mi viaje comenzó entre raíces y morteros, buscando una forma de sanar que fuera tan honesta como la tierra misma. Creemos que el bienestar no es un destino, sino una conversación diaria con nuestra propia biología.
            </p>

            <div className="grid sm:grid-cols-3 gap-8">
              <ValueItem 
                icon={<Leaf className="text-brand-primary" />}
                title="Sustento"
                desc="Ingredientes 100% orgánicos."
              />
              <ValueItem 
                icon={<Heart className="text-brand-primary" />}
                title="Empatía"
                desc="Hecho para pieles sensibles."
              />
              <ValueItem 
                icon={<ShieldCheck className="text-brand-primary" />}
                title="Rigor"
                desc="Ciencia aplicada a lo natural."
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              className="mt-12 tech-line w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueItem({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
      <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mb-4 shadow-sm border-brand-primary/10">
        {icon}
      </div>
      <h4 className="font-sans text-lg font-black uppercase mb-1 text-brand-primary leading-none">{title}</h4>
      <p className="text-[10px] text-brand-secondary uppercase tracking-[0.2em] font-sans font-black leading-tight">{desc}</p>
    </div>
  );
}
