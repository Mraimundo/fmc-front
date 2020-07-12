import React from 'react';
import Select from 'components/shared/Select';
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
      loadItems={getPublicRolesForSelect}
      className={className}
    />
  );
};

export default PublicRolesSelect;
