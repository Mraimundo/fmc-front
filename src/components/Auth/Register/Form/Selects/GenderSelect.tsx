import React, { useCallback } from 'react';
import Select from 'components/shared/Select';

interface Props {
  name: string;
  className?: string;
  disabled?: boolean;
  inputRole?: 'primary' | 'secondary';
}

const values = [
  { value: 'm', title: 'Masculino' },
  { value: 'f', title: 'Feminino' },
];

const GenderSelect: React.FC<Props> = ({
  name,
  className,
  disabled = false,
  inputRole = 'primary',
}) => {
  const loadItems = useCallback(() => {
    return values;
  }, []);

  return (
    <Select
      name={name}
      label="Gênero*"
      loadItems={loadItems}
      className={className}
      disabled={disabled}
      inputRole={inputRole}
    />
  );
};

export default GenderSelect;
