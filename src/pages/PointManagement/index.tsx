import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import {
  CooperativeDistributionPoints,
  CooperativePointsTabContent,
  TeamAwardsTabContent,
  ResumeDistribution,
} from 'components/PointManagement';
import { isReadyToDistribute } from 'state/modules/point-management/common/selectors';

const PointManagement: React.FC = () => {
  const readyToDistribute = useSelector(isReadyToDistribute);

  return (
    <Container>
      <CooperativeDistributionPoints />
      {readyToDistribute && (
        <Tabs>
          <TabList>
            <Tab>PONTOS REVENDA</Tab>
            <Tab>PREMIAÇÃO EQUIPE</Tab>
          </TabList>

          <TabPanel>
            <CooperativePointsTabContent />
          </TabPanel>
          <TabPanel>
            <Row>
              <Col md={8}>
                <TeamAwardsTabContent />
              </Col>
              <Col md={4}>
                <ResumeDistribution />
              </Col>
            </Row>
          </TabPanel>
        </Tabs>
      )}
    </Container>
  );
};

export default PointManagement;
