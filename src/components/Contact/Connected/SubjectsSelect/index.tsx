import React from 'react';
import Select from 'components/shared/Select';
import { FiMessageSquare } from 'react-icons/fi';
import { getPrivateSubjectsForSelect } from 'services/contact/privateSubjects';

interface Props {
  name: string;
  className?: string;
}

const SubjectsSelect: React.FC<Props> = ({ name, className }) => {
  return (
    <Select
      name={name}
      label="Assunto"
      icon={FiMessageSquare}
      loadItems={getPrivateSubjectsForSelect}
      className={className}
    />
  );
};

export default SubjectsSelect;
