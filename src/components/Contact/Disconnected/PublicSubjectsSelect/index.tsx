import React from 'react';
import Select from 'components/shared/Select';
import { FiMessageSquare } from 'react-icons/fi';
import { getPublicSubjectsForSelect } from 'services/contact/publicSubjects';

interface Props {
  name: string;
}

const PublicSubjectsSelect: React.FC<Props> = ({ name }) => {
  return (
    <Select
      name={name}
      label="Assunto"
      icon={FiMessageSquare}
      loadItems={getPublicSubjectsForSelect}
    />
  );
};

export default PublicSubjectsSelect;
