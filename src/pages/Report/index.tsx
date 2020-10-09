import React, { useEffect, useState } from 'react';
import {
  getChannelCampaignPerformanceLink,
  getProductsPerformanceLink,
} from 'services/reports';

import { Container, Content, List, Link } from './styles';

interface Report {
  title: string;
  url: string;
}

const Report: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    const loadLinks = async () => {
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
    };

    loadLinks();
  }, []);

  return (
    <Container>
      <Content>
        <h3>Relatórios</h3>
        <List>
          {reports.map(item => (
            <li>
              <span>{item.title}</span>
              <Link href={item.url} target="_blank">
                Download
              </Link>
            </li>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default Report;
