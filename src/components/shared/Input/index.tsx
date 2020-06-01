import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import { useFormContext } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, InputContainer, Error, Label } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: 'text' | 'password';
  icon?: React.ComponentType<IconBaseProps>;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  onBlur,
  onFocus,
  className,
  label,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { register, errors } = useFormContext();
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
          {Icon && <Icon size={20} />}
          <input
            autoComplete="off"
            name={name}
            ref={(e: HTMLInputElement) => {
              register(e);
              inputRef.current = e;
            }}
            onBlur={onInputBlur}
            onFocus={onInputFocus}
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
      rest,
      error,
      label,
    ],
  );
};

export default Input;
