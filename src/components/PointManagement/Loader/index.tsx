import React from 'react';

import { Wrapper, StyledLoader } from './styles';

type Props = {
  children: React.ReactNode;
};
const Loader: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <StyledLoader type="ThreeDots" height={25} width={25} />
      {children}
    </Wrapper>
  );
};

export default Loader;
