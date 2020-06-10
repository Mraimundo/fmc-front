import React from 'react';
import Select from 'components/shared/Select';
import { FiLink } from 'react-icons/fi';
import { getPublicRolesForSelect } from 'services/role/publicRoles';

interface Props {
  name: string;
  className?: string;
}

const PublicRolesSelect: React.FC<Props> = ({ name, className }) => {
  return (
    <Select
      name={name}
      label="Assunto"
      icon={FiLink}
      loadItems={getPublicRolesForSelect}
      className={className}
    />
  );
};

export default PublicRolesSelect;
