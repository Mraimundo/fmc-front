import React, { useState } from 'react';

import {
  Container,
  Content,
  Header,
  Toggle,
  ListItem,
  ListItemContainer,
} from './styles';

interface Props {
  safra: {
    totalsafra: string;
    safra: string;
    item: any[];
  };
}

const ListOne: React.FC<Props> = Props => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
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
          <ListItemContainer>
            <div>
              <h3>Tipo de ponto</h3>
              <h4>FMC Coins</h4>
            </div>
            <ListItem>
              {Props.safra.item.map(
                (item: {
                  id: number;
                  tipoponto: string;
                  data: string;
                  descricao: string;
                  status_text: string;
                  FMCCOINS: string;
                }) => (
                  <div key={item.id}>
                    <div className="list-tipoponto">
                      <p>{item.tipoponto}</p>
                      <span>{item.FMCCOINS}</span>
                    </div>
                    <div className="list-description">
                      <p >{item.descricao}</p>
                    </div>
                  </div>
                ),
              )}
            </ListItem>
          </ListItemContainer>
        )}
      </Content>
      <Toggle onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
    </Container>
  );
};

export default ListOne;
