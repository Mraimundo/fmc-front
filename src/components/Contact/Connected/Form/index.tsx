import React, { useState } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import { useToast } from 'context/ToastContext';

import { TextArea, Button } from 'components/shared';
import { FiUser, FiMessageCircle } from 'react-icons/fi';
import schema from './schemaValidation';

interface FormData {
  category: { title: string; value: string } | null;
  subject: { title: string; value: string } | null;
  message: string;
}

const Form: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const methods = useForm<FormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit } = methods;
  const onSubmit = handleSubmit(async ({ cpf, password }) => {
    setLoading(true);
    try {
      await signIn({ cpf, password });
      addToast({
        title: 'Login realizado com sucesso!',
        type: 'success',
      });
    } catch (e) {
      addToast({
        title: e.response?.data?.message || 'Falha ao fazer login',
        type: 'error',
      });
    }
    setLoading(false);
  });

  return (
    <FormContext {...methods}>
      <form onSubmit={onSubmit}>
        <SubjectSelect name="subject" icon={FiUser} />
        <SubjectSelect name="subject" icon={FiUser} />
        <TextArea name="message" icon={FiMessageCircle} label="Mensagem" />
        <Button type="submit" buttonRole="primary" loading={loading}>
          Entrar
        </Button>
      </form>
      <RecoverPasswordButton />
    </FormContext>
  );
};

export default Form;
