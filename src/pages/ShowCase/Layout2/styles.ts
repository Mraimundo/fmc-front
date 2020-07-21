import styled from 'styled-components';
import DefaultTypesSelect from 'components/ShowCase/TypesSelect';
import DefaultCategoriesSelect from 'components/ShowCase/CategoriesSelect';

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
    font-size: 24px;
    font-weight: bold;
    margin-left: 35px;
    margin-bottom: 30px;
  }

  > span {
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 16px;
    margin-left: 35px;
    margin-bottom: 15px;
  }
`;

export const TypesSelect = styled(DefaultTypesSelect)`
  ._inputContainer {
    width: 274px;
    height: 44px;
  }
  margin-left: 35px;
`;
export const CategoriesSelect = styled(DefaultCategoriesSelect)`
  ._inputContainer {
    width: 274px;
    height: 44px;
  }
  margin-top: 10px;
  margin-left: 35px;
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