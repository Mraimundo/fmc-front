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
  const { participant, simulating } = useAuth();

  useEffect(() => {
    getCampaigns().then(data => setCampaigns(data));
  }, []);

  const getExtractFn = (typeName: string) => {
    return typeName === MYEXTRACT ? getExtract : getExtractEstablishment;
  };

  useEffect(() => {
    setExtractDetails([]);

    const load = async () => {
      const { pathname } = location;
      const { establishment } = participant;
      const extractFn = getExtractFn(pathname);

      setUserType(establishment.type_name);
      setPathKey(pathname);

      const extractDetailsResponse = await Promise.all(
        campaigns.map(campaign => extractFn(campaign.id)),
      );
      setExtractDetails(extractDetailsResponse);
    };

    if (campaigns.length > 0) {
      load();
    }
  }, [campaigns, participant, location]);

  useEffect(() => {
    const { pathname } = location;
    getParticipantsToAccessPI().then(data => {
      if (pathname === MYEXTRACT) {
        setPiAccess(data.find(item => item.type === 'cpf')?.urlPi || '');
        return;
      }
      setPiAccess(data.find(item => item.type === 'cnpj')?.urlPi || '');
    });
  }, [location]);

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
            <div>Voc?? n??o possui pontos para visualizar.</div>
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
            isSimulating={simulating}
          />
        )}
        <ExtractDetails details={extractDetails} />
      </Content>
      {pathKey === routeMap.extract.channel && (
        <ExtractLegend>
          *A????es de Desenvolvimento: ?? a verba reservada para voc?? e seu RTC
          definirem juntos quais as melhores a????es e pr??ticas para ajudar a
          prosperar seu neg??cio
          {userType === EstablishmentTypes.Resale
            ? ' seu neg??cio.'
            : ' a sua cooperativa.'}
        </ExtractLegend>
      )}
    </Container>
  );
};

export default Extract;
