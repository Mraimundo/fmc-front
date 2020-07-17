import styled from 'styled-components';
import DefaultModal from 'components/shared/Modal';

export const Modal = styled(DefaultModal)`
  ._modalContainer {
    padding: 0;
    max-width: 600px;
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
    align-self: center;
    margin-bottom: 25px;
  }
`;

export const Content = styled.div`
  color: #000;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h3 {
    width: 335px;
    font-size: 28px;
    font-weight: bold;
    color: ${({ theme }) => theme.font.color.primary};
  }

  > h4 {
    width: 335px;
    font-size: 21px;
    color: ${({ theme }) => theme.font.color.primary};
  }

  > a {
    width: 335px;
    margin-top: 25px;
    font-size: 21px;
    font-weight: bold;
    color: ${({ theme }) => theme.font.color.primary};
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
