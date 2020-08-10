import React from 'react';

import { Container } from './styles';

interface Props {
  data: {
    imageUrl: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
  };
}

const Header: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <img src={data.imageUrl} alt={data.title} />
      <h3>{data.title}</h3>
      <span>
        Período da campanha de {data.startDate} até {data.endDate}
      </span>
      <p>{data.description}</p>
    </Container>
  );
};

export default Header;
