import React, { useEffect, useState, useCallback } from 'react';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';
import getData from 'services/campaigns-manager/getRegional';
import transformer from 'services/campaigns-manager/transformers/regionalToSelectOptions';

interface Props {
  className?: string;
  label?: string;
  setValue(value: Option | null): void;
  value: Option | null;
  placeholder?: string;
}

const RegionalSelect: React.FC<Props> = ({
  className,
  value,
  setValue,
  label,
  placeholder,
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
      inputRole="secondary"
    />
  );
};

export default RegionalSelect;
