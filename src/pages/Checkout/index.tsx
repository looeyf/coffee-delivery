import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import {
  AddressInputGroup,
  CartSummaryCard,
  CheckoutFormContainer,
  ConfirmOrderButton,
  PricingContainer,
  SectionContentTitle,
  SectionContentWrapper,
  Separator,
} from './styles';
import { useTheme } from 'styled-components';
import { InputText } from '../../components/InputText';
import { InputRadio } from '../../components/InputRadio';
import { InputRadioGroup } from '../../components/InputRadio/styles';
import { useCart } from '../../contexts/CartContext';
import { ProductCartItem } from '../../components/ProductCartItem';
import { formatCurrency } from '../../helpers/formatCurrency';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ConfirmOrderFormData,
  confirmOrderFormSchema,
  PAYMENT_METHOD_ENUM,
} from './types';

// @TODO: create empty state when there is no items in the cart
export function Checkout() {
  const theme = useTheme();
  const { cartItems, totalCartItemsPrice, shippingPrice, totalPrice } =
    useCart();

  const { register, handleSubmit, formState } = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormSchema),
    mode: 'all',
  });

  const handleConfirmOrder = (data: ConfirmOrderFormData) => {
    // @TODO: navigate to finished page
    console.log(data);
  };
  return (
    <CheckoutFormContainer onSubmit={handleSubmit(handleConfirmOrder)}>
      <section>
        <h5>Complete seu pedido</h5>

        <SectionContentWrapper>
          <SectionContentTitle>
            <MapPinLine size={22} color={theme.colors['yellow-dark']} />

            <div>
              <p>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </SectionContentTitle>

          <AddressInputGroup>
            <InputText
              {...register('zip')}
              hasError={!!formState.errors.zip}
              placeholder="CEP"
              required
            />
            <InputText
              {...register('street')}
              hasError={!!formState.errors.street}
              placeholder="Rua"
              required
            />
            <InputText
              {...register('number')}
              hasError={!!formState.errors.number}
              placeholder="Número"
              required
            />
            <InputText {...register('additional')} placeholder="Complemento" />
            <InputText
              {...register('neighborhood')}
              hasError={!!formState.errors.neighborhood}
              placeholder="Bairro"
              required
            />
            <InputText
              {...register('city')}
              hasError={!!formState.errors.city}
              placeholder="Cidade"
              required
            />
            <InputText
              {...register('state')}
              hasError={!!formState.errors.state}
              placeholder="UF"
              required
            />
          </AddressInputGroup>
        </SectionContentWrapper>

        <SectionContentWrapper>
          <SectionContentTitle>
            <CurrencyDollar size={22} color={theme.colors.purple} />

            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </SectionContentTitle>

          <InputRadioGroup hasError={!!formState.errors.paymentMethod}>
            <InputRadio
              {...register('paymentMethod')}
              value={PAYMENT_METHOD_ENUM.CREDIT_CARD}
              Icon={CreditCard}
            >
              Cartão de Crédito
            </InputRadio>
            <InputRadio
              {...register('paymentMethod')}
              value={PAYMENT_METHOD_ENUM.DEBIT_CARD}
              Icon={Bank}
            >
              Cartão de Débito
            </InputRadio>
            <InputRadio
              {...register('paymentMethod')}
              value={PAYMENT_METHOD_ENUM.MONEY}
              Icon={Money}
            >
              Dinheiro
            </InputRadio>
          </InputRadioGroup>
        </SectionContentWrapper>
      </section>

      <section>
        <h5>Cafés selecionados</h5>

        <CartSummaryCard>
          <ul>
            {cartItems.map((cartItem) => (
              <li key={cartItem.id}>
                <ProductCartItem productCartItemData={cartItem} />
                <Separator />
              </li>
            ))}
          </ul>

          <PricingContainer>
            <p>
              Total de items{' '}
              <span>R$ {formatCurrency(totalCartItemsPrice)}</span>
            </p>
            <p>
              Entrega <span>R$ {formatCurrency(shippingPrice)}</span>
            </p>
            <p>
              Total <span>R$ {formatCurrency(totalPrice)}</span>
            </p>
          </PricingContainer>

          <ConfirmOrderButton type="submit" size="large">
            CONFIRMAR PEDIDO
          </ConfirmOrderButton>
        </CartSummaryCard>
      </section>
    </CheckoutFormContainer>
  );
}
