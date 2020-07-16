import styled from 'styled-components';
import DefaultCategoriesSelect from 'components/Training/CategoriesSelect';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 95px);
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  background: #fff;
  padding: 20px 60px;

  > h3 {
    color: ${({ theme }) => theme.font.color.primary};
    font-weight: bold;
    margin-left: 35px;
    margin-bottom: 15px;
    font-size: 24px;
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
`;

export const Box = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 25px 25px;
  margin-top: 35px;
  > h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.font.color.primary};
    margin-bottom: 15px;
  }
`;
