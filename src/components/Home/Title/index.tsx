import React from 'react';

import { StyledTitle } from './styles';

interface TitleProps {
  children: React.ReactNode;
  reverse?: boolean;
}
const Title: React.FC<TitleProps> = ({ children, reverse = false }) => {
  return <StyledTitle reverse={reverse}>{children}</StyledTitle>;
};

export default Title;
