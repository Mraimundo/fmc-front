import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import history from 'services/history';
import { useToast } from 'context/ToastContext';
import { useSpring } from 'react-spring';
import { Participant } from 'services/auth/interfaces/Participant';
import getDataRegulation from 'services/register/regulation/getDataRegulation';
import { Regulation } from 'services/register/regulation/interfaces/IRegulation';
import save from 'services/register/saveParticipant';
import numbersOnly from 'util/numbersOnly';
import DataRegulation from 'components/Regulation/DataRegulation';

import SuccessSignUpModal from 'components/Auth/Modals/SuccessSignUp';

import logoImg from 'assets/images/logo.png';
import Form from 'components/Auth/Register/Form';

import {
  Container,
  Content,
  contentAnimation,
  RegulationContainer,
  RegulationContent,
  Header,
} from './styles';

const FirstAccess: React.FC = () => {
  const props = useSpring(contentAnimation);
  const { addToast } = useToast();
  const [participant, setParticipant] = useState<Participant | null>(null);
  const [dataRegulation, setDataRegulation] = useState<Regulation | null>(null);
  const [hasAcceptedDataRegulation, setHasAcceptedDataRegulation] = useState(
    false,
  );
  const [modalOpened, setModalOpened] = useState(false);
  const location = useLocation<Participant>();

  const onAcceptRegulation = useCallback(() => {
    setHasAcceptedDataRegulation(true);
  }, []);

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
        setModalOpened(true);
      } catch (e) {
        addToast({
          title:
            e.response?.data?.message ||
            'Falha na validação dos dados. Por favor entre em contato com o suporte',
          type: 'error',
        });
      }
    },
    [participant, dataRegulation, addToast],
  );

  const handleCloseModal = useCallback(() => {
    setModalOpened(false);
    history.push('/');
  }, []);

  return (
    <>
      {!hasAcceptedDataRegulation ? (
        <RegulationContainer>
          <Header>
            <img src={logoImg} alt="Logo" />
          </Header>
          <RegulationContent>
            <DataRegulation
              onAccept={onAcceptRegulation}
              regulation={dataRegulation}
              profile={participant?.profile}
            />
          </RegulationContent>
        </RegulationContainer>
      ) : (
        !!participant && (
          <Container>
            <Header>
              <img src={logoImg} alt="Logo" />
            </Header>
            <Content style={props}>
              <Form
                participant={participant}
                saveParticipant={saveParticipant}
              />
            </Content>
          </Container>
        )
      )}
      <SuccessSignUpModal
        isOpen={modalOpened}
        onRequestClose={handleCloseModal}
      />
    </>
  );
};

export default FirstAccess;
