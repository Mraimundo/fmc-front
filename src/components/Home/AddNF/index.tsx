import React from 'react';

import StatusTable from './StatusTable';
import Upload from './Upload';

import { Container, Content, Title, RightSideBox } from './styles';

const AddNF: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>Cadastre sua nota fiscal para ganhar pontos</Title>
        <div>
          <p>
            Clique no botão para enviar sua nota fiscal em formato JPG, PNG ou
            PDF. Em caso de JPG e PNG, certifique-se de que a imagem está nítida
            e legível.
          </p>
          <RightSideBox>
            <StatusTable />
            <Upload />
          </RightSideBox>
        </div>
      </Content>
    </Container>
  );
};

export default AddNF;
