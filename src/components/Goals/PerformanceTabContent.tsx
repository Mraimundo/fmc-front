import React from 'react';

import BillingPog from './BillingPog';
import Potentializers from './Potentializers';
import PerformancePotentialTable from './PerformancePotentialTable';
import ExcelDownload from './ExcelDownload';
import { LastUpdate } from './styles';

const PerformanceTabContent: React.FC = () => {
  return (
    <>
      <BillingPog />
      <Potentializers />
      <PerformancePotentialTable />
      <ExcelDownload />
      <LastUpdate>Última atualização: 01/03/2021</LastUpdate>
    </>
  );
};

export default PerformanceTabContent;
