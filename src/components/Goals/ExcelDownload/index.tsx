import React from 'react';
import { ReactSVG } from 'react-svg';

import excelIcon from 'assets/images/goals/excel-icon.svg';
import { Button } from './styles';
import { TitleSection } from '../styles';

interface ExcelDownloadProps {
  url: string;
}
const ExcelDownload: React.FC<ExcelDownloadProps> = ({ url }) => {
  return (
    <div>
      <TitleSection>Performance completa</TitleSection>
      <Button href={url} target="_blank" download>
        <ReactSVG src={excelIcon} />
        <span>Download Excel</span>
      </Button>
    </div>
  );
};

export default ExcelDownload;
