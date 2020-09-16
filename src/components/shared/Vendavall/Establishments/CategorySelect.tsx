import React, { useState, useEffect, useCallback } from 'react';
import { Option } from 'components/shared/Select';
import Select from 'components/shared/Select/BaseSelect';
import { EstablishmentCategories } from 'config/constants';

interface Props {
  className?: string;
  inputRole?: 'primary' | 'secondary';
  disabled?: boolean;
  label?: string;
  setValue(value: Option | null): void;
  value: Option | null;
  placeholder?: string;
}

const CategorySelect: React.FC<Props> = ({
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
    setData(
      EstablishmentCategories.map(item => ({
        title: item,
        value: item,
      })),
    );
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

export default CategorySelect;
