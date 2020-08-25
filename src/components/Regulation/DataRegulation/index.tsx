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
  BoxAccept,
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

  /* const handleDivScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>): void => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop <=
      e.currentTarget.clientHeight + 2
    ) {
      setCanAccept(true);
    }
  }; */

  const handlePdfDownload = useCallback(async () => {
    if (!regulation) return;
    const url = await getUrl(regulation.id, 'Termo_de_segurança_de_dados.pdf');

    const linkClick = document.createElement('a');
    linkClick.href = url;
    linkClick.download = 'Termo_de_segurança_de_dados.pdf';
    document.body.appendChild(linkClick);
    linkClick.click();
    document.body.removeChild(linkClick);
  }, [regulation]);

  return (
    <Container>
      <RegulationContent type="primary">
        {/* <h3>{regulation?.name}</h3> */}
        <div>
          <PrintRef ref={printRef}>
            {parser(regulation?.content || '')}
          </PrintRef>
        </div>
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

      <BoxAccept>
        <input
          type="checkbox"
          name="test"
          checked={canAccept}
          onChange={() => {
            setCanAccept(e => !e);
          }}
        />
        <span>
          Ao clicar na caixa “Li e aceito os{' '}
          <a href="https://juntosfmc-adm.vendavall.com.br/download?name=Portal_Juntos_FMC-TERMO_DE_USO.pdf&url=https://storage.juntosfmc.com.br/avatar/1597870012.5f3d8fbc16bc67.86487857.pdf">
            Termos de Uso
          </a>{' '}
          e{' '}
          <a href="https://juntosfmc-adm.vendavall.com.br/download?name=Portal_Juntos_FMC-POL%C3%8DTICA_DE_PRIVACIDADE.pdf&url=https://storage.juntosfmc.com.br/avatar/1598359154.5f450672673807.86869023.pdf">
            Política de Privacidade
          </a>
          ”, tenho compreensão e estou de acordo com esses Termos, bem como
          concordo e autorizo para a finalidade a que se destina, sem reservas.
        </span>
      </BoxAccept>

      <Button
        type="button"
        buttonRole={buttonRole}
        onClick={handleAcceptClick}
        loading={loading}
        disabled={!canAccept}
      >
        Concordo com os termos e quero me cadastrar
      </Button>
      {/* <span>
        O botão "Aceito Participar" será habilitado após a leitura do
        regulamento na integra.
      </span> */}
    </Container>
  );
};

export default DataRegulation;
