import React, { useState, useEffect } from 'react';
import {
  Campaign,
  ExtractSummary,
  Extract as IExtract,
} from 'services/extract/interfaces';
import getCampaigns from 'services/extract/getCampaigns';
import getExtract from 'services/extract/getExtract';
import getExtractEstablishment from 'services/extract/getExtractEstablishment';
import ExtractHeader from 'components/Extract/ExtractHeader';
import ExtractDetails from 'components/Extract/ExtractDetails';

import { Container, Content, PageTitle } from './styles';

const Extract: React.FC = () => {
  const [summary, setSummary] = useState<ExtractSummary>();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [extractDetails, setExtractDetails] = useState<IExtract[]>([]);

  useEffect(() => {
    getCampaigns().then(data => setCampaigns(data));
  }, []);

  useEffect(() => {
    if (campaigns.length > 0) {
      campaigns.map(item =>
        getExtractEstablishment(item.id).then(data =>
          setExtractDetails(currentValues => [...currentValues, data]),
        ),
        // getExtract(item.id).then(data =>
        //   setExtractDetails(currentValues => [...currentValues, data]),
        // ),
      );
    }
  }, [campaigns]);

  useEffect(() => {
    if (!summary && extractDetails.length > 0) {
      const currentHeaderInfo = extractDetails[0];
      const headerSummary = {
        balance: {
          available: currentHeaderInfo.balance.available,
          sharedActions: currentHeaderInfo.balance.sharedActions,
        },
        total: currentHeaderInfo.resume.total,
        points: currentHeaderInfo.resume.points,
      };
      setSummary(headerSummary);
    }
  }, [extractDetails, summary]);

  return (
    <Container>
      <Content>
        <PageTitle>Extrato de Pontos</PageTitle>
        {summary && <ExtractHeader summary={summary} />}
        <ExtractDetails details={extractDetails} />
      </Content>
    </Container>
  );
};

export default Extract;
