import React, { useEffect, useState } from 'react';
import {
  getChannelCampaignPerformanceLink,
  getProductsPerformanceLink,
  getAccessLogLink,
} from 'services/dashboard/reports';

import Reports, { Report as IReport } from './Reports';
import Charts from './Charts';

import { Container, Content, TabWrapper, TabsList, Tab } from './styles';

type Tab = 'reports' | 'charts';

const Report: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState<IReport[]>([]);
  const [tabSelected, setTabSelected] = useState<Tab>('charts');

  useEffect(() => {
    const loadLinks = async () => {
      setLoading(true);
      const [
        channelCampaignPerformance,
        productPerformanceLink,
        accessLogLink,
      ] = await Promise.all([
        getChannelCampaignPerformanceLink(),
        getProductsPerformanceLink(),
        getAccessLogLink(),
      ]);

      setReports([
        {
          title: 'Performance Programa',
          url: channelCampaignPerformance,
        },
        {
          title: 'Performance Produtos',
          url: productPerformanceLink,
        },
        {
          title: 'Relatório de Acessos',
          url: accessLogLink,
        },
      ]);

      setLoading(false);
    };

    loadLinks();
  }, []);

  return (
    <Container>
      <Content>
        <TabWrapper>
          <TabsList>
            <Tab
              onClick={() => setTabSelected('charts')}
              active={tabSelected === 'charts'}
            >
              <span>Gráficos</span>
            </Tab>
            <Tab
              onClick={() => setTabSelected('reports')}
              active={tabSelected === 'reports'}
            >
              <span>Relatórios</span>
            </Tab>
          </TabsList>
          {tabSelected === 'reports' ? (
            <Reports data={reports} loading={loading} />
          ) : (
            <Charts />
          )}
        </TabWrapper>
      </Content>
    </Container>
  );
};

export default Report;
