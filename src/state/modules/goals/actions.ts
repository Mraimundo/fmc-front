import {
  ActionCreator,
  ActionCreatorFailure,
  ActionCreatorPayload,
} from '@types';
import {
  FETCH_CAMPAIGNS_ACTION,
  FETCH_CAMPAIGNS_FAILURE,
  FETCH_CAMPAIGNS_SUCCESS,
  FETCH_BILLING_POG_ACTION,
  FETCH_BILLING_POG_FAILURE,
  FETCH_BILLING_POG_SUCCESS,
  FETCH_POTENTIALIZERS_ACTION,
  FETCH_POTENTIALIZERS_FAILURE,
  FETCH_POTENTIALIZERS_SUCCESS,
  FETCH_INFOS_ACTION,
  FETCH_INFOS_FAILURE,
  FETCH_INFOS_SUCCESS,
  FETCH_TOP_PURCHASING_PRODUCTS_ACTION,
  FETCH_TOP_PURCHASING_PRODUCTS_FAILURE,
  FETCH_TOP_PURCHASING_PRODUCTS_SUCCESS,
  FETCH_TOP_SELLING_PRODUCTS_ACTION,
  FETCH_TOP_SELLING_PRODUCTS_FAILURE,
  FETCH_TOP_SELLING_PRODUCTS_SUCCESS,
} from './constants';
import { GoalsState } from './reducer';
import { Product, BillingPog, Campaign, Potentializer, Infos } from './types';

export const fetchCampaigns = (): ActionCreator<
  typeof FETCH_CAMPAIGNS_ACTION
> =>
  <const>{
    type: FETCH_CAMPAIGNS_ACTION,
  };

export const fetchCampaignsFailure = (
  error: string,
): ActionCreatorFailure<typeof FETCH_CAMPAIGNS_FAILURE> =>
  <const>{
    type: FETCH_CAMPAIGNS_FAILURE,
    payload: {
      error,
    },
  };

export const fetchCampaignsSuccess = (
  campaigns: Campaign[] | null,
): ActionCreatorPayload<
  typeof FETCH_CAMPAIGNS_SUCCESS,
  Pick<GoalsState, 'campaigns'>
> =>
  <const>{
    type: FETCH_CAMPAIGNS_SUCCESS,
    payload: { campaigns },
  };

export const fetchBillingPog = (): ActionCreator<
  typeof FETCH_BILLING_POG_ACTION
> =>
  <const>{
    type: FETCH_BILLING_POG_ACTION,
  };

export const fetchBillingPogFailure = (
  error: string,
): ActionCreatorFailure<typeof FETCH_BILLING_POG_FAILURE> =>
  <const>{
    type: FETCH_BILLING_POG_FAILURE,
    payload: {
      error,
    },
  };

export const fetchBillingPogSuccess = (
  billingPog: BillingPog | null,
): ActionCreatorPayload<
  typeof FETCH_BILLING_POG_SUCCESS,
  Pick<GoalsState, 'billingPog'>
> =>
  <const>{
    type: FETCH_BILLING_POG_SUCCESS,
    payload: { billingPog },
  };

export const fetchPotentializers = (): ActionCreator<
  typeof FETCH_POTENTIALIZERS_ACTION
> =>
  <const>{
    type: FETCH_POTENTIALIZERS_ACTION,
  };

export const fetchPotentializersFailure = (
  error: string,
): ActionCreatorFailure<typeof FETCH_POTENTIALIZERS_FAILURE> =>
  <const>{
    type: FETCH_POTENTIALIZERS_FAILURE,
    payload: {
      error,
    },
  };

export const fetchPotentializersSuccess = (
  potentializers: Potentializer[] | null,
): ActionCreatorPayload<
  typeof FETCH_POTENTIALIZERS_SUCCESS,
  Pick<GoalsState, 'potentializers'>
> =>
  <const>{
    type: FETCH_POTENTIALIZERS_SUCCESS,
    payload: { potentializers },
  };

export const fetchInfos = (): ActionCreator<typeof FETCH_INFOS_ACTION> =>
  <const>{
    type: FETCH_INFOS_ACTION,
  };

export const fetchInfosFailure = (
  error: string,
): ActionCreatorFailure<typeof FETCH_INFOS_FAILURE> =>
  <const>{
    type: FETCH_INFOS_FAILURE,
    payload: {
      error,
    },
  };

export const fetchInfosSuccess = (
  infos: Infos | null,
): ActionCreatorPayload<
  typeof FETCH_INFOS_SUCCESS,
  Pick<GoalsState, 'infos'>
> =>
  <const>{
    type: FETCH_INFOS_SUCCESS,
    payload: { infos },
  };

export const fetchTopPurchasingProducts = (): ActionCreator<
  typeof FETCH_TOP_PURCHASING_PRODUCTS_ACTION
> =>
  <const>{
    type: FETCH_TOP_PURCHASING_PRODUCTS_ACTION,
  };

export const fetchTopPurchasingProductsFailure = (
  error: string,
): ActionCreatorFailure<typeof FETCH_TOP_PURCHASING_PRODUCTS_FAILURE> =>
  <const>{
    type: FETCH_TOP_PURCHASING_PRODUCTS_FAILURE,
    payload: {
      error,
    },
  };

export const fetchTopPurchasingProductsSuccess = (
  topPurchasingProducts: Product[] | null,
): ActionCreatorPayload<
  typeof FETCH_TOP_PURCHASING_PRODUCTS_SUCCESS,
  Pick<GoalsState, 'topPurchasingProducts'>
> =>
  <const>{
    type: FETCH_TOP_PURCHASING_PRODUCTS_SUCCESS,
    payload: { topPurchasingProducts },
  };

export const fetchTopSellingProducts = (): ActionCreator<
  typeof FETCH_TOP_SELLING_PRODUCTS_ACTION
> =>
  <const>{
    type: FETCH_TOP_SELLING_PRODUCTS_ACTION,
  };

export const fetchTopSellingProductsFailure = (
  error: string,
): ActionCreatorFailure<typeof FETCH_TOP_SELLING_PRODUCTS_FAILURE> =>
  <const>{
    type: FETCH_TOP_SELLING_PRODUCTS_FAILURE,
    payload: {
      error,
    },
  };

export const fetchTopSellingProductsSuccess = (
  topSellingProducts: Product[] | null,
): ActionCreatorPayload<
  typeof FETCH_TOP_SELLING_PRODUCTS_SUCCESS,
  Pick<GoalsState, 'topSellingProducts'>
> =>
  <const>{
    type: FETCH_TOP_SELLING_PRODUCTS_SUCCESS,
    payload: { topSellingProducts },
  };

export type GoalsActions = ReturnType<
  | typeof fetchCampaigns
  | typeof fetchCampaignsFailure
  | typeof fetchCampaignsSuccess
  | typeof fetchBillingPog
  | typeof fetchBillingPogFailure
  | typeof fetchBillingPogSuccess
  | typeof fetchPotentializers
  | typeof fetchPotentializersFailure
  | typeof fetchPotentializersSuccess
  | typeof fetchInfos
  | typeof fetchInfosFailure
  | typeof fetchInfosSuccess
  | typeof fetchTopPurchasingProducts
  | typeof fetchTopPurchasingProductsFailure
  | typeof fetchTopPurchasingProductsSuccess
  | typeof fetchTopSellingProducts
  | typeof fetchTopSellingProductsFailure
  | typeof fetchTopSellingProductsSuccess
>;
