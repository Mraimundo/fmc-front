import React, { useState, useEffect, useContext, useRef, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import { FiAlertCircle } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons';
import { makeStyles } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';
import UiAutocomplete from '@material-ui/lab/Autocomplete';

import {
  Container,
  InputContainer,
  Error,
  Label,
  IconContainer,
  Content,
} from './styles';

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
  const theme = useContext(ThemeContext);
  const useStyles = makeStyles({
    listbox: {
      background: theme.input[inputRole].backgroundColor,
    },
    option: {
      color: theme.input[inputRole].fontColor,
    },
    noOptions: {
      background: theme.input[inputRole].backgroundColor,
      color: theme.input[inputRole].fontColor,
    },
    input: {
      border: 'none',
    },
    popupIndicator: {
      color: theme.input[inputRole].iconColor,
    },
    clearIndicator: {
      color: theme.input[inputRole].iconColor,
    },
    root: {
      background: 'transparent',
      width: '100%',
      borderRadius: theme.input[inputRole].borderRadius,
      border: 'none',
    },
  });

  const inputRef = useRef<HTMLInputElement>();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState('');

  const timeout = useRef<number>();

  useEffect(() => {
    const load = async (): Promise<void> => {
      if (!open) {
        return;
      }
      setLoading(true);
      const items = await loadItems(inputValue);
      setOptions(items);
      setLoading(false);
    };

    timeout.current = setTimeout(() => {
      load();
    }, 500);
    return () => clearTimeout(timeout.current);
  }, [loadItems, inputValue, open]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const classes = useStyles();

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
    setIsFilled(!!op?.value);
  }, [op]);

  useEffect(() => {
    register({ name });
  }, [register, name]);
  /* useEffect(() => {
    console.log(op);
    if (op === undefined) {
      setInputValue('');
      setInternalValue(null);
      setIsFilled(false);
      return;
    }
    if (internalValue && internalValue.value) return;
    setInternalValue({
      title: op || '',
      value: op || '',
    });
    setIsFilled(op !== '');
  }, [op]); */

  return useMemo(
    () => (
      <Container className={className}>
        {!!label && <Label inputRole={inputRole}>{label}</Label>}
        <InputContainer
          hasError={!!error}
          isFilled={isFilled}
          isFocused={open}
          className="_inputContainer"
          inputRole={inputRole}
        >
          <UiAutocomplete<Option>
            disabled={disabled}
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            classes={classes}
            getOptionSelected={(option, value) =>
              option?.value === value?.value}
            options={options}
            loading={loading}
            onChange={(event, value) => {
              setValue(name, value);
              !!error && triggerValidation();
            }}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            value={op}
            getOptionLabel={option => option.title}
            renderInput={params => (
              <Content>
                <TextField
                  {...params}
                  placeholder={placeholder}
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <>
                        {Icon && (
                          <IconContainer
                            style={{ paddingLeft: '7px' }}
                            className="_iconContainer"
                          >
                            <Icon size={20} />
                          </IconContainer>
                        )}
                      </>
                    ),
                    endAdornment: (
                      <>
                        {loading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                        {!!error && (
                          <Error
                            title={error}
                            type="error"
                            inputRole={inputRole}
                          >
                            <FiAlertCircle size={20} />
                          </Error>
                        )}
                      </>
                    ),
                  }}
                />
              </Content>
            )}
          />
        </InputContainer>
      </Container>
    ),
    [
      Icon,
      className,
      classes,
      error,
      isFilled,
      label,
      loading,
      name,
      open,
      options,
      setValue,
      triggerValidation,
      inputRole,
      disabled,
      placeholder,
      op,
    ],
  );
};

export default Select;
