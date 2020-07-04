import React from 'react';
import Actions from './Actions';

interface Props {
  edit?(id: number): Promise<void> | void;
  resendIndicationEmail?(id: number): Promise<void> | void;
  inactivaParticipantIndication?(id: number): Promise<void> | void;
}

export default ({
  edit,
  resendIndicationEmail,
  inactivaParticipantIndication,
}: Props) => [
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
    dataValue: 'indicatedDate',
  },
  {
    column: 'Status',
    dataValue: 'status',
  },
  {
    column: ' ',
    dataValue: 'personal',
    fn: (personalData: { id: number; status: number }) => (
      <Actions
        id={personalData.id}
        personalData={personalData}
        edit={edit}
        resendIndication={resendIndicationEmail}
        inactiveParticipantIndication={inactivaParticipantIndication}
      />
    ),
  },
];
