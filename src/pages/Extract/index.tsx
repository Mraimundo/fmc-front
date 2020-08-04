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
import { Container, Content, PageTitle, ExtractLegend } from './styles';

const Extract: React.FC = () => {
  const location = useLocation();
  const [summary, setSummary] = useState<ExtractSummary>();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [extractDetails, setExtractDetails] = useState<IExtract[]>([]);
  const [userType, setUserType] = useState<EstablishmentType>('Revenda');
  const { participant } = useAuth();

  const [key, setKey] = useState('Revenda');

  useEffect(() => {
    getCampaigns().then(data => setCampaigns(data));
  }, []);

  const getExtractFn = (typeName: string) => {
    return typeName === '/myextract' ? getExtract : getExtractEstablishment;
  };

  useEffect(() => {
    setExtractDetails([]);
    const { pathname } = location;
    if (campaigns.length > 0) {
      const { establishment } = participant;
      const extractFn = getExtractFn(pathname);
      setUserType(establishment.type_name);
      setKey(pathname);

      campaigns.map(campaign =>
        extractFn(campaign.id).then(data =>
          setExtractDetails(currentValues => [...currentValues, data]),
        ),
      );
    }
  }, [campaigns, participant, location]);

  useEffect(() => {
    if (extractDetails.length > 0) {
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
  }, [extractDetails]);

  return (
    <Container key={key}>
      <Content>
        <PageTitle>Extrato de Pontos</PageTitle>
        {summary && <ExtractHeader summary={summary} userType={userType} />}
        <ExtractDetails details={extractDetails} />
      </Content>
      <ExtractLegend>
        *Ações Compartilhadas: é a verba reservada para você e seu RTC/KAM
        definirem juntos quais as melhores ações e práticas para ajudar a
        prosperar
        {userType === 'Revenda' ? ` seu negócio` : ' a sua cooperativa.'}.
      </ExtractLegend>
    </Container>
  );
};

export default Extract;
