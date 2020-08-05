import React, { useState, useEffect } from 'react';

import { useForm, FormContext } from 'react-hook-form';

import { Option } from 'components/shared/Select';
import RolesSelect from 'components/shared/Vendavall/Roles/ProtectedRolesSelect';
import FilialSelect from 'components/shared/Vendavall/Establishments/FilialSelect';
import ICreateParticipantIndicateDTO from 'services/participantIndication/dtos/ICreateParticipantIndicateDTO';
import IEditParticipantIndicateDTO from 'services/participantIndication/dtos/IEditParticipantIndicateDTO';
import { Establishment } from 'services/auth/getEstablishments';
import getschemaValidations from './getSchemaValidations';
import ImportFileForm from './ImportFile';

import { Container, Input, BoxPhone, Button, PanelIndication } from './styles';

export interface FormData {
  subsidiary_select: Option | null;
  role_select: Option | null;
  cpf: string;
  email: string;
  name: string;
  area_code: string;
  cell_phone: string;
  establishment_id: number;
}

interface Props {
  saveIndication(
    data: ICreateParticipantIndicateDTO | IEditParticipantIndicateDTO,
  ): Promise<boolean> | boolean;
  editing?: boolean;
  indicationData?: FormData;
  establishment: Establishment;
}

type Type = 'individual' | 'multiple';

const Form: React.FC<Props> = ({
  saveIndication,
  editing = false,
  indicationData,
  establishment,
}) => {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<Type>('individual');

  const inputRole = 'secondary';

  const schema = getschemaValidations();

  const methods = useForm<FormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset(indicationData || { subsidiary_select: null, role_select: null });
  }, [indicationData, reset]);

  useEffect(() => {
    if (editing) {
      setType('individual');
    }
  }, [editing]);

  const onSubmit = handleSubmit(async data => {
    setLoading(true);
    if (
      await saveIndication({
        role_id: parseInt(data.role_select?.value || '0', 0),
        cpf: data.cpf,
        email: data.email,
        name: data.name,
        area_code: data.area_code,
        cell_phone: data.cell_phone,
        establishment_id: establishment.id,
        subsidiary_id: parseInt(data.subsidiary_select?.value || '0', 0),
      })
    ) {
      reset();
    }
    setLoading(false);
  });

  return (
    <Container>
      {!editing && (
        <PanelIndication>
          <button
            type="button"
            className={type === 'individual' ? '_selected' : ''}
            onClick={() => setType('individual')}
          >
            Individual
          </button>
          <button
            type="button"
            className={type === 'multiple' ? '_selected' : ''}
            onClick={() => setType('multiple')}
          >
            Em Lote
          </button>
        </PanelIndication>
      )}
      {editing && <h3>Editando indicação</h3>}
      {type === 'multiple' ? (
        <ImportFileForm />
      ) : (
        <FormContext {...methods}>
          <form onSubmit={onSubmit}>
            <FilialSelect
              name="subsidiary_select"
              inputRole="secondary"
              establishmentId={establishment.id}
              disabled={editing}
            />
            <RolesSelect
              name="role_select"
              inputRole="secondary"
              disabled={editing}
            />
            <Input name="name" label="Nome completo*" inputRole={inputRole} />
            <Input
              name="cpf"
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
                label="DDD"
                inputRole={inputRole}
              />
              <Input
                name="cell_phone"
                numbersOnly
                label="Celular"
                pattern="X XXXX-XXXX"
                inputRole={inputRole}
              />
            </BoxPhone>
            <Input name="email" label="E-mail*" inputRole={inputRole} />
            <Button type="submit" buttonRole="primary" loading={loading}>
              Salvar
            </Button>
          </form>
        </FormContext>
      )}
    </Container>
  );
};

export default Form;
