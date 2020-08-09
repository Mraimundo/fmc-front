import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
  useMemo,
  useEffect,
  ChangeEvent,
} from 'react';

import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import {
  Container,
  InputContainer,
  Error,
  Label,
  IconContainer,
} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  icon?: React.ComponentType<IconBaseProps>;
  label?: string;
  error?: string;
  inputRole?: 'primary' | 'secondary';
}

const TextArea: React.FC<InputProps> = ({
  icon: Icon,
  onBlur,
  onFocus,
  className,
  label,
  error,
  inputRole = 'primary',
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

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
      <Container className={className}>
        {!!label && <Label inputRole={inputRole}>{label}</Label>}
        <InputContainer
          hasError={!!error}
          isFilled={isFilled}
          isFocused={isFocused}
          className="_inputContainer"
          inputRole={inputRole}
        >
          {Icon && (
            <IconContainer className="_iconContainer">
              <Icon size={20} />
            </IconContainer>
          )}
          <textarea
            autoComplete="off"
            ref={inputRef}
            onBlur={onInputBlur}
            onFocus={onInputFocus}
            {...rest}
          />
          {!!error && (
            <Error title={error} type="error" inputRole={inputRole}>
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
      Icon,
      onInputBlur,
      onInputFocus,
      error,
      label,
      inputRole,
      rest,
    ],
  );
};

export default TextArea;
