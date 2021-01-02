import React, { useEffect, useMemo, useState } from 'react';

import { Campaign } from 'services/campaigns-counting/getCampaigns';
import headers from './headers';
import { Container } from './styles';

interface Props {
  data: Campaign[];
  isFetching: boolean;
}

interface TableData extends Campaign {
  result: {
    id: number;
    status: 'empty' | 'loaded';
  };
}

const Table: React.FC<Props> = ({ data, isFetching }) => {
  const [tableData, setTableData] = useState<TableData[]>([]);

  useEffect(() => {
    setTableData(
      data.map(item => ({
        ...item,
        result: { id: item.id, status: item.status },
      })),
    );
  }, [data]);

  return useMemo(
    () => (
      <Container
        headers={headers}
        data={tableData}
        noResultText="Nenhum Participante encontrado"
        isFetching={isFetching}
      />
    ),
    [isFetching, tableData],
  );
};

export default Table;
