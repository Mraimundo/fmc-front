import React from 'react';
import SimulateAction from './Actions/Simulate';

export default [
  {
    column: 'Código do cliente',
    dataValue: 'clientCode',
  },
  {
    column: 'Nome',
    dataValue: 'name',
  },
  {
    column: 'E-mail',
    dataValue: 'email',
  },
  {
    column: '',
    dataValue: 'activated',
    fn: (id: string) => <SimulateAction id={id} />,
  },
];
