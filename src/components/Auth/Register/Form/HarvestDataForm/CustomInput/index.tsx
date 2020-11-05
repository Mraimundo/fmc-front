import React, { useCallback, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import numbersOnly from 'util/numbersOnly';
import { formatPoints } from 'util/points';

import { Container, Box, Label, Input, ExtraInput } from './styles';

interface Props {
  name: string;
  title: string;
  extraInfo?: string;
}

const CustomInput: React.FC<Props> = ({ name, title, extraInfo }) => {
  // const [value, setValue] = useState('');

  const { setValue } = useFormContext();

  const handleChangeValue = useCallback(
    (v: string) => {
      setValue(
        name,
        `${formatPoints(parseInt(numbersOnly(v) || '0', 0), 0, 0)}`,
      );
    },
    [setValue, name],
  );

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
          onChange={e => handleChangeValue(e.target.value)}
          placeholder="0.000"
        />
        <span>hectares</span>
      </Box>
    </Container>
  );
};

export default CustomInput;
