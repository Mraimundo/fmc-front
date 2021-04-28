import styled from 'styled-components';
import BaseTextArea from 'components/shared/TextArea';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-height: 100px;
`;

export const Form = styled.form`
  //width: 70%;
`;

export const TextArea = styled(BaseTextArea)`
  margin-top: 25px;
  margin-bottom: 10px;
  width: 100%;
  ._inputContainer {
    width: 100%;
    height: 100px;
  }
`;

export const TextAreaWrapper = styled.div`
  width: 70%;
  padding: 1rem 0 0 0;
`;

export const ActionWrapper = styled.div`
  width: 30%;
  padding: 1rem;
`;
