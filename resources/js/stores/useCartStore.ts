import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Products } from '@/Pages/Home'

interface CartState {
  cart: Products[]
  addToCart: (product: Products) => void
  updateQuantity: (productId: number, qty: number) => void
  removeProduct: (product: Products) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === product.id)
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, qty: item.qty + product.qty }
                  : item
              ),
            }
          }
          return { cart: [...state.cart, { ...product }] }
        }),
      updateQuantity: (productId, qty) =>
        set((state) => {
          if (qty < 1) {
            return { cart: state.cart.filter((item) => item.id !== productId) }
          }
          return {
            cart: state.cart.map((item) =>
              item.id === productId ? { ...item, qty } : item
            ),
          }
        }),
      removeProduct: (product) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== product.id),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'cart', // Key for localStorage
    }
  )
)
