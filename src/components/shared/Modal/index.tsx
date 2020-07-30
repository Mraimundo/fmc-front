import React, { useState, useEffect, useCallback } from 'react';
import { Props } from 'react-modal';

import { Container, ReactModal } from './styles';

interface ModalProps extends Props {
  type?: 'primary' | 'secondary';
}

ReactModal.setAppElement('#root');

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onRequestClose,
  type = 'primary',
  shouldCloseOnEsc = false,
  ...rest
}) => {
  const [closing, setClosing] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (document) {
      if (isOpen) {
        (document.getElementById('root') as HTMLInputElement).style.overflowY =
          'auto';
        const div = document.getElementsByTagName('body')[0];
        const hasVerticalScrollbar = div.scrollHeight > window.innerHeight;
        if (hasVerticalScrollbar) {
          div.style.marginRight = '15px';
        }
        div.style.overflowY = 'hidden';
      } else {
        (document.getElementById('root') as HTMLInputElement).style.overflowY =
          'auto';
        document.getElementsByTagName('body')[0].style.overflowY = 'auto';
        document.getElementsByTagName('body')[0].style.marginRight = '0';
      }
    }
    return () => {
      (document.getElementById('root') as HTMLInputElement).style.overflowY =
        'auto';
      document.getElementsByTagName('body')[0].style.overflowY = 'auto';
      document.getElementsByTagName('body')[0].style.marginRight = '0';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setClosing(false);
      setOpened(true);
      return;
    }

    setClosing(true);
    setTimeout(() => {
      setOpened(false);
      setClosing(false);
    }, 500);
  }, [isOpen]);

  const handleOnClose = useCallback(
    e => {
      setClosing(true);
      setTimeout(() => {
        if (typeof onRequestClose === 'function') onRequestClose(e);
        setOpened(false);
        setClosing(false);
      }, 500);
    },
    [onRequestClose],
  );

  return (
    <ReactModal
      isOpen={opened}
      onRequestClose={handleOnClose}
      shouldCloseOnEsc={shouldCloseOnEsc}
      style={{
        overlay: {
          animation: closing ? 'lighten 0.4s both' : 'darken 0.4s both',
        },
      }}
      {...rest}
    >
      <Container type={type} className="_modalContainer" closing={closing}>
        {children}
      </Container>
    </ReactModal>
  );
};

export default Modal;
