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
  padding: 20px;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 21px;
    color: ${({ theme }) => theme.font.color.primary};
    align-self: center;
  }

  > h4 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 18px;
    color: ${({ theme }) => theme.font.color.quartenary};
    margin-top: 32px;
  }

  > h5 {
    font-size: 18px;
    color: ${({ theme }) => theme.font.color.quartenary};
    margin-top: 25px;
  }

  > span {
    font-size: 18px;
    color: ${({ theme }) => theme.font.color.quartenary};
    margin-top: 10px;
  }

  > ul {
    font-size: 18px;
    color: ${({ theme }) => theme.font.color.quartenary};
    margin-top: 5px;
    margin-left: 18px;
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
