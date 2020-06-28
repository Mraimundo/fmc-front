import React from 'react';
import Select from 'components/shared/Select';
import { FiMessageSquare } from 'react-icons/fi';
import { getPublicSubjectsForSelect } from 'services/contact/publicSubjects';

interface Props {
  name: string;
  className?: string;
}

const PublicSubjectsSelect: React.FC<Props> = ({ name, className }) => {
  return (
    <Select
      name={name}
      label="Assunto"
      icon={FiMessageSquare}
      loadItems={getPublicSubjectsForSelect}
      className={className}
    />
  );
};

export default PublicSubjectsSelect;
