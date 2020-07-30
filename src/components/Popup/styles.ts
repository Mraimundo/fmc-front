import styled from 'styled-components';
import DefaultModal from 'components/shared/Modal';

export const Modal = styled(DefaultModal)`
  ._modalContainer {
    padding: 0;
    max-width: 600px;
    width: 100%;
    height: auto;
  }
`;

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  > label {
    margin-top: 5px;
    color: #000;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-family: ${({ theme }) => theme.font.fontFamily.condensed};
    input {
      margin-right: 5px;
    }
  }

  > button {
    width: 123px;
    height: 48px;
    align-self: center;
    text-transform: uppercase;
    font-size: 18px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
`;

export const Close = styled.span`
  border: none;
  background: transparent;
  position: absolute;
  cursor: pointer;
  top: 4px;
  right: 4px;
  width: fit-content;
  height: fit-content;
`;
