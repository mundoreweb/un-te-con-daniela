import { motion } from "motion/react";
import { Sparkles, Heart, Sprout, Compass, CheckCircle2, MessageCircle, Calendar, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export default function MentorshipPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] pt-32 pb-24 font-sans">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-brand-wheat/30 text-brand-forest rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-12"
          >
            <Heart size={14} className="text-brand-primary" />
             Tu espacio de transformación íntima
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-brand-secondary mb-12 leading-[0.9] premium-heading"
          >
            El Arte de <br />
            <span className="text-brand-primary">Florecer</span> <br />
            <span className="italic text-brand-secondary/30 font-light lowercase">en tu propio tiempo.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-secondary font-light max-w-2xl leading-relaxed mb-12"
          >
            Cada paso cuenta en tu formación. Esta mentoría no es un curso acelerado; es un acompañamiento profundo, técnico y espiritual diseñado para que tu proyecto cosmético respire verdad y coherencia.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
          >
            <a 
              href="https://wa.me/message/KAFOEFFC54FDM1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-brand-primary text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-brand-secondary hover:shadow-2xl hover:shadow-brand-secondary/20 transition-all shadow-xl flex items-center gap-4"
              >
                Comenzar proceso de admisión
                <ArrowRight size={16} />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Philosophy / The Method Section */}
      <section className="bg-brand-primary/5 py-32 mb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-wheat/10 -skew-x-12 transform origin-top-right z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-brand-secondary mb-8 leading-tight">
                Una guía <span className="text-brand-primary">artesanal</span> <br /> 
                para tu evolución.
              </h2>
              <p className="text-lg text-brand-secondary font-light mb-12 leading-relaxed">
                Mi metodología se basa en tres pilares que honran tanto la ciencia de la formulación como la intuición botánica. Aquí, el aprendizaje se siente como una conversación entre amigas expertas.
              </p>

              <div className="space-y-8">
                <MethodStep 
                  number="01"
                  title="Diagnóstico Esencial"
                  desc="Analizamos tus conocimientos previos, tus metas y la identidad que quieres proyectar en tus fórmulas."
                />
                <MethodStep 
                  number="02"
                  title="Inmersión Técnica"
                  desc="Pasamos a la acción con formulaciones de autor, corrección de procesos y optimización de ingredientes."
                />
                <MethodStep 
                  number="03"
                  title="Alineación Vital"
                  desc="Aseguramos que tu proyecto no solo sea técnico, sino que esté en paz con tu estilo de vida y valores."
                />
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-2 border-white">
                <img 
                  src="/Sobre-daniela.jpg" 
                  alt="Metodología Mentoria" 
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 border-[20px] border-brand-primary/10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-brand-secondary mb-4">¿Qué incluye tu camino?</h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <DetailCard 
            icon={<Calendar className="text-brand-primary" />}
            title="8 Semanas"
            desc="Un proceso de dos meses de acompañamiento continuo y personalizado."
          />
          <DetailCard 
            icon={<MessageCircle className="text-brand-primary" />}
            title="Soporte VIP"
            desc="Acceso directo vía WhatsApp para consultas técnicas urgentes."
          />
          <DetailCard 
            icon={<CheckCircle2 className="text-brand-primary" />}
            title="Kit de Fórmulas"
            desc="Recetario exclusivo adaptado a los insumos que tengas disponibles."
          />
          <DetailCard 
            icon={<Star className="text-brand-primary" />}
            title="Audit de Marca"
            desc="Revisión de tu comunicación y packaging para elevar tu propuesta."
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6">
        <div className="bg-[#e8efea] rounded-[5rem] p-16 md:p-24 text-center overflow-hidden relative border border-brand-primary/5">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full filter blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-wheat rounded-full filter blur-[100px] translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10">
            <Sparkles className="text-brand-primary mx-auto mb-8" size={48} />
            <h2 className="text-4xl md:text-6xl font-black uppercase text-brand-secondary mb-8 tracking-tighter leading-none">
              Solo abro <span className="text-brand-primary">3 cupos</span> <br /> 
              por mes.
            </h2>
            <p className="text-xl text-brand-secondary/60 font-light max-w-2xl mx-auto mb-12">
              Para garantizar la calidad y la entrega total que este proceso requiere, las mentorías son limitadas. Si sientes que es tu momento, hablemos.
            </p>
            <a 
              href="https://wa.me/message/KAFOEFFC54FDM1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-brand-primary text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-brand-secondary hover:shadow-2xl hover:shadow-brand-secondary/20 transition-all shadow-xl"
              >
                Reservar entrevista previa
              </motion.button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function MethodStep({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="flex gap-6 group">
      <span className="text-4xl font-black text-brand-primary/20 group-hover:text-brand-primary transition-colors duration-500">
        {number}
      </span>
      <div>
        <h4 className="text-lg font-black uppercase text-brand-secondary mb-2 tracking-tight">{title}</h4>
        <p className="text-sm text-brand-secondary/70 leading-relaxed font-light">{desc}</p>
      </div>
    </div>
  );
}

function DetailCard({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="p-10 bg-white rounded-[3rem] border border-brand-primary/5 hover:border-brand-primary/20 transition-all hover:shadow-xl hover:-translate-y-2 group text-center">
      <div className="w-16 h-16 bg-[#faf9f6] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-xl font-black uppercase text-brand-secondary mb-4 tracking-tight">{title}</h4>
      <p className="text-sm text-brand-secondary/80 leading-relaxed font-light">{desc}</p>
    </div>
  );
}
