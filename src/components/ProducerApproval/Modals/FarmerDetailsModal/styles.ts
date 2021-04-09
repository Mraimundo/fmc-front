import styled from 'styled-components';
import DefaultModal from 'components/shared/Modal';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.font.color.primary};
`;

export const Modal = styled(DefaultModal)`
  ._modalContainer {
    max-width: 650px;
    max-height: 700px;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;
