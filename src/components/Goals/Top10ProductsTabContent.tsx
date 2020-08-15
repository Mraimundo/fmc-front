import React from 'react';

import { Product } from 'state/modules/goals/types';
import Table from 'components/shared/Table';
import { TitleSection } from './styles';

const headers = [
  { column: 'POSIÇÃO', dataValue: 'position' },
  { column: 'PRODUTO', dataValue: 'name' },
  { column: 'FATURAMENTO (US$)', dataValue: 'billing' },
  { column: 'VOLUME (KG/L)', dataValue: 'volume' },
];

interface Top10ProductsTabContentProps {
  sellingProducts: Product[] | null;
  purchasingProducts: Product[] | null;
}
const Top10ProductsTabContent: React.FC<Top10ProductsTabContentProps> = ({
  sellingProducts,
  purchasingProducts,
}) => {
  return (
    <>
      <TitleSection>Produtos mais comprados</TitleSection>
      <Table headers={headers} data={purchasingProducts || []} />
      <TitleSection>Produtos mais vendidos</TitleSection>
      <Table headers={headers} data={sellingProducts || []} />
    </>
  );
};

export default Top10ProductsTabContent;
