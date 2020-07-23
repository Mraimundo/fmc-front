import { StoreState } from 'state/root-reducer';

export const getMarketplacePoints = (state: StoreState): number | null =>
  state.pointManagement.resaleCooperative.marketplacePoints;

export const getInvoicePoints = (state: StoreState): number | null =>
  state.pointManagement.resaleCooperative.invoicePoints;

export const getMaxInvoicePercentage = (state: StoreState): number | null =>
  state.pointManagement.resaleCooperative.maxInvoicePercentage;
