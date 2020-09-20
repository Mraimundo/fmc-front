import React from 'react';
import checkIcon from 'assets/images/goals/goals-check-icon.svg';
import uncheckIcon from 'assets/images/goals/goals-times-icon.svg';
import { Performance as IPerformance } from 'services/cockpit/interfaces/channel';

import CircularPerformance from './CircularPerformance';
import {
  Container as CircularContent,
  CircularSectionItem,
} from './CircularPerformance/styles';

import { Container, Content, Row, Item, Title, Details } from './styles';

interface Props {
  performance: IPerformance;
}

const Performance: React.FC<Props> = ({ performance }) => {
  const { revenues, pog, focusProduct, devolutionBelow5Percent } = performance;

  return (
    <Container>
      <h3>Performance</h3>
      <Content>
        <Row>
          <Item>
            <Title>Faturamento</Title>
            <CircularPerformance
              color="#FF4C16"
              percent={revenues.percentage}
            />
            <Details>
              <span>Objetivo: US$ {revenues.formattedGoal}</span>
              <span>Realizado: US$ {revenues.formattedResult}</span>
            </Details>
          </Item>
          <Item>
            <Title>POG</Title>
            <CircularPerformance color="#25CCE1" percent={pog.percentage} />
            <Details>
              <span>Objetivo: US$ {pog.formattedGoal}</span>
              <span>Realizado: US$ {pog.formattedResult}</span>
            </Details>
          </Item>
          <Item>
            <Title>Devolução</Title>
            <CircularContent className="_special">
              <Details>
                <span>{devolutionBelow5Percent ? 'Até' : 'Acima de'} 5%</span>
              </Details>
              <CircularSectionItem>
                {devolutionBelow5Percent ? (
                  <img src={checkIcon} alt="" title="" />
                ) : (
                  <img src={uncheckIcon} alt="" title="" />
                )}
              </CircularSectionItem>
            </CircularContent>
          </Item>
        </Row>
        <Row>
          {focusProduct.map(item => (
            <Item key={`prod-${item.name}`}>
              <Title>
                {item.name}
                <span>®</span>
              </Title>
              <CircularPerformance
                color={item.color}
                percent={item.percentage}
              />
              <Details>
                <span>Objetivo: {item.formattedGoal} L</span>
                <span>Realizado: {item.formattedResult} L</span>
              </Details>
            </Item>
          ))}
        </Row>
      </Content>
    </Container>
  );
};

export default Performance;
