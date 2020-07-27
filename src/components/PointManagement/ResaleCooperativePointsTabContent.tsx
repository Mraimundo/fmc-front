import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getTotalPointsResaleCooperative,
  getFinishedDistribution,
} from 'state/modules/point-management/common/selectors';
import { distributePoints } from 'state/modules/point-management/common/actions';
import {
  getMarketplacePoints,
  getInvoicePoints,
  getMaxInvoicePercentage,
  getIsEnabledToRescue,
} from 'state/modules/point-management/resale-cooperative/selectors';
import {
  setMarketplacePoints,
  setInvoicePoints,
} from 'state/modules/point-management/resale-cooperative/actions';
import { EstablishmentType } from 'state/modules/point-management/common/types';

import ResaleCooperativeResume from './ResaleCooperativeResume';
import Congrats from './ResaleCooperativeResume/Congrats';
import MarketplacePoints from './MarketplacePoints';
import InvoicePoints from './InvoicePoints';
import { WrapperPoints, RescueResaleCooperativeButton } from './styles';

interface ResaleCooperativePointsTabContentProps {
  establishmentType: EstablishmentType | '';
}
const ResaleCooperativePointsTabContent: React.FC<ResaleCooperativePointsTabContentProps> = ({
  establishmentType,
}) => {
  const [
    totalPointsResaleCooperative,
    marketplacePoints,
    invoicePoints,
    maxInvoicePercentage,
    isEnabledToRescue,
    finishedDistribution,
  ] = [
    useSelector(getTotalPointsResaleCooperative),
    useSelector(getMarketplacePoints),
    useSelector(getInvoicePoints),
    useSelector(getMaxInvoicePercentage),
    useSelector(getIsEnabledToRescue),
    useSelector(getFinishedDistribution),
  ];

  const dispatch = useDispatch();

  const handleSetMarketplacePoints = useCallback(
    (points: number) => {
      dispatch(setMarketplacePoints(points));
    },
    [dispatch],
  );

  const handleSetInvoicePoints = useCallback(
    (points: number) => {
      dispatch(setInvoicePoints(points));
    },
    [dispatch],
  );

  const maxLengthInvoicePoints = useMemo(() => {
    if (!maxInvoicePercentage || !totalPointsResaleCooperative) return null;

    return totalPointsResaleCooperative * (maxInvoicePercentage / 100);
  }, [maxInvoicePercentage, totalPointsResaleCooperative]);

  return (
    <div>
      {!finishedDistribution && (
        <ResaleCooperativeResume
          totalPoints={totalPointsResaleCooperative}
          marketplacePoints={marketplacePoints || 0}
          invoicePoints={invoicePoints || 0}
          maxInvoicePercentage={maxInvoicePercentage || 0}
          establishmentType={establishmentType}
        />
      )}
      {finishedDistribution && (
        <Congrats
          totalPoints={totalPointsResaleCooperative}
          marketplacePoints={marketplacePoints || 0}
          invoicePoints={invoicePoints || 0}
          maxInvoicePercentage={maxInvoicePercentage || 0}
          establishmentType={establishmentType}
        />
      )}
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
      {!finishedDistribution && (
        <RescueResaleCooperativeButton
          buttonRole="tertiary"
          type="button"
          disabled={!isEnabledToRescue}
          onClick={() => dispatch(distributePoints())}
        >
          RESGATAR PREMIAÇÃO
        </RescueResaleCooperativeButton>
      )}
    </div>
  );
};

export default ResaleCooperativePointsTabContent;
