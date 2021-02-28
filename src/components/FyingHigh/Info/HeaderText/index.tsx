import React from 'react';

import { Container } from './styles';

const HeaderText: React.FC = () => {
  return (
    <Container>
      <p>
        Entre no <b>JUNTOS</b> e cadastre uma <br /> nota fiscal para concorrer
        ao um drone.
      </p>
      <p>
        <b>Participe! Estamos juntos e é para valer.</b>
      </p>
    </Container>
  );
};

export default HeaderText;
