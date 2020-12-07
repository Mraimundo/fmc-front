import React from 'react';
import { ReactSVG } from 'react-svg';

import especialista from 'assets/images/badges/land-badge.svg';
import conselheiro from 'assets/images/badges/root-badge.svg';
import parceiro from 'assets/images/fmcProdutor/icon-status--parceiro.svg';
import lider from 'assets/images/badges/water-badge.svg';
import { Status } from 'state/modules/header/constants';
import { StatusIcon } from './style';

const statusMap = {
  [Status.Especialista]: (
    <ReactSVG src={especialista} data-testid="status-especialista" />
  ),
  [Status.Conselheiro]: (
    <ReactSVG src={conselheiro} data-testid="status-conselheiro" />
  ),
  [Status.Parceiro]: <ReactSVG src={parceiro} data-testid="badge-parceiro" />,
  [Status.Lider]: <ReactSVG src={lider} data-testid="badge-lider" />,
};

interface ParticipantStatusProps {
  status: Status;
}
const ParticipantStatus: React.FC<ParticipantStatusProps> = ({ status }) => {
  return <StatusIcon>{statusMap[status]}</StatusIcon>;
};

export default ParticipantStatus;
