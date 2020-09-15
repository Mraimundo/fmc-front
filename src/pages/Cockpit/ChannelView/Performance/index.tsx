import React from 'react';
import checkIcon from 'assets/images/goals/goals-check-icon.svg';

import CircularPerformance from './CircularPerformance';
import {
  Container as CircularContent,
  CircularSectionItem,
} from './CircularPerformance/styles';

import { Container, Content, Row, Item, Title, Details } from './styles';

const Performance: React.FC = () => {
  return (
    <Container>
      <h3>Performance</h3>
      <Content>
        <Row>
          <Item>
            <Title>Faturamento</Title>
            <CircularPerformance color="#FF4C16" percent={50} />
            <Details>
              <span>Objetivo: US$ 1.000.000,00</span>
              <span>Realizado: US$ 500.000,00</span>
            </Details>
          </Item>
          <Item>
            <Title>POG</Title>
            <CircularPerformance color="#25CCE1" percent={50} />
            <Details>
              <span>Objetivo: US$ 1.000.000,00</span>
              <span>Realizado: US$ 500.000,00</span>
            </Details>
          </Item>
          <Item>
            <Title>Devolução</Title>
            <CircularContent className="_special">
              <Details>
                <span>Abaixo dos 5%</span>
              </Details>
              <CircularSectionItem>
                <img src={checkIcon} alt="" title="" />
              </CircularSectionItem>
            </CircularContent>
          </Item>
        </Row>
        <Row>
          <Item>
            <Title>Produto 1</Title>
            <CircularPerformance color="#47C246" percent={25} />
            <Details>
              <span>Objetivo: US$ 1.000.000,00</span>
              <span>Realizado: US$ 500.000,00</span>
            </Details>
          </Item>
          <Item>
            <Title>Produto 2</Title>
            <CircularPerformance color="#913944" percent={50} />
            <Details>
              <span>Objetivo: US$ 1.000.000,00</span>
              <span>Realizado: US$ 500.000,00</span>
            </Details>
          </Item>
          <Item>
            <Title>Produto 3</Title>
            <CircularPerformance color="#838BC5" percent={75} />
            <Details>
              <span>Objetivo: US$ 1.000.000,00</span>
              <span>Realizado: US$ 500.000,00</span>
            </Details>
          </Item>
        </Row>
      </Content>
    </Container>
  );
};

export default Performance;
