import React, { useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { KAM, RTC, GRV, GRM } from 'config/constants';
import {
  getChannelCampaignPerformanceLink,
  getProductsPerformanceLink,
  getAccessLogLink,
  getParticipantsLogLink,
} from 'services/dashboard/reports';

import Reports, { Report as IReport } from './Reports';
import Charts from './Charts';

import { Container, Content, TabWrapper, TabsList, Tab } from './styles';

type Tab = 'reports' | 'charts';

const RolesToShowTabs = [KAM, RTC, GRV, GRM];

const Report: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState<IReport[]>([]);
  const [tabSelected, setTabSelected] = useState<Tab>('charts');
  const [showTabs, setShowTabs] = useState(false);
  const { participant } = useAuth();

  useEffect(() => {
    if (RolesToShowTabs.includes(participant.profile_value)) {
      setShowTabs(true);
      return;
    }
    setTabSelected('reports');
  }, [participant]);

  useEffect(() => {
    const loadLinks = async () => {
      setLoading(true);
      const [
        channelCampaignPerformance,
        productPerformanceLink,
        accessLogLink,
        participantsLink,
      ] = await Promise.all([
        getChannelCampaignPerformanceLink(),
        getProductsPerformanceLink(),
        getAccessLogLink(),
        getParticipantsLogLink(),
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
        {
          title: 'Relatório de Participantes',
          url: participantsLink,
        },
      ]);

      setLoading(false);
    };

    loadLinks();
  }, []);

  return (
    participant && (
      <Container>
        <Content>
          <TabWrapper>
            {showTabs && (
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
            )}
            {tabSelected === 'reports' ? (
              <Reports data={reports} loading={loading} />
            ) : (
              <Charts />
            )}
          </TabWrapper>
        </Content>
      </Container>
    )
  );
};

export default Report;
