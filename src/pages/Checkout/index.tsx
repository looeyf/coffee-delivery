import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import {
  CheckoutContainer,
  CheckoutForm,
  SectionContentTitle,
  SectionContentWrapper,
} from './styles';
import { useTheme } from 'styled-components';
import { InputText } from '../../components/InputText';
import { InputRadio } from '../../components/InputRadio';
import { InputRadioGroup } from '../../components/InputRadio/styles';

export function Checkout() {
  const theme = useTheme();

  return (
    <CheckoutContainer>
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

          <CheckoutForm>
            <InputText name="zip" placeholder="CEP" required />
            <InputText name="street" placeholder="Rua" required />
            <InputText name="number" placeholder="Número" required />
            <InputText name="additional" placeholder="Complemento" />
            <InputText name="neighborhood" placeholder="Bairro" required />
            <InputText name="city" placeholder="Cidade" required />
            <InputText name="state" placeholder="UF" required />
          </CheckoutForm>
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

          <InputRadioGroup>
            <InputRadio
              name="paymentMethod"
              value="creditCard"
              Icon={CreditCard}
            >
              Cartão de Crédito
            </InputRadio>
            <InputRadio name="paymentMethod" value="debitCard" Icon={Bank}>
              Cartão de Débito
            </InputRadio>
            <InputRadio name="paymentMethod" value="money" Icon={Money}>
              Dinheiro
            </InputRadio>
          </InputRadioGroup>
        </SectionContentWrapper>
      </section>
    </CheckoutContainer>
  );
}
