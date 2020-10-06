import React, { useCallback } from 'react';
import parser from 'html-react-parser';
import { Button } from 'components/shared';
import { ReactSVG } from 'react-svg';
import closeIcon from 'assets/images/training/close-icon.svg';
import pdfIcon from 'assets/images/pdf.svg';
import getDownload from 'services/campaigns/getUrlRegulationToDownload';

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
    id: number;
  };
  canAccept: boolean;
}

const RegulationModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  onAccept,
  campaign,
  loading,
  canAccept,
}) => {
  const handleAccept = useCallback(async () => {
    await onAccept();
  }, [onAccept]);

  const handlePdfDownload = useCallback(async () => {
    const url = await getDownload(campaign.id);

    const linkClick = document.createElement('a');
    linkClick.href = url;
    document.body.appendChild(linkClick);
    linkClick.click();
    document.body.removeChild(linkClick);
  }, [campaign.id]);

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
          {campaign.regulationText && (
            <RegulationBox>{parser(campaign.regulationText)}</RegulationBox>
          )}
          <button type="button" onClick={handlePdfDownload}>
            <ReactSVG src={pdfIcon} />
            Download (PDF)
          </button>
        </Content>
        <Button
          type="button"
          buttonRole="primary"
          onClick={canAccept ? handleAccept : onRequestClose}
          loading={loading}
        >
          {canAccept ? 'Aceitar' : 'Ok'}
        </Button>
      </Container>
    </Modal>
  );
};

export default RegulationModal;
