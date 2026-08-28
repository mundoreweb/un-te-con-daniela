import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { cn } from "@/src/lib/utils";
import { useState, useEffect, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { cartItems, setIsCartOpen } = useCart();
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleContactClick = () => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6",
          scrolled ? "py-3" : "py-6"
        )}
      >
        <div className={cn(
          "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500",
          scrolled ? "bg-black/30 backdrop-blur-md border border-white/15 px-6 py-2.5 rounded-full shadow-xl" : "px-0"
        )}>
          <Link to="/" className="flex items-center gap-2 z-50">
            {/* 1. LOGO: Cambiado a texto blanco brillante para máximo contraste */}
            <span className="font-sans text-lg md:text-xl font-black uppercase tracking-widest text-white hover:opacity-90 transition-opacity">
              Un Té con Daniela
            </span>
          </Link>

          {/* 2. MENÚ DESKTOP: Se eliminó la clase opacity-70 que opacaba los enlaces */}
          <div className="hidden md:flex items-center gap-8 font-sans uppercase tracking-[0.2em] text-[11px] font-bold">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/filosofia">Filosofía</NavLink>
            <NavLink href="/productos">Productos</NavLink>
            <NavLink href="/cursos">Cursos</NavLink>
            <NavLink href="/mentoria">Mentoría</NavLink>
          </div>

          <div className="flex items-center gap-4 z-50">
            {/* 3. BOTÓN CARRITO: Icono en blanco con alta legibilidad */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-white/90 hover:text-white transition-colors flex items-center justify-center"
              aria-label="Open cart"
            >
              <ShoppingBag size={24} />
              <AnimatePresence>
                {cartItemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute -top-1 -right-1 bg-purple-500 text-white text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center ring-2 ring-black/40"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* 4. BOTÓN CONTACTO: Botón púrpura pastel visible sobre el gris */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="hidden md:block bg-purple-400/90 hover:bg-purple-400 text-purple-950 px-6 py-2 rounded-full font-extrabold text-[10px] uppercase tracking-widest transition-all shadow-md hover:shadow-purple-400/30"
            >
              Contacto
            </motion.button>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[40] bg-[#1a1721] text-white md:hidden"
          >
            <div className="flex flex-col h-full pt-32 pb-12 px-10">
              <div className="flex flex-col gap-8 flex-grow">
                <MobileNavLink href="/" index={0}>Home</MobileNavLink>
                <MobileNavLink href="/filosofia" index={1}>Filosofía</MobileNavLink>
                <MobileNavLink href="/productos" index={2}>Productos</MobileNavLink>
                <MobileNavLink href="/cursos" index={3}>Cursos</MobileNavLink>
                <MobileNavLink href="/mentoria" index={4}>Mentoría</MobileNavLink>
              </div>

              <div className="mt-auto">
                <button
                  onClick={handleContactClick}
                  className="w-full bg-purple-400 text-purple-950 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 shadow-lg shadow-purple-400/20"
                >
                  Hablar ahora
                  <ArrowRight size={18} />
                </button>
                <p className="text-center mt-12 text-[10px] uppercase tracking-[0.4em] font-black opacity-40 text-purple-200">
                  Inspiración • Naturaleza • Tecnología
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

{/* 5. COMPONENTE NavLink: Texto blanco con sub-línea brillante al hacer hover o estar activo */}
function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === href;
  
  return (
    <Link
      to={href}
      className={cn(
        "group flex items-center gap-2 transition-colors relative",
        isActive ? "text-white font-black" : "text-white/75 hover:text-white font-semibold"
      )}
    >
      {children}
      <span className={cn(
        "absolute -bottom-1 left-0 h-[2px] bg-white transition-all duration-300",
        isActive ? "w-full" : "w-0 group-hover:w-full"
      )} />
    </Link>
  );
}

function MobileNavLink({ href, children, index }: { href: string; children: ReactNode; index: number }) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + (index * 0.05) }}
    >
      <Link
        to={href}
        className={cn(
          "text-4xl font-black uppercase tracking-tighter transition-colors",
          isActive ? "text-purple-300" : "text-white/40 hover:text-white/80"
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
