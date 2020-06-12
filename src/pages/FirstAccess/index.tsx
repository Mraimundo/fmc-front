import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import history from 'services/history';
import { useSpring } from 'react-spring';
import { Participant } from 'services/register/getParticipantData';
import save from 'services/register/saveParticipant';

import logoImg from 'assets/images/logo.png';
import Form from './Form';

import { Container, Content, contentAnimation } from './styles';

const FirstAccess: React.FC = () => {
  const props = useSpring(contentAnimation);
  const [participant, setParticipant] = useState<Participant | null>(null);
  const location = useLocation<Participant>();

  useEffect(() => {
    try {
      const { state } = location;
      if (!state || !state.id) {
        history.push('/');
      }
      setParticipant(state);
    } catch {
      history.push('/');
    }
  }, [location]);

  const saveParticipant = useCallback(
    async (data: Participant): Promise<boolean> => {
      const request = { ...participant, ...data } as Participant;
      await save(request);
      return true;
    },
    [participant],
  );

  return (
    <>
      {!!participant && (
        <Container>
          <img src={logoImg} alt="Logo" />
          <Content style={props}>
            <Form participant={participant} saveParticipant={saveParticipant} />
          </Content>
        </Container>
      )}
    </>
  );
};

export default FirstAccess;
