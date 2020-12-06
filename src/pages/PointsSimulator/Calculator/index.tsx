import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Product } from 'state/modules/points-simulator/interfaces';
import {
  getProducts,
  getDollarBaseValue,
  getMode,
  getChannel,
} from 'state/modules/points-simulator/selectors';
import * as actions from 'state/modules/points-simulator/actions';
import { getCoinQuotations } from 'state/modules/header/selectors';
import {
  loadSimulations,
  deleteSimulation,
} from 'services/points-simulator/index';

import LoadSimulationModal, {
  TableData,
} from 'components/PointsSimulator/Commom/Modals/LoadSimulation';
import Header, { Tab } from 'components/PointsSimulator/Calculator/Header';
import Table from 'components/PointsSimulator/Calculator/Table';
import Footer from 'components/PointsSimulator/Calculator/Footer';

import { DataValueDTO, Mode } from 'state/modules/points-simulator/types';
import { formatDate } from 'util/datetime';
import { Container, Content, CustomTableBox, Box } from './styles';

interface Filter {
  productTypeId?: number;
  isEnhancer: boolean;
}

const PointsSimulator: React.FC = () => {
  const [isLoadSimulatioModalOpened, setIsLoadSimulatioModalOpened] = useState(
    false,
  );
  const [savedSimulations, setSavedSimulations] = useState<TableData[]>([]);
  const coinsQuotation = useSelector(getCoinQuotations);
  const products = useSelector(getProducts);
  const channel = useSelector(getChannel);
  const dollarBaseValue = useSelector(getDollarBaseValue);
  const mode = useSelector(getMode);
  const [productsTableData, setProductsTableData] = useState<Product[]>([]);
  const [tabSelected, setTabSelected] = useState<Tab>(Tab.enhancerProductsTab);
  const [filter, setFilter] = useState<Filter>({ isEnhancer: true });
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoadSimulatioModalOpened) return;
    loadSimulations().then(data =>
      setSavedSimulations(
        data.map(simulation => ({
          id: simulation.id,
          clientGroup: simulation.client_group,
          simulationDate: formatDate(simulation.created),
          simulationName: simulation.name,
          jsonStateInString: simulation.content,
          channelId: simulation.establishment_id,
        })),
      ),
    );
  }, [isLoadSimulatioModalOpened]);

  useEffect(() => {
    dispatch(
      actions.setDollarBaseValue(
        coinsQuotation?.find(item => item.name === 'Dólar Comercial')?.value ||
          0,
      ),
    );
  }, [dispatch, coinsQuotation]);

  useEffect(() => {
    setFilter(oldFilter => ({
      ...oldFilter,
      isEnhancer: tabSelected === Tab.enhancerProductsTab,
    }));
  }, [tabSelected]);

  useEffect(() => {
    if (!products) return;
    setProductsTableData(
      products.filter(
        item =>
          item.isEnhancer === filter.isEnhancer &&
          (!filter.productTypeId || item.type.id === filter.productTypeId),
      ),
    );
  }, [filter, products]);

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

  const handlePogKilosByLiterValueChange = useCallback(
    (data: DataValueDTO): void => {
      dispatch(actions.setPogValueInKilosPerLiter(data));
    },
    [dispatch],
  );

  const handleCalculate = useCallback(() => {
    dispatch(actions.fetchCalculate());
    dispatch(actions.setMode(Mode.result));
  }, [dispatch]);

  const handleReCalculate = useCallback(() => {
    dispatch(actions.setMode(Mode.calculator));
  }, [dispatch]);

  const handleProductTypeSelect = useCallback(
    (productTypeId: number | undefined): void => {
      setFilter(oldFilter => ({ ...oldFilter, productTypeId }));
    },
    [],
  );

  const handleChannelSelect = useCallback(
    (channelSelectId: number): void => {
      dispatch(actions.fetchChannel(channelSelectId));
    },
    [dispatch],
  );

  const onLoadState = useCallback(
    (jsonStateInString: string, channelSelectId: number) => {
      dispatch(actions.fetchChannel(channelSelectId));
      setTimeout(() => {
        dispatch(actions.fetchLoadState(JSON.parse(jsonStateInString)));
      }, 1000);
    },
    [dispatch],
  );

  const onDeleteSimulation = useCallback(async (simulationId: number) => {
    deleteSimulation(simulationId);
  }, []);

  const quantityItemsAdded = useMemo(
    () =>
      products?.filter(
        item =>
          item.simulationData.unitValueInDollar > 0 &&
          item.simulationData.revenuesInKilosPerLiter > 0 &&
          item.simulationData.pogInKilosPerLiter > 0,
      ).length || 0,
    [products],
  );

  return (
    <Container id="calculator">
      <Content>
        <Header
          tabSelected={tabSelected}
          setTabSelected={setTabSelected}
          setProductTypeIdSelected={handleProductTypeSelect}
          setChannelIdSelected={handleChannelSelect}
          handleLoadSimulationClick={() => setIsLoadSimulatioModalOpened(true)}
        />
        {channel && (
          <CustomTableBox>
            <Box>
              <Table
                products={productsTableData}
                setRevenuesInKilosPerLiter={handleRevenuesValueChange}
                setUnitValueInDollar={handleUnitValueChange}
                setPogInKilosPerLiter={handlePogKilosByLiterValueChange}
                tabSelected={tabSelected}
              />
            </Box>
            <Footer
              dollarBaseValue={dollarBaseValue}
              handleButtonAction={
                mode === Mode.calculator ? handleCalculate : handleReCalculate
              }
              buttonActionText={
                mode === Mode.calculator ? 'Calcular' : 'Recalcular'
              }
              quantityItemsAdded={quantityItemsAdded}
            />
          </CustomTableBox>
        )}
      </Content>
      <LoadSimulationModal
        isOpen={isLoadSimulatioModalOpened}
        onRequestClose={() => setIsLoadSimulatioModalOpened(false)}
        tableData={savedSimulations}
        onLoadState={onLoadState}
        onDeleteSimulation={onDeleteSimulation}
      />
    </Container>
  );
};

export default PointsSimulator;
