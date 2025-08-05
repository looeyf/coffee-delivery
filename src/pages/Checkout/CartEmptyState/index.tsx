import { useNavigate } from 'react-router';
import { Button } from '../../../components/Button';
import { CartEmptyStateContainer } from './styles';
import { PAGE_ROUTES_ENUM } from '../../../Router';

export function CartEmptyState() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(PAGE_ROUTES_ENUM.HOME);
  };

  return (
    <CartEmptyStateContainer>
      <h3>Não há nenhum produto no carrinho!</h3>
      <Button onClick={handleGoHome}>Voltar</Button>
    </CartEmptyStateContainer>
  );
}
