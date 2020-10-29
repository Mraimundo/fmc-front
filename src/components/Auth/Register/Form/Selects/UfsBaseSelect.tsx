import React, { useEffect, useState, useCallback } from 'react';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';
import getData from 'services/address/getUfList';
import transformer from 'services/address/transformers/ufToSelectOptions';

interface Props {
  className?: string;
  label?: string;
  setValue(value: Option | null): void;
  value: Option | null;
  placeholder?: string;
  inputRole: 'primary' | 'secondary';
}

const UfsSelect: React.FC<Props> = ({
  className,
  value,
  setValue,
  label,
  placeholder,
  inputRole = 'primary',
}) => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    getData().then(data => setOptions(transformer(data)));
  }, []);

  const loadItems = useCallback(() => {
    return options;
  }, [options]);

  return (
    <BaseSelect
      label={label}
      loadItems={loadItems}
      className={className}
      value={value}
      setValue={setValue}
      placeholder={placeholder}
      inputRole={inputRole}
    />
  );
};

export default UfsSelect;
