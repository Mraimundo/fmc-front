import React from 'react';
import Select from 'components/shared/Select';
import { getPrivateSubjectsForSelect } from 'services/contact/connected/privateSubjects';

interface Props {
  name: string;
  className?: string;
}

const SubjectsSelect: React.FC<Props> = ({ name, className }) => {
  return (
    <Select
      name={name}
      label="Assunto"
      loadItems={getPrivateSubjectsForSelect}
      className={className}
    />
  );
};

export default SubjectsSelect;
