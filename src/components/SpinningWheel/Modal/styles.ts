import styled from 'styled-components';
import Modal from 'components/shared/Modal';
import SpinWheel from '../Component';

export const DefaultModal = styled(Modal)`
  ._modalContainer {
    background: transparent;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  @media screen and (max-width: 600px) {
    ._modalContainer {
      overflow: auto;

      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

export const Spin = styled(SpinWheel)`
  transform: translateX(130px);

  @media screen and (max-width: 600px) {
    transform: translateX(5px);
  }
`;
