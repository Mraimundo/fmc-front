import React, { useEffect, useState, useCallback } from 'react';
import getParticipant from 'services/auth/getLoggedParticipant';
import history from 'services/history';
import { useToast } from 'context/ToastContext';
import { useAuth } from 'context/AuthContext';
import { useSpring } from 'react-spring';
import { Participant } from 'services/auth/interfaces/Participant';
import save from 'services/auth/editParticipant';
import numbersOnly from 'util/numbersOnly';

import logoImg from 'assets/images/logo.png';
import Form from 'components/Auth/Register/Form';

import { Container, Content, contentAnimation } from './styles';

const RegisterEdit: React.FC = () => {
  const props = useSpring(contentAnimation);
  const { addToast } = useToast();
  const { updateParticipantData } = useAuth();
  const [participant, setParticipant] = useState<Participant | null>(null);

  useEffect(() => {
    async function load(): Promise<void> {
      try {
        const p = await getParticipant();
        setParticipant(p);
      } catch {
        history.push('/');
      }
    }

    load();
  }, []);

  const saveParticipant = useCallback(
    async (data: Participant): Promise<void> => {
      try {
        const request = {
          ...participant,
          ...data,
          area_code: numbersOnly(data.area_code),
          cell_phone: numbersOnly(data.cell_phone),
          cpf: numbersOnly(data.cpf),
          regulations_accepted: [],
        } as Participant;

        await save(request);
        addToast({
          title: 'Cadastro realizado com sucesso!',
          type: 'success',
        });
        updateParticipantData();
        history.push('/');
      } catch (e) {
        addToast({
          title: e.response?.data?.message || 'Falha ao fazer login',
          type: 'error',
        });
      }
    },
    [participant, addToast, updateParticipantData],
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

export default RegisterEdit;
