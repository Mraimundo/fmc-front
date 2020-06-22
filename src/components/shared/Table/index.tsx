import React from 'react';

import { Table as ResponsiveTable } from './style';
import Head, { Header } from './Head';
import Body, { Data } from './Body';
import Loading from './Loading';
import NoContent from './NoContent';

interface Props {
  headers: Header[];
  data?: Data[] | Record<string, any>[];
  isFetching?: boolean;
  className?: string;
  noResultText?: string;
  tableRole?: 'primary' | 'secondary';
}

const Table: React.FC<Props> = ({
  headers,
  data = [],
  isFetching = false,
  className = '',
  noResultText = 'sem resultados',
  tableRole = 'primary',
}) => {
  const hasData = data.length > 0;

  return (
    <ResponsiveTable className={className} tableRole={tableRole}>
      <Head headers={headers} />
      {hasData && <Body data={data} headers={headers} />}
      {isFetching && <Loading colSpan={headers.length} />}
      {!isFetching && !hasData && (
        <NoContent colSpan={headers.length} text={noResultText} />
      )}
    </ResponsiveTable>
  );
};

export default Table;
