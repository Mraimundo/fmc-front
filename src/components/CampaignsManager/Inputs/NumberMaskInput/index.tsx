import React, { useCallback } from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';

interface Props {
  component: React.FunctionComponent;
  placeholder?: string;
  onChange(v: number): void;
  value: number;
  maxLength?: number | null;
  disabled?: boolean;
  formatValue(value: string | number): string;
}
const PointsInput: React.FC<Props> = ({
  component,
  placeholder = '0 Kg/L',
  onChange,
  value,
  maxLength = null,
  disabled = false,
  formatValue,
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
      format={formatValue}
      allowNegative={false}
      placeholder={placeholder}
      customInput={component}
      onValueChange={handleChange}
      isAllowed={(props: NumberFormatValues) => {
        const { formattedValue, floatValue } = props;
        if (!maxLength || !floatValue || !formattedValue) return true;

        return floatValue <= maxLength * 100;
      }}
      disabled={disabled}
    />
  );
};

export default PointsInput;
