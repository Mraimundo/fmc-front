import styled from 'styled-components';
import DefaultModal from 'components/shared/Modal';

export const Modal = styled(DefaultModal)`
  ._modalContainer {
    padding: 0;
    max-width: 743px;
    width: 100%;
    height: 100%;
    max-height: 377px;
  }
`;

export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  > label {
    margin-top: 5px;
    color: #000;
    display: flex;
    align-items: center;
    input {
      margin-right: 5px;
    }
  }

  > button {
    width: 137px;
    height: 36px;
    text-transform: uppercase;
    align-self: center;
    margin-bottom: 25px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;
  }
`;

export const Content = styled.div`
  color: #000;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-left: 127px;

  > h3 {
    font-size: 28px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
  }

  > h4 {
    font-size: 21px;
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.medium};
  }

  > a {
    margin-top: 25px;
    font-size: 21px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
  }

  @media screen and (max-width: 720px) {
    padding-left: 5px;
  }
`;

export const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  > button {
    border: none;
    background: transparent;
  }
`;
