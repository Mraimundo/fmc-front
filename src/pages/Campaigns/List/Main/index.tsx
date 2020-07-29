import React from 'react';

import Resume from './Resume';
import Filters from './Filters';
import Table from './Table';

import { Separator } from './Filters/styles';
import { Container, Content } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Content>
        <Resume />
        <Filters />
        <Separator />
        <Table />
      </Content>
    </Container>
  );
};

export default Main;
