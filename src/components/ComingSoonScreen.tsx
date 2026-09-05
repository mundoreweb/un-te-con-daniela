import { motion } from "framer-motion";

export function ComingSoonScreen() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#FAF7F2] px-6 py-16 text-center text-[#4A3728]">
      {/* Fondo con toques sutiles cálidos */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#F3EEE3] via-[#FAF7F2] to-[#F3EEE3]" />

      {/* NUEVA IMAGEN AÑADIDA AQUÍ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="mb-10 flex items-center justify-center"
      >
        <img
          src="/Sobre-daniela.jpg" // Asegúrate de que la ruta sea correcta
          alt="Un Té con Daniela Rebranding"
          className="max-w-sm rounded-2xl shadow-xl" // Estilos para que se vea bien
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }} // Retrasado un poco más para que entre después de la imagen
        className="max-w-2xl space-y-6"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-[#8C6D53] font-medium">
          Rebranding & Bienestar
        </p>

        <h1 className="font-serif text-4xl leading-[1.1] text-[#4A3728] sm:text-5xl md:text-6xl font-normal">
          Estamos remodelando nuestra casita virtual{" "}
        </h1>

        <p className="mx-auto max-w-xl text-base leading-relaxed text-[#5D4A3E] sm:text-lg font-light">
          Como cada rincón hecho a mano, este espacio también merece una pausa para llenarse de nuevos detalles. Estamos renovando nuestra imagen y mejorando cada espacio para que tu próxima visita esté llena de bienestar. Pronto volveremos a abrir las puertas con la misma calidez y amor de siempre. ¡Espéranos muy pronto!
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-8 text-xs uppercase tracking-[0.3em] text-[#8C6D53]"
      >
        Próximamente · Un Té con Daniela
      </motion.p>
    </div>
  );
}