import React, { useEffect, useState } from 'react';

import {
  Award,
  Configuration,
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

const Body: React.FC<Props> = ({ cards, award, configuration }) => {
  const [
    shouldShowTotalRebatePoints,
    setShouldShowTotalRebatePoints,
  ] = useState(false);
  const [
    shouldShowTotalSellerPoints,
    setShouldShowTotalSellerPoints,
  ] = useState(false);
  const [
    shouldShowSimulatedRebatePoints,
    setShouldShowSimulatedRebatePoints,
  ] = useState(false);
  const [
    shouldShowSimulatedSellerPoints,
    setShouldShowSimulatedSellerPoints,
  ] = useState(false);

  useEffect(() => {
    const pog = cards.find(item => item.type === IndicatorType.pog);
    const revenues = cards.find(item => item.type === IndicatorType.revenues);

    setShouldShowTotalSellerPoints(
      (pog?.percentageSimulated || 0) >=
        configuration.minimumSellerPercentageToMakePoints &&
        (revenues?.percentageSimulated || 0) >=
          configuration.minimumSellerPercentageToMakePoints,
    );

    setShouldShowTotalRebatePoints(
      (pog?.percentageSimulated || 0) >=
        configuration.minimumRebatePercentageToMakePoints &&
        (revenues?.percentageSimulated || 0) >=
          configuration.minimumRebatePercentageToMakePoints,
    );

    setShouldShowSimulatedRebatePoints(award.simulatedRebate >= 0);

    setShouldShowSimulatedSellerPoints(award.simulatedSeller >= 0);
  }, [cards, configuration, award]);

  return (
    <Container>
      <CustomSimulateContent>
        <TitleBox>
          <h3>Venda simulada</h3>
          <span>
            (Os pontos referentes a venda simulada assumem o atingimento de 100%
            da meta)
          </span>
        </TitleBox>
        <CustomSimuteBox>
          <MiniBox
            title="Pontos do rebate"
            text={`${
              shouldShowSimulatedRebatePoints
                ? formatPoints(award.simulatedRebate, 0, 0)
                : '0'
            } pontos`}
          />
          <MiniBox
            title="Margem adicional"
            text={`R$ ${formatPoints(award.simulatedAdditionalMargin, 0, 0)}`}
          />
          <MiniBox
            title="Premiação de vendedor"
            text={`${
              shouldShowSimulatedSellerPoints
                ? formatPoints(award.simulatedSeller, 0, 0)
                : '0'
            } pontos`}
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
            text={`${
              shouldShowTotalRebatePoints
                ? formatPoints(award.totalRebate, 0, 0)
                : '0'
            } pontos`}
          />
          <MiniBox
            title="Margem adicional"
            text={`R$ ${formatPoints(award.totalAdditionalMargin, 0, 0)}`}
          />
          <MiniBox
            title="Premiação de vendedor"
            text={`${
              shouldShowTotalSellerPoints
                ? formatPoints(award.totalSeller, 0, 0)
                : '0'
            } pontos`}
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
