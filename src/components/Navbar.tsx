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
          scrolled ? "glass px-6 py-2 rounded-full shadow-lg" : "px-0"
        )}>
          <Link to="/" className="flex items-center gap-2 z-50">
            <span className="font-sans text-lg md:text-xl font-black uppercase tracking-widest text-brand-primary">
              Un Té con Daniela
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-sans uppercase tracking-[0.2em] text-[10px] font-bold opacity-70">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/filosofia">Filosofía</NavLink>
            <NavLink href="/productos">Productos</NavLink>
            <NavLink href="/cursos">Cursos</NavLink>
            <NavLink href="/mentoria">Mentoría</NavLink>
          </div>

          <div className="flex items-center gap-4 z-50">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-brand-secondary hover:text-brand-primary transition-colors flex items-center justify-center"
              aria-label="Open cart"
            >
              <ShoppingBag size={24} />
              <AnimatePresence>
                {cartItemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute -top-1 -right-1 bg-brand-primary text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="hidden md:block bg-brand-primary text-white px-6 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all hover:bg-brand-secondary hover:shadow-lg hover:shadow-brand-secondary/20"
            >
              Contacto
            </motion.button>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-brand-primary flex items-center justify-center"
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
            className="fixed inset-0 z-[40] bg-white md:hidden"
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
                  className="w-full bg-brand-primary text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4"
                >
                  Hablar ahora
                  <ArrowRight size={18} />
                </button>
                <p className="text-center mt-12 text-[10px] uppercase tracking-[0.4em] font-black opacity-30 text-brand-secondary">
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

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const location = useLocation();
  
  return (
    <Link
      to={href}
      className={cn(
        "group flex items-center gap-2 text-brand-secondary/70 hover:text-brand-secondary transition-colors relative",
        location.pathname === href && "text-brand-primary"
      )}
    >
      {children}
      <span className={cn(
        "absolute -bottom-1 left-0 h-px bg-brand-wheat transition-all duration-300",
        location.pathname === href ? "w-full" : "w-0 group-hover:w-full"
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
          isActive ? "text-brand-primary" : "text-brand-secondary/40"
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
