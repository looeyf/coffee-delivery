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
import { InputNumber } from '../InputNumber';
import { useState } from 'react';
import { Product } from '../../@types/Product';

interface ProductCardProps {
  data: Product;
}

export function ProductCard({ data }: ProductCardProps) {
  const theme = useTheme();
  const [quantity, setQuantity] = useState(1);

  const price = Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(data.price);

  return (
    <ProductCardContainer>
      <img src={data.image} />

      <ProductTagsContainer>
        {data.tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </ProductTagsContainer>

      <ProductDescription>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </ProductDescription>

      <ProductCardFooter>
        <p>
          R$ <strong>{price}</strong>
        </p>

        <ProductFooterActions>
          <InputNumber value={quantity} onChange={setQuantity} />
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
