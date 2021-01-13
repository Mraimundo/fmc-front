import React, { useEffect, useState, useCallback } from 'react';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';
import getData from 'services/campaigns-manager/getCultures';
import transformer from 'services/campaigns-manager/transformers/culturesToSelectOptions';
import { Culture } from 'services/campaigns-manager/interfaces/Campaign';

interface Props {
  className?: string;
  label?: string;
  setValue(value: Culture | null): void; // (value: Option | null): void;
  value: Culture | null; // Option | null;
  placeholder?: string;
  error?: string;
}

const CultureSelect: React.FC<Props> = ({
  className,
  value,
  setValue,
  label,
  placeholder,
  error,
}) => {
  const [options, setOptions] = useState<Culture[]>([]);
  const [internalValue, setInternalValue] = useState<Option | null>(null);

  useEffect(() => {
    getData().then(data => setOptions(data));
  }, []);

  useEffect(() => {
    if (!value) {
      setInternalValue(null);
      return;
    }
    setInternalValue({ title: value.name, value: value.id.toString() });
  }, [value]);

  const loadItems = useCallback(() => {
    return transformer(options);
  }, [options]);

  const handleSetValue = useCallback(
    (v: Option | null): void => {
      if (!v) {
        setValue(null);
        return;
      }
      const foundCulture = options.find(
        item => item.id === parseInt(v.value, 0),
      );
      setValue(foundCulture || null);
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

export default CultureSelect;
