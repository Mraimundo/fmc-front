import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import getList from 'services/producer-extract/getAllList';


import StatusTable from './StatusTable';

import ExtractEf from './ExtractProducer';
import ListOne from './ListOne';
import ListTwo from './ListTwo';

// import { AddNF } from '../../components/ExtractProducer';

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

import { useAuth } from 'context/AuthContext';

import {
  Container,
  Content,
  PageTitle,
  StatusContainer,
  StatusContent,
  StatusItem,
  StatusTitle,
  StatusBox,
  TotalCoins,
} from './styles';

const MYEXTRACT = '/myextract';

interface NFData {
  notas: {
    id: number;
  };
}

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

  const getExtractFn = (typeName: string) => {
    return typeName === MYEXTRACT ? getExtract : getExtractEstablishment;
  };

  const [nfList, setNfList] = useState<any[]>([]);
  const [coins, setCoins] = useState(0);
  const [safraName, setSafraName] = useState('');

  function transformNfEntry(entries: any) {
    const transformedEntries: any = [];
    entries.forEach((entry: any[]) => {
      transformedEntries.push(entry[1]);
    });
    return transformedEntries;
  }

  useEffect(() => {
    function getNfData() {
      getList().then(data => {
        const efListEntries = Object.entries(data);
        const trEfListEntries = transformNfEntry(efListEntries);
        setNfList(trEfListEntries);

        setSafraName(trEfListEntries[0].safra);
        setCoins(trEfListEntries[0].totalsafra);
      });
    }
    getNfData();
  }, []);


  useEffect(() => {
    getCampaigns().then(data => setCampaigns(data));
  }, []);

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
    getParticipantsToAccessPI().then(data => {
      setPiAccess(data.find(item => item.type === 'cpf')?.urlPi || '');
      return;
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

  return (
    <Container>
      <Content>
        <PageTitle>Minhas Notas Fiscais</PageTitle>
        <StatusContainer>
          <StatusContent>
            <StatusItem>
              <StatusTitle> Safra: {safraName} </StatusTitle>
              <StatusBox>
                <TotalCoins>
                  <h3>Creditado na Safra:</h3>
                  <h4> {coins} FMC Coins</h4>
                </TotalCoins>
              </StatusBox>
            </StatusItem>
            <StatusItem>
              <StatusTable nfList={nfList} display="2" />
            </StatusItem>
            <StatusItem>
              <StatusBox>
                {summary && (
                  <ExtractEf
                    summary={summary}
                    userType={userType}
                    pathKey={pathKey}
                    piAccess={piAccess}
                    isSimulating={simulating}
                  />
                )}
              </StatusBox>
            </StatusItem>
          </StatusContent>
        </StatusContainer>

        {nfList.map(safra => (
          <ListOne safra={safra} key={safra.safra} />
        ))}

        {nfList.map(safra => (
          <ListTwo safra={safra} key={safra.safra} />
        ))}

        {/* <AddNF layout="secondary" /> */}
      </Content>
    </Container>
  );
};

export default Extract;
