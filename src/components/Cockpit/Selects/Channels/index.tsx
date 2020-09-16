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

  useEffect(() => {
    getData({ directorName, regionalName, typeName, categoryName }).then(data =>
      setOptions(transformer(data)),
    );
  }, [directorName, regionalName, typeName, categoryName]);

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

export default RegionalSelect;
