import React from 'react';

import Table from 'components/shared/Table';
import { TitleSection } from './styles';

const headers = [
  { column: 'POSIÇÃO', dataValue: 'position' },
  { column: 'PRODUTO', dataValue: 'product' },
  { column: 'FATURAMENTO (US$)', dataValue: 'billing' },
  { column: 'VOLUME (KG/L)', dataValue: 'volum' },
];

const data = [
  {
    position: '01',
    product: 'Nome do produto',
    billing: '0.00',
    volum: '0.00',
  },
  {
    position: '02',
    product: 'Nome do produto',
    billing: '0.00',
    volum: '0.00',
  },
  {
    position: '03',
    product: 'Nome do produto',
    billing: '0.00',
    volum: '0.00',
  },
  {
    position: '04',
    product: 'Nome do produto',
    billing: '0.00',
    volum: '0.00',
  },
];

const Top10ProductsTabContent: React.FC = () => {
  return (
    <>
      <TitleSection>Produtos mais comprados</TitleSection>
      <Table headers={headers} data={data} />
      <TitleSection>Produtos mais vendidos</TitleSection>
      <Table headers={headers} data={data} />
    </>
  );
};

export default Top10ProductsTabContent;
