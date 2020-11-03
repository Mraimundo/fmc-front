import React, { ReactNode } from 'react';

import { Container, StyledPercentageBar } from './styles';

interface Item {
  title: string;
  value: string;
}

interface Props {
  title: string | ReactNode;
  description: string;
  tableData: Item[];
  percentageCompleted: number;
}

const Card: React.FC<Props> = ({
  title,
  description,
  tableData,
  percentageCompleted,
}) => {
  return (
    <Container>
      <h3>{title}</h3>
      <span>{description}</span>
      <ul>
        {tableData.map(item => (
          <li key={item.title}>
            <span>{item.title}</span>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
      <StyledPercentageBar completed={percentageCompleted} />
    </Container>
  );
};

export default Card;
