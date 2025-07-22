import { ShoppingCart } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { ProductsAmount, StyledShoppingCartButton } from './styles';
import { useCart } from '../../../../contexts/CartContext';
import { useNavigate } from 'react-router';
import { PAGE_ROUTES_ENUM } from '../../../../Router';

export function ShoppingCartButton() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { cartItems } = useCart();

  const cartItemsAmount = cartItems.length;

  const handleNavigateToCheckout = () => {
    navigate(PAGE_ROUTES_ENUM.CHECKOUT);
  };

  return (
    <StyledShoppingCartButton onClick={handleNavigateToCheckout}>
      <ShoppingCart
        size={22}
        weight="fill"
        color={theme.colors['yellow-dark']}
      />

      {!!cartItemsAmount && <ProductsAmount>{cartItemsAmount}</ProductsAmount>}
    </StyledShoppingCartButton>
  );
}
