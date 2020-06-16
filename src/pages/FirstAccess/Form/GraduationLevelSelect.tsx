import React, { useCallback } from 'react';
import Select from 'components/shared/Select';

interface Props {
  name: string;
  className?: string;
  disabled?: boolean;
  onChange(y: number): void;
}

const Years = ['2017', '2018', '2019', '2020'];

const GraduationLevelSelect: React.FC<Props> = ({
  name,
  className,
  disabled = false,
  onChange,
}) => {
  const loadItems = useCallback((search = '') => {
    return Years.filter(year => year.includes(search)).map(year => ({
      value: year,
      title: year,
    }));
  }, []);

  return (
    <Select
      name={name}
      label="Ano"
      loadItems={loadItems}
      className={className}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default GraduationLevelSelect;
