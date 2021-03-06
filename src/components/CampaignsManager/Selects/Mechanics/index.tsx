import React, { useEffect, useState, useCallback } from 'react';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';
import getData from 'services/campaigns-manager/getMechanics';
import transformer from 'services/campaigns-manager/transformers/mechanicsToSelectOptions';
import { Mechanic } from 'services/campaigns-manager/interfaces/Campaign';

interface Props {
  className?: string;
  label?: string;
  setValue(value: Mechanic | null): void; // (value: Option | null): void;
  value: Mechanic | null; // Option | null;
  placeholder?: string;
  error?: string;
}

const MechanicsSelect: React.FC<Props> = ({
  className,
  value,
  setValue,
  label,
  placeholder,
  error,
}) => {
  const [options, setOptions] = useState<Mechanic[]>([]);
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
      const foundMechanic = options.find(
        item => item.id === parseInt(v.value, 0),
      );
      setValue(foundMechanic || null);
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

export default MechanicsSelect;
