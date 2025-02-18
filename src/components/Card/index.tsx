import { PropsWithChildren } from 'react';
import { CardContainer } from './styles';

interface CardProps extends PropsWithChildren {
  className?: string;
}

export function Card({ children, ...rest }: CardProps) {
  return <CardContainer {...rest}>{children}</CardContainer>;
}
