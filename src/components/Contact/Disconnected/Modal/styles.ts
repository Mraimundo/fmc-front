import styled from 'styled-components';
import {
  Button as DefaultButton,
  Input as DefaultInput,
  TextArea as DefaultTextArea,
} from 'components/shared';
import Modal from 'components/shared/Modal';
import Select from '../PublicSubjectsSelect';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 690px;
  padding: 20px 40px;

  @media screen and (max-width: 720px) {
    width: 500px;
  }

  @media screen and (max-width: 520px) {
    width: 320px;
    padding: 20px 10px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 24px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
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

export const AttachFile = styled.span`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 14px;
  margin-bottom: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Button = styled(DefaultButton)`
  align-self: center;
  width: 200px;
  height: 52px;

  @media screen and (max-width: 520px) {
    width: 100%;
  }
`;

export const Input = styled(DefaultInput)`
  margin-bottom: 8px;
  ._inputContainer {
    height: 44px;
  }
`;

export const SubjectSelect = styled(Select)`
  margin-bottom: 8px;
  ._inputContainer {
    height: 44px;
  }
`;

export const TextArea = styled(DefaultTextArea)`
  ._inputContainer {
    height: 90px;
  }
`;

export const DefaultModal = styled(Modal)`
  ._modalContainer {
    padding: 0;
  }
`;
