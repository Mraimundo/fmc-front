import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Option } from 'components/shared/Select';

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

// import { fixedPrecisionOf } from 'util/numbers';
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
  const products = useSelector(getProducts);
  const channel = useSelector(getChannel);
  const dollarBaseValue = useSelector(getDollarBaseValue);
  const mode = useSelector(getMode);
  const [productsTableData, setProductsTableData] = useState<Product[]>([]);
  const [tabSelected, setTabSelected] = useState<Tab>(Tab.enhancerProductsTab);
  const [filter, setFilter] = useState<Filter>({ isEnhancer: true });
  const [channelSelected, setChannelSelected] = useState<Option | null>(null);
  const [shouldUpdateChannel, setShouldUpdateChannel] = useState(true);
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

  // useEffect(() => {
  //   const dollarValue = fixedPrecisionOf(
  //     coinsQuotation?.find(item => item.name === 'Dólar Comercial')?.value || 0,
  //     2,
  //   );
  //   dispatch(actions.setDollarBaseValue(dollarValue));
  // }, [dispatch, coinsQuotation]);

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
    (
      jsonStateInString: string,
      channelSelectId: number,
      clientGroup: string,
    ) => {
      // dispatch(actions.fetchChannel(channelSelectId));
      setShouldUpdateChannel(false);
      setChannelSelected({
        value: channelSelectId.toString(),
        title: clientGroup,
      });

      dispatch(actions.fetchLoadState(JSON.parse(jsonStateInString)));

      setTimeout(() => {
        setShouldUpdateChannel(true);
      }, 3500);
    },
    [dispatch],
  );

  const onDeleteSimulation = useCallback(async (simulationId: number) => {
    deleteSimulation(simulationId);
  }, []);

  const quantityItemsAdded = useMemo(
    () => products?.filter(item => item.checked).length || 0,
    [products],
  );

  const changeDollarValue = useCallback(
    (dollarValue: number) => {
      dispatch(actions.setDollarBaseValue(dollarValue));
    },
    [dispatch],
  );

  const onCheckUncheckProductHandle = useCallback(
    ({ id, checked }: { id: number; checked: boolean }) => {
      dispatch(actions.setProductCheck({ checked, productId: id }));
    },
    [dispatch],
  );

  useEffect(() => {
    if (!channelSelected) return;
    if (shouldUpdateChannel) {
      const channelSelectedId = parseInt(channelSelected.value, 0);
      if (channel?.id !== channelSelectedId) {
        handleChannelSelect(channelSelectedId);
      }
    }
  }, [channelSelected, handleChannelSelect, shouldUpdateChannel, channel]);

  return (
    <Container id="calculator">
      <Content>
        <Header
          tabSelected={tabSelected}
          setTabSelected={setTabSelected}
          setProductTypeIdSelected={handleProductTypeSelect}
          handleLoadSimulationClick={() => setIsLoadSimulatioModalOpened(true)}
          channelSelected={channelSelected}
          setChannelSelected={setChannelSelected}
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
                onCheckUncheckProductHandle={onCheckUncheckProductHandle}
                channelId={channelSelected?.value || '0'}
              />
            </Box>
            <Footer
              changeDollarBaseValue={changeDollarValue}
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
