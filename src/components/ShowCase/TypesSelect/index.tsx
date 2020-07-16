import React, { useEffect, useState, useCallback } from 'react';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';
import getTypes from 'services/showcase/getTypes';
import transformer from 'services/showcase/transformers/typesToSelectOptions';

interface Props {
  className?: string;
  label?: string;
  setValue(value: Option | null): void;
  value: Option | null;
}

const TypesSelect: React.FC<Props> = ({
  className,
  value,
  setValue,
  label,
}) => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    getTypes().then(data => setOptions(transformer(data)));
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
      placeholder="Tipo de cliente"
    />
  );
};

export default TypesSelect;
