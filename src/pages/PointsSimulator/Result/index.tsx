import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { SaveSimulationDTO } from 'services/points-simulator/interfaces/dtos';
import { saveSimulation } from 'services/points-simulator';

import {
  getIndicators,
  getConfiguration,
  getChannel,
  getPointsSimulatorFullState,
  getAward,
} from 'state/modules/points-simulator/selectors';

import SaveSimulationModal from 'components/PointsSimulator/Commom/Modals/SaveSimulation';
import Header from 'components/PointsSimulator/Result/Header';
import Body, { Card } from 'components/PointsSimulator/Result/Body';
import Footer from 'components/PointsSimulator/Result/Footer';
import { indicatorsToCards } from './transformers';

import { Container, Content } from './styles';

const Result: React.FC = () => {
  const [isSaveSimulatioModalOpened, setIsSaveSimulatioModalOpened] = useState(
    false,
  );
  const [indicatorCards, setIndicatorCards] = useState<Card[]>([]);
  const indicators = useSelector(getIndicators);
  const { partialDate } = useSelector(getConfiguration);
  const channel = useSelector(getChannel);
  const pointsSimulatorState = useSelector(getPointsSimulatorFullState);
  const award = useSelector(getAward);
  const simulatedDate = new Date();

  useEffect(() => {
    setIndicatorCards(indicatorsToCards(indicators));
  }, [indicators]);

  const onSaveSimulation = useCallback(
    async (
      data: Omit<SaveSimulationDTO, 'jsonDataInString'>,
    ): Promise<void> => {
      await saveSimulation({
        ...data,
        jsonDataInString: JSON.stringify(pointsSimulatorState),
      });
    },
    [pointsSimulatorState],
  );

  return (
    <Container id="result">
      <Content>
        {channel && partialDate && (
          <Header
            partialDate={partialDate}
            simulatedDate={simulatedDate}
            channelName={channel.groupName}
          />
        )}
        <Body cards={indicatorCards} award={award} />
        <Footer
          handleSaveSimulationClick={() => setIsSaveSimulatioModalOpened(true)}
        />
      </Content>

      {channel && (
        <SaveSimulationModal
          isOpen={isSaveSimulatioModalOpened}
          onRequestClose={() => setIsSaveSimulatioModalOpened(false)}
          onSave={onSaveSimulation}
          simulationDate={new Date()}
          channel={channel}
        />
      )}
    </Container>
  );
};

export default Result;
