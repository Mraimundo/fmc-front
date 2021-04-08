import styled from 'styled-components';
import DefaultModal from 'components/shared/Modal';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 50px 20px;
  height: 100%;
`;
export const Modal = styled(DefaultModal)`
  ._modalContainer {
    max-width: 650px;
    max-height: 350px;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;
