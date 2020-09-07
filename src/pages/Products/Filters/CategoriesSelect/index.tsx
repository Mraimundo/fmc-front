import React, { useEffect, useState, useCallback } from 'react';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';
import getData from 'services/products/getCategories';
import { Category } from 'services/products/interfaces';

interface Props {
  className?: string;
  label?: string;
  setValue(value: Option | null): void;
  value: Option | null;
  placeholder?: string;
}

const CategoriesProductsSelect: React.FC<Props> = ({
  className,
  value,
  setValue,
  label,
  placeholder,
}) => {
  const [options, setOptions] = useState<Option[]>([]);

  const transformer = useCallback((data: Category[]): Option[] => {
    return data.map(item => ({
      value: item.id.toString(),
      title: item.name,
    }));
  }, []);

  useEffect(() => {
    getData().then(data => setOptions(transformer(data)));
  }, [transformer]);

  useEffect(() => {
    if (!options || options.length === 0) return;

    setValue(options[0]);
  }, [options, setValue]);

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

export default CategoriesProductsSelect;
