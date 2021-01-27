import styled, { css } from 'styled-components';
import { ReactSVG as DefaultReactSVG } from 'react-svg';
import DefaultChannelSelect from '../CustomSelects/Channels';
import DefaultProductTypeSelect from '../CustomSelects/ProductTypes';

export const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const FirstBox = styled.div`
  display: flex;
  width: 100%;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 24px;
    color: ${({ theme }) => theme.font.color.primary};
    width: 100%;
    max-width: 439px;
    padding-top: 23px;
  }

  > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 40px;

    > span {
      font-size: 16px;
      color: ${({ theme }) => theme.font.color.primary};
    }
  }
`;

export const ReactSVG = styled(DefaultReactSVG)`
  cursor: pointer;
`;

export const SecondBox = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const CustomText = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.font.color.primary};
  margin-right: 12px;
`;

export const ChannelSelect = styled(DefaultChannelSelect)`
  max-width: 248px;
  height: 40px;
  margin-right: 34px;
  margin-left: 12px;

  ._inputContainer {
    max-width: 267px;
    height: 40px;
  }
`;

export const ProductTypeSelect = styled(DefaultProductTypeSelect)`
  max-width: 202px;
  margin-left: 93px;
  height: 40px;

  ._inputContainer {
    max-width: 202px;
    height: 40px;
  }
`;

export const Tabs = styled.div`
  width: 100%;
  max-width: 466px;
  height: 40px;
  display: flex;
  border-radius: 5px;
  background: #efefef;
`;

interface ItemProps {
  selected: boolean;
}

export const Item = styled.div<ItemProps>`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > span {
    font-size: 14px;
    text-align: center;
    color: ${({ theme }) => theme.font.color.primary};
  }

  &:nth-child(1) {
    border-radius: 5px 0px 0px 5px;
  }

  &:nth-child(2) {
    border-radius: 0px 5px 5px 0px;
  }

  ${({ selected, theme }) =>
    selected &&
    css`
      background: ${theme.font.color.primary};

      > span {
        color: #fff;
      }
    `}
`;

export const SimulationsContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CategoryContainer = styled.div`
  width: 110px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.font.color.quartenary};

  > span {
    font-size: 16px;
    color: ${({ theme }) => theme.font.color.quartenary};
  }
`;
