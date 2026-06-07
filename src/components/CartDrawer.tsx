import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Plus, Minus, Trash2, Send, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { supabase } from '../lib/supabaseClient'; // <- Importamos tu nuevo cliente de Supabase

const SALES_ENDPOINT = import.meta.env.VITE_SALES_ENDPOINT || "https://dashboardunte.lovable.app/api/public/sales";
const SALES_SECRET   = import.meta.env.VITE_SALES_WEBHOOK_SECRET;
const WHATSAPP_PHONE = "584247326655";

export function CartDrawer() {
  const { cartItems, updateQuantity, removeFromCart, total, subtotal, isSoapOfferApplied, isCartOpen, setIsCartOpen } = useCart();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  

  const handleCheckout = () => {
    setIsOrderModalOpen(true);
  };

  const onClose = () => setIsCartOpen(false);


  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col"
            >
              <div className="p-6 border-b border-brand-primary/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <ShoppingBag size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black uppercase tracking-tighter text-brand-secondary">Tu Carrito</h2>
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary opacity-60">
                      {totalItems} Artículos
                    </p>
                  </div>
                </div>
                <button 
                  onClick={onClose}
                  className="w-10 h-10 rounded-full hover:bg-brand-primary/5 flex items-center justify-center text-brand-secondary transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-brand-primary/5 flex items-center justify-center text-brand-primary/20">
                      <ShoppingBag size={40} />
                    </div>
                    <div>
                      <p className="text-brand-secondary font-bold uppercase tracking-widest text-xs">Tu carrito está vacío</p>
                      <p className="text-brand-secondary/40 text-[10px] uppercase font-black tracking-widest mt-2">¡Comienza a añadir pureza!</p>
                    </div>
                  </div>
                ) : (
                  cartItems.map((item) => {
                    const itemKey = item.title + (item.selectedTone ? `-${item.selectedTone}` : '');
                    return (
                      <div key={itemKey} className="flex gap-4 group">
                      <div className={`w-20 h-24 rounded-2xl overflow-hidden ${item.color || 'bg-brand-wheat'} flex-shrink-0 border border-brand-primary/5`}>
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <h3 className="text-sm font-black uppercase tracking-tight text-brand-secondary">{item.title}</h3>
                          {item.selectedTone && (
                            <p className="text-[10px] text-brand-secondary/60 font-bold uppercase tracking-widest mt-0.5">
                              Tono: {item.selectedTone}
                            </p>
                          )}
                          <p className="text-[10px] text-brand-primary font-bold uppercase tracking-widest mt-0.5">{item.price}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 bg-brand-primary/5 rounded-lg px-2 py-1">
                            <button 
                              onClick={() => updateQuantity(item.title, item.selectedTone, item.quantity - 1)}
                              className="text-brand-primary hover:text-brand-secondary transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-xs font-black text-brand-secondary w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.title, item.selectedTone, item.quantity + 1)}
                              className="text-brand-primary hover:text-brand-secondary transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.title, item.selectedTone)}
                            className="p-2 text-red-500/40 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                    );
                  })
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-8 bg-brand-primary/[0.02] border-t border-brand-primary/10">
                  {isSoapOfferApplied && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-3 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white flex-shrink-0 animate-pulse">
                        <Plus size={14} />
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-tighter text-brand-primary leading-tight">
                        ¡Oferta aplicada: Jabones a 5$! <br />
                        <span className="opacity-60 text-[9px]">Por llevar 4 o más unidades.</span>
                      </p>
                    </motion.div>
                  )}
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center text-brand-secondary/60 font-medium text-xs">
                      <span className="uppercase tracking-widest">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-brand-secondary font-black text-lg">
                      <span className="uppercase tracking-tighter">Total</span>
                      <span className="text-brand-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCheckout}
                    className="w-full py-5 bg-brand-primary text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-brand-primary/20 hover:bg-brand-secondary transition-all flex items-center justify-center gap-3"
                  >
                    Resumen de Pedido
                    <ChevronRight size={18} />
                  </motion.button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
        onConfirm={() => {
            setIsOrderModalOpen(false);
            onClose();
        }}
      />
    </>
  );
}

function OrderModal({ isOpen, onClose, onConfirm }: { isOpen: boolean, onClose: () => void, onConfirm: () => void }) {
  const { cartItems, total, isSoapOfferApplied } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");  
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleWhatsAppConfirm = async () => {
    setError(null);

    // 1. Validar que la clienta no deje campos en blanco
    if (!name.trim() || !phone.trim() || !state.trim()) {
      setError("Por favor completa tu nombre, teléfono y estado.");
      return;
    }

    if (cartItems.length === 0) {
      setError("Tu carrito está vacío.");
      return;
    }

    setLoading(true);

    try {
      // 2. Mapear los productos calculando la oferta de los jabones y tonos
      const formattedItems = cartItems.map((item) => {
        const isSoap = item.title.toLowerCase().includes('jabón') || item.title.toLowerCase().includes('jabon');
        
        // Si es jabón y la oferta está activa vale $5, si no, procesa su precio normal
        const itemPrice = (isSoap && isSoapOfferApplied)
          ? 5
          : parseFloat(item.price.replace(',', '.').replace('$', '').trim());

        return {
          product_name: item.title,
          quantity: item.quantity,
          unit_price: itemPrice,
          ...(item.selectedTone ? { tone: item.selectedTone } : {})
        };
      });

    // 3. Conectarse de forma segura al endpoint del Dashboard
      const response = await fetch(SALES_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-webhook-secret": SALES_SECRET || "",
        },
        body: JSON.stringify({
          client: {
            name: name.trim(),
            phone: phone.trim(),
            state: state.trim(),
          },
          items: formattedItems,
        }),
      });

      // 4. Validar si el Dashboard aceptó el registro de la venta
      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        throw new Error(errorBody.error || `Error del servidor (${response.status})`);
      }

      // 5. Extraer el ID de venta generado por Supabase
      const data = await response.json() as { sale_id: string };
      const saleId = data.sale_id;
      const shortId = saleId.slice(0, 8).toUpperCase(); // Genera un código de factura corto (ej. A1B2C3D4)
      // 6. Construir el cuerpo del mensaje de WhatsApp con tu formato original
      let message = `¡Hola Daniela! 👋 Soy *${name.trim()}*.\n`;
      message += `He dejado listo mi pedido en la web:\n`;
      message += `--------------------------\n`;

      cartItems.forEach(item => {
        const isSoap = item.title.toLowerCase().includes('jabón') || item.title.toLowerCase().includes('jabon');
        const itemPrice = (isSoap && isSoapOfferApplied) 
          ? 5 
          : parseFloat(item.price.replace(',', '.').replace('$', '').trim());
        const toneSuffix = item.selectedTone ? ` [Tono: ${item.selectedTone}]` : '';
        
        message += `• ${item.title}${toneSuffix} x${item.quantity} - $${(itemPrice * item.quantity).toFixed(2)}\n`;
      });

      message += `--------------------------\n`;
      if (isSoapOfferApplied) {
        message += `✅ ¡Oferta de jabones aplicada! ($5 c/u)\n`;
        message += `--------------------------\n`;
      }
      
      // Añadimos los datos de control del dashboard al mensaje
      message += `💰 *Total a pagar: $${total.toFixed(2)}*\n\n`;
      message += `📍 *Ubicación:* ${state.trim()}\n`;
      message += `🧾 *N° de Pedido:* #${shortId}\n`;
      message += `_(ID de control: ${saleId})_\n\n`;
      message += `Quedo atenta para hacerte el Pago Móvil / Zelle. ¡Gracias!`;
      // 7. Codificar el mensaje generado y abrir la pestaña de WhatsApp
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`, '_blank');
      
      // 8. Confirmar la orden localmente en la web (limpiar el carrito y cerrar)
      onConfirm();

    } catch (e: any) {
      // Captura fallos de internet o del servidor y los pinta en el modal
      setError(e.message || "No pudimos registrar el pedido automáticamente. Intenta de nuevo.");
    } finally {
      // Apaga el estado de carga para liberar el botón
      setLoading(false);
    }
  };
  

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-secondary/80 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-xl bg-[#faf9f6] rounded-[3rem] shadow-2xl overflow-hidden border border-white/50"
        >
          {/* Receipt Decor */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:10px_2px] opacity-20" />
          
          <div className="p-10 md:p-14">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary mb-2">Comprobante de Pedido</h3>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-brand-secondary leading-none">
                  Un Té con <br />
                  <span className="text-brand-primary">Daniela</span>
                </h2>
              </div>
              <button 
                onClick={onClose}
                className="w-12 h-12 rounded-2xl bg-brand-primary/5 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex justify-between items-end border-b border-brand-primary/10 pb-4 text-[10px] font-black uppercase tracking-widest text-brand-secondary/40">
                <span>Producto</span>
                <span>Total</span>
              </div>
              
              <div className="space-y-4 max-h-[30vh] overflow-y-auto pr-2 custom-scrollbar">
                {cartItems.map((item) => {
                  const isSoap = item.title.toLowerCase().includes('jabón') || item.title.toLowerCase().includes('jabon');
                  const itemPrice = (isSoap && isSoapOfferApplied) ? 5 : parseFloat(item.price.replace(',', '.').replace('$', ''));
                  const itemKey = item.title + (item.selectedTone ? `-${item.selectedTone}` : '');
                  
                  return (
                    <div key={itemKey} className="flex justify-between items-start">
                      <div className="max-w-[70%]">
                        <p className="text-sm font-bold uppercase tracking-tight text-brand-secondary mb-1">
                          {item.title} <span className="text-brand-primary opacity-60">x{item.quantity}</span>
                        </p>
                        {item.selectedTone && (
                          <p className="text-[10px] text-brand-secondary/60 font-bold mb-1 uppercase tracking-wider">
                            Tono: {item.selectedTone}
                          </p>
                        )}
                        {isSoap && isSoapOfferApplied && (
                          <span className="text-[9px] font-black bg-brand-primary/10 text-brand-primary px-2 py-0.5 rounded-full">Precio Especial</span>
                        )}
                      </div>
                      <p className="text-sm font-black text-brand-secondary">
                        ${(itemPrice * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-brand-primary/5 rounded-[2rem] p-8 mb-10 border border-brand-primary/10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary/60">Total final</span>
                <span className="text-2xl font-black text-brand-primary">${total.toFixed(2)}</span>
              </div>
              {isSoapOfferApplied && (
                <p className="text-[9px] font-bold text-brand-primary/70 italic">* Descuento por lote de jabones aplicado exitosamente.</p>
              )}
            </div>

            <div className="space-y-4 mb-6 text-left w-full">
              <div>
                <label className="block text-[9px] font-black text-brand-secondary/60 mb-1 uppercase tracking-widest">
                  Nombre Completo *
                </label>
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. María Pérez"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-brand-primary bg-white text-brand-secondary"
                  required
                />
              </div>

              <div>
                <label className="block text-[9px] font-black text-brand-secondary/60 mb-1 uppercase tracking-widest">
                  Teléfono (WhatsApp) *
                </label>
                <input 
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej. 04141234567"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-brand-primary bg-white text-brand-secondary"
                  required
                />
              </div>

              <div>
                <label className="block text-[9px] font-black text-brand-secondary/60 mb-1 uppercase tracking-widest">
                  Estado / Ciudad *
                </label>
                <input 
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="Ej. Mérida"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-brand-primary bg-white text-brand-secondary"
                  required
                />
              </div>
            </div>

            {/* Alerta de error si falta algún campo */}
            {error && (
              <p className="text-red-600 text-[10px] font-bold text-center my-3 bg-red-50 p-2.5 rounded-xl border border-red-100 uppercase tracking-wider">
                {error}
              </p>
            )}

            {/* --- TU BOTÓN ORIGINAL (Modificado con control de carga) --- */}
            <motion.button
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              onClick={handleWhatsAppConfirm}
              disabled={loading}
              className={`w-full py-6 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl transition-all flex items-center justify-center gap-3 ${
                loading ? 'bg-gray-400 cursor-not-allowed shadow-none' : 'bg-brand-primary hover:bg-brand-secondary'
              }`}
            >
              {loading ? "Registrando pedido..." : "Confirmar pedido por WhatsApp"}
              {!loading && <Send size={18} />}
            </motion.button>
            
            <p className="text-[9px] font-bold text-center text-brand-secondary/40 mt-6 uppercase tracking-widest leading-relaxed">
              Al confirmar, serás redirigido para <br /> coordinar el pago y envío.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
