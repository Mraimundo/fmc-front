export const FETCH_ESTABLISHMENTS_ACTION =
  '@fmc/point-management/common/FETCH_ESTABLISHMENTS_ACTION';
export const FETCH_ESTABLISHMENTS_FAILURE =
  '@fmc/point-management/common/FETCH_ESTABLISHMENTS_FAILURE';
export const FETCH_ESTABLISHMENTS_SUCCESS =
  '@fmc/point-management/common/FETCH_ESTABLISHMENTS_SUCCESS';

export const FETCH_POINTS_TO_DISTRIBUTE_ACTION =
  '@fmc/point-management/common/FETCH_POINTS_TO_DISTRIBUTE_ACTION';
export const FETCH_POINTS_TO_DISTRIBUTE_FAILURE =
  '@fmc/point-management/common/FETCH_POINTS_TO_DISTRIBUTE_FAILURE';
export const FETCH_POINTS_TO_DISTRIBUTE_SUCCESS =
  '@fmc/point-management/common/FETCH_POINTS_TO_DISTRIBUTE_SUCCESS';

export const SET_TOTAL_POINTS_TEAM_AWARDS =
  '@fmc/point-management/common/SET_TOTAL_POINTS_TEAM_AWARDS';

export const SET_TOTAL_POINTS_RESALE_COOPERATIVE =
  '@fmc/point-management/common/SET_TOTAL_POINTS_RESALE_COOPERATIVE';

export const SET_IS_READY_TO_DISTRIBUTE =
  '@fmc/point-management/common/SET_IS_READY_TO_DISTRIBUTE';

export const SET_SELECTED_ESTABLISHMENT =
  '@fmc/point-management/common/SET_SELECTED_ESTABLISHMENT';

export const DISTRIBUTE_POINTS_ACTION =
  '@fmc/point-management/common/DISTRIBUTE_POINTS_ACTION';
export const DISTRIBUTE_POINTS_FINALLY_ACTION =
  '@fmc/point-management/common/DISTRIBUTE_POINTS_FINALLY_ACTION';
export const DISTRIBUTE_POINTS_FAILURE =
  '@fmc/point-management/common/DISTRIBUTE_POINTS_FAILURE';
export const DISTRIBUTE_POINTS_SUCCESS =
  '@fmc/point-management/common/DISTRIBUTE_POINTS_SUCCESS';

export const SET_FINISHED_DISTRIBUTION =
  '@fmc/point-management/common/SET_FINISHED_DISTRIBUTION';

export enum FinishedDistributionPossibilities {
  Rc = 'resale-cooperative-finished',
  Ta = 'team-awards-finished',
  All = 'all-finished',
}

export const SAVE_PARTIAL_DISTRIBUTION_ACTION =
  '@fmc/point-management/common/SAVE_PARTIAL_DISTRIBUTION_ACTION';

export const SAVE_PARTIAL_DISTRIBUTION_SUCCESS =
  '@fmc/point-management/common/SAVE_PARTIAL_DISTRIBUTION_SUCCESS';

export const SAVE_PARTIAL_DISTRIBUTION_FAILURE =
  '@fmc/point-management/common/SAVE_PARTIAL_DISTRIBUTION_FAILURE';

export const SET_DISTRIBUTION_WITH_SAVED_SETTINGS =
  '@fmc/point-management/common/SET_DISTRIBUTION_WITH_SAVED_SETTINGS';
