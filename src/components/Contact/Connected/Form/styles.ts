import styled from 'styled-components';
import DefaultSubjectSelect from '../SubjectsSelect';

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
`;

export const SubjectSelect = styled(DefaultSubjectSelect)`
  ._inputContainer {
    height: 45px;
  }
`;

export const CategorySelect = styled(DefaultSubjectSelect)`
  ._inputContainer {
    height: 45px;
  }
`;
