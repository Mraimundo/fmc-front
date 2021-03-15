import React, { useState, useCallback } from 'react';

import validateCpf from 'util/validations/cpf';
import { useForm, FormContext } from 'react-hook-form';
import * as Yup from 'yup';
import { PROFILES } from 'config/constants';
import history from 'services/history';
import getParticipantData from 'services/flying-high/getParticipantData';
import { useToast } from 'context/ToastContext';
import ConfirmationModal from 'components/FlyingHigh/Modal';
import InfoMessage from 'components/Modals/InfoMessage';

import { Container, Input, Button, FormContainer } from './styles';

interface SignUpFormData {
  param_first_access: string;
}

const RegisterForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [textInfo, setTextInfo] = useState('');
  const [currentCpf, setCurrentCpf] = useState('');
  const { addToast } = useToast();

  const schema = Yup.object().shape({
    param_first_access: Yup.string()
      .required('Campo obrigatório')
      .test('valid-cpf', 'CPF inválido', validateCpf),
  });

  const handleModalConfirmation = useCallback(() => {
    const participant = {
      cpf: currentCpf,
      establishment: { id: 1, team_receives_points: false },
      role: { id: 26, identifier: 'produtor', name: 'Produtor' },
      campaign_id: 1,
      profile: PROFILES.producer,
      registration_origin: 'FLYING_HIGH_ACTION',
    };
    setIsModalOpen(false);
    history.push('/firstAccess', participant);
  }, [currentCpf]);

  const handleModalCloseRequest = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleInfoModalClose = useCallback(() => {
    setIsInfoModalOpen(false);
    history.push('/', currentCpf);
  }, [currentCpf]);

  const methods = useForm<SignUpFormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async ({ param_first_access }) => {
    setLoading(true);

    let participant = null;
    try {
      participant = await getParticipantData(param_first_access);
    } catch (error) {
      addToast({
        title: error.response?.data?.message,
        type: 'error',
      });
      return;
    } finally {
      setLoading(false);
    }

    setCurrentCpf(param_first_access);

    if (!participant) {
      setIsModalOpen(true);
      return;
    }

    if (participant?.profile.toUpperCase() === PROFILES.producer) {
      setTextInfo(
        `Produtor já cadastrado no Sistema. Faça seu login no JUNTOS - Produtor e envie sua Nota Fiscal para participar.`,
      );
    }

    if (participant?.profile.toUpperCase() !== PROFILES.producer) {
      setTextInfo(`Promoção exclusiva para o JUNTOS - Produtor!`);
    }

    setIsInfoModalOpen(true);
  });

  return (
    <Container>
      <FormContext {...methods}>
        <form onSubmit={onSubmit}>
          <FormContainer>
            <h2>Você que é Produtor Rural faça seu cadastro</h2>
            <Input
              name="param_first_access"
              placeholder="CPF"
              numbersOnly
              pattern="XXX.XXX.XXX-XX"
              inputRole="primary"
            />
            <Button type="submit" buttonRole="primary" loading={loading}>
              Cadastrar
            </Button>
          </FormContainer>
        </form>
      </FormContext>
      <ConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={handleModalCloseRequest}
        onConfirmClick={handleModalConfirmation}
      />
      <InfoMessage
        isOpen={isInfoModalOpen}
        text={textInfo}
        onRequestClose={handleInfoModalClose}
      />
    </Container>
  );
};

export default RegisterForm;
