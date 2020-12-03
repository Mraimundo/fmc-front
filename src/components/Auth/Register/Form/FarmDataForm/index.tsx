import React, { useCallback, useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import numbersOnly from 'util/numbersOnly';
import validateCnpj from 'util/validations/cnpj';
import validateCpf from 'util/validations/cpf';

import { useToast } from 'context/ToastContext';
import {
  Participant,
  MemberGroup,
  MemberType,
} from 'services/auth/interfaces/Participant';
import { Option } from 'components/shared/Select';
import {
  UfSelect,
  MemberTypeSelect,
  BaseInput,
  Input,
  Obs,
  MemberActionContainer,
  AddMemberButton,
  Button,
  ListContainer,
  Title,
  Separator,
  ActionsContainer,
  CustomLink,
  ButtonContainer,
  NextButton,
} from './styles';

interface Props {
  participant: Participant;
  addMemberGroup(member: MemberGroup): void;
  removeMemberGroup(member: MemberGroup): void;
  handleActionPageButton(): void;
  actived: boolean;
}

const FarmDataForm: React.FC<Props> = ({
  participant,
  addMemberGroup,
  removeMemberGroup,
  handleActionPageButton,
  actived,
}) => {
  const { addToast } = useToast();

  const [memberFormIsVisible, setMemberFormIsVisible] = useState(false);
  const [alreadyTouched, setAlreadyTouched] = useState(false);

  const [memberTypeSelected, setMemberTypeSelected] = useState<Option | null>(
    null,
  );
  const [ufSelected, setUfSelected] = useState<Option | null>(null);
  const [cpfCnpjInput, setCpfCnpjInput] = useState<string>('');
  const [nameInput, setNameInput] = useState<string>('');
  const [ieInput, setIeInput] = useState<string>('');
  const [cityInput, setCityInput] = useState<string>('');

  const inputRole = 'secondary';

  useEffect(() => {
    if (alreadyTouched) return;
    setMemberFormIsVisible(participant.members_group?.length > 0);
    setAlreadyTouched(true);
  }, [participant, alreadyTouched]);

  const handleCleanForm = useCallback(() => {
    setMemberTypeSelected(null);
    setUfSelected(null);
    setCpfCnpjInput('');
    setNameInput('');
    setIeInput('');
    setCityInput('');
  }, []);

  const isMemberFormValid = useCallback(() => {
    if (
      !(
        !!memberTypeSelected &&
        !!ufSelected &&
        !!cpfCnpjInput &&
        !!nameInput &&
        !!cityInput
      )
    )
      return false;

    if (
      numbersOnly(cpfCnpjInput).length !== 11 &&
      numbersOnly(cpfCnpjInput).length !== 14
    ) {
      throw new Error('Cpf ou Cnpj inválido');
    }

    if (numbersOnly(cpfCnpjInput).length === 14) {
      if (validateCnpj(cpfCnpjInput) === false) {
        throw new Error(`CNPJ inválido`);
      }
    }
    if (numbersOnly(cpfCnpjInput).length === 11) {
      if (validateCpf(cpfCnpjInput) === false) {
        throw new Error(`CPF inválido`);
      }
    }

    // MAYCONN
    // Validar CPF e CNPJ

    return true;
  }, [memberTypeSelected, ufSelected, cpfCnpjInput, nameInput, cityInput]);

  const handleAddMember = useCallback((): void => {
    try {
      if (!isMemberFormValid()) {
        addToast({ type: 'error', title: 'Verifique os dados do formulário!' });
        return;
      }
    } catch (e) {
      addToast({ type: 'error', title: e.message });
      return;
    }

    if (numbersOnly(cpfCnpjInput) === numbersOnly(participant.cpf)) {
      addToast({ type: 'error', title: 'CPF já utilizado no cadastro!' });
      return;
    }

    if (participant.members_group !== undefined) {
      let registeredDocument = false;
      participant.members_group.forEach(item => {
        if (numbersOnly(cpfCnpjInput) === numbersOnly(item.cpf_cnpj)) {
          addToast({ type: 'error', title: 'CPF ou CNPJ já cadastrados!' });
          registeredDocument = true;
        }
      });
      if (registeredDocument) {
        return;
      }
    }

    addMemberGroup({
      city: cityInput,
      cpf_cnpj: cpfCnpjInput,
      ie: ieInput,
      name: nameInput,
      type: memberTypeSelected?.value as MemberType,
      uf: ufSelected?.value || '',
    });

    handleCleanForm();
  }, [
    handleCleanForm,
    addToast,
    isMemberFormValid,
    cityInput,
    ieInput,
    cpfCnpjInput,
    nameInput,
    memberTypeSelected,
    ufSelected,
    addMemberGroup,
    participant.cpf,
    participant.members_group,
  ]);

  const handleRemoveMember = useCallback(
    (member: MemberGroup): void => {
      removeMemberGroup(member);
    },
    [removeMemberGroup],
  );

  const handleEditClick = useCallback(
    (member: MemberGroup) => {
      setMemberFormIsVisible(true);
      setMemberTypeSelected({ value: member.type, title: member.type });
      setUfSelected({ value: member.uf, title: member.uf });
      setCpfCnpjInput(member.cpf_cnpj);
      setNameInput(member.name);
      setIeInput(member.ie);
      setCityInput(member.city);
      handleRemoveMember(member);
      scroll.scrollTo(600);
    },
    [handleRemoveMember],
  );

  return (
    <div style={{ display: actived ? 'block' : 'none' }}>
      <Obs>
        Se você realiza compras com mais de um CNPJ/CPF, cadastre abaixo para
        que todas as notas do grupo sejam validas.
      </Obs>

      <Input
        name="producer_group_name"
        label="Nome do grupo do produtor"
        inputRole={inputRole}
      />

      <MemberActionContainer>
        <AddMemberButton
          onClick={() => setMemberFormIsVisible(!memberFormIsVisible)}
          type="button"
        >
          {memberFormIsVisible ? '-' : '+'} Adicionar CNPJ e/ou CPF do grupo
        </AddMemberButton>
      </MemberActionContainer>

      {memberFormIsVisible && (
        <>
          <MemberTypeSelect
            inputRole={inputRole}
            value={memberTypeSelected}
            setValue={value => setMemberTypeSelected(value)}
            label="Tipo*"
          />

          <Input
            name="cpf1232"
            label="CPF ou CNPJ*"
            pattern={
              cpfCnpjInput.length < 14 ? 'XXX.XXX.XXX-XX' : 'XX.XXX.XXX/XXXX-XX'
            }
            value={cpfCnpjInput}
            onChange={e => setCpfCnpjInput(e.currentTarget.value)}
            inputRole={inputRole}
          />

          <BaseInput
            label="Nome ou Razão Social*"
            value={nameInput}
            onChange={e => setNameInput(e.currentTarget.value)}
            inputRole={inputRole}
          />
          <BaseInput
            label="Inscrição Estadual"
            value={ieInput}
            onChange={e => setIeInput(e.currentTarget.value)}
            inputRole={inputRole}
          />
          <BaseInput
            label="Município*"
            value={cityInput}
            onChange={e => setCityInput(e.currentTarget.value)}
            inputRole={inputRole}
          />
          <UfSelect
            label="Estado*"
            inputRole={inputRole}
            value={ufSelected}
            setValue={value => setUfSelected(value)}
          />
          <ButtonContainer>
            <Button
              type="button"
              buttonRole="primary"
              onClick={handleAddMember}
            >
              Salvar
            </Button>
          </ButtonContainer>
        </>
      )}
      {participant.members_group?.length > 0 && (
        <>
          <Separator />
          <Title>Razões Sociais do Grupo</Title>
          <ListContainer>
            <table>
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Nome ou Razão Social</th>
                  <th>CPF ou CNPJ</th>
                  <th>Inscrição Estadual</th>
                  <th>Cidade</th>
                  <th>Estado</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {participant.members_group.map(item => (
                  <tr key={item.cpf_cnpj}>
                    <td>{item.type}</td>
                    <td>{item.name}</td>
                    <td>{item.cpf_cnpj}</td>
                    <td>{item.ie}</td>
                    <td>{item.city}</td>
                    <td>{item.uf}</td>
                    <td>
                      <ActionsContainer>
                        <CustomLink onClick={() => handleEditClick(item)}>
                          editar
                        </CustomLink>
                        <CustomLink onClick={() => handleRemoveMember(item)}>
                          excluir
                        </CustomLink>
                      </ActionsContainer>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ListContainer>
        </>
      )}
      <ButtonContainer>
        <NextButton
          type="button"
          buttonRole="primary"
          onClick={handleActionPageButton}
        >
          Próximo
        </NextButton>
      </ButtonContainer>
    </div>
  );
};

export default FarmDataForm;
