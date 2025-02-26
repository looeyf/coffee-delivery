import styled from 'styled-components';

export const CheckoutContainer = styled.main`
  padding: 2.5rem 0;
  display: flex;
  gap: 2rem;

  h5 {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-bottom: 0.9375rem;
  }
`;

export const SectionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;

  & + & {
    margin-top: 0.75rem;
  }
`;

export const SectionContentTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  > div {
    line-height: 1.3;

    p {
      color: ${({ theme }) => theme.colors['base-subtitle']};
      margin-bottom: 0.125rem;
    }

    span {
      font-size: ${({ theme }) => theme.fonts.text.s};
    }
  }
`;

export const CheckoutForm = styled.form`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-gap: 1rem 0.75rem;

  > * {
    grid-column: span 2;
  }
`;
