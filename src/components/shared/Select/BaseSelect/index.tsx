import React, { useState, useEffect, useContext, useRef, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import { FiAlertCircle } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons';
import UiAutocomplete from '@material-ui/lab/Autocomplete';
import { Option } from '../index';

import {
  Container,
  InputContainer,
  Error,
  Label,
  IconContainer,
  Content,
} from '../styles';
import { useStyles } from './styles';

interface SelectProps {
  loadItems(search: string): Option[] | Promise<Option[]>;
  setValue(value: Option | null): void;
  value: Option | null;
  error?: string;
  icon?: React.ComponentType<IconBaseProps>;
  label?: string;
  className?: string;
  triggerValidation?(): void;
  inputRole?: 'primary' | 'secondary';
  placeholder?: string;
  disabled?: boolean;
}

const BaseSelect: React.FC<SelectProps> = ({
  icon: Icon,
  className,
  label,
  loadItems,
  inputRole = 'primary',
  triggerValidation,
  placeholder = '',
  disabled = false,
  error = '',
  setValue,
  value,
}) => {
  const theme = useContext(ThemeContext);
  const classes = useStyles(theme, inputRole);

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isFilled, setIsFilled] = useState(false);

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

  useEffect(() => {
    setIsFilled(!!value?.value);
  }, [value]);

  return useMemo(
    () => (
      <Container className={className}>
        {!!label && (
          <Label className="_label" inputRole={inputRole}>
            {label}
          </Label>
        )}
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
            noOptionsText=""
            loadingText="Carregando"
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            classes={classes}
            getOptionSelected={(option, v) => option?.value === v?.value}
            options={options}
            loading={loading}
            onChange={(event, v) => {
              setValue(v);
              !!error &&
                typeof triggerValidation === 'function' &&
                triggerValidation();
            }}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            value={value}
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
      disabled,
      error,
      inputRole,
      isFilled,
      label,
      loading,
      open,
      options,
      placeholder,
      setValue,
      triggerValidation,
      value,
    ],
  );
};

export default BaseSelect;
