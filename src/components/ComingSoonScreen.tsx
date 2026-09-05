import { motion } from "framer-motion";

export function ComingSoonScreen() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#2C2D30] px-6 py-16 text-center text-white">
      {/* Fondo sutil con la atmósfera oscura y elegante de la marca */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#8a8a8a] via-[#7a7a7a] to-[#6a6a6a]" />

      {/* Imagen de daniela */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="mb-8 flex items-center justify-center"
      >
        <img
          src="/Sobre-daniela.jpg"
          alt="Un Té con Daniela Rebranding"
          className="max-w-xs sm:max-w-sm rounded-3xl shadow-2xl border border-white/10"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        className="max-w-2xl space-y-6"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-[#9778d1] font-medium">
          Bienestar & Belleza
        </p>

        <h1 className="font-serif text-3xl leading-[1.2] text-white sm:text-4xl md:text-5xl font-normal">
          Estamos remodelando nuestra casita virtual
        </h1>

        <p className="mx-auto max-w-xl text-base leading-relaxed text-[#D1D1D6] sm:text-lg font-light">
          Nos tomamos una pausa en éste espacio para llenarlo con nuevos detalles. Estamos renovando nuestra imagen y mejorando cada espacio para hacer de tu próxima visita una experiencia inolvidable. Pronto volveremos a abrir con la misma calidez y amor de siempre. ¡Nos vemos muy pronto!
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-8 text-xs uppercase tracking-[0.3em] text-[#9778d1]"
      >
        Próximamente · Un Té con Daniela
      </motion.p>
    </div>
  );
}