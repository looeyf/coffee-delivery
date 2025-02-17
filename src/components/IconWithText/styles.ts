import styled from 'styled-components';

export const IconWithTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const IconContainer = styled.span<{ color: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ color }) => color};

  display: flex;
  align-items: center;
  justify-content: center;
`;
