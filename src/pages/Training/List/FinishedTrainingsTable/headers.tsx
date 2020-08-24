import React from 'react';
import routeMap from 'routes/route-map';
import DefaultAction from './Actions/Default';
import CertificateAction from './Actions/Certificate';

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
    className: '_customWidthDate',
  },
  {
    column: 'Concluído em',
    dataValue: 'endDateParticipation',
    className: '_customWidthDate',
  },
  {
    column: 'Status',
    dataValue: 'status',
    className: '_customWidthStatus',
  },
  {
    column: ' ',
    dataValue: 'custom',
    fn: ({ id, approved }: CustomProps) =>
      approved ? (
        <DefaultAction
          name="Gabarito"
          actionUrl={`${routeMap.training}/${id}`}
        />
      ) : (
        <></>
      ),
    className: '_customWidth',
  },
  {
    column: ' ',
    dataValue: 'custom',
    fn: ({ id, approved }: CustomProps) =>
      approved ? (
        <CertificateAction id={id} />
      ) : (
        <DefaultAction
          name="Acessar"
          actionUrl={`${routeMap.training}/${id}`}
        />
      ),
    className: '_customWidth',
  },
];
