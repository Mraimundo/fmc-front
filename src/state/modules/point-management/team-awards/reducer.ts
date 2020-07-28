import { Reducer } from 'redux';

import { FetchState } from '@types';
import { emptyFetchState, fetchingState, fetchErrorState } from 'state/utils';
import { TeamAwardsActions } from './actions';
import {
  Subsidiary,
  Role,
  ParticipantsList,
  WaitingScoredParticipant,
  ScoredParticipant,
} from './types';
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
  TOGGLE_SELECTED_PARTICIPANT,
  REMOVE_ALL_SCORES,
  SET_TOTAL_PARTICIPANTS,
  TOGGLE_IS_OPEN_MODAL_MISSING_PARTICIPANTS,
} from './constants';
import {
  toggleRoleSelection,
  toggleSubsidiarySelection,
  scoreParticipant,
  scoreAllParticipantsEqually,
  setSelectedRolesAll,
  selectAllParticipantsByRole,
  deselectAllParticipants,
  toggleSelectedParticipant,
  migrateWaitingScoredToScored,
} from './utils';

export type TeamAwardsState = {
  fetchSubsidiaries: FetchState;
  fetchRoles: FetchState;
  fetchParticipants: FetchState;
  assignPoints: FetchState;
  subsidiaries: Subsidiary[] | null;
  roles: Role[] | null;
  participants: ParticipantsList | null;
  selectedParticipants: number[] | null;
  waitingScoredParticipants: WaitingScoredParticipant[] | null;
  scoredParticipants: ScoredParticipant[] | null;
  selectedSubsidiaries: number[] | null;
  selectedRoles: number[] | null;
  participantFinder: string | null;
  pointsToDistribute: number;
  distributeEqually: boolean;
  totalForEachParticipantDistributedEqually: number | null;
  selectedRolesAll: string[] | null;
  totalParticipants: number;
  isOpenModalMissingParticipants: boolean;
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
  waitingScoredParticipants: null,
  scoredParticipants: null,
  selectedSubsidiaries: null,
  selectedRoles: null,
  participantFinder: '',
  pointsToDistribute: 0,
  distributeEqually: false,
  totalForEachParticipantDistributedEqually: null,
  selectedRolesAll: null,
  totalParticipants: 0,
  isOpenModalMissingParticipants: false,
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
        fetchParticipants: fetchingState,
        selectedSubsidiaries: toggleSubsidiarySelection(
          state.selectedSubsidiaries,
          action.meta.subsidiaryId,
        ),
      };

    case SELECT_ROLE:
      return {
        ...state,
        fetchParticipants: fetchingState,
        selectedRoles: action.meta.roleId
          ? toggleRoleSelection(state.selectedRoles, action.meta.roleId)
          : null,
      };

    case SET_PARTICIPANT_FINDER:
      return {
        ...state,
        fetchParticipants: fetchingState,
        participantFinder: action.payload.participantFinder,
      };

    case SET_POINTS_TO_DISTRIBUTE:
      return {
        ...state,
        distributeEqually: false,
        totalForEachParticipantDistributedEqually: null,
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
        waitingScoredParticipants: scoreParticipant(
          action.meta.participant,
          action.meta.points,
          state.waitingScoredParticipants,
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
        assignPoints: emptyFetchState,
        distributeEqually: false,
        pointsToDistribute: 0,
        selectedParticipants: null,
        selectedRolesAll: null,
        totalForEachParticipantDistributedEqually: null,
        scoredParticipants: migrateWaitingScoredToScored(
          state.waitingScoredParticipants,
          state.scoredParticipants,
        ),
        waitingScoredParticipants: null,
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
        waitingScoredParticipants: scoreAllParticipantsEqually({
          participants: state.participants,
          points: action.meta.points,
          waitingScoredParticipants: state.waitingScoredParticipants,
          selectedParticipants: state.selectedParticipants,
        }),
      };

    case SET_SELECTED_ROLES_ALL:
      return {
        ...state,
        selectedRolesAll: setSelectedRolesAll(
          state.selectedRolesAll,
          action.meta.role,
        ),
      };

    case SELECT_ALL_PARTICIPANTS:
      return {
        ...state,
        selectedParticipants: selectAllParticipantsByRole({
          participants: state.participants,
          role: action.meta.role,
          scoredParticipants: state.scoredParticipants,
          selectedParticipants: state.selectedParticipants,
        }),
      };

    case DESELECT_ALL_PARTICIPANTS:
      return {
        ...state,
        selectedParticipants: deselectAllParticipants(
          state.selectedParticipants,
          state.participants,
          action.meta.role,
        ),
      };

    case TOGGLE_SELECTED_PARTICIPANT:
      return {
        ...state,
        selectedParticipants: toggleSelectedParticipant(
          state.selectedParticipants,
          action.meta.participantId,
        ),
      };

    case REMOVE_ALL_SCORES:
      return {
        ...state,
        scoredParticipants: null,
      };

    case SET_TOTAL_PARTICIPANTS:
      return {
        ...state,
        totalParticipants: action.payload.totalParticipants,
      };

    case TOGGLE_IS_OPEN_MODAL_MISSING_PARTICIPANTS:
      return {
        ...state,
        isOpenModalMissingParticipants: !state.isOpenModalMissingParticipants,
      };

    default:
      return state;
  }
};

export default teamAwardsReducer;
