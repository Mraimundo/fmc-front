import styled from 'styled-components';
import DefaultModal from 'components/shared/Modal';
import DefaultForm from 'components/Auth/Register/Form';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.font.color.primary};
  height: 100%;
  padding: 25px 10px 10px;
  position: relative;
`;

export const Modal = styled(DefaultModal)`
  ._modalContainer {
    max-width: 900px;
    max-height: 840px;
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
`;

export const Form = styled(DefaultForm)`
  width: 100%;
  margin-left: 50px;
`;
