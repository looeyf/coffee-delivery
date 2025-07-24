import { useTheme } from 'styled-components';
import { CartItem } from '../../@types/CartItem';
import { formatCurrency } from '../../helpers/formatCurrency';
import {
  ProductCartItemActionsContainer,
  ProductCartItemContainer,
  ProductCartItemPrice,
  ProductCartItemTitle,
} from './styles';
import { Trash } from 'phosphor-react';
import { InputNumber } from '../InputNumber';
import { Button } from '../Button';
import { useCart } from '../../contexts/CartContext';
import { getCartItemPrice } from '../../helpers/getCartItemPrice';

interface ProductCartItemProps {
  productCartItemData: CartItem;
}

export function ProductCartItem({ productCartItemData }: ProductCartItemProps) {
  const theme = useTheme();

  const cartItemPrice = getCartItemPrice(productCartItemData);
  const formattedPrice = formatCurrency(cartItemPrice);

  const { updateCartItems, removeCartItem } = useCart();
  const handleUpdateProductCartQuantity = (newQuantity: number) => {
    if (!newQuantity) return;
    updateCartItems({ ...productCartItemData, quantity: newQuantity });
  };
  const handleRemoveProductFromCart = () => {
    removeCartItem(productCartItemData);
  };

  return (
    <ProductCartItemContainer>
      <img src={productCartItemData.image} width={64} height={64} />
      <div>
        <ProductCartItemTitle>{productCartItemData.title}</ProductCartItemTitle>
        <ProductCartItemActionsContainer>
          <InputNumber
            value={productCartItemData.quantity}
            onChange={handleUpdateProductCartQuantity}
          />
          <Button variant="secondary" onClick={handleRemoveProductFromCart}>
            <Trash size={16} color={theme.colors.purple} /> REMOVER
          </Button>
        </ProductCartItemActionsContainer>
      </div>
      <ProductCartItemPrice>R$ {formattedPrice}</ProductCartItemPrice>
    </ProductCartItemContainer>
  );
}
