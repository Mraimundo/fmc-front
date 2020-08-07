import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import pdfIcon from 'assets/images/pdf.svg';

import { Container, Separator } from './styles';

interface Props {
  handleDownloadPdf(): Promise<void>;
}

const Result: React.FC<Props> = ({ handleDownloadPdf }) => {
  const [loading, setLoading] = useState(false);
  return (
    <Container>
      <h4>Resultados</h4>
      <Separator />
      <span>Confira os resultados</span>
      <button
        type="submit"
        onClick={() => {
          console.log('oi');
        }}
      >
        <ReactSVG src={pdfIcon} />
        Download Resultados (PDF)
      </button>
    </Container>
  );
};

export default Result;
