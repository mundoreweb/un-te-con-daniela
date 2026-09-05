export const STORE_COMING_SOON = import.meta.env.VITE_COMING_SOON_STORE === "true";

export function useComingSoonGate() {
  if (!STORE_COMING_SOON) return false;

  // Truco para ti: Si entras a cualquier ruta que incluya /admin 
  // o si agregas "?preview=true" al final de la URL (ej: tuweb.com/?preview=true), 
  // la pantalla de espera te dejará ver la tienda completa.
  const path = window.location.pathname;
  const search = window.location.search;

  if (path.startsWith("/admin") || search.includes("preview=true")) {
    return false; // Te deja pasar a ver la web normal
  }

  return true; // Muestra la pantalla de coming soon a los demás visitantes
}