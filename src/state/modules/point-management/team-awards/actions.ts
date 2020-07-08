import {
  ActionCreator,
  ActionCreatorPayload,
  ActionCreatorFailure,
  ApiErrors,
} from '@types';
import {
  FETCH_SUBSIDIARIES_ACTION,
  FETCH_SUBSIDIARIES_FAILURE,
  FETCH_SUBSIDIARIES_SUCCESS,
  FETCH_ROLES_ACTION,
  FETCH_ROLES_FAILURE,
  FETCH_ROLES_SUCCESS,
  FETCH_PARTICIPANTS_ACTION,
  FETCH_PARTICIPANTS_FAILURE,
  FETCH_PARTICIPANTS_SUCCESS,
  SELECT_SUBSIDIARY,
  SELECT_ROLE,
  SET_PARTICIPANT_FINDER,
  SET_POINTS_TO_DISTRIBUTE,
  TOGGLE_DISTRIBUTE_EQUALLY,
} from './constants';
import { TeamAwardsState } from './reducer';
import { Subsidiary, Role, ParticipantsList } from './types';

export const fetchSubsidiaries = (): ActionCreator<
  typeof FETCH_SUBSIDIARIES_ACTION
> =>
  <const>{
    type: FETCH_SUBSIDIARIES_ACTION,
  };

export const fetchSubsidiariesFailure = (
  errors: ApiErrors[],
): ActionCreatorFailure<typeof FETCH_SUBSIDIARIES_FAILURE> =>
  <const>{
    type: FETCH_SUBSIDIARIES_FAILURE,
    payload: {
      errors,
    },
  };

export const fetchSubsidiariesSuccess = (
  subsidiaries: Subsidiary[],
): ActionCreatorPayload<
  typeof FETCH_SUBSIDIARIES_SUCCESS,
  Pick<TeamAwardsState, 'subsidiaries'>
> =>
  <const>{
    type: FETCH_SUBSIDIARIES_SUCCESS,
    payload: { subsidiaries },
  };

export const fetchRoles = (): ActionCreator<typeof FETCH_ROLES_ACTION> =>
  <const>{
    type: FETCH_ROLES_ACTION,
  };

export const fetchRolesFailure = (
  errors: ApiErrors[],
): ActionCreatorFailure<typeof FETCH_ROLES_FAILURE> =>
  <const>{
    type: FETCH_ROLES_FAILURE,
    payload: {
      errors,
    },
  };

export const fetchRolesSuccess = (
  roles: Role[],
): ActionCreatorPayload<
  typeof FETCH_ROLES_SUCCESS,
  Pick<TeamAwardsState, 'roles'>
> =>
  <const>{
    type: FETCH_ROLES_SUCCESS,
    payload: { roles },
  };

export const fetchParticipants = (): ActionCreator<
  typeof FETCH_PARTICIPANTS_ACTION
> =>
  <const>{
    type: FETCH_PARTICIPANTS_ACTION,
  };

export const fetchParticipantsFailure = (
  errors: ApiErrors[],
): ActionCreatorFailure<typeof FETCH_PARTICIPANTS_FAILURE> =>
  <const>{
    type: FETCH_PARTICIPANTS_FAILURE,
    payload: {
      errors,
    },
  };

export const fetchParticipantsSuccess = (
  participants: ParticipantsList,
): ActionCreatorPayload<
  typeof FETCH_PARTICIPANTS_SUCCESS,
  Pick<TeamAwardsState, 'participants'>
> =>
  <const>{
    type: FETCH_PARTICIPANTS_SUCCESS,
    payload: { participants },
  };

export const selectSubsidiary = (
  selectedSubsidiaries: number[],
): ActionCreatorPayload<
  typeof SELECT_SUBSIDIARY,
  Pick<TeamAwardsState, 'selectedSubsidiaries'>
> =>
  <const>{
    type: SELECT_SUBSIDIARY,
    payload: { selectedSubsidiaries },
  };

export const selectRole = (roleId: number): ActionCreator<typeof SELECT_ROLE> =>
  <const>{
    type: SELECT_ROLE,
    meta: { roleId },
  };

export const setParticipantFinder = (
  participantFinder: string,
): ActionCreatorPayload<
  typeof SET_PARTICIPANT_FINDER,
  Pick<TeamAwardsState, 'participantFinder'>
> =>
  <const>{
    type: SET_PARTICIPANT_FINDER,
    payload: { participantFinder },
  };

export const setPointsToDistribute = (
  pointsToDistribute: string,
): ActionCreatorPayload<
  typeof SET_POINTS_TO_DISTRIBUTE,
  Pick<TeamAwardsState, 'pointsToDistribute'>
> =>
  <const>{
    type: SET_POINTS_TO_DISTRIBUTE,
    payload: { pointsToDistribute },
  };

export const toggleDistributeEqually = (): ActionCreator<
  typeof TOGGLE_DISTRIBUTE_EQUALLY
> =>
  <const>{
    type: TOGGLE_DISTRIBUTE_EQUALLY,
  };

export type TeamAwardsActions = ReturnType<
  | typeof fetchSubsidiaries
  | typeof fetchSubsidiariesFailure
  | typeof fetchSubsidiariesSuccess
  | typeof fetchRoles
  | typeof fetchRolesFailure
  | typeof fetchRolesSuccess
  | typeof fetchParticipants
  | typeof fetchParticipantsFailure
  | typeof fetchParticipantsSuccess
  | typeof selectSubsidiary
  | typeof selectRole
  | typeof setParticipantFinder
  | typeof setPointsToDistribute
  | typeof toggleDistributeEqually
>;
