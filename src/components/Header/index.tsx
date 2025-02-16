import {
  HeaderContainer,
  LocationButton,
  LogoNavLink,
  NavigationContainer,
  ShoppingCartButton,
} from './styles';
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useTheme } from 'styled-components';

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
            {/* @TODO: move to separated component and add corner items qty counter */}
            <ShoppingCartButton>
              <ShoppingCart
                size={22}
                weight="fill"
                color={theme.colors['yellow-dark']}
              />
            </ShoppingCartButton>
          </li>
        </ul>
      </NavigationContainer>
    </HeaderContainer>
  );
}
