import styled, { css } from 'styled-components';
import DefaultCategoriesSelect from '../CategoriesSelect';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px 10px;
  border: 2px solid #fff;
  width: 100%;
  max-width: 851px;
  position: absolute;
  bottom: 23px;
  height: 282px;
  background: rgba(126, 57, 29, 0.6);
  width: calc(100% - 20px);
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const SelectContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Label = styled.div`
  font-size: 16px;
  padding-left: 20px;
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
  transform: translateY(12px);

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 12px;
    text-align: center;
  }
`;

export const IndicatorContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 35px;

  .curve-span {
    bottom: -23px;
    top: auto;
  }

  .curve {
    width: 38%;
    height: 45px;

    img {
      height: 45px;
    }

    ._ball {
      width: 22px;
      height: 22px;
    }
  }

  & + div {
    margin-top: 0;
    flex-direction: row-reverse;
    align-items: flex-end;

    ._ball {
      top: auto;
      bottom: -4px;
    }
  }
`;

interface IndicatorProps {
  selected: boolean;
}

export const Indicator = styled.div<IndicatorProps>`
  width: 31%;
  height: 13px;
  position: relative;

  img {
    width: 100%;
    height: 13px;
  }

  > span {
    text-align: center;
    position: absolute;
    width: 90%;
    top: 21px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;

    ${({ selected }) =>
      selected &&
      css`
        font-family: ${({ theme }) => theme.font.fontFamily.bold};
      `};
  }

  ._ball {
    position: absolute;
    width: 22px;
    height: 22px;
    left: 50%;
    transform: translateX(-50%);
    top: -4px;
  }
`;
