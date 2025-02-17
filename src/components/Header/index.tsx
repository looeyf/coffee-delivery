import {
  HeaderContainer,
  LocationButton,
  LogoNavLink,
  NavigationContainer,
} from './styles';
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg';
import { MapPin } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { ShoppingCartButton } from './components/ShoppingCartButton';

export function Header() {
  const theme = useTheme();

  return (
    <HeaderContainer>
      <LogoNavLink to="/">
        <img src={coffeeDeliveryLogo} />
      </LogoNavLink>

      <NavigationContainer>
        <ul>
          <li>
            <LocationButton>
              <MapPin size={22} weight="fill" color={theme.colors.purple} />
              Porto Alegre, RS
            </LocationButton>
          </li>
          <li>
            <ShoppingCartButton />
          </li>
        </ul>
      </NavigationContainer>
    </HeaderContainer>
  );
}
