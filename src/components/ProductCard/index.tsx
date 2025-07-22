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
import { useCart } from '../../contexts/CartContext';
import { formatCurrency } from '../../helpers/formatCurrency';

interface ProductCardProps {
  productData: Product;
}

export function ProductCard({ productData }: ProductCardProps) {
  const theme = useTheme();
  const [quantity, setQuantity] = useState(1);

  const isInvalidQuantity = !quantity;

  const { updateCartItems } = useCart();
  const handleUpdateCartItems = () => {
    if (isInvalidQuantity) return;
    updateCartItems({ ...productData, quantity });
  };

  const formattedPrice = formatCurrency(productData.price);

  return (
    <ProductCardContainer>
      <img src={productData.image} />

      <ProductTagsContainer>
        {productData.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </ProductTagsContainer>

      <ProductDescription>
        <h4>{productData.title}</h4>
        <p>{productData.description}</p>
      </ProductDescription>

      <ProductCardFooter>
        <p>
          R$ <strong>{formattedPrice}</strong>
        </p>

        <ProductFooterActions>
          <InputNumber value={quantity} onChange={setQuantity} />
          <AddToCartButton
            disabled={isInvalidQuantity}
            onClick={handleUpdateCartItems}
          >
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
