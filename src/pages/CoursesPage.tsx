import { motion } from "motion/react";
import {
  Book,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Star,
  Clock,
  Award,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface Course {
  title: string;
  level: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean;
  desc: string;
  image: string;
}

const courses: Course[] = [
  {
    title: "Extractos Botánicos",
    level: "Técnico",
    duration: "4 Semanas",
    price: "$67",
    desc: "Aprenderás a elaborar productos que contienen los extractos que vas aprendiendo, tales como: barra hidratante,agua de colonia, sidra de fuego, polvos dentales, protector solar, bálsamo hidratante para manos, repelente de insectos, tónico capilar fortalecedor, desinfectante multiuso.",
    features: [
      "Nociones básicas sobre la botánica",
      "Elaboración de oleatos",
      "Extractos botánicos en la cosmética",
      "Extracción gel de aloe vera",
    ],
    popular: true,
    image: "/Curso-extractos.jpg",
  },
  {
    title: "Maquillaje Natural & Slow",
    level: "Avanzado",
    duration: "6 Semanas",
    price: "$67",
    desc: "Un espacio para que le des una nueva mirada al maquillaje y las rutinas de skin care, para elaborar productos de cuidado facial y maquillaje según tus necesidades y adoptar hábitos de belleza slow.",
    features: [
      "Datos interesantes de la historia del maquillaje",
      "Diferenciar el maquillaje natural del convencional",
      "Integrar el concepto de Slow Beauty",
      "Seleccionar las materias primas adecuadas",
    ],
    popular: false,
    image: "/Curso-maquillaje.jpg",
  },
  {
    title: "Cuidado Capilar Consciente",
    level: "Estratégico",
    duration: "5 Semanas",
    price: "$79",
    desc: "Te acompañamos a crear una rutina de cuidado capilar tomando en cuenta las características de tu cabello tales como estructura o patrón, color, elasticidad, oleosidad y porosidad, así como también a reconocer los mejores ingredientes naturales para integrarlos en el manejo inteligente de tu cabello.",
    features: [
      "Identificar las características de tu cabello",
      "Comprender las necesidades de tu cabello",
      "Seleccionar las materias primas adecuadas",
      "Crear productos tales como champú sólido y líquido",
    ],
    popular: false,
    image: "/Curso-cuidado capilar.jpg",
  },
  {
    title: "Jabonería Natural",
    level: "Taller",
    duration: "3 Semanas",
    price: "$79",
    desc: "Comprenderás qué es un jabón, cuáles son sus ingredientes principales, diversos métodos para elaborarlos en casa de forma segura y efectiva. Además, podrás evaluar las ventajas de elaborar tu propio jabón.",
    features: [
      "Datos históricos y definición del jabón",
      "Saponificación en frío y caliente",
      "Índices de saponificación",
      "Control de PH y curado",
    ],
    popular: false,
    image: "/Jabon Eucalipto.jpg",
  },
];

export function CoursesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen font-sans">
      <div className="container mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-brand-primary mb-12 hover:translate-x-[-5px] transition-transform"
        >
          <ArrowLeft size={14} />
          Volver al Inicio
        </Link>

        <div className="max-w-4xl mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-brand-secondary mb-12 leading-none premium-heading break-words"
          >
            Formación <br />
            <span className="text-brand-primary">Transformadora.</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-brand-secondary font-light max-w-2xl leading-relaxed">
            Nuestros programas están diseñados para empoderarte con el
            conocimiento técnico y la visión estratégica necesaria para dominar
            el arte de la formulación natural.
          </p>
        </div>

        <div className="grid gap-16 mb-32">
          {courses.map((course, i) => (
            <FullCourseCard key={i} course={course} index={i} />
          ))}
        </div>

        {/* Community / Final CTA */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto glass rounded-[4rem] p-12 md:p-24 text-center border-brand-primary/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-primary/5 -z-10" />
            <h2 className="font-sans text-4xl md:text-5xl font-black tracking-tighter text-brand-forest mb-8 leading-tight uppercase premium-heading">
              ¿Lista para <br /> tu{" "}
              <span className="text-brand-primary">transformación?</span>
            </h2>
            <p className="text-lg text-brand-secondary mb-12 max-w-xl mx-auto font-sans font-light">
              Únete a más de 5,000 alumnas que ya están formulando su propio
              bienestar. Cupos limitados para la próxima edición.
            </p>
            <Link to="/cursos">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl hover:shadow-brand-primary/30 transition-shadow transition-all"
              >
                Quiero mi lugar ahora
              </motion.button>
            </Link>
          </div>
        </section>

        {/* New Rebranding & Facilitators Section */}
        <section className="py-24 mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />

          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-4 block"
            >
              Re-Evolución Botánica
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-brand-secondary mb-6 leading-[0.95] premium-heading"
            >
              Arquitectura <br />
              <span className="text-brand-primary">del Cuidado.</span>
            </motion.h2>
            <p className="text-lg text-brand-secondary/70 max-w-2xl mx-auto font-light leading-relaxed">
              Fusionamos la ciencia cosmética con la sabiduría ancestral y el
              bienestar emocional. Una sinergia diseñada para quienes buscan ir
              más allá de la fórmula.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FacilitatorCard
              name="Daniela Uzcátegui"
              role="Psicóloga y formuladora de cosmética natural"
              desc="Estratega de bienestar emocional a través de la alquimia botánica."
              image="/Daniela.jpg"
              index={0}
            />
            <FacilitatorCard
              name="Sondra Ríos"
              role="Comunicadora, naturópata y aromaterapeuta"
              desc="Experta en el lenguaje de los aceites esenciales y la sanación natural."
              image="/Sondra-Rios.jpg"
              index={1}
            />
            <FacilitatorCard
              name="Lucia León"
              role="Internacionalista y especialista en rizos"
              desc="Dedicada al empoderamiento a través del cuidado capilar consciente."
              image="/Lucia-Leon.jpg"
              index={2}
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="pt-24 border-t border-brand-primary/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-secondary mb-4 premium-heading break-words leading-tight">
              Nuestras <span className="text-brand-primary">Alumnas</span>
            </h2>
            <div className="w-24 h-1 bg-brand-primary/30 mx-auto rounded-full mb-8" />
            <p className="text-lg text-brand-secondary/60 font-light max-w-2xl mx-auto italic leading-relaxed">
              La transformación detrás de cada fórmula. Testimonios que inspiran
              el camino consciente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              text="El taller de maquillaje natural y cuidado facial slow, me abrió las puertas a una nueva forma de ver el cuidado de la piel. Fue muy enriquecedor y sobre todo me dejó con ganas de seguir profundizando, tanto para uso personal como para un emprendimiento. Ahora no considero que la cosmética natural sea moda, sino una necesidad para darle oxígeno a nuestro planeta."
              author="Marcela Ricón"
              location="Medellín. Colombia."
              delay={0}
            />
            <TestimonialCard
              text="En busca de mi cuidado personal y de ser cada día más amable y saludable con el ambiente que me rodea, realicé el curso de Cosmética Slow Online. Son una bendición, los conocimientos adquiridos, ya tengo 5 meses usando cosmética natural en todo mi cuerpo, realizo mis propios bálsamos corporales, shampoo sólido, acondicionador, etc. Con productos orgánicos, con grandes beneficios para mi cuerpo y protegiendo el medio ambiente... hoy por hoy mi cabello está sano, no se me cae no tiene caspa, tiene brillo y está fortalecido. Gracias Daniela por tu dedicación y por trasmitirnos tus conocimientos."
              author="Anakarina Luna Mendoza"
              location="Isla Margarita, edo Nueva Esparta. Venezuela."
              delay={0.1}
            />
            <TestimonialCard
              text="Me han encantado cada uno de los talleres que he realizado contigo, para mí fue la luz en medio de la oscuridad, apenas empezando en el mundo de la cosmética natural y realicé mi primer taller sobre el maravilloso gel de aloe vera, ya después me siento parte de la familia, por eso realice 4 talleres más (debo decir que todos son favoritos), cada experiencia ha sido enriquecedora, me gusta la claridad al explicar, la manera tan responsable de promover una vida saludable y cociente, la gran cantidad de ingredientes aptos que conocí en cada taller, así como el uso correcto de los mismos, dando a conocer los beneficios de usar los recursos que la madre tierra nos aporta."
              author="Rosaura Bruno"
              location="República Dominicana."
              delay={0.2}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function TestimonialCard({
  text,
  author,
  location,
  delay,
}: {
  text: string;
  author: string;
  location: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-10 bg-brand-primary/[0.02] border border-brand-primary/5 rounded-[3rem] hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 group flex flex-col items-center text-center h-full"
    >
      <div className="mb-6 flex justify-center">
        <Star
          className="text-brand-primary fill-brand-primary opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"
          size={32}
        />
      </div>

      <p className="text-sm md:text-base text-brand-secondary/80 font-light leading-relaxed italic mb-8 grow">
        "{text}"
      </p>

      <div className="mt-auto">
        <h4 className="text-lg font-black text-brand-secondary uppercase tracking-tight mb-1">
          {author}
        </h4>
        <p className="text-[10px] text-brand-primary uppercase font-black tracking-widest opacity-60">
          {location}
        </p>
      </div>
    </motion.div>
  );
}

interface FullCourseCardProps {
  key?: any;
  course: Course;
  index: number;
}

function FullCourseCard({ course, index }: FullCourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass rounded-[4rem] overflow-hidden border border-brand-primary/5 flex flex-col lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
    >
      <div className="lg:w-2/5 relative min-h-[400px]">
        <img
          src={course.image}
          className="w-full h-full object-cover"
          alt={course.title}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-forest/20" />
      </div>

      <div className="lg:w-3/5 p-8 sm:p-12 md:p-20 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-[10px] font-black uppercase tracking-widest">
            {course.level}
          </span>
          {course.popular && (
            <span className="px-4 py-1 bg-brand-wheat text-brand-forest rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
              Más Elegido
            </span>
          )}
        </div>

        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-brand-secondary mb-6 premium-heading break-words leading-[1.1]">
          {course.title}
        </h2>

        <p className="text-lg text-brand-secondary/80 font-light mb-10 leading-relaxed">
          {course.desc}
        </p>

        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            {course.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-brand-primary" />
                <span className="text-xs font-bold font-sans uppercase tracking-[0.1em] text-brand-forest/60">
                  {feature}
                </span>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Clock className="text-brand-primary" size={20} />
              <div>
                <p className="text-[10px] uppercase font-black opacity-40">
                  Duración
                </p>
                <p className="text-sm font-bold">{course.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="text-brand-primary" size={20} />
              <div>
                <p className="text-[10px] uppercase font-black opacity-40">
                  Certificación
                </p>
                <p className="text-sm font-bold">Avalada por Untecondaniela</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-brand-primary/10">
          <div>
            <p className="text-[10px] uppercase font-black opacity-40 mb-1">
              Inversión Final
            </p>
            <p className="text-4xl font-black text-brand-primary">
              {course.price}
            </p>
          </div>
          <motion.a
            href="https://wa.me/message/KAFOEFFC54FDM1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-brand-primary text-white rounded-full flex items-center justify-center font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-brand-secondary hover:shadow-brand-secondary/20 transition-all cursor-pointer"
          >
            Inscribirse Ahora
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

function FacilitatorCard({
  name,
  role,
  desc,
  image,
  index,
}: {
  name: string;
  role: string;
  desc: string;
  image: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-[450px] md:h-[500px] w-full rounded-[3rem] overflow-hidden bg-brand-secondary/5 border border-brand-primary/5 cursor-pointer"
    >
      {/* Container for the Image */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-90 group-hover:opacity-80 transition-opacity" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end transform transition-transform duration-500">
        <div className="overflow-hidden">
          <motion.p className="text-[10px] uppercase font-black tracking-[0.4em] text-brand-wheat mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            Maestra Facilitadora
          </motion.p>
        </div>

        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-1 leading-none">
          {name}
        </h3>

        <p className="text-xs font-bold text-brand-wheat uppercase tracking-widest mb-6 opacity-90">
          {role}
        </p>

        <div className="h-0 group-hover:h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
          <p className="text-sm text-white/70 font-light italic leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Floating Indicator */}
        <div className="absolute top-10 right-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform rotate-45 group-hover:rotate-0 transition-all duration-700">
          <Plus className="text-white" size={20} />
        </div>
      </div>
    </motion.div>
  );
}
