import React, { useEffect, useState } from 'react';

import { Product } from 'state/modules/points-simulator/interfaces';
import { DataValueDTO } from 'state/modules/points-simulator/types';
import Checkbox from '@material-ui/core/Checkbox';
import Input from 'components/PointsSimulator/Calculator/CustomInput';

import { fakeFormatDollars } from 'util/points';
import { Container, ProductBox, CustomDataBox, CustomInputBox } from './styles';

interface TrProps {
  product: Product;
  setUnitValueInDollar(data: DataValueDTO): void;
  setRevenuesInKilosPerLiter(data: DataValueDTO): void;
  setPogInKilosPerLiter(data: DataValueDTO): void;
}

interface ValuesData {
  revenuesGoal: string;
  revenuesRealized: string;
  pogGoal: string;
  pogRealized: string;
  stockInDollar: string;
  stockInKilosByLiter: string;
}

const Tr: React.FC<TrProps> = ({
  product,
  setUnitValueInDollar,
  setRevenuesInKilosPerLiter,
  setPogInKilosPerLiter,
}) => {
  const [valuesData, setValuesData] = useState<ValuesData | null>(null);

  useEffect(() => {
    if (product.isEnhancer) {
      setValuesData({
        revenuesGoal: fakeFormatDollars(
          product.revenues.goalInKilosByLiter,
          0,
          0,
        ),
        revenuesRealized: fakeFormatDollars(
          product.revenues.realizedInKilosByLiter,
          0,
          0,
        ),
        pogGoal: fakeFormatDollars(product.pog.goalInKilosByLiter, 0, 0),
        pogRealized: fakeFormatDollars(
          product.pog.realizedInKilosByLiter,
          0,
          0,
        ),
        stockInDollar: fakeFormatDollars(product.stock.inDollar, 0, 0),
        stockInKilosByLiter: fakeFormatDollars(
          product.stock.inKilosPerLiter,
          0,
          0,
        ),
      });
      return;
    }
    setValuesData({
      revenuesGoal: fakeFormatDollars(product.revenues.goalInDollar, 0, 0),
      revenuesRealized: fakeFormatDollars(
        product.revenues.realizedInDollar,
        0,
        0,
      ),
      pogGoal: fakeFormatDollars(product.pog.goalInDollar, 0, 0),
      pogRealized: fakeFormatDollars(product.pog.realizedInDollar, 0, 0),
      stockInDollar: fakeFormatDollars(product.stock.inDollar, 0, 0),
      stockInKilosByLiter: fakeFormatDollars(
        product.stock.inKilosPerLiter,
        0,
        0,
      ),
    });
  }, [product]);

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
          <span>Objetivo: {valuesData?.revenuesGoal || '---'}</span>
          <span>Realizado: {valuesData?.revenuesRealized || '---'}</span>
        </CustomDataBox>
      </td>
      <td>
        <CustomDataBox>
          <span>Objetivo: {valuesData?.pogGoal || '---'}</span>
          <span>Realizado: {valuesData?.pogRealized || '---'}</span>
        </CustomDataBox>
      </td>
      <td>
        <CustomDataBox>
          <span>{valuesData?.stockInKilosByLiter || '---'} KG/L</span>
          <span>{valuesData?.stockInDollar || '---'} US$</span>
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
        <CustomInputBox blocked={false}>
          <Input
            placeholder="0"
            type="kilograma"
            defaultValue={product.simulationData.pogInKilosPerLiter}
            onChange={value =>
              setPogInKilosPerLiter({ productId: product.id, value })
            }
          />
        </CustomInputBox>
      </td>
    </Container>
  );
};

export default Tr;
