import React from 'react';
import { Thead, Tr, Th } from 'react-super-responsive-table';

export interface Header {
  column: string;
  dataValue: string;
  fn?(value: string | Record<string, any>): React.ReactNode;
  className?: string;
}

interface Props {
  headers: Header[];
}

const Head: React.FC<Props> = ({ headers }) => {
  return (
    <Thead>
      <Tr>
        {headers.map(({ column, dataValue, className }) => (
          <Th key={dataValue} className={className}>
            {column}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};

export default Head;
