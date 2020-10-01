import React from 'react';

import { Container, Content, List, Link } from './styles';

const Report: React.FC = () => {
  const mock = [
    {
      title: 'Participantes',
      url:
        'https://juntosfmc-adm.vendavall.com.br/download?name=Portal_Juntos_FMC-TERMO_DE_USO.pdf&url=https://storage.juntosfmc.com.br/avatar/1597870012.5f3d8fbc16bc67.86487857.pdf',
    },
    {
      title: 'Performance',
      url:
        'https://juntosfmc-adm.vendavall.com.br/download?name=Portal_Juntos_FMC-TERMO_DE_USO.pdf&url=https://storage.juntosfmc.com.br/avatar/1597870012.5f3d8fbc16bc67.86487857.pdf',
    },
  ];
  return (
    <Container>
      <Content>
        <h3>Relatórios</h3>
        <List>
          {mock.map(item => (
            <li>
              <span>{item.title}</span>
              <Link>Download</Link>
            </li>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default Report;
