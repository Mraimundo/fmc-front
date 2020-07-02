import React, { useState, useCallback } from 'react';
import parser from 'html-react-parser';
import { Popup as IPopup } from 'services/popup/interfaces';
import { Button } from 'components/shared';
import markPopupRead from 'services/popup/markPopupRead';

import { Modal, Container, Content, Close } from './styles';

interface Props {
  isOpen: boolean;
  onRequestClose(): void;
  popup: IPopup;
}

const Popup: React.FC<Props> = ({ isOpen, onRequestClose, popup }) => {
  const [markAsRead, setMarkAsRead] = useState(false);

  const handleClose = useCallback(() => {
    if (markAsRead) {
      markPopupRead(popup.id);
    }
    onRequestClose();
  }, [popup, markAsRead, onRequestClose]);

  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose} type="primary">
      <Container>
        <Close>
          <button type="button" onClick={handleClose}>
            X
          </button>
        </Close>
        <Content>{parser(popup.body)}</Content>
        <input
          type="checkbox"
          value="Não quero mais ver isso"
          checked={markAsRead}
          onChange={() => setMarkAsRead(e => !e)}
        />
        <Button type="button" buttonRole="primary" onClick={handleClose}>
          Ok
        </Button>
      </Container>
    </Modal>
  );
};

export default Popup;
