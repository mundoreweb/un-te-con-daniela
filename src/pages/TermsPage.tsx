import { motion } from "motion/react";
import { Shield, Lock, FileText, ChevronDown } from "lucide-react";
import { useState } from "react";

export function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary mb-4 block"
          >
            Transparencia & Confianza
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-secondary mb-6 leading-none premium-heading"
          >
            Términos y <br />
            <span className="text-brand-primary">Privacidad.</span>
          </motion.h1>
          <div className="w-12 h-1 bg-brand-primary/20 mx-auto rounded-full" />
        </header>

        <section className="space-y-12">
          {/* Terms Section */}
          <div className="glass p-8 md:p-12 rounded-[2rem] border border-brand-primary/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <FileText size={24} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-widest text-brand-secondary">Términos de Uso</h2>
            </div>
            
            <div className="space-y-8">
              <AccordionItem 
                title="1. Uso de la Plataforma" 
                content="Al acceder a untecondaniela.com, aceptas utilizar el sitio únicamente con fines legales y educativos. Queda prohibido el uso de técnicas de scraping o cualquier acción que comprometa la integridad de nuestra infraestructura."
              />
              <AccordionItem 
                title="2. Cursos y Mentorías" 
                content="El acceso a los cursos es personal e intransferible. Una vez adquirido el material, el alumno tiene derecho a su visualización según los tiempos estipulados en cada programa. No está permitida la reventa de los accesos."
              />
              <AccordionItem 
                title="3. Propiedad Intelectual" 
                content="Todas las fórmulas, guías y diseños botánicos compartidos bajo la marca Untecondaniela están protegidos por derechos de autor. Se prohíbe su reproducción, distribución o impartición como contenido propio sin autorización expresa por escrito."
              />
              <AccordionItem 
                title="4. Políticas de Devolución" 
                content="Debido a la naturaleza digital de nuestros productos (cursos online), no se realizan devoluciones una vez que se ha otorgado acceso al contenido, salvo en casos excepcionales donde se demuestre una falla técnica insalvable por nuestra parte."
              />
            </div>
          </div>

          {/* Privacy Section */}
          <div className="glass p-8 md:p-12 rounded-[2rem] border border-brand-primary/10 bg-brand-primary/[0.02]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <Lock size={24} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-widest text-brand-secondary">Privacidad Consciente</h2>
            </div>
            
            <div className="space-y-6 text-brand-secondary/70 leading-relaxed font-light">
              <p>
                En <span className="font-bold text-brand-secondary">Untecondaniela</span>, valoramos tu privacidad tanto como valoramos la pureza de un oleato. Tus datos personales son tratados bajo estrictos estándares de seguridad.
              </p>
              <ul className="list-disc pl-5 space-y-3">
                <li><span className="font-medium text-brand-secondary">Recolección:</span> Solo solicitamos información necesaria para la gestión de tus cursos (nombre, email, país).</li>
                <li><span className="font-medium text-brand-secondary">Uso:</span> Tus datos se utilizan para la comunicación sobre el curso y, si lo autorizas, novedades de la marca.</li>
                <li><span className="font-medium text-brand-secondary">Terceros:</span> No vendemos ni compartimos tus datos con terceros, excepto por procesadores de pago seguros como PayPal o Hotmart.</li>
              </ul>
            </div>
          </div>

          {/* Security Banner */}
          <div className="py-12 px-8 rounded-[3rem] bg-brand-secondary text-brand-wheat text-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
            <Shield className="mx-auto mb-4 text-brand-primary" size={40} />
            <p className="text-sm font-black uppercase tracking-[0.3em] mb-2">Seguridad Garantizada</p>
            <p className="text-xs opacity-60 max-w-sm mx-auto leading-relaxed">
              Utilizamos encriptación SSL para proteger cada interacción en nuestra plataforma. Tu aprendizaje es seguro.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

function AccordionItem({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-primary/10 pb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <span className="font-sans font-bold text-sm uppercase tracking-widest text-brand-secondary group-hover:text-brand-primary transition-colors">
          {title}
        </span>
        <ChevronDown 
          className={`text-brand-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={18} 
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pt-4 text-sm font-light text-brand-secondary/60 leading-relaxed italic">
          {content}
        </p>
      </motion.div>
    </div>
  );
}