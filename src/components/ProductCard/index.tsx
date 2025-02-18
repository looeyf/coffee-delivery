import expressoTradicional from '../../assets/coffees/expresso-tradicional.png';
import { ShoppingCartSimple } from 'phosphor-react';
import { useTheme } from 'styled-components';
import {
  AddToCartButton,
  ProductCardContainer,
  ProductDescription,
  Tag,
  ProductTagsContainer,
  ProductCardFooter,
  ProductFooterActions,
} from './styles';

// @TODO: receive product info from component props
export function ProductCard() {
  const theme = useTheme();

  return (
    <ProductCardContainer>
      <img src={expressoTradicional} />

      <ProductTagsContainer>
        <Tag>Tradicional</Tag>
        <Tag>Com leite</Tag>
      </ProductTagsContainer>

      <ProductDescription>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </ProductDescription>

      <ProductCardFooter>
        <p>
          R$ <strong>9,90</strong>
        </p>

        <ProductFooterActions>
          {/* @TODO: create change product quantity component */}
          <input type="number" />
          <AddToCartButton>
            <ShoppingCartSimple
              size={22}
              weight="fill"
              color={theme.colors.white}
            />
          </AddToCartButton>
        </ProductFooterActions>
      </ProductCardFooter>
    </ProductCardContainer>
  );
}
