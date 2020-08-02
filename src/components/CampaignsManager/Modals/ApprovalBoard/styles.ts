import styled from 'styled-components';
import DefaultModal from 'components/shared/Modal';

export const Modal = styled(DefaultModal)`
  ._modalContainer {
    padding: 0;
    max-width: 743px;
    width: 100%;
    height: 100%;
    max-height: 447px;
  }
`;

export const Container = styled.div`
  padding: 10px 10px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;

  > button {
    width: 152px;
    height: 48px;
    text-transform: uppercase;
    align-self: center;
    margin-bottom: 25px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;
    border-radius: 5px;
  }
`;

export const Content = styled.div`
  padding: 26px 73px 5px 73px;
  color: #000;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  > h3 {
    font-size: 24px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    display: flex;
    align-items: center;
    svg {
      margin-right: 12px;
      width: 40px;
      height: 40px;
    }
    margin-bottom: 30px;
  }

  > textarea {
    width: 100%;
    max-width: 598px;
    padding: 15px;
    border: 1px solid ${({ theme }) => theme.font.color.primary};
    height: 100%;
    overflow-y: scroll;
    resize: none;
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
