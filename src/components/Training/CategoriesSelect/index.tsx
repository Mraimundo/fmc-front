import React, { useEffect, useState, useCallback } from 'react';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';
import getCategories from 'services/training/getCategories';
import transformer from 'services/training/transformers/categoriesToSelectOptions';

interface Props {
  className?: string;
  label?: string;
  setValue(value: Option | null): void;
  value: Option | null;
}

const CategoriesSelect: React.FC<Props> = ({
  className,
  label = 'Categoria',
  value,
  setValue,
}) => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    getCategories().then(data => setOptions(transformer(data)));
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
    />
  );
};

export default CategoriesSelect;
