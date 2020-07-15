import React, { useState, useEffect } from 'react';
import { Participant } from 'services/showcase/interfaces';
import transformer, {
  Response as Data,
} from 'services/showcase/transformers/toParticipantTransformer';
import { Link } from 'react-router-dom';

import { Container, Content, Circle } from './styles';

interface Props {
  participant: Participant;
  className?: string;
}

const ParticipantInfo: React.FC<Props> = ({ participant, className }) => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    setData(transformer(participant));
  }, [participant]);

  return (
    <Container className={className}>
      {!!data && (
        <Content>
          <Circle>
            {data.imageUrl ? (
              <img src={data.imageUrl} alt={data.name} />
            ) : (
              <span>Imagem do canal</span>
            )}
          </Circle>
          <h3>{data.name}</h3>
          <h4>{data.points} pontos</h4>
          <Link to={data.urlAccess}>
            {data.type === 'cnpj' ? 'Catálogo do canal' : 'Meu catálogo'}
          </Link>
        </Content>
      )}
    </Container>
  );
};

export default ParticipantInfo;
