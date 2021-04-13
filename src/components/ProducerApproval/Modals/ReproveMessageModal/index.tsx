import React, { useEffect, useState } from 'react';

import { useFarmersContext } from 'pages/ProducerApproval/Context';
import { getReproveMessage } from 'services/producer-approval';
import { ReproveMessage } from 'services/producer-approval/interface';
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
  const { selectedFarmerRequestId } = useFarmersContext();
  const [reproveMessage, setReproveMessage] = useState<ReproveMessage | null>(
    null,
  );

  useEffect(() => {
    const fetchMessage = async () => {
      if (selectedFarmerRequestId) {
        const fetchedMessage = await getReproveMessage(selectedFarmerRequestId);
        setReproveMessage(fetchedMessage);
      }
    };

    fetchMessage();
  }, [selectedFarmerRequestId]);

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
          value={`${
            reproveMessage?.message ?? 'Aguarde...'
          } ${selectedFarmerRequestId}`}
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
