import React from 'react';
import { FaFrown } from 'react-icons/fa';

import { SingleLineWrapper } from './style';

interface Props {
  colSpan: number;
  text?: string;
}

const NoContent: React.FC<Props> = ({ colSpan, text = 'sem resultados' }) => {
  return (
    <tbody>
      <tr>
        <td colSpan={colSpan}>
          <SingleLineWrapper>
            <FaFrown />
            {text}
          </SingleLineWrapper>
        </td>
      </tr>
    </tbody>
  );
};

export default NoContent;
