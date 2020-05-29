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

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Container, Error, EyeContainer, IconContainer } from './styles';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const PasswordInput: React.FC<InputProps> = ({
  name,
  icon: Icon,
  onBlur,
  onFocus,
  className,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [type, setType] = useState('text');
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

  const handleEyeClick = useCallback(isVisible => {
    setType(isVisible ? 'text' : 'password');
  }, []);

  return useMemo(
    () => (
      <Container
        hasError={!!errors[name]}
        isFilled={isFilled}
        isFocused={isFocused}
        className={className}
      >
        {Icon && (
          <IconContainer>
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
            <AiFillEye
              size={26}
              color={theme.input.iconColor}
              onClick={() => handleEyeClick(false)}
            />
          ) : (
            <AiFillEyeInvisible
              size={26}
              color={theme.input.iconColor}
              onClick={() => handleEyeClick(true)}
            />
          )}
        </EyeContainer>
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
      type,
      handleEyeClick,
    ],
  );
};

export default PasswordInput;
