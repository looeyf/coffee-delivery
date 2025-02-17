import { ElementType, PropsWithChildren } from 'react';
import { IconContainer, IconWithTextContainer } from './styles';
import { IconProps } from 'phosphor-react';
import { useTheme } from 'styled-components';

interface IconWithTextProps extends PropsWithChildren {
  Icon: ElementType<IconProps>;
  iconBackgroundColor: string;
}

export function IconWithText({
  children,
  Icon,
  iconBackgroundColor,
}: IconWithTextProps) {
  const theme = useTheme();

  return (
    <IconWithTextContainer>
      <IconContainer color={iconBackgroundColor}>
        <Icon size={16} weight="fill" color={theme.colors.white} />
      </IconContainer>

      {children}
    </IconWithTextContainer>
  );
}
