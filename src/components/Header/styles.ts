import { NavLink } from 'react-router';
import styled from 'styled-components';
import { Button } from '../Button';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;
`;

export const NavigationContainer = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const LogoNavLink = styled(NavLink)`
  line-height: 0;
`;

export const LocationButton = styled(Button).attrs({ variant: 'raw' })`
  font-size: ${({ theme }) => theme.fonts.text.s};

  background-color: ${({ theme }) => theme.colors['purple-light']};
  color: ${({ theme }) => theme.colors['purple-dark']};

  &:hover {
    filter: brightness(95%);
  }
`;
