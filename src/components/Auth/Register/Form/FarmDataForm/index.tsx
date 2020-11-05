import React, { useCallback, useEffect, useState } from 'react';

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
  DeleteLink,
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
    setMemberFormIsVisible(participant.members_group?.length > 0);
  }, [participant]);

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

    if (cpfCnpjInput.length !== 11 && cpfCnpjInput.length !== 14) {
      throw new Error('Cpf ou Cnpj inválido');
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
  ]);

  const handleRemoveMember = useCallback(
    (member: MemberGroup): void => {
      removeMemberGroup(member);
    },
    [removeMemberGroup],
  );

  return (
    <div style={{ display: actived ? 'block' : 'none' }}>
      <Obs>
        *Somente para produtores que realizam compras usando mais de um
        CPF/CNPJ.
      </Obs>

      <Input
        name="producer_group_name"
        label="Nome do grupo do produtor"
        inputRole={inputRole}
      />

      <MemberActionContainer>
        <AddMemberButton
          onClick={() => setMemberFormIsVisible(true)}
          type="button"
        >
          - Adicionar CNPJ e/ou CPF cadastrados do grupo
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
          <BaseInput
            label="CPF ou CNPJ*"
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
                <th>Tipo</th>
                <th>Nome ou Razão Social</th>
                <th>CPF ou CNPJ</th>
                <th>Inscrição Estadual</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>&nbsp;</th>
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
                      <DeleteLink onClick={() => handleRemoveMember(item)}>
                        excluir
                      </DeleteLink>
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