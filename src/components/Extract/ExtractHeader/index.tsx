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
  summary: ExtractSummary[];
}

const ExtractHeader: React.FC<Props> = ({ summary }) => {
  return (
    <ContainerReseller>
      <AccumulatedBalance>
        <h2>
          Saldo acumulado: <strong>500 mil pontos</strong>
        </h2>
        <BalanceBoxContainer>
          {summary.map(item => (
            <BalanceItem key={item.balance_unit.id}>
              <div className="title">
                <span>{item.balance_unit.name}</span>
              </div>
              <div className="value">{item.value} mil</div>
            </BalanceItem>
          ))}
        </BalanceBoxContainer>
      </AccumulatedBalance>
      <CalltoActionContainer>
        <CalltoActionBox>
          <p>
            Saldo disponível para resgate:
            <strong>100 mil pontos</strong>
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
            <span>150.000 pontos</span>
          </p>
        </CalltoActionBox>
      </CalltoActionContainer>
    </ContainerReseller>
  );
};

export default ExtractHeader;
