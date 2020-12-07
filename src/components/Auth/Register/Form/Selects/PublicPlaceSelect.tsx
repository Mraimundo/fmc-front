import React, { useCallback } from 'react';
import Select from 'components/shared/Select';

interface Props {
  name: string;
  className?: string;
  disabled?: boolean;
  inputRole?: 'primary' | 'secondary';
}

const values = [
  'Avenida',
  'Estrada',
  'Lote',
  'Rodovia',
  'Rua',
  'Travessa',
  'Viela',
];

const PublicPlaceSelect: React.FC<Props> = ({
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
      label="Tipo de Logradouro*"
      loadItems={loadItems}
      className={className}
      disabled={disabled}
      inputRole={inputRole}
    />
  );
};

export default PublicPlaceSelect;
