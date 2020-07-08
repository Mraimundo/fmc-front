import { StoreState } from 'state/root-reducer';

export const getTotalPointsTeamAwards = (state: StoreState): string | null =>
  state.pointManagement.common.totalPointsTeamAwards;
