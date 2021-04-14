import React from 'react';

import { useFarmersContext } from 'pages/ProducerApproval/Context';
import { formatDate } from 'util/datetime';
import { Container, Modal, TextArea, Title } from './styles';
import { Button, Actions } from '../shared/styles';
import CloseButton from '../shared/CloseButton';

interface ReprovalMessageModalProps {
  isOpen: boolean;
  onCancelRequest: () => void;
}

const ReproveMessageModal: React.FC<ReprovalMessageModalProps> = ({
  isOpen,
  onCancelRequest,
}) => {
  const { reproveMessage } = useFarmersContext();

  return (
    <Modal isOpen={isOpen} onRequestClose={onCancelRequest}>
      <CloseButton onClickHandler={onCancelRequest} />
      <Container>
        <Title>Motivo de reprovação</Title>
        <TextArea
          label={`Reprovado em ${
            reproveMessage?.update_date
              ? formatDate(reproveMessage?.update_date, 'dd/MM/yyyy hh:mm:ss')
              : ''
          }`}
          value={`${reproveMessage?.message ?? 'Aguarde...'} `}
          readOnly
        />
        <Actions>
          <Button type="button" buttonRole="primary" onClick={onCancelRequest}>
            Fechar
          </Button>
        </Actions>
      </Container>
    </Modal>
  );
};

export default ReproveMessageModal;
