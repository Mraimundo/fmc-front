import React from 'react';
import Select from 'components/shared/Select';
import { getPublicSubjectsForSelect } from 'services/contact/disconnected/publicSubjects';

interface Props {
  name: string;
  inputRole?: 'primary' | 'secondary';
  className?: string;
}

const PublicSubjectsSelect: React.FC<Props> = ({
  name,
  className,
  inputRole = 'primary',
}) => {
  return (
    <Select
      name={name}
      label="Assunto"
      loadItems={getPublicSubjectsForSelect}
      inputRole={inputRole}
      className={className}
    />
  );
};

export default PublicSubjectsSelect;
