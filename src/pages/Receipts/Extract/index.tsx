import React, { useState, useEffect, useCallback } from 'react';
import { EstablishmentTypes } from 'config/constants';
import { formatPointsExtract } from 'util/points';
import { ExtractSummary, Point } from 'services/extract/interfaces';

import { ExtractButton, ExtractHeader } from './styles';

interface Props {
  summary: ExtractSummary;
  userType: EstablishmentTypes;
  pathKey: string;
  piAccess: string;
  isSimulating: boolean;
}

const Extract: React.FC<Props> = ({
  summary,
  userType,
  pathKey,
  piAccess,
  isSimulating,
}) => {
  const { balance } = summary;
  //console.log(balance)
  const [, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    if (!summary.points) return;

    const groupPoints: Point[] = [];

    summary.points.forEach(item => {
      const alreadyAddedPointIndex = groupPoints.findIndex(
        tmp => tmp.name === item.name,
      );
      if (alreadyAddedPointIndex !== -1) {
        groupPoints[alreadyAddedPointIndex].total += item.total;
        return;
      }
      groupPoints.push(item);
    });

    setPoints(groupPoints);
  }, [summary.points]);

  const handlePiAccess = useCallback(() => {
    if (!piAccess) return;

    const linkClick = document.createElement('a');
    linkClick.href = piAccess;
    linkClick.target = '_blank';
    document.body.appendChild(linkClick);
    linkClick.click();
    document.body.removeChild(linkClick);
  }, [piAccess]);

  return (
    <div>
      <ExtractHeader>
        <p>Saldo disponível para resgate:</p>
        <strong>{formatPointsExtract(balance.available)} FMC coins </strong>

        <ExtractButton
          type="button"
          buttonRole="primary"
          onClick={handlePiAccess}
          disabled={piAccess === '' || isSimulating}
        >
          RESGATAR
        </ExtractButton>
      </ExtractHeader>
    </div>
  );
};

export default Extract;
