import React, { useState } from 'react';

import { Option } from 'components/shared/Select';
import CategoriesSelect from 'components/Training/CategoriesSelect';
import OpenTrainingsGrid from './OpenTrainingsGrid';
import FinishedTrainingsTable from './FinishedTrainingsTable';

import { Container, Content } from './styles';

const Training: React.FC = () => {
  const [categorySelected, setCategorySelected] = useState<Option | null>(null);
  return (
    <Container>
      <Content>
        <h3>Treinamento</h3>
        <CategoriesSelect
          value={categorySelected}
          setValue={value => setCategorySelected(value)}
          label="Treinamentos disponíveis"
        />
        <OpenTrainingsGrid />
        <FinishedTrainingsTable />
      </Content>
    </Container>
  );
};

export default Training;
