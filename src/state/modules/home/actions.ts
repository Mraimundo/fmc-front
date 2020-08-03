import {
  ActionCreator,
  ActionCreatorFailure,
  ActionCreatorPayload,
} from '@types';
import {
  FETCH_BANNERS_ACTION,
  FETCH_BANNERS_FAILURE,
  FETCH_BANNERS_SUCCESS,
} from './constants';
import { HomeState } from './reducer';
import { Banner } from './types';

export const fetchBanners = (): ActionCreator<typeof FETCH_BANNERS_ACTION> =>
  <const>{
    type: FETCH_BANNERS_ACTION,
  };

export const fetchBannersFailure = (
  error: string,
): ActionCreatorFailure<typeof FETCH_BANNERS_FAILURE> =>
  <const>{
    type: FETCH_BANNERS_FAILURE,
    payload: {
      error,
    },
  };

export const fetchBannersSuccess = (
  banners: Banner[] | null,
): ActionCreatorPayload<
  typeof FETCH_BANNERS_SUCCESS,
  Pick<HomeState, 'banners'>
> =>
  <const>{
    type: FETCH_BANNERS_SUCCESS,
    payload: { banners },
  };

export type HomeActions = ReturnType<
  typeof fetchBanners | typeof fetchBannersFailure | typeof fetchBannersSuccess
>;
