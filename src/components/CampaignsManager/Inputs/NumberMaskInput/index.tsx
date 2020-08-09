import React, { useCallback } from 'react';
import NumberFormat, {
  NumberFormatValues,
  NumberFormatProps,
} from 'react-number-format';

type BaseProps = Pick<
  NumberFormatProps,
  Exclude<keyof NumberFormatProps, 'onChange'>
>;

interface Props extends BaseProps {
  component: React.FunctionComponent;
  placeholder?: string;
  onChange(v: number): void;
  value: number;
  maxLength?: number;
  disabled?: boolean;
  formatValue(value: string | number): string;
}
const PointsInput: React.FC<Props> = ({
  component,
  placeholder = '0 Kg/L',
  value,
  maxLength,
  disabled = false,
  formatValue,
  onChange,
  ...rest
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
      onValueChange={handleChange}
      placeholder={placeholder}
      customInput={component}
      isAllowed={(props: NumberFormatValues) => {
        const { formattedValue, floatValue } = props;
        if (!maxLength || !floatValue || !formattedValue) return true;

        return floatValue <= maxLength * 100;
      }}
      disabled={disabled}
      {...rest}
    />
  );
};

export default PointsInput;
