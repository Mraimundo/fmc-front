import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { EstablishmentTypes } from 'config/constants';
import {
  Campaign,
  ExtractSummary,
  Extract as IExtract,
} from 'services/extract/interfaces';
import { getParticipantsToAccessPI } from 'services/showcase';
import getCampaigns from 'services/extract/getCampaigns';
import getExtract from 'services/extract/getExtract';
import getExtractEstablishment from 'services/extract/getExtractEstablishment';
import ExtractHeader from 'components/Extract/ExtractHeader';
import ExtractDetails from 'components/Extract/ExtractDetails';
import { useAuth } from 'context/AuthContext';

import routeMap from 'routes/route-map';
import {
  Container,
  Content,
  PageTitle,
  ExtractLegend,
  ExtractEmpty,
  StyledLink,
} from './styles';

const MYEXTRACT = '/myextract';

const Extract: React.FC = () => {
  const location = useLocation();
  const [summary, setSummary] = useState<ExtractSummary>();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [extractDetails, setExtractDetails] = useState<IExtract[]>([]);
  const [piAccess, setPiAccess] = useState('');
  const [userType, setUserType] = useState<EstablishmentTypes>(
    EstablishmentTypes.Resale,
  );
  const [pathKey, setPathKey] = useState('');
  const { participant } = useAuth();

  useEffect(() => {
    getCampaigns().then(data => setCampaigns(data));
  }, []);

  const getExtractFn = (typeName: string) => {
    return typeName === MYEXTRACT ? getExtract : getExtractEstablishment;
  };

  useEffect(() => {
    setExtractDetails([]);
    const { pathname } = location;
    if (campaigns.length > 0) {
      const { establishment } = participant;
      const extractFn = getExtractFn(pathname);
      setUserType(establishment.type_name);
      setPathKey(pathname);
      campaigns.map(campaign =>
        extractFn(campaign.id).then(data =>
          setExtractDetails(currentValues => [...currentValues, data]),
        ),
      );
      getParticipantsToAccessPI().then(data => {
        if (pathname === MYEXTRACT) {
          setPiAccess(data.find(item => item.type === 'cpf')?.urlPi || '');
          return;
        }
        setPiAccess(data.find(item => item.type === 'cnpj')?.urlPi || '');
      });
    }
  }, [campaigns, participant, location]);

  useEffect(() => {
    if (extractDetails.length > 0) {
      const sortedExtractDetails = extractDetails.sort((item1, item2) =>
        (item1.statement?.campaign.description || 'a') >
        (item2.statement?.campaign.description || 'a')
          ? 1
          : -1,
      );
      const currentHeaderInfo = sortedExtractDetails[0];
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

  if (!summary) {
    return (
      <Container key={pathKey}>
        <Content>
          <PageTitle>Extrato de Pontos</PageTitle>
          <ExtractEmpty>
            <div>Você não possui pontos para visualizar.</div>
            <StyledLink to="/home">Voltar</StyledLink>
          </ExtractEmpty>
        </Content>
      </Container>
    );
  }

  return (
    <Container key={pathKey}>
      <Content>
        <PageTitle>Extrato de Pontos</PageTitle>
        {summary && (
          <ExtractHeader
            summary={summary}
            userType={userType}
            pathKey={pathKey}
            piAccess={piAccess}
          />
        )}
        <ExtractDetails details={extractDetails} />
      </Content>
      {pathKey === routeMap.extract.channel && (
        <ExtractLegend>
          *Ações de Desenvolvimento: é a verba reservada para você e seu RTC
          definirem juntos quais as melhores ações e práticas para ajudar a
          prosperar seu negócio
          {userType === EstablishmentTypes.Resale
            ? ' seu negócio.'
            : ' a sua cooperativa.'}
        </ExtractLegend>
      )}
    </Container>
  );
};

export default Extract;
