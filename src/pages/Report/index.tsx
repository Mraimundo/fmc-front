import React, { useEffect, useState } from 'react';
import { getCampaignPerformanceLink } from 'services/reports';

import { Container, Content, List, Link } from './styles';

interface Report {
  title: string;
  url: string;
}

const Report: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    getCampaignPerformanceLink().then(url =>
      setReports(oldReports => [
        ...oldReports,
        {
          title: 'Performance dos meus Canais Indiretos no Programa Juntos FMC',
          url,
        },
      ]),
    );
  }, []);

  return (
    <Container>
      <Content>
        <h3>Relatórios</h3>
        <List>
          {reports.map(item => (
            <li>
              <span>{item.title}</span>
              <Link href={item.url}>Download</Link>
            </li>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default Report;
