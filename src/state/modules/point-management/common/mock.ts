import { EstablishmentTypes } from 'config/constants';
import { Establishment as RawEstablishment } from 'services/auth/getEstablishments';
import { CommonState } from './reducer';
import { PointsToDistribute, Establishment } from './types';

export const error = 'Generic Error';

export const pointsToDistribute: PointsToDistribute = {
  general: null,
  generalPointId: 1,
  teamAwards: null,
  resaleCooperative: {
    pointId: 1,
    maxInvoicePercentage: 20,
    points: 1500,
  },
};

export const establishments: Establishment[] = [
  { value: '1', title: 'Estabelecimento 1', type: EstablishmentTypes.Resale },
  {
    value: '2',
    title: 'Estabelecimento 2',
    type: EstablishmentTypes.Cooperative,
  },
];

export const rawEstablishments: RawEstablishment[] = [
  {
    id: 1,
    name: 'Estabelecimento 1',
    status: 1,
    cnpj: '00000000000000',
    type: {
      id: 1,
      name: EstablishmentTypes.Resale,
    },
  },
  {
    id: 2,
    name: 'Estabelecimento 2',
    status: 1,
    cnpj: '11111111111111',
    type: {
      id: 2,
      name: EstablishmentTypes.Cooperative,
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
  distributePoints: {
    isFetching: false,
    error: '',
  },
  isReadyToDistribute: false,
  pointsToDistribute,
  totalPointsResaleCooperative: 10000,
  totalPointsTeamAwards: 5000,
  establishments,
  selectedEstablishment,
  finishedDistribution: null,
};

export default state;
