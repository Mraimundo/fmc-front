import styled from 'styled-components';
import DefaultCategoriesSelect from 'components/Training/CategoriesSelect';

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
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    margin-left: 35px;
    margin-bottom: 15px;
    font-size: 24px;
  }
  @media screen and (max-width: 720px) {
    padding: 30px 10px;

    > h3 {
      margin-left: 10px;
    }
  }
`;

export const CategoriesSelect = styled(DefaultCategoriesSelect)`
  margin-left: 35px;
  margin-top: 20px;
  margin-bottom: 5px;

  ._inputContainer {
    height: 40px;
    width: 100%;
    max-width: 360px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 720px) {
    margin: 0;
    margin-top: 12px;
    margin-bottom: 5px;
    padding: 0 10px;
  }
`;

export const Box = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 25px 25px;
  margin-top: 35px;
  > h3 {
    font-size: 24px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin-bottom: 15px;
  }
`;
