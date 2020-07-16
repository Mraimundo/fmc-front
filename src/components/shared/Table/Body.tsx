import React from 'react';
import { Tbody, Tr, Td } from 'react-super-responsive-table';
import { Header } from './Head';

export interface Data {
  [key: string]: string;
}

interface Props {
  headers: Header[];
  data: Data[];
}

const Body: React.FC<Props> = ({ headers, data }) => {
  return (
    <Tbody>
      {data.map((value, index) => (
        <Tr key={`tr-${index}`}>
          {headers.map(({ dataValue, fn, className }) => (
            <Td key={dataValue} className={className}>
              {fn ? fn(value[dataValue]) : value[dataValue]}
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  );
};

export default Body;
