import React from 'react';
import { ExtractSummary } from 'services/extract/interfaces';
import { Button } from 'components/shared';
import {
  AccumulatedBalance,
  BalanceItem,
  BalanceBoxContainer,
  CalltoActionContainer,
  CalltoActionBox,
  ContainerReseller,
} from './styles';

interface Props {
  summary: ExtractSummary;
}

const ExtractHeader: React.FC<Props> = ({ summary }) => {
  const { points, balance, total } = summary;

  return (
    <ContainerReseller>
      <AccumulatedBalance>
        <h2>
          Saldo acumulado: <strong>{total} mil pontos</strong>
        </h2>
        <BalanceBoxContainer>
          {points &&
            points.map(point => (
              <BalanceItem key={point.id}>
                <div className="title">
                  <span>{point.name}</span>
                </div>
                <div className="value">{point.total} mil</div>
              </BalanceItem>
            ))}
        </BalanceBoxContainer>
      </AccumulatedBalance>
      <CalltoActionContainer>
        <CalltoActionBox>
          <p>
            Saldo disponível para resgate:
            <strong>{balance.available} mil pontos</strong>
          </p>
          <Button
            type="button"
            buttonRole="primary"
            onClick={() => console.log('test')}
          >
            RESGATAR
          </Button>
          <p>
            Saldo Ações Compartilhadas FMC:
            <span>{balance.sharedActions} pontos</span>
          </p>
        </CalltoActionBox>
      </CalltoActionContainer>
    </ContainerReseller>
  );
};

export default ExtractHeader;
