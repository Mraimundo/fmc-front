import React, { useState, useEffect } from 'react';
import { ExtractSummary } from 'services/extract/interfaces';
import ExtractHeader from 'components/Extract/ExtractHeader';
import ExtractDetails from 'components/Extract/ExtractDetails';
import AccordionItem from 'components/Extract/Accordion/Item';

import { Container, Content, PageTitle } from './styles';

const Extract: React.FC = () => {
  const [summary, setSummary] = useState<ExtractSummary[]>([]);

  useEffect(() => {
    // getSummary().then(data => setSummary(data));
    setSummary([
      {
        value: 100,
        balance_unit: {
          id: 1,
          name: 'Pontos',
          description: 'Pontos',
        },
      },
      {
        value: 200,
        balance_unit: {
          id: 2,
          name: 'Mais Pontos',
          description: 'Mais Pontos',
        },
      },
      {
        value: 200,
        balance_unit: {
          id: 3,
          name: 'Premiação do Vendedor',
          description: 'Premiação do Vendedor',
        },
      },
      {
        value: 500,
        balance_unit: {
          id: 4,
          name: 'Mais Pontos',
          description: 'Mais Pontos',
        },
      },
    ]);
  }, []);

  return (
    <Container>
      <Content>
        <PageTitle>Extrato de Pontos</PageTitle>
        <ExtractHeader summary={summary} />
        <ExtractDetails />
      </Content>
    </Container>
  );
};

export default Extract;
