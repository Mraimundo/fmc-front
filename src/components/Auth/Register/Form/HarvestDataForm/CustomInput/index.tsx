import React from 'react';

import { Container, Box, Label, Input } from './styles';

interface Props {
  name: string;
  title: string;
}

const CustomInput: React.FC<Props> = ({ name, title }) => {
  return (
    <Container>
      <Label>{title}</Label>
      <Box>
        <Input name={name} numbersOnly label="" />
        <span>hectares</span>
      </Box>
    </Container>
  );
};

export default CustomInput;
