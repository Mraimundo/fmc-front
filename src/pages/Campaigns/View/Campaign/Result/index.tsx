import React, { useCallback } from 'react';

import { useToast } from 'context/ToastContext';
import { Container, Separator } from './styles';

interface Props {
  pdfFile: string;
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
          Download Resultados
        </a>
      ) : (
        <button type="submit" onClick={handlePdfNotFound}>
          Download Resultados
        </button>
      )}
    </Container>
  );
};

export default Result;
