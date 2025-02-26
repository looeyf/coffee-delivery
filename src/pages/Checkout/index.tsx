import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import {
  CheckoutContainer,
  CheckoutForm,
  SectionContentTitle,
  SectionContentWrapper,
} from './styles';
import { useTheme } from 'styled-components';
import { InputText } from '../../components/InputText';

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
            <InputText placeholder="CEP" />
            <InputText placeholder="Rua" style={{ gridColumn: 'span 6' }} />
            <InputText placeholder="Número" />
            <InputText
              placeholder="Complemento"
              style={{ gridColumn: 'span 4' }}
            />
            <InputText placeholder="Bairro" />
            <InputText placeholder="Cidade" style={{ gridColumn: 'span 3' }} />
            <InputText placeholder="UF" style={{ gridColumn: 'span 1' }} />
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

          {/* @TODO: Select payment method */}
        </SectionContentWrapper>
      </section>
    </CheckoutContainer>
  );
}
