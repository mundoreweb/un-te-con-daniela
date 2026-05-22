import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Product {
    title: string;
    tag: string;
    description: string;
    ingredients: string;
    price: string; // e.g. "10,00$"
    image: string;
    color: string;
    category?: string;
    tones?: string;
    selectedTone?: string;
}

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productTitle: string, selectedTone?: string) => void;
    updateQuantity: (productTitle: string, selectedTone: string | undefined, quantity: number) => void;
    clearCart: () => void;
    subtotal: number;
    total: number;
    isSoapOfferApplied: boolean;
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem('untecondaniela_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('untecondaniela_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product: Product) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => 
                item.title === product.title && item.selectedTone === product.selectedTone
            );
            if (existingItem) {
                return prev.map(item =>
                    item.title === product.title && item.selectedTone === product.selectedTone
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productTitle: string, selectedTone?: string) => {
        setCartItems(prev => prev.filter(item => !(item.title === productTitle && item.selectedTone === selectedTone)));
    };

    const updateQuantity = (productTitle: string, selectedTone: string | undefined, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productTitle, selectedTone);
            return;
        }
        setCartItems(prev => prev.map(item =>
            item.title === productTitle && item.selectedTone === selectedTone ? { ...item, quantity } : item
        ));
    };

    const clearCart = () => setCartItems([]);

    // Logic for the SOAP RULE
    // "Jabón de Melocotón", "Jabón de Lavanda", "Jabón de Avena", "Jabón de Carbón Activado"
    const soapItems = cartItems.filter(item => item.title.toLowerCase().includes('jabón') || item.title.toLowerCase().includes('jabon'));
    const totalSoapQuantity = soapItems.reduce((acc, item) => acc + item.quantity, 0);
    const isSoapOfferApplied = totalSoapQuantity >= 4;

    const calculateItemPrice = (item: CartItem) => {
        const isSoap = item.title.toLowerCase().includes('jabón') || item.title.toLowerCase().includes('jabon');
        if (isSoap && isSoapOfferApplied) {
            return 5;
        }
        return parseFloat(item.price.replace(',', '.').replace('$', ''));
    };

    const subtotal = cartItems.reduce((acc, item) => {
        return acc + (calculateItemPrice(item) * item.quantity);
    }, 0);

    const total = subtotal; // can add shipping later if needed

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            subtotal,
            total,
            isSoapOfferApplied,
            isCartOpen,
            setIsCartOpen
        }}>
            {children}
        </CartContext.Provider>
    );
};
