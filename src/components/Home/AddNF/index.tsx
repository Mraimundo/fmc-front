import React, { useState, useEffect } from 'react';
import getNfList from 'services/nf/geNfList';
import StatusTable from './StatusTable';
import Upload from './Upload';

import { Container, Content, Title, RightSideBox } from './styles';

const AddNF: React.FC = () => {
  const [nfListLength, setNfListLength] = useState(0);

  const getNfData = () => {
    getNfList().then(data => {
      setNfListLength(data.notas.length);
    });
  };

  useEffect(() => {
    getNfData();
  }, []);

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
            <StatusTable nfListLength={nfListLength} />
            <Upload onUpdate={() => getNfData()} />
          </RightSideBox>
        </div>
      </Content>
    </Container>
  );
};

export default AddNF;
