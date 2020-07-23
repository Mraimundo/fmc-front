import { ActionCreatorPayload } from '@types';
import {
  SET_MARKETPLACE_POINTS,
  SET_INVOICE_POINTS,
  SET_MAX_INVOICE_PERCENTAGE,
} from './constants';
import { ResaleCooperativeState } from './reducer';

export const setMarketplacePoints = (
  marketplacePoints: number,
): ActionCreatorPayload<
  typeof SET_MARKETPLACE_POINTS,
  Pick<ResaleCooperativeState, 'marketplacePoints'>
> =>
  <const>{
    type: SET_MARKETPLACE_POINTS,
    payload: { marketplacePoints },
  };

export const setInvoicePoints = (
  invoicePoints: number,
): ActionCreatorPayload<
  typeof SET_INVOICE_POINTS,
  Pick<ResaleCooperativeState, 'invoicePoints'>
> =>
  <const>{
    type: SET_INVOICE_POINTS,
    payload: { invoicePoints },
  };

export const setMaxInvoicePercentage = (
  maxInvoicePercentage: number,
): ActionCreatorPayload<
  typeof SET_MAX_INVOICE_PERCENTAGE,
  Pick<ResaleCooperativeState, 'maxInvoicePercentage'>
> =>
  <const>{
    type: SET_MAX_INVOICE_PERCENTAGE,
    payload: { maxInvoicePercentage },
  };

export type ResaleCooperativeActions = ReturnType<
  | typeof setMarketplacePoints
  | typeof setInvoicePoints
  | typeof setMaxInvoicePercentage
>;
