import { createSelector } from 'reselect';

import { StoreState } from 'state/root-reducer';
import { getTotalPointsResaleCooperative } from 'state/modules/point-management/common/selectors';

export const getMarketplacePoints = (state: StoreState): number =>
  state.pointManagement.resaleCooperative.marketplacePoints;

export const getInvoicePoints = (state: StoreState): number =>
  state.pointManagement.resaleCooperative.invoicePoints;

export const getMaxInvoicePercentage = (state: StoreState): number | null =>
  state.pointManagement.resaleCooperative.maxInvoicePercentage;

export const getIsEnabledToRescue = createSelector(
  getTotalPointsResaleCooperative,
  getMarketplacePoints,
  getInvoicePoints,
  (
    totalPointsResaleCooperative: number,
    marketplacePoints: number,
    invoicePoints: number,
  ) => {
    return totalPointsResaleCooperative === marketplacePoints + invoicePoints;
  },
);
