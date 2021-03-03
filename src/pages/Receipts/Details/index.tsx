import React, { useState, useEffect } from 'react';
import { formatDate } from 'util/datetime';
import { Link } from 'react-router-dom';
import routeMap from 'routes/route-map';
import { ReactSVG } from 'react-svg';
import closeIcon from 'assets/images/training/close-icon.svg';

import getReceipt from 'services/receipts/getReceipt';

import {
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
  ProductItemContainer,
  SummarySection,
  SummaryItem,
} from './styles';

interface Props {
  receiptId: any;
  modalOpen: boolean;
  closeModalHandler: any;
}

const Details: React.FC<Props> = Props => {
  const [details, setDetails] = useState<any>();
  const [totalProdutosFmc, setTotalProdutosFmc] = useState<number>(0);
  const [totalFmcCoins, setTotalFmcCoins] = useState<number>(0);

  useEffect(() => {
    if (Props.receiptId !== '') {
      getReceipt(Props.receiptId).then(data => {
        setDetails(data);
      });
    }
  }, [Props.receiptId]);

  useEffect(() => {
    if (details) {
      let sumTotal = 0;
      let sumCoins = 0;
      for (let i = 0; i < details.itensNota.length; i++) {
        sumTotal += parseFloat(details.itensNota[i].total_value);
        sumCoins += parseFloat(details.itensNota[i].FMCCOINS);
        // sum += parseFloat( details.itensNota[0] );
      }

      setTotalProdutosFmc(sumTotal);
      setTotalFmcCoins(sumCoins);
    }
  }, [details]);

  return (
    <ModalContainer modalOpen={Props.modalOpen}>
      <CloseModalOverlay onClick={() => Props.closeModalHandler()} />
      <Content>
        <PageTitle>
          Nota enviada em: {formatDate(details?.dadosnota[0].datacompra)}
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
                  <td> {details?.dadosnota[0].canal} </td>
                </tr>
                <tr>
                  <td>
                    <strong>CNPJ:</strong>
                  </td>
                  <td> {details?.dadosnota[0]?.cnpj} </td>
                </tr>
                <tr>
                  <td>
                    <strong>Data da compra: </strong>
                  </td>
                  <td> {formatDate(details?.dadosnota[0].datacompra)} </td>
                </tr>
                <tr>
                  <td>
                    <strong> Número da nota: </strong>
                  </td>
                  <td> {details?.dadosnota[0].numeronota} </td>
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
                  <td> {details?.dadosnota[0].cpf} </td>
                </tr>
                <tr>
                  <td>
                    <strong>Valor total:</strong>
                  </td>
                  <td> R${details?.dadosnota[0].valornota} </td>
                </tr>
              </tbody>
            </table>
          </DetailsBlock>
        </DetailsSection>
        <SummarySection>
          <SummaryItem>
            Total em Produtos FMC: R${totalProdutosFmc.toFixed(2)}
          </SummaryItem>
          <SummaryItem>FMC Coins: {totalFmcCoins.toFixed(2)}</SummaryItem>
        </SummarySection>

        <h3>Produtos FMC</h3>
        <ProductList>
          {details?.itensNota &&
            details?.itensNota.length > 0 &&
            details?.itensNota.map(
              (item: {
                id: number;
                Categoria: string;
                DescricaoProduto: string;
                invoice_id: number;
                product_id: number;
                participant_id: number;
                volume: string;
                unitary_value: string;
                total_value: string;
                FMCCOINS: string;
                desconto: string;
                valor_net: string;
                unit_points: string;
                NomeProduto: string;
              }) => (
                <ProductItemContainer key={item.id}>
                  <p>{item.Categoria}</p>
                  <ProductItem>
                    <div>
                      <strong> {item.NomeProduto} </strong> <br />
                      <p> {item.DescricaoProduto} </p>
                    </div>

                    <div>
                      <strong>Volume KG/L:</strong> {item.volume} <br />
                      <strong>Valor unitário:</strong> R${item.unitary_value}{' '}
                      <br />
                      <strong>Desconto:</strong>{' '}
                      {item.desconto === '' ? 'R$0' : `R$${item.desconto}`}
                    </div>

                    <div>
                      <strong>Total Net:</strong> {item.valor_net} <br />
                      <strong>Total:</strong> R${item.total_value} <br />
                      <strong>FMC Coins:</strong> {item.FMCCOINS}
                    </div>
                  </ProductItem>
                </ProductItemContainer>
              ),
            )}
        </ProductList>
        <LinkBottom>
          Dúvidas sobre o preenchimento desta nota?&nbsp;
          <Link to={routeMap.contact}>Clique aqui</Link>
        </LinkBottom>
      </Content>
    </ModalContainer>
  );
};

export default Details;
