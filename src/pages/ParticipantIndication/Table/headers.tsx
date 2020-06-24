import React from 'react';
import Actions from './Actions';

export default [
  {
    column: 'Nome',
    dataValue: 'name',
  },
  {
    column: 'Perfil',
    dataValue: 'profile',
  },
  {
    column: 'Email',
    dataValue: 'email',
  },
  {
    column: 'Indicado em',
    dataValue: 'formattedIndicatedDate',
  },
  {
    column: 'Status',
    dataValue: 'status',
  },
  {
    column: ' ',
    dataValue: 'id',
    fn: (id: string) => <Actions id={id} />,
  },
];
