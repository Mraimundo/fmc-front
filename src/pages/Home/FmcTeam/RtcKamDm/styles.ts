import styled, { css } from 'styled-components';
import { Title } from 'components/Home';

import { QuotationsList } from 'components/Header/CoinQuotation/styles';

export const Wrapper = styled.div`
  padding: 1em 1.5em 2em 1.5em;
`;

export const PerformanceWrapper = styled.div`
  width: 65%;

  @media screen and (max-width: 1190px) {
    width: 100%;
  }
`;

interface MyPointsWrapperProps {
  marginTop?: boolean;
}
export const MyPointsWrapper = styled.div<MyPointsWrapperProps>`
  width: 25%;
  margin-left: 1em;

  > h1 {
    margin-left: 4px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    ${({ marginTop }) =>
      marginTop &&
      css`
        margin-top: 10px;
      `};
  }
`;

export const PerformanceMyPointsWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1190px) {
    flex-wrap: wrap;
  }
`;

export const RankingWrapper = styled(PerformanceMyPointsWrapper)`
  margin: 30px 0 40px 0;
  > div {
    & + div {
      margin-left: 20px;
    }
  }

  @media screen and (max-width: 1190px) {
    flex-wrap: nowrap;
  }

  @media screen and (max-width: 970px) {
    flex-direction: column;

    > div {
      & + div {
        margin-left: 0;
        margin-top: 12px;
      }
    }
  }
`;

export const HomeWrapper = styled.div`
  ${QuotationsList} {
    margin-top: 1em;
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 0.9em;
  }
`;

export const CompletePerformanceWrapper = styled.div`
  margin-top: 1em;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 12px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.secondary};

    svg {
      margin-left: 0.5em;
      fill: ${({ theme }) => theme.font.color.secondary};
    }
  }
`;

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 20px 0;
`;

export const WeatherTitle = styled(Title)`
  > img {
    width: 25px;
    margin-left: 5px;
    cursor: pointer;
    transform: translateY(13px);
  }
`;

interface CitySelectProps {
  show: boolean;
}

export const CitySelectWrapper = styled.div<CitySelectProps>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  margin-bottom: 16px;

  > h3 {
    color: ${({ theme }) => theme.font.color.quartenary};
    font-size: 16px;
    margin-bottom: 4px;
  }

  ._inputContainer {
    height: 40px;
  }
`;

export const WeatherWidgetWrapper = styled.div`
  position: relative;

  & + div {
    margin-top: 16px;
  }
`;

export const RemoveActionWrapper = styled.div<CitySelectProps>`
  display: none;
  position: absolute;
  top: -5px;
  left: -6px;

  svg {
    width: 16px;
    height: 16px;
  }

  ${({ show }) =>
    show &&
    css`
      display: block;
    `}
`;

export const Img = styled.img``;

export const StyledWrapper = styled.div`
  display: flex;
  width: 100%;

  ${MyPointsWrapper} {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    ${MyPointsWrapper} {
      width: 100%;
    }

    flex-direction: column;
  }
`;
