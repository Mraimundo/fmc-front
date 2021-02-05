import styled from 'styled-components';

import { QuotationsList } from 'components/Header/CoinQuotation/styles';

export const Wrapper = styled.div`
  padding: 1em 1.5em 2em 1.5em;
`;

export const PerformanceWrapper = styled.div`
  width: 75%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const MyPointsWrapper = styled.div`
  width: 25%;
  margin-left: 1em;

  > h1 {
    margin-left: 4px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
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
