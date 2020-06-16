import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import history from 'services/history';
import { useToast } from 'context/ToastContext';
import { useSpring } from 'react-spring';
import { Participant } from 'services/register/getParticipantData';
import getDataRegulation, {
  DataRegulation,
} from 'services/register/getDataRegulation';
import save from 'services/register/saveParticipant';
import numbersOnly from 'util/numbersOnly';

import logoImg from 'assets/images/logo.png';
import Form from './Form';

import { Container, Content, contentAnimation } from './styles';

const FirstAccess: React.FC = () => {
  const props = useSpring(contentAnimation);
  const { addToast } = useToast();
  const [participant, setParticipant] = useState<Participant | null>(null);
  const [dataRegulation, setDataRegulation] = useState<DataRegulation | null>(
    null,
  );
  const location = useLocation<Participant>();

  useEffect(() => {
    async function load(): Promise<void> {
      try {
        const { state } = location;
        if (!state || !state.id) {
          history.push('/');
        }
        const regulation = await getDataRegulation();
        setDataRegulation(regulation);
        setParticipant(state);
      } catch {
        history.push('/');
      }
    }

    load();
  }, [location]);

  const saveParticipant = useCallback(
    async (data: Participant): Promise<void> => {
      try {
        const request = {
          ...participant,
          ...data,
          area_code: numbersOnly(data.area_code),
          cell_phone: numbersOnly(data.cell_phone),
          cpf: numbersOnly(data.cpf),
          regulations_accepted: [
            {
              regulation_id: dataRegulation?.id.toString(),
              version: dataRegulation?.version.toString(),
            },
          ],
        } as Participant;

        await save(request);
        addToast({
          title: 'Cadastro realizado com sucesso!',
          type: 'success',
        });
        history.push('/');
      } catch (e) {
        addToast({
          title: e.response?.data?.message || 'Falha ao fazer login',
          type: 'error',
        });
      }
    },
    [participant, dataRegulation, addToast],
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
