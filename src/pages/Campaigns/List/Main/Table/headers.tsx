import React from 'react';
import { StatusText } from 'services/campaignsManager/interfaces/Campaign';
import {
  ApproverProfile,
  CRM,
  DN,
  GRM,
  GRV,
  KAM,
  MKT,
  RTC,
} from 'config/constants';
import EditAction from './Actions/Edit';
import StatusAction from './Actions/Status';
import ApprovalAction from './Actions/Approval';
import HighlightAction from './Actions/Highlight';
import ActivatedAction from './Actions/Active';

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

const status = [
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

const highlight = [
  {
    column: 'Destaque home',
    dataValue: 'highlight',
    fn: ({ id, highlight }: { id: number; highlight: boolean }) => (
      <HighlightAction highlight={highlight} id={id} />
    ),
  },
];

const publish = [
  {
    column: '',
    dataValue: 'activated',
    fn: ({ id, activated }: { id: number; activated: boolean }) => (
      <ActivatedAction activated={activated} id={id} />
    ),
  },
];

export default (profile: ApproverProfile) => {
  switch (profile) {
    case DN:
      return [...common, ...status, ...approval];
    case GRM:
      return [...common, ...edit, ...status];
    case MKT:
      return [...common, ...status, ...approval];
    case GRV:
      return [...common, ...status, ...approval];
    case CRM:
      return [
        ...common,
        ...edit,
        ...status,
        ...approval,
        ...highlight,
        ...publish,
      ];
    default:
      return [...common, ...status];
  }
};
