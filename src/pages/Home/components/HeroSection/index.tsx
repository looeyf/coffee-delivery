import { BenefitsContainer, HeroSectionContainer } from './styles';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { IconWithText } from '../../../../components/IconWithText';
import heroSectionCoffee from '/assets/hero-section-coffee.png';
import { useTheme } from 'styled-components';

export function HeroSection() {
  const theme = useTheme();

  return (
    <HeroSectionContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <BenefitsContainer>
          <IconWithText
            Icon={ShoppingCart}
            iconBackgroundColor={theme.colors['yellow-dark']}
          >
            Compra simples e segura
          </IconWithText>

          <IconWithText
            Icon={Package}
            iconBackgroundColor={theme.colors['base-text']}
          >
            Embalagem mantém o café intacto
          </IconWithText>

          <IconWithText
            Icon={Timer}
            iconBackgroundColor={theme.colors['yellow']}
          >
            Entrega Rápida e rastreada
          </IconWithText>

          <IconWithText
            Icon={Coffee}
            iconBackgroundColor={theme.colors['purple']}
          >
            O café chega fresquinho até você
          </IconWithText>
        </BenefitsContainer>
      </div>

      <img src={heroSectionCoffee} alt="Copo de café" />
    </HeroSectionContainer>
  );
}
