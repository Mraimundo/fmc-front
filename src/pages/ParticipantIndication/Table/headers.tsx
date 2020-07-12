import React from 'react';
import Actions from './Actions';

interface Props {
  edit?(id: number): Promise<void> | void;
  resendIndicationEmail?(id: number): Promise<void> | void;
  inactivaParticipantIndication?(id: number): Promise<void> | void;
  activeParticipantIndication?(id: number): Promise<void> | void;
}

export default ({
  edit,
  resendIndicationEmail,
  inactivaParticipantIndication,
  activeParticipantIndication,
}: Props) => [
  {
    column: 'Nome',
    dataValue: 'personal',
    fn: (personalData: { id: number; status: number; name: string }) => (
      <Actions
        id={personalData.id}
        personalData={personalData}
        edit={edit}
        resendIndication={resendIndicationEmail}
        inactiveParticipantIndication={inactivaParticipantIndication}
        activeParticipantIndication={activeParticipantIndication}
      />
    ),
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
];
