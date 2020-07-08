import { expect } from 'chai';

import reducer, { initialState } from './reducer';
import {
  FETCH_SUBSIDIARIES_ACTION,
  FETCH_SUBSIDIARIES_SUCCESS,
  FETCH_SUBSIDIARIES_FAILURE,
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
} from './constants';
import {
  errors,
  subsidiaries,
  roles,
  participants,
  selectedSubsidiaries,
  selectedRoles,
} from './mock';

describe('src/state/modules/point-management/team-awards/reducer', () => {
  it('should be a function', () => {
    expect(reducer).to.be.a('function');
  });

  it('should return a initial state', () => {
    const result = reducer(undefined, { type: 'unknown' });

    expect(result).to.be.deep.equal(initialState);
  });

  it('should can handle FETCH_SUBSIDIARIES_ACTION', () => {
    const result = reducer(undefined, {
      type: FETCH_SUBSIDIARIES_ACTION,
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchSubsidiaries: {
        isFetching: true,
      },
    });
  });

  it('should can handle FETCH_SUBSIDIARIES_FAILURE', () => {
    const result = reducer(undefined, {
      type: FETCH_SUBSIDIARIES_FAILURE,
      payload: { errors },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchSubsidiaries: {
        isFetching: false,
        errors,
      },
    });
  });

  it('should can handle FETCH_SUBSIDIARIES_SUCCESS', () => {
    const result = reducer(undefined, {
      type: FETCH_SUBSIDIARIES_SUCCESS,
      payload: { subsidiaries },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchSubsidiaries: {
        isFetching: false,
      },
      subsidiaries,
    });
  });

  it('should can handle FETCH_ROLES_ACTION', () => {
    const result = reducer(undefined, {
      type: FETCH_ROLES_ACTION,
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchRoles: {
        isFetching: true,
      },
    });
  });

  it('should can handle FETCH_ROLES_FAILURE', () => {
    const result = reducer(undefined, {
      type: FETCH_ROLES_FAILURE,
      payload: { errors },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchRoles: {
        isFetching: false,
        errors,
      },
    });
  });

  it('should can handle FETCH_ROLES_SUCCESS', () => {
    const result = reducer(undefined, {
      type: FETCH_ROLES_SUCCESS,
      payload: { roles },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchRoles: {
        isFetching: false,
      },
      roles,
    });
  });

  it('should can handle FETCH_PARTICIPANTS_ACTION', () => {
    const result = reducer(undefined, {
      type: FETCH_PARTICIPANTS_ACTION,
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchParticipants: {
        isFetching: true,
      },
    });
  });

  it('should can handle FETCH_PARTICIPANTS_FAILURE', () => {
    const result = reducer(undefined, {
      type: FETCH_PARTICIPANTS_FAILURE,
      payload: { errors },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchParticipants: {
        isFetching: false,
        errors,
      },
    });
  });

  it('should can handle FETCH_PARTICIPANTS_SUCCESS', () => {
    const result = reducer(undefined, {
      type: FETCH_PARTICIPANTS_SUCCESS,
      payload: { participants },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchParticipants: {
        isFetching: false,
      },
      participants,
    });
  });

  it('should can handle SELECT_SUBSIDIARY', () => {
    const result = reducer(undefined, {
      type: SELECT_SUBSIDIARY,
      payload: { selectedSubsidiaries },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      selectedSubsidiaries,
    });
  });

  it('should can handle SELECT_ROLE', () => {
    const result = reducer(undefined, {
      type: SELECT_ROLE,
      meta: { roleId: 1 },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      selectedRoles: [1],
    });
  });

  it('should can handle SET_PARTICIPANT_FINDER', () => {
    const result = reducer(undefined, {
      type: SET_PARTICIPANT_FINDER,
      payload: { participantFinder: 'Gabriel' },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      isFetching: false,
      participantFinder: 'Gabriel',
    });
  });

  it('should can handle SET_POINTS_TO_DISTRIBUTE', () => {
    const result = reducer(undefined, {
      type: SET_POINTS_TO_DISTRIBUTE,
      payload: { pointsToDistribute: '5000' },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      pointsToDistribute: '5000',
    });
  });
});
