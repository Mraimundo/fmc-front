import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'components/shared/Button';
import { getTotalPointsResaleCooperative } from 'state/modules/point-management/common/selectors';
import {
  getMarketplacePoints,
  getInvoicePoints,
  getMaxInvoicePercentage,
} from 'state/modules/point-management/resale-cooperative/selectors';
import {
  setMarketplacePoints,
  setInvoicePoints,
} from 'state/modules/point-management/resale-cooperative/actions';

import ResaleCooperativeResume from './ResaleCooperativeResume';
import MarketplacePoints from './MarketplacePoints';
import InvoicePoints from './InvoicePoints';
import { WrapperPoints } from './styles';

const ResaleCooperativePointsTabContent: React.FC = () => {
  const [
    totalPointsResaleCooperative,
    marketplacePoints,
    invoicePoints,
    maxInvoicePercentage,
  ] = [
    useSelector(getTotalPointsResaleCooperative),
    useSelector(getMarketplacePoints),
    useSelector(getInvoicePoints),
    useSelector(getMaxInvoicePercentage),
  ];

  const dispatch = useDispatch();

  const handleSetMarketplacePoints = useCallback((points: number) => {
    dispatch(setMarketplacePoints(points));
  }, []);

  const handleSetInvoicePoints = useCallback((points: number) => {
    dispatch(setInvoicePoints(points));
  }, []);

  const maxLengthInvoicePoints = useMemo(() => {
    if (!maxInvoicePercentage || !totalPointsResaleCooperative) return null;

    return totalPointsResaleCooperative * (maxInvoicePercentage / 100);
  }, [maxInvoicePercentage, totalPointsResaleCooperative]);

  return (
    <div>
      <ResaleCooperativeResume
        totalPoints={totalPointsResaleCooperative}
        marketplacePoints={marketplacePoints || 0}
        invoicePoints={invoicePoints || 0}
        maxInvoicePercentage={maxInvoicePercentage || 0}
      />
      <WrapperPoints>
        <MarketplacePoints
          marketplacePoints={marketplacePoints || 0}
          onChange={handleSetMarketplacePoints}
          maxLength={totalPointsResaleCooperative - (invoicePoints || 0)}
        />
        <InvoicePoints
          invoicePoints={invoicePoints || 0}
          onChange={handleSetInvoicePoints}
          disabled={!maxInvoicePercentage}
          maxLength={maxLengthInvoicePoints}
        />
      </WrapperPoints>
      <Button
        buttonRole="tertiary"
        type="button"
        onClick={() => console.log('click')}
      >
        RESGATAR PREMIAÇÃO
      </Button>
    </div>
  );
};

export default ResaleCooperativePointsTabContent;
