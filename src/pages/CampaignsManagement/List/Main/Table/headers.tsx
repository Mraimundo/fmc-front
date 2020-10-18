import React from 'react';
import { StatusText } from 'services/campaignsManager/interfaces/Campaign';
import { ApproverProfile, CRM, DN, GRM, GRV, MKT } from 'config/constants';
import EditAction from './Actions/Edit';
import StatusAction from './Actions/Status';
import ApprovalAction from './Actions/Approval';
import HighlightAction from './Actions/Highlight';
import ActivatedAction from './Actions/Active';
import ViewAction from './Actions/View';

const common = [
  {
    column: 'Solicitado em',
    dataValue: 'solicitationDate',
  },
  {
    column: 'Campanha',
    dataValue: 'campaign',
  },
];

const statusColumn = [
  {
    column: 'Status da campanha',
    dataValue: 'status',
    fn: ({ status }: { status: { status: StatusText; name: string } }) => (
      <StatusAction status={status} />
    ),
  },
];

const edit = [
  {
    column: 'Editar',
    dataValue: 'edit',
    fn: ({ id, status }: { id: number; status: StatusText }) => (
      <EditAction id={id} status={status} />
    ),
  },
];

const approval = [
  {
    column: 'Aprovação',
    dataValue: 'approval',
    fn: ({ id, status }: { id: number; status: StatusText }) => (
      <ApprovalAction status={status} id={id} />
    ),
  },
];

const highlightColumn = [
  {
    column: 'Destaque home',
    dataValue: 'highlight',
    fn: ({
      id,
      status,
      campaignId,
    }: {
      id: number;
      campaignId: number;
      status: boolean;
    }) => <HighlightAction status={status} id={id} campaignId={campaignId} />,
  },
];

const publish = [
  {
    column: '',
    dataValue: 'activated',
    fn: ({
      id,
      activated,
      highlightId,
    }: {
      id: number;
      activated: boolean;
      highlightId: number;
    }) => (
      <ActivatedAction
        activated={activated}
        id={id}
        highlightId={highlightId}
      />
    ),
  },
];

const view = [
  {
    column: '',
    dataValue: 'id',
    fn: (id: string) => <ViewAction id={id} />,
  },
];

export default (profile: ApproverProfile) => {
  switch (profile) {
    case DN:
      return [...common, ...statusColumn, ...approval];
    case GRM:
      return [...common, ...edit, ...statusColumn];
    case MKT:
      return [...common, ...statusColumn, ...approval];
    case GRV:
      return [...common, ...statusColumn, ...approval];
    case CRM:
      return [
        ...common,
        ...edit,
        ...statusColumn,
        ...approval,
        ...highlightColumn,
        ...publish,
      ];
    default:
      return [...common, ...view, ...statusColumn];
  }
};
