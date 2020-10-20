import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { getChartsData, Data as IData } from 'services/dashboard/charts';
import {
  getCharts,
  getClients,
  Charts as ICharts,
  Client as IClient,
  ChartName,
} from 'services/dashboard/charts/transformers';

import { useAuth } from 'context/AuthContext';
import getChart from './getChart';
import Filters from './Filters';
import { Container, Box } from './styles';

type Arr = () => JSX.Element;

const Charts: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [already, setAlready] = useState(false);
  const [chartsData, setChartsData] = useState<IData[]>([]);
  const [clients, setClients] = useState<IClient[]>([]);
  const [filteredClients, setFilteredClients] = useState<IClient[]>([]);
  const [charts, setCharts] = useState<ICharts | null>(null);
  const { participant } = useAuth();

  useEffect(() => {
    if (!participant) return;
    setLoading(true);
    getChartsData(participant.profile_value)
      .then(data => setChartsData(data))
      .finally(() => setLoading(false));
  }, [participant]);

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
    let arr: Arr[] = [];
    if (!charts) return arr;

    const labels =
      filteredClients.length > 0
        ? filteredClients.map(item => item.name)
        : clients.map(item => item.name);

    arr = Object.keys(charts).map(item => {
      const { dataset, title } = charts[item as ChartName];

      return () =>
        getChart({
          title,
          labels,
          datasets: dataset.map(_item => ({
            data: _item.data,
            backgroundColor: _item.backgroundColor,
            borderColor: _item.borderColor,
            borderWidth: _item.borderWidth,
            label: _item.label,
            visible: _item.visible,
          })),
          showLabel: true,
        });
    });

    setAlready(true);

    return arr;
  }, [charts, clients, filteredClients]);

  const onFilter = useCallback((data: IClient[]): void => {
    setFilteredClients(data);
  }, []);

  return (
    <Container>
      <Filters clients={clients} onFilter={onFilter} />
      {!loading && already && (
        <>
          {drawChart.map(item => (
            <Box>{item()}</Box>
          ))}
        </>
      )}
    </Container>
  );
};

export default Charts;
