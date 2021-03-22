import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import getNfList from 'services/nf/geNfList';


import StatusTable from './StatusTable';
import Upload from './Upload';

import { Container, Content, Title, RightSideBox } from './styles';

interface Props {
  layout?: string;
}

function transformNfEntry(entries: any) {
  const transformedEntries: any = [];
  entries.forEach((entry: any[]) => {
    transformedEntries.push(entry[1]);
  });
  return transformedEntries;
}

const AddNF: React.FC<Props> = Props => {
  const history = useHistory();
  const [nfStatus, setNfStatus] = useState<any[]>([]);
  const getNfData = () => {
    getNfList().then(data => {
      if (data) {
        const nfListEntries = Object.entries(data);
        setNfStatus(transformNfEntry(nfListEntries));
      }
    });
  };

  const refreshPage = () => {
    history.go(0);
  };

  useEffect(() => {
    getNfData();
  }, []);

  return (
    <Container>
      {Props.layout !== 'secondary' && (
        <Content>
          <Title>Cadastre sua nota fiscal para ganhar FMC Coins</Title>
          <div>
            <p>
              Clique no botão para enviar sua nota fiscal em formato JPG, PNG ou
              PDF. Em caso de JPG e PNG, certifique-se de que a imagem está
              nítida e legível.
            </p>
            <RightSideBox>
              <StatusTable nfList={nfStatus} display="1" />

              <Upload onUpdate={() => getNfData()} />
            </RightSideBox>
          </div>
        </Content>
      )}
      {Props.layout === 'secondary' && (
        <Content secondary>
          <Title>Cadastre sua nota fiscal para FMC Coins</Title>
          <p>
            Clique no botão para enviar sua nota fiscal em formato JPG, PNG ou
            PDF. Em caso de JPG e PNG, certifique-se de que a imagem está nítida
            e legível.
          </p>
          <Upload onUpdate={() => refreshPage()} secondary />
        </Content>
      )}
    </Container>
  );
};

export default AddNF;
