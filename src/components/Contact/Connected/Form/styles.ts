import styled from 'styled-components';
import DefaultSubjectSelect from '../SubjectsSelect';
import DefaultCategoriesSelect from '../CategoriesSelect';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  > div + div {
    margin-top: 15px;
  }

  > button {
    margin-top: 25px;
  }

  > label {
    button {
      background: transparent;
      text-decoration: none;
      border: none;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: 0;
      color: ${({ theme }) => theme.font.color.primary};
      font-size: 10px;
    }

    input {
      display: none;
    }
  }
`;

export const SubjectSelect = styled(DefaultSubjectSelect)`
  ._inputContainer {
    height: 45px;
  }
`;

export const CategorySelect = styled(DefaultCategoriesSelect)`
  ._inputContainer {
    height: 45px;
  }
`;
