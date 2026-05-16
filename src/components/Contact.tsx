import { motion } from "motion/react";
import { Mail, MessageSquare, Instagram, Send } from "lucide-react";
import type { ReactNode } from "react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#faf9f6] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-sans text-4xl md:text-6xl font-black tracking-tighter text-brand-secondary mb-6 uppercase leading-tight premium-heading">
              Hablemos de tu <span className="text-brand-primary">bienestar.</span>
            </h2>
            <div className="w-24 h-1 bg-brand-primary/30 mx-auto rounded-full mb-8" />
            <p className="text-lg text-brand-secondary/60 max-w-2xl mx-auto font-sans font-light leading-relaxed italic">
              ¿Tienes dudas sobre un curso, un producto o simplemente quieres saludar? Mi equipo y yo estamos listos para escucharte.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-4 flex flex-col justify-center space-y-8">
              <ContactMethod icon={<Mail className="text-brand-primary" />} label="Escríbenos" value="hola@untecondaniela.com" href="mailto:hola@untecondaniela.com" />
              <ContactMethod icon={<Instagram className="text-brand-primary" />} label="Instagram" value="@untecondaniela" href="https://instagram.com/untecondaniela" />
              <ContactMethod icon={<MessageSquare className="text-brand-primary" />} label="Comunidad" value="Únete a nuestro canal" href="#" />
            </div>

            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#e8efea] rounded-[4rem] p-10 md:p-16 shadow-[0_30px_100px_-20px_rgba(151,120,209,0.15)] border border-brand-primary/10 relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <form className="grid md:grid-cols-2 gap-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary ml-1">Nombre Completo</label>
                    <input 
                      type="text" 
                      placeholder="Tu nombre aquí" 
                      className="w-full bg-white border border-brand-primary/5 rounded-2xl px-6 py-5 outline-none focus:border-brand-primary/40 focus:shadow-lg focus:shadow-brand-primary/5 transition-all font-sans text-sm shadow-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary ml-1">Correo Electrónico</label>
                    <input 
                      type="email" 
                      placeholder="hola@tuemail.com" 
                      className="w-full bg-white border border-brand-primary/5 rounded-2xl px-6 py-5 outline-none focus:border-brand-primary/40 focus:shadow-lg focus:shadow-brand-primary/5 transition-all font-sans text-sm shadow-sm"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary ml-1">Tu Mensaje</label>
                    <textarea 
                      rows={4} 
                      placeholder="Cuéntanos cómo podemos acompañarte..." 
                      className="w-full bg-white border border-brand-primary/5 rounded-2xl px-6 py-5 outline-none focus:border-brand-primary/40 focus:shadow-lg focus:shadow-brand-primary/5 transition-all font-sans text-sm resize-none shadow-sm"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-brand-primary text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:bg-brand-secondary transition-all flex items-center justify-center gap-3 group"
                    >
                      Enviar Solicitud
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-primary/5 rounded-full filter blur-[80px] -z-10" />
    </section>
  );
}

function ContactMethod({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href: string }) {
  return (
    <a href={href} className="group flex items-center gap-6">
      <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-secondary/40 mb-1">{label}</p>
        <p className="font-sans text-sm font-bold text-brand-secondary group-hover:text-brand-primary transition-colors">{value}</p>
      </div>
    </a>
  );
}
