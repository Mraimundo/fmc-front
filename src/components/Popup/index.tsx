import React, { useState, useCallback } from 'react';
import parser from 'html-react-parser';
import { Popup as IPopup } from 'services/popup/interfaces';
import { Button } from 'components/shared';
import markPopupRead from 'services/popup/markPopupRead';
import { ReactSVG } from 'react-svg';
import closeIcon from 'assets/images/training/close-icon.svg';

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
        <Close onClick={handleClose}>
          <ReactSVG src={closeIcon} />
        </Close>
        <Content>{parser(popup.body)}</Content>
        {popup.canMarkAsRead && (
          <label>
            <input
              type="checkbox"
              checked={markAsRead}
              onChange={() => setMarkAsRead(e => !e)}
            />
            Não quero mais ver isso
          </label>
        )}
        <Button type="button" buttonRole="primary" onClick={handleClose}>
          Ok
        </Button>
      </Container>
    </Modal>
  );
};

export default Popup;
