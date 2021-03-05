import React, { useEffect, useState, useCallback } from 'react';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';
import { getCitiesByName } from 'services/weather';
import { City } from 'services/weather/interfaces';

interface Props {
  className?: string;
  label?: string;
  setValue(value: City | null): void; // (value: Option | null): void;
  value: City | null; // Option | null;
  placeholder?: string;
  error?: string;
}

const CitySelect: React.FC<Props> = ({
  className,
  value,
  setValue,
  label,
  placeholder,
  error,
}) => {
  const [options, setOptions] = useState<City[]>([]);
  const [internalValue, setInternalValue] = useState<Option | null>(null);
  const [searchParams, setSearchParams] = useState('');

  useEffect(() => {
    if (!value) {
      setInternalValue(null);
      return;
    }
    setInternalValue({ title: value.name, value: value.name });
  }, [value]);

  useEffect(() => {
    if (searchParams.length < 3) {
      setOptions([]);
      return;
    }
    getCitiesByName(searchParams)
      .then(data => setOptions(data))
      .catch(() => setOptions([]));
  }, [searchParams]);

  const loadItems = useCallback(
    (search: string): Option[] => {
      if (search.length < 3) {
        setSearchParams('');
        return [{ value: '-1', title: 'Digite pelo menos 3 caracteres' }];
      }

      setSearchParams(search);

      if (options.length > 0) {
        return options.map(item => ({ title: item.name, value: item.name }));
      }

      return [{ value: '-1', title: 'Nenhuma cidade encontrada' }];
    },
    [options],
  );

  const handleSetValue = useCallback(
    (v: Option | null): void => {
      if (!v) {
        setValue(null);
        return;
      }
      const foundCity = options.find(item => item.name === v.value);
      setValue(foundCity || null);
    },
    [setValue, options],
  );

  return (
    <BaseSelect
      label={label}
      loadItems={loadItems}
      className={className}
      value={internalValue}
      setValue={handleSetValue}
      placeholder={placeholder}
      inputRole="secondary"
      error={error}
    />
  );
};

export default CitySelect;
