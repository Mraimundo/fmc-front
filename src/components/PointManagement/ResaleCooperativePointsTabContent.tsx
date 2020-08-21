import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { EstablishmentTypes } from 'config/constants';
import {
  getTotalPointsResaleCooperative,
  getFinishedDistribution,
  getPointsToDistribute,
} from 'state/modules/point-management/common/selectors';
import { FinishedDistributionPossibilities } from 'state/modules/point-management/common/constants';
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

import ResaleCooperativeResume from './ResaleCooperativeResume';
import Congrats from './ResaleCooperativeResume/Congrats';
import MarketplacePoints from './MarketplacePoints';
import InvoicePoints from './InvoicePoints';
import { WrapperPoints, RescueResaleCooperativeButton } from './styles';

interface ResaleCooperativePointsTabContentProps {
  establishmentType: EstablishmentTypes;
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
    pointsToDistribute,
  ] = [
    useSelector(getTotalPointsResaleCooperative),
    useSelector(getMarketplacePoints),
    useSelector(getInvoicePoints),
    useSelector(getMaxInvoicePercentage),
    useSelector(getIsEnabledToRescue),
    useSelector(getFinishedDistribution),
    useSelector(getPointsToDistribute),
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

  const maxLengthInvoicePoints = useMemo<number>(() => {
    if (!maxInvoicePercentage || !totalPointsResaleCooperative) return 0;

    return totalPointsResaleCooperative * (maxInvoicePercentage / 100);
  }, [maxInvoicePercentage, totalPointsResaleCooperative]);

  const partialDistribution = pointsToDistribute.allowPartialDistribution
    ? FinishedDistributionPossibilities.Rc
    : FinishedDistributionPossibilities.All;

  const { Rc, All } = FinishedDistributionPossibilities;
  const isFinished = finishedDistribution === (Rc || All);

  return (
    <div>
      {!finishedDistribution && (
        <ResaleCooperativeResume
          totalPoints={totalPointsResaleCooperative}
          marketplacePoints={marketplacePoints || 0}
          invoicePoints={invoicePoints || 0}
          maxInvoicePercentage={maxInvoicePercentage || 0}
          establishmentType={establishmentType}
          hasInvoicePoints={!!maxInvoicePercentage}
        />
      )}
      {isFinished && (
        <Congrats
          totalPoints={totalPointsResaleCooperative}
          marketplacePoints={marketplacePoints || 0}
          invoicePoints={invoicePoints || 0}
          maxInvoicePercentage={maxInvoicePercentage || 0}
          establishmentType={establishmentType}
          hasInvoicePoints={!!maxInvoicePercentage}
        />
      )}
      <WrapperPoints>
        <MarketplacePoints
          marketplacePoints={marketplacePoints || 0}
          onChange={handleSetMarketplacePoints}
          maxLength={totalPointsResaleCooperative - (invoicePoints || 0)}
        />
        {!!maxInvoicePercentage && (
          <InvoicePoints
            invoicePoints={invoicePoints || 0}
            onChange={handleSetInvoicePoints}
            disabled={!maxInvoicePercentage}
            maxLength={maxLengthInvoicePoints}
          />
        )}
      </WrapperPoints>
      {!finishedDistribution && (
        <RescueResaleCooperativeButton
          buttonRole="tertiary"
          type="button"
          disabled={!isEnabledToRescue}
          onClick={() => dispatch(distributePoints(partialDistribution))}
        >
          RESGATAR PREMIAÇÃO
        </RescueResaleCooperativeButton>
      )}
    </div>
  );
};

export default ResaleCooperativePointsTabContent;
