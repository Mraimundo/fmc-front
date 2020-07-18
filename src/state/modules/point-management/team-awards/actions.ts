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
  SCORE_PARTICIPANT,
  ASSIGN_POINTS_ACTION,
  ASSIGN_POINTS_FAILURE,
  ASSIGN_POINTS_SUCCESS,
  SET_TOTAL_FOR_EACH_PARTICIPANT_DISTRIBUTED_EQUALLY,
  SCORE_ALL_PARTICIPANTS_EQUALLY,
  SET_SELECTED_ROLES_ALL,
  SELECT_ALL_PARTICIPANTS,
  DESELECT_ALL_PARTICIPANTS,
} from './constants';
import { TeamAwardsState } from './reducer';
import { Subsidiary, Role, Participant, ParticipantsList } from './types';

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
  subsidiaryId: number,
): ActionCreator<typeof SELECT_SUBSIDIARY> =>
  <const>{
    type: SELECT_SUBSIDIARY,
    meta: { subsidiaryId },
  };

export const selectRole = (
  roleId?: number,
): ActionCreator<typeof SELECT_ROLE> =>
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

export const scoreParticipant = (
  participant: Participant,
  points: string,
): ActionCreator<typeof SCORE_PARTICIPANT> =>
  <const>{
    type: SCORE_PARTICIPANT,
    meta: { participant, points },
  };

export const assignPoints = (): ActionCreator<typeof ASSIGN_POINTS_ACTION> =>
  <const>{
    type: ASSIGN_POINTS_ACTION,
  };

export const assignPointsFailure = (
  errors: ApiErrors[],
): ActionCreatorFailure<typeof ASSIGN_POINTS_FAILURE> =>
  <const>{
    type: ASSIGN_POINTS_FAILURE,
    payload: {
      errors,
    },
  };

export const assignPointsSuccess = (): ActionCreator<
  typeof ASSIGN_POINTS_SUCCESS
> =>
  <const>{
    type: ASSIGN_POINTS_SUCCESS,
  };

export const setTotalForEachParticipantDistributedEqually = (
  totalForEachParticipantDistributedEqually: number,
): ActionCreatorPayload<
  typeof SET_TOTAL_FOR_EACH_PARTICIPANT_DISTRIBUTED_EQUALLY,
  Pick<TeamAwardsState, 'totalForEachParticipantDistributedEqually'>
> =>
  <const>{
    type: SET_TOTAL_FOR_EACH_PARTICIPANT_DISTRIBUTED_EQUALLY,
    payload: { totalForEachParticipantDistributedEqually },
  };

export const scoreAllParticipantsEqually = (
  points: string,
): ActionCreator<typeof SCORE_ALL_PARTICIPANTS_EQUALLY> =>
  <const>{
    type: SCORE_ALL_PARTICIPANTS_EQUALLY,
    meta: { points },
  };

export const setSelectedRolesAll = (
  role: string,
): ActionCreator<typeof SET_SELECTED_ROLES_ALL> =>
  <const>{
    type: SET_SELECTED_ROLES_ALL,
    meta: { role },
  };

export const selectAllParticipants = (
  role: string,
): ActionCreator<typeof SELECT_ALL_PARTICIPANTS> =>
  <const>{
    type: SELECT_ALL_PARTICIPANTS,
    meta: { role },
  };

export const deselectAllParticipants = (
  role: string,
): ActionCreator<typeof DESELECT_ALL_PARTICIPANTS> =>
  <const>{
    type: DESELECT_ALL_PARTICIPANTS,
    meta: { role },
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
  | typeof scoreParticipant
  | typeof assignPoints
  | typeof assignPointsFailure
  | typeof assignPointsSuccess
  | typeof setTotalForEachParticipantDistributedEqually
  | typeof scoreAllParticipantsEqually
  | typeof setSelectedRolesAll
  | typeof selectAllParticipants
  | typeof deselectAllParticipants
>;
