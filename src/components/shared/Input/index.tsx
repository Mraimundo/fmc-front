import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import { ThemeContext } from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: 'text' | 'password';
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  onBlur,
  onFocus,
  className,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { register, errors } = useFormContext();
  const inputRef = useRef<HTMLInputElement>();

  const theme = useContext(ThemeContext);

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

  return useMemo(
    () => (
      <Container
        hasError={!!errors[name]}
        isFilled={isFilled}
        isFocused={isFocused}
        className={className}
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
        {!!errors[name] && (
          <Error title={errors[name].message} type="error">
            <FiAlertCircle color={theme.input.errorIconColor} size={20} />
          </Error>
        )}
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
      theme.input,
      register,
      rest,
      errors,
    ],
  );
};

export default Input;
