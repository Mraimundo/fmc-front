import React from 'react';
import { Button } from 'components/shared';
import {
  AccumulatedBalance,
  BalanceItem,
  BalanceBoxContainer,
  CalltoActionContainer,
  CalltoActionBox,
  ContainerReseller,
} from './styles';

const blocks = [
  { title: 'Rebate', value: '200 mil' },
  { title: 'Ações Compartilhadas FMC*', value: '200 mil' },
  { title: 'Premiação Vendedores', value: '200 mil' },
  { title: 'Pontos Extra', value: '200 mil' },
];

const ExtractHeader: React.FC = () => {
  return (
    <ContainerReseller>
      <AccumulatedBalance>
        <h2>
          Saldo acumulado: <strong>500 mil pontos</strong>
        </h2>
        <BalanceBoxContainer>
          {blocks.map(item => (
            <BalanceItem>
              <div className="title"><span>{item.title}</span></div>
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
          <p>Saldo Ações Compartilhadas FMC: 150.000 pontos</p>
        </CalltoActionBox>
      </CalltoActionContainer>
    </ContainerReseller>
  );
};

export default ExtractHeader;
