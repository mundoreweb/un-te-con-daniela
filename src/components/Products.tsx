import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

interface Product {
  title: string;
  tag: string;
  image: string;
  color: string;
}

const products: Product[] = [
  {
    title: "Labial Nutritivo",
    tag: "Color y Nutrición Intensa",
    image: "/Labial Nutritivo.jpg",
    color: "bg-brand-primary/10"
  },
  {
    title: "BB Cream Proteción",
    tag: "Tonos: Almendra, Maní y Cacao",
    image: "/bb-cream.jpg",
    color: "bg-brand-wheat"
  },
  {
    title: "Desodorante Natural",
    tag: "Libre de Aluminio • Lavanda",
    image: "/Desodorante.jpg",
    color: "bg-brand-primary/5"
  },
  {
    title: "Jabón de Melocotón",
    tag: "Edición Especial Artisan",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&h=800",
    color: "bg-brand-secondary/10"
  },
  {
    title: "Aceite de Eucalipto",
    tag: "Concentrado Botánico Puro",
    image: "/aceite-eucalipto.jpg",
    color: "bg-brand-primary/10"
  },
  {
    title: "Polvo Traslúcido",
    tag: "Tonos Pro: Almendra, Maní y Cacao",
    image: "/polvo-traslucido.jpg",
    color: "bg-brand-wheat"
  }
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-white border-t border-brand-primary/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl font-sans">
            <h2 className="font-sans text-4xl md:text-5xl font-black uppercase tracking-tighter text-brand-forest mb-6 leading-tight premium-heading">
              Formulaciones <br />
              <span className="text-brand-primary">Conscientes.</span>
            </h2>
            <p className="text-brand-secondary leading-relaxed uppercase tracking-[0.2em] text-[10px] font-black">
              Artesanía botánica para una piel saludable y radiante.
            </p>
          </div>
          <motion.button 
            whileHover={{ y: -5 }}
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-brand-primary font-black font-sans text-[10px] uppercase tracking-widest flex items-center gap-2 group"
          >
            Ver catálogo completo
            <ExternalLink size={16} className="group-hover:rotate-45 transition-transform" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard key={`product-${i}`} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  product: Product;
  index: number;
  key?: string | number;
}

function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative"
    >
      <div className={`relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 ${product.color} transition-all duration-500 group-hover:shadow-2xl`}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent flex items-end p-8">
           <div className="glass px-4 py-2 rounded-full text-[10px] uppercase font-black tracking-widest text-brand-primary shadow-lg border-brand-primary/10">
             Edición Limitada
           </div>
        </div>
      </div>
      
      <h3 className="font-sans text-2xl font-black uppercase tracking-tight mb-1 text-brand-forest group-hover:text-brand-primary transition-colors premium-heading">
        {product.title}
      </h3>
      <p className="text-[10px] uppercase tracking-widest text-brand-secondary font-black font-sans">
        {product.tag}
      </p>
    </motion.div>
  );
}
