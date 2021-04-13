import React from 'react';
import { Container, Box, Label, Input } from './styles';

interface Props {
  name: string;
  title: string;
  value: string;
  disabled?: boolean;
}

const HarvestInput: React.FC<Props> = ({
  name,
  title,
  value,
  disabled = true,
}) => {
  return (
    <Container>
      <Box>
        <Label>{title}</Label>
      </Box>
      <Box>
        <Input
          name={name}
          label=""
          placeholder="0.000"
          value={value}
          disabled={disabled}
        />
        <span>hectares</span>
      </Box>
    </Container>
  );
};

export default HarvestInput;
