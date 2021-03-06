import React, { useState } from 'react';
import { useToast } from 'context/ToastContext';
import { useForm, FormContext } from 'react-hook-form';
import { Input, Button } from 'components/shared';
import * as Yup from 'yup';
import validateCpf from 'util/validations/cpf';

import { Container, Title, DefaultModal } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose(): void;
  onSuccessSendEmail(): void;
  sendEmail(cpf: string): Promise<void>;
}

interface FormData {
  cpf: string;
}

const RequestResetPasswordModal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  onSuccessSendEmail,
  sendEmail,
}) => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const schemaValidation = Yup.object().shape({
    cpf: Yup.string()
      .required('CPF é obrigatório')
      .test('valid-cpf', 'CPF inválido', validateCpf),
  });

  const methods = useForm<FormData>({
    validationSchema: schemaValidation,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async ({ cpf }) => {
    setLoading(true);
    try {
      await sendEmail(cpf);
      onRequestClose();
      onSuccessSendEmail();
    } catch (e) {
      addToast({
        title:
          e.response?.data?.message ||
          'Falha ao enviar E-mail. Por favor tente novamente',
        type: 'error',
      });
    }
    setLoading(false);
  });

  return (
    <DefaultModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container>
        <Title>Esqueci minha senha</Title>
        <FormContext {...methods}>
          <form onSubmit={onSubmit}>
            <Input
              name="cpf"
              label="CPF"
              numbersOnly
              pattern="XXX.XXX.XXX-XX"
            />
            <Button type="submit" buttonRole="primary" loading={loading}>
              Enviar
            </Button>
          </form>
        </FormContext>
      </Container>
    </DefaultModal>
  );
};

export default RequestResetPasswordModal;
