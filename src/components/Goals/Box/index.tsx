import React from 'react';

import { WrapperBox, BoxTitle, Body } from './styles';

interface BoxProps {
  title: string;
  reverse?: boolean;
  children: React.ReactNode;
}
const Box: React.FC<BoxProps> = ({ title, reverse = false, children }) => {
  return (
    <WrapperBox reverse={reverse}>
      <BoxTitle>{title}</BoxTitle>
      <Body>{children}</Body>
    </WrapperBox>
  );
};

export default Box;
