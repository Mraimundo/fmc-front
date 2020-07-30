import React, { useEffect, useState, useCallback } from 'react';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';
import getData from 'services/campaignsManager/getAudience';
import transformer from 'services/campaignsManager/transformers/audienceToSelectOptions';
import { Audience } from 'services/campaignsManager/interfaces/Campaign';

interface Props {
  className?: string;
  label?: string;
  setValue(value: Audience | null): void;
  value: Audience | null;
  placeholder?: string;
}

const AudienceSelect: React.FC<Props> = ({
  className,
  value,
  setValue,
  label,
  placeholder,
}) => {
  const [options, setOptions] = useState<Audience[]>([]);
  const [internalValue, setInternalValue] = useState<Option | null>(null);

  useEffect(() => {
    getData().then(data => setOptions(data));
  }, []);

  useEffect(() => {
    if (!value) {
      setInternalValue(null);
      return;
    }
    setInternalValue({
      title: value.customer.name,
      value: value.customer.id.toString(),
    });
  }, [value]);

  const handleSetValue = useCallback(
    (v: Option | null): void => {
      if (!v) {
        setValue(null);
        return;
      }
      const foundCustomer = options.find(
        item => item.customer.id === parseInt(v.value, 0),
      );
      setValue(foundCustomer || null);
    },
    [setValue, options],
  );

  const loadItems = useCallback(() => {
    return transformer(options);
  }, [options]);

  return (
    <BaseSelect
      label={label}
      loadItems={loadItems}
      className={className}
      value={internalValue}
      setValue={handleSetValue}
      placeholder={placeholder}
      inputRole="secondary"
    />
  );
};

export default AudienceSelect;
