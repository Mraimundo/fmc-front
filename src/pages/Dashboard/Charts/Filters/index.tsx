import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';

import { Client } from 'services/dashboard/charts/transformers';

import { Container, FilterBox } from './styles';

interface Props {
  clients: Client[];
}

const Filters: React.FC<Props> = ({ clients }) => {
  return (
    <Container>
      <FilterBox>
        {clients.map(item => (
          <span key={`checkbox-${item.name}`}>
            <Checkbox color="default" />
            {`${item.name}`}
          </span>
        ))}
      </FilterBox>
    </Container>
  );
};

export default Filters;
