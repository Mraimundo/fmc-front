import React from 'react';

import { EstablishmentTypes } from 'config/constants';
import { ExtractSummary } from 'services/extract/interfaces';
import { Button } from 'components/shared';
import { formatPointsExtract } from 'util/points';
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
}

const ExtractHeader: React.FC<Props> = ({ summary, userType, pathKey }) => {
  const { points, balance, total } = summary;

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
          {points &&
            points.map(point => (
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
            onClick={() => console.log('test')}
            disabled={balance.available === 0}
          >
            RESGATAR
          </Button>
          {pathKey === '/extract' && (
            <p className="shared-actions">
              Saldo Ações Compartilhadas FMC:
              <span>{formatPointsExtract(balance.sharedActions)} pontos</span>
            </p>
          )}
        </CalltoActionBox>
      </CalltoActionContainer>
    </Container>
  );
};

export default ExtractHeader;
