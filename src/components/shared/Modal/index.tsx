import React, { useState, useEffect, useCallback } from 'react';
import { Props } from 'react-modal';

import { Container, ReactModal } from './styles';

ReactModal.setAppElement('#root');

const Modal: React.FC<Props> = ({
  children,
  isOpen,
  onRequestClose,
  ...rest
}) => {
  const [closing, setClosing] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (document) {
      if (isOpen) {
        (document.getElementById('root') as HTMLInputElement).style.overflowY =
          'auto';
        return;
      }
      (document.getElementById('root') as HTMLInputElement).style.overflowY =
        'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setClosing(false);
      setOpened(true);
      return;
    }

    setClosing(true);
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
      style={{
        overlay: {
          animation: closing ? 'lighten 0.4s both' : 'darken 0.4s both',
        },
      }}
      {...rest}
    >
      <Container className="_modalContainer" closing={closing}>
        {children}
      </Container>
    </ReactModal>
  );
};

export default Modal;
