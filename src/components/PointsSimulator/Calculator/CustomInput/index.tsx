import React, { useCallback } from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';

import { formatPointsInput, formatKglInput } from 'util/points';

type Type = 'money' | 'kilograma';

interface Props {
  component?: React.FunctionComponent;
  placeholder?: string;
  onChange?(v: number): void;
  value?: number;
  defaultValue?: number;
  maxLength?: number | null;
  disabled?: boolean;
  type: Type;
}
const CustomInput: React.FC<Props> = ({
  component,
  placeholder = '0,00',
  onChange,
  value,
  defaultValue,
  maxLength = null,
  disabled = false,
  type,
}) => {
  const handleChange = useCallback(
    ({ floatValue }: NumberFormatValues) => {
      const handler = setTimeout(() => {
        if (typeof onChange === 'undefined') return;
        onChange((floatValue || 0) / (type === 'money' ? 100 : 1));
      }, 700);

      return () => {
        clearTimeout(handler);
      };
    },
    [onChange, type],
  );

  const format = type === 'money' ? formatPointsInput : formatKglInput;

  return (
    <NumberFormat
      thousandSeparator
      type="tel"
      value={
        typeof value === 'number'
          ? (value || 0) * (type === 'money' ? 100 : 1)
          : undefined
      }
      defaultValue={(defaultValue || 0) * (type === 'money' ? 100 : 1)}
      format={format}
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

export default CustomInput;
