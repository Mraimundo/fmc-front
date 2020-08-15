import { StoreState } from 'state/root-reducer';
import { Campaign, BillingPog, Product, Potentializer, Infos } from './types';

export const getCampaigns = (state: StoreState): Campaign[] | null =>
  state.goals.campaigns;

export const getBillingPog = (state: StoreState): BillingPog | null =>
  state.goals.billingPog;

export const getPotentializers = (state: StoreState): Potentializer[] | null =>
  state.goals.potentializers;

export const getInfos = (state: StoreState): Infos | null => state.goals.infos;

export const getTopPurchasingProducts = (state: StoreState): Product[] | null =>
  state.goals.topPurchasingProducts;

export const getTopSellingProducts = (state: StoreState): Product[] | null =>
  state.goals.topSellingProducts;
