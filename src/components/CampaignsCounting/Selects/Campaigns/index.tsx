import React, { useEffect, useState, useCallback } from 'react';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';
import getData, { Campaign } from 'services/campaigns-counting/getCampaigns';

interface Props {
  className?: string;
  label?: string;
  setValue(value: Campaign | null): void; // (value: Option | null): void;
  value: Campaign | null; // Option | null;
  placeholder?: string;
  error?: string;
}

const CampaignsSelect: React.FC<Props> = ({
  className,
  value,
  setValue,
  label,
  placeholder,
  error,
}) => {
  const [options, setOptions] = useState<Campaign[]>([]);
  const [internalValue, setInternalValue] = useState<Option | null>(null);

  useEffect(() => {
    getData({ limit: 1000 }).then(data => setOptions(data.data));
  }, []);

  useEffect(() => {
    if (!value) {
      setInternalValue(null);
      return;
    }
    setInternalValue({
      title: value.campaign,
      value: value.id?.toString() || '0',
    });
  }, [value]);

  const loadItems = useCallback(() => {
    return options.map(item => ({
      value: item.id?.toString() || '0',
      title: item.campaign,
    }));
  }, [options]);

  const handleSetValue = useCallback(
    (v: Option | null): void => {
      if (!v) {
        setValue(null);
        return;
      }
      const foundCampaign = options.find(
        item => item.id === parseInt(v.value, 0),
      );
      setValue(foundCampaign || null);
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

export default CampaignsSelect;
