import { ActionCreator, ActionCreatorPayload } from '@types';
import {
  Campaign,
  Goal,
  Audience,
  Mechanic,
  Culture,
} from 'services/campaigns-manager/interfaces/Campaign';
import {
  ADD_GOAL,
  REMOVE_GOAL,
  SET_FIELD_VALUE,
  SET_PRIZE_DESCRIPTION,
  SET_PRIZE_NAME,
  SET_POINTS_VALUE,
  ADD_AUDIENCE,
  REMOVE_AUDIENCE,
  SET_START_DATE,
  SET_END_DATE,
  SET_MECHANIC,
  SET_CULTURE,
  SET_CAMPAIGN,
  RESET,
  SET_ERRORS,
  SET_SEND_MAIL,
} from './constants';
import { TextField, ValueField, Errors } from './types';

export const addGoal = (
  data: Goal,
): ActionCreatorPayload<typeof ADD_GOAL, Goal> =>
  <const>{
    type: ADD_GOAL,
    payload: data,
  };

export const removeGoal = (
  data: Goal,
): ActionCreatorPayload<typeof REMOVE_GOAL, Goal> =>
  <const>{
    type: REMOVE_GOAL,
    payload: data,
  };

export const setFieldValue = (
  data: TextField,
): ActionCreatorPayload<typeof SET_FIELD_VALUE, TextField> =>
  <const>{
    type: SET_FIELD_VALUE,
    payload: data,
  };

export const setPrizeName = (
  data: string,
): ActionCreatorPayload<typeof SET_PRIZE_NAME, string> =>
  <const>{
    type: SET_PRIZE_NAME,
    payload: data,
  };

export const setPrizeDescription = (
  data: string,
): ActionCreatorPayload<typeof SET_PRIZE_DESCRIPTION, string> =>
  <const>{
    type: SET_PRIZE_DESCRIPTION,
    payload: data,
  };

export const setPointsValue = (
  data: ValueField,
): ActionCreatorPayload<typeof SET_POINTS_VALUE, ValueField> =>
  <const>{
    type: SET_POINTS_VALUE,
    payload: data,
  };

export const addAudience = (
  data: Audience | Audience[],
): ActionCreatorPayload<typeof ADD_AUDIENCE, Audience | Audience[]> =>
  <const>{
    type: ADD_AUDIENCE,
    payload: data,
  };

export const removeAudience = (
  data: Audience | Audience[],
): ActionCreatorPayload<typeof REMOVE_AUDIENCE, Audience | Audience[]> =>
  <const>{
    type: REMOVE_AUDIENCE,
    payload: data,
  };

export const setStartDate = (
  data: Date | null,
): ActionCreatorPayload<typeof SET_START_DATE, Date | null> =>
  <const>{
    type: SET_START_DATE,
    payload: data,
  };

export const setEndDate = (
  data: Date | null,
): ActionCreatorPayload<typeof SET_END_DATE, Date | null> =>
  <const>{
    type: SET_END_DATE,
    payload: data,
  };

export const setMechanic = (
  data: Mechanic | null,
): ActionCreatorPayload<typeof SET_MECHANIC, Mechanic | null> =>
  <const>{
    type: SET_MECHANIC,
    payload: data,
  };

export const setCampaign = (
  data: Campaign,
  canEdit = true,
): ActionCreatorPayload<
  typeof SET_CAMPAIGN,
  { campaign: Campaign; canEdit: boolean }
> =>
  <const>{
    type: SET_CAMPAIGN,
    payload: { campaign: data, canEdit },
  };

export const reset = (): ActionCreator<typeof RESET> => <const>{ type: RESET };

export const setErrors = (
  data: Errors,
): ActionCreatorPayload<typeof SET_ERRORS, Errors> =>
  <const>{
    type: SET_ERRORS,
    payload: data,
  };

export const setSendMail = (
  data: boolean,
): ActionCreatorPayload<typeof SET_SEND_MAIL, boolean> =>
  <const>{
    type: SET_SEND_MAIL,
    payload: data,
  };

export const setCulture = (
  data: Culture | null,
): ActionCreatorPayload<typeof SET_CULTURE, Culture | null> =>
  <const>{
    type: SET_CULTURE,
    payload: data,
  };

export type CampaignsManagerActions = ReturnType<
  | typeof addGoal
  | typeof removeGoal
  | typeof setFieldValue
  | typeof setPrizeName
  | typeof setPrizeDescription
  | typeof setPointsValue
  | typeof addAudience
  | typeof removeAudience
  | typeof setStartDate
  | typeof setEndDate
  | typeof setMechanic
  | typeof setCampaign
  | typeof reset
  | typeof setErrors
  | typeof setSendMail
  | typeof setCulture
>;
