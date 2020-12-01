import React, { useCallback, useEffect, useState } from 'react';

import { EstablishmentTypes } from 'config/constants';
import { ExtractSummary, Point } from 'services/extract/interfaces';
import { Button } from 'components/shared';
import { formatPointsExtract } from 'util/points';
import routeMap from 'routes/route-map';
import {
  AccumulatedBalance,
  BalanceItem,
  BalanceBoxContainer,
  CalltoActionContainer,
  CalltoActionBox,
  Container,
} from './styles';

interface Props {
  summary: ExtractSummary;
  userType: EstablishmentTypes;
  pathKey: string;
  piAccess: string;
  isSimulating: boolean;
}

const ExtractHeader: React.FC<Props> = ({
  summary,
  userType,
  pathKey,
  piAccess,
  isSimulating,
}) => {
  const { balance, total } = summary;
  const [points, setPoints] = useState<Point[]>([]);

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
    <Container userType={userType}>
      <AccumulatedBalance>
        {total > 0 && (
          <h2>
            Saldo acumulado:
            <strong> {formatPointsExtract(total)} pontos</strong>
          </h2>
        )}
        <BalanceBoxContainer>
          {points?.map(point => (
            <BalanceItem key={point.id}>
              <div className="title">
                <span>{point.name}</span>
              </div>
              <div className="value">{formatPointsExtract(point.total)} </div>
            </BalanceItem>
          ))}
        </BalanceBoxContainer>
      </AccumulatedBalance>
      <CalltoActionContainer>
        <CalltoActionBox>
          <p className="available">
            Saldo disponível para resgate:
            <strong>{formatPointsExtract(balance.available)} pontos</strong>
          </p>
          <Button
            type="button"
            buttonRole="primary"
            onClick={handlePiAccess}
            disabled={piAccess === '' || isSimulating}
          >
            RESGATAR
          </Button>
          {pathKey === routeMap.extract.channel && (
            <p className="shared-actions">
              Saldo Ações de Desenvolvimento:
              <span>{formatPointsExtract(balance.sharedActions)} pontos</span>
            </p>
          )}
        </CalltoActionBox>
      </CalltoActionContainer>
    </Container>
  );
};

export default ExtractHeader;
