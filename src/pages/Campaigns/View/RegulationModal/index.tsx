import React, { useCallback } from 'react';
import parser from 'html-react-parser';
import { Button } from 'components/shared';
import { ReactSVG } from 'react-svg';
import closeIcon from 'assets/images/training/close-icon.svg';
import pdfIcon from 'assets/images/pdf.svg';

import { Modal, Container, Content, Close, RegulationBox } from './styles';

interface Props {
  isOpen: boolean;
  onRequestClose(): void;
  onAccept(): Promise<void>;
  loading: boolean;
  campaign: {
    title: string;
    startDate: string;
    endDate: string;
    regulationText: string;
  };
}

const RegulationModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  onAccept,
  campaign,
  loading,
}) => {
  const handleAccept = useCallback(async () => {
    await onAccept();
  }, [onAccept]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} type="primary">
      <Container>
        <Close>
          <button type="button" onClick={onRequestClose}>
            <ReactSVG src={closeIcon} />
          </button>
        </Close>
        <Content>
          <h3>{campaign.title}</h3>
          <span>
            Período da campanha de {campaign.startDate} até {campaign.endDate}
          </span>
          <span>Regulamento</span>
          <RegulationBox>{parser(campaign.regulationText)}</RegulationBox>
          <button type="submit">
            <ReactSVG src={pdfIcon} />
            Download (PDF)
          </button>
        </Content>
        <Button
          type="button"
          buttonRole="primary"
          onClick={handleAccept}
          loading={loading}
        >
          Aceitar
        </Button>
      </Container>
    </Modal>
  );
};

export default RegulationModal;
