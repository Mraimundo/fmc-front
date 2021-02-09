import React, { useEffect, useState, useCallback } from 'react';
import Select, { Option } from 'components/shared/Select';
import { getProtecedRolesForSelect } from 'services/role/protectedRoles';

interface Props {
  name: string;
  className?: string;
  inputRole?: 'primary' | 'secondary';
  disabled?: boolean;
  excludedRoles?: string[];
}

const ProtectedRolesSelect: React.FC<Props> = ({
  name,
  className,
  inputRole = 'primary',
  disabled = false,
  excludedRoles = []
}) => {
  const [data, setData] = useState<Option[]>([]);

  useEffect(() => {
    getProtecedRolesForSelect(excludedRoles).then(list => setData(list));
  }, [excludedRoles]);

  const loadItems = useCallback((): Option[] => {
    return data;
  }, [data]);

  return (
    <Select
      name={name}
      label="Cargo"
      loadItems={loadItems}
      className={className}
      inputRole={inputRole}
      disabled={disabled}
    />
  );
};

export default ProtectedRolesSelect;
