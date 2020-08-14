import React, { useState } from 'react';
import { Container } from 'react-grid-system';

import {
  PerformanceTabContent,
  Top10ProductsTabContent,
} from 'components/Goals';
import { Wrapper, TabWrapper, TabsList, Tab } from './styles';

enum Tabs {
  Performance = 'performance',
  Top10Products = 'top-10-products',
}

const Goals: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.Performance);

  return (
    <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Wrapper>
        <TabWrapper>
          <TabsList>
            <Tab
              onClick={() => setActiveTab(Tabs.Performance)}
              active={activeTab === Tabs.Performance}
            >
              PERFORMANCE
            </Tab>
            <Tab
              onClick={() => setActiveTab(Tabs.Top10Products)}
              active={activeTab === Tabs.Top10Products}
            >
              TOP 10 PRODUTOS
            </Tab>
          </TabsList>
          {activeTab === Tabs.Performance && <PerformanceTabContent />}
          {activeTab === Tabs.Top10Products && <Top10ProductsTabContent />}
        </TabWrapper>
      </Wrapper>
    </Container>
  );
};

export default Goals;
