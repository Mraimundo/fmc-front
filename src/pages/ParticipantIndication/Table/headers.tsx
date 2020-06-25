import React from 'react';
import Actions from './Actions';

interface Props {
  edit?(id: number): Promise<void> | void;
}

export default ({ edit }: Props) => [
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
    fn: (id: string) => <Actions id={parseInt(id, 0)} edit={edit} />,
  },
];
