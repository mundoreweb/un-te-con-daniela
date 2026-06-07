import { motion } from "motion/react";
import { ArrowLeft, Flower, Heart, Sun, Leaf, Sparkles, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function PhilosophyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-[#faf9f6] min-h-screen font-sans">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-brand-primary mb-12 hover:translate-x-[-5px] transition-transform">
          <ArrowLeft size={14} />
          Volver al Inicio
        </Link>
        
        {/* Section 1: Manifesto / Hero */}
        <section className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-brand-primary/5 text-brand-primary rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-12"
          >
            <Flower size={14} />
            Nuestra Esencia
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-brand-secondary mb-12 leading-none premium-heading"
          >
            Conexión <br />
            <span className="text-brand-primary">Botánica.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-secondary/70 font-light max-w-2xl leading-relaxed italic"
          >
            "En Un Té con Daniela, la cosmética es el puente. Proponemos un retorno a lo esencial, donde cada ingrediente es una invitación a sintonizar con los ritmos de la naturaleza y redescubrir nuestra propia vitalidad orgánica."
          </motion.p>
        </section>

        {/* Section 2: Story / Origin */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-[5rem] overflow-hidden shadow-2xl border-2 border-white">
                <img 
                  src="/Principal-01.jpg" 
                  alt="Daniela en su laboratorio" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-wheat/20 rounded-full blur-[80px] -z-10" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black uppercase tracking-tighter text-brand-secondary mb-8 leading-tight">
                El Alma Detrás <br /> <span className="text-brand-primary">de cada Gota.</span>
              </h2>
              <div className="space-y-6 text-lg text-brand-secondary/80 font-light leading-relaxed">
                <p>
                  En Un Té con Daniela, no solo formulamos; creamos puentes de consciencia. Mi propuesta es transformar tu rutina en un ritual de escucha botánica, donde los extractos puros y las infusiones se conviertan en aliadas de tu regeneración celular y equilibrio espiritual.
                </p>
                <p>
                  Nuestra propuesta se aleja de la cosmética industrial para abrazar una alquimia honesta. Cada frasco es una invitación a pausar, respirar la tierra y permitir que la sabiduría de las plantas trabaje en armonía con tu propia piel, sin promesas vacías, solo pureza real.
                </p>
                <p className="font-medium text-brand-primary italic">
                  Aquí, la naturaleza no es un ingrediente; es la maestra.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section: History & Process (NEW) */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-brand-primary/5 text-brand-primary rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                <BookOpen size={14} />
                Nuestro Relato
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-brand-secondary mb-8 leading-tight">
                Historia y <span className="text-brand-primary">Proceso Consciente.</span>
              </h2>
              <div className="space-y-8">
                <div className="border-l-2 border-brand-primary/20 pl-8 transition-all hover:border-brand-primary">
                  <h3 className="text-xl font-black uppercase text-brand-secondary mb-2 tracking-tight">El Origen</h3>
                  <p className="text-brand-secondary/70 font-light leading-relaxed">
                    Un Té con Daniela nace en la quietud de un jardín, observando cómo la naturaleza se regenera sin esfuerzo. Lo que comenzó como una búsqueda personal de salud para la piel, se transformó en un proyecto de vida dedicado a honrar la botánica.
                  </p>
                </div>
                <div className="border-l-2 border-brand-primary/20 pl-8 transition-all hover:border-brand-primary">
                  <h3 className="text-xl font-black uppercase text-brand-secondary mb-2 tracking-tight">La Alquimia</h3>
                  <p className="text-brand-secondary/70 font-light leading-relaxed">
                    Nuestro proceso no conoce de prisas. Seleccionamos plantas de origen orgánico, respetando sus ciclos de cosecha. Cada macerado y cada infusión reposa el tiempo necesario para liberar su máxima potencia vibratoria y biológica.
                  </p>
                </div>
                <div className="border-l-2 border-brand-primary/20 pl-8 transition-all hover:border-brand-primary">
                  <h3 className="text-xl font-black uppercase text-brand-secondary mb-2 tracking-tight">El Embajador Botánico</h3>
                  <p className="text-brand-secondary/70 font-light leading-relaxed">
                    Cada producto es un mensajero de bienestar. Desde la formulación técnica hasta el envasado artesanal, cuidamos que la energía de la planta llegue intacta a tus manos, creando una cadena de respeto que comienza en la tierra y termina en tu ritual diario.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
                <img 
                  src="/Portada.jpg" 
                  alt="Proceso de formulación natural" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-[40px] animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-wheat rounded-full blur-[60px] -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Section 3: Core Values / Pillars */}
        <section className="py-24 bg-[#e8efea] rounded-[5rem] p-12 md:p-24 relative overflow-hidden mb-32 border border-brand-primary/5">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full filter blur-[100px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-wheat rounded-full filter blur-[100px] -translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-20 text-brand-secondary">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Nuestros Pilares</h2>
              <p className="text-brand-secondary/40 font-light uppercase tracking-widest text-[10px] transition-all">Valores que nos definen</p>
            </div>
 
            <div className="grid md:grid-cols-3 gap-12 text-brand-secondary">
              <ValueCard 
                icon={<Leaf className="text-brand-primary" size={32} />}
                title="Escucha Botánica"
                desc="Entendemos que cada planta tiene un lenguaje. Formulamos respetando la inteligencia de la naturaleza para que tu piel aprenda a sanar desde adentro."
              />
              <ValueCard 
                icon={<Sun className="text-brand-primary" size={32} />}
                title="Pureza Sin Artificio"
                desc="Nuestra propuesta es la honestidad absoluta. Sin tóxicos, sin rellenos. Solo la potencia cruda y vibrante de extractos recién cosechados."
              />
              <ValueCard 
                icon={<Heart className="text-brand-primary" size={32} />}
                title="Ritual de Regreso"
                desc="Convertimos el cuidado diario en un momento de pausa y conexión. No es solo cosmética; es una invitación a volver a habitar tu propia naturaleza."
              />
            </div>
          </div>
        </section>

        {/* Section 4: Final Vision */}
        <section className="max-w-4xl mx-auto text-center">
          <Sparkles className="text-brand-primary mx-auto mb-8" size={48} />
          <h2 className="text-4xl font-black uppercase text-brand-secondary mb-8 tracking-tighter">
            Cultivando una <span className="text-brand-primary">Comunidad</span> <br /> que elige florecer.
          </h2>
          <p className="text-xl text-brand-secondary/60 font-light leading-relaxed mb-12">
            No estamos solas en este camino. Un Té con Daniela es una invitación a sentarte, respirar la fragancia de la lavanda y redescubrir tu propia belleza natural.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/cursos">
              <button className="px-10 py-5 bg-brand-primary text-white rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-brand-secondary transition-all">
                Aprender más
              </button>
            </Link>
            <Link to="/productos">
              <button className="px-10 py-5 border-2 border-brand-primary text-brand-primary rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all">
                Ver Productos
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="p-10 rounded-[3rem] bg-brand-wheat/50 border border-brand-primary/10 hover:bg-white hover:shadow-xl hover:shadow-brand-primary/5 transition-all group">
      <div className="mb-8 p-4 bg-brand-primary/10 w-fit rounded-2xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-black uppercase mb-4 tracking-tight text-brand-secondary">{title}</h3>
      <p className="text-brand-secondary/60 font-light leading-relaxed text-sm">{desc}</p>
    </div>
  );
}
