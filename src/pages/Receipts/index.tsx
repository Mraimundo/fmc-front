import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import getNfList from 'services/nf/getAllNotas';
import { EstablishmentTypes } from 'config/constants';
import StatusTable from '../../components/Home/AddNF/StatusTable';

import {
  Campaign,
  ExtractSummary,
  Extract as IExtract,
} from 'services/extract/interfaces';
import { AddNF } from 'components/Home';

import routeMap from 'routes/route-map';
import {
  Container,
  Content,
  PageTitle,
  ExtractLegend,
  ExtractEmpty,
  StyledLink,
  StatusContainer,
  StatusContent,
  StatusItem,
  StatusTitle,
  StatusBox,
  StatusButton,
  NFList,
  NFListInner,
} from './styles';

const MYEXTRACT = '/myextract';

interface Nf {
  notas: {
    id: number;
    participant_id: number;
    urlnota: string;
    status: number;
    invoice_cnpj: string;
  }[];
}

const Receipts: React.FC = () => {
  const [summary, setSummary] = useState<ExtractSummary>();
  const [userType, setUserType] = useState<EstablishmentTypes>(
    EstablishmentTypes.Resale,
  );
  const [nfList, setNfList] = useState<Nf[]>([]);
  const [nfListLength, setNfListLength] = useState(0);
  console.log(nfList);
  const getNfData = useCallback(() => {
    getNfList().then(data => {
      setNfListLength(data.length);
      setNfList(data);
    });
  }, []);

  useEffect(() => {
    getNfData();
  }, [getNfData]);

  if (!summary) {
    return (
      <Container>
        <Content>
          <PageTitle>Minhas Notas Fiscais</PageTitle>
          <StatusContainer>
            <StatusContent>
              <StatusItem>
                <StatusTitle>Safra 2021/222</StatusTitle>
                <StatusBox>
                  <p>Creditado na Safra:</p>
                  <p>1000 FMC Coins</p>
                </StatusBox>
              </StatusItem>
              <StatusItem>
                <StatusTable nfListLength={nfListLength} />
              </StatusItem>
              <StatusItem>
                <StatusBox>
                  <p>Saldo disponível para resgaste:</p>
                  <h2>1.070 FMC Coins</h2>
                  <StatusButton>Resgatar</StatusButton>
                </StatusBox>
              </StatusItem>
              {/*  <ExtractEmpty>
                <div>Você não possui notas para visualizar.</div>
                <StyledLink to="/home">Voltar</StyledLink>
              </ExtractEmpty> */}
            </StatusContent>
          </StatusContainer>

          <NFList>
            <NFListInner>
              <table>
                <thead>
                  <tr>
                    <th>Nota</th>
                    <th>Detalhes</th>
                    <th>Status</th>
                    <th>Canal onde comprou</th>
                    <th>Vamos de produtos FMC</th>
                    <th>FMC Coins</th>
                  </tr>
                </thead>
                <tbody>
                  {nfList.map(item => (
                    <tr key={`key-nf-${item}`}>
                      <td> {item.id} </td>
                      <td>eye</td>
                      <td>Liberada</td>
                      <td>Agro Amazônia</td>
                      <td>R$440</td>
                      <td>440</td>
                    </tr>
                  ))}
                  <tr>
                    <td>L</td>
                    <td>eye</td>
                    <td>Liberada</td>
                    <td>Agro Amazônia</td>
                    <td>R$440</td>
                    <td>440</td>
                  </tr>
                </tbody>
              </table>
            </NFListInner>
          </NFList>

          <AddNF />
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        <PageTitle> Minhas Notas Fiscais</PageTitle>
      </Content>
    </Container>
  );
};

export default Receipts;
