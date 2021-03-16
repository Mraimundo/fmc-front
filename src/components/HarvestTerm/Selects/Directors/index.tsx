import React, { useEffect, useState, useCallback } from 'react';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';
import getData from 'services/cockpit/getDirectors';
import transformer from 'services/cockpit/transformers/directorsToSelectOptions';

interface DirectorsSelectProps {
  className?: string;
  label?: string;
  setValue(value: Option | null): void;
  value: Option | null;
  placeholder?: string;
}

const DirectorsSelect: React.FC<DirectorsSelectProps> = ({
  className,
  value,
  setValue,
  label,
  placeholder,
}) => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const fetchDirectors = async () => {
      const result = await getData();
      setOptions(transformer(result));
    };

    fetchDirectors();
  }, []);

  const loadOptions = useCallback(() => {
    return options;
  }, [options]);

  return (
    <BaseSelect
      label={label}
      loadItems={loadOptions}
      className={className}
      value={value}
      setValue={setValue}
      placeholder={placeholder}
      inputRole="secondary"
    />
  );
};

export default DirectorsSelect;
