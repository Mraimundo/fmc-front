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
      text-decoration: underline;
      border: none;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: 2px;
      color: ${({ theme }) => theme.font.color.quartenary};
      font-size: 14px;
    }

    input {
      display: none;
    }
  }
`;

export const SubjectSelect = styled(DefaultSubjectSelect)`
  ._inputContainer {
    height: 44px;
  }
`;

export const CategorySelect = styled(DefaultCategoriesSelect)`
  ._inputContainer {
    height: 44px;
  }
`;
