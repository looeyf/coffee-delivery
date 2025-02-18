import styled from 'styled-components';

export const CardContainer = styled.article`
  height: 100%;
  width: 100%;
  padding: 1.25rem;

  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px;
`;
