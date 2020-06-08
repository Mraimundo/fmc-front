import styled, { css } from 'styled-components';
import DefaultReactModal from 'react-modal';

interface ContainerProps {
  closing: boolean;
  type: 'primary' | 'secondary';
}

export const ReactModal = styled(DefaultReactModal)`
  background: transparent;
  @keyframes darken {
    0% {
      background: rgba(0, 0, 0, 0);
    }
    100% {
      background: rgba(0, 0, 0, 0.5);
    }
  }

  @keyframes lighten {
    0% {
      background: rgba(0, 0, 0, 0.5);
    }
    100% {
      background: rgba(0, 0, 0, 0);
    }
  }
`;

export const Container = styled.div<ContainerProps>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  max-height: 90vh;
  overflow-y: auto;

  background-color: ${({ theme, type }) => theme.modal[type].backgroundColor};

  &::-webkit-scrollbar-track {
    background-color: ${({ theme, type }) =>
      theme.modal[type].scrollBarBackgroundColor};
  }
  padding-right: 12px;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme, type }) => theme.modal[type].scrollBarColor};
  }

  animation: openModal 0.3s ease-in;

  ${({ closing }) =>
    closing &&
    css`
      animation: closeModal 0.4s both ease-out;
    `};

  @keyframes closeModal {
    0% {
      transform: translate(-50%, -50%) perspective(400px);
      opacity: 1;
    }
    30% {
      transform: translate(-50%, -50%) perspective(400px)
        rotate3d(1, 0, 0, -15deg);
      opacity: 0.7;
    }
    100% {
      transform: translate(-50%, -50%) perspective(400px)
        rotate3d(1, 0, 0, 45deg);
      opacity: 0;
    }
  }

  @keyframes openModal {
    0% {
      transform: translate(-50%, -50%) perspective(400px)
        rotate3d(1, 0, 0, 60deg);
      opacity: 0;
    }

    70% {
      transform: translate(-50%, -50%) perspective(400px)
        rotate3d(1, 0, 0, -15deg);
      opacity: 0.7;
    }
    100% {
      transform: perspective(400px) translate(-50%, -50%);
      opacity: 1;
    }
  }
`;
