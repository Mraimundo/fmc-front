import React, { useEffect, useState } from 'react';

import {
  Award,
  Configuration,
  Indicator,
  IndicatorType,
} from 'state/modules/points-simulator/interfaces';
import { formatPoints } from 'util/points';
import MiniBox from '../MiniBox';
import CardComponent from '../Card';
import {
  Container,
  CustomSimulateContent,
  TitleBox,
  CustomSimuteBox,
  CustomAcumulateBox,
  CustomAcumulateContent,
  CustomIndicatorContainer,
  Cards,
} from './styles';

export interface Card {
  title: string;
  type: IndicatorType;
  isRegisteredProduct?: boolean;
  description: string;
  tableData: {
    title: string;
    value: string;
  }[];
  percentageCompleted: number;
  percentageSimulated: number;
}

interface Props {
  cards: Card[];
  award: Award;
  configuration: Configuration;
  indicators: Indicator[];
}

const title = (item: Card) => (
  <>
    {item.title}
    {item.isRegisteredProduct && (
      <span
        style={{
          fontSize: 11,
          transform: 'translateY(-2px)',
          display: 'inline-block',
        }}
      >
        ®
      </span>
    )}
  </>
);

const Body: React.FC<Props> = ({ cards, award, configuration, indicators }) => {
  const [pog, setPog] = useState<Indicator | undefined>(undefined);
  const [revenues, setRevenues] = useState<Indicator | undefined>(undefined);

  useEffect(() => {
    const foundPog = indicators.find(item => item.type === IndicatorType.pog);
    const foundRevenues = indicators.find(
      item => item.type === IndicatorType.revenues,
    );

    setPog(foundPog);
    setRevenues(foundRevenues);
  }, [indicators]);

  return (
    <Container>
      <CustomSimulateContent>
        <TitleBox>
          <h3>Valor da venda</h3>
        </TitleBox>
        <CustomSimuteBox>
          <MiniBox
            title="Faturamento"
            text={`US$ ${formatPoints(
              revenues?.simulationData.totalSimulated || 0,
              0,
              0,
            )}`}
          />
          <MiniBox
            title="POG"
            text={`US$ ${formatPoints(
              pog?.simulationData.totalSimulated || 0,
              0,
              0,
            )}`}
          />
        </CustomSimuteBox>
      </CustomSimulateContent>
      <CustomSimulateContent>
        <TitleBox>
          <h3>Pontos simulados</h3>
          <span>
            (Os pontos referentes a venda simulada assumem o atingimento de 100%
            da meta)
          </span>
        </TitleBox>
        <CustomSimuteBox>
          <MiniBox
            title="Pontos do rebate"
            text={`${formatPoints(award.simulatedRebate, 0, 0)} pontos`}
          />
          <MiniBox
            title="Margem adicional"
            text={`R$ ${formatPoints(award.simulatedAdditionalMargin, 0, 0)}`}
          />
          <MiniBox
            title="Premiação de vendedor"
            text={`${formatPoints(award.simulatedSeller, 0, 0)} pontos`}
          />
        </CustomSimuteBox>
      </CustomSimulateContent>
      <CustomAcumulateContent>
        <TitleBox>
          <h3>Total acumulado</h3>
        </TitleBox>
        <CustomAcumulateBox>
          <MiniBox
            title="Pontos do rebate"
            text={`${formatPoints(award.totalRebate, 0, 0)} pontos`}
          />
          {/*<MiniBox
            title="Margem adicional"
            text={`R$ ${formatPoints(award.totalAdditionalMargin, 0, 0)}`}
          />*/}
          <MiniBox
            title="Premiação de vendedor"
            text={`${formatPoints(award.totalSeller, 0, 0)} pontos`}
          />
        </CustomAcumulateBox>
      </CustomAcumulateContent>
      <CustomIndicatorContainer>
        <h3>Indicadores</h3>
        <Cards className="_indicatorsContainer">
          {cards.map(item => (
            <CardComponent
              key={item.title}
              title={title(item)}
              description={item.description}
              tableData={item.tableData}
              percentageCompleted={item.percentageCompleted}
              percentageSimulated={item.percentageSimulated}
            />
          ))}
        </Cards>
      </CustomIndicatorContainer>
    </Container>
  );
};

export default Body;
