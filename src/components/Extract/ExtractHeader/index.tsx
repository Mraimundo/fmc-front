import React from 'react';
import { ExtractSummary } from 'services/extract/interfaces';
import { Button } from 'components/shared';
import { EstablishmentType } from 'state/modules/point-management/common/types';
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
  userType: EstablishmentType;
}

const ExtractHeader: React.FC<Props> = ({ summary, userType }) => {
  const { points, balance, total } = summary;

  return (
    <Container userType={userType}>
      <AccumulatedBalance>
        {total > 0 && (
          <h2>
            Saldo acumulado: <strong>{total} pontos</strong>
          </h2>
        )}
        <BalanceBoxContainer>
          {points &&
            points.map(point => (
              <BalanceItem key={point.id}>
                <div className="title">
                  <span>{point.name}</span>
                </div>
                <div className="value">{point.total} </div>
              </BalanceItem>
            ))}
        </BalanceBoxContainer>
      </AccumulatedBalance>
      <CalltoActionContainer>
        <CalltoActionBox>
          <p className="available">
            Saldo disponível para resgate:
            <strong>{balance.available} pontos</strong>
          </p>
          <Button
            type="button"
            buttonRole="primary"
            onClick={() => console.log('test')}
            disabled={balance.available === 0}
          >
            RESGATAR
          </Button>
          <p className="shared-actions">
            Saldo Ações Compartilhadas FMC:
            <span>{balance.sharedActions} pontos</span>
          </p>
        </CalltoActionBox>
      </CalltoActionContainer>
    </Container>
  );
};

export default ExtractHeader;
