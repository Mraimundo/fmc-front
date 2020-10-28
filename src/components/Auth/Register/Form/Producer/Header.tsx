import React from 'react';

import {
  Container,
  WelcomeMessageContainer,
  Navigation,
  NavigationItem,
} from './styles';

export type Tab =
  | 'PERSONAL_DATA'
  | 'FARM_DATA'
  | 'HARVEST_DATA'
  | 'SECURITY_DATA';

interface Props {
  activeTab: Tab;
  setActiveTab(tab: Tab): void;
}

const Header: React.FC<Props> = ({ activeTab, setActiveTab }) => (
  <Container>
    <WelcomeMessageContainer>
      <p>
        É uma satisfação recebê-lo no JUNTOS FMC, programa criado especialmente
        para fortalecer laços de valor entre a FMC e seus clientes.
      </p>

      <p>
        O JUNTOS FMC foi desenhado especialmente para produtores que dão
        preferência aos nossos produtos, adquiridos pelos canais cadastrados no
        programa.
      </p>

      <p>
        Entregando serviços e bens para produção, contribuímos para a
        capacitação das pessoas e para o desenvolvimento do seu negócio,
        tornando a agricultura nacional muito mais desenvolvida e produtiva.
      </p>

      <p>
        Para converter suas notas fiscais em pontos e realizar resgates no
        catálogo de benefícios, pedimos que, por favor, preencha todos os campos
        abaixo.
      </p>
    </WelcomeMessageContainer>
    <Navigation>
      <NavigationItem
        onClick={() => setActiveTab('PERSONAL_DATA')}
        className={activeTab === 'PERSONAL_DATA' ? 'isCurrent' : ''}
      >
        Pessoa física
      </NavigationItem>
      <NavigationItem
        onClick={() => setActiveTab('FARM_DATA')}
        className={activeTab === 'FARM_DATA' ? 'isCurrent' : ''}
      >
        Dados da minha fazenda e/ou CNPJ*
      </NavigationItem>
      <NavigationItem
        onClick={() => setActiveTab('HARVEST_DATA')}
        className={activeTab === 'HARVEST_DATA' ? 'isCurrent' : ''}
      >
        Dados da área de cultivo
      </NavigationItem>
      <NavigationItem
        onClick={() => setActiveTab('SECURITY_DATA')}
        className={activeTab === 'SECURITY_DATA' ? 'isCurrent' : ''}
      >
        Segurança
      </NavigationItem>
    </Navigation>
  </Container>
);

export default Header;
