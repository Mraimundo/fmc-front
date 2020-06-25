import React, { useState, useEffect } from 'react';

import { useForm, FormContext } from 'react-hook-form';

import { Option } from 'components/shared/Select';
import { FiUser, FiLock, FiSmartphone } from 'react-icons/fi';
import RolesSelect from 'components/shared/Vendavall/Roles/ProtectedRolesSelect';
import FilialSelect from 'components/shared/Vendavall/Establishments/FilialSelect';
import ICreateParticipantIndicateDTO from 'services/participantIndication/dtos/ICreateParticipantIndicateDTO';
import IEditParticipantIndicateDTO from 'services/participantIndication/dtos/IEditParticipantIndicateDTO';
import getschemaValidations from './getSchemaValidations';

import { Container, Input, BoxPhone, Button } from './styles';

export interface FormData {
  role_select: Option;
  cpf: string;
  email: string;
  name: string;
  area_code: string;
  cell_phone: string;
  establishment_id: number;
  subsidiary_select: Option;
}

interface Props {
  saveIndication(
    data: ICreateParticipantIndicateDTO | IEditParticipantIndicateDTO,
  ): Promise<boolean> | boolean;
  editing?: boolean;
  indicationData?: FormData;
  establishmentId: number;
}

const Form: React.FC<Props> = ({
  saveIndication,
  editing = false,
  indicationData,
  establishmentId,
}) => {
  const [loading, setLoading] = useState(false);
  const inputRole = 'secondary';

  const schema = getschemaValidations();

  const methods = useForm<FormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset(indicationData || {});
  }, [indicationData, reset]);

  const onSubmit = handleSubmit(async data => {
    setLoading(true);
    // Temporário // MAYCONN ID DO ESTABELECIMENTO
    if (
      await saveIndication({
        role_id: parseInt(data.role_select.value, 0),
        cpf: data.cpf,
        email: data.email,
        name: data.name,
        area_code: data.area_code,
        cell_phone: data.cell_phone,
        establishment_id: establishmentId,
        subsidiary_id: parseInt(data.subsidiary_select.value, 0),
      })
    ) {
      reset();
    }
    setLoading(false);
  });

  return (
    <Container>
      {editing ? <h3>Editando indicação</h3> : <h3>Indique um participante</h3>}
      <h4>Indique os participantes da sua Revenda</h4>
      <span>Agro Amazônia</span>
      <FormContext {...methods}>
        <form onSubmit={onSubmit}>
          <FilialSelect
            name="subsidiary_select"
            inputRole="secondary"
            establishmentId={1}
            disabled={editing}
          />
          <RolesSelect
            name="role_select"
            inputRole="secondary"
            disabled={editing}
          />
          <Input
            name="name"
            icon={FiUser}
            label="Nome completo*"
            inputRole={inputRole}
          />
          <Input
            name="cpf"
            icon={FiUser}
            label="CPF*"
            numbersOnly
            pattern="XXX.XXX.XXX-XX"
            inputRole={inputRole}
          />
          <BoxPhone>
            <Input
              name="area_code"
              numbersOnly
              pattern="(XX)"
              label="DDD*"
              inputRole={inputRole}
            />
            <Input
              name="cell_phone"
              icon={FiSmartphone}
              numbersOnly
              label="Celular*"
              pattern="X XXXX-XXXX"
              inputRole={inputRole}
            />
          </BoxPhone>
          <Input
            name="email"
            icon={FiUser}
            label="Email*"
            inputRole={inputRole}
          />
          <Button type="submit" buttonRole="tertiary" loading={loading}>
            Salvar
          </Button>
        </form>
      </FormContext>
    </Container>
  );
};

export default Form;
