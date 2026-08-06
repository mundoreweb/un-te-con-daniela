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
          className="text-center font-sans font-black text-2xl md:text-4xl max-w-4xl px-6 leading-tight italic text-brand-primary/80 uppercase tracking-tighter"
        >
          "Valora y celebra cada pequeño paso que das , <br />
          <span className="text-brand-primary text-balance">
          hacia una vida más saludable y consciente. -Dan."
          </span>
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

      
    </main>
  );
}
