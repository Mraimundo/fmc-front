import React, { useCallback, useEffect, useState } from 'react';

import { Product } from 'state/modules/points-simulator/interfaces';
import { DataValueDTO } from 'state/modules/points-simulator/types';
import Checkbox from '@material-ui/core/Checkbox';
import Input from 'components/PointsSimulator/Calculator/CustomInput';

import { fakeFormatDollars } from 'util/points';
import { Container, ProductBox, CustomDataBox, CustomInputBox } from './styles';

import { RiRegisteredLine } from "react-icons/ri";

interface TrProps {
  product: Product;
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
  channelId: string;
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
  onCheckUncheckProductHandle,
  channelId,
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

  const setChecked = useCallback(
    (currentProduct: Product) => {
      const shouldCheck =
        currentProduct.simulationData.unitValueInDollar > 0 &&
        currentProduct.simulationData.revenuesInKilosPerLiter > 0 &&
        currentProduct.simulationData.pogInKilosPerLiter > 0;
      if (shouldCheck && !currentProduct.checked) {
        onCheckUncheckProductHandle({
          id: currentProduct.id,
          checked: shouldCheck,
        });
      }
    },
    [onCheckUncheckProductHandle],
  );

  const handleChangeFieldValue = useCallback(
    (
      fieldName:
        | 'pogInKilosPerLiter'
        | 'unitValueInDollar'
        | 'revenuesInKilosPerLiter',
      currentProduct: Product,
      value: number,
    ) => {
      switch (fieldName) {
        case 'pogInKilosPerLiter':
          setPogInKilosPerLiter({ productId: currentProduct.id, value });
          break;
        case 'unitValueInDollar':
          setUnitValueInDollar({ productId: currentProduct.id, value });
          break;
        case 'revenuesInKilosPerLiter':
          setRevenuesInKilosPerLiter({ productId: currentProduct.id, value });
          break;
        default:
          break;
      }
      setChecked({
        ...currentProduct,
        simulationData: {
          ...currentProduct.simulationData,
          [fieldName]: value,
        },
      });
    },
    [
      setPogInKilosPerLiter,
      setUnitValueInDollar,
      setRevenuesInKilosPerLiter,
      setChecked,
    ],
  );

  let pogTimeout = 0;
  let unitDollarValueTimeout = 0;
  let revenuesTimeout = 0;

  return (
    <Container participate={product.isParticipatingProduct}>
      <div>
        <Checkbox
          color="default"
          checked={product.checked}
          onChange={() =>
            onCheckUncheckProductHandle({
              id: product.id,
              checked: !product.checked,
            })
          }
        />
      </div>
      <div>
        <ProductBox>
          <span>{product.type.name}</span>
          <span>{product.name}{product.isEnhancer && <RiRegisteredLine size={12}/>}</span>
        </ProductBox>
      </div>
      <div>
        <CustomDataBox>
          <span>Objetivo: {valuesData?.revenuesGoal || '---'}</span>
          <span>Realizado: {valuesData?.revenuesRealized || '---'}</span>
        </CustomDataBox>
      </div>
      <div>
        <CustomDataBox>
          <span>Objetivo: {valuesData?.pogGoal || '---'}</span>
          <span>Realizado: {valuesData?.pogRealized || '---'}</span>
        </CustomDataBox>
      </div>
      <div>
        <CustomDataBox>
          <span>{valuesData?.stockInKilosByLiter || '---'} KG/L</span>
          <span>{valuesData?.stockInDollar || '---'} US$</span>
        </CustomDataBox>
      </div>
      <div>
        <CustomInputBox blocked={false}>
          <Input
            type="money"
            key={`input-unit-${channelId}-${product.id}`}
            defaultValue={product.simulationData.unitValueInDollar}
            onChange={value => {
              clearTimeout(unitDollarValueTimeout);
              unitDollarValueTimeout = setTimeout(() => {
                handleChangeFieldValue('unitValueInDollar', product, value);
              }, 200);
            }}
          />
        </CustomInputBox>
      </div>
      <div>
        <CustomInputBox blocked={false}>
          <Input
            placeholder="0"
            type="kilograma"
            defaultValue={product.simulationData.revenuesInKilosPerLiter}
            onChange={value => {
              clearTimeout(revenuesTimeout);
              revenuesTimeout = setTimeout(() => {
                handleChangeFieldValue(
                  'revenuesInKilosPerLiter',
                  product,
                  value,
                );
              }, 400);
            }}
          />
        </CustomInputBox>
      </div>
      <div>
        <CustomInputBox blocked>
          <Input
            type="money"
            value={product.simulationData.revenuesInDollar}
            disabled
          />
        </CustomInputBox>
      </div>
      <div>
        <CustomInputBox blocked={false}>
          <Input
            placeholder="0"
            type="kilograma"
            defaultValue={product.simulationData.pogInKilosPerLiter}
            onChange={value => {
              clearTimeout(pogTimeout);
              pogTimeout = setTimeout(() => {
                handleChangeFieldValue('pogInKilosPerLiter', product, value);
              }, 600);
            }}
            maxLength={
              (product.stock.inKilosPerLiter || 0) >= 0
                ? ((product.stock.inKilosPerLiter || 0) +
                    (product.simulationData.revenuesInKilosPerLiter || 0)) /
                  100
                : null
            }
          />
        </CustomInputBox>
      </div>
    </Container>
  );
};

export default Tr;
