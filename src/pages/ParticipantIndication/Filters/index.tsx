import React from 'react';
import { useForm, FormContext } from 'react-hook-form';

import RolesSelect from 'components/shared/Vendavall/Roles/PublicRolesSelect';
import { Container, Button } from './styles';

interface FilterFormData {
  roles: string;
  filiais: string;
}

const Filters: React.FC = () => {
  const methods = useForm<FilterFormData>({
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit } = methods;

  return (
    <Container>
      <FormContext {...methods}>
        <form onSubmit={() => console.log('teste')}>
          <RolesSelect name="filiais" />
          <RolesSelect name="roles" />
          <Button type="button" buttonRole="primary">
            Filtrar
          </Button>
        </form>
      </FormContext>
    </Container>
  );
};

export default Filters;
