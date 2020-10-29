import React, { useCallback, useState } from 'react';
import numbersOnly from 'util/numbersOnly';
import { formatPoints } from 'util/points';

import { Container, Box, Label, Input, ExtraInput } from './styles';

interface Props {
  name: string;
  title: string;
  extraInfo?: string;
}

const CustomInput: React.FC<Props> = ({ name, title, extraInfo }) => {
  const [value, setValue] = useState('');

  const handleChangeValue = useCallback((v: string) => {
    setValue(`${formatPoints(parseInt(numbersOnly(v) || '0', 0), 0, 0)}`);
  }, []);

  return (
    <Container>
      <Box>
        <Label>{title}</Label>
        {!!extraInfo && (
          <ExtraInput name={extraInfo} label="" placeholder="Nome" />
        )}
      </Box>
      <Box>
        <Input
          name={name}
          label=""
          value={value}
          onChange={e => handleChangeValue(e.target.value)}
          placeholder="0.000"
        />
        <span>hectares</span>
      </Box>
    </Container>
  );
};

export default CustomInput;
