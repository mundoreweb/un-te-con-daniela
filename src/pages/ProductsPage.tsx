import { motion } from "motion/react";
import { ShoppingBag, ChevronRight, ArrowLeft, MapPin, Phone, MessageCircle, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient"; // Asegúrate de ajustar la ruta de importación

interface Product {
  id?: number;
  title: string;
  tag: string;
  description: string;
  ingredients: string;
  price: string;
  image: string;
  color: string;
}

interface Ally {
  id?: number;
  handle: string;
  description: string;
  location: string;
  phone: string;
}

export function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [allies, setAllies] = useState<Ally[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Función para traer los datos en paralelo desde Supabase
    async function fetchData() {
      try {
        setLoading(true);
        
        const [productsResponse, alliesResponse] = await Promise.all([
          supabase.from("products").select("*").order("id", { ascending: true }),
          supabase.from("allies").select("*").order("id", { ascending: true })
        ]);

        if (productsResponse.error) throw productsResponse.error;
        if (alliesResponse.error) throw alliesResponse.error;

        setProducts(productsResponse.data || []);
        setAllies(alliesResponse.data || []);
      } catch (error) {
        console.error("Error cargando datos de Supabase:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center font-sans">
        <p className="text-brand-primary font-black uppercase tracking-widest text-[11px] animate-pulse">
          Cargando Alquimia Consciente...
        </p>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-[#faf9f6] min-h-screen font-sans">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-brand-primary mb-12 hover:translate-x-[-5px] transition-transform">
          <ArrowLeft size={14} />
          Volver al Inicio
        </Link>
        
        <div className="max-w-3xl mb-24">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-brand-secondary mb-8 leading-none premium-heading">
            Pureza <br />
            <span className="text-brand-primary">Formulada.</span>
          </h1>
          <p className="text-xl text-brand-secondary/70 font-light max-w-xl leading-relaxed italic">
            Descubre la alquimia detrás de cada producto. Transparencia total en ingredientes para un cuidado consciente.
          </p>
        </div>

        {/* Sección de Productos Dinámicos */}
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-24 mb-32">
          {products.map((product, i) => (
            <ProductDetailCard key={product.id || i} product={product} index={i} />
          ))}
        </div>

        {/* Allies Section Dinámica */}
        <section className="pt-24 border-t border-brand-primary/10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-secondary mb-4 premium-heading">
              Red de Cuidado <span className="text-brand-primary">Consciente</span>
            </h2>
            <div className="w-24 h-1 bg-brand-primary/30 mx-auto rounded-full mb-8" />
            <p className="text-lg text-brand-secondary/60 font-light max-w-2xl mx-auto italic">
              Nuestros productos viajan por el país para encontrarse contigo. 
              Descubre nuestras aliadas estratégicas y puntos de venta autorizados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allies.map((ally, i) => (
              <AllyCard key={ally.id || i} ally={ally} index={i} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// (Los componentes ProductDetailCard y AllyCard quedan exactamente iguales a como los tenías)
interface ProductDetailCardProps {
  product: Product;
  index: number;
}

function ProductDetailCard({ product, index }: ProductDetailCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center"
    >
      <div className={`w-full md:w-2/5 aspect-[4/5] rounded-[3rem] overflow-hidden ${product.color} shadow-[0_20px_50px_-15px_rgba(151,120,209,0.3)] relative group border border-white/40`}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="w-full md:w-3/5 flex flex-col pt-4">
        <div className="mb-6 flex justify-between items-start">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand-primary font-black mb-2">
              {product.tag}
            </p>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-brand-forest leading-none premium-heading">
              {product.title}
            </h3>
          </div>
          <div className="bg-brand-primary/5 px-4 py-2 rounded-2xl border border-brand-primary/10">
            <p className="text-lg font-black text-brand-primary">{product.price}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-[10px] uppercase font-black text-brand-forest/60 tracking-widest mb-2 italic">Descripción</h4>
            <p className="text-base text-brand-secondary font-medium leading-relaxed">
              {product.description}
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase font-black text-brand-forest/60 tracking-widest mb-2 italic">Ingredientes</h4>
            <p className="text-[11px] text-brand-secondary/70 font-medium leading-relaxed uppercase tracking-tight">
              {product.ingredients}
            </p>
          </div>

          <div className="pt-4 mt-auto">
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => addToCart(product)}
               className="w-full md:w-auto px-8 py-4 bg-brand-primary text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all hover:bg-brand-secondary flex items-center justify-center gap-3 group"
             >
               Añadir al carrito
               <Plus size={16} className="group-hover:rotate-90 transition-transform" />
             </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AllyCard({ ally, index }: { ally: Ally; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -12, scale: 1.03 }}
      className="p-8 bg-brand-primary/[0.01] border border-brand-primary/5 rounded-[2.5rem] hover:bg-white hover:border-brand-primary/30 hover:shadow-[0_30px_60px_-15px_rgba(151,120,209,0.2)] transition-all duration-500 group cursor-default"
    >
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle size={14} className="text-brand-primary opacity-50 group-hover:opacity-100 group-hover:scale-120 transition-all duration-500" />
          <h4 className="text-xl font-black text-brand-secondary tracking-tight group-hover:text-brand-primary transition-colors duration-500">
            {ally.handle}
          </h4>
        </div>
        <p className="text-sm text-brand-secondary/70 italic leading-relaxed min-h-[3rem] group-hover:text-brand-secondary transition-colors duration-500">
          "{ally.description}"
        </p>
      </div>

      <div className="pt-6 border-t border-brand-primary/5 space-y-3">
        <div className="flex items-center gap-3 text-brand-secondary/50 group-hover:text-brand-secondary/80 transition-colors duration-500">
          <MapPin size={14} className="text-brand-primary/40 group-hover:text-brand-primary/70 transition-colors duration-500" />
          <span className="text-[10px] font-black uppercase tracking-widest leading-none">
            {ally.location}
          </span>
        </div>
        <div className="flex items-center gap-3 text-brand-secondary/50 group-hover:text-brand-secondary/80 transition-colors duration-500">
          <Phone size={14} className="text-brand-primary/40 group-hover:text-brand-primary/70 transition-colors duration-500" />
          <span className="text-[10px] font-black uppercase tracking-widest leading-none">
            {ally.phone}
          </span>
        </div>
      </div>
    </motion.div>
  );
}