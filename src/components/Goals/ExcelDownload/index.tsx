import React from 'react';
import { ReactSVG } from 'react-svg';

import excelIcon from 'assets/images/goals/excel-icon.svg';
import { Button } from './styles';
import { TitleSection } from '../styles';

const ExcelDownload: React.FC = () => {
  return (
    <div>
      <TitleSection>Performance completa</TitleSection>
      <Button href="/" target="_blank">
        <ReactSVG src={excelIcon} />
        <span>Download Excel</span>
      </Button>
    </div>
  );
};

export default ExcelDownload;
