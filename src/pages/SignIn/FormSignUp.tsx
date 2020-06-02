import React, { useState } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import * as Yup from 'yup';
import { useToast } from 'context/ToastContext';

import { Input, Button } from 'components/shared';

import { FiUser } from 'react-icons/fi';

interface SignUpFormData {
  cpf: string;
}

type TypeSelect = 'fmc' | 'revenda';

const FormSignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [typeSelected, setTypeSelected] = useState<TypeSelect>('fmc');
  const { addToast } = useToast();

  const schema = Yup.object().shape({
    cpf: Yup.string().required('Cpf é obrigatório'),
  });

  const methods = useForm<SignUpFormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit } = methods;
  const onSubmit = handleSubmit(async ({ cpf }) => {
    setLoading(true);
    try {
      // Pergunta do primeiro acesso
      // Redireciona para o primeiro acesso
    } catch (e) {
      addToast({
        description: e.response?.data?.message || 'Falha ao checar CPF',
        type: 'error',
        title: 'Erro',
      });
    }
    setLoading(false);
  });

  return (
    <FormContext {...methods}>
      <form onSubmit={onSubmit}>
        <ul>
          <li>Revendas/Cooperativas</li>
          <li>FMC</li>
        </ul>
        <Input
          name="cpf_first_access"
          icon={FiUser}
          label="CPF"
          numbersOnly
          pattern="XXX.XXX.XXX-XX"
        />
        <Button type="submit" buttonRole="primary" loading={loading}>
          Entrar
        </Button>
      </form>
    </FormContext>
  );
};

export default FormSignUp;
