import { ProductCard } from '../../../../components/ProductCard';
import { coffeeList } from '../../../../mocks/coffeeList';
import { ProductsListContainer, ProductsSectionContainer } from './styles';

export function ProductsSection() {
  return (
    <ProductsSectionContainer>
      <h2>Nossos cafés</h2>

      <ProductsListContainer>
        {coffeeList.map((coffee) => (
          <ProductCard key={coffee.id} productData={coffee} />
        ))}
      </ProductsListContainer>
    </ProductsSectionContainer>
  );
}
