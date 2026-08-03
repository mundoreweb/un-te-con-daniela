import { motion } from "motion/react";
import { ExternalLink, Sparkles, ShieldCheck, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export function ProductsSection() {
  return (
    <section id="products" className="py-12 bg-white border-t border-brand-primary/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="font-sans">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/5 rounded-full text-brand-primary font-black text-[10px] uppercase tracking-[0.3em] mb-8"
            >
              <Sparkles size={14} />
              Productos Naturales
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-secondary mb-8 leading-none premium-heading">
              Lo esencial para una<br />
              <span className="text-brand-primary">rutina completa.</span>
            </h2>
            
            <p className="text-lg text-brand-secondary font-light mb-12 leading-relaxed max-w-lg">
              Cada producto es elaborado con materia prima local, ingredientes de origen natural, biocompatibles, libres de gluten.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-brand-primary border border-brand-primary/10">
                    <ShieldCheck size={20} />
                 </div>
                 <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-brand-secondary mb-1">Artesanal</h4>
                    <p className="text-[10px] text-brand-secondary/60 uppercase font-bold tracking-tight">Hechos con amor.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-brand-primary border border-brand-primary/10">
                    <Leaf size={20} />
                 </div>
                 <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-brand-secondary mb-1">Saludables</h4>
                    <p className="text-[10px] text-brand-secondary/60 uppercase font-bold tracking-tight">Cuidan tu piel.</p>
                 </div>
              </div>
            </div>

            <Link to="/productos">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-primary text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl hover:bg-brand-secondary shadow-brand-secondary/20 flex items-center gap-3 transition-all"
              >
                Ver catálogo completo
                <ExternalLink size={16} />
              </motion.button>
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background frame decoration */}
            <div className="absolute -inset-4 border border-brand-primary/10 rounded-[4rem] -z-10" />
            
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_24px_48px_-12px_rgba(151,120,209,0.2)] group aspect-[4/5] lg:aspect-[4/5] max-w-md mx-auto">
              <img 
                src="/productos.jpg" 
                alt="Nuestros Productos" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/60 via-transparent to-transparent flex flex-col justify-end p-12 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                 <p className="text-white/60 text-[10px] uppercase font-black tracking-[0.4em] mb-2">Biotecnología Natural</p>
                 <h3 className="text-white text-3xl font-black uppercase tracking-tighter premium-heading">Ingredientes Vivientes</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
