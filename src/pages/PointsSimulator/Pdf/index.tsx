import React, { useCallback, useEffect, useState } from 'react';
import { Product } from 'state/modules/points-simulator/interfaces';

import { useSelector } from 'react-redux';
import {
  getProducts,
  getDollarBaseValue,
} from 'state/modules/points-simulator/selectors';
import Table from 'components/PointsSimulator/Calculator/Table';
import { Tab } from 'components/PointsSimulator/Calculator/Header';
import DollarPanel from 'components/PointsSimulator/Calculator/Footer';
import { Container, Content, Item } from './styles';

import Result from '../Result';

const Pdf = React.forwardRef<HTMLDivElement>((props, ref) => {
  const products = useSelector(getProducts);
  const dollarBaseValue = useSelector(getDollarBaseValue);
  const [enhancerProducts, setEnhancerProducts] = useState<Product[]>([]);
  const [participantProducts, setParticipantProducts] = useState<Product[]>([]);
  const [quantityItemsAdded, setQuantityItemsAdded] = useState(0);

  const isValidProductToPrint = useCallback((product: Product): boolean => {
    const {
      unitValueInDollar,
      revenuesInKilosPerLiter,
      pogInKilosPerLiter,
    } = product.simulationData;
    return (
      unitValueInDollar > 0 &&
      revenuesInKilosPerLiter > 0 &&
      pogInKilosPerLiter > 0
    );
  }, []);

  useEffect(() => {
    if (!products) return;

    const validItems = products.filter(item => isValidProductToPrint(item));

    setEnhancerProducts(validItems.filter(item => item.isEnhancer));

    setParticipantProducts(validItems.filter(item => !item.isEnhancer));

    setQuantityItemsAdded(validItems.length);
  }, [products, isValidProductToPrint]);

  const fn = () => {};
  return (
    <Container ref={ref} id="_container-pdf">
      <Content>
        <Result />
        <DollarPanel
          changeDollarBaseValue={fn}
          dollarBaseValue={dollarBaseValue}
          handleButtonAction={fn}
          buttonActionText=""
          quantityItemsAdded={quantityItemsAdded}
        />
        {enhancerProducts.length > 0 && (
          <>
            <Item>{Tab.enhancerProductsTab}</Item>
            <Table
              products={enhancerProducts}
              setRevenuesInKilosPerLiter={fn}
              setUnitValueInDollar={fn}
              setPogInKilosPerLiter={fn}
              tabSelected={Tab.enhancerProductsTab}
              onCheckUncheckProductHandle={fn}
              channelId="0"
            />
          </>
        )}
        {participantProducts.length > 0 && (
          <>
            <Item>{Tab.participateProductsTab}</Item>
            <Table
              products={participantProducts}
              setRevenuesInKilosPerLiter={fn}
              setUnitValueInDollar={fn}
              setPogInKilosPerLiter={fn}
              tabSelected={Tab.participateProductsTab}
              onCheckUncheckProductHandle={fn}
              channelId="0"
            />
          </>
        )}
      </Content>
    </Container>
  );
});

export default Pdf;
