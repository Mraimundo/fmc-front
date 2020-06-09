import React from 'react';
import Select from 'components/shared/Select';
import { FiMessageSquare } from 'react-icons/fi';
import { getPublicSubjectsForSelect } from 'services/contact/publicSubjects';

interface Props {
  name: string;
  inputRole?: 'primary' | 'secondary';
}

const PublicSubjectsSelect: React.FC<Props> = ({
  name,
  inputRole = 'primary',
}) => {
  return (
    <Select
      name={name}
      label="Assunto"
      icon={FiMessageSquare}
      loadItems={getPublicSubjectsForSelect}
      inputRole={inputRole}
    />
  );
};

export default PublicSubjectsSelect;
