import React, { useState, useEffect, useCallback } from 'react';
import Select, { Option } from 'components/shared/Select';
import getSubsidiaryList from 'services/establishment/getSubsidiaryList';

interface Props {
  name: string;
  className?: string;
  inputRole?: 'primary' | 'secondary';
  establishmentId: number;
  disabled?: boolean;
}

const FilialSelect: React.FC<Props> = ({
  name,
  className,
  inputRole = 'primary',
  establishmentId,
  disabled = false,
}) => {
  const [data, setData] = useState<Option[]>([]);

  useEffect(() => {
    getSubsidiaryList(establishmentId).then(list =>
      setData(
        list.map(item => ({
          title: `${item.name} (${item.city})`,
          value: `${item.id}`,
        })),
      ),
    );
  }, [establishmentId]);

  const loadItems = useCallback((): Option[] => {
    return data;
  }, [data]);

  return (
    <Select
      name={name}
      label="Filial"
      loadItems={loadItems}
      className={className}
      inputRole={inputRole}
      disabled={disabled}
    />
  );
};

export default FilialSelect;
