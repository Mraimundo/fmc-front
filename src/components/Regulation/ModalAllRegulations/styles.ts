import styled from 'styled-components';
import DefaultModal from 'components/shared/Modal';

interface ContainerProps {
  type: 'primary' | 'secondary';
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  color: #000;

  &::-webkit-scrollbar-track {
    background-color: ${({ theme, type }) =>
      theme.regulation[type].scrollBarBackgroundColor};
  }
  padding-right: 12px;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme, type }) =>
      theme.regulation[type].scrollBarColor};
  }
`;

export const Modal = styled(DefaultModal)`
  padding: 0;
  ._modalContainer {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    max-height: 100vh;
  }
`;
