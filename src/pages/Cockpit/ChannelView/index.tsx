import React, { useCallback, useState } from 'react';

import {
  Statistics as IStatistics,
  Performance as IPerformance,
  Points as IPoints,
} from 'services/cockpit/interfaces/channel';
import getChannelStatistics from 'services/cockpit/getChannelStatistics';
import getChannelPerformance from 'services/cockpit/getChannelPerformance';
import getChannelPoints from 'services/cockpit/getChannelPoints';
import Filters from './Filters';

import Statistics from './Statistics';
import Performance from './Performance';
import Points from './Points';

import { Container } from './styles';

const ChannelView: React.FC = () => {
  const [statistics, setStatistics] = useState<IStatistics | null>(null);
  const [performance, setPerformance] = useState<IPerformance | null>(null);
  const [points, setPoints] = useState<IPoints | null>(null);

  const onFilter = useCallback(async (establishmentId: number): Promise<
    void
  > => {
    getChannelStatistics(establishmentId).then(data =>
      setStatistics(data || null),
    );
    getChannelPerformance(establishmentId).then(data =>
      setPerformance(data || null),
    );
    getChannelPoints(establishmentId).then(data => setPoints(data || null));
  }, []);

  const clear = useCallback((): void => {
    setStatistics(null);
    setPerformance(null);
    setPoints(null);
  }, []);

  return (
    <Container>
      <h3>Visão por canal</h3>
      <Filters onFilter={onFilter} clear={clear} />
      {statistics && <Statistics statistics={statistics} />}
      {performance && <Performance performance={performance} />}
      {points && <Points points={points} />}
    </Container>
  );
};

export default ChannelView;
