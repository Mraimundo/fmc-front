import React from 'react';

interface Props {
  data: Research[];
}

const Table: React.FC<Props> = ({ data }) => {
  const headers = [
    {
      column: 'Ano',
      dataValue: 'year',
    },
    {
      column: 'Mes',
      dataValue: 'month',
    },
    {
      column: 'Data de Cadastro',
      dataValue: 'created_at',
    },
  ];

  return (
    <CustomersTable
      headers={headers}
      data={data}
      noResultText="Nenhuma Pesquisa encontrada"
    />
  );
};

export default Table;
