import React from 'react';

import { StyledTitle } from './styles';

type Props = {
  children: React.ReactNode;
};

const Title: React.FC<Props> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
