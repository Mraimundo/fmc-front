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
import routeMap from 'routes/route-map';
import { indicatorsToCards } from './transformers';

import { Container, Content } from './styles';

const Result: React.FC = () => {
  const [isSaveSimulatioModalOpened, setIsSaveSimulatioModalOpened] = useState(
    false,
  );
  const [indicatorCards, setIndicatorCards] = useState<Card[]>([]);
  const indicators = useSelector(getIndicators);
  const configuration = useSelector(getConfiguration);
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

  const handleDownloadPdf = useCallback(() => {
    localStorage.setItem(
      '@Vendavall:pdfData',
      JSON.stringify(pointsSimulatorState),
    );

    const linkClick = document.createElement('a');
    linkClick.href = `${routeMap.pointsSimulator.pdfGeneratorPage}`;

    linkClick.target = '_blank';
    document.body.appendChild(linkClick);
    linkClick.click();
    document.body.removeChild(linkClick);
  }, [pointsSimulatorState]);

  const handleSendByEmail = useCallback(() => {
    localStorage.setItem(
      '@Vendavall:pdfData',
      JSON.stringify(pointsSimulatorState),
    );

    const linkClick = document.createElement('a');
    linkClick.href = `${routeMap.pointsSimulator.pdfGeneratorEmail}`;

    linkClick.target = '_blank';
    document.body.appendChild(linkClick);
    linkClick.click();
    document.body.removeChild(linkClick);
  }, [pointsSimulatorState]);

  return (
    <Container id="result">
      <Content>
        {channel && configuration.partialDate && (
          <Header
            partialDate={configuration.partialDate}
            simulatedDate={simulatedDate}
            channelName={channel.groupName}
          />
        )}
        <Body
          cards={indicatorCards}
          award={award}
          configuration={configuration}
          indicators={indicators}
        />
        <Footer
          handleSaveSimulationClick={() => setIsSaveSimulatioModalOpened(true)}
          handleDownloadPdf={handleDownloadPdf}
          handleSendByEmail={handleSendByEmail}
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
