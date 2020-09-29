import React from 'react';

import {
  BillingPog as BillingPogType,
  Potentializer,
  Infos,
} from 'state/modules/goals/types';
import BillingPog from './BillingPog';
import Potentializers from './Potentializers';
import PerformancePotentialTable from './PerformancePotentialTable';
import ExcelDownload from './ExcelDownload';
import { LastUpdate } from './styles';

interface PerformanceTabContentProps {
  billingPog: BillingPogType | null;
  potentializers: Potentializer[] | null;
  infos: Infos | null;
}
const PerformanceTabContent: React.FC<PerformanceTabContentProps> = ({
  billingPog,
  potentializers,
  infos,
}) => {
  const hasPotentializers = !!potentializers && potentializers.length > 0;

  return (
    <>
      <BillingPog billingPog={billingPog} />
      {hasPotentializers && <Potentializers potentializers={potentializers} />}
      {!!infos && (
        <>
          <PerformancePotentialTable
            potential={infos.potential}
            points={infos.points}
          />
          {!!infos.excel && infos.excel !== '#' && (
            <ExcelDownload url={infos.excel} />
          )}
          {!!infos.lastUpdate && (
            <LastUpdate>Última atualização: {infos.lastUpdate}</LastUpdate>
          )}
        </>
      )}
    </>
  );
};

export default PerformanceTabContent;
