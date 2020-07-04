import React from 'react';
import Select from 'components/shared/Select';
import { FiMessageSquare } from 'react-icons/fi';
import { getPrivateCategoriesForSelect } from 'services/contact/connected/privateCategories';

interface Props {
  name: string;
  className?: string;
  subjectId: number;
}

const CaterogiesSelect: React.FC<Props> = ({ name, className, subjectId }) => {
  return (
    <Select
      name={name}
      label="Categoria"
      icon={FiMessageSquare}
      loadItems={() => getPrivateCategoriesForSelect(subjectId)}
      className={className}
    />
  );
};

export default CaterogiesSelect;
