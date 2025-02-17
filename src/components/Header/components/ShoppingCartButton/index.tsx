import { ShoppingCart } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { ProductsAmount, ShoppingCartButtonContainer } from './styles';

export function ShoppingCartButton() {
  const theme = useTheme();
  return (
    <ShoppingCartButtonContainer>
      <ShoppingCart
        size={22}
        weight="fill"
        color={theme.colors['yellow-dark']}
      />

      <ProductsAmount>3</ProductsAmount>
    </ShoppingCartButtonContainer>
  );
}
