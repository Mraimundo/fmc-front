import React, { useCallback } from 'react';
import Select from 'components/shared/Select';

import { FaGraduationCap } from 'react-icons/fa';

interface Props {
  name: string;
  className?: string;
  disabled?: boolean;
  inputRole?: 'primary' | 'secondary';
}
const values = ['Solteiro', 'Casado', 'Separado', 'Divorciado', 'Viúvo'];

const GraduationLevelSelect: React.FC<Props> = ({
  name,
  className,
  disabled = false,
  inputRole = 'primary',
}) => {
  const loadItems = useCallback(() => {
    return values.map(item => ({
      value: item.toLowerCase(),
      title: item,
    }));
  }, []);

  return (
    <Select
      name={name}
      label="Grau de instrução"
      icon={FaGraduationCap}
      loadItems={loadItems}
      className={className}
      disabled={disabled}
      inputRole={inputRole}
    />
  );
};

export default GraduationLevelSelect;
