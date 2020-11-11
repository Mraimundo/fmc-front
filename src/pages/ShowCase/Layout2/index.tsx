import React, { useState, useEffect } from 'react';
import { Option } from 'components/shared/Select';
import getParticipants from 'services/showcase/getMyGroupOfParticipantsToAccessPI';
import transformer, {
  Response as Data,
} from 'services/showcase/transformers/toParticipantGroupGridTransformer';
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

  const [isFetching, setIsFetching] = useState(false);
  const [tableData, setTableData] = useState<Data[]>([]);

  useEffect(() => {
    setIsFetching(true);
    getParticipants({
      typeName: typeSelected?.title,
      categoryName: categorySelected?.title,
    })
      .then(data => {
        setTableData(transformer(data));
      })
      .finally(() => setIsFetching(false));
  }, [typeSelected, categorySelected]);

  return (
    <Container>
      <Content>
        <h3>Vitrine de prêmios</h3>
        <span>Selecione o cliente que deseja acessar</span>
        <TypesSelect
          value={typeSelected}
          setValue={value => setTypeSelected(value)}
          placeholder="Tipo de cliente"
        />
        <CategoriesSelect
          value={categorySelected}
          setValue={value => setCategorySelected(value)}
          placeholder="Categoria"
        />
        <Box>
          <h3>Meus clientes</h3>
          <Grid isFetching={isFetching} tableData={tableData} />
        </Box>
      </Content>
    </Container>
  );
};

export default Layout2;
