import styled from 'styled-components';
import DefaultCategoriesProductsSelect from 'components/CampaignsManager/Selects/CategoriesProducts';
import DefaultProductsSelect from 'components/CampaignsManager/Selects/Products';
import DefaultInput from 'components/shared/Input/BaseInput';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  > h4 {
    font-size: 21px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;

export const CategoriesProductsSelect = styled(DefaultCategoriesProductsSelect)`
  ._inputContainer {
    width: 100%;
    max-width: 435px;
    height: 44px;
  }
`;

export const ProductsSelect = styled(DefaultProductsSelect)`
  ._inputContainer {
    width: 100%;
    max-width: 435px;
    height: 44px;
  }
  margin-top: 12px;
  margin-bottom: 7px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 25px;
  width: 100%;
  max-width: 900px;

  svg {
    cursor: pointer;
  }

  > ._productName {
    width: 100%;
    max-width: 435px;
    height: 44px;
    border: 1px solid ${({ theme }) => theme.font.color.quartenary};
    display: flex;
    align-items: center;
    padding: 0 16px;

    > h3 {
      flex: 1;
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      font-size: 16px;
      color: ${({ theme }) => theme.font.color.quartenary};
    }
  }
`;

export const ContainerBox = styled.div`
  width: 100%;
  max-width: 710px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 8px;

    > h5 {
      font-size: 16px;
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      color: ${({ theme }) => theme.font.color.primary};
      padding-right: 18px;
      flex: 1;
      text-align: right;
    }

    > input {
      width: 100%;
      max-width: 280px;
      height: 44px;
      border: 1px solid ${({ theme }) => theme.font.color.quartenary};
      text-align: right;
    }
  }
`;

export const Input = styled(DefaultInput)`
  max-width: 144px;
  ._inputContainer {
    width: 100%;
    max-width: 280px;
    height: 44px;
    input {
      text-align: right;
    }
  }
`;

export const ObservatioBox = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-size: 16px;
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 40px;
  }

  > textarea {
    width: 100%;
    max-width: 435px;
    height: 132px;
    resize: none;
    padding: 10px;
  }
`;
