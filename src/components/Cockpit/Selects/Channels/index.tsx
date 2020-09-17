import React, { useEffect, useState, useCallback } from 'react';
import { EstablishmentTypes, EstablishmentCategory } from 'config/constants';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';
import getData from 'services/cockpit/getChannels';
import transformer from 'services/cockpit/transformers/channelsToSelectOptions';

interface Props {
  className?: string;
  label?: string;
  setValue(value: Option | null): void;
  value: Option | null;
  placeholder?: string;
  directorName?: string;
  regionalName?: string;
  typeName?: EstablishmentTypes;
  categoryName?: EstablishmentCategory;
}

const RegionalSelect: React.FC<Props> = ({
  className,
  value,
  setValue,
  label,
  placeholder,
  directorName,
  regionalName,
  typeName,
  categoryName,
}) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData({ directorName, regionalName, typeName, categoryName })
      .then(data => setOptions(transformer(data)))
      .catch(() => setOptions([]))
      .finally(() => setLoading(false));
  }, [directorName, regionalName, typeName, categoryName]);

  const loadItems = useCallback((): Option[] => {
    if (loading) {
      return [];
    }

    if (options.length > 0) {
      return options;
    }

    return [{ value: '-1', title: 'Selecione uma Diretoria e uma Regional' }];
  }, [options, loading]);

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

export default RegionalSelect;
