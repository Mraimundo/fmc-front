import React from 'react';
import Select from 'components/shared/Select';
import { FiLink } from 'react-icons/fi';
import { getPublicRolesForSelect } from 'services/role/publicRoles';

interface Props {
  name: string;
  className?: string;
  inputRole?: 'primary' | 'secondary';
}

const FilialSelect: React.FC<Props> = ({
  name,
  className,
  inputRole = 'primary',
}) => {
  return (
    <Select
      name={name}
      label="Filial"
      icon={FiLink}
      loadItems={getPublicRolesForSelect}
      className={className}
      inputRole={inputRole}
    />
  );
};

export default FilialSelect;
