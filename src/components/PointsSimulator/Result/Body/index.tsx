import React from 'react';

import MiniBox from '../MiniBox';
import Card from '../Card';
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

const Body: React.FC = () => {
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
          <Card
            title="Faturamento"
            description="Realizado 19/20 - US$ 1.333.444"
            tableData={[
              { title: 'Meta 20/21', value: 'US$ 1.333.444' },
              { title: 'Realizado 20/21', value: 'US$ 1.333.444' },
            ]}
            percentageCompleted={100}
            percentageSimulated={100}
          />
          <Card
            title="POG"
            description="Realizado 19/20 - US$ 1.333.444"
            tableData={[
              { title: 'Meta 20/21', value: 'US$ 1.333.444' },
              { title: 'Realizado 20/21', value: 'US$ 1.333.444' },
            ]}
            percentageCompleted={80}
            percentageSimulated={90}
          />
          <Card
            title={<span>Hero</span>}
            description="Realizado 19/20 - US$ 1.333.444"
            tableData={[
              { title: 'Meta 20/21', value: 'US$ 1.333.444' },
              { title: 'Realizado 20/21', value: 'US$ 1.333.444' },
            ]}
            percentageCompleted={80}
            percentageSimulated={100}
          />
          <Card
            title={<span>Prêmio</span>}
            description="Realizado 19/20 - US$ 1.333.444"
            tableData={[
              { title: 'Meta 20/21', value: 'US$ 1.333.444' },
              { title: 'Realizado 20/21', value: 'US$ 1.333.444' },
            ]}
            percentageCompleted={50}
            percentageSimulated={100}
          />
          <Card
            title={<span>Talisman</span>}
            description="Realizado 19/20 - US$ 1.333.444"
            tableData={[
              { title: 'Meta 20/21', value: 'US$ 1.333.444' },
              { title: 'Realizado 20/21', value: 'US$ 1.333.444' },
            ]}
            percentageCompleted={50}
            percentageSimulated={50}
          />
        </Cards>
      </CustomIndicatorContainer>
    </Container>
  );
};

export default Body;
