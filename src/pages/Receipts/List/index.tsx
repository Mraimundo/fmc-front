import React, { useState } from 'react';

import {
  Container,
  Content,
  Header,
  Toggle,
  ListTable,
  ListTableContainer,
} from './styles';
import { IconEye, IconList } from '../styles';
import Details from '../Details';
interface Props {
  safra: {
    totalsafra: any;
    safra: string;
    item: any[];
  };
}

const List: React.FC<Props> = Props => {
  const [modalOpen, setModalOpen] = useState(false);
  const [receiptId, setReceiptId] = useState<any>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function showReceipt(receiptId: number) {
    setReceiptId(receiptId);
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

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

  return (
    <Container>
      <Details
        receiptId={receiptId}
        modalOpen={modalOpen}
        closeModalHandler={handleCloseModal}
      />

      <Content>
        <Header>
          <div>
            <h3>Safra</h3>
            <h4>{Props.safra.safra}</h4>
          </div>
          <span></span>
          <div>
            <h3>Total</h3>
            <h4> {Props.safra.totalsafra} FMC Coins</h4>
          </div>
        </Header>
        {isOpen && (
          <ListTableContainer>
            <ListTable>
              <thead>
                <tr>
                  <th>Nota</th>
                  <th>Detalhes</th>
                  <th>Status</th>
                  <th>Canal onde comprou</th>
                  <th>Valor de produtos FMC</th>
                  <th>FMC Coins</th>
                </tr>
              </thead>

              <tbody>
                {Props.safra.item.map(
                  (item: {
                    id: number;
                    urlnota: string | undefined;
                    status_id: number;
                    ondecomprou: React.ReactNode;
                    totalvalue: React.ReactNode;
                    FMCCOINS: React.ReactNode;
                  }) => (
                    <tr key={item.id}>
                      <td>
                        <a
                          href={item.urlnota}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconList />
                        </a>
                      </td>
                      <td>
                        {item.status_id === 1 && (
                          <IconEye onClick={() => showReceipt(item.id)} />
                        )}
                      </td>
                      <td> {transformNfStatus(item.status_id)} </td>
                      <td> {item.ondecomprou} </td>
                      <td>R${item.totalvalue}</td>
                      <td> {item.FMCCOINS} </td>
                    </tr>
                  ),
                )}
              </tbody>
            </ListTable>
          </ListTableContainer>
        )}
      </Content>
      <Toggle onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
    </Container>
  );
};

export default List;
