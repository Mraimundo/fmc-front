import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
  useMemo,
  useEffect,
  ChangeEvent,
} from 'react';
import formatString from 'format-string-by-pattern';
import { useFormContext } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import {
  Container,
  InputContainer,
  Error,
  Label,
  IconContainer,
} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: 'text' | 'password';
  icon?: React.ComponentType<IconBaseProps>;
  label?: string;
  numbersOnly?: boolean;
  pattern?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  onBlur,
  onFocus,
  onChange,
  className,
  label,
  numbersOnly = false,
  pattern = '',
  type = 'text',
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { register, errors, setValue } = useFormContext();
  const inputRef = useRef<HTMLInputElement>();
  const [error, setError] = useState('');

  const onInputFocus = useCallback(
    e => {
      setIsFocused(true);
      if (typeof onFocus === 'function') {
        onFocus(e);
      }
    },
    [onFocus],
  );

  const onInputBlur = useCallback(
    ({ ...props }) => {
      setIsFocused(false);
      setIsFilled(!!inputRef.current?.value);
      if (typeof onBlur === 'function') {
        onBlur({ ...props });
      }
    },
    [onBlur],
  );

  const internalErrorControl = errors[name];
  useEffect(() => {
    setError(internalErrorControl?.message || '');
  }, [internalErrorControl]);

  const formatNumbersOnly = useCallback(
    (str: string): string => str.replace(/[^\d]/g, ''),
    [],
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void | Promise<void> => {
      let formattedValue = event.target.value;
      if (numbersOnly) {
        formattedValue = formatNumbersOnly(formattedValue);
      }
      if (pattern) {
        formattedValue = formatString(pattern, formattedValue);
      }
      setValue(name, formattedValue);
      if (typeof onChange === 'function') {
        onChange(event);
      }
    },
    [onChange, name, formatNumbersOnly, numbersOnly, setValue, pattern],
  );

  return useMemo(
    () => (
      <Container className={className}>
        {!!label && <Label>{label}</Label>}
        <InputContainer
          hasError={!!error}
          isFilled={isFilled}
          isFocused={isFocused}
          className="_inputContainer"
        >
          {Icon && (
            <IconContainer>
              <Icon size={20} />
            </IconContainer>
          )}
          <input
            autoComplete="off"
            name={name}
            type={type}
            ref={(e: HTMLInputElement) => {
              register(e);
              inputRef.current = e;
            }}
            onBlur={onInputBlur}
            onFocus={onInputFocus}
            onChange={handleChange}
            {...rest}
          />
          {!!error && (
            <Error title={error} type="error">
              <FiAlertCircle size={20} />
            </Error>
          )}
        </InputContainer>
      </Container>
    ),
    [
      isFilled,
      isFocused,
      className,
      name,
      Icon,
      onInputBlur,
      onInputFocus,
      register,
      error,
      label,
      handleChange,
      type,
      rest,
    ],
  );
};

export default Input;
