import React, { useState, useEffect, useCallback } from 'react';
import getNfList from 'services/nf/geNfList';
import { Link } from 'react-router-dom';
import routeMap from 'routes/route-map';

import StatusTable from './StatusTable';
import Upload from './Upload';

import { Container, Content, Title, RightSideBox } from './styles';

const AddNF: React.FC = () => {
  const [nfListLength, setNfListLength] = useState(0);

  const getNfData = useCallback(() => {
    getNfList().then(data => {
      setNfListLength(data.length);
    });
  }, []);

  useEffect(() => {
    getNfData();
  }, [getNfData]);

  return (
    <Container>
      <Content>
        <Title>Cadastre sua nota fiscal para ganhar pontos</Title>
        <div>
          <p>
            Clique no botão para enviar sua nota fiscal em formato JPG, PNG ou
            PDF. Em caso de JPG e PNG, certifique-se de que a imagem está nítida
            e legível.
            <Link to={routeMap.receipts}>link teste</Link>
          </p>
          <RightSideBox>
            <StatusTable nfListLength={nfListLength} />
            <Upload onUpdate={() => setNfListLength(nfListLength + 1)} />
          </RightSideBox>
        </div>
      </Content>
    </Container>
  );
};

export default AddNF;
