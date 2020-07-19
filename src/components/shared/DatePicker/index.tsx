import React, {
  useRef,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react';

import { DatePicker as MaterialDatePicker } from '@material-ui/pickers';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { ReactSVG } from 'react-svg';
import calendarIcon from 'assets/images/campaigns/calendar-icon.svg';
import { formatDate } from 'util/datetime';

import { AiFillEye } from 'react-icons/ai';
import {
  Container,
  InputContainer,
  Error,
  IconSelectContainer,
  IconContainer,
  Label,
} from './styles';

interface InputProps {
  icon?: React.ComponentType<IconBaseProps>;
  label?: string;
  inputRole?: 'primary' | 'secondary';
  value: Date | null;
  onChange(value: Date | null): void;
  className?: string;
  placeholder?: string;
}

const DatePicker: React.FC<InputProps> = ({
  icon: Icon,
  className,
  label,
  inputRole = 'primary',
  value,
  onChange,
  placeholder,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [datePickerOpened, setDatePickerOpened] = useState(false);
  const error = '';
  const inputRef = useRef<HTMLInputElement>(null);
  const [formattedValue, setFormattedValue] = useState('');

  const onInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!value);
  }, [value]);

  const handleOpenPicker = useCallback(() => {
    setDatePickerOpened(true);
    setIsFocused(true);
  }, []);

  const handleClosePicker = useCallback(() => {
    setDatePickerOpened(false);
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!value) return;
    setFormattedValue(formatDate(value));
  }, [value]);

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
          <input
            onBlur={onInputBlur}
            onFocus={onInputFocus}
            type="text"
            autoComplete="off"
            ref={inputRef}
            value={formattedValue}
            placeholder={placeholder}
          />
          <MaterialDatePicker
            value={value}
            onChange={onChange}
            format="dd/MM/yyyy"
            open={datePickerOpened}
            onClose={handleClosePicker}
            style={{ display: 'none' }}
          />
          <IconSelectContainer inputRole={inputRole}>
            <ReactSVG src={calendarIcon} onClick={handleOpenPicker} />
          </IconSelectContainer>
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
      error,
      label,
      inputRole,
      datePickerOpened,
      formattedValue,
      handleOpenPicker,
      handleClosePicker,
      onInputBlur,
      onInputFocus,
      onChange,
      value,
    ],
  );
};

export default DatePicker;
