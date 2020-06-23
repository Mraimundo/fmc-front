import React from 'react';
import { useForm, FormContext } from 'react-hook-form';

import { Container, Button, RolesSelect, FilialSelect } from './styles';

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
          <FilialSelect name="filiais" inputRole="secondary" />
          <RolesSelect name="roles" inputRole="secondary" />
          <Button type="button" buttonRole="tertiary">
            Filtrar
          </Button>
        </form>
      </FormContext>
    </Container>
  );
};

export default Filters;
