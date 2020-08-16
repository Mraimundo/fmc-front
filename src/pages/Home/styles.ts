import styled from 'styled-components';
import { darken } from 'polished';

import { QuotationsList } from 'components/Header/CoinQuotation/styles';

export const Wrapper = styled.div`
  padding: 1em 1.5em 2em 1.5em;
`;

export const ShowCaseWrapper = styled.div`
  background-color: ${({ theme }) => theme.font.color.primary};

  @media screen and (max-width: 480px) {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.font.color.primary} 70%,
      ${({ theme }) => darken(0.05, theme.font.color.primary)}
    );
  }
`;

export const PerformanceWrapper = styled.div`
  width: 75%;
`;

export const MyPointsWrapper = styled.div`
  width: 25%;
  margin-left: 1em;
`;

export const PerformanceMyPointsWrapper = styled.div`
  display: flex;
`;

export const HomeWrapper = styled.div`
  ${QuotationsList} {
    margin-top: 1em;
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 0.9em;
  }
`;
