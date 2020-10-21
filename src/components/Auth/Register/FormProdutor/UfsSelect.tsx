import React, { useEffect, useState, useCallback } from 'react';
import Select, { Option } from 'components/shared/Select';
import getData from 'services/address/getUfList';
import transformer from 'services/address/transformers/ufToSelectOptions';

interface Props {
  className?: string;
  label?: string;
  placeholder?: string;
  inputRole?: 'primary' | 'secondary';
  name: string;
}

const UfsSelect: React.FC<Props> = ({
  name,
  className,
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
    <Select
      name={name}
      label={label}
      loadItems={loadItems}
      className={className}
      placeholder={placeholder}
      inputRole={inputRole}
    />
  );
};

export default UfsSelect;
