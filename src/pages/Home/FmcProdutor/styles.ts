import styled from 'styled-components';
import { darken } from 'polished';

import { QuotationsList } from 'components/Header/CoinQuotation/styles';

export const Wrapper = styled.div`
  padding: 1em 1.5em 2em 1.5em;
`;

export const IndicateWrapper = styled.div`
  width: 100%; 
`;

export const IndicateContent = styled.div`
  padding:0 20px 0 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`;


export const ShowCaseWrapper = styled.div`
  background: linear-gradient(
    to right,
    #8f817b 0.35%,
    #7e6f68 14.4%,
    #685952 36.38%,
    #61514a 50.32%,
    #4f413b 71.07%,
    #312722 100%
  );

  @media screen and (max-width: 480px) {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.font.color.primary} 70%,
      ${({ theme }) => darken(0.05, theme.font.color.primary)}
    );
  }
`;

export const PerformanceMyPointsWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const HomeWrapper = styled.div`
  ${QuotationsList} {
    margin-top: 1em;
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 0.9em;
  }
`;
