import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Product } from '../@types/Product';

interface CartItem extends Product {
  quantity: number;
}

type CartItems = CartItem[];

interface CartContextType {
  cartItems: CartItems;
  updateCartItems: (updatedCartItem: CartItem) => void;
  removeCartItem: (cartItemId: CartItem) => void;
}

const CartContext = createContext({} as CartContextType);

const LOCAL_STORAGE_CART_ITEMS_KEY = '@rocketseat:coffee-delivery-cart';

// @TODO: create reducer to handle context updates
export function CartContextProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItems>([]);

  const saveCartItemsInLocalStorage = (newCartItems: CartItems) => {
    localStorage.setItem(
      LOCAL_STORAGE_CART_ITEMS_KEY,
      JSON.stringify(newCartItems),
    );
  };

  const updateCartItems = (updatedCartItem: CartItem) => {
    setCartItems((currentCartItems) => {
      const isProductInCart = currentCartItems.find(
        (currentCartItem) => currentCartItem.id === updatedCartItem.id,
      );

      let updatedCartItems: CartItems;

      if (isProductInCart) {
        updatedCartItems = currentCartItems.map((currentCartItem) => {
          if (currentCartItem.id === updatedCartItem.id) return updatedCartItem;
          return currentCartItem;
        });
      } else {
        updatedCartItems = [...currentCartItems, updatedCartItem];
      }

      saveCartItemsInLocalStorage(updatedCartItems);
      return updatedCartItems;
    });
  };

  const removeCartItem = (cartItemToBeRemoved: CartItem) => {
    setCartItems((currentCartItems) => {
      return currentCartItems.filter(
        (currentCartItem) => currentCartItem.id !== cartItemToBeRemoved.id,
      );
    });
  };

  useEffect(() => {
    const localStorageSavedCartItems = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_CART_ITEMS_KEY) ?? '[]',
    );
    if (localStorageSavedCartItems.length) {
      setCartItems(localStorageSavedCartItems);
    }
  }, []);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        updateCartItems,
        removeCartItem,
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
