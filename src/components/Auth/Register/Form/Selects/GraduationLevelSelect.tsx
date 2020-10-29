import React, { useCallback } from 'react';
import Select from 'components/shared/Select';

interface Props {
  name: string;
  className?: string;
  disabled?: boolean;
  inputRole?: 'primary' | 'secondary';
}

const values = ['Médio Completo', 'Superior Completo', 'Superior Incompleto'];

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
      loadItems={loadItems}
      className={className}
      disabled={disabled}
      inputRole={inputRole}
    />
  );
};

export default GraduationLevelSelect;
