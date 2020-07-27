import React, { useCallback } from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';

import { formatPointsInput } from 'util/points';

interface Props {
  component: React.FunctionComponent;
  placeholder?: string;
  onChange(v: number): void;
  value: number;
  maxLength?: number | null;
  disabled?: boolean;
}
const PointsInput: React.FC<Props> = ({
  component,
  placeholder = '0,00',
  onChange,
  value,
  maxLength = null,
  disabled = false,
}) => {
  const handleChange = useCallback(
    ({ floatValue }: NumberFormatValues) =>
      onChange(floatValue ? floatValue / 100 : 0),
    [onChange],
  );

  return (
    <NumberFormat
      thousandSeparator
      type="tel"
      value={value * 100}
      format={formatPointsInput}
      allowNegative={false}
      placeholder={placeholder}
      customInput={component}
      onValueChange={handleChange}
      isAllowed={(props: NumberFormatValues) => {
        const { formattedValue, floatValue } = props;
        if (maxLength === null || !floatValue || !formattedValue) return true;

        return floatValue <= maxLength * 100;
      }}
      disabled={disabled}
    />
  );
};

export default PointsInput;
