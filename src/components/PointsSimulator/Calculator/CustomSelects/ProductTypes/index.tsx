import React, { useEffect, useState, useCallback } from 'react';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';
import { getProductTypes } from 'services/points-simulator/index';

interface Props {
  className?: string;
  label?: string;
  setValue(value: Option | null): void;
  value: Option | null;
  placeholder?: string;
}

const ChannelsSelect: React.FC<Props> = ({
  className,
  value,
  setValue,
  label,
  placeholder,
}) => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    getProductTypes().then(data =>
      setOptions(
        data.map(({ id, name }) => ({ value: id.toString(), title: name })),
      ),
    );
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

export default ChannelsSelect;
