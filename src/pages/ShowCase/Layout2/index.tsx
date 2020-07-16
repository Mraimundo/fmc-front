import React, { useState } from 'react';
import { Option } from 'components/shared/Select';
import Grid from './ParticipantsGrid';
import {
  Container,
  Content,
  TypesSelect,
  CategoriesSelect,
  Box,
} from './styles';

const Layout2: React.FC = () => {
  const [categorySelected, setCategorySelected] = useState<Option | null>(null);
  const [typeSelected, setTypeSelected] = useState<Option | null>(null);

  return (
    <Container>
      <Content>
        <h3>Vitrine de prêmios</h3>
        <span>Selecione o cliente que deseja acessar</span>
        <TypesSelect
          value={categorySelected}
          setValue={value => setCategorySelected(value)}
        />
        <CategoriesSelect
          value={typeSelected}
          setValue={value => setTypeSelected(value)}
        />
        <Box>
          <h3>Meus chamados</h3>
          <Grid />
        </Box>
      </Content>
    </Container>
  );
};

export default Layout2;
