import { ShoppingCart } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { ProductsAmount, ShoppingCartButtonContainer } from './styles';
import { useCart } from '../../../../contexts/CartContext';

export function ShoppingCartButton() {
  const theme = useTheme();
  const { cartItems } = useCart();

  const cartItemsAmount = cartItems.length;

  return (
    <ShoppingCartButtonContainer>
      <ShoppingCart
        size={22}
        weight="fill"
        color={theme.colors['yellow-dark']}
      />

      {!!cartItemsAmount && <ProductsAmount>{cartItemsAmount}</ProductsAmount>}
    </ShoppingCartButtonContainer>
  );
}
