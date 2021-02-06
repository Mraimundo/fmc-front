import React from 'react';
import { ReactSVG } from 'react-svg';

import goalReachedIcon from 'assets/images/active-bell.svg';
import goalNotReachedIcon from 'assets/images/inactive-bell.svg';

import { Container, Subtitle, Grid, Row } from './styles';

export interface Item {
  description: string;
  goal: number;
  reached: number;
}

interface Props {
  items: Item[];
}

const BellsCard: React.FC<Props> = ({ items }) => {
  return (
    <Container>
      <Subtitle>Realizado/Total</Subtitle>
      <Grid>
        {items.map(item => (
          <Row reached={item.goal === item.reached} key={item.description}>
            <ReactSVG
              src={
                item.goal === item.reached
                  ? goalReachedIcon
                  : goalNotReachedIcon
              }
            />
            <span>{item.description}</span>
            <strong>{`${item.reached} / ${item.goal}`}</strong>
          </Row>
        ))}
      </Grid>
    </Container>
  );
};

export default BellsCard;
