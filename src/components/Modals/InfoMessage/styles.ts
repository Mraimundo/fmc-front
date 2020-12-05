import styled from 'styled-components';
import DefaultModal from 'components/shared/Modal';

export const Modal = styled(DefaultModal)`
  ._modalContainer {
    padding: 0;
    max-width: 500px;
    width: 100%;
    height: 100%;
    max-height: 320px;
    background-color: transparent;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background: #e63027;
`;

export const Content = styled.div`
  color: #000;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;

  > h4 {
    font-size: 24px;
    color: ${({ theme }) => theme.font.color.tertiary};
    text-align: center;
  }

  > button {
    width: 181px;
    height: 48px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 18px;
  }
`;

export const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  transform: translateX(-4px) translateY(4px);
  > button {
    border: none;
    background: transparent;
    svg path {
      fill: ${({ theme }) => theme.font.color.tertiary};
    }
  }
`;
