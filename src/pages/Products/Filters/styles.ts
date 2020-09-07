import styled, { css } from 'styled-components';
import filledIndicator from 'assets/images/products/filled-indicator.svg';
import emptyIndicator from 'assets/images/products/empty-indicator.svg';
import DefaultCategoriesSelect from './CategoriesSelect';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px 24px;
  border: 2px solid #fff;
  width: 100%;
  max-width: 851px;
  position: absolute;
  bottom: 23px;
  height: 205px;
  background: rgba(126, 57, 29, 0.6);
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const CategoriesSelect = styled(DefaultCategoriesSelect)`
  width: 190px;

  ._label {
    font-size: 16px;
    color: #fff;
    margin-bottom: 2px;
  }

  ._inputContainer {
    height: 38px;
    width: 172px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  transform: translateY(5px);

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;
  }
`;

export const ProductTypes = styled.div`
  display: flex;
  margin-top: 31px;
`;

export const ProductType = styled.div`
  width: calc(100% / 6);
  cursor: pointer;
`;

interface IndicatorProps {
  selected: boolean;
}

export const Indicator = styled.div<IndicatorProps>`
  width: 100%;
  height: 27px;
  background: url(${emptyIndicator}) no-repeat center center;
  background-size: contain;

  ${({ selected }) =>
    selected &&
    css`
      background: url(${filledIndicator}) no-repeat center center;
      background-size: contain;
    `};
`;

export const TypeTitle = styled.div<IndicatorProps>`
  text-align: center;
  margin-top: 6px;
  font-size: 14px;

  ${({ selected }) =>
    selected &&
    css`
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
    `};
`;
