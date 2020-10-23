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
import DefaultModal from 'components/shared/Modal';
import ModalPreCadastro from '../../../components/Contact/Disconnected/ModalPreCadastro';

import { MenuList, ItemList, ContainerModal, InlineLink } from './styles';

interface SignUpFormData {
  param_first_access: string;
}

type TypeSelect = 'fmc' | 'participant';

const FormSignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
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
      setShowModal(true);
      addToast({
        title: e.response?.data?.message || 'Falha ao checar CPF',
        type: 'error',
      });
    }
  });

  const handleOpenPreCadastro = () => {
    setShowModal(false);
    setShowFormModal(true);
  };

  const handleSelectType = useCallback(
    (type: TypeSelect) => {
      setTypeSelected(type);
      setValue('param_first_access', '');
    },
    [setValue],
  );
  const onRequestClose = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <FormContext {...methods}>
      <DefaultModal
        isOpen={showModal}
        onRequestClose={onRequestClose}
        type="secondary"
      >
        <ContainerModal>
          <h3> Bem-vindo(a)! </h3>
          <p>
            Se você é um produtor(a) que compra produtos FMC por meio das
            revendas ou cooperativas pertencentes ao programa JUNTOS FMC,{' '}
            <InlineLink onClick={handleOpenPreCadastro}>clique aqui</InlineLink>{' '}
            para se cadastrar.
          </p>
          <p>
            Se for colaborador(a) de um canal JUNTOS FMC, por favor, solicite
            sua indicação de acesso diretamente ao seu estabelecimento.
          </p>
          <Button
            type="submit"
            buttonRole="quaternary"
            onClick={onRequestClose}
          >
            OK
          </Button>
        </ContainerModal>
      </DefaultModal>

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

      <ModalPreCadastro
        isOpen={showFormModal}
        onRequestClose={() => setShowFormModal(false)}
      />
    </FormContext>
  );
};

export default FormSignUp;
