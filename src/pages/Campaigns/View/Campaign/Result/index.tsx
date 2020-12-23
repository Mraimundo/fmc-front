import React, { useCallback, useState } from 'react';
import { ReactSVG } from 'react-svg';
import pdfIcon from 'assets/images/pdf.svg';

import { useToast } from 'context/ToastContext';
import { Container, Separator } from './styles';

interface Props {
  pdfFile?: string;
}

const Result: React.FC<Props> = ({ pdfFile }) => {
  const { addToast } = useToast();

  const handlePdfNotFound = useCallback(() => {
    addToast({ title: 'Este arquivo ainda não foi carregado!', type: 'error' });
  }, [addToast]);

  return (
    <Container>
      <h4>Resultados</h4>
      <Separator />
      <span>Confira os resultados</span>
      {pdfFile ? (
        <a href={pdfFile}>
          <ReactSVG src={pdfIcon} />
          Download Resultados (PDF)
        </a>
      ) : (
        <button type="submit" onClick={handlePdfNotFound}>
          <ReactSVG src={pdfIcon} />
          Download Resultados (PDF)
        </button>
      )}
    </Container>
  );
};

export default Result;
