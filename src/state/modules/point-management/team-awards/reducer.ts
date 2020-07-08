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
} from './constants';
import { toggleRoleSelection } from './utils';

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
  subsidiaries: Subsidiary[] | null;
  roles: Role[] | null;
  participants: ParticipantsList | null;
  scoredParticipants: ScoredParticipant[] | null;
  selectedSubsidiaries: number[] | null;
  selectedRoles: number[] | null;
  participantFinder: string | null;
  pointsToDistribute: string | null;
  distributeEqually: boolean;
};

export const initialState: TeamAwardsState = {
  fetchSubsidiaries: emptyFetchState,
  fetchRoles: emptyFetchState,
  fetchParticipants: emptyFetchState,
  subsidiaries: null,
  roles: null,
  participants: null,
  scoredParticipants: null,
  selectedSubsidiaries: null,
  selectedRoles: null,
  participantFinder: '',
  pointsToDistribute: null,
  distributeEqually: false,
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
        selectedSubsidiaries: action.payload.selectedSubsidiaries,
      };

    case SELECT_ROLE:
      return {
        ...state,
        selectedRoles: toggleRoleSelection(
          state.selectedRoles,
          action.meta.roleId,
        ),
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

    default:
      return state;
  }
};

export default teamAwardsReducer;
