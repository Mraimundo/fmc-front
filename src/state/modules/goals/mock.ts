import { GoalsState } from './reducer';
import { Product, BillingPog, Campaign, Potentializer, Infos } from './types';

export const campaigns: Campaign[] = [{ id: 1, title: '20/21' }];

export const billingPog: BillingPog = {
  billing: {
    goal: '312,329.00',
    percentage: 20,
    realized: '312,300.00',
  },
  pog: {
    goal: '312,329.00',
    percentage: 20,
    realized: '312,000.00',
  },
  devolution: {
    value: 'Até 5%',
    checked: true,
    realized: 0.05,
  },
};

export const potentializers: Potentializer[] = [
  {
    name: 'Nome do Produto',
    realized: '4,000',
    goal: '23,000',
    percentage: 20,
  },
];

export const infos: Infos = {
  excel: '#',
  lastUpdate: '10/10/2010',
  points: [
    { name: 'Rebate', value: '0,00' },
    { name: 'Premiação de Vendedores', value: '0,00' },
  ],
  potential: '4.000,000',
};

export const topPurchasingProducts: Product[] = [
  { id: 1, name: 'Produto 1', billing: '0.00', volume: '0.00' },
  { id: 2, name: 'Produto 2', billing: '0.00', volume: '0.00' },
];

export const topSellingProducts: Product[] = [
  { id: 1, name: 'Produto 1', billing: '0.00', volume: '0.00' },
  { id: 2, name: 'Produto 2', billing: '0.00', volume: '0.00' },
];

const state: GoalsState = {
  fetchCampaigns: {
    isFetching: false,
  },
  fetchBillingPog: {
    isFetching: false,
  },
  fetchPotentializers: {
    isFetching: false,
  },
  fetchInfos: {
    isFetching: false,
  },
  fetchTopPurchasingProducts: {
    isFetching: false,
  },
  fetchTopSellingProducts: {
    isFetching: false,
  },
  campaigns,
  billingPog,
  potentializers,
  infos,
  topPurchasingProducts,
  topSellingProducts,
};

export default state;
