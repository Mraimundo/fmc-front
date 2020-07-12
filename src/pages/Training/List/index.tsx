import React, { useState } from 'react';

import { Option } from 'components/shared/Select';
import OpenTrainingsGrid from './OpenTrainingsGrid';
import FinishedTrainingsTable from './FinishedTrainingsTable';

import { Container, Content, CategoriesSelect, Box } from './styles';

const Training: React.FC = () => {
  const [categorySelected, setCategorySelected] = useState<Option | null>(null);
  return (
    <Container>
      <Content>
        <h3>Treinamentos</h3>
        <CategoriesSelect
          value={categorySelected}
          setValue={value => setCategorySelected(value)}
          label="Treinamentos disponíveis"
        />
        <OpenTrainingsGrid />
        <Box>
          <h3>Meus treinamentos</h3>
          <FinishedTrainingsTable />
        </Box>
      </Content>
    </Container>
  );
};

export default Training;
