import React from 'react';

import { Product } from 'state/modules/points-simulator/interfaces';
import { DataValueDTO } from 'state/modules/points-simulator/types';
import Checkbox from '@material-ui/core/Checkbox';
import Input from 'components/PointsSimulator/Calculator/CustomInput';

import { Container, ProductBox, CustomDataBox, CustomInputBox } from './styles';

interface TrProps {
  product: Product;
  setUnitValueInDollar(data: DataValueDTO): void;
  setRevenuesInKilosPerLiter(data: DataValueDTO): void;
}

const Tr: React.FC<TrProps> = ({
  product,
  setUnitValueInDollar,
  setRevenuesInKilosPerLiter,
}) => {
  return (
    <Container participate={product.isParticipatingProduct}>
      <td>
        <Checkbox color="default" />
      </td>
      <td>
        <ProductBox>
          <span>{product.type.name}</span>
          <span>{product.name}</span>
        </ProductBox>
      </td>
      <td>
        <CustomDataBox>
          <span>Objetivo: {product.revenues.goalInDollar || '---'}</span>
          <span>Realizado: {product.revenues.realizedInDollar || '---'}</span>
        </CustomDataBox>
      </td>
      <td>
        <CustomDataBox>
          <span>Objetivo: {product.pog.goalInDollar || '---'}</span>
          <span>Realizado: {product.pog.realizedInDollar || '---'}</span>
        </CustomDataBox>
      </td>
      <td>
        <CustomDataBox>
          <span>{product.stock.inKilosPerLiter || '---'} KG/L</span>
          <span>{product.stock.inDollar || '---'} US$</span>
        </CustomDataBox>
      </td>
      <td>
        <CustomInputBox blocked={false}>
          <Input
            type="money"
            defaultValue={product.simulationData.unitValueInDollar}
            onChange={value =>
              setUnitValueInDollar({
                productId: product.id,
                value,
              })
            }
          />
        </CustomInputBox>
      </td>
      <td>
        <CustomInputBox blocked={false}>
          <Input
            placeholder="0"
            type="kilograma"
            defaultValue={product.simulationData.revenuesInKilosPerLiter}
            onChange={value =>
              setRevenuesInKilosPerLiter({
                productId: product.id,
                value,
              })
            }
          />
        </CustomInputBox>
      </td>
      <td>
        <CustomInputBox blocked>
          <Input
            type="money"
            value={product.simulationData.revenuesInDollar}
            disabled
          />
        </CustomInputBox>
      </td>
      <td>
        <CustomInputBox blocked>
          <Input
            type="money"
            value={product.simulationData.pogInKilosPerLiter}
            disabled
          />
        </CustomInputBox>
      </td>
    </Container>
  );
};

export default Tr;
