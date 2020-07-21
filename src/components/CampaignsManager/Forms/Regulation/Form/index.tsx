import React from 'react';
import { Button } from 'components/shared';
import { ReactSVG } from 'react-svg';
import parser from 'html-react-parser';
import pdfIcon from 'assets/images/pdf.svg';

import { Container, RegulationContent, RegulationDownload } from './styles';

const mock = 'sjdlkajsd ajldjalj dlajs ldjald';

const Form: React.FC = () => {
  return (
    <Container>
      <h4>Regulamento</h4>
      <RegulationContent type="primary">{parser(mock || '')}</RegulationContent>
      <RegulationDownload type="button">
        <ReactSVG src={pdfIcon} />
        Download Regulamento (PDF)
      </RegulationDownload>
      <Button type="button" buttonRole="primary" className="_actionButton">
        Próximo
      </Button>
    </Container>
  );
};

export default Form;
