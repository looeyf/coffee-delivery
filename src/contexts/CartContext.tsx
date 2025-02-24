import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Product } from '../@types/Product';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  updateCartItems: (updatedCartItem: CartItem) => void;
}

const CartContext = createContext({} as CartContextType);

// @TODO: create reducer to handle context updates
export function CartContextProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const updateCartItems = (updatedCartItem: CartItem) => {
    setCartItems((currentCartItems) => {
      const isProductInCart = currentCartItems.find(
        (currentCartItem) => currentCartItem.id === updatedCartItem.id,
      );

      if (isProductInCart) {
        const updatedCartItems = currentCartItems.map((currentCartItem) => {
          if (currentCartItem.id === updatedCartItem.id) return updatedCartItem;
          return currentCartItem;
        });
        return updatedCartItems;
      }

      return [...currentCartItems, updatedCartItem];
    });
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        updateCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext);
}
