import React from 'react';
import Actions from './Actions';

interface Props {
  edit?(id: number): Promise<void> | void;
  resendIndicationEmail?(id: number): Promise<void> | void;
  inactivaParticipantIndication?(id: number): Promise<void> | void;
}

export default [
  {
    column: 'Grupo de Clientes',
    dataValue: 'name',
  },
  {
    column: 'Categoria',
    dataValue: 'category',
  },
  {
    column: 'Pontos a Resgatar',
    dataValue: 'points',
  },
  {
    column: ' ',
    dataValue: 'id',
    fn: (id: string) => <Actions establishmentId={id} />,
    className: '_customWidth',
  },
];
