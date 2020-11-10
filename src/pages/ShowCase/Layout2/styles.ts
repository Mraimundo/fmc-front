import styled from 'styled-components';
import DefaultTypesSelect from 'components/shared/Vendavall/Establishments/TypeSelect';
import DefaultCategoriesSelect from 'components/shared/Vendavall/Establishments/CategorySelect';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 95px);
  background: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  background: #fff;
  padding: 40px 60px;

  > h3 {
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 24px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    margin-left: 35px;
    margin-bottom: 30px;
  }

  > span {
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 16px;
    margin-left: 35px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 720px) {
    padding: 20px;

    > h3 {
      margin-left: 0;
    }

    > span {
      margin-left: 0;
    }
  }
`;

export const TypesSelect = styled(DefaultTypesSelect)`
  ._inputContainer {
    width: 274px;
    height: 44px;
  }
  margin-left: 35px;

  @media screen and (max-width: 720px) {
    margin-left: 0;

    ._inputContainer {
      width: 100%;
    }
  }
`;
export const CategoriesSelect = styled(DefaultCategoriesSelect)`
  ._inputContainer {
    width: 274px;
    height: 44px;
  }
  margin-top: 10px;
  margin-left: 35px;

  @media screen and (max-width: 720px) {
    margin-left: 0;

    ._inputContainer {
      width: 100%;
    }
  }
`;

export const Box = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 25px 25px;
  margin-top: 35px;

  > h3 {
    font-size: 18px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin-bottom: 15px;
  }

  @media screen and (max-width: 720px) {
    padding: 20px;
  }
`;
