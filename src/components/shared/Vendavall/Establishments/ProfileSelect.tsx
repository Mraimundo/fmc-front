import React, { useState, useEffect, useCallback } from 'react';
import { Option } from 'components/shared/Select';
import Select from 'components/shared/Select/BaseSelect';

interface Props {
  className?: string;
  inputRole?: 'primary' | 'secondary';
  disabled?: boolean;
  label?: string;
  setValue(value: Option | null): void;
  value: Option | null;
  placeholder?: string;
}

const ProfileSelect: React.FC<Props> = ({
  className,
  inputRole = 'primary',
  disabled = false,
  label,
  setValue,
  value,
  placeholder,
}) => {
  const [data, setData] = useState<Option[]>([]);

  useEffect(() => {
    setData([
      {
        title: 'Focal Point',
        value: '1',
      },
      {
        title: 'Participante',
        value: '0',
      },
    ]);
  }, []);

  const loadItems = useCallback((): Option[] => {
    return data;
  }, [data]);

  return (
    <Select
      label={label}
      loadItems={loadItems}
      className={className}
      inputRole={inputRole}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      setValue={setValue}
    />
  );
};

export default ProfileSelect;
