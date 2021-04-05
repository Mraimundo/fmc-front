import React from 'react';

import Input from 'components/shared/Input/BaseInput';
import { Container, Button, Title, FiltersBox } from './styles';

const Filters: React.FC = () => {
  return (
    <Container>
      <Title>Pesquisar</Title>
      <FiltersBox>
        <Input
          placeholder="Nome, Grupo de Fazenda, E-mail ou CPF"
          inputRole="primary"
        />
        <Button type="button" buttonRole="primary">
          Buscar
        </Button>
      </FiltersBox>
    </Container>
  );
};

export default Filters;
