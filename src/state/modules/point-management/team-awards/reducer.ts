import { Reducer } from 'redux';

import { FetchState, ActionCreatorFailure } from '@types';
import { TeamAwardsActions } from './actions';
import { Subsidiary, Role, ParticipantsList, ScoredParticipant } from './types';
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
import {
  toggleRoleSelection,
  toggleSubsidiarySelection,
  scoreParticipant,
  assignPoints,
  scoreAllParticipantsEqually,
  setSelectedRolesAll,
  selectAllParticipants,
  deselectAllParticipants,
} from './utils';
import { scoredParticipants } from './mock';

const emptyFetchState: FetchState = { isFetching: false };
const fetchingState: FetchState = { isFetching: true };
const fetchErrorState = <T extends string>(
  action: ActionCreatorFailure<T>,
): FetchState => ({
  errors: action.payload.errors,
  isFetching: false,
});

export type TeamAwardsState = {
  fetchSubsidiaries: FetchState;
  fetchRoles: FetchState;
  fetchParticipants: FetchState;
  assignPoints: FetchState;
  subsidiaries: Subsidiary[] | null;
  roles: Role[] | null;
  participants: ParticipantsList | null;
  selectedParticipants: number[] | null;
  scoredParticipants: ScoredParticipant[] | null;
  selectedSubsidiaries: number[] | null;
  selectedRoles: number[] | null;
  participantFinder: string | null;
  pointsToDistribute: string;
  distributeEqually: boolean;
  totalForEachParticipantDistributedEqually: number | null;
  selectedRolesAll: string[] | null;
};

export const initialState: TeamAwardsState = {
  fetchSubsidiaries: emptyFetchState,
  fetchRoles: emptyFetchState,
  fetchParticipants: emptyFetchState,
  assignPoints: emptyFetchState,
  subsidiaries: null,
  roles: null,
  participants: null,
  selectedParticipants: null,
  scoredParticipants,
  selectedSubsidiaries: null,
  selectedRoles: null,
  participantFinder: '',
  pointsToDistribute: '',
  distributeEqually: false,
  totalForEachParticipantDistributedEqually: null,
  selectedRolesAll: null,
};

const teamAwardsReducer: Reducer<TeamAwardsState, TeamAwardsActions> = (
  state = initialState,
  action: TeamAwardsActions,
): TeamAwardsState => {
  switch (action.type) {
    case FETCH_SUBSIDIARIES_ACTION:
      return { ...state, fetchSubsidiaries: fetchingState };
    case FETCH_SUBSIDIARIES_FAILURE:
      return { ...state, fetchSubsidiaries: fetchErrorState(action) };
    case FETCH_SUBSIDIARIES_SUCCESS:
      return {
        ...state,
        fetchSubsidiaries: emptyFetchState,
        subsidiaries: action.payload.subsidiaries,
      };

    case FETCH_ROLES_ACTION:
      return { ...state, fetchRoles: fetchingState };
    case FETCH_ROLES_FAILURE:
      return { ...state, fetchRoles: fetchErrorState(action) };
    case FETCH_ROLES_SUCCESS:
      return {
        ...state,
        fetchRoles: emptyFetchState,
        roles: action.payload.roles,
      };

    case FETCH_PARTICIPANTS_ACTION:
      return { ...state, fetchParticipants: fetchingState };
    case FETCH_PARTICIPANTS_FAILURE:
      return { ...state, fetchParticipants: fetchErrorState(action) };
    case FETCH_PARTICIPANTS_SUCCESS:
      return {
        ...state,
        fetchParticipants: emptyFetchState,
        participants: action.payload.participants,
      };

    case SELECT_SUBSIDIARY:
      return {
        ...state,
        selectedSubsidiaries: action.meta.subsidiaryId
          ? toggleSubsidiarySelection(
              state.selectedSubsidiaries,
              action.meta.subsidiaryId,
            )
          : null,
      };

    case SELECT_ROLE:
      return {
        ...state,
        selectedRoles: action.meta.roleId
          ? toggleRoleSelection(state.selectedRoles, action.meta.roleId)
          : null,
      };

    case SET_PARTICIPANT_FINDER:
      return {
        ...state,
        participantFinder: action.payload.participantFinder,
      };

    case SET_POINTS_TO_DISTRIBUTE:
      return {
        ...state,
        pointsToDistribute: action.payload.pointsToDistribute,
      };

    case TOGGLE_DISTRIBUTE_EQUALLY:
      return {
        ...state,
        distributeEqually: !state.distributeEqually,
      };

    case SCORE_PARTICIPANT:
      return {
        ...state,
        scoredParticipants: scoreParticipant(
          action.meta.participant,
          action.meta.points,
          state.scoredParticipants,
        ),
      };

    case ASSIGN_POINTS_ACTION:
      return {
        ...state,
        assignPoints: fetchingState,
      };

    case ASSIGN_POINTS_FAILURE:
      return { ...state, assignPoints: fetchErrorState(action) };

    case ASSIGN_POINTS_SUCCESS:
      return {
        ...state,
        distributeEqually: false,
        pointsToDistribute: '',
        scoredParticipants: assignPoints(state.scoredParticipants),
      };

    case SET_TOTAL_FOR_EACH_PARTICIPANT_DISTRIBUTED_EQUALLY:
      return {
        ...state,
        totalForEachParticipantDistributedEqually:
          action.payload.totalForEachParticipantDistributedEqually,
      };

    case SCORE_ALL_PARTICIPANTS_EQUALLY:
      return {
        ...state,
        scoredParticipants: scoreAllParticipantsEqually(
          state.scoredParticipants,
          action.meta.points,
        ),
      };

    case SET_SELECTED_ROLES_ALL:
      return {
        ...state,
        selectedRolesAll: action.meta.role
          ? setSelectedRolesAll(state.selectedRolesAll, action.meta.role)
          : null,
      };

    case SELECT_ALL_PARTICIPANTS:
      return {
        ...state,
        selectedParticipants: action.meta.role
          ? selectAllParticipants(state.participants, action.meta.role)
          : null,
      };

    case DESELECT_ALL_PARTICIPANTS:
      return {
        ...state,
        selectedParticipants: action.meta.role
          ? deselectAllParticipants(
              state.selectedParticipants,
              state.participants,
              action.meta.role,
            )
          : null,
      };

    default:
      return state;
  }
};

export default teamAwardsReducer;
