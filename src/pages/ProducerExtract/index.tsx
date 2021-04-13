import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import getList from 'services/producer-extract/getAllList';
import getNfList from 'services/nf/getAllNotas';

import StatusTable from './StatusTable';

import ExtractNf from './Extract';
import ListOne from './ListOne';

// import { AddNF } from '../../components/ExtractProducer';

import { EstablishmentTypes } from 'config/constants';
import {
  Campaign,
  ExtractSummary,
  Extract as IExtract,
} from 'services/extract/interfaces';
import { getParticipantsToAccessPI } from 'services/showcase';
import getExtract from 'services/extract/getExtract';

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


interface NFData {
  item: {
    id: number;
  };
}

interface Item {
  FMCCOINS: string;
  data: string;
  descricao: string;
  id: number;
  status: number;
  status_text: string;
  tipoponto: string;
}

interface SafraProps {
  safra: {
    totalsafra: string;
    safra: string;
    item: Item[];
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


  const [List, setList] = useState<any[]>([]);
  const [nfList, setNfList] = useState<SafraProps[]>([]);

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
    function getListData() {
      getList().then(data => {
        const efListEntries = Object.entries(data);
        const trEfListEntries = transformNfEntry(efListEntries);
        setList(trEfListEntries);

        setSafraName(trEfListEntries[0].safra);
        setCoins(trEfListEntries[0].totalsafra);
      });
    }
    getListData();
  }, []);

  useEffect(() => {
    function getNfData() {
      getNfList().then(data => {
        if (data) {
          const efListEntries = Object.entries(data.notas);
          const trEfListEntries = transformNfEntry(efListEntries);
          setNfList(trEfListEntries);
        }
      });
    }
    getNfData();
  }, []);

  useEffect(() => {
    /// getCampaigns().then(data => setCampaigns(data));
    setCampaigns([
      {
        id: 280,
        description: '',
        title: '',
      },
    ]);
  }, []);

  useEffect(() => {
    setExtractDetails([]);

    const load = async () => {
      const { pathname } = location;
      const { establishment } = participant;

      setUserType(establishment.type_name);
      setPathKey(pathname);

      const extractDetailsResponse = await Promise.all(
        campaigns.map(campaign => getExtract(campaign.id)),
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
                  <ExtractNf
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

        {List.map(safra => (
          <ListOne safra={safra} key={safra.safra} />
        ))}

        {/* <AddNF layout="secondary" /> */}
      </Content>
    </Container>
  );
};

export default Extract;
