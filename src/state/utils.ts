import { FetchState, ActionCreatorFailure } from '@types';

export const emptyFetchState: FetchState = { isFetching: false };

export const fetchingState: FetchState = { isFetching: true };

export const fetchErrorState = <T extends string>(
  action: ActionCreatorFailure<T>,
): FetchState => ({
  error: action.payload.error,
  isFetching: false,
});
