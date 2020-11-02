import React, { useEffect, useState, useCallback } from 'react';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';
import getData from 'services/campaigns-manager/getCustomers';
import transformer from 'services/campaigns-manager/transformers/customersToSelectOptions';

interface Props {
  className?: string;
  label?: string;
  setValue(value: Option | null): void;
  value: Option | null;
  placeholder?: string;
  directorName?: string;
  regionalName?: string;
}

const CustomersSelect: React.FC<Props> = ({
  className,
  value,
  setValue,
  label,
  placeholder,
  directorName,
  regionalName,
}) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData({ directorName, regionalName })
      .then(data => setOptions(transformer(data)))
      .catch(() => setOptions([]))
      .finally(() => setLoading(false));
  }, [directorName, regionalName]);

  const loadItems = useCallback(() => {
    if (loading) {
      return [{ value: '-1', title: 'Carregando' }];
    }

    if (options.length > 0) {
      return options;
    }

    if (!directorName || !regionalName) {
      return [{ value: '-1', title: 'Selecione uma Diretoria e uma Regional' }];
    }

    return [{ value: '-1', title: 'Nenhum cliente encontrado' }];
  }, [options, loading, directorName, regionalName]);

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

export default CustomersSelect;
