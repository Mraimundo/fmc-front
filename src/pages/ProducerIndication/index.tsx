import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { Container } from './styles';
import { pluginApi } from '../../services/api';

import Bainer from '../../components/Bainer';

interface ParticipantData {
  id: number;
  name: string;
  created: string;
}

const ProducerIndication: React.FC = () => {
  const [participants, setParticipants] = useState(
    new Array<ParticipantData>(),
  );

  useEffect(() => {
    async function fetchParticipants() {
      const response = await pluginApi.get('participants/profile/referral');

      setParticipants(response.data.featured);
    }

    fetchParticipants();
  }, []);

  return (
    <Container>
      <Bainer />

      <div className="nominated">
        <div className="participants-info">
          <h3>Participantes Cadastrados</h3>
          <h4>
            Participantes que se cadastraram usando o seu código de indicação
          </h4>
        </div>

        <table>
          <thead>
            <tr>
              <th>Nome do produtor</th>
              <th>Data de cadastro</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {participants &&
              participants.map(participant => (
                <tr key={participant.id}>
                  <td>{participant.name}</td>
                  <td>{format(parseISO(participant.created), 'dd/MM/yyyy')}</td>
                  <th> </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default ProducerIndication;
