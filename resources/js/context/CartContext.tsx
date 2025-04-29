import React, { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  qty: number;
  isOutOfStock: boolean;
  image: string;
}

interface CardContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    updateQuantity: (id: number, quantity: number) => void;
    removeProduct: (product: Product) => void;
    clearCard: () => void;
}

const CartContext = createContext <CardContextType | undefined>(undefined)
export default function CartProvider({ children }: PropsWithChildren) {
    const [cart, setCart] = useState<Product[]>([]);

    // Load cart from localStorage on mount
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(storedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
              return prevCart.map((item) =>
                item.id === product.id ? { ...item, qty: item.qty + product.qty } : item
              );
            }
            return [...prevCart, { ...product }];
          });
    }
    const updateQuantity = (productId: number, qty: number) => {
        if (qty < 1) {
            setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
            return;
        }
        setCart((prevCart) => {
          const existingItem = prevCart.find((item) => item.id === productId);
          if (existingItem) {
            return prevCart.map((item) =>
              item.id === productId ? { ...item, qty } : item
            );
          }
          return prevCart;
        });
    };
    const removeProduct = (product: Product) => {

    }
    const clearCard = () => {

    }
    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity,removeProduct,clearCard }}>
          {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  };
