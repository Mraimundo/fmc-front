import React, { useState, useEffect, useCallback } from 'react';
import { EstablishmentTypes } from 'config/constants';
import { Option } from 'components/shared/Select';
import Select from 'components/shared/Select/BaseSelect';

interface Props {
  className?: string;
  inputRole?: 'primary' | 'secondary';
  disabled?: boolean;
  label?: string;
  setValue(value: Option | null): void;
  value: Option | null;
  placeholder?: string;
}

const TypeSelect: React.FC<Props> = ({
  className,
  inputRole = 'primary',
  disabled = false,
  label,
  setValue,
  value,
  placeholder,
}) => {
  const [data, setData] = useState<Option[]>([]);

  useEffect(() => {
    setData([
      {
        title: EstablishmentTypes.Resale,
        value: EstablishmentTypes.Resale,
      },
      {
        title: EstablishmentTypes.Cooperative,
        value: EstablishmentTypes.Cooperative,
      },
    ]);
  }, []);

  const loadItems = useCallback((): Option[] => {
    return data;
  }, [data]);

  return (
    <Select
      label={label}
      loadItems={loadItems}
      className={className}
      inputRole={inputRole}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      setValue={setValue}
    />
  );
};

export default TypeSelect;
