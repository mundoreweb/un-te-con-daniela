import { motion } from "motion/react";
import { Book, CheckCircle2, ChevronRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

interface Course {
  title: string;
  level: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean;
}

const courses: Course[] = [
  {
    title: "Extractos Botánicos",
    level: "Básico - Teórico",
    duration: "Práctico",
    price: "67,00$",
    features: ["Nociones básicas de botánica.", "Manipulación de las plantas", "Extracciones básicas.", "Elaboración de productos cosméticos usando extractos."],
    popular: true
  },
  {
    title: "Maquillaje Natural y Cuidado Facial Slow",
    level: "Básico - Teórico",
    duration: "Práctico",
    price: "67,00$",
    features: ["Datos históricos del maquillaje natural.", "Rutinas de cuidado facial slow", "Selección de las materias primas", "Elaboración de más de 15 productos"],
    popular: false
  },
  {
    title: "Cuidado Capilar Saludable y Consciente",
    level: "Avanzado",
    duration: "Teórico / Práctico",
    price: "$199",
    features: ["Características y necesidades del cabello.", "Selección de materias primas.", "Nociones básicas de formulación.","Formulación de diferentes productos capilares."],
    popular: false
  },
  {
    title: "Jabonería Natural",
    level: "Avanzado",
    duration: "Teórico / Práctico",
    price: "$120",
    features: ["Datos históricos y definición del jabón.", "Ingredientes y utensilios necesarios para su elaboración.", "Método de saponificación en frío y caliente.","El pH y el curado del jabón"],
    popular: false
  }
];

export function Courses() {
  return (
    <section id="courses" className="py-24 relative">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-sage/5 -skew-x-12 transform origin-top-right z-0" />
      
      <div className="container mx-auto px-6 relative z-10 font-sans">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-brand-primary font-black text-[10px] uppercase tracking-[0.3em] mb-6"
          >
            <Zap size={14} />
             Formaciones Alquímicas
          </motion.div>
          
          <h2 className="font-sans text-4xl md:text-5xl font-black tracking-tighter text-brand-forest mb-8 text-balance uppercase leading-tight premium-heading">
            Talleres de <br />
            <span className="text-brand-primary">Cosmética Natral.</span>
          </h2>
          
          <p className="text-lg text-brand-secondary font-light max-w-2xl mx-auto">
            Desde la extracción pura hasta el cuidado capilar consciente. Domina las técnicas que están transformando la industria del bienestar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {courses.map((course, i) => (
            <CourseCard key={`course-${i}`} course={course} index={i} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/cursos">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-brand-primary text-white rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl shadow-brand-primary/20"
            >
              Ver todos los talleres
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

interface CourseCardProps {
  course: Course;
  index: number;
  key?: string | number;
}

function CourseCard({ course, index }: CourseCardProps) {
  const isPurple = course.title === "Extractos Botánicos" || course.title === "Jabonería Natural";
  const isGray = course.title === "Maquillaje Natural & Slow" || course.title === "Cuidado Capilar Consciente";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border relative overflow-hidden transition-all duration-500 ${
        isPurple 
          ? "bg-brand-primary text-white border-brand-primary shadow-2xl shadow-brand-primary/30" 
          : isGray
            ? "bg-gray-100 text-brand-forest border-gray-200 shadow-xl"
            : "glass border-brand-primary/10 text-brand-forest shadow-xl"
      }`}
    >
      {course.popular && (
        <div className={`absolute top-6 right-6 md:top-8 md:right-8 ${isPurple ? 'bg-white text-brand-primary' : 'bg-brand-primary text-white'} px-3 md:px-4 py-1 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-sm`}>
          Más Popular
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mb-8 text-center sm:text-left">
        <div className={`p-4 rounded-2xl ${isPurple ? "bg-white/10" : "bg-brand-primary/10 text-brand-primary"}`}>
          <Book size={28} className="md:w-8 md:h-8" />
        </div>
        <div>
          <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest ${isPurple ? 'opacity-60' : 'text-brand-primary/60'} mb-1 block`}>
            {course.level} • {course.duration}
          </span>
          <h3 className="font-sans text-2xl md:text-3xl font-black uppercase tracking-tight premium-heading leading-tight">{course.title}</h3>
        </div>
      </div>

      <div className="space-y-3 md:space-y-4 mb-10">
        {course.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <CheckCircle2 size={16} className={isPurple ? "text-white/60" : "text-brand-primary"} />
            <span className={`text-[10px] md:text-xs ${isPurple ? 'opacity-80' : 'text-brand-forest/70'} font-bold font-sans uppercase tracking-tight`}>{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 sm:gap-4 text-center sm:text-left pt-6 border-t border-white/10">
        <div className="w-full sm:w-auto">
          <span className={`text-[9px] md:text-[10px] uppercase tracking-widest ${isPurple ? 'opacity-50' : 'opacity-30'} block mb-1 font-black`}>Inversión</span>
          <span className="font-sans text-4xl md:text-5xl font-black tracking-tighter block">{course.price}</span>
        </div>
        
        <Link to="/#contact" className="z-20 w-full sm:w-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full font-black transition-all shadow-lg text-[9px] md:text-[10px] uppercase tracking-widest ${
              isPurple 
                ? "bg-white text-brand-primary hover:bg-white/90" 
                : "bg-brand-primary text-white hover:shadow-brand-primary/20"
            }`}
          >
            Apartar cupo
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
