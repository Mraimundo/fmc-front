import React, { useState, useEffect, useCallback } from 'react';
import { formatDate } from 'util/datetime';
import { Link } from 'react-router-dom';
import routeMap from 'routes/route-map';
import { ReactSVG } from 'react-svg';
import closeIcon from 'assets/images/training/close-icon.svg';

import getReceipt from 'services/receipts/getReceipt';

import {
  Container,
  Content,
  DetailsSection,
  DetailsBlock,
  PageTitle,
  ProductList,
  ProductItem,
  ModalContainer,
  CloseModalOverlay,
  CloseModal,
  LinkBottom,
} from './styles';

interface Props {
  receiptId: any;
  modalOpen: boolean;
  closeModalHandler: any;
}

const Details: React.FC<Props> = Props => {
  const [details, setDetails] = useState<any>();

  useEffect(() => {
    if (Props.receiptId !== '') {
      console.log('>> PROPS');
      console.log(Props.receiptId);
      getReceipt(Props.receiptId).then(data => {
        setDetails(data);
      });
    }
  }, [Props.receiptId]);

  return (
    <ModalContainer modalOpen={Props.modalOpen}>
      <CloseModalOverlay
        onClick={() => Props.closeModalHandler()}
      ></CloseModalOverlay>
      <Content>
        <PageTitle>
          Nota enviada em: {formatDate(details?.nota.purchase_date)}
          <CloseModal onClick={() => Props.closeModalHandler()}>
            <ReactSVG src={closeIcon} />
          </CloseModal>
        </PageTitle>
        <DetailsSection>
          <DetailsBlock>
            <h3>Dados da Nota</h3>
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>Canal:</strong>
                  </td>
                  <td> ????? </td>
                </tr>
                <tr>
                  <td>
                    <strong>CNPJ:</strong>
                  </td>
                  <td> {details?.nota.invoice_cnpj} </td>
                </tr>
                <tr>
                  <td>
                    <strong>Data da compra: </strong>
                  </td>
                  <td> {formatDate(details?.nota.purchase_date)} </td>
                </tr>
                <tr>
                  <td>
                    <strong> Número da nota: </strong>
                  </td>
                  <td> {details?.nota.num_invoice} </td>
                </tr>
              </tbody>
            </table>
          </DetailsBlock>
          <DetailsBlock>
            <h3>Dados da compra</h3>
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>CPF/CNPJ:</strong>
                  </td>
                  <td> 33333333 </td>
                </tr>
                <tr>
                  <td>
                    <strong>Valor total:</strong>
                  </td>
                  <td> R${details?.nota.total_value} </td>
                </tr>
              </tbody>
            </table>
          </DetailsBlock>
        </DetailsSection>

        <h3>Produtos FMC</h3>

        <ProductList>
          {details?.itensNota.map(
            (item: {
              id: number;
              invoice_id: number;
              product_id: number;
              participant_id: number;
              volume: string;
              unitary_value: string;
              total_value: string;
              total_points: string;
              desconto: string;
              valor_net: string;
              unit_points: string;
              NomeProduto: string;
            }) => (
              <ProductItem key={item.id}>
                <div>
                  <strong> {item.NomeProduto.toUpperCase()} </strong> <br />
                  <p> Catalizador </p>
                </div>

                <div>
                  <strong>Volume KG/L:</strong> {item.volume} <br />
                  <strong>Valor unitário:</strong> R${item.unitary_value}
                </div>

                <div>
                  <strong>Total:</strong> R${item.total_value} <br />
                  <strong>FMC Coins:</strong> {item.total_points}
                </div>
              </ProductItem>
            ),
          )}
        </ProductList>

        <LinkBottom>
          Dúvidas sobre o preenchimento desta nota?
          <Link to={routeMap.faq}>Clique aqui</Link>
        </LinkBottom>
      </Content>
    </ModalContainer>
  );
};

export default Details;
