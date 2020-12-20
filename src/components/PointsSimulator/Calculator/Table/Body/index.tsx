import React from 'react';

import { Product } from 'state/modules/points-simulator/interfaces';
import { DataValueDTO } from 'state/modules/points-simulator/types';
import Tr from './Tr';
import { Container } from './styles';

interface HeaderProps {
  products: Product[];
  setUnitValueInDollar(data: DataValueDTO): void;
  setRevenuesInKilosPerLiter(data: DataValueDTO): void;
  setPogInKilosPerLiter(data: DataValueDTO): void;
  onCheckUncheckProductHandle({
    id,
    checked,
  }: {
    id: number;
    checked: boolean;
  }): void;
}

const Header: React.FC<HeaderProps> = ({
  products,
  setUnitValueInDollar,
  setRevenuesInKilosPerLiter,
  setPogInKilosPerLiter,
  onCheckUncheckProductHandle,
}) => {
  return (
    <Container>
      {products.map(product => (
        <Tr
          key={product.id}
          product={product}
          setUnitValueInDollar={setUnitValueInDollar}
          setRevenuesInKilosPerLiter={setRevenuesInKilosPerLiter}
          setPogInKilosPerLiter={setPogInKilosPerLiter}
          onCheckUncheckProductHandle={onCheckUncheckProductHandle}
        />
      ))}
    </Container>
  );
};

export default Header;
