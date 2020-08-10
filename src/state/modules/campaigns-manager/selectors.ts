import { StoreState } from 'state/root-reducer';

export const getCampaign = (state: StoreState) =>
  state.campaignsManager.campaign;

export const canEdit = (state: StoreState) => state.campaignsManager.canEdit;

export const getErrors = (state: StoreState) => state.campaignsManager.errors;
