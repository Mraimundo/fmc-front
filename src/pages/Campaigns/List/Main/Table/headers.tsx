import React from 'react';
import { StatusText } from 'services/campaignsManager/interfaces/Campaign';
import EditAction from './Actions/Edit';
import StatusAction from './Actions/Status';
import ApprovalAction from './Actions/Approval';
import HighlightAction from './Actions/Highlight';
import ActivatedAction from './Actions/Active';

export default [
  {
    column: 'Solicitado em',
    dataValue: 'solicitationDate',
  },
  {
    column: 'Campanha',
    dataValue: 'campaign',
  },
  {
    column: 'Editar',
    dataValue: 'edit',
    fn: ({ id, status }: { id: number; status: StatusText }) => (
      <EditAction id={id} status={status} />
    ),
  },
  {
    column: 'Status da campanha',
    dataValue: 'status',
    fn: ({ status }: { status: { status: StatusText; name: string } }) => (
      <StatusAction status={status} />
    ),
  },
  {
    column: 'Aprovação',
    dataValue: 'approval',
    fn: ({ id, status }: { id: number; status: StatusText }) => (
      <ApprovalAction status={status} id={id} />
    ),
  },
  {
    column: 'Destaque home',
    dataValue: 'highlight',
    fn: ({ id, highlight }: { id: number; highlight: boolean }) => (
      <HighlightAction highlight={highlight} id={id} />
    ),
  },
  {
    column: '',
    dataValue: 'activated',
    fn: ({ id, activated }: { id: number; activated: boolean }) => (
      <ActivatedAction activated={activated} id={id} />
    ),
  },
];
