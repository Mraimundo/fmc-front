import React, { useState, useEffect, useMemo } from 'react';
import { IconBaseProps } from 'react-icons';
import { useFormContext } from 'react-hook-form';

import SelectBase from './BaseSelect';

export interface Option {
  value: string;
  title: string;
}

interface SelectProps {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  label?: string;
  className?: string;
  loadItems(search: string): Option[] | Promise<Option[]>;
  inputRole?: 'primary' | 'secondary';
  placeholder?: string;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  name,
  icon: Icon,
  className,
  label,
  loadItems,
  inputRole = 'primary',
  placeholder = '',
  disabled = false,
}) => {
  const [error, setError] = useState('');

  const {
    register,
    errors,
    setValue,
    triggerValidation,
    watch,
  } = useFormContext();

  const internalErrorControl = errors[name];
  useEffect(() => {
    setError(internalErrorControl?.message || '');
  }, [internalErrorControl]);

  const op = watch(name) || null;

  useEffect(() => {
    register({ name });
  }, [register, name]);

  return useMemo(
    () => (
      <SelectBase
        icon={Icon}
        label={label}
        className={className}
        inputRole={inputRole}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        triggerValidation={triggerValidation}
        value={op}
        setValue={(value: Option | null) => setValue(name, value)}
        loadItems={loadItems}
      />
    ),
    [
      name,
      Icon,
      label,
      className,
      inputRole,
      placeholder,
      disabled,
      error,
      triggerValidation,
      op,
      setValue,
      loadItems,
    ],
  );
};

export default Select;
