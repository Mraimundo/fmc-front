import { CommonState } from './reducer';
import { PointsToDistribute, Establishment } from './types';
import { Establishment as RawEstablishment } from 'services/auth/getEstablishments';

export const error = 'Generic Error';

export const pointsToDistribute: PointsToDistribute = {
  general: null,
  teamAwards: null,
  resaleCooperative: {
    maxInvoicePercentage: 20,
    points: 1500,
  },
};

export const establishments: Establishment[] = [
  { value: '1', title: 'Estabelecimento 1' },
  { value: '2', title: 'Estabelecimento 2' },
];

export const rawEstablishments: RawEstablishment[] = [
  {
    id: 1,
    name: 'Estabelecimento 1',
    status: 1,
    cnpj: '00000000000000',
    type: {
      id: 1,
      name: 'Revenda',
    },
  },
  {
    id: 2,
    name: 'Estabelecimento 2',
    status: 1,
    cnpj: '11111111111111',
    type: {
      id: 2,
      name: 'Cooperativa',
    },
  },
];

export const selectedEstablishment: Establishment = establishments[0];

const state: CommonState = {
  fetchPointsToDistribute: {
    isFetching: false,
    error: '',
  },
  fetchEstablishments: {
    isFetching: false,
    error: '',
  },
  isReadyToDistribute: false,
  pointsToDistribute,
  totalPointsResaleCooperative: 10000,
  totalPointsTeamAwards: 5000,
  establishments,
  selectedEstablishment,
  establishmentType: 'Revenda',
};

export default state;
