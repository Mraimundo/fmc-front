import React from 'react';

import { StyledLabel } from './styles';

type Props = {
  children: React.ReactNode;
  htmlFor?: string;
};

const Label: React.FC<Props> = ({ children, htmlFor = '' }) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;
