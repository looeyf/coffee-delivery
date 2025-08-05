import { PAYMENT_METHOD_ENUM } from '../mocks/paymentMethods';
import { Address } from './Address';
import { CartItem } from './CartItem';

export interface Order {
  id: number;
  paymentMethod: PAYMENT_METHOD_ENUM;
  address: Address;
  products: CartItem[];
}
