import React from 'react';
import Actions from './Actions';

interface Props {
  edit?(id: number): Promise<void> | void;
  resendIndicationEmail?(id: number): Promise<void> | void;
  inactivaParticipantIndication?(id: number): Promise<void> | void;
}

export default [
  {
    column: 'Treinamentos',
    dataValue: 'title',
  },
  {
    column: 'Categoria',
    dataValue: 'category',
  },
  {
    column: 'Iniciado em',
    dataValue: 'startDateParticipation',
  },
  {
    column: 'Concluído em',
    dataValue: 'endDateParticipation',
  },
  {
    column: 'Status',
    dataValue: 'status',
  },
  {
    column: ' ',
    dataValue: 'id',
    fn: (id: string) => (
      <Actions name="Gabarito" actionUrl={`/trainings/${id}`} />
    ),
    className: '_customWidth',
  },
  {
    column: ' ',
    dataValue: 'certificateUrl',
    fn: (certificateUrl: string) => (
      <Actions name="Certificado" actionUrl={certificateUrl} />
    ),
    className: '_customWidth',
  },
];
