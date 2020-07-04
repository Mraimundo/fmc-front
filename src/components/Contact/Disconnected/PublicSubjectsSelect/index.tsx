import React from 'react';
import Select from 'components/shared/Select';
import { FiMessageSquare } from 'react-icons/fi';
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
      icon={FiMessageSquare}
      loadItems={getPublicSubjectsForSelect}
      inputRole={inputRole}
      className={className}
    />
  );
};

export default PublicSubjectsSelect;
