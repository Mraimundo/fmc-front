import React, { useState, useCallback } from 'react';

import validateCpf from 'util/validations/cpf';
import { useForm, FormContext } from 'react-hook-form';
import * as Yup from 'yup';
import { PROFILES } from 'config/constants';
import history from 'services/history';
import { getParticipantByCpf } from 'services/register/getParticipantData';
import { useToast } from 'context/ToastContext';
import ConfirmationModal from 'components/FlyingHigh/Modal';

import { Container, Input, Button, FormContainer } from './styles';

interface SignUpFormData {
  param_first_access: string;
}

const RegisterForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const methods = useForm<SignUpFormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async ({ param_first_access }) => {
    setLoading(true);
    let message = '';

    try {
      await getParticipantByCpf(param_first_access);
    } catch (e) {
      message = e.response?.data?.message;
    } finally {
      setLoading(false);
    }

    if (message === 'CPF não encontrado') {
      setCurrentCpf(param_first_access);
      setIsModalOpen(true);
      /* const participant = {
        cpf: param_first_access,
        establishment: { id: 1, team_receives_points: false },
        role: { id: 26, identifier: 'produtor', name: 'Produtor' },
        campaign_id: 1,
        profile: PROFILES.producer,
        registration_origin: 'FLYING_HIGH_ACTION',
      };

      history.push('/firstAccess', participant); */
      return;
    }

    addToast({
      title: message || 'Falha ao checar CPF',
      type: 'error',
    });
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
    </Container>
  );
};

export default RegisterForm;
