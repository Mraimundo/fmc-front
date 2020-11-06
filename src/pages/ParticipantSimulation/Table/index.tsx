import React, { useMemo } from 'react';

import headers from './headers';
import { Container } from './styles';

interface TableData {
  clientCode: string;
  name: string;
  email: string;
  id: number;
}

interface Props {
  data: TableData[];
  isFetching: boolean;
}

const Table: React.FC<Props> = ({ data, isFetching }) => {
  return useMemo(
    () => (
      <Container
        headers={headers}
        data={data}
        noResultText="Nenhum Participante encontrado"
        isFetching={isFetching}
      />
    ),
    [data, isFetching],
  );
};

export default Table;
