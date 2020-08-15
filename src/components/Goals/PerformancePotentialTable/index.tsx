import React from 'react';

import { List, Item } from './styles';

interface Point {
  name: string;
  value: string;
}

interface PerformancePotentialTableProps {
  potential: string;
  points: Point[];
}
const PerformancePotentialTable: React.FC<PerformancePotentialTableProps> = ({
  potential,
  points,
}) => {
  return (
    <List>
      <Item>
        <span>Potencial (US$)</span>
        <span>US$ {potential}</span>
      </Item>
      {points.map((point: Point) => (
        <Item key={point.name}>
          <span>{point.name}</span>
          <span>R$ {point.value}</span>
        </Item>
      ))}
    </List>
  );
};

export default PerformancePotentialTable;
