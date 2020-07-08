import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Button from 'components/shared/Button';
import {
  CooperativeDistributionPoints,
  ResalePointsTabContent,
  TeamAwardsTabContent,
} from 'components/PointManagement';
import {
  getPointsToDistribute,
  getBalanceAvailable,
  getDistributeEqually,
} from 'state/modules/point-management/team-awards/selectors';
import {
  setPointsToDistribute,
  toggleDistributeEqually,
} from 'state/modules/point-management/team-awards/actions';

const PointManagement: React.FC = () => {
  const dispatch = useDispatch();
  const pointsToDistribute = useSelector(getPointsToDistribute);
  const availablePoints = useSelector(getBalanceAvailable);
  const distributeEqually = useSelector(getDistributeEqually);

  return (
    <Container>
      <CooperativeDistributionPoints
        handleDistributePoints={() => {}}
        totalPointsToDistrute={20}
      />
      <Row>
        <Col md={8}>
          <Tabs>
            <TabList>
              <Tab>PONTOS REVENDA</Tab>
              <Tab>PREMIAÇÃO EQUIPE</Tab>
            </TabList>

            <TabPanel>
              <ResalePointsTabContent />
            </TabPanel>
            <TabPanel>
              <TeamAwardsTabContent />
            </TabPanel>
          </Tabs>
        </Col>
        <Col md={4}>
          <h1>2. Digite a quantidade de pontos que deseja distribuir</h1>
          <input
            type="text"
            value={pointsToDistribute || ''}
            onChange={e => {
              dispatch(setPointsToDistribute(e.target.value));
            }}
          />
          <h3>Saldo disponível: {availablePoints} pontos</h3>
          <label htmlFor="check">
            <input
              type="checkbox"
              id="check"
              checked={distributeEqually}
              onChange={() => dispatch(toggleDistributeEqually())}
            />{' '}
            Distribuir igualmente
          </label>
          <Button buttonRole="tertiary" type="button">
            ATRIBUIR PONTOS
          </Button>
          <Button buttonRole="tertiary" type="button">
            DISTRIBUIR PREMIAÇÃO
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PointManagement;
