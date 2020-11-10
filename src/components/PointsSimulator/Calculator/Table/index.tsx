import React from 'react';

import { Product } from 'state/modules/points-simulator/interfaces';
import { DataValueDTO } from 'state/modules/points-simulator/types';
import { Tab } from '../Header';
import Header from './Header';
import Body from './Body';
import { Container } from './styles';

interface TableProps {
  products: Product[];
  setUnitValueInDollar(data: DataValueDTO): void;
  setRevenuesInKilosPerLiter(data: DataValueDTO): void;
  tabSelected: Tab;
}

const Table: React.FC<TableProps> = ({
  products,
  setUnitValueInDollar,
  setRevenuesInKilosPerLiter,
  tabSelected,
}) => {
  return (
    <Container>
      <Header tabSelected={tabSelected} />
      <Body
        products={products}
        setUnitValueInDollar={setUnitValueInDollar}
        setRevenuesInKilosPerLiter={setRevenuesInKilosPerLiter}
      />
    </Container>
  );
};

export default Table;
