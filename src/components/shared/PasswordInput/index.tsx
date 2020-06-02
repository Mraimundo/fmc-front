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

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import {
  Container,
  InputContainer,
  Error,
  EyeContainer,
  IconContainer,
  Label,
} from './styles';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  label?: string;
}

const PasswordInput: React.FC<InputProps> = ({
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
  const [type, setType] = useState('password');
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

  const handleEyeClick = useCallback(isVisible => {
    setType(isVisible ? 'text' : 'password');
  }, []);

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
          {Icon && (
            <IconContainer className="_iconContainer">
              <Icon size={20} />
            </IconContainer>
          )}
          <input
            name={name}
            ref={(e: HTMLInputElement) => {
              register(e);
              inputRef.current = e;
            }}
            onBlur={onInputBlur}
            onFocus={onInputFocus}
            type={type}
            autoComplete="off"
            {...rest}
          />
          <EyeContainer>
            {type === 'text' ? (
              <AiFillEye size={26} onClick={() => handleEyeClick(false)} />
            ) : (
              <AiFillEyeInvisible
                size={26}
                onClick={() => handleEyeClick(true)}
              />
            )}
          </EyeContainer>
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
      type,
      handleEyeClick,
      label,
    ],
  );
};

export default PasswordInput;
