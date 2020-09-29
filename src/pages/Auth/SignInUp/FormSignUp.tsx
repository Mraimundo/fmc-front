import React, { useState, useCallback } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import * as Yup from 'yup';
import { useToast } from 'context/ToastContext';

import { Input, Button } from 'components/shared';

import history from 'services/history';

import {
  getParticipantByCpf,
  getParticipantByUpn,
} from 'services/register/getParticipantData';
import { MenuList, ItemList } from './styles';

interface SignUpFormData {
  param_first_access: string;
}

type TypeSelect = 'fmc' | 'participant';

const FormSignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [typeSelected, setTypeSelected] = useState<TypeSelect>('participant');
  const { addToast } = useToast();

  const schema = Yup.object().shape({
    param_first_access: Yup.string().required('Campo obrigatório'),
  });

  const methods = useForm<SignUpFormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit, setValue } = methods;
  const onSubmit = handleSubmit(async ({ param_first_access }) => {
    setLoading(true);
    try {
      const participant =
        typeSelected === 'participant'
          ? await getParticipantByCpf(param_first_access)
          : await getParticipantByUpn(param_first_access);
      history.push('/firstAccess', participant);
    } catch (e) {
      setLoading(false);
      addToast({
        title: e.response?.data?.message || 'Falha ao checar CPF',
        type: 'error',
      });
    }
  });

  const handleSelectType = useCallback(
    (type: TypeSelect) => {
      setTypeSelected(type);
      setValue('param_first_access', '');
    },
    [setValue],
  );

  return (
    <FormContext {...methods}>
      <form onSubmit={onSubmit}>
        <MenuList>
          <ItemList
            active={typeSelected === 'participant'}
            onClick={() => handleSelectType('participant')}
          >
            Participante
          </ItemList>
          <ItemList
            active={typeSelected === 'fmc'}
            onClick={() => handleSelectType('fmc')}
          >
            FMC
          </ItemList>
        </MenuList>
        {typeSelected === 'participant' ? (
          <Input
            name="param_first_access"
            placeholder="CPF"
            numbersOnly
            pattern="XXX.XXX.XXX-XX"
          />
        ) : (
          <Input name="param_first_access" placeholder="Nome de Usuário FMC" />
        )}
        <Button type="submit" buttonRole="primary" loading={loading}>
          Cadastrar
        </Button>
      </form>
    </FormContext>
  );
};

export default FormSignUp;
