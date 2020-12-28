import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import getNfList from 'services/nf/getAllNotas';
import { EstablishmentTypes } from 'config/constants';
import StatusTable from '../../components/Home/AddNF/StatusTable';
import Details from './Details';
import { AddNF } from 'components/Home';

import routeMap from 'routes/route-map';
import {
  Container,
  Content,
  PageTitle,
  StatusContainer,
  StatusContent,
  StatusItem,
  StatusTitle,
  StatusBox,
  StatusButton,
  NFList,
  NFListInner,
  IconEye,
  IconList,
} from './styles';

interface NFData {
  notas: {
    id: number;
  };
}

const Receipts: React.FC = () => {
  function transformNfStatus(status: any) {
    switch (status) {
      case 0:
        return 'Em análise';
      case 1:
        return 'Liberadas';
      case 2:
        return 'Descredenciada';
      default:
        return status;
    }
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [userType, setUserType] = useState<EstablishmentTypes>(
    EstablishmentTypes.Resale,
  );
  const [nfList, setNfList] = useState<any[]>([]);
  const [receiptId, setReceiptId] = useState<any>('');
  const [nfListLength, setNfListLength] = useState(0);

  function showReceipt(receiptId: number) {
    setReceiptId(receiptId);
    setModalOpen(true);
  }

  function handleCloseModal() {
    console.log('handleCloseModal');
    setModalOpen(false);
  }

  const getNfData = useCallback(() => {
    getNfList().then(data => {
      setNfListLength(data.length);
      setNfList(data);
    });
  }, []);

  useEffect(() => {
    getNfData();
  }, [getNfData]);

  return (
    <Container>
      <Content>
        <Details
          receiptId={receiptId}
          modalOpen={modalOpen}
          closeModalHandler={handleCloseModal}
        />
        <PageTitle>Minhas Notas Fiscais</PageTitle>
        <StatusContainer>
          <StatusContent>
            <StatusItem>
              <StatusTitle>Safra 2021/222???</StatusTitle>
              <StatusBox>
                <p>Creditado na Safra:</p>
                <p>??? FMC Coins</p>
              </StatusBox>
            </StatusItem>
            <StatusItem>
              <StatusTable nfList={nfList} />
            </StatusItem>
            <StatusItem>
              <StatusBox>
                <p>Saldo disponível para resgaste:</p>
                <h2>???? Coins</h2>
                <StatusButton>Resgatar ??</StatusButton>
              </StatusBox>
            </StatusItem>
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
                  <tr key={item.id}>
                    <td>
                      <IconList />
                    </td>
                    <td>
                      <IconEye onClick={() => showReceipt(item.id)} />
                    </td>
                    <td>{transformNfStatus(item.status)}</td>
                    <td>???</td>
                    <td>R${item.total_value}</td>
                    <td>???</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </NFListInner>
        </NFList>

        <AddNF layout="secondary" />
      </Content>
    </Container>
  );
};

export default Receipts;
