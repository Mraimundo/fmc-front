import React from 'react';
import ReactLoading from 'react-loading';

import { SingleLineWrapper } from './style';

interface Props {
  colSpan: number;
}

const Loading: React.FC<Props> = ({ colSpan }) => {
  return (
    <tbody>
      <tr>
        <td colSpan={colSpan}>
          <SingleLineWrapper>
            <ReactLoading type="bars" color="#dd0022" height={24} width={24} />
            carregando...
          </SingleLineWrapper>
        </td>
      </tr>
    </tbody>
  );
};

export default Loading;
