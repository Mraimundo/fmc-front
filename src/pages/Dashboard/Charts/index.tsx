import React, { useCallback, useEffect, useMemo, useState } from 'react';

import useDimensions from 'hooks/use-window-dimensions';
import { getChartsData, Data as IData } from 'services/dashboard/charts';
import {
  getCharts,
  getClients,
  Charts as ICharts,
  Client as IClient,
  ChartName,
} from 'services/dashboard/charts/transformers';

import getChart from './getChart';
import Filters from './Filters';
import { Container, Box } from './styles';

type Test = Record<ChartName, () => JSX.Element>;

const Charts: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [already, setAlready] = useState(false);
  const [chartsData, setChartsData] = useState<IData[]>([]);
  const [clients, setClients] = useState<IClient[]>([]);
  const [filteredClients, setFilteredClients] = useState<IClient[]>([]);
  const [charts, setCharts] = useState<ICharts | null>(null);

  useEffect(() => {
    setLoading(true);
    getChartsData()
      .then(data => setChartsData(data))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (chartsData.length === 0) return;

    setLoading(true);

    const filter = filteredClients.length > 0 ? filteredClients : undefined;

    setClients(getClients(chartsData));
    setCharts(getCharts(chartsData, filter));

    setLoading(false);
  }, [chartsData, filteredClients]);

  const drawChart = useMemo(() => {
    setAlready(false);
    const test: Test = {} as Record<ChartName, () => JSX.Element>;
    if (!charts) return test;

    const labels =
      filteredClients.length > 0
        ? filteredClients.map(item => item.name)
        : clients.map(item => item.name);

    Object.keys(charts).forEach(item => {
      const { firstDataBar, secondDataBar, title, thirdDataBar } = charts[
        item as ChartName
      ];

      test[item as ChartName] = () =>
        getChart({
          title,
          labels,
          firstDataBar,
          secondDataBar,
          thirdDataBar,
          showLabel: true, //! !secondDataBar,
          formatType: secondDataBar ? 'uss' : '%',
        });
    });
    setAlready(true);
    return test;
  }, [charts, clients, filteredClients]);

  const onFilter = useCallback((data: IClient[]): void => {
    setFilteredClients(data);
  }, []);

  return (
    <Container>
      {already && (
        <>
          <Filters clients={clients} onFilter={onFilter} />
          <Box>
            <div>{drawChart.billingRealized()}</div>
          </Box>

          <Box>
            <div>{drawChart.pogRealized()}</div>
          </Box>

          <Box>
            <div>{drawChart.premioRealized()}</div>
          </Box>

          <Box>
            <div>{drawChart.heroRealized()}</div>
          </Box>

          <Box>
            <div>{drawChart.talismaRealized()}</div>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Charts;
