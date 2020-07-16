import React from 'react';
import Actions from './Actions';

interface Props {
  edit?(id: number): Promise<void> | void;
  resendIndicationEmail?(id: number): Promise<void> | void;
  inactivaParticipantIndication?(id: number): Promise<void> | void;
}

interface CustomProps {
  id: number;
  approved: boolean;
  certificateUrl: string;
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
    dataValue: 'custom',
    fn: ({ id, approved }: CustomProps) =>
      approved ? (
        <Actions name="Gabarito" actionUrl={`/training/${id}`} />
      ) : (
        <></>
      ),
    className: '_customWidth',
  },
  {
    column: ' ',
    dataValue: 'custom',
    fn: ({ id, approved, certificateUrl }: CustomProps) =>
      approved ? (
        <Actions name="Certificado" actionUrl={certificateUrl} />
      ) : (
        <Actions name="Acessar" actionUrl={`/training/${id}`} />
      ),
    className: '_customWidth',
  },
];
