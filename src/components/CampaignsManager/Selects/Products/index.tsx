import React, { useEffect, useState, useCallback } from 'react';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';
import getData from 'services/campaignsManager/getProducts';
import transformer from 'services/campaignsManager/transformers/productsToSelectOptions';

interface Props {
  className?: string;
  label?: string;
  setValue(value: Option | null): void;
  value: Option | null;
  placeholder?: string;
  segment?: string;
  error?: string;
}

const ProductsSelect: React.FC<Props> = ({
  className,
  value,
  setValue,
  label,
  placeholder,
  segment = '',
  error,
}) => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    getData(segment).then(data => setOptions(transformer(data)));
  }, [segment]);

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
      error={error}
    />
  );
};

export default ProductsSelect;
