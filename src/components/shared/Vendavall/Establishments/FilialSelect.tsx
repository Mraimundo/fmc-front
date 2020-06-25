import React, { useState, useEffect, useCallback } from 'react';
import Select, { Option } from 'components/shared/Select';
import { FiLink } from 'react-icons/fi';
import getSubsidiaryList from 'services/establishment/getSubsidiaryList';

interface Props {
  name: string;
  className?: string;
  inputRole?: 'primary' | 'secondary';
  establishmentId: number;
}

const FilialSelect: React.FC<Props> = ({
  name,
  className,
  inputRole = 'primary',
  establishmentId,
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
      icon={FiLink}
      loadItems={loadItems}
      className={className}
      inputRole={inputRole}
    />
  );
};

export default FilialSelect;
