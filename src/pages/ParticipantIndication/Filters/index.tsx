import React from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { Option } from 'components/shared/Select';

import { Container, Button, RolesSelect, FilialSelect } from './styles';

interface FilterFormData {
  roles: Option;
  filiais: Option;
}

interface Props {
  filter(
    establishmentId: number,
    roleId: number,
    subsidiaryId: number,
  ): void | Promise<void>;
  establishmentId: number;
}

const Filters: React.FC<Props> = ({ filter, establishmentId }) => {
  const methods = useForm<FilterFormData>({
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async data => {
    const roleId = parseInt(data.roles?.value || '0', 0) || 0;
    const subsidiaryId = parseInt(data.filiais?.value || '0', 0);
    filter(establishmentId, roleId, subsidiaryId);
  });

  return (
    <Container>
      <FormContext {...methods}>
        <form onSubmit={onSubmit}>
          <FilialSelect
            name="filiais"
            inputRole="secondary"
            establishmentId={establishmentId}
          />
          <RolesSelect name="roles" inputRole="secondary" />
          <Button type="submit" buttonRole="primary">
            Filtrar
          </Button>
        </form>
      </FormContext>
    </Container>
  );
};

export default Filters;
