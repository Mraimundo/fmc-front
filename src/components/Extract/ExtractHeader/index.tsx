import React, { useState, useEffect } from 'react';
import getSummary from 'services/extract/getSummary';
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

const ExtractHeader: React.FC = () => {
  const [summary, setSummary] = useState<ExtractSummary[]>([]);

  useEffect(() => {
    getSummary().then(data => setSummary(data));
  }, []);

  return (
    <ContainerReseller>
      <AccumulatedBalance>
        <h2>
          Saldo acumulado: <strong>500 mil pontos</strong>
        </h2>
        <BalanceBoxContainer>
          {summary.map(item => (
            <BalanceItem>
              <div className="title">
                <span>{item.balance_unit.name}</span>
              </div>
              <div className="value">{item.value}</div>
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
