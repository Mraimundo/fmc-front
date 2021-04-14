import styled from 'styled-components';
import DefaultModal from 'components/shared/Modal';
import BaseTextArea from 'components/shared/TextArea/BaseTextArea';
import { Title as DefaultTitle } from '../shared/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  height: 100%;
`;

export const Modal = styled(DefaultModal)`
  ._modalContainer {
    max-width: 650px;
    max-height: 450px;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

export const TextArea = styled(BaseTextArea)`
  width: 100%;
  min-height: 250px;

  ._inputContainer {
    width: 100%;
    height: 100%;
  }
  span {
    color: ${({ theme }) => theme.font.color.primary};
    margin: 10px 0 5px;
  }
`;

export const Title = styled(DefaultTitle)`
  text-align: left;
  font-size: 1.5em;
  width: 100%;
`;
