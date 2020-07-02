import styled from 'styled-components';
import DefaultModal from 'components/shared/Modal';

export const Modal = styled(DefaultModal)`
  ._modalContainer {
    padding: 0;
    max-width: 600px;
    width: 100%;
    height: auto;
    max-height: 600px;
  }
`;

export const Container = styled.div`
  padding: 10px;
`;

export const Content = styled.div``;

export const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  > button {
    border: none;
    background: transparent;
  }
`;
