import { Reducer } from 'redux';

import { FetchState } from '@types';
import { emptyFetchState, fetchingState, fetchErrorState } from 'state/utils';
import { GoalsActions } from './actions';
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
import { Product, BillingPog, Campaign, Potentializer, Infos } from './types';

export interface GoalsState {
  fetchCampaigns: FetchState;
  fetchBillingPog: FetchState;
  fetchPotentializers: FetchState;
  fetchInfos: FetchState;
  fetchTopPurchasingProducts: FetchState;
  fetchTopSellingProducts: FetchState;
  campaigns: Campaign[] | null;
  billingPog: BillingPog | null;
  potentializers: Potentializer[] | null;
  infos: Infos | null;
  topPurchasingProducts: Product[] | null;
  topSellingProducts: Product[] | null;
}

export const initialState: GoalsState = {
  fetchCampaigns: emptyFetchState,
  fetchBillingPog: emptyFetchState,
  fetchPotentializers: emptyFetchState,
  fetchInfos: emptyFetchState,
  fetchTopPurchasingProducts: emptyFetchState,
  fetchTopSellingProducts: emptyFetchState,
  campaigns: null,
  billingPog: null,
  potentializers: null,
  infos: null,
  topPurchasingProducts: null,
  topSellingProducts: null,
};

const goalsReducer: Reducer<GoalsState, GoalsActions> = (
  state = initialState,
  action: GoalsActions,
): GoalsState => {
  switch (action.type) {
    case FETCH_CAMPAIGNS_ACTION:
      return { ...state, fetchCampaigns: fetchingState };
    case FETCH_CAMPAIGNS_FAILURE:
      return { ...state, fetchCampaigns: fetchErrorState(action) };
    case FETCH_CAMPAIGNS_SUCCESS:
      return {
        ...state,
        fetchCampaigns: emptyFetchState,
        campaigns: action.payload.campaigns,
      };

    case FETCH_BILLING_POG_ACTION:
      return { ...state, fetchBillingPog: fetchingState };
    case FETCH_BILLING_POG_FAILURE:
      return { ...state, fetchBillingPog: fetchErrorState(action) };
    case FETCH_BILLING_POG_SUCCESS:
      return {
        ...state,
        fetchBillingPog: emptyFetchState,
        billingPog: action.payload.billingPog,
      };

    case FETCH_POTENTIALIZERS_ACTION:
      return { ...state, fetchPotentializers: fetchingState };
    case FETCH_POTENTIALIZERS_FAILURE:
      return { ...state, fetchPotentializers: fetchErrorState(action) };
    case FETCH_POTENTIALIZERS_SUCCESS:
      return {
        ...state,
        fetchPotentializers: emptyFetchState,
        potentializers: action.payload.potentializers,
      };

    case FETCH_INFOS_ACTION:
      return { ...state, fetchInfos: fetchingState };
    case FETCH_INFOS_FAILURE:
      return { ...state, fetchInfos: fetchErrorState(action) };
    case FETCH_INFOS_SUCCESS:
      return {
        ...state,
        fetchInfos: emptyFetchState,
        infos: action.payload.infos,
      };

    case FETCH_TOP_PURCHASING_PRODUCTS_ACTION:
      return { ...state, fetchTopPurchasingProducts: fetchingState };
    case FETCH_TOP_PURCHASING_PRODUCTS_FAILURE:
      return { ...state, fetchTopPurchasingProducts: fetchErrorState(action) };
    case FETCH_TOP_PURCHASING_PRODUCTS_SUCCESS:
      return {
        ...state,
        fetchTopPurchasingProducts: emptyFetchState,
        topPurchasingProducts: action.payload.topPurchasingProducts,
      };

    case FETCH_TOP_SELLING_PRODUCTS_ACTION:
      return { ...state, fetchTopSellingProducts: fetchingState };
    case FETCH_TOP_SELLING_PRODUCTS_FAILURE:
      return { ...state, fetchTopSellingProducts: fetchErrorState(action) };
    case FETCH_TOP_SELLING_PRODUCTS_SUCCESS:
      return {
        ...state,
        fetchTopSellingProducts: emptyFetchState,
        topSellingProducts: action.payload.topSellingProducts,
      };

    default:
      return state;
  }
};

export default goalsReducer;
