import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { CartItem } from '../@types/CartItem';
import { getCartItemPrice } from '../helpers/getCartItemPrice';

type CartItems = CartItem[];

interface CartContextType {
  cartItems: CartItems;
  updateCartItems: (updatedCartItem: CartItem) => void;
  removeCartItem: (cartItemId: CartItem) => void;
  resetCart: () => void;
  shippingPrice: number;
  totalCartItemsPrice: number;
  totalPrice: number;
}

const CartContext = createContext({} as CartContextType);

const LOCAL_STORAGE_CART_ITEMS_KEY = '@rocketseat:coffee-delivery-cart';
const MOCKED_SHIPPING_PRICE = 3.5;

// @TODO: create reducer to handle context updates
export function CartContextProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItems>([]);

  const totalCartItemsPrice = cartItems.reduce((acc, cartItem) => {
    const cartItemPrice = getCartItemPrice(cartItem);
    return acc + cartItemPrice;
  }, 0);
  const totalPrice = totalCartItemsPrice + MOCKED_SHIPPING_PRICE;

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
      const updatedCartItems = currentCartItems.filter(
        (currentCartItem) => currentCartItem.id !== cartItemToBeRemoved.id,
      );

      saveCartItemsInLocalStorage(updatedCartItems);
      return updatedCartItems;
    });
  };

  const resetCart = () => {
    setCartItems([]);
    saveCartItemsInLocalStorage([]);
  };

  useEffect(() => {
    const localStorageSavedCartItems: CartItems = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_CART_ITEMS_KEY) ?? '[]',
    );
    if (localStorageSavedCartItems.length) {
      setCartItems(
        localStorageSavedCartItems.filter((cartItem) => cartItem.quantity > 0),
      );
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        updateCartItems,
        removeCartItem,
        resetCart,
        shippingPrice: MOCKED_SHIPPING_PRICE,
        totalCartItemsPrice,
        totalPrice,
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
