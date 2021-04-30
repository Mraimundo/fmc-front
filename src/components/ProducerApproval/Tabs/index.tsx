import React from 'react';

import { Tab, useFarmersContext } from 'pages/ProducerApproval/Context';

import { Container, Item } from './styles';

const Tabs: React.FC = () => {
  const { selectedTab, setTab, summary } = useFarmersContext();

  return (
    <Container>
      <Item
        selected={selectedTab === Tab.waiting}
        onClick={() => setTab(Tab.waiting)}
      >
        <span>Em Aprovação</span>
        {summary && <span>{summary.waiting}</span>}
      </Item>
      <Item
        selected={selectedTab === Tab.approved}
        onClick={() => setTab(Tab.approved)}
      >
        <span>Aprovados</span>
        {summary && <span>{summary.approved}</span>}
      </Item>
      <Item
        selected={selectedTab === Tab.rejected}
        onClick={() => setTab(Tab.rejected)}
      >
        <span>Reprovados</span>
        {summary && <span>{summary.rejected}</span>}
      </Item>
    </Container>
  );
};

export default Tabs;
