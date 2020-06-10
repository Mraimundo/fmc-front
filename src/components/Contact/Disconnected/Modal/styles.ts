import styled from 'styled-components';
import {
  Input as DefaultInput,
  TextArea as DefaultTextArea,
} from 'components/shared';
import Select from '../PublicSubjectsSelect';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 20px 40px;

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const BoxPhone = styled.div`
  display: flex;
  > div {
    justify-content: flex-end;
    width: 130px;
    margin-right: 20px;
    & + div {
      margin-right: 0;
      width: 100%;
    }
  }
`;

export const Input = styled(DefaultInput)`
  margin-bottom: 8px;
  ._inputContainer {
    height: 48px;
  }
`;

export const SubjectSelect = styled(Select)`
  margin-bottom: 8px;
  ._inputContainer {
    height: 48px;
  }
`;

export const TextArea = styled(DefaultTextArea)`
  ._inputContainer {
    height: 90px;
  }
`;
