import { Instagram, Youtube, Mail, ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white py-20 px-6 border-t border-brand-primary/10 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <span className="font-sans text-2xl font-black uppercase tracking-widest text-brand-primary block mb-6">
              Un Té con Daniela
            </span>
            <p className="text-lg text-brand-secondary max-w-md leading-relaxed mb-8 font-sans font-light text-balance text-balance">
              Redescubriendo el bienestar a través de la sabiduría botánica y la innovación consciente. Únete a la comunidad de cosmética natural resiliente.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram size={20} />} href="https://instagram.com/untecondaniela" />
              <SocialIcon icon={<Youtube size={20} />} href="https://www.youtube.com/@untecondaniela" />
              <SocialIcon icon={<Mail size={20} />} href="mailto:untecondaniela@gmail.com" />
            </div>
          </div>

          <div>
            <h4 className="font-sans font-black text-[10px] uppercase tracking-[0.4em] mb-8 text-brand-secondary/40">Explorar</h4>
            <ul className="space-y-4 font-black text-brand-secondary/70 font-sans text-[10px] uppercase tracking-[0.2em]">
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/filosofia">Filosofía</FooterLink></li>
              <li><FooterLink to="/productos">Productos</FooterLink></li>
              <li><FooterLink to="/cursos">Cursos</FooterLink></li>
              <li><FooterLink to="/#mentorship">Mentoría</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-black text-[10px] uppercase tracking-[0.4em] mb-8 text-brand-secondary/40">Soporte</h4>
            <ul className="space-y-4 font-black text-brand-secondary/70 font-sans text-[10px] uppercase tracking-[0.2em]">
              <li><FooterLink to="/#contact">Contacto</FooterLink></li>
              <li><FooterLink to="#">FAQ</FooterLink></li>
              <li><FooterLink to="/terminos">Términos</FooterLink></li>
              <li><FooterLink to="/terminos">Privacidad</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-primary/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-brand-secondary/40 font-black tracking-[0.3em] font-sans uppercase">
            © 2026 untecondaniela.com • Inspiración • Naturaleza • Tecnología
          </p>
          
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="w-12 h-12 glass rounded-full flex items-center justify-center text-brand-primary border-brand-primary/10 transition-colors hover:text-brand-primary hover:bg-brand-primary/5"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href }: { icon: ReactNode, href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, backgroundColor: 'rgba(151, 120, 209, 0.2)', color: 'white' }}
      className="w-10 h-10 glass rounded-full flex items-center justify-center text-brand-primary/60 border-brand-primary/10 transition-colors"
    >
      {icon}
    </motion.a>
  );
}

function FooterLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="hover:text-brand-primary transition-colors block">
      {children}
    </Link>
  );
}
