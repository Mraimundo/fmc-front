import React, { useEffect, useState } from 'react';
import {
  getChannelCampaignPerformanceLink,
  getProductsPerformanceLink,
} from 'services/reports';

import Reports, { Report as IReport } from './Reports';
import Charts from './Charts';

import { Container, Content } from './styles';

type Tab = 'reports' | 'charts';

const Report: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState<IReport[]>([]);
  const [tabSelected, setTabSelected] = useState<Tab>('reports');

  useEffect(() => {
    const loadLinks = async () => {
      setLoading(true);
      const [
        channelCampaignPerformance,
        productPerformanceLink,
      ] = await Promise.all([
        getChannelCampaignPerformanceLink(),
        getProductsPerformanceLink(),
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
      ]);

      setLoading(false);
    };

    loadLinks();
  }, []);

  return (
    <Container>
      <Content>
        <h3 onClick={() => setTabSelected('reports')}>Relatórios</h3>
        <h3 onClick={() => setTabSelected('charts')}>Gráficos</h3>
        {tabSelected === 'reports' ? (
          <Reports data={reports} loading={loading} />
        ) : (
          <Charts />
        )}
      </Content>
    </Container>
  );
};

export default Report;
