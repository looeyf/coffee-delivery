import { useLocation, useNavigate } from 'react-router';
import {
  OrderSuccessCard,
  OrderSuccessContainer,
  OrderSuccessContent,
  OrderSuccessSubtitle,
  OrderSuccessTittle,
} from './styles';
import DeliveryIllustration from '/assets/delivery-illustration.png';
import { IconWithText } from '../../components/IconWithText';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { PAGE_ROUTES_ENUM } from '../../Router';
import { useEffect } from 'react';
import { getPaymentMethodLabel } from '../../helpers/getPaymentMethodLabel';
import { formatAddress } from '../../helpers/formatAddress';
import { Order } from '../../@types/Order';

export function OrderSuccess() {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { id, paymentMethod, address } = (location.state ?? {}) as Order;

  const paymentMethodLabel = getPaymentMethodLabel(paymentMethod)?.label;
  const formattedAddress = formatAddress(address);

  useEffect(() => {
    if (!id) navigate(PAGE_ROUTES_ENUM.HOME);
  }, [id, navigate]);
  return (
    <OrderSuccessContainer>
      <div>
        <OrderSuccessTittle>Uhu! Pedido confirmado</OrderSuccessTittle>
        <OrderSuccessSubtitle>
          Agora é só aguardar que logo o café chegará até você
        </OrderSuccessSubtitle>
      </div>

      <OrderSuccessContent>
        <OrderSuccessCard>
          <IconWithText Icon={MapPin} iconBackgroundColor={theme.colors.purple}>
            Entrega em <strong>{formattedAddress}</strong>
          </IconWithText>

          <IconWithText Icon={Timer} iconBackgroundColor={theme.colors.yellow}>
            Previsão de entrega <br />
            <strong>20 min - 30 min</strong>
          </IconWithText>

          <IconWithText
            Icon={CurrencyDollar}
            iconBackgroundColor={theme.colors['yellow-dark']}
          >
            Pagamento na entrega <br />
            <strong>{paymentMethodLabel}</strong>
          </IconWithText>
        </OrderSuccessCard>

        <img src={DeliveryIllustration} />
      </OrderSuccessContent>
    </OrderSuccessContainer>
  );
}
