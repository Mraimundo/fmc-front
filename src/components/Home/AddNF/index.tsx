import React, { useState, useEffect, useCallback } from 'react';
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
  const [nfListLength, setNfListLength] = useState(0);
  const [nfStatus, setNfStatus] = useState<any[]>([]);
  const getNfData = useCallback(() => {
    getNfList().then(data => {
      const nfListEntries = Object.entries(data);
      setNfListLength(transformNfEntry(nfListEntries).length);
      setNfStatus(transformNfEntry(nfListEntries));
    });
  }, []);

  useEffect(() => {
    getNfData();
  }, [getNfData]);

  return (
    <Container>
      {Props.layout !== 'secondary' && (
        <Content>
          <Title>Cadastre sua nota fiscal para ganhar pontos</Title>
          <div>
            <p>
              Clique no botão para enviar sua nota fiscal em formato JPG, PNG ou
              PDF. Em caso de JPG e PNG, certifique-se de que a imagem está
              nítida e legível.
            </p>
            <RightSideBox>
              <StatusTable nfList={nfStatus} />

              <Upload onUpdate={() => setNfListLength(nfListLength + 1)} />
            </RightSideBox>
          </div>
        </Content>
      )}
      {Props.layout === 'secondary' && (
        <Content secondary>
          <Title>Cadastre sua nota fiscal para ganhar pontos</Title>

          <p>
            Clique no botão para enviar sua nota fiscal em formato JPG, PNG ou
            PDF. Em caso de JPG e PNG, certifique-se de que a imagem está nítida
            e legível.
          </p>

          <Upload
            onUpdate={() => setNfListLength(nfListLength + 1)}
            secondary
          />
        </Content>
      )}
    </Container>
  );
};

export default AddNF;
