import React from 'react';
import { ReactSVG } from 'react-svg';

import trash from 'assets/images/point-management/trash-icon.svg';
import { Wrapper } from './styles';

interface RemoveAllScoresProps {
  onClick(): void;
}
const RemoveAllScores: React.FC<RemoveAllScoresProps> = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <ReactSVG src={trash} />
      Remover atribuições
    </Wrapper>
  );
};

export default RemoveAllScores;
