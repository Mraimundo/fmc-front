import { ActionCreator, ActionCreatorPayload } from '@types';
import { SetValueData } from './types';

import {
  SET_UNIT_VALUE_IN_DOLLAR,
  SET_REVENUES_IN_KILOS_PER_LITER,
} from './constants';

export const setUnitValueInDollar = (
  data: SetValueData,
): ActionCreatorPayload<typeof SET_UNIT_VALUE_IN_DOLLAR, SetValueData> =>
  <const>{
    type: SET_UNIT_VALUE_IN_DOLLAR,
    payload: data,
  };

export const setRevenuesValueInKilosPerLiter = (
  data: SetValueData,
): ActionCreatorPayload<typeof SET_REVENUES_IN_KILOS_PER_LITER, SetValueData> =>
  <const>{
    type: SET_REVENUES_IN_KILOS_PER_LITER,
    payload: data,
  };

export type PointsSimulatorActions = ReturnType<
  typeof setUnitValueInDollar | typeof setRevenuesValueInKilosPerLiter
>;
