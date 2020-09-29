import { Reducer } from 'redux';
import {
  Campaign,
  Audience,
} from 'services/campaignsManager/interfaces/Campaign';
import { newEmptyCampaignObject } from 'services/campaignsManager';
import produce from 'immer';
import { object } from 'yup';
import { Errors } from './types';

import { CampaignsManagerActions } from './actions';
import {
  ADD_GOAL,
  REMOVE_GOAL,
  SET_FIELD_VALUE,
  SET_PRIZE_NAME,
  SET_PRIZE_DESCRIPTION,
  SET_POINTS_VALUE,
  ADD_AUDIENCE,
  REMOVE_AUDIENCE,
  SET_END_DATE,
  SET_START_DATE,
  SET_MECHANIC,
  SET_CAMPAIGN,
  RESET,
  SET_ERRORS,
  SET_SEND_MAIL,
} from './constants';

export type CampaignsManagerState = {
  campaign: Campaign;
  canEdit: boolean;
  errors: Errors;
};

export const initialState: CampaignsManagerState = {
  campaign: newEmptyCampaignObject(),
  canEdit: true,
  errors: {},
};

const CampaignsManagerReducer: Reducer<
  CampaignsManagerState,
  CampaignsManagerActions
> = (
  state = initialState,
  action: CampaignsManagerActions,
): CampaignsManagerState => {
  if (action.type !== SET_CAMPAIGN && action.type !== RESET && !state.canEdit) {
    return state;
  }
  switch (action.type) {
    case SET_CAMPAIGN:
      return {
        canEdit: action.payload.canEdit,
        campaign: action.payload.campaign,
        errors: {},
      };
    case ADD_GOAL:
      return produce(state, draft => {
        const goals = draft.campaign.goals.filter(
          item => item.product.id !== action.payload.product.id,
        );
        goals.push(action.payload);

        draft.campaign.goals = goals.sort((item1, item2) =>
          item1.product.id > item2.product.id ? 1 : -1,
        );
      });
    case REMOVE_GOAL:
      return produce(state, draft => {
        draft.campaign.goals = draft.campaign.goals.filter(
          item => item.product.id !== action.payload.product.id,
        );
      });
    case SET_FIELD_VALUE:
      return {
        ...state,
        campaign: {
          ...state.campaign,
          [action.payload.fieldName]: action.payload.value,
        },
      };
    case SET_PRIZE_NAME:
      return produce(state, draft => {
        draft.campaign.prize.name = action.payload;
      });
    case SET_PRIZE_DESCRIPTION:
      return produce(state, draft => {
        draft.campaign.prize.description = action.payload;
      });
    case SET_POINTS_VALUE:
      return {
        ...state,
        campaign: {
          ...state.campaign,
          [action.payload.fieldName]: action.payload.value,
        },
      };
    case ADD_AUDIENCE:
      return produce(state, draft => {
        let newData: Audience[];
        if (action.payload instanceof Array) {
          const ids = action.payload.map(item => item.customer.id);
          newData = draft.campaign.audience.filter(
            item => ids.indexOf(item.customer.id) === -1,
          );
          newData.push(...action.payload);
        } else {
          const customerId = action.payload.customer.id;
          newData = draft.campaign.audience.filter(
            item => item.customer.id !== customerId,
          );
          newData.push(action.payload);
        }

        draft.campaign.audience = newData.sort((item1, item2) =>
          item1.customer.id > item2.customer.id ? 1 : -1,
        );
      });
    case REMOVE_AUDIENCE:
      return produce(state, draft => {
        let ids: number[];
        if (action.payload instanceof Array) {
          ids = action.payload.map(item => item.customer.id);
        } else {
          ids = [action.payload.customer.id];
        }

        draft.campaign.audience = draft.campaign.audience.filter(
          item => ids.indexOf(item.customer.id) === -1,
        );
      });
    case SET_START_DATE:
      return produce(state, draft => {
        draft.campaign.startDate = action.payload;
      });
    case SET_END_DATE:
      return produce(state, draft => {
        draft.campaign.endDate = action.payload;
      });
    case SET_MECHANIC:
      return produce(state, draft => {
        draft.campaign.mechanic = action.payload;
      });
    case SET_SEND_MAIL:
      return produce(state, draft => {
        draft.campaign.sendEmail = action.payload;
      });
    case SET_ERRORS:
      return produce(state, draft => {
        draft.errors = action.payload;
      });
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default CampaignsManagerReducer;
