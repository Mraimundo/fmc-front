import React from 'react';

import { StyledTitle } from './styles';

type Props = {
  children: React.ReactNode;
  center?: boolean;
};

const Title: React.FC<Props> = ({ children, center = false }) => {
  return <StyledTitle center={center}>{children}</StyledTitle>;
};

export default Title;
