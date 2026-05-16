/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { CoursesPage } from "./pages/CoursesPage";
import { PhilosophyPage } from "./pages/PhilosophyPage";
import { TermsPage } from "./pages/TermsPage";
import MentorshipPage from "./pages/MentorshipPage";
import { Footer } from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";
import { CartProvider } from "./context/CartContext";
import { CartDrawer } from "./components/CartDrawer";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return null;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <CartProvider>
      <div className="relative selection:bg-brand-primary/20 selection:text-brand-primary antialiased bg-white">
      {/* Visual Tech Layer: Grain / Noise */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />
      <ScrollToHash />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/cursos" element={<CoursesPage />} />
        <Route path="/mentoria" element={<MentorshipPage />} />
        <Route path="/filosofia" element={<PhilosophyPage />} />
        <Route path="/terminos" element={<TermsPage />} />
      </Routes>

      <CartDrawer />
      <Footer />
    </div>
    </CartProvider>
  );
}
