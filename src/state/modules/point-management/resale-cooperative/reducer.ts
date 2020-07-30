import { Reducer } from 'redux';

import { ResaleCooperativeActions } from './actions';
import {
  SET_MARKETPLACE_POINTS,
  SET_INVOICE_POINTS,
  SET_MAX_INVOICE_PERCENTAGE,
} from './constants';

export type ResaleCooperativeState = {
  marketplacePoints: number;
  invoicePoints: number;
  maxInvoicePercentage: number | null;
};

export const initialState: ResaleCooperativeState = {
  marketplacePoints: 0,
  invoicePoints: 0,
  maxInvoicePercentage: null,
};

const resaleCooperativeReducer: Reducer<
  ResaleCooperativeState,
  ResaleCooperativeActions
> = (
  state = initialState,
  action: ResaleCooperativeActions,
): ResaleCooperativeState => {
  switch (action.type) {
    case SET_MARKETPLACE_POINTS:
      return { ...state, marketplacePoints: action.payload.marketplacePoints };

    case SET_INVOICE_POINTS:
      return { ...state, invoicePoints: action.payload.invoicePoints };

    case SET_MAX_INVOICE_PERCENTAGE:
      return {
        ...state,
        maxInvoicePercentage: action.payload.maxInvoicePercentage,
      };

    default:
      return state;
  }
};

export default resaleCooperativeReducer;
