import React, { useCallback, useState, useRef } from 'react';
import { Regulation } from 'services/register/regulation/interfaces/IRegulation';
import parser from 'html-react-parser';
import ReactToPrint from 'react-to-print';
import getUrl from 'services/register/regulation/getUrlRegulationToDownload';

import pdfIcon from 'assets/images/pdf.svg';
import printIcon from 'assets/images/print.svg';

import {
  Container,
  RegulationContent,
  Button,
  BoxActions,
  PrintRef,
} from './styles';

interface Props {
  onAccept(): Promise<void> | void;
  regulation: Regulation | null;
}

const DataRegulation: React.FC<Props> = ({ onAccept, regulation }) => {
  const [loading, setLoading] = useState(false);
  const [canAccept, setCanAccept] = useState(false);
  const buttonRole = 'primary';
  const printRef = useRef<HTMLDivElement>(null);

  const handleAcceptClick = useCallback(async () => {
    setLoading(true);
    try {
      await onAccept();
    } catch {}

    setLoading(false);
  }, [onAccept]);

  const handleDivScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>): void => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop <=
      e.currentTarget.clientHeight + 2
    ) {
      setCanAccept(true);
    }
  };

  const handlePdfDownload = useCallback(async () => {
    if (!regulation) return;
    const url = await getUrl(regulation.id);

    const linkClick = document.createElement('a');
    linkClick.href = url;
    linkClick.download = 'Regulamento.pdf';
    document.body.appendChild(linkClick);
    linkClick.click();
    document.body.removeChild(linkClick);
  }, [regulation]);

  return (
    <Container>
      <RegulationContent type="primary" onScroll={handleDivScroll}>
        <PrintRef ref={printRef}>{parser(regulation?.content || '')}</PrintRef>
      </RegulationContent>
      <BoxActions>
        <button type="submit" onClick={handlePdfDownload}>
          <img src={pdfIcon} alt="Ícone botão salvar PDF" />
          Download (PDF)
        </button>
        <ReactToPrint
          trigger={() => {
            return (
              <button type="button">
                <img src={printIcon} alt="Ícone botão imprimir" />
                Imprimir
              </button>
            );
          }}
          content={() => printRef.current}
        />
      </BoxActions>
      <Button
        type="button"
        buttonRole={buttonRole}
        onClick={handleAcceptClick}
        loading={loading}
        disabled={!canAccept}
      >
        Concordo com os termos e quero me cadastrar
      </Button>
    </Container>
  );
};

export default DataRegulation;
