import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import history from 'services/history';
import { useSpring } from 'react-spring';
import { Participant } from 'services/register/getParticipantData';

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

  return (
    <>
      {!!participant && (
        <Container>
          <img src={logoImg} alt="Logo" />
          <Content style={props}>
            <Form participant={participant} />
          </Content>
        </Container>
      )}
    </>
  );
};

export default FirstAccess;
