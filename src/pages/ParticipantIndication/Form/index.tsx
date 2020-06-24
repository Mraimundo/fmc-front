import React, { useState } from 'react';

import { useForm, FormContext } from 'react-hook-form';

import { FiUser, FiLock, FiSmartphone } from 'react-icons/fi';
import RolesSelect from 'components/shared/Vendavall/Roles/ProtectedRolesSelect';
import FilialSelect from 'components/shared/Vendavall/Establishments/FilialSelect';
import ICreateParticipantIndicateDTO from 'services/participantIndication/dtos/ICreateParticipantIndicateDTO';
import getschemaValidations from './getSchemaValidations';

import { Container, Input, BoxPhone, Button } from './styles';

interface Props {
  saveIndication(data: ICreateParticipantIndicateDTO): Promise<void> | void;
}

const Form: React.FC<Props> = ({ saveIndication }) => {
  const [loading, setLoading] = useState(false);
  const inputRole = 'secondary';

  const schema = getschemaValidations();

  const methods = useForm<ICreateParticipantIndicateDTO>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit } = methods;
  const onSubmit = handleSubmit(async data => {
    setLoading(true);
    // Temporário // MAYCONN
    // await saveIndication({ ...data, establishment_id: 3 });
    setLoading(false);
  });

  return (
    <Container>
      <h3>Indique um participante</h3>
      <h4>Indique os participantes da sua Revenda</h4>
      <span>Agro Amazônia</span>
      <FormContext {...methods}>
        <form onSubmit={onSubmit}>
          <FilialSelect name="subsidiary_id" inputRole="secondary" />
          <RolesSelect name="role_id" inputRole="secondary" />
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
