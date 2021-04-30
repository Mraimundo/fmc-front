import React from 'react';

import { StyledTitle } from './styles';

interface TitleProps {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}
const Title: React.FC<TitleProps> = ({
  children,
  reverse = false,
  className,
}) => {
  return (
    <StyledTitle className={className} reverse={reverse}>
      {children}
    </StyledTitle>
  );
};

export default Title;
