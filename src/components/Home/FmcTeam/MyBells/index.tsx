import React from 'react';
import redBell from 'assets/images/red-bell.png';

import { Container, Content, SummaryContent, SummaryRow } from './styles';

interface Item {
  description: string;
  quantity: number;
}

interface Props {
  bells: Item[];
}

const MyBells: React.FC<Props> = ({ bells }) => {
  return (
    <Container>
      <Content>
        <h3>Safra 20/21</h3>
        <SummaryContent>
          {bells.map(bell => (
            <SummaryRow key={bell.description}>
              <span>{bell.description}</span>
              <div />
              <span>{bell.quantity}</span>
            </SummaryRow>
          ))}
        </SummaryContent>
      </Content>
      <img src={redBell} alt="Red bell" />
    </Container>
  );
};

export default MyBells;
