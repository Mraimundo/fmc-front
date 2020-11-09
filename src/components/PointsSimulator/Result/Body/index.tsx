import React from 'react';

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
}

const Body: React.FC<Props> = ({ cards }) => {
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
          <MiniBox title="Pontos do rebate" text="20.000 pontos" />
          <MiniBox title="Margem adicional" text="2.000 pontos" />
          <MiniBox title="Premiação de vendedor" text="20.000 pontos" />
        </CustomSimuteBox>
      </CustomSimulateContent>
      <CustomAcumulateContent>
        <TitleBox>
          <h3>Total acumulado</h3>
        </TitleBox>
        <CustomAcumulateBox>
          <MiniBox title="Pontos do rebate" text="100.000 pontos" />
          <MiniBox title="Margem adicional" text="2.000 pontos" />
          <MiniBox title="Premiação de vendedor" text="10.000 pontos" />
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
          <CardComponent
            title="POG"
            description="Realizado 19/20 - US$ 1.333.444"
            tableData={[
              { title: 'Meta 20/21', value: 'US$ 1.333.444' },
              { title: 'Realizado 20/21', value: 'US$ 1.333.444' },
            ]}
            percentageCompleted={80}
            percentageSimulated={90}
          />
        </Cards>
      </CustomIndicatorContainer>
    </Container>
  );
};

export default Body;
