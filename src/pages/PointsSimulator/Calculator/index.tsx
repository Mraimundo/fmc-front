import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Product } from 'state/modules/points-simulator/interfaces';
import {
  getProducts,
  getDollarBaseValue,
  getMode,
} from 'state/modules/points-simulator/selectors';
import * as actions from 'state/modules/points-simulator/actions';
import { getCoinQuotations } from 'state/modules/header/selectors';

import Header, { Tab } from 'components/PointsSimulator/Calculator/Header';
import Table from 'components/PointsSimulator/Calculator/Table';
import Footer from 'components/PointsSimulator/Calculator/Footer';

import { DataValueDTO, Mode } from 'state/modules/points-simulator/types';
import { Container, Content, CustomTableBox, Box } from './styles';

const PointsSimulator: React.FC = () => {
  const coinsQuotation = useSelector(getCoinQuotations);
  const products = useSelector(getProducts);
  const dollarBaseValue = useSelector(getDollarBaseValue);
  const mode = useSelector(getMode);
  const [productsTableData, setProductsTableData] = useState<Product[]>([]);
  const [tabSelected, setTabSelected] = useState<Tab>(Tab.enhancerProductsTab);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      actions.setDollarBaseValue(
        coinsQuotation?.find(item => item.name === 'Dólar Comercial')?.value ||
          0,
      ),
    );
  }, [dispatch, coinsQuotation]);

  useEffect(() => {
    dispatch(actions.fetchChannel(1));
  }, [dispatch]);

  useEffect(() => {
    if (!products) return;
    if (tabSelected === Tab.enhancerProductsTab) {
      setProductsTableData(products.filter(item => !!item.isEnhancer));
      return;
    }

    setProductsTableData(products.filter(item => !item.isEnhancer));
  }, [tabSelected, products]);

  const handleRevenuesValueChange = useCallback(
    (data: DataValueDTO): void => {
      dispatch(actions.setRevenuesValueInKilosPerLiter(data));
    },
    [dispatch],
  );

  const handleUnitValueChange = useCallback(
    (data: DataValueDTO): void => {
      dispatch(actions.setUnitValueInDollar(data));
    },
    [dispatch],
  );

  const handleCalculate = useCallback(() => {
    dispatch(actions.setMode(Mode.result));
  }, [dispatch]);

  const handleReCalculate = useCallback(() => {
    dispatch(actions.setMode(Mode.calculator));
  }, [dispatch]);

  console.log('a');

  return (
    <Container id="calculator">
      <Content>
        <Header tabSelected={tabSelected} setTabSelected={setTabSelected} />
        <CustomTableBox>
          <Box>
            <Table
              products={productsTableData}
              setRevenuesInKilosPerLiter={handleRevenuesValueChange}
              setUnitValueInDollar={handleUnitValueChange}
            />
          </Box>
          <Footer
            dollarBaseValue={dollarBaseValue}
            handleButtonAction={
              mode === Mode.calculator ? handleCalculate : handleReCalculate
            }
          />
        </CustomTableBox>
      </Content>
    </Container>
  );
};

export default PointsSimulator;
