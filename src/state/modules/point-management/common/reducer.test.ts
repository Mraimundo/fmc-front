import { expect } from 'chai';

import reducer, { initialState } from './reducer';
import * as actions from './actions';
import {
  error,
  pointsToDistribute,
  establishments,
  selectedEstablishment,
} from './mock';

describe('src/state/modules/point-management/common/reducer', () => {
  test('should be a function', () => {
    expect(reducer).to.be.a('function');
  });

  test('should return a initial state', () => {
    const result = reducer(undefined, { type: 'unknown' });

    expect(result).to.be.deep.equal(initialState);
  });

  test('should can handle FETCH_ESTABLISHMENTS_ACTION', () => {
    const result = reducer(undefined, actions.fetchEstablishments());

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchEstablishments: {
        isFetching: true,
      },
    });
  });

  test('should can handle FETCH_ESTABLISHMENTS_FAILURE', () => {
    const result = reducer(
      undefined,
      actions.fetchEstablishmentsFailure(error),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchEstablishments: {
        isFetching: false,
        error,
      },
    });
  });

  test('should can handle FETCH_ESTABLISHMENTS_SUCCESS', () => {
    const result = reducer(
      undefined,
      actions.fetchEstablishmentsSuccess(establishments),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      establishments,
      fetchEstablishments: {
        isFetching: false,
      },
    });
  });

  test('should can handle FETCH_POINTS_TO_DISTRIBUTE_ACTION', () => {
    const result = reducer(undefined, actions.fetchPointsToDistribute());

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchPointsToDistribute: {
        isFetching: true,
      },
    });
  });

  test('should can handle FETCH_POINTS_TO_DISTRIBUTE_FAILURE', () => {
    const result = reducer(
      undefined,
      actions.fetchPointsToDistributeFailure(error),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchPointsToDistribute: {
        isFetching: false,
        error,
      },
    });
  });

  test('should can handle FETCH_POINTS_TO_DISTRIBUTE_SUCCESS', () => {
    const result = reducer(
      undefined,
      actions.fetchPointsToDistributeSuccess(pointsToDistribute),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      pointsToDistribute: pointsToDistribute,
      fetchPointsToDistribute: {
        isFetching: false,
      },
    });
  });

  test('should can handle SET_TOTAL_POINTS_TEAM_AWARDS', () => {
    const result = reducer(undefined, actions.setTotalPointsTeamAwards(10));

    expect(result).to.be.deep.equal({
      ...initialState,
      totalPointsTeamAwards: 10,
    });
  });

  test('should can handle SET_TOTAL_POINTS_RESALE_COOPERATIVE', () => {
    const result = reducer(
      undefined,
      actions.setTotalPointsResaleCooperative(10),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      totalPointsResaleCooperative: 10,
    });
  });

  test('should can handle SET_IS_READY_TO_DISTRIBUTE', () => {
    const result = reducer(undefined, actions.setIsReadyToDistribute(true));

    expect(result).to.be.deep.equal({
      ...initialState,
      isReadyToDistribute: true,
    });
  });

  test('should can handle SET_SELECTED_ESTABLISHMENT', () => {
    const result = reducer(
      undefined,
      actions.setSelectedEstablishment(selectedEstablishment),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      selectedEstablishment,
    });
  });

  test('should can handle DISTRIBUTE_POINTS_ACTION', () => {
    const result = reducer(undefined, actions.distributePoints());

    expect(result).to.be.deep.equal({
      ...initialState,
      distributePoints: {
        isFetching: true,
      },
    });
  });

  test('should can handle DISTRIBUTE_POINTS_FINALLY_ACTION', () => {
    const result = reducer(undefined, actions.distributePointsFinally());

    expect(result).to.be.deep.equal({
      ...initialState,
      distributePoints: {
        isFetching: true,
      },
    });
  });

  test('should can handle DISTRIBUTE_POINTS_FAILURE', () => {
    const result = reducer(undefined, actions.distributePointsFailure(error));

    expect(result).to.be.deep.equal({
      ...initialState,
      distributePoints: {
        isFetching: false,
        error,
      },
    });
  });

  test('should can handle DISTRIBUTE_POINTS_SUCCESS', () => {
    const result = reducer(undefined, actions.distributePointsSuccess());

    expect(result).to.be.deep.equal({
      ...initialState,
      distributePoints: {
        isFetching: false,
      },
    });
  });

  test('should can handle SET_FINISHED_DISTRIBUTION', () => {
    const result = reducer(undefined, actions.setFinishedDistribution());

    expect(result).to.be.deep.equal({
      ...initialState,
      finishedDistribution: true,
    });
  });
});
