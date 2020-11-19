import React from 'react';

import { Award } from 'state/modules/points-simulator/interfaces';
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
}

const Body: React.FC<Props> = ({ cards, award }) => {
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
            text={`${formatPoints(award.simulatedRebate, 0, 0)} pontos`}
          />
          <MiniBox
            title="Margem adicional"
            text={`${formatPoints(
              award.simulatedAdditionalMargin,
              0,
              0,
            )} pontos`}
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
          <MiniBox
            title="Margem adicional"
            text={`${formatPoints(award.totalAdditionalMargin, 0, 0)} pontos`}
          />
          <MiniBox
            title="Premiação de vendedor"
            text={`${formatPoints(award.totalSeller, 0, 0)} pontos`}
          />
        </CustomAcumulateBox>
      </CustomAcumulateContent>
      <CustomIndicatorContainer>
        <h3>Indicadores</h3>
        <Cards>
          {cards.map(item => (
            <CardComponent
              key={item.title}
              title={item.title}
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
