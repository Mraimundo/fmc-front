import React, { useEffect, useState, useCallback } from 'react';
import Select, { Option } from 'components/shared/Select';
import { FiLink } from 'react-icons/fi';
import { getProtecedRolesForSelect } from 'services/role/protectedRoles';

interface Props {
  name: string;
  className?: string;
  inputRole?: 'primary' | 'secondary';
  disabled?: boolean;
}

const ProtectedRolesSelect: React.FC<Props> = ({
  name,
  className,
  inputRole = 'primary',
  disabled = false,
}) => {
  const [data, setData] = useState<Option[]>([]);

  useEffect(() => {
    getProtecedRolesForSelect().then(list => setData(list));
  }, []);

  const loadItems = useCallback((): Option[] => {
    return data;
  }, [data]);

  return (
    <Select
      name={name}
      label="Cargo"
      icon={FiLink}
      loadItems={loadItems}
      className={className}
      inputRole={inputRole}
      disabled={disabled}
    />
  );
};

export default ProtectedRolesSelect;
