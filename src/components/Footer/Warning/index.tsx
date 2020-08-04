import React from 'react';

import { Wrapper, Rectangle } from './styles';

const Warning: React.FC = () => {
  return (
    <Wrapper>
      <Rectangle>
        <div>
          <span>- PRODUTO PERIGOSO E DE USO AGRÍCOLA.</span>
          <span>- CONSULTE SEMPRE UM ENGENHEIRO AGRÔNOMO.</span>
        </div>
        <div>
          <span>- VENDA SOB RECEITUÁRIO AGRONÔMICO.</span>
          <span>- LEIA O RÓTULO E A BULA.</span>
        </div>
      </Rectangle>
    </Wrapper>
  );
};

export default Warning;
