import React, { useState } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import * as Yup from 'yup';
import { useToast } from 'context/ToastContext';

import { Input, Button } from 'components/shared';
import { FiUser } from 'react-icons/fi';

import { MenuList, ItemList } from './styles';

interface SignUpFormData {
  cpf: string;
}

type TypeSelect = 'fmc' | 'participant';

const FormSignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [typeSelected, setTypeSelected] = useState<TypeSelect>('participant');
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
        <MenuList>
          <ItemList
            active={typeSelected === 'participant'}
            onClick={() => setTypeSelected('participant')}
          >
            Participante
          </ItemList>
          <ItemList
            active={typeSelected === 'fmc'}
            onClick={() => setTypeSelected('fmc')}
          >
            FMC
          </ItemList>
        </MenuList>
        {typeSelected === 'participant' ? (
          <Input
            name="cpf_first_access"
            icon={FiUser}
            placeholder="CPF"
            numbersOnly
            pattern="XXX.XXX.XXX-XX"
          />
        ) : (
          <Input name="upn_first_access" icon={FiUser} placeholder="UPN" />
        )}
        <Button type="submit" buttonRole="primary" loading={loading}>
          Cadastrar
        </Button>
      </form>
    </FormContext>
  );
};

export default FormSignUp;
