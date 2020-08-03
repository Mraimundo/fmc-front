import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import { useAuth } from 'context/AuthContext';

import { EstablishmentType } from 'state/modules/point-management/common/types';
import { Container, Content, PageTitle } from './styles';

const Extract: React.FC = () => {
  const location = useLocation();
  const [summary, setSummary] = useState<ExtractSummary>();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [extractDetails, setExtractDetails] = useState<IExtract[]>([]);
  const [userType, setUserType] = useState<EstablishmentType>('Revenda');
  const { participant } = useAuth();

  useEffect(() => {
    getCampaigns().then(data => setCampaigns(data));
  }, []);

  const getExtractFn = (typeName: string) => {
    console.log(typeName);
    return typeName === '/myextract' ? getExtract : getExtractEstablishment;
  };

  useEffect(() => {
    const { pathname } = location;
    if (campaigns.length > 0) {
      const { establishment } = participant;
      const extractFn = getExtractFn(pathname);
      setUserType(establishment.type_name);
      campaigns.map(campaign =>
        extractFn(campaign.id).then(data =>
          setExtractDetails(currentValues => [...currentValues, data]),
        ),
      );
    }
  }, [campaigns, participant, location]);

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
        {summary && <ExtractHeader summary={summary} userType={userType} />}
        <ExtractDetails details={extractDetails} />
      </Content>
    </Container>
  );
};

export default Extract;
