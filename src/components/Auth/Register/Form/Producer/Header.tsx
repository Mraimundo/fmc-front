import React from 'react';

import { Container, WelcomeMessageContainer } from './styles';

const Header: React.FC = () => (
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
  </Container>
);

export default Header;
