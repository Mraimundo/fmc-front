import React, { useEffect, useState, useCallback } from 'react';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';
import { getHarvests } from 'services/harvest-term';
import { transformToSelectOptions } from 'services/harvest-term/transformers';
import { formatDate } from 'util/datetime';

interface HarvestSelectProps {
  className?: string;
  label?: string;
  setValue(value: Option | null): void;
  value: Option | null;
  placeholder?: string;
  participantCpf: string;
}

const HarvestSelect: React.FC<HarvestSelectProps> = ({
  className,
  label,
  setValue,
  value,
  placeholder,
  participantCpf,
}) => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const fetchHarvests = async () => {
      const result = await getHarvests(participantCpf);
      const finded = result.find(
        harvest =>
          new Date(formatDate(harvest.startDate, 'yyyy-MM-dd')) <= new Date() &&
          new Date(formatDate(harvest.endDate, 'yyyy-MM-dd')) >= new Date(),
      );

      setOptions(transformToSelectOptions(result));

      if (finded) {
        setValue({
          title: finded.title,
          value: finded.id.toString(),
        });
      }
    };

    fetchHarvests();
  }, [participantCpf, setValue]);

  const loadOptions = useCallback(() => {
    return options;
  }, [options]);

  return (
    <BaseSelect
      label={label}
      loadItems={loadOptions}
      className={className}
      value={value}
      setValue={setValue}
      placeholder={placeholder}
      inputRole="secondary"
      disableClearable
    />
  );
};

export default HarvestSelect;
