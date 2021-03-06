import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import validateCpf from 'util/validations/cpf';
import { useForm, FormContext } from 'react-hook-form';
import * as Yup from 'yup';
import { useToast } from 'context/ToastContext';
import { PROFILES } from 'config/constants';

import { ReactSVG } from 'react-svg';
import closeIcon from 'assets/images/training/close-icon.svg';

import { Input, Button } from 'components/shared';

import history from 'services/history';

import {
  getParticipantByCpf,
  getParticipantByUpn,
} from 'services/register/getParticipantData';
import DefaultModal from 'components/shared/Modal';
import ModalPreCadastro from '../../../components/Contact/Disconnected/ModalPreCadastro';

import { MenuList, ItemList, ContainerModal, Close } from './styles';

interface SignUpFormData {
  param_first_access: string;
}

type TypeSelect = 'fmc' | 'participant';

const FormSignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [indicatorCode, setIndicatorCode] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentCPF, setCurrentCPF] = useState('');
  const [showFormModal, setShowFormModal] = useState(false);
  const [typeSelected, setTypeSelected] = useState<TypeSelect>('participant');
  const { addToast } = useToast();
  const location = useLocation();

  const schema = Yup.object().shape({
    param_first_access: Yup.string().required('Campo obrigatório'),
  });

  const methods = useForm<SignUpFormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  useEffect(() => {
    const indicator_code = location.search.replace('?code=', '');

    if (indicator_code) {
      setIndicatorCode(indicator_code);
    }
  }, [location.search]);

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
      if (e.response?.data?.message === 'CPF não encontrado') {
        if (validateCpf(param_first_access)) {
          setShowModal(true);
          setCurrentCPF(param_first_access);
        } else {
          addToast({
            title: 'CPF inválido',
            type: 'error',
          });
        }
      } else {
        addToast({
          title: e.response?.data?.message || 'Falha ao checar CPF',
          type: 'error',
        });
      }
    }
  });

  const handleOpenPreCadastro = () => {
    setShowModal(false);
    const participant = {
      cpf: currentCPF,
      establishment: { id: 1, team_receives_points: false },
      role: { id: 26, identifier: 'produtor', name: 'Produtor' },
      campaign_id: 1,
      profile: PROFILES.producer,
    };
    indicatorCode
      ? history.push(`/firstAccess?code=${indicatorCode}`, participant)
      : history.push('/firstAccess', participant);
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
          <Close>
            <button type="button" onClick={onRequestClose}>
              <ReactSVG src={closeIcon} />
            </button>
          </Close>
          <h3> Bem-vindo(a)! </h3>
          <p>
            Caso seja colaborador(a) de um canal Juntos FMC, por favor, solicite
            sua indicação de acesso diretamente no seu estabelecimento.
          </p>
          <p>
            Se você é um Produtor(a) que compra produtos FMC através das
            Revendas ou Cooperativas pertencentes ao programa Juntos FMC, clique
            no botão abaixo para se cadastrar.
          </p>
          <Button
            type="submit"
            buttonRole="quaternary"
            onClick={handleOpenPreCadastro}
          >
            SOU PRODUTOR
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
