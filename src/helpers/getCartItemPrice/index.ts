import { CartItem } from '../../@types/CartItem';

export const getCartItemPrice = (cartItem: CartItem) => {
  return cartItem.price * cartItem.quantity;
};
