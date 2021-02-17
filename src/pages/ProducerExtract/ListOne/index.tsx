import React, { useState } from 'react';

import {
  Container,
  Content,
  Header,
  Toggle,
  ListItem,
  ListItemContainer,
} from './styles';

interface Item {
  id: number;
  tipoponto: string;
  data: string;
  descricao: string;
  FMCCOINS: string;
}

interface SafraProps {
  safra: {
    totalsafra: string;
    safra: string;
    item: Item[];
  };
}

const ListOne: React.FC<SafraProps> = SafraProps => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <Content>
        <Header>
          <div>
            <h3>Safra</h3>
            <h4>{SafraProps.safra.safra}</h4>
          </div>
          <span></span>
          <div>
            <h3>Total</h3>
            <h4> {SafraProps.safra.totalsafra} FMC Coins</h4>
          </div>
        </Header>
        {isOpen && (
          <ListItemContainer>
            <div>
              <h3>Tipo de ponto</h3>
              <h4>FMC Coins</h4>
            </div>
            <ListItem>
              {SafraProps.safra.item.map(item => (
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
