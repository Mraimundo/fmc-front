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

  const onSubmit = handleSubmit(async data => {
    console.log(data);
  });

  return (
    <Container>
      <FormContext {...methods}>
        <form onSubmit={onSubmit}>
          <FilialSelect
            name="filiais"
            inputRole="secondary"
            establishmentId={1}
          />
          <RolesSelect name="roles" inputRole="secondary" />
          <Button type="submit" buttonRole="tertiary">
            Filtrar
          </Button>
        </form>
      </FormContext>
    </Container>
  );
};

export default Filters;
