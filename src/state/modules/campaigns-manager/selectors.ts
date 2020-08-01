import { StoreState } from 'state/root-reducer';

export const getCampaign = (state: StoreState) =>
  state.campaignsManager.campaign;
