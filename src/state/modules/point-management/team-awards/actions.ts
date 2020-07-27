import {
  ActionCreator,
  ActionCreatorPayload,
  ActionCreatorFailure,
} from '@types';
import * as constants from './constants';
import { TeamAwardsState } from './reducer';
import { Subsidiary, Role, Participant, ParticipantsList } from './types';

export const fetchSubsidiaries = (): ActionCreator<
  typeof constants.FETCH_SUBSIDIARIES_ACTION
> =>
  <const>{
    type: constants.FETCH_SUBSIDIARIES_ACTION,
  };

export const fetchSubsidiariesFailure = (
  error: string,
): ActionCreatorFailure<typeof constants.FETCH_SUBSIDIARIES_FAILURE> =>
  <const>{
    type: constants.FETCH_SUBSIDIARIES_FAILURE,
    payload: {
      error,
    },
  };

export const fetchSubsidiariesSuccess = (
  subsidiaries: Subsidiary[] | null,
): ActionCreatorPayload<
  typeof constants.FETCH_SUBSIDIARIES_SUCCESS,
  Pick<TeamAwardsState, 'subsidiaries'>
> =>
  <const>{
    type: constants.FETCH_SUBSIDIARIES_SUCCESS,
    payload: { subsidiaries },
  };

export const fetchRoles = (): ActionCreator<
  typeof constants.FETCH_ROLES_ACTION
> =>
  <const>{
    type: constants.FETCH_ROLES_ACTION,
  };

export const fetchRolesFailure = (
  error: string,
): ActionCreatorFailure<typeof constants.FETCH_ROLES_FAILURE> =>
  <const>{
    type: constants.FETCH_ROLES_FAILURE,
    payload: {
      error,
    },
  };

export const fetchRolesSuccess = (
  roles: Role[],
): ActionCreatorPayload<
  typeof constants.FETCH_ROLES_SUCCESS,
  Pick<TeamAwardsState, 'roles'>
> =>
  <const>{
    type: constants.FETCH_ROLES_SUCCESS,
    payload: { roles },
  };

export const fetchParticipants = (): ActionCreator<
  typeof constants.FETCH_PARTICIPANTS_ACTION
> =>
  <const>{
    type: constants.FETCH_PARTICIPANTS_ACTION,
  };

export const fetchParticipantsFailure = (
  error: string,
): ActionCreatorFailure<typeof constants.FETCH_PARTICIPANTS_FAILURE> =>
  <const>{
    type: constants.FETCH_PARTICIPANTS_FAILURE,
    payload: {
      error,
    },
  };

export const fetchParticipantsSuccess = (
  participants: ParticipantsList,
): ActionCreatorPayload<
  typeof constants.FETCH_PARTICIPANTS_SUCCESS,
  Pick<TeamAwardsState, 'participants'>
> =>
  <const>{
    type: constants.FETCH_PARTICIPANTS_SUCCESS,
    payload: { participants },
  };

export const selectSubsidiary = (
  subsidiaryId: number,
): ActionCreator<typeof constants.SELECT_SUBSIDIARY> =>
  <const>{
    type: constants.SELECT_SUBSIDIARY,
    meta: { subsidiaryId },
  };

export const selectRole = (
  roleId?: number,
): ActionCreator<typeof constants.SELECT_ROLE> =>
  <const>{
    type: constants.SELECT_ROLE,
    meta: { roleId },
  };

export const setParticipantFinder = (
  participantFinder: string,
): ActionCreatorPayload<
  typeof constants.SET_PARTICIPANT_FINDER,
  Pick<TeamAwardsState, 'participantFinder'>
> =>
  <const>{
    type: constants.SET_PARTICIPANT_FINDER,
    payload: { participantFinder },
  };

export const setPointsToDistribute = (
  pointsToDistribute: number,
): ActionCreatorPayload<
  typeof constants.SET_POINTS_TO_DISTRIBUTE,
  Pick<TeamAwardsState, 'pointsToDistribute'>
> =>
  <const>{
    type: constants.SET_POINTS_TO_DISTRIBUTE,
    payload: { pointsToDistribute },
  };

export const toggleDistributeEqually = (): ActionCreator<
  typeof constants.TOGGLE_DISTRIBUTE_EQUALLY
> =>
  <const>{
    type: constants.TOGGLE_DISTRIBUTE_EQUALLY,
  };

export const scoreParticipant = (
  participant: Participant,
  points: number,
): ActionCreator<typeof constants.SCORE_PARTICIPANT> =>
  <const>{
    type: constants.SCORE_PARTICIPANT,
    meta: { participant, points },
  };

export const assignPoints = (): ActionCreator<
  typeof constants.ASSIGN_POINTS_ACTION
> =>
  <const>{
    type: constants.ASSIGN_POINTS_ACTION,
  };

export const assignPointsFailure = (
  error: string,
): ActionCreatorFailure<typeof constants.ASSIGN_POINTS_FAILURE> =>
  <const>{
    type: constants.ASSIGN_POINTS_FAILURE,
    payload: {
      error,
    },
  };

export const assignPointsSuccess = (): ActionCreator<
  typeof constants.ASSIGN_POINTS_SUCCESS
> =>
  <const>{
    type: constants.ASSIGN_POINTS_SUCCESS,
  };

export const setTotalForEachParticipantDistributedEqually = (
  totalForEachParticipantDistributedEqually: number | null,
): ActionCreatorPayload<
  typeof constants.SET_TOTAL_FOR_EACH_PARTICIPANT_DISTRIBUTED_EQUALLY,
  Pick<TeamAwardsState, 'totalForEachParticipantDistributedEqually'>
> =>
  <const>{
    type: constants.SET_TOTAL_FOR_EACH_PARTICIPANT_DISTRIBUTED_EQUALLY,
    payload: { totalForEachParticipantDistributedEqually },
  };

export const scoreAllParticipantsEqually = (
  points: number,
): ActionCreator<typeof constants.SCORE_ALL_PARTICIPANTS_EQUALLY> =>
  <const>{
    type: constants.SCORE_ALL_PARTICIPANTS_EQUALLY,
    meta: { points },
  };

export const setSelectedRolesAll = (
  role: string,
): ActionCreator<typeof constants.SET_SELECTED_ROLES_ALL> =>
  <const>{
    type: constants.SET_SELECTED_ROLES_ALL,
    meta: { role },
  };

export const selectAllParticipants = (
  role: string,
): ActionCreator<typeof constants.SELECT_ALL_PARTICIPANTS> =>
  <const>{
    type: constants.SELECT_ALL_PARTICIPANTS,
    meta: { role },
  };

export const deselectAllParticipants = (
  role: string,
): ActionCreator<typeof constants.DESELECT_ALL_PARTICIPANTS> =>
  <const>{
    type: constants.DESELECT_ALL_PARTICIPANTS,
    meta: { role },
  };

export const toggleSelectedParticipant = (
  participantId: number,
): ActionCreator<typeof constants.TOGGLE_SELECTED_PARTICIPANT> =>
  <const>{
    type: constants.TOGGLE_SELECTED_PARTICIPANT,
    meta: { participantId },
  };

export const removeAllScores = (): ActionCreator<
  typeof constants.REMOVE_ALL_SCORES
> =>
  <const>{
    type: constants.REMOVE_ALL_SCORES,
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
  | typeof toggleSelectedParticipant
  | typeof removeAllScores
>;
