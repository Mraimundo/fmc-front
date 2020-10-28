import React, { useEffect, useState, useCallback } from 'react';
import { MemberType } from 'services/auth/interfaces/Participant';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';

interface Props {
  className?: string;
  label?: string;
  setValue(value: Option | null): void;
  value: Option | null;
  placeholder?: string;
  inputRole: 'primary' | 'secondary';
}

const MemberTypeSelect: React.FC<Props> = ({
  className,
  value,
  setValue,
  label,
  placeholder,
  inputRole = 'primary',
}) => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const data = Object.values(MemberType).map(item => ({
      value: item.toLowerCase(),
      title: item,
    }));
    setOptions(data);
  }, []);

  const loadItems = useCallback(() => {
    return options;
  }, [options]);

  return (
    <BaseSelect
      label={label}
      loadItems={loadItems}
      className={className}
      value={value}
      setValue={setValue}
      placeholder={placeholder}
      inputRole={inputRole}
    />
  );
};

export default MemberTypeSelect;
