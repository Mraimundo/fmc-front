import React from 'react';
import redBell from 'assets/images/red-bell.png';

import { Container, Content, SummaryContent, SummaryRow } from './styles';

const MyBells: React.FC = () => {
  return (
    <Container>
      <Content>
        <h3>Safra 20/21</h3>

        <SummaryContent>
          <SummaryRow>
            <span>Gestão</span>
            <div />
            <span>12</span>
          </SummaryRow>

          <SummaryRow>
            <span>Estratégia</span>
            <div />
            <span>8</span>
          </SummaryRow>

          <SummaryRow>
            <span>Engajamento</span>
            <div />
            <span>4</span>
          </SummaryRow>

          <SummaryRow>
            <span>Extra</span>
            <div />
            <span>1</span>
          </SummaryRow>
        </SummaryContent>
      </Content>
      <img src={redBell} alt="Red bell" />
    </Container>
  );
};

export default MyBells;
