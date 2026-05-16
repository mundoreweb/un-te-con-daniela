import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { ProductsSection } from "../components/ProductsSection";
import { Courses } from "../components/Courses";
import { Mentorship } from "../components/Mentorship";
import { YouTubeSection } from "../components/YouTubeSection";
import { Contact } from "../components/Contact";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <main>
      <Hero />
      
      {/* Transitional Quote */}
      <section className="py-12 flex justify-center overflow-hidden">
         <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-center font-sans font-black text-2xl md:text-4xl max-w-4xl px-6 leading-none italic text-brand-primary/10 uppercase tracking-tighter"
         >
           "La naturaleza no tiene prisa, <br />
           <span className="text-brand-primary/40 text-balance">y sin embargo todo se logra."</span>
         </motion.div>
      </section>

      <About />
      
      {/* Tech Interstice */}
      <div className="h-[15vh] flex items-center justify-center bg-white relative">
         <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#9778d1_1px,transparent_1px)] [background-size:20px_20px]" />
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="w-24 h-24 border border-brand-primary/10 rounded-full flex items-center justify-center p-4"
         >
            <div className="w-full h-full border border-dashed border-brand-primary/20 rounded-full" />
         </motion.div>
      </div>

      <ProductsSection />
      <Courses />
      <Mentorship />
      <YouTubeSection />
      <Contact />
      
      {/* Community / Final CTA */}
      <section className="py-24 px-6">
         <div className="max-w-5xl mx-auto glass rounded-[4rem] p-12 md:p-24 text-center border-brand-primary/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-primary/5 -z-10" />
            <h2 className="font-sans text-4xl md:text-5xl font-black tracking-tighter text-brand-forest mb-8 leading-tight uppercase premium-heading">
               ¿Lista para <br /> tu <span className="text-brand-primary">transformación?</span>
            </h2>
            <p className="text-lg text-brand-secondary mb-12 max-w-xl mx-auto font-sans font-light">
               Únete a más de 5,000 alumnas que ya están formulando su propio bienestar. Cupos limitados para la próxima edición.
            </p>
            <Link to="/cursos">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl hover:shadow-brand-primary/30 transition-shadow transition-all"
              >
                 Quiero mi lugar ahora
              </motion.button>
            </Link>
         </div>
      </section>
    </main>
  );
}

