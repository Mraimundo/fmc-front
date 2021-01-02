import React from 'react';
import StockAction from './Actions/Stock';
import ResultAction from './Actions/Result';

export default [
  {
    column: 'Criada em',
    dataValue: 'created',
  },
  {
    column: 'Nome da campanha',
    dataValue: 'campaign',
  },
  {
    column: 'Estoque final',
    dataValue: 'id',
    fn: (id: string) => <StockAction id={id} />,
  },
  {
    column: 'Resultado final',
    className: '_custom-align',
    dataValue: 'result',
    fn: ({ id, status }: { id: number; status: 'empty' | 'loaded' }) => (
      <ResultAction id={id} status={status} />
    ),
  },
];
