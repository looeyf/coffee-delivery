import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import heroSectionCoffee from '../../assets/hero-section-coffee.png';
import {
  BenefitsContainer,
  HeroSection,
  ProductsListContainer,
  ProductsSection,
} from './styles';
import { useTheme } from 'styled-components';
import { IconWithText } from '../../components/IconWithText';
import { ProductCard } from '../../components/ProductCard';

export function Home() {
  const theme = useTheme();

  return (
    <main>
      {/* @TODO: create separated component for HeroSection */}
      <HeroSection>
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
      </HeroSection>

      <ProductsSection>
        <h2>Nossos cafés</h2>

        <ProductsListContainer>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductsListContainer>
      </ProductsSection>
    </main>
  );
}
