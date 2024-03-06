import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useShop = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        const cart = get().cart;
        const existingProduct = cart.find((p) => p.id === product.id);

        if (existingProduct) {
          // Si le produit existe déjà dans le panier, augmentez sa quantité
          set({
            cart: cart.map((p) =>
              p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
            ),
          });
        } else {
          // Sinon, ajoutez le produit au panier avec une quantité de 1
          set({ cart: [...cart, { ...product, quantity: 1 }] });
        }
      },
      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter((p) => p.id !== product.id),
        })),
      clearCart: () => set({ cart: [] }),
      // Calcule le prix total du panier
      getTotalProduct: () =>
        get().cart.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        ),
      getTotalOneProduct: () =>
        get().cart.map((product) => product.price * product.quantity),
    }),
    {
      name: "shop",
    }
  )
);
