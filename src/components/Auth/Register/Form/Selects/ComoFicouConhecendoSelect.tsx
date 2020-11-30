import React, { useCallback } from 'react';
import Select from 'components/shared/Select';

interface Props {
  name: string;
  className?: string;
  disabled?: boolean;
  inputRole?: 'primary' | 'secondary';
}

const values = [
  'Por meio da revenda onde compro produtos FMC',
  'Por meio da cooperativa onde compro produtos FMC',
  'Por meio de um amigo',
  'Por meio do site FMC',
  'Por meio das redes sociais',
  'Por meio da mídia',
  'Por meio da mídia, e peças publicitárias',
];

const ComoFicouConhecendoSelect: React.FC<Props> = ({
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
      label="Como ficou conhecendo o Portal Juntos FMC?"
      loadItems={loadItems}
      className={className}
      disabled={disabled}
      inputRole={inputRole}
    />
  );
};

export default ComoFicouConhecendoSelect;
