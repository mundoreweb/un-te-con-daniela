import { motion } from "motion/react";
import {
  ShoppingBag,
  ChevronRight,
  ArrowLeft,
  MapPin,
  Phone,
  MessageCircle,
  Plus,
  ChevronDown,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

interface Product {
  id?: number;
  title: string;
  tag: string;
  description: string;
  ingredients: string;
  price: string;
  image: string;
  color: string;
  tones?: string;
  selectedTone?: string;
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

    async function fetchData() {
      try {
        setLoading(true);

        const [productsResponse, alliesResponse] = await Promise.all([
          supabase.from("products").select("*").eq("visible_on_web", true),
          supabase.from("allies").select("*").order("id", { ascending: true }),
        ]);

        if (productsResponse.error) throw productsResponse.error;
        if (alliesResponse.error) throw alliesResponse.error;

        const rawProducts = productsResponse.data || [];

        // Orden exacto solicitado por el usuario
        const getProductRank = (title: string) => {
          const t = title.toLowerCase();
          if (t.includes("bb cream")) return 1;
          if (t.includes("polvo")) return 2;
          if (t.includes("labial")) return 3;
          if (t.includes("bálsamo") || t.includes("mantequita")) return 4;
          if (t.includes("desodorante")) return 5;
          if (t.includes("aceite")) return 6;
          if (t.includes("eucalipto") && t.includes("jabón")) return 7;
          if (t.includes("lavanda")) return 8;
          if (t.includes("avena")) return 9;
          if (t.includes("carbón")) return 10;
          if (t.includes("cacao")) return 11;
          if (t.includes("melocotón")) return 12;
          return 99;
        };

        rawProducts.sort(
          (a, b) => getProductRank(a.title) - getProductRank(b.title),
        );

        setProducts(rawProducts);
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
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-brand-primary mb-12 hover:translate-x-[-5px] transition-transform"
        >
          <ArrowLeft size={14} />
          Volver al Inicio
        </Link>

        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-brand-secondary mb-8 leading-none premium-heading">
            Pureza <br />
            <span className="text-brand-primary">Formulada.</span>
          </h1>
          <p className="text-xl text-brand-secondary/70 font-light max-w-xl leading-relaxed italic">
            Descubre la alquimia detrás de cada producto. Transparencia total en
            ingredientes para un cuidado consciente.
          </p>
        </div>

        {/* Cuadrícula de Productos (3 columnas, 4 filas) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-32">
          {products.map((product, i) => (
            <ProductGridCard
              key={product.id || i}
              product={product}
              index={i}
            />
          ))}
        </div>

        {/* Allies Section Dinámica */}
        <section className="pt-24 border-t border-brand-primary/10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-secondary mb-4 premium-heading">
              Red de Cuidado{" "}
              <span className="text-brand-primary">Consciente</span>
            </h2>
            <div className="w-24 h-1 bg-brand-primary/30 mx-auto rounded-full mb-8" />
            <p className="text-lg text-brand-secondary/60 font-light max-w-2xl mx-auto italic">
              Nuestros productos viajan por el país para encontrarse contigo.
              Descubre nuestras aliadas estratégicas y puntos de venta
              autorizados.
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

interface ProductGridCardProps {
  product: Product;
  index: number;
}

function ProductGridCard({ product, index }: ProductGridCardProps) {
  const { addToCart } = useCart();

  const toneOptions = product.tones
    ? product.tones.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  const [selectedTone, setSelectedTone] = useState<string>(
    toneOptions.length > 0 ? toneOptions[0] : ""
  );

  useEffect(() => {
    if (toneOptions.length > 0) {
      setSelectedTone(toneOptions[0]);
    }
  }, [product.tones]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white border border-brand-primary/10 rounded-[2.5rem] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(151,120,209,0.2)] transition-all duration-500 group"
    >
      <div>
        {/* Imagen Principal de Lado a Lado (Estilo Referencia) */}
        <div className={`w-full aspect-[4/4] overflow-hidden ${product.color || "bg-brand-primary/10"} relative`}>
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Contenido de la Tarjeta con Padding */}
        <div className="p-6">
          {/* Encabezado */}
          <div className="mb-3">
            <p className="text-[9px] uppercase tracking-[0.25em] text-brand-primary font-black mb-1">
              {product.tag}
            </p>
            <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-brand-secondary leading-snug">
              {product.title}
            </h3>
          </div>

          {/* Precio */}
          <div className="mb-3 inline-block bg-brand-primary/5 px-3 py-1 rounded-xl border border-brand-primary/10">
            <p className="text-base font-black text-brand-primary">{product.price}</p>
          </div>

          {/* Descripción breve */}
          <p className="text-xs text-brand-secondary/70 font-medium leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Selector de tonos si aplica */}
          {toneOptions.length > 0 && (
            <div className="mb-4">
              <label className="text-[9px] uppercase font-black text-brand-forest/60 tracking-widest mb-1.5 block italic">
                Selecciona tu tono
              </label>
              <div className="relative">
                <select
                  value={selectedTone}
                  onChange={(e) => setSelectedTone(e.target.value)}
                  className="w-full px-4 py-2 pr-8 bg-[#faf9f6] border border-brand-primary/20 rounded-xl text-[11px] font-bold text-brand-secondary uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-brand-primary/40 appearance-none cursor-pointer transition-all"
                >
                  {toneOptions.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none text-brand-primary">
                  <ChevronDown size={14} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Botón de Añadir al Carrito Estilo Píldora */}
      <div className="p-6 pt-0 mt-auto">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => addToCart({ ...product, selectedTone: toneOptions.length > 0 ? selectedTone : undefined })}
          className="w-full py-3 px-3 bg-brand-primary text-white rounded-full font-black text-[9px] md:text-[10px] uppercase tracking-wider transition-all hover:bg-brand-secondary flex items-center justify-center gap-1.5 shadow-sm"
        >
          <ShoppingBag size={13} className="shrink-0" />
          <span>Añadir al carrito</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

interface AllyCardProps {
  ally: Ally;
  index: number;
}

function AllyCard({ ally, index }: AllyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="p-8 bg-brand-primary/[0.01] border border-brand-primary/5 rounded-[2.5rem] hover:bg-white hover:border-brand-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(151,120,209,0.2)] transition-all duration-500 group cursor-default"
    >
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle
            size={14}
            className="text-brand-primary opacity-50 group-hover:opacity-100 transition-all duration-500"
          />
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
          <MapPin
            size={14}
            className="text-brand-primary/40 group-hover:text-brand-primary/70 transition-colors duration-500"
          />
          <span className="text-[10px] font-black uppercase tracking-widest leading-none">
            {ally.location}
          </span>
        </div>
        <div className="flex items-center gap-3 text-brand-secondary/50 group-hover:text-brand-secondary/80 transition-colors duration-500">
          <Phone
            size={14}
            className="text-brand-primary/40 group-hover:text-brand-primary/70 transition-colors duration-500"
          />
          <span className="text-[10px] font-black uppercase tracking-widest leading-none">
            {ally.phone}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
