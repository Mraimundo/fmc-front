import React, { useState, useEffect } from 'react';
import { getParticipantsToAccessPI } from 'services/showcase';
import { Participant } from 'services/showcase/interfaces';

import Box from './Box';
import { Container, Content, Separator } from './styles';

const ShowCase: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    getParticipantsToAccessPI().then(data => {
      setParticipants(data);
    });
  }, []);

  return (
    <Container>
      <Content>
        <h3>Catálogo de prêmios</h3>
        <span>Selecione o catálogo de prêmios para acessar</span>
        {participants.map((participant, key) => (
          <>
            <Box
              participant={participant}
              key={`participant-${participant.id}`}
            />
            {key < participants.length - 1 && <Separator />}
          </>
        ))}
      </Content>
    </Container>
  );
};

export default ShowCase;
