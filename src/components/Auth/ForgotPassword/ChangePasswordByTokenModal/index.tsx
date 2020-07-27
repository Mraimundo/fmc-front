import React, { useState } from 'react';
import { useToast } from 'context/ToastContext';
import { useForm, FormContext } from 'react-hook-form';
import changePassword from 'services/auth/password/changePasswordByToken';
import { PasswordInput, Button } from 'components/shared';
import * as Yup from 'yup';
import PasswordHelp from 'components/shared/PasswordHelp';
import {
  hasLowerCase,
  hasNumber,
  hasUpperCase,
  hasSpecialCharacteres,
} from 'util/validations/string';

import { Container, Title, Modal as DefaultModal } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose(): void;
  onSuccessSendEmail(): void;
  token: string;
}

interface FormData {
  password: string;
  password_confirmation: string;
}

const ChangePasswordByTokenModal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  token,
  onSuccessSendEmail,
}) => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const schemaValidation = Yup.object().shape({
    password: Yup.string()
      .required('Campo obrigatório')
      .min(10, 'Mínimo de 10 caracteres')
      .test(
        'lower-case',
        'Deve conter pelo menos uma letra minúscula',
        hasLowerCase,
      )
      .test(
        'upper-case',
        'Deve conter pelo menos uma letra maiúscula',
        hasUpperCase,
      )
      .test('lower-case', 'Deve conter pelo menos um número', hasNumber)
      .test(
        'has-special-characteres',
        'Deve conter pelo menos um desses caracteres (!, $, #, %, @, &)',
        hasSpecialCharacteres,
      ),
    password_confirmation: Yup.string()
      .required('Campo obrigatório')
      .oneOf(
        [Yup.ref('password')],
        'Confirmação de senha precisa ser igual a senha',
      ),
  });

  const methods = useForm<FormData>({
    validationSchema: schemaValidation,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async ({ password }) => {
    setLoading(true);
    try {
      await changePassword(token, password);
      onRequestClose();
      onSuccessSendEmail();
    } catch (e) {
      addToast({
        title:
          e.response?.data?.message ||
          'Falha ao alterar Senha. Por favor tente novamente',
        type: 'error',
      });
    }
    setLoading(false);
  });

  return (
    <DefaultModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container>
        <Title>Cadastrar nova senha</Title>
        <FormContext {...methods}>
          <form onSubmit={onSubmit}>
            <PasswordInput
              name="password"
              label="Nova senha"
              help={PasswordHelp}
            />
            <PasswordInput
              name="password_confirmation"
              label="Confirmar nova Senha"
            />
            <Button type="submit" buttonRole="primary" loading={loading}>
              Salvar
            </Button>
          </form>
        </FormContext>
      </Container>
    </DefaultModal>
  );
};

export default ChangePasswordByTokenModal;
